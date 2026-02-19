<template>
  <div class="home">
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">
        {{ counter }}
      </span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
  </div>

  <my-component> </my-component>

  <Counter />
  <TemplateSyntax />
  <ComputedComponent />

  <ClassComponent class="foo bar" />
  <InlineComponent />
  <ConditionalComponent />

  <ListRendering />

  <EventHandling />

  <FormInputBinding />
</template>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  padding: 20px;
}
</style>

<script setup>
import { ref } from "vue";

const counter = ref(0);

const increaseCounter = () => {
  counter.value++;
};

const decreaseCounter = () => {
  counter.value--;
};
</script>

<!--
<script>

  import {ref} from 'vue'
export default {
  setup() {
    const counter = ref(0)

    const increaseCounter = ()=>{
      counter.value++
    }

    const decreaseCounter = ()=>{
      counter.value--
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter
    }
  },
}
</script>
-->

<!--
  <script>
export default {
  data(){
    return {
      counter : 0
    }
  },
  methods:{
    increaseCounter(){
      this.counter++
    },
    decreaseCounter(){
      this.counter--
    }
  }
}
</script>

-->
