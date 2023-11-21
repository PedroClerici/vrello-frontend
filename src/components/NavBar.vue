<script setup lang="ts">
import NavSearch from './NavSearch.vue'
import LogoIcon from './icons/IconLogo.vue'
import VrelloIcon from './icons/IconVrello.vue'
import AlertIcon from './icons/IconAlert.vue'
import PlusIcon from './icons/IconPlus.vue'
</script>

<template>
  <nav>
    <div class="logo">
      <LogoIcon />
      <VrelloIcon />
    </div>
    <span class="sep"></span>
    <NavSearch />
    <div class="actions">
      <AlertIcon />
      <PlusIcon />
      <div class="user-profile">
        <img src="https://placehold.co/40" />
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 12px var(--pg-padding);
  border-bottom: solid 1px var(--clr-divider);
  margin-bottom: 32px;
}

.logo {
  color: var(--clr-text);
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.sep {
  border-right: solid 1px var(--clr-divider);
}

.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--clr-text-300);
  margin-left: auto;
}

.user-profile {
  margin-left: 8px;
}
.user-profile img {
  border-radius: 100vh;
}
</style>
