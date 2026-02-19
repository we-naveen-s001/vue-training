<template>
  <div>{{ counterTitle }}</div>

  <input type="text" v-model="counterTitle" />

  <div>{{ counterData.name }}</div>
  <div>{{ counterData.task }}</div>
</template>

<script setup>
import { reactive, ref } from "vue";

const counterTitle = ref("counter title");

const counterData = reactive({
  name: "demo",
  task: "priority",
});
</script>

