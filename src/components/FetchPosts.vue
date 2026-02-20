<template>
  <button @click="getPosts">Show Posts</button>

  <div>
    <h1>Post Data</h1>
    <h2>{{ post.id }}</h2>
    <h2>{{ post.title }}</h2>
  </div>
</template>

<script>
export default {
  data: () => ({
    post: {},
  }),
  methods: {
    getPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => (this.post = data));
    },
  },
};
</script>
