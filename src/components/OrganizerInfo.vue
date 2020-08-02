<template>
  <article class="organizer-card">
    <g-image
      class="h-16 w-16 md:h-32 md:w-32 rounded-full md:block md:mx-auto md:"
      :src="imageName"
    />
    <div class="text-left ml-4">
      <h1 class="text-xl text-left text-black dark:text-white md:text-center md:text-2xl md:mt-2">{{ name }}</h1>
      <div class="text-lg text-black md:text-center mb-2 dark:text-white">{{ position }}</div>
      <div class="text-black dark:text-white">{{ bio }}</div>
      <div class="social-links">
        <span v-if="github" class="social-link">
          <picture>
            <source srcset="../assets/social-icons/github-dark.png" media="(prefers-color-scheme: light)">
            <source srcset="../assets/social-icons/github-light.png" media="(prefers-color-scheme: dark)">
            <g-image src="../assets/social-icons/github-dark.png" height="16" width="16" class="inline"></g-image>
          </picture>
          <a :href="github" class="ml-2">GitHub</a> |
        </span>
        <div v-if="linkedin" class="social-link">
          <!-- TODO: Add icon -->
          <a :href="linkedin">LinkedIn</a> |
        </div>
        <div v-if="website" class="social-link">
          <!-- TODO: Add icon -->
          <a :href="website">Website</a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    /**
     * This officer's full (first and last) name.
     */
    name: String,

    /**
     * A brief description of this officer.
     */
    bio: String,

    /**
     * The name of this officer's office.
     * 
     * Example: "Technical Coordinator"
     */
    position: String,

    /**
     * The filename of this officer's profile image.
     */
    imageName: String,
    
    /**
     * A URL to this officer's GitHub profile, if any.
     */
    github: String,

    /**
     * A URL to this officer's LinkedIn profile, if any.
     */
    linkedin: String,

    /**
     * A URL to this officer's personal website, if any.
     */
    website: String,
  },
  mounted() {
    const all = document.querySelector('.social-link');
    console.log(all);
  },
};
</script>

<style lang="postcss" scoped>
.organizer-card {
  @apply flex;
  @apply mt-2 p-5;
  @apply bg-white;
  @apply rounded-lg shadow-md;
}

@screen md {
  .organizer-card {
    @apply block;
  }
}

.social-links {
  @apply mt-2;
}

.social-link {
  @apply text-black text-sm;
  @apply inline;
}

@screen dark {
  .social-link {
    @apply text-primary;
  }

  .organizer-card {
    @apply bg-black;
  }
}

@screen md {
  .social-links {
    @apply text-center;
  }
}
</style>