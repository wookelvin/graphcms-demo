import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const graphCMSEndpoint = 'https://api-us-east-1.graphcms.com/v2/ckgwkewqy5l7q01wc1wkyca9v/master';

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async query(ctx, gqlQuery: string) {
      console.log('req GQL Query', gqlQuery);
      const response = await fetch(
        graphCMSEndpoint,
        {
          method: 'POST',
          body: JSON.stringify({ query: gqlQuery }),
        }
      );
  
      try{
        const { data } = await response.json();
    
        console.log('res GQL Query', gqlQuery, data);

        if (data.errors){
          console.error(data.errors);
          throw new Error(data.errors);
        }

        return data;

      }catch(err){ 
        throw new Error(err);
      }
    },
  },
  modules: {
  }
})
