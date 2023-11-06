<script setup lang="ts">
import EditIcon from './icons/IconEdit.vue'
import NoteIcon from './icons/IconNote.vue'
import AttachmentIcon from './icons/IconAttachment.vue'
</script>

<template>
  <div class="card" draggable="true">
    <div class="card-img"></div>
    <!-- <ul class="tags">
      <li>Priority</li>
      <li>Design Team</li>
      <li>One more step</li>
    </ul> -->
    <div class="card-text">
      <h3>Types of paper in catalog printing</h3>
      <p>
        Branding is no longing about visual appeal (or cherry in the pie example, as given in my
        earlier article)
      </p>
    </div>
    <div class="card-footer">
      <button>
        <EditIcon />
      </button>
      <div class="card-info">
        <span>
          23
          <NoteIcon />
        </span>
        <span>
          98
          <AttachmentIcon />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 362px;
  background-color: var(--clr-bg-soft);
  border-radius: var(--br-base);
}

.card-img {
  width: 100%;
  height: 170px;
  background-color: var(--clr-bg-mute);
  border-radius: var(--br-base);
}
.card-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 90%;
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
  color: var(--clr-text-200);
}
</style>
