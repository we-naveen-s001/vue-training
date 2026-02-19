<template>
  <h2>List Rendering</h2>
  <div v-for="book in books">
    {{ book.title }}
  </div>

  <ul>
    <li v-for="(book, index) of books" :key="book.id">
      <div>{{ book.title }}</div>
      <input type="text" />
    </li>
  </ul>
  <div>
    <button @click="shuffle">Shuffle</button>
  </div>

  <ul>
    <li v-for="(value, key, index) in myObject">
      {{ value + " " + key }}
    </li>
  </ul>

  <div v-for="n in 10">hello world - {{ n }}</div>
</template>

<script setup>
import { reactive } from "vue";

const books = reactive([
  { id: 1, title: "title 1" },
  { id: 2, title: "title 2" },
  { id: 3, title: "title 3" },
  { id: 4, title: "title 4" },
]);

const myObject = {
  title: "my Title",
  author: "my Author",
};

const shuffle = () => {
  books.sort(() => Math.random() - 0.5);
};
</script>
