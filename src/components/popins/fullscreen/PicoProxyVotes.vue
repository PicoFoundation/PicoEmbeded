<template>
	<section class="pop-in">
		<section>
			<section class="head">
				<!-- TODO: Leaving untranslated texts here since this is going to be removed -->
				<figure class="icon font icon-flow-tree" style="padding-top:7px;"></figure>
				<figure class="subtitle">{{account.sendable()}}</figure>
				<figure class="title">Proxy Votes</figure>
			</section>

			<section class="revoter" v-if="!isHardware">
				<section class="split-inputs">
					<section class="currently-voted" v-if="hasRecurring">
						You are proxied to <span class="voting-for">{{hasRecurring.proxy}}</span>
						<br>
						<Button small="1" text="Remove Auto-Proxy" @click.native="unrevote" />
					</section>

					<section class="auto-vote split-inputs">
						<Switcher :state="autoVote" @click.native="autoVote = !autoVote" />
						<section class="details">
							<figure class="title">Do you want to automatically re-proxy every 7 days?</figure>
							<p>If you enable this, accepting the initial transaction also accepts all future transactions too.</p>
						</section>
					</section>
				</section>
			</section>

			<section class="transfer">
				<section class="boxes">
					<section class="box nested account-selector" @click="selectProxy">
						<section>
							<figure class="name">Select a known proxy</figure>
						</section>
						<figure class="chevron fas fa-caret-square-down"></figure>
					</section>
				</section>
			</section>

			<figure class="or"><figure class="text">or</figure></figure>

			<Input placeholder="Enter the account name of a proxy"
					:text="selectedProxy"
					v-on:changed="x => selectedProxy = x" />

		</section>

		<ActionBar :buttons-left="[{text:'Cancel', click:() => returnResult(false)}]" :buttons-right="[{text:`Set Proxy`, blue:true, click:() => setProxy()}]" />
	</section>
</template>

<script>
	import { mapActions, mapGetters, mapState } from 'vuex'
	import '../../../styles/popins.scss';
	import PopupService from "../../../services/utility/PopupService";
	import {Popup} from "../../../models/popups/Popup";
	import {Blockchains} from "@walletpack/core/models/Blockchains";
	import PluginRepository from "@walletpack/core/plugins/PluginRepository";
	import ObjectHelpers from "@walletpack/core/util/ObjectHelpers";
	import RecurringService from "../../../services/utility/RecurringService";
	import {GET} from "@walletpack/core/services/apis/BackendApiService";
	import * as UIActions from "../../../store/ui_actions";
	require('../../../styles/transfers.scss')

	export default {
		props:['popin'],
		data () {return {
			proxies:{},
			selectedProxy:null,
			autoVote:true,
			proxy:'',
		}},
		mounted(){
			if(this.isHardware) this.autoVote = false;
			setTimeout(async () => {
				if(PluginRepository.plugin(Blockchains.PICOIO).isEndorsedNetwork(this.account.network())){
					this.proxies = await Promise.race([
						new Promise((resolve) => setTimeout(() => resolve([]), 3000)),
						GET(`proxies`).catch(() => [])
					]);
				}
			});

		},
		computed:{
			...mapState([
				'scatter'
			]),
			...mapGetters([
				'keypairs',
				'accounts',
			]),
			account(){
				return this.accounts.find(x => x.unique() === this.popin.data.props.account.unique());
			},
			proxyList(){
				if(!this.proxies.hasOwnProperty(this.blockchainName(Blockchains.PICOIO))) return [];
				return ObjectHelpers.shuffle(this.proxies[this.blockchainName(Blockchains.PICOIO)].map(proxy => ({
					id:proxy.account,
					title:proxy.name,
					description:proxy.description,
				})));
			},
			isHardware(){
				return !!this.account.keypair().external
			},
			hasRecurring(){
				if(!this.scatter.recurring) return;
				return this.scatter.recurring.proxies.find(x => x.account === this.account.identifiable())
			}
		},
		methods:{
			returnResult(truthy){
				this.popin.data.callback(truthy);
				this[UIActions.RELEASE_POPUP](this.popin);
			},
			unrevote(){
				RecurringService.removeProxies([this.account]);
			},
			async setProxy(){
				const plugin = PluginRepository.plugin(Blockchains.PICOIO);
				const proxy = this.selectedProxy ? this.selectedProxy : '';
				const result = await plugin.proxyVote(this.account, proxy, true);
				if(result) {
					PopupService.push(Popup.transactionSuccess(Blockchains.PICOIO, result));

					if(this.selectedProxy && this.selectedProxy.length){
						if(this.autoVote && this.selectedProxy) await RecurringService.addProxy(this.account, this.selectedProxy);
						else await RecurringService.removeProxies([this.account]);
					} else {
						await RecurringService.removeProxies([this.account])
					}

				}

				this.returnResult(true)
			},
			selectProxy(){
				PopupService.push(Popup.selectFromList('Select Proxy', this.proxyList, proxy => {
					if(!proxy) return;
					this.selectedProxy = proxy.id;
				}))
			},

			...mapActions([
				UIActions.RELEASE_POPUP
			])
		},
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	@import "../../../styles/variables";

	.transfer {
		height:auto;
		text-align:left;

		.box, .boxes {
			width:100%;
		}
	}

	.revoter {
		max-width:600px;
		margin-bottom:40px;

		.currently-voted {
			max-width:300px;
			text-align:left;
			padding-right:20px;
			font-size: $medium;

			.voting-for {
				font-weight: bold;
				color:$blue;
			}

			button {
				margin-top:10px;
			}
		}

		.auto-vote {
			margin:0 auto;
			display:flex;
			justify-content: center;
			border:1px solid $blue;
			border-radius:$radius;
			padding:20px;

			.details {
				padding-left:20px;
				text-align:left;

				.title {
					font-size: $small;
					margin-bottom:5px;
				}

				p {
					margin:0;
					font-size: $tiny;
				}
			}
		}
	}



</style>
