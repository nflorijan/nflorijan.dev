<template>
  <div>
    <HeroSection v-for="heroSection in pages.nodes" :key="heroSection.id" :content="heroSection" />
    <BlogExcerpt
      v-for="post in posts.nodes"
      :key="post.id"
      :post="post"
    />
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
