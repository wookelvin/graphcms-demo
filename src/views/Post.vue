<template>
<div>
  <h1>Post</h1>
  <div v-if="post" class="bg-light p-4 shadow">
    
    
    <h2>{{post.title}}</h2>
    <hr>
    <div class="d-flex align-items-center mt-2">
      <img :src="post.author.picture.url" :alt="post.author.name" width="50" height="50" class="rounded-circle mr-2"/>
      <div>
        <div><strong>{{post.author.name}}</strong></div>
        <div class="">{{post.date | formatDate}}</div>
      </div>
    </div>
    <hr>
    <div v-html="post.content.html"></div>
    <hr>
    <div>
      <span v-for="t of post.tags" :key="`post${post.id}-t${t}`" class="border badge badge-info">{{t}}</span>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Post as PostData, PostQuery } from '@/models/Post';
import cloneDeep from 'clone-deep';

@Component
export default class Post extends Vue {
   post: PostData | null = null;

  async mounted(){ 
    const {post} = await this.$store.dispatch('query', PostQuery(this.$route.params.slug));
    this.post = cloneDeep(post);
  }
}
</script>
<style lang="scss" scoped>

  h2{ 

    font-size:2em;
    margin:0;
    font-weight:unset;
  }

</style>
