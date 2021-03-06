<template>
	<section class="import-hardware">
		<section class="split-inputs">
			<section style="flex:1;">
				<label>{{$t('panels.keypair.selectHardware')}}</label>
				<Select :selected="hardwareType" bordered="1" style="flex:1;"
				        :options="externalWallets"
				        v-on:selected="changeHardwareType" />
			</section>


			<section v-if="availableBlockchains.length > 1" style="flex:1;">
				<label>{{$t('panels.keypair.availableHardwareChains')}}</label>
				<Select :selected="blockchain" bordered="1"
				        :parser="x => blockchainName(x)"
				        :options="availableBlockchains"
				        v-on:selected="selectBlockchain" />
			</section>
		</section>

		<br>

		<Input :disabled="gettingAvailableKeys" v-if="external" :text="external.addressIndex"
		       v-on:changed="x => external.addressIndex = x"
		       type="number"
		       :label="$t('panels.keypair.hardwareIndex')" />

		<section class="key-list">
			<section class="key-row" v-for="item in availableKeys" @click="importKey(item)">
				<figure class="index">{{item.index}}</figure>
				<figure class="key">{{item.key}}</figure>
			</section>
		</section>

		<figure class="loading-keys" v-if="gettingAvailableKeys">
			<i class="icon-spin4 animate-spin"></i>
		</figure>
	</section>
</template>

<script>
	import { mapActions, mapGetters, mapState } from 'vuex'
	import ExternalWallet from '@walletpack/core/models/hardware/ExternalWallet';
	import {Blockchains, BlockchainsArray} from "@walletpack/core/models/Blockchains";
	import Keypair from "@walletpack/core/models/Keypair";
	import KeyPairService from "@walletpack/core/services/secure/KeyPairService";
	import PopupService from "../../../services/utility/PopupService";
	import {Popup} from "../../../models/popups/Popup";
	import HardwareService from "@walletpack/core/services/secure/HardwareService";

	let inputTimeout;
	export default {
		data(){return {
			hardwareType:null,
			blockchain:Blockchains.PICOIO,
			external:null,

			gettingAvailableKeys:false,
			availableKeys:[],

			availableWallets:[],
		}},

		async mounted(){
			await window.wallet.hardwareTypes().then(types => this.availableWallets = types);
			this.changeHardwareType(this.availableWallets[0].name);

		},

		computed:{
			...mapGetters([
				'keypairs'
			]),
			availableBlockchains(){
				const type = this.availableWallets.find(x => x.name === this.hardwareType);
				return type ? type.blockchains : [];
			},
			externalWallets(){
				return this.availableWallets.map(x => x.name);
			}
		},

		methods:{
			selectBlockchain(blockchain){
				this.blockchain = blockchain;
			},
			changeHardwareType(type){
				this.hardwareType = type;
				this.blockchain = this.availableBlockchains[0];
				this.external = new ExternalWallet(this.hardwareType, this.blockchain);
			},
			async getKeys(){
				this.gettingAvailableKeys = true;
				this.availableKeys = [];

				const key = await window.wallet.hardwareKey(this.external.blockchain, parseInt(this.external.addressIndex));

				if(typeof key === 'object' && !Array.isArray(key) && key.hasOwnProperty('error')){
					PopupService.push(Popup.snackbar(key.error))
				} else {
					this.availableKeys = [{index:this.external.addressIndex, key}];
				}

				this.gettingAvailableKeys = false;
			},
			async importKey(item){
				this.setWorkingScreen(true);
				const {index, key} = item;
				const keypair = Keypair.placeholder();
				keypair.external = this.external;
				keypair.blockchains = [this.external.blockchain];

				keypair.external.addressIndex = index;
				keypair.external.publicKey = key;
				keypair.publicKeys.push({blockchain:keypair.external.blockchain, key});

				if(!keypair.isUnique()) {
					this.setWorkingScreen(false);
					return PopupService.push(Popup.snackbar(this.$t('errors.keypairExists')));
				}

				setTimeout(() => {
					this.$emit('key', keypair);
				}, 1);
			}
		},

		watch:{
			['external.addressIndex'](){
				clearTimeout(inputTimeout);
				inputTimeout = setTimeout(() => {
					this.getKeys()
				}, 800);
			}
		}
	}

</script>


<style scoped lang="scss" rel="stylesheet/scss">
	@import "../../../styles/variables";

	.import-hardware {
		min-width:500px;
		max-width:600px;

		.loading-keys {
			padding:5px 10px 10px;
		}

		.key-list {
			display:flex;
			flex-direction: column;

			max-height:170px;
			overflow-y: auto;
			padding:0 10px 0 0;

			.key-row {
				display:flex;
				text-align:right;
				font-size: $small;
				align-items: center;
				margin-bottom:5px;
				cursor: pointer;
				padding:5px;
				border-radius:$radius;

				.index {
					padding:5px 10px;
					background:$blue;
					color:$white;
					border-radius:$radius;
					margin-right:10px;
				}

				.key {
					flex:1;
				}

				&:hover {
					background:$lightergrey;
				}
			}
		}
	}

</style>
