<script setup lang="ts">
import GlobeIcon from './icons/IconGlobe.vue'
</script>

<template>
  <div class="menu">
    <h1>Brackets</h1>
    <div class="visibility">
      <GlobeIcon />
      <h3>Public</h3>
    </div>
    <span class="filters">Filters</span>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  margin-block: 16px;
  gap: 10px;
}

.visibility {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--clr-text-400);
  cursor: pointer;
}

.visibility h3 {
  color: var(--clr-text-300);
}

.filters {
  margin-left: auto;
  font-size: calc(var(--fs-large) - 35%);
  color: var(--clr-text);
  cursor: pointer;
}
</style>
