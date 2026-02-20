<template>
  <div>{{ post.id }}</div>
  <div>{{ post.title }}</div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    post: {},
  }),
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => (this.post = response.data));
  },
};
</script>
