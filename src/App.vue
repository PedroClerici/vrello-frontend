<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CardList from './components/CardList.vue'
import type { List } from './types/list'
import type { Ref } from 'vue'

const lists: Ref<List[] | null> = ref(null)

function getLists() {
  axios
    .get('http://localhost:3000/lists')
    .then((res) => {
      lists.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(() => {
  getLists()
})
</script>

<template>
  <CardList
    v-for="list in lists"
    :key="list.id"
    :list="list"
  />
</template>

<style>
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-bg);
}

#app {
  display: flex;
  gap: 10px;
}
</style>
