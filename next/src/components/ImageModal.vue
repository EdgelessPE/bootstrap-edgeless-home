<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="modal-overlay" @click="close">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="close">×</button>
          <div class="w-228px h-340px">
            <img :src="imageSrc" :alt="alt" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  imageSrc: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  position: relative;
  width: 276px;
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
}

.modal-close {
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 24px;
  color: #999;
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
  z-index: 1;
}

.modal-close:hover {
  color: #333;
}

.modal-image {
  display: block;
  width: auto;
  height: auto;
  max-width: 80vw;
  max-height: 80vh;
  border-radius: 4px;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}
</style>