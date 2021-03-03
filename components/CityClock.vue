<template>
  <div class="city-clock">
    <NuxtLink to="/about" class="city-clock__clock">
      {{ clock }}
    </NuxtLink>
    <div class="city-clock__select-wrapper w-6/12">
      <div class="select-icon-wrapper">
        <SelectCustom v-model="currentCityComputed" :array="cityList" />
        <img src="~/assets/svg/location.svg" height="12px" width="12px" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { DateTime } from 'luxon'
import SelectCustom from '~/components/layout/SelectCustom'

export default {
  name: 'CityClock',
  components: {
    SelectCustom,
  },
  data() {
    return {
      clock: '',
      clockInterval: '',
    }
  },
  computed: {
    ...mapGetters(['currentCityId']),
    ...mapGetters({
      cityList: 'cities/cityList',
    }),
    currentCityComputed: {
      get() {
        return this.currentCityId
      },
      async set(newCityId) {
        this.changeCity(newCityId)
        await this.getWeather()
      },
    },
  },
  created() {
    this.clockInterval = setInterval(this.updateClock, 1000)
  },

  destoyed() {
    clearInterval(this.clockInterval)
  },
  methods: {
    ...mapActions(['getWeather', 'changeCity']),

    updateClock() {
      this.clock = DateTime.local()
        .setLocale('en-US')
        .toFormat('EEEE, d MMM y t')
    },
  },
}
</script>

<style lang="scss" scoped>
.city-clock {
  @apply flex h-16;
  align-items: baseline;

  &__clock {
    @apply flex text-gray-600 items-center justify-center w-1/2;
    padding: 15px 28px;
    color: #999999;
    font-size: 14px;
  }
  &__select-wrapper {
    @apply flex items-center justify-center;
    background: rgba(13, 159, 234, 0.08);
    border-radius: 0 15px 0 15px;
    .select-icon-wrapper {
      @apply flex items-center justify-center;
      height: 100%;
      width: 80%;
    }
  }
}
</style>
