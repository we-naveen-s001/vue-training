import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import MyComponent from "@/components/MyComponent.vue";
import Counter from "@/components/Counter.vue";

import TemplateSyntax from "@/components/TemplateSyntax.vue";
import ComputedComponent from "@/components/ComputedComponent.vue";
import ClassComponent from "@/components/ClassComponent.vue";
import InlineComponent from "@/components/InlineComponent.vue";
import ConditionalComponent from "@/components/ConditionalComponent.vue";
import ListRendering from "@/components/ListRendering.vue";
import EventHandling from "@/components/EventHandling.vue";
import FormInputBinding from "@/components/FormInputBinding.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("MyComponent", MyComponent);

app.component("Counter", Counter);

app.component("TemplateSyntax", TemplateSyntax);

app.component("ComputedComponent", ComputedComponent);

app.component("ClassComponent", ClassComponent);

app.component("InlineComponent", InlineComponent);

app.component("ConditionalComponent", ConditionalComponent);

app.component("ListRendering", ListRendering);

app.component("EventHandling", EventHandling);

app.component("FormInputBinding", FormInputBinding);

app.mount("#app");
