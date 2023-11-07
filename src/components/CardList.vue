<script setup lang="ts">
import CardItem from './CardItem.vue'
import EllipsisIcon from './icons/IconEllipsis.vue'
</script>

<template>
  <ul class="list">
    <div class="list-heading">
      <h2>List</h2>
      <div class="list-options"><EllipsisIcon /></div>
    </div>
    <CardItem />
    <CardItem />
    <div class="list-footer">
      <h3>+ Add new card</h3>
    </div>
  </ul>
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
  border: dashed 1px var(--clr-text-300);
  cursor: pointer;
}
.list-footer h3 {
  color: var(--clr-text);
}
</style>
