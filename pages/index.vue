<template>
  <div>
    <div
      v-if="$apollo.loading"
    >
      Loading Hero Section...
    </div>
    <HeroSection v-for="heroSection in pages.nodes" :key="heroSection.id" :content="heroSection" />
  </div>
</template>

<script>
import gqlQuery from 'graphql-tag'

export default {
  data () {
    return {
      pages: ''
    }
  },
  apollo: {
    pages: gqlQuery`query {
    pages(where: {title: "Homepage"}) {
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
