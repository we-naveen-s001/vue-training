<template>
  <div>
    <h2 ref="titleRef">Vue LifeCycle</h2>
  </div>

  <div v-for="item in items" ref="itemsRef">{{ item }}</div>
</template>

<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";

const titleRef = ref("titleRef");

const items = ref([1, 2, 3, 4]);
const itemsRef = ref([]);

onBeforeMount(() => {
  console.log("before mount");
});

onMounted(() => {
  console.log("mounted");
  titleRef.value.style.color = "red";
  console.log(itemsRef.value, "itemsRefValue");
});

onBeforeUnmount(() => {
  console.log("on before unmount");
});

onUnmounted(() => {
  console.log("on unmounted");
});

onBeforeUpdate(() => {
  console.log("on before update");
});

onUpdated(() => {
  console.log("on updated");
});
</script>
