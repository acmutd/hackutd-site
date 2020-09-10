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
  height: 8vh;
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

nav > * {
  @apply font-bold text-lg;
  @apply font-display;
  @apply text-white;
  @apply px-8;
  @apply pt-4;

  background-size: 200%;
  background-image: linear-gradient(to right, #ffc386 50%, #fafafa 50%);
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: 100% top;
  background-clip: text;

  -webkit-background-clip: text;
  transition: background-position 0.8s;
  color: transparent;
}

nav > *:hover {
  background-position: 0% top;
}
</style>
