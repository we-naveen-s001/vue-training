<template>
  <div>
    <h3>Conditional Rendering</h3>

    <div v-if="isAwesome">View is Awesome</div>
    <div v-else="!isAwesome">Oh no it is not awesome</div>

    <button @click="isAwesome = !isAwesome">Toggle</button>

    <div v-if="type === 1">1</div>
    <div v-else-if="type === 2">2</div>
    <div v-else-if="type === 3">3</div>
    <div v-else>Not a number</div>

    <template v-if="showArticle">
      <h1>Paragraph Heading</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        accusamus est eveniet sint iste. Accusamus assumenda natus pariatur,
        provident nobis numquam rem veritatis, qui et eaque, dolorum quos
        tempore necessitatibus.
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        accusamus est eveniet sint iste. Accusamus assumenda natus pariatur,
        provident nobis numquam rem veritatis, qui et eaque, dolorum quos
        tempore necessitatibus.
      </div>
    </template>

    <div v-show="isAwesome">show property</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isAwesome = ref(true);
const type = ref(1);

const showArticle = ref(true);
</script>
