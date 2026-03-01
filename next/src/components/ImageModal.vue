<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-9999"
        @click="close">
        <div class="relative bg-white rounded-lg p-15px" @click.stop>
          <button
            class="absolute top-2 right-1 z-1 text-24px text-gray-400 bg-transparent border-none cursor-pointer leading-1"
            @click="close">×</button>
          <img :src="imageSrc" :alt="alt" class="block w-auto h-auto max-w-80vw max-h-80vh rounded" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  visible?: boolean
  imageSrc: string
  alt?: string
}

withDefaults(defineProps<Props>(), {
  visible: false,
  alt: ''
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
}
</style>