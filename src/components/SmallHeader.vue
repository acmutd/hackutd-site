<template>
  <header>
    <div id="header">
      <div class="hamburger" @click="toggleMenu">
        <div class="bar1" />
        <div class="bar2" />
        <div class="bar3" />
      </div>
      <div id="menu" class="hidden w-full">
        <nav class="flex-grow grid gap-4 grid-cols-2 pl-10 text-xl">
          <g-link to="/" exact>HOME</g-link>
          <g-link to="/events">EVENTS</g-link>
          <g-link to="/team">TEAM</g-link>
          <g-link to="/contact">CONTACT</g-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
      document.getElementById("header").classList.toggle("foo");
      document.getElementById("menu").classList.toggle("hidden");
    },
  },
};
</script>

<style lang="postcss" scoped>
.hamburger {
  @apply cursor-pointer;
}

#header {
  @apply flex flex-row;
  @apply absolute;
  @apply w-full;
  @apply p-5;
}

.foo {
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

nav > .active {
  @apply text-primary;
}
</style>