<template>
  <div>
    <img
      class="w-full rounded-t-xl"
      :src="require(`~/assets/img/${isDay ? 'day' : 'night'}.png`)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { DateTime } from 'luxon'
export default {
  name: 'Header',
  computed: {
    ...mapGetters(['dataWeather']),
    isDay() {
      if (this.dataWeather && this.dataWeather.current) {
        return (
          DateTime.local().ts >
            DateTime.fromSeconds(this.dataWeather.current.sunrise).ts &&
          DateTime.local().ts <
            DateTime.fromSeconds(this.dataWeather.current.sunset).ts
        )
      }

      return true
    },
  },
}
</script>
