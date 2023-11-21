<script setup lang="ts">
import SearchIcon from './icons/IconSearch.vue'
</script>

<template>
  <div class="searchBar">
    <input type="text" id="search" />
    <label for="search">
      <SearchIcon />
    </label>
  </div>
</template>

<style scoped>
.searchBar {
  flex: 1;
  display: flex;
  gap: 8px;
  max-width: 512px;
  align-items: center;
  padding-inline: 16px;
  background: var(--clr-bg-mute);
  border-radius: 100vw;
  color: var(--clr-text-400);
}

.searchBar input {
  background: none;
  color: var(--clr-text);
  height: 60%;
  width: 100%;
  z-index: 1;
}

.searchBar label {
  cursor: pointer;
}
</style>
