<template>
  <div>
    {{ postBy.title }}
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="postBy.content" />
  </div>
</template>
<script>
import gqlQuery from 'graphql-tag'

export default {
  data () {
    return {
      postBy: ''
    }
  },
  apollo: {
    postBy: {
      query: gqlQuery`query PostBy($slug: String!) {
      postBy(slug: $slug) {
        title
        content
      }
    }
    `,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  }
}
</script>
