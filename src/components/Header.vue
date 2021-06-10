<template>
  <header class="dark:header-dark block p-4 md:flex md:flex-col md:h-20">
    <div class="max-w-4xl mx-auto md:flex">
      <div class="logo-container text-center block md:inline-block md:flex-grow-0">
        <div class="site-title md:inline text-3xl">
          <g-link to="/">
            <img src="../assets/logo-horizontal-white.svg" class="logo" />
          </g-link>
        </div>
      </div>
      <nav class="nav block md:justify-center md:inline-block md:my-auto" style="float:left">
        
        <!-- <g-link class="nav-item px-4 h-full" to="/history">History</g-link> -->
        
      </nav>
      <nav class="nav block md:justify-center md:inline-block md:my-auto" style="float:right">
        <g-link class="nav-item px-4 h-full" to="/" exact>Home</g-link>
        <g-link class="nav-item px-4 h-full" to="/events">Events</g-link>
        <g-link class="nav-item px-4 h-full" to="/team">Team</g-link>
        <g-link class="nav-item px-4 h-full" to="/contact">Contact</g-link>
      </nav>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header-dark {
  @apply bg-white;
  @apply text-black;
}

.nav {
  @apply mt-4;
  overflow-x: scroll;
}

@screen md {
  .nav {
    @apply my-auto;
    overflow: hidden;
  }
}

.nav-item {
  @apply font-bold text-lg;
  @apply px-4;
  @apply font-display;

  background-size: 200%;
  background-image: linear-gradient(to right, #FFC386 50%, #FAFAFA 50%);
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: 100% top;
  background-clip: text;

  -webkit-background-clip: text;
  transition: background-position .8s;
  color: transparent;
}

.nav-item:hover {
  background-position: 0% top;
}

header {
  @apply sticky top-0;
  @apply shadow-lg;
  @apply text-white;
  @apply bg-black;
  justify-content: space-between;
  align-items: center;
}

.logo {
  @apply h-12;
  @apply mb-2;
}

@screen md {
  .logo {
    @apply mb-0;
    width: 240px;
  }
}

.router-link-exact-active, .active--exact {
  @apply text-primary;
}
</style>
