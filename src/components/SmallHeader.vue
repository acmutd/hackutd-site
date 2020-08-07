<template>
  <div>
    <header>
      <div id="header">
        <div class="hamburger" @click="toggleMenu">
          <div class="bar1" />
          <div class="bar2" />
          <div class="bar3" />
        </div>
        <div id="menu" class="hidden w-full">
          <nav class="text-xl">
            <g-link to="/" exact>HOME</g-link>
            <g-link to="/events">EVENTS</g-link>
            <g-link to="/team">TEAM</g-link>
            <g-link to="/contact">CONTACT</g-link>
          </nav>
        </div>
      </div>
    </header>
    <div id="dark-overlay" class="hidden" @click="toggleMenu" />
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      document.getElementById("header").classList.toggle("header-background"); // toggle the grey background
      document.getElementById("menu").classList.toggle("hidden"); // toggle the actual nav menu
      document.getElementById("dark-overlay").classList.toggle("hidden"); // toggle the semi-transparent overlay
    },
  },
};
</script>

<style lang="postcss" scoped>
#dark-overlay {
  @apply absolute;
  @apply w-full h-full;
  background-color: rgba(105, 105, 105, 0.5);
}

#menu {
  @apply mt-5;
}

.hamburger {
  @apply cursor-pointer;
  @apply flex flex-col items-start;
}

#header {
  @apply flex flex-col items-start;
  @apply absolute;
  @apply w-full;
  @apply p-5;
  @apply z-50;
}

.header-background {
  background-color: #292929;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 4px;
  background-color: #ffffff;
}

.bar2 {
  @apply my-2;
}

nav {
  @apply flex flex-col;
}

nav > .active {
  @apply text-primary;
}

nav > * {
  @apply my-2;
}

nav > *:not(:last-child) {
  border-bottom: 1px solid white;
}
</style>