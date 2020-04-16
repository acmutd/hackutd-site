<template>
  <header class="header flex p-8">
    <div class="logo-container">
      <!-- <div class="logo">
        <g-image src="~/assets/hackutd-horizontal-logo.svg"></g-image>
      </div> -->
      <div class="site-title text-3xl">HackUTD</div>
    </div>
    <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
    <!-- <nav class="nav overflow-scroll"> -->
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/history">History</g-link>
      <g-link class="nav__link" to="/events">Events</g-link>
      <g-link class="nav__link" to="/team">Team</g-link>
      <g-link class="nav__link" to="/contact">Contact</g-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  color: white;
}
</style>