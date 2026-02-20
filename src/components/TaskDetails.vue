<template>
  <div
    style="flex-direction: row; align-items: center; justify-content: center"
  >
    <span>{{ task.title }}</span>
    <span
      style="margin-left: 10px"
      class="material-icons"
      @click="taskStore.deleteTask(task.id)"
      >delete</span
    >
    <span
      style="margin-left: 10px"
      class="material-icons"
      @click="taskStore.toggleFavorite(task.id)"
      >favorite</span
    >
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/taskStore";

export default {
  props: ["task"],
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};
</script>
