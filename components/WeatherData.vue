<template>
  <div class="weather">
    <CityClock />
    <div class="weather__list">
      <div class="flex w-full flex-col h-full">
        <TopWeatherDataBlock />
        <BottomWeatherDataBlock />
        <VueCarousel />
      </div>
    </div>
  </div>
</template>

<script>
import TopWeatherDataBlock from '~/components/WeatherList/TopWeatherDataBlock'
import BottomWeatherDataBlock from '~/components/WeatherList/BottomWeatherDataBlock'
import VueCarousel from '~/components/WeatherList/VueCarousel'
import CityClock from '~/components/CityClock'
export default {
  name: 'WeatherData',
  components: {
    CityClock,
    TopWeatherDataBlock,
    BottomWeatherDataBlock,
    VueCarousel,
  },
}
</script>

<style lang="scss" scoped>
.weather {
  @apply rounded-t-3xl shadow-lg bg-white w-full;
  border-radius: 18px 18px;

  &__list {
    @apply flex items-center justify-center;
  }
}
</style>
