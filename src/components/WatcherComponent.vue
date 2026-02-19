<template>
  <h1>Watcher Component</h1>

  <div>
    <p>Ask a Yes/No Question</p>
    <input type="text" v-model="question" />
    <div>
      {{ answer }}
    </div>

    <img :src="responseData.image" style="width: 100px" />
  </div>

  <div>
    <div>x: <input type="text" v-model="x" /></div>
    <div>y: <input type="text" v-model="y" /></div>
  </div>

  <div>count : <input type="text" v-model="object.count" /></div>

  <div>deep count : <input type="text" v-model="deepObject.count.value" /></div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

const question = ref("");
const answer = ref("question generally contains ?");
const responseData = ref("");
const object = reactive({ count: 0, name: "dev training" });

const deepObject = reactive({ count: { value: 0, name: "deep name" } });

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "thinking...";

    try {
      const result = await fetch("https://yesno.wtf/api");
      const responseJson = await result.json();
      responseData.value = responseJson;
      console.log(responseData, "responseData");
      answer.value = responseJson.answer;
    } catch (error) {
      answer.value = "Fetching error in api";
    }
  }
});

const x = ref(0);
const y = ref(0);

watch(x, (newX) => {
  console.log(`x value is ${newX}`);
});

watch(y, (newY) => {
  console.log(`y value is ${newY}`);
});

watch([x, y], ([newX, newY]) => {
  console.log(`x value is ${newX} and y value is ${newY}`);
});

watch(
  () => Number(x.value) + Number(y.value),
  (sum) => {
    console.log(sum, "sumData");
  },
);

watch([x, () => y], ([newX, newY]) => {
  console.log(`new X is ${newX} and new Y is ${newY}`);
});

watch(
  () => object.count,
  (updatedCount) => {
    console.log(`new count is ${updatedCount}`);
  },
);

watch(object, (newObj) => {
  console.log(`updated count is ${newObj.count}`);
});

watch(
  () => deepObject.count,
  (newObj) => {
    console.log(`new deep updated count count is ${newObj.value}`);
  },
  { deep: true, immediate: true },
);
</script>
