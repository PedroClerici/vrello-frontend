<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import NavBar from './components/NavBar.vue'
import BoardMenu from './components/BoardMenu.vue'
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
    <BoardMenu />
    <main>
      <CardList
        v-for="list in lists"
        :key="list.id"
        :list="list"
      />
      <div class="new-list">
        <h3>+ Add new list</h3>
      </div>
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

.new-list {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  min-width: 362px;
  padding: 12px 20px;
  border-radius: var(--br-base);
  border: dashed 1px var(--clr-text-200);
  cursor: pointer;
}

.new-list h3 {
  color: var(--clr-text);
}
</style>
