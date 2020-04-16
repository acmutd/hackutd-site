<template>
  <footer class="footer">
    <div class="flex flex-wrap text-white">
      <div class="w-full md:w-1/4 text-right text-3xl p-2">
        <div class="hackutd-logo text-center">
          <!-- <img src alt="HackUTD" class="logo" /> -->
          <span class="title">HackUTD</span>
        </div>
      </div>
      <div class="w-full md:w-1/4 p-2">
        <h1>General</h1>
        <p>
          <a href="/history">History</a>
        </p>
        <p>
          <a href="/events">Events</a>
        </p>
        <p>
          <a href="https://www.acmutd.co/">ACM at UTD</a>
        </p>
      </div>
      <div class="w-full md:w-1/4 p-2">
        <h1>Contact</h1>
        <p>Hackers</p>
        <p>Sponsors</p>
      </div>
      <div class="w-full md:w-1/4 p-2">
        <h1>Social</h1>
        <p>
          <a href="https://instagram.com/hackutd">Instagram @hackutd</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #292929;
  margin-bottom: 16px;
}

.footer-column {
  @apply w-full;
  /* @apply "md:w-1/4; */
  @apply p-2;
}
</style>