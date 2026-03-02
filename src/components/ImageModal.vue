<template>
  <ContentModal :visible="visible" :title="title" @close="handleClose">
    <div class="image-modal-body">
      <img src="/img/alipay.jpg" alt="支付宝捐赠码" class="modal-image" />
      <p class="modal-hint">通过扫码领红包来捐赠，这样的捐赠方式不会被记录到捐赠列表</p>
    </div>
  </ContentModal>
</template>

<script setup lang="ts">
import ContentModal from "./ContentModal.vue";

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

const handleClose = () => {
  emit("close");
};
</script>

<style scoped>
.image-modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.modal-image {
  max-width: 100%;
  max-height: 60vh;
  border-radius: 0.5rem;
  box-shadow: 0 8px 24px var(--black-1);
}

.modal-hint {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
}
</style>
