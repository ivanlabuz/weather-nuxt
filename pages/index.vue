<template>
  <div class="index-page">
    <Loader v-if="isLoading"></Loader>
    <div v-else-if="hasError" class="text-2xl text-center p-6 text-gray-600">
      {{ error }}
    </div>
    <WeatherData v-else-if="dataWeather" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Loader from '~/components/layout/Loader'
import WeatherData from '~/components/WeatherData'
export default {
  name: 'Index',
  components: {
    Loader,
    WeatherData,
  },
  computed: {
    ...mapGetters(['dataWeather', 'isLoading', 'hasError', 'error']),
  },
  async mounted() {
    await this.getWeather()
  },
  methods: {
    ...mapActions(['getWeather']),
  },
}
</script>

<style lang="scss" scoped>
.index-page {
  @apply flex items-center justify-center;
}
</style>
