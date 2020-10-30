<template>
<div>
  <h1>Home</h1>
  <div class="row">
    <div class="col-4" v-for="p of posts" :key="p.id">
      <div class="bg-light mb-3 p-3 post-item shadow">
        <div class="d-flex justify-content-between">
          <div>
            
            <div>
              <span v-for="t of p.tags" :key="`p${p.id}-t${t}`" class="border badge badge-info">{{t}}</span>
            </div>
            <h2>{{p.title}}</h2>

            <div class="d-flex align-items-center small mt-2 text-muted">
              <img :src="p.author.picture.url" :alt="p.author.name" width="20" height="20" class="rounded-circle mr-2"/>
              <div>{{p.author.name}}</div>
              <div class="mx-2 "> | </div>
              <div class="">{{p.date | formatDate}}</div>
            </div>
          </div>
         
        </div>
        <div class="mt-2">
          <p>{{p.excerpt}}</p>
          <div><router-link :to="`/posts/${p.slug}`" class="btn btn-primary">Read More</router-link></div>
        </div>
      </div>
    </div>  
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Posts, PostsQuery } from '@/models/Posts';
import cloneDeep from 'clone-deep';

@Component
export default class Home extends Vue {
   posts: Posts[] = [];

  async mounted(){ 
    const {posts} = await this.$store.dispatch('query', PostsQuery);
    this.posts = cloneDeep(posts);
  }
}
</script>
<style lang="scss" scoped>
.post-item{
  display:block;
  h2{ 

    font-size:1.5em;
    margin:0;
    font-weight:unset;
  }
}
</style>
