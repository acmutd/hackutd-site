<template>
  <div class="workshop">
    <h1 class="workshop-title text-xl font-bold">{{ title }}</h1>
    <div class="workshop-date text-sm">{{ date }}</div>
    <div class="workshop-description">{{ description }}</div>
    <div class="workshop-tags">{{ tags }}</div>
    <hr class="mt-4">
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'date',
    'description',
    'tags',
  ]
};
</script>

<style>
</style>