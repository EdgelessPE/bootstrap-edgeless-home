<template>
  <Teleport to="body">
    <div
      class="modal-overlay"
      :class="{ 'is-visible': visible && !isClosing }"
      @click="handleClose"
    >
      <div class="modal-container image-modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">{{ title }}</h3>
          <button class="modal-close" @click="handleClose" aria-label="关闭">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body image-modal-body">
          <img :src="imageSrc" :alt="alt" class="modal-image" />
          <p class="modal-hint">通过扫码领红包来捐赠我们</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  visible?: boolean;
  imageSrc: string;
  alt?: string;
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  alt: "",
  title: "捐赠支持",
});

const emit = defineEmits<{
  close: [];
}>();

const isClosing = ref(false);

const handleClose = () => {
  if (isClosing.value) return;
  isClosing.value = true;
  setTimeout(() => {
    isClosing.value = false;
    emit("close");
  }, 250);
};

watch(() => props.visible, (newVal) => {
  if (newVal) {
    isClosing.value = false;
  }
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}

.modal-overlay.is-visible {
  opacity: 1;
  visibility: visible;
}

.modal-container {
  background: white;
  border-radius: 1rem;
  width: 100%;
  max-width: 560px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transform: scale(0.95) translateY(10px);
  opacity: 0;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.modal-overlay.is-visible .modal-container {
  transform: scale(1) translateY(0);
  opacity: 1;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  flex-shrink: 0;
}

.modal-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.modal-close {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: #94a3b8;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: #f8fafc;
  color: #1e293b;
}

.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
  text-align: center;
}

.image-modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.modal-image {
  max-width: 100%;
  max-height: 60vh;
  border-radius: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.modal-hint {
  color: #64748b;
  font-size: 0.875rem;
  margin: 0;
}

@media (max-width: 640px) {
  .modal-overlay {
    align-items: flex-end;
    padding: 0;
  }

  .modal-container {
    max-width: 100%;
    max-height: 85vh;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transform: translateY(100%);
  }

  .modal-overlay.is-visible .modal-container {
    transform: translateY(0);
  }
}
</style>