<template>
  <h1>Single User</h1>
  <!-- <div>User Id : {{ $route.params.id }}</div> -->
  <div>User Id : {{ id }}</div>
  <div>User Name : {{ name }}</div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    name() {
      return this.$route.query.name;
    },
  },
};
</script>
