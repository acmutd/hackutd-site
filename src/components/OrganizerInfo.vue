<template>
  <article class="organizer-card">
    <g-image
      class="organizer-card--image"
      :src="imageName"
    />
    <div class="organizer-card--contents">
      <h1 class="organizer-card--name">{{ name }}</h1>
      <div class="organizer-card--position">{{ position }}</div>
      <div class="organizer-card--bio">{{ bio }}</div>
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
};
</script>

<style lang="postcss" scoped>
.organizer-card {
  @apply flex;
  @apply mt-2 p-5;
  @apply bg-white;
  @apply rounded-lg shadow-md;
}

.organizer-card--image {
  @apply h-16 w-16;
  @apply rounded-full;
}

.organizer-card--contents {
  @apply text-left ml-4;
}

.organizer-card--name {
  @apply text-xl text-left text-black;
}

.organizer-card--position {
  @apply text-lg text-black mb-2;
}

.organizer-card--bio {
  @apply text-black;
}

@screen md {
  .organizer-card {
    @apply block;
  }

  .organizer-card--image {
    @apply block;
    @apply h-32 w-32;
    @apply mx-auto;
  }

  .organizer-card--name {
    @apply text-center;
    @apply text-2xl;
    @apply mt-2;
  }

  .organizer-card--position {
    @apply text-center;
  }

  .social-links {
    @apply text-center;
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
  
  .organizer-card--name {
    @apply text-white;
  }

  .organizer-card--position {
    @apply text-white;
  }

  .organizer-card--bio {
    @apply text-white;
  }
}
</style>