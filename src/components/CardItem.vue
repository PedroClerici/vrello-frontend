<script setup lang="ts">
import EditIcon from './icons/IconEdit.vue'
import NoteIcon from './icons/IconNote.vue'
import AttachmentIcon from './icons/IconAttachment.vue'
import type { Card } from '../types/card'

const {
  title,
  description,
  image,
  tags,
  notes,
  attachments
} = defineProps<Card>()
</script>

<template>
  <li class="card" draggable="true">
    <div v-show="image" class="card-img">
      <img src="../assets/donut.jpeg" />
    </div>
    <ul
      v-show="tags"
      class="card-tags card-tags--compressed"
    >
      <li
        v-for="(tag, index) in tags"
        :key="index"
        :style="{ background: `var(--clr-${tag.color})` }"
      >
        <span>{{ tag.name }}</span>
      </li>
    </ul>
    <div class="card-text">
      <h3>{{ title }}</h3>
      <p v-show="description">{{ description }}</p>
    </div>
    <div class="card-footer">
      <button>
        <EditIcon />
      </button>
      <div class="card-info">
        <span v-show="notes">
          {{ notes }}
          <NoteIcon />
        </span>
        <span v-show="attachments">
          {{ attachments }}
          <AttachmentIcon />
        </span>
      </div>
    </div>
  </li>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: var(--clr-bg-soft);
  border-radius: var(--br-base);
}

.card-img {
  width: 100%;
  height: 170px;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--br-base);
}
.card-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 90%;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.card-tags li {
  display: flex; /* For some reason fix weird height properties? */
  border-radius: 4px;
  padding: 0 0.5rem;
  cursor: pointer;
}

.card-tags span {
  font-size: var(--fs-small);
  font-weight: 400;
  color: var(--clr-text-400);
}

.card-tags--compressed li {
  width: 60px;
  height: 8px;
  border-radius: var(--br-base);
}

.card-tags--compressed span {
  display: none;
}

.card-footer {
  display: flex;
}

.card-footer button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: var(--clr-highlight);
  color: var(--clr-bg-mute);
}

.card-footer button:hover {
  cursor: pointer;
}

.card-info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}

.card-info span {
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: var(--fs-small);
  color: var(--clr-text-200);
}
</style>
