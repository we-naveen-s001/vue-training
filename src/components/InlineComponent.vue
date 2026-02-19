<template>
  <div :style="{ color: activeColor, fontSize }">Inline Component</div>
  <div :style="styleObject">Inline Component 2</div>
  <div :style="[baseStyles, baseStyles2]">Inline Component 66</div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";

const activeColor = ref("blue");
const fontSize = ref("30px");

const styleObject = computed(() => {
  return {
    color: activeColor.value,
    fontSize: fontSize.value,
  };
});

const baseStyles = reactive({
  color: "yellow",
  fontSize: "25px",
});

const baseStyles2 = reactive({
  border: "1px solid",
});

setTimeout(() => {
  activeColor.value = "red";
}, 4000);
</script>
