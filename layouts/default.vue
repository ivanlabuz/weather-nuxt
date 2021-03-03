<template>
  <div class="main">
    <div class="main__wrapper">
      <Header class="header" />
      <Nuxt class="content" />
    </div>
  </div>
</template>

<script>
import Header from '~/components/layout/Header'
export default {
  name: 'DefaultLayouts',
  components: {
    Header,
  },
}
</script>

<style lang="scss">
.main {
  @apply flex items-center h-screen justify-center;
  &__wrapper {
    @apply shadow-md rounded-xl;
    height: 750px;
    max-width: 400px;
    .header {
      height: 43%;
    }
    .content {
      height: 57%;
    }
  }
}
</style>
