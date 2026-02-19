<template>
  <h1>Computed Component</h1>
  <div>Employee Present {{ isEmployeePresent }}</div>
  <div>{{ fullName }}</div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

// export default {
//   data() {
//     return { employees: ["employee1", "employee2"] };
//   },
//   computed: {
//     isEmployeePresent() {
//       return this.employees.length > 0 ? "yes" : "no";
//     },
//   },
// };

const employees = reactive(["emp1", "emp2"]);
const firstName = ref("Naveen");
const lastName = ref("Singh");

const isEmployeePresent = computed(() => {
  return employees.length > 0 ? "yes" : "no";
});

const fullName = computed({
  get() {
    return firstName.value + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});

fullName.value = "demo name";
</script>
