<template>
  <div>
    <h1>This is blog page</h1>
    <div
      v-if="$apollo.loading"
    >
      Loading posts...
    </div>
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
      homeHero: ''
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
    `
  }
}
</script>
