<template>
  <header>
    <h2>{{ generalSettings.title }}</h2>
    <nav>
      <ul>
        <li>
          <NuxtLink
            to="/"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
          >
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/blog"
          >
            Blog
          </NuxtLink>
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
