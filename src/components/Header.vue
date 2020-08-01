<template>
  <header class="dark:header-dark block p-4 md:flex md:h-16">
    <div class="max-w-4xl mx-auto">
      <div class="logo-container block md:inline-block">
        <div class="site-title block md:inline-block text-3xl">
          <g-link to="/">
            <g-image src="../assets/logo-horizontal-white.svg" class="logo"></g-image>
          </g-link>
          </div>
      </div>
      <nav class="nav">
        <g-link class="nav-item block md:inline-block px-4 h-full" to="/">Home</g-link>
        <g-link class="nav-item block md:inline-block px-4 h-full" to="/history">History</g-link>
        <g-link class="nav-item block md:inline-block px-4 h-full" to="/events">Events</g-link>
        <g-link class="nav-item block md:inline-block px-4 h-full" to="/team">Team</g-link>
        <g-link class="nav-item block md:inline-block px-4 h-full" to="/contact">Contact</g-link>
      </nav>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header-dark {
  @apply bg-white;
  @apply text-black;
}

.nav-item {
  @apply font-bold text-lg;
  @apply px-4;
}

header {
  @apply shadow-lg;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  @apply text-white;
  @apply bg-black;
}

.logo {
  @apply h-12;
  width: 200px;
}
</style>