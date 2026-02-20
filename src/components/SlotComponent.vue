<template>
  <div>
    <h1>Slot Component</h1>
    <button>
      <slot name="slotName" :sendData="sendData">Default Text</slot>
    </button>
    <div>
      <slot>Fallback Content</slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sendData = ref("send data");
</script>
