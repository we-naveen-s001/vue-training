<template>
  <h1>Users Page</h1>
  <router-link
    :to="{
      name: 'UserSingle',
      params: { id: 123 },
      query: { name: 'test name' },
    }"
  >
    User with id 123
  </router-link>
</template>
