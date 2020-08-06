<template>
  <header>
    <g-link to="/">
      <img src="../assets/logo-square-white.svg" class="logo" />
    </g-link>
    <nav>
      <g-link to="/" exact>HOME</g-link>
      <g-link to="/events">EVENTS</g-link>
      <g-link to="/team">TEAM</g-link>
      <g-link to="/contact">CONTACT</g-link>
    </nav>
  </header>
</template>

<script>
export default {
    
}
</script>

<style lang="postcss" scoped>
.logo {
  height: 10vh;
}

header {
  @apply flex-row;
  @apply mx-10 mt-5;
  @apply text-xl font-semibold;
}

nav {
  @apply flex-grow;
  @apply flex flex-row items-center justify-end;
}

nav > .active {
  @apply text-primary;
}

nav > * {
  @apply font-display;
  @apply text-white;
  @apply px-8;
  transition: color 0.25s;
}

nav > *:hover {
  @apply text-primary;
}
</style>
