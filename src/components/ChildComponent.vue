<template>
  <div>
    <div>Post Id : {{ post.id }}</div>
    <div>Post Title : {{ post.title }}</div>

    <div>
      <!-- <button @click.prevent="$emit('edit-post', post.id)">Edit Post</button> -->
      <button @click.prevent="updatePost">Edit Post</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["edit-post"]);

const updatePost = () => {
  emit("edit-post", props.post.id);
};
</script>
