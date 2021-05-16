<template>
  <div class="c-blog-excerpt">
    <img class="c-blog-excerpt__img" :title="postExcerptImgTitle" :src="postExcerptImg" :alt="postExcerptImgAltText">
    <div class="c-blog-excerpt__content">
      <span>{{ postExcerptDate }}</span>
      <h3>{{ postExcerptTitle }}</h3>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="postExcerptContent" />
      <nuxt-link
        :to="{ name: 'blog-slug', params: { slug: postExcerptSlug }}"
      >
        Read more
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { format } from 'date-fns'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      postExcerptTitle: '',
      postExcerptContent: '',
      postExcerptSlug: '',
      postExcerptDate: '',
      postExcerptImg: '',
      postExcerptImgAltText: '',
      postExcerptImgTitle: ''
    }
  },
  mounted () {
    this.postExcerptTitle = this.post.title
    this.postExcerptContent = this.post.excerpt
    this.postExcerptSlug = this.post.slug
    this.postExcerptDate = format(new Date(this.post.date), 'MMM dd, yyyy')
    this.postExcerptImg = this.post.featuredImage.node.sourceUrl
    this.postExcerptImgAltText = this.post.featuredImage.node.altText
    this.postExcerptImgTitle = this.post.featuredImage.node.title
  }
}
</script>
<style lang="scss">
  @import "~/styles/abstract/_mixins.scss";
  @import "~/styles/abstract/_variables.scss";

  .c-blog-excerpt {
    position: relative;
    display: flex;
    height: 340px;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 50%);
    padding: 32px;

    &::after {
      content: '';
      @include absolute-full;
      background: linear-gradient(180deg,rgba(15, 14, 21, .3) 0, $nf-color-black-01 100%);
    }
  }

  .c-blog-excerpt__img {
    @include absolute-full;
    object-fit: cover;
  }

  .c-blog-excerpt__content {
    position: relative;
    margin-top: auto;
    z-index: 1;
  }
</style>
