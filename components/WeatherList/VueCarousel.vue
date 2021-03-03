<template>
  <div>
    <VueSlickCarousel v-bind="slickOptions">
      <WeatherDayItem
        v-for="day in dataWeather.daily"
        :key="day.dt"
        :day="day"
      />
    </VueSlickCarousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WeatherDayItem from '~/components/layout/WeatherDayItem'
export default {
  name: 'VueCarousel',
  components: {
    WeatherDayItem,
  },
  computed: {
    ...mapGetters(['dataWeather']),
    slickOptions() {
      return {
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
      }
    },
  },
}
</script>
