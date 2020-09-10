<template>
  <Layout>
    <section class="about-page w-9/12 mx-auto flex-col items-center">
        <div>
          <h1 class="page-title">What is HackUTD?</h1>
          <p>HackUTD is a student organization with a focus on bringing undergraduate students in North Texas the annual hackathon at the University of Texas at Dallas. A hackathon is a marathon for engineers and programmers to develop an application in 24 hours. Food, prizes, and swag are all free, the only thing we ask from you is for you to innovate and learn! It’s a great place to meet others from industry professionals to other undergrad students. HackUTD is open to people of all experiences and backgrounds, whether you’re a beginner, a non-Computer Science major, or just started learning programming, we design our hackathon to be beginner friendly by providing mentors, workshops, and events to guide you through our event!</p>
        </div>
    
        <div>
            <h1 class="page-title">FAQ</h1>
    
            <h2 class="question">When is HackUTD?</h2>
            <p>HackUTD is an annual hackathon, this year it will be on February 27th-28th</p>
            
            <h2 class="question">Who is eligible?</h2>
            <p>Anyone over 18 that is currently enrolled in a college or university is allowed to participate. Any major is allowed to participate and people from all backgrounds!</p>
            
            <h2 class="question">How much does it cost?</h2>
            <p>HackUTD is completely FREE! Food, Prizes, and Swag are all provided at no cost!</p>
            
            <h2 class="question">What do I need?</h2>
            <p>A computer and Internet</p>
        </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
  },
};
</script>

<style lang="postcss">
.about-page {
    @apply h-full text-lg;
}

.question {
    @apply text-2xl font-bold my-5 text-primary;
}
</style>