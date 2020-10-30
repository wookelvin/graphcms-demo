<template>
<div>
  <h1>Page</h1>
  <div v-if="page" class="bg-light p-4 shadow">
    <h2>{{page.title}}</h2>
    <hr>
    <div v-html="page.content.html"></div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Page as PageData, PageQuery } from '@/models/Page';
import cloneDeep from 'clone-deep';

@Component
export default class Page extends Vue {
   page: PageData | null = null;

  async mounted(){ 
    const {page} = await this.$store.dispatch('query', PageQuery(this.$route.params.slug));
    this.page = cloneDeep(page);
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
