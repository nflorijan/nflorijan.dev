<template>
  <section class="c-hero-section">
    <div class="c-hero-section__conent">
      <h1 class="c-hero-section__title">
        {{ heroSectionTitle }}
      </h1>
      <p class="c-hero-section__text">
        {{ heroSectionText }}
      </p>
    </div>
    <img
      class="c-hero-section__image"
      :title="heroSectionImgTitle"
      :src="heroSectionImgUrl"
      :alt="heroSectionImgAlt"
    >
  </section>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      heroSectionTitle: '',
      heroSectionText: '',
      heroSectionImgTitle: '',
      heroSectionImgUrl: '',
      heroSectionImgAlt: ''
    }
  },
  mounted () {
    this.heroSectionTitle = this.content.heroSection.heroSectionTitle
    this.heroSectionText = this.content.heroSection.hetoSectionText
    this.heroSectionImgTitle = this.content.heroSection.heroSectionImage.title
    this.heroSectionImgUrl = this.content.heroSection.heroSectionImage.sourceUrl
    this.heroSectionImgAlt = this.content.heroSection.heroSectionImage.altText
  }
}
</script>
<style lang="scss" scoped>
  @import "~/styles/abstract/_mixins.scss";
  @import "~/styles/abstract/_variables.scss";

  .c-hero-section {
    position: relative;
    width: 100%;
    height: 664px;
    overflow: hidden;
    z-index: 1.1;

    &::after {
      content: '';
      @include absolute-full;
      background: linear-gradient(180deg,rgba(15, 14, 21, .5) 0, $nf-color-black-01 100%);
    }
  }

  .c-hero-section__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .c-hero-section__conent {
    @include absolute-center;
    z-index: 1;
  }

  .c-hero-section__title {
    font-size: 60px;
    font-weight: 900;
    text-align: center;
    margin: 0 0 10px;
    line-height: 1;
  }

  .c-hero-section__text {
    font-size: 20px;
    color: $nf-color-gray;
    text-align: center;
    margin: 0;
  }
</style>
