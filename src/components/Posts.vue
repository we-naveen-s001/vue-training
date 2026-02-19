<template>
  <div>
    <h1>Post Details</h1>
    <ChildComponent
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @edit-post="editPost"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const posts = ref([
  { id: 1, title: "post 1", id: 2, title: "post 2", id: 3, title: "post 3" },
]);

const editPost = (id) => {
  posts.value = posts.value.map((post) => {
    if (post.id === id) {
      return { ...post, title: "updated post" };
    }
    return post;
  });
};
</script>
