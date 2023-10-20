<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Android Developer",
          details:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium omnis cum voluptatem dolores corrupti magni modi deserunt voluptatibus perspiciatis odio?",
        },

        {
          id: 2,
          title: "Full-Stack Developer",
          details:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium omnis cum voluptatem dolores corrupti magni modi deserunt voluptatibus perspiciatis odio?",
        },

        {
          id: 3,
          title: "Associate Full-Stack Developer",
          details:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium omnis cum voluptatem dolores corrupti magni modi deserunt voluptatibus perspiciatis odio?",
        },
      ],
    };
  },
};
</script>

<style>
h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  color: #444;
  cursor: pointer;
}

h2:hover {
  background: #ddd;
}

a {
  text-decoration: none;
}
</style>
