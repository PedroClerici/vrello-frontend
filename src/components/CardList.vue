<script setup lang="ts">
import draggable from 'vuedraggable'
import axios from 'axios'
import CardItem from './CardItem.vue'
import EllipsisIcon from './icons/IconEllipsis.vue'
import type { Card } from '../types/card.d.ts'
import type { List } from '../types/list.d.ts'
import { watch } from 'vue'

const { list } = defineProps<{
  list: List
}>()

watch(list, () => {
  axios
    .put(`http://localhost:3000/lists/${list.id}`, list)
    .then((res) => {
      console.log('List updated: ', res.data)
    })
    .catch((err) => {
      console.log('Error updating the list: ', err)
    })
})
</script>

<template>
  <draggable
    v-if="list"
    :list="list.cards"
    group="list"
    tag="ul"
    class="list"
    item-key="id"
    ghost-class="ghost"
  >
    <template #header>
      <div class="list-heading">
        <h2>{{ list.title }}</h2>
        <div class="list-options"><EllipsisIcon /></div>
      </div>
    </template>
    <template #item="{ element: card }: { element: Card }">
      <CardItem
        :id="card.id"
        :image="card.image"
        :tags="card.tags"
        :title="card.title"
        :description="card.description"
        :attachments="card.attachments"
        :notes="card.notes"
      />
    </template>
    <template #footer>
      <div class="list-footer">
        <h3>+ Add new card</h3>
      </div>
    </template>
  </draggable>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 362px;
}

.list-heading {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 12px 20px;
  background: var(--clr-bg-soft);
  border-radius: var(--br-base);
}

.list-options {
  display: flex;
  margin-left: auto;
  color: var(--clr-text-300);
  cursor: pointer;
}

.list-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  border-radius: var(--br-base);
  border: dashed 1px var(--clr-text-200);
  cursor: pointer;
}
.list-footer h3 {
  color: var(--clr-text);
}
.ghost {
  position: relative;
}
.ghost::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-bg);
  border-radius: var(--br-base);
  border: dashed 1px var(--clr-text-200);
}
</style>
