<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import NavBar from './components/NavBar.vue'
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
  <NavBar />
  <div class="wrapper">
    <main>
      <CardList
        v-for="list in lists"
        :key="list.id"
        :list="list"
      />
    </main>
  </div>
</template>

<style>
body {
  display: flex;
  flex-direction: column;
}

.wrapper {
  margin-inline: auto;
  max-width: calc(100vw - var(--pg-padding) * 2);
}

main {
  flex: 1;
  display: flex;
  gap: 10px;
}
</style>
