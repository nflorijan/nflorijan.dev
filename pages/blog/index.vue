<template>
  <div>
    <HeroSection v-for="heroSection in pages.nodes" :key="heroSection.id" :content="heroSection" />
    <div class="site-blog__container">
      <BlogExcerpt
        v-for="post in posts.nodes"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>
<script>
import gqlQuery from 'graphql-tag'

export default {
  data () {
    return {
      posts: '',
      pages: ''
    }
  },
  apollo: {
    posts: gqlQuery`query {
      posts {
        nodes {
          id
          excerpt
          title
          slug
          date
          featuredImage {
            node {
              altText
              title
              sourceUrl
            }
          }
        }
      }
    }
    `,
    pages: gqlQuery`query {
    pages(where: {title: "Blog"}) {
    nodes {
      id
      title
      heroSection {
        heroSectionTitle
         hetoSectionText
          heroSectionImage {
            altText
            title
            sourceUrl
          }
      }
    }
  }
  }`
  }
}
</script>
<style lang="scss" scoped>
 @import "~/styles/abstract/_mixins.scss";
 @import "~/styles/abstract/_variables.scss";

  .site-blog__container {
    @include container;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    padding-bottom: 50px;
  }
</style>
