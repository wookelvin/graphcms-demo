<template>
<div>
  <h1>Authors</h1>
  <div v-for="a of authors" :key="'author'+a.id" class="mb-3 d-flex p-3 shadow bg-light">
    <img :src="a.picture.url" rounded="circle" width="50" height="50" :alt="a.name" class="rounded-circle mr-3">
    <div>
      <h2 class="my-0 mt-2">{{a.name}}</h2>
      <router-link v-for="p of a.posts" :key="`a${a.id}p${p.id}`" class="post-link border" :to="`/posts/${p.slug}`">
        <h3>{{p.title}}</h3>
        <div class='text-muted'>{{p.date | formatDate}}</div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';
import { Authors as AuthorItem, AuthorsQuery} from '@/models/Authors';
import cloneDeep from 'clone-deep';

@Component
export default class Authors extends Vue {
  authors: AuthorItem[] = [];
  
  async mounted(){   
    const {authors} = await this.$store.dispatch('query', AuthorsQuery);
    this.authors = cloneDeep(authors);
    
  }
}
</script>
<style lang="scss" scoped>
.post-link{
  margin-top:1em;
  margin-bottom:1em;
  padding: 1em;
  display:block;
  background-color:white; 
  h3{ 
    margin:0;

    font-size: 1.1em;
  }
  color:unset;
}
</style>