<template>
  <header class="site-header">
    <div class="site-header__wrap">
      <nuxt-link class="site-header__brand" to="/">
        {{ generalSettings.title }}
      </nuxt-link>
      <nav class="site-header__nav">
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
    </div>
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
    generalSettings: gqlQuery`query {
        generalSettings {
        title
      }
    }
    `
  }
}
</script>
<style lang="scss" scoped>
  @import "~/styles/abstract/_mixins.scss";
  @import "~/styles/abstract/_variables.scss";

  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  .site-header__wrap {
    @include container;
    display: flex;
    justify-content: space-between;
  }

  .site-header__nav {
    ul {
      display: flex;
    }
  }
</style>
