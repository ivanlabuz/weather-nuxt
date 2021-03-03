<template>
  <div class="item">
    <img
      :src="require(`~/assets/svg/${day.weather[0].main.toLowerCase()}.svg`)"
      height="25px"
      width="25px"
    />
    {{ computedDailyWeather(day.dt) }}
    <div class="item__temp">
      <div class="flex text-gray-600 text-xs">
        {{ getWholeNumber(day.temp.max) }}℃
        <img src="~/assets/svg/vector_up.svg" height="7px" width="7px" />
      </div>
      &nbsp;
      <div class="flex text-gray-600 text-xs">
        {{ getWholeNumber(day.temp.min) }}℃
        <img src="~/assets/svg/vector_down.svg" height="7px" width="7px" />
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  name: 'WeatherDayItem',
  props: {
    day: {
      type: Object,
      default: null,
    },
  },
  computed: {
    getWholeNumber() {
      return (num) => Math.trunc(num)
    },
    computedDailyWeather(time) {
      return (time) => this.getDailyWeather(time)
    },
  },
  methods: {
    getDailyWeather(time) {
      return DateTime.fromSeconds(time).setLocale('en-US').toFormat('EEE, dd')
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  @apply items-center flex-col justify-center font-medium;
  margin: 12px 20px;
  width: auto !important;
  display: flex !important;
  padding: 5px;
  height: 101px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  outline: none;
  &__temp {
    @apply text-xl flex items-center justify-center;
  }
}
</style>
