<template>
  <div id="app" class="container">
    <div class="site-title">GraphCMS Vue Demo</div>
    <div id="nav">
      
      <router-link to="/">Home</router-link> 
      <router-link 
        v-for="p of pages" :key="'navpage'+p.id" :to="`/${p.slug}`">{{p.title}}</router-link>
      <router-link to="/authors">Authors</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';
import { NavPages, NavPagesQuery } from '@/models/NavPages';
import cloneDeep from 'clone-deep';

@Component
export default class App extends Vue {
  pages: NavPages[] = [];

  async mounted(){ 
    const {pages} = await this.$store.dispatch('query', NavPagesQuery);
    this.pages = cloneDeep(pages);
  }
}
</script>

<style lang="scss">
@import './scss/style.scss';

#nav{ 
  margin-left:-0.5em;
  margin-right:-0.5em;
  margin-bottom:1em;
  margin-top:2em;
}
#nav a{
  padding: 1em;
  margin: 0.5em;
  background-color:#f5f5f5;
  color:#999;
  &:hover{ 
    text-decoration: none;
    background-color:darken(#f5f5f5, 10%);
    color:#555;
  }
}

.site-title{ 
  font-weight:heavy;
  font-size: 2em;
  margin-top:1.5em;
}
</style>
