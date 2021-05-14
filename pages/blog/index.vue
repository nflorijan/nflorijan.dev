<template>
  <div>
    <h1>This is blog page</h1>
    <div
      v-if="$apollo.loading"
    >
      Loading posts...
    </div>
    <div
      v-for="post in posts.nodes"
      :key="post.id"
    >
      <h3>{{ post.title }}</h3>
      <p v-html="post.excerpt" />
      <nuxt-link
        :to="{ name: 'blog-slug', params: { slug: post.slug }}"
      >
        Read more
      </nuxt-link>
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
