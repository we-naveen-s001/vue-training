<template>
  <div>
    <h2>Watch Effect Component</h2>

    <div>todoId : <input type="text" v-model="todoId" /></div>
    <div>count : <input type="text" v-model="count" /></div>
    <div id="channel">Channel Subscriber Count: {{ count }}</div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";

const todoId = ref(1);
const data = ref(null);
let count = ref(0);

// watch(
//   todoId,
//   async () => {
//     let response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/${todoId.value}`,
//     );

//     data.value = await response.json();
//   },
//   { immediate: true },
// );

watchEffect(async () => {
  console.log(count.value, "count value");
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`,
  );

  data.value = await response.json();
  document.getElementById("channel") &&
    console.log("channel is", document.getElementById("channel").innerText);
});

watchEffect(
  async () => {
    console.log(count.value, "flushCount");

    document.getElementById("channel") &&
      console.log(
        "flush post count is",
        document.getElementById("channel").innerText,
      );
  },
  { flush: "post" },
);
</script>

<style scoped></style>
