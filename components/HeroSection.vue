<template>
  <div class="c-hero-section">
    <div class="c-hero-section__conent">
      <h1 class="c-hero-section__title">
        {{ content.heroSection.heroSectionTitle }}
      </h1>
      <p class="c-hero-section__text">
        {{ content.heroSection.hetoSectionText }}
      </p>
    </div>
    <img
      class="c-hero-section__image"
      :title="content.heroSection.heroSectionImage.title"
      :src="content.heroSection.heroSectionImage.sourceUrl"
      :alt="content.heroSection.heroSectionImage.altText"
    >
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
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
    z-index: 1;

    &::after {
      content: '';
      @include absolute-full;
      background: linear-gradient(180deg,rgba(15, 14, 21, .5) 0, $nf-color-black-01 100%);
    }
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
