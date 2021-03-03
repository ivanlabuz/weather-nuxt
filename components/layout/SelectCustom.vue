<template>
  <select v-model="computedValue" class="customSelect">
    <option v-for="item in array" :key="item.id" :value="item.id">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectCustom',
  props: ['value', 'array'],
  computed: {
    computedValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.customSelect {
  height: 48px;
  outline: none;
  background: transparent;
  color: #0da0ea;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
