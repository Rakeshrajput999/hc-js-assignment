import {createStore} from 'vuex'
// import Vue from 'vue'
import  axios  from 'axios'
import wrapper from 'axios-cache-plugin'

// Vue.use(VueResource)

let http = wrapper(axios, {
  maxCacheSize: 15,  // cached items amounts. if the number of cached items exceeds, the earliest cached item will be deleted. default number is 15.
  ttl: 60000, // time to live. if you set this option the cached item will be auto deleted after ttl(ms).
  excludeHeaders: true
	 // should headers be ignored in cache key, helpful for ignoring tracking headers
})

const store = createStore({
	state() {
		return {
			Storedata: [],
			userData: [],
			filterPrice: 2000,
			auth: false,
			isauthenticated: false,
			token:""
			
	
			
		}
	},
	mutations: {
		updatefackData( state, StoreData ){
		state.Storedata = StoreData
	  },

    userDetail( state, userData ){
      state.userData = userData      

		},
		userAuth(state, payload){
			state.auth = payload
			console.log("userAuth",payload);
		},

		userToken(state,token){
      state. token = token
		},
		filterprice(state,price) {
      state.filterPrice = price
		}

		

	
	},

	actions: {
		async getfackApi({ commit,state }){
			try{
				const res = await http.get('https://fakestoreapi.com/products',
				)
				const data = await res.data
				console.log("datafromstore",data)
				commit('updatefackData',data)
			}
			catch(e){
				console.log("error from getfakeapi",e.message)
			}
	  },

		async getUser({commit}) {
      try{
				const userData = await JSON.parse(localStorage.getItem("userdata"));
				console.log(userData)
			  commit('userDetail',userData)
		  }catch(e) {
				console.log("errror frmstore",e.massage)
			}
		}
  },

	getters: {
			getStoreData: (state) => {state.Storedata},
			getUserData: (state) => {state.userData}
	}   
})


export default store