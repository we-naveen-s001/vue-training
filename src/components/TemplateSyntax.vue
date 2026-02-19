<template>
  <div :id="dynamicId" :[titleAttribute]="titleValue">Template Code</div>
  <div v-html="message" v-bind="objectAttributes"></div>
  <div>{{ 1 + 1 }}</div>
  <div v-on:click="changeTitle" @[eventName]="onBlur">
    {{ message ? "Yes" : "No" }}
  </div>
</template>

<script setup>
const message = "<h1>Template Message</h1>";
const dynamicId = "dynamic Id";

const titleAttribute = "titleKey";
const titleValue = "titleValue";
const eventName = "blur";
const objectAttributes = {
  class: "active",
  id: "dynamicId2",
};

function changeTitle() {
  alert("change title");
}

function onBlur() {}
</script>
