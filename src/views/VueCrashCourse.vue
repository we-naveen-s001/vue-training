<template>
  <div>
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">Status is active</p>
    <p v-else-if="status === 'pending'">Status is pending</p>
    <p v-else>Status is inactive</p>

    <h3>Tasks:</h3>

    <ul>
      <li v-for="(task, index) in tasks">
        <span>
          {{ task }}
        </span>

        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>

    <!-- <a v-bind:href="link">Visit to google</a> -->

    <a :href="link">Visit to google</a>
    <p>
      <!-- <button v-on:click="toggleStatus">Change Status</button> -->

      <button @click="toggleStatus">Change Status</button>
    </p>

    <form @submit.prevent="addTask">
      <label for="newTask">Task</label>
      <input type="text" id="newTask" name="newTask" v-model="newTask" />
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

// export default {
//   data() {
//     return {
//       name: "naveen",
//       status: "active",
//       tasks: ["task1", "task2", "task3"],
//       link: "https://google.com",
//     };
//   },
//   methods: {
//     toggleStatus() {
//       if (this.status === "active") {
//         this.status = "pending";
//       } else if (this.status === "pending") {
//         this.status = "inactive";
//       } else {
//         this.status = "active";
//       }
//     },
//   },
// };

const name = ref("Naveen");
const status = ref("active");
const tasks = ref(["task1", "task2", "task3"]);
const link = ref("https://google.com");
const newTask = ref("");
const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim().length > 0) {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<style scoped></style>
