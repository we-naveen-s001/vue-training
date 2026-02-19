<template>
  <h1>Event Handling</h1>

  <div>
    <!-- <button v-on:click="count++">Counter</button> -->

    <button v-on:click="increaseCounter('naveen', $event)">Counter</button>
    <div>counter - {{ count }}</div>

    <div>
      <a href="http://www.google.com" @click.stop.prevent="onLinkClick"
        >Click Here</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

function increaseCounter(name, event) {
  console.log(event, "eventData");
  count.value++;
}

const onLinkClick = () => {
  console.log("on link clicked");
};
</script>
