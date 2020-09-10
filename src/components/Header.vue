<template>
  <div>
    <SmallHeader class="block md:hidden" />
    <MediumHeader class="hidden md:flex" />
  </div>
</template>

<script>
import SmallHeader from "./SmallHeader";
import MediumHeader from "./MediumHeader";

export default {
  components: {
    SmallHeader,
    MediumHeader,
  },
};
</script>