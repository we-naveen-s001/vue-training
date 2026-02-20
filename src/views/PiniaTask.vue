<template>
  <div>
    <img src="../assets//pinia.svg" alt="pinia logo" />
    <h1>Pinia Tasks</h1>
    <h1>{{ taskStore.name }}</h1>
    <TaskForm />
    <nav>
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">All favorite tasks</button>
    </nav>

    <div v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <p>All Tasks</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div v-if="filter === 'favs'">
      <p>
        You have {{ taskStore.totalFavoriteCount }} favorite tasks left to do
      </p>
      <p>Favorite Tasks</p>
      <div
        v-for="favoriteTask in taskStore.favoriteTasks"
        :key="favoriteTask.id"
      >
        <TaskDetails :task="favoriteTask" />
      </div>
    </div>
  </div>
</template>

<script>
import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";
import { useTaskStore } from "@/stores/taskStore";
import { ref } from "vue";

export default {
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");
    return { taskStore, filter };
  },
  components: { TaskDetails, TaskForm },
};
</script>
