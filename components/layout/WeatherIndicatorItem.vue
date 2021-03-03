<template>
  <div class="item-wrapper flex-col">
    <img :src="require(`~/assets/svg/${img}.svg`)" height="24px" />
    <div class="text-base tracking-tighter font-medium">
      {{ indicator }}
    </div>
    <div class="text-gray-600 text-xs tracking-wider">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'WeatherIndicatorItem',
  props: ['img', 'indicator', 'title'],
}
</script>

<style lang="scss" scoped>
.item-wrapper {
  @apply text-xl flex items-center justify-center h-16;
  margin: 15px 0;
  color: #444444;
  img {
    margin-bottom: 7px;
  }
}
</style>
