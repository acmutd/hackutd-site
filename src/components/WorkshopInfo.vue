<template>
  <div class="workshop">
    <h1 class="workshop-title text-lg">{{ title }}</h1>
    <div class="workshop-date text-sm">{{ date }}</div>
    <div class="workshop-description">{{ description }}</div>
    <div class="workshop-tags">{{ tags }}</div>
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