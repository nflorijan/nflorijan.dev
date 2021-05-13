<template>
  <div>
    <Header />
    <h1>This is blog page</h1>
    <div
      v-for="post in posts.nodes"
      :key="post.id"
    >
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt }}</p>
    </div>
  </div>
</template>
<script>
import gqlQuery from 'graphql-tag'

export default {
  data () {
    return {
      posts: ''
    }
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    posts: gqlQuery`query {
      posts {
        nodes {
          id
          excerpt(format: RENDERED)
          title
        }
      }
    }
    `
  }
}
</script>
