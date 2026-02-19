<template>
  <h2>FormInputBinding</h2>
  <div>
    <!-- <input
      type="text"
      :value="title"
      @input="(event) => (title = event.target.value)"
    /> -->

    <input type="text" v-model="title" />

    <div>{{ title }}</div>

    <div>
      <textarea v-model="message"></textarea>
      <div>{{ message }}</div>
    </div>

    <div>
      <input type="checkbox" v-model="checked" />
      {{ checked }}
    </div>

    <div>
      <input type="checkbox" value="naveen" v-model="checkNames" />
      <input type="checkbox" value="rahul" v-model="checkNames" />
      <input type="checkbox" value="test" v-model="checkNames" />
    </div>

    {{ checkNames }}

    <div>
      <input type="radio" value="one" v-model="picked" /> one
      <input type="radio" value="two" v-model="picked" /> two
      <div>
        {{ picked }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("titleData");
const message = ref("message");
const checked = ref(true);

const checkNames = ref([]);
const picked = ref("");
</script>

<style scoped></style>
