<template>
  <div class="top-weathet-data">
    <div class="top-weathet-data__wrapper">
      <img
        :src="
          require(`~/assets/svg/${dataWeather.current.weather[0].main.toLowerCase()}.svg`)
        "
        height="40px"
        width="40px"
      />
      {{ dataWeather.current.weather[0].main }}
    </div>
    <div class="top-weathet-data__temp w-1/3">
      <div class="text-6xl">
        {{ computedWholeNumber(dataWeather.current.temp) }}
      </div>
      <div class="text-2xl mb-auto text-gray-600">°C</div>
    </div>
    <div class="top-weathet-data__wrapper flex-col">
      <div class="top-weathet-data__temp">
        {{ computedWholeNumber(dataWeather.daily[0].temp.max) }}°C&nbsp;
        <img src="~/assets/svg/vector_up.svg" height="7px" width="7px" />
      </div>
      <div class="top-weathet-data__temp">
        {{ computedWholeNumber(dataWeather.daily[0].temp.min) }}°C&nbsp;
        <img src="~/assets/svg/vector_down.svg" height="7px" width="7px" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TopWeatherDataBlock',
  computed: {
    ...mapGetters(['dataWeather']),
    computedWholeNumber() {
      return (num) => this.getWholeNumber(num)
    },
  },
  methods: {
    getWholeNumber(num) {
      return Math.trunc(num)
    },
  },
}
</script>

<style lang="scss" scoped>
.top-weathet-data {
  @apply flex w-full;
  &__wrapper {
    @apply w-1/3 text-xl flex items-center justify-center h-16 flex-col font-medium;
    margin: 15px 0;
    color: #444444;
  }
  &__temp {
    @apply flex text-sm items-center justify-center;
  }
}
</style>
