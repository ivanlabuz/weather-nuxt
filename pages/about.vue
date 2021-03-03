<template>
  <div class="about">
    <div class="about__title">About us</div>
    <div class="p-5 text-center text-gray-700">
      The task of the organization, especially the established structure of the
      organization allows you to evaluate the value of the corresponding
      activation conditions. With another parties a new organizational model
      contributes to the preparation and the implementation of the positions
      taken by the participants in relation to the tasks.
    </div>
    <NuxtLink class="about__nav" to="/">Go to weather</NuxtLink>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#ffffff, #5d99e7);
  border-radius: 0 0 12px 12px;
  &__title {
    @apply text-4xl text-center p-6 text-gray-600;
  }
  &__nav {
    @apply text-gray-600;
    padding: 5px;
    border: 1px solid grey;
    border-radius: 5px;
    background: white;
  }
}
</style>
