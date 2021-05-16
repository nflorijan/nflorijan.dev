<template>
  <header :class="{'site-header-alt': scrollPosition > 5}" class="site-header">
    <div class="site-header__wrap">
      <nuxt-link class="site-header__logo" to="/">
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
              About me
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
      <ul class="site-header__social-nav">
        <li>
          fb
        </li>
        <li>
          linked
        </li>
        <li>
          insta
        </li>
        <li>
          github
        </li>
        <li>
          yt
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
import gqlQuery from 'graphql-tag'

export default {
  data () {
    return {
      generalSettings: '',
      scrollPosition: null
    }
  },
  apollo: {
    generalSettings: gqlQuery`query {
        generalSettings {
        title
      }
    }
    `
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
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
    padding: 60px 0;
    transition: $nf-transition;
  }

  .site-header__wrap {
    @include container;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .site-header__logo {
    font-size: 28px;
    line-height: 1;
    font-weight: 900;
    text-decoration: none;
    text-transform: capitalize;
    transition: $nf-transition;

    &:hover {
      color: $nf-color-red-01;
    }
  }

  .site-header__nav {
    ul {
      display: flex;
    }

    li {
      margin-left: 20px;
    }

    a {
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
      text-decoration: none;
      text-transform: uppercase;
      transition: $nf-transition;

      &:hover {
        color: $nf-color-red-01;
      }
    }
  }

  .site-header__social-nav {
    display: flex;

    li {
      margin-left: 5px;
    }
  }

  // Header styles on scroll
  .site-header-alt {
    background-color: rgba($nf-color-black-01, 0.8);
    padding: 20px 0;
  }
</style>
