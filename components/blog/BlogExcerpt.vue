<template>
  <div>
    <h3>{{ post.title }}</h3>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="post.excerpt" />
    <nuxt-link
      :to="{ name: 'blog-slug', params: { slug: post.slug }}"
    >
      Read more
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
