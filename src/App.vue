<template>
  <router-link to="/" style="padding-right: 10px">Home</router-link>
  <router-link to="/users">Users</router-link>

  <div>
    <button @click="$router.go(-1)">Go back one step</button>
    <button @click="$router.go(1)">Go forward one step</button>
    <button @click="$router.push('/users')">Redirect to users</button>
    <button @click="$router.push('/pinia-task')">Pinia task</button>
    <button @click="$router.push('/vue-course')">Vue Crash Course</button>
  </div>
  <router-view />
</template>

<style scoped>
.router-link-exact-active {
  color: red;
}

button {
  margin: 10px;
}
</style>
