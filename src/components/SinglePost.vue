<template>
  <div>Single Post</div>
  <h2>{{ title }}</h2>
  <p>{{ projectDetails.name }}</p>
</template>

<script setup>
import { ref } from "vue";

// const props = defineProps(["title"]);

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "default post",
  },
  projectDetails: {
    type: Object,
    required: true,
    default: () => ({
      name: "default project name",
    }),
  },
  message: {
    type: String,
    validator(value) {
      return ["success", "warning"].includes(value);
    },
  },
});

console.log(props.title, "propsTitle");

// Not recommend, it can change the title of parent component
props.projectDetails.name = "updated project name";

const name = ref(props.title);

name.value = "hello world";
console.log(name.value, "valueData");
</script>
