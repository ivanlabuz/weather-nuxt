<template>
  <div class="bottom-block-wrapper">
    <WeatherIndicatorItem
      :img="`humidity`"
      :indicator="`${dataWeather.current.humidity}%`"
      :title="`Humidity`"
    ></WeatherIndicatorItem>

    <WeatherIndicatorItem
      :img="`barometer`"
      :indicator="`${dataWeather.current.pressure}mBar`"
      :title="`Pressure`"
    ></WeatherIndicatorItem>

    <WeatherIndicatorItem
      :img="`wind`"
      :indicator="`${dataWeather.current.wind_speed}km/h`"
      :title="`Wind`"
    ></WeatherIndicatorItem>

    <WeatherIndicatorItem
      img="sunrise"
      :indicator="computedTime(dataWeather.current.sunrise)"
      title="Sunrise"
    ></WeatherIndicatorItem>

    <WeatherIndicatorItem
      :img="`sunset`"
      :indicator="computedTime(dataWeather.current.sunset)"
      :title="`Sunset`"
    ></WeatherIndicatorItem>

    <WeatherIndicatorItem
      :img="`sand`"
      :indicator="computedDayTime"
      :title="`Daytime`"
    ></WeatherIndicatorItem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { DateTime, Interval } from 'luxon'
import WeatherIndicatorItem from '~/components/layout/WeatherIndicatorItem'
export default {
  name: 'BottomWeatherDataBlock',
  components: { WeatherIndicatorItem },
  computed: {
    ...mapGetters(['dataWeather']),
    computedTime() {
      return (time) => this.getTime(time)
    },
    computedDayTime() {
      return this.getDaytime()
    },
  },
  methods: {
    getTime(time) {
      return DateTime.fromSeconds(time).setLocale('en-US').toFormat('t')
    },
    getDaytime() {
      const dayTime = Interval.fromDateTimes(
        DateTime.fromSeconds(this.dataWeather.current.sunrise),
        DateTime.fromSeconds(this.dataWeather.current.sunset)
      )
      const mins = Math.trunc(dayTime.length('minutes', true)) % 60
      const hrs = Math.trunc(dayTime.length('hours', true))

      return `${hrs}h ${mins}m`
    },
  },
}
</script>

<style lang="scss" scoped>
.bottom-block-wrapper {
  display: grid;
  justify-items: center;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-template-rows: 50% 50%;
}
</style>
