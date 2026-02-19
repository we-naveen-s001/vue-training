<template>
  <div class="append foo bar">
    <div>Class Binding</div>
    <div :class="{ active: isActive, 'text-danger': hasError }">
      Apply Active Class
    </div>

    <div :class="classObject">Apply Active Class 45</div>

    <div :class="[isActive ? activeClass : '', errorClass]">
      Apply Active Class 4544
    </div>

    <div :class="[{ active: isActive }, errorClass]">
      Apply Active Class 454444434343
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

const isActive = ref(true);
const hasError = ref(true);

// const classObjects = reactive({
//   active: isActive,
//   "text-danger": hasError,
// });

const classObject = computed(() => {
  return {
    active: isActive.value && !hasError.value,
    "text-danger": hasError.value,
  };
});

const activeClass = ref("active");

const errorClass = ref("text-danger");
</script>
