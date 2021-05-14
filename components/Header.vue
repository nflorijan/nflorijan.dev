<template>
  <header>
    <h2>{{ generalSettings.title }}</h2>
    <nav>
      <ul>
        <li>
          <nuxt-link
            to="/"
          >
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/about"
          >
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/blog"
          >
            Blog
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import gqlQuery from 'graphql-tag'

export default {
  data () {
    return {
      generalSettings: ''
    }
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    generalSettings: gqlQuery`query {
      generalSettings {
        title
      }
    }
    `
  }
}
</script>
