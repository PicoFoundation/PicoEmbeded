<template>
	<section class="pop-in">
		<section v-if="identity">
			<section class="head">
				<figure class="icon font icon-key"></figure>
				<figure class="title">{{$t('popins.fullscreen.changeIdentityKey')}}</figure>
			</section>

			<section class="key-details">
				<label>Private Key</label>
				<Input :text="privateKey" />
			</section>

			<ActionBar :buttons-left="[{text:$t('generic.cancel'), click:() => returnResult(false)}]" :buttons-right="buttonsRight" />
		</section>
	</section>
</template>

<script>
	import { mapActions, mapGetters, mapState } from 'vuex'
	import * as Actions from '@walletpack/core/store/constants';
	import '../../../styles/popins.scss';
	import KeyPairService from "@walletpack/core/services/secure/KeyPairService";
	import {Blockchains} from "@walletpack/core/models/Blockchains";
	// import RIDLService from "../services/utility/RIDLService";
	import Keypair from "@walletpack/core/models/Keypair";
	import PluginRepository from "@walletpack/core/plugins/PluginRepository";
	import * as UIActions from "../../../store/ui_actions";
	import RIDLService from "../../../services/utility/RIDLService";

	export default {
		props:['popin'],
		data () {return {
			privateKey:'',
			originalPrivateKey:'',
			identity:null,
		}},
		computed:{
			...mapState([
				'scatter',
			]),
			...mapGetters([

			]),
			buttonsRight(){
				return [
					{text:this.$t('popins.fullscreen.generateRandomKey'), click:() => this.randomKey()},
					{text:this.$t('popins.fullscreen.saveIdentityKey'), blue:true, click:() => this.saveIdentityPrivateKey()},
				]
			},
		},
		mounted(){
			this.identity = this.popin.data.props.identity.clone();
			KeyPairService.publicToPrivate(this.identity.publicKey).then(key => {
				this.privateKey = key;
				this.originalPrivateKey = key;
			})
		},
		methods:{
			returnResult(){
				this.popin.data.callback(true);
				this[UIActions.RELEASE_POPUP](this.popin);
			},

			async randomKey(){
				const keypair = Keypair.placeholder();
				await KeyPairService.generateKeyPair(keypair);
				this.privateKey = await PluginRepository.plugin(Blockchains.PICOIO).bufferToHexPrivate(keypair.privateKey);
			},


			async saveIdentityPrivateKey(){
				if(this.privateKey === this.originalPrivateKey) return this.returnResult(false);

				const plugin = PluginRepository.plugin(Blockchains.PICOIO);
				const publicKey = plugin.privateToPublic(this.privateKey);

				if(this.identity.id === this.identity.ridl){
					if(!await RIDLService.changeKey(this.identity.name, publicKey)) return;
				} else this.identity.ridl = -1;

				this.identity.privateKey = this.privateKey;
				this.identity.publicKey = publicKey;

				const scatter = this.scatter.clone();
				scatter.keychain.updateOrPushIdentity(this.identity);
				await this[Actions.SET_SCATTER](scatter);

				this.returnResult(true);
			},

			...mapActions([
				UIActions.RELEASE_POPUP,
				Actions.SET_SCATTER,
			])
		},
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	@import "../../../styles/variables";

	.key-details {
		width:500px;
		margin-top:40px;
	}


</style>
