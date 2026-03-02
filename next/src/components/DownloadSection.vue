<template>
  <section class="download-section wow-fadeIn">
    <div class="download-overlay"></div>
    <div class="card-body text-white text-center py-5 px-5 my-5">
      <div class="mb-4">
        <h1 class="h1 h-auto download-title">
          <strong>立即获取</strong> <span class="font-earth">edgElEss</span><strong>及其组件</strong>
        </h1>
      </div>
      <div class="download-buttons my-8">
        <a :href="downloadLinks[0].url" target="_blank" class="btn download-btn" role="button">
          <i :class="downloadLinks[0].icon"></i> {{ downloadLinks[0].text }}
        </a>
        <button class="btn download-btn" @click="openModal('backup')">
          <i :class="downloadLinks[1].icon"></i> {{ downloadLinks[1].text }}
        </button>
        <button class="btn download-btn" @click="openModal('cloud')">
          <i :class="downloadLinks[2].icon"></i> {{ downloadLinks[2].text }}
        </button>
      </div>
      <p class="download-agreement">
        <small><i>使用Edgeless（包括其相关功能）表示您已经阅读并同意<a href="https://wiki.edgeless.top/v2/global/contract.html"
              target="_blank">手册中的用户协议</a></i></small>
      </p>
    </div>

    <ContentModal :visible="isModalVisible" :title="modalTitle" @close="closeModal">
      <div v-if="modalType === 'backup'" class="backup-content">
        <div class="backup-sponsor">
          <div class="sponsor-badge">
            <i class="fas fa-heart"></i> 赞助支持
          </div>
          <p class="sponsor-text">备用下载站由 <strong>BJY678</strong> 同学赞助支持</p>
          <p class="sponsor-desc">该站点存储策略为 OneDrive，由 BJY678 同学手动维护</p>
        </div>
        <div class="backup-links">
          <a href="https://www.edgelogs.com/" target="_blank" class="backup-link">
            <i class="fas fa-blog"></i>
            <span>BJY678的博客</span>
          </a>
          <a href="https://edgeless.work/" target="_blank" class="backup-link">
            <i class="fas fa-external-link-alt"></i>
            <span>点稽前往</span>
          </a>
        </div>
      </div>

      <div v-else-if="modalType === 'cloud'" class="cloud-content">
        <div class="cloud-section">
          <div class="cloud-section-title">
            <i class="fas fa-folder"></i> Edgeless Hub
          </div>
          <p class="cloud-desc">该链接将跳转至 Edgeless 下载站</p>
          <a href="https://down.edgeless.top" target="_blank" class="cloud-btn">
            <i class="fas fa-arrow-circle-down"></i> 前往下载站
          </a>
        </div>

        <div class="cloud-section">
          <div class="cloud-section-title">
            <i class="fas fa-box"></i> 插件包
          </div>
          <div class="cloud-links">
            <a href="https://caiyun.139.com/w/i/2prAHX6Beh96f" target="_blank" class="cloud-btn">
              <i class="fas fa-cloud"></i> 移动云盘 <span class="code">提取码 yc4d</span>
            </a>
          </div>
        </div>

        <div class="cloud-section">
          <div class="cloud-section-title">
            <i class="fas fa-palette"></i> 主题资源包
          </div>
          <div class="cloud-links">
            <a href="https://caiyun.139.com/w/i/2prAJE9KuGzkl" target="_blank" class="cloud-btn">
              <i class="fas fa-cloud"></i> 移动云盘 <span class="code">提取码 7yj7</span>
            </a>
            <a href="https://cloud.189.cn/t/rqaAFraIjM3u" target="_blank" class="cloud-btn cloud-btn-archived">
              <i class="fas fa-cloud"></i> 天翼云盘 <span class="archived-badge">已归档</span>
            </a>
          </div>
        </div>

        <div class="cloud-section">
          <div class="cloud-section-title">
            <i class="fas fa-folder-open"></i> 其他
          </div>
          <p class="cloud-desc">该链接指向 Socket 文件夹，你可以下载到 ISO 镜像和 Edgeless ME 等</p>
          <div class="cloud-links">
            <a href="https://caiyun.139.com/w/i/2prAJp8CbKUn3" target="_blank" class="cloud-btn">
              <i class="fas fa-cloud"></i> 移动云盘 <span class="code">提取码 pyn6</span>
            </a>
            <a href="https://cloud.189.cn/t/iiEbymnEfQFb" target="_blank" class="cloud-btn cloud-btn-archived">
              <i class="fas fa-cloud"></i> 天翼云盘 <span class="archived-badge">已归档</span>
            </a>
          </div>
        </div>
      </div>
    </ContentModal>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ContentModal from "./ContentModal.vue";

const downloadLinks = [
  { url: "https://down.edgeless.top", icon: "fas fa-arrow-circle-down", text: "下载站" },
  { url: "/jump/lurenjia.html", icon: "fas fa-download", text: "备用站" },
  { url: "/jump/189.html", icon: "fas fa-cloud", text: "网盘分享" },
];

type ModalType = "backup" | "cloud" | null;
const modalType = ref<ModalType>(null);

const modalTitle = computed(() => {
  return modalType.value === "backup" ? "备用下载站" : modalType.value === "cloud" ? "网盘分享" : "";
});

const isModalVisible = computed(() => {
  return modalType.value !== null;
});

const openModal = (type: "backup" | "cloud") => {
  modalType.value = type;
};

const closeModal = () => {
  modalType.value = null;
};
</script>

<style scoped>
.download-section {
  position: relative;
  background-image: url(/img/picbed/d.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  overflow: hidden;
  margin: 2rem 0;
}

.download-section .card-body {
  position: relative;
  z-index: 2;
  padding: 4rem 2rem;
}

.download-title {
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.download-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.download-btn {
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.download-btn:hover {
  background: white;
  color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  border-color: white;
}

.download-btn i {
  font-size: 1.1rem;
}

.download-agreement {
  color: rgba(255, 255, 255, 0.9);
  opacity: 0.85;
  margin-top: 1.5rem;
}

.download-agreement a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: underline;
  transition: color 0.3s ease;
}

.download-agreement a:hover {
  color: white;
}

@media (max-width: 768px) {
  .download-title {
    font-size: 1.5rem;
  }

  .download-section .card-body {
    padding: 3rem 1rem;
  }

  .download-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

.backup-content {
  text-align: center;
}

.backup-sponsor {
  margin-bottom: 1.5rem;
}

.sponsor-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  color: #92400e;
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.sponsor-text {
  font-size: 1rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.sponsor-desc {
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0;
}

.backup-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.backup-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  background: #f8fafc;
  color: #1e293b;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.backup-link:hover {
  background: #2563eb;
  color: white;
}

.cloud-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cloud-section {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.cloud-section:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.cloud-section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.cloud-section-title i {
  color: #2563eb;
}

.cloud-desc {
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.75rem;
}

.cloud-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cloud-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: #f8fafc;
  color: #1e293b;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.cloud-btn:hover {
  background: #2563eb;
  color: white;
}

.cloud-btn .code {
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 0.25rem;
  color: #2563eb;
  font-weight: 600;
}

.cloud-btn:hover .code {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.cloud-btn-archived {
  position: relative;
}

.archived-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.5rem;
  background: linear-gradient(135deg, #fecaca, #fca5a5);
  color: #b91c1c;
  border-radius: 9999px;
  font-size: 0.7rem;
  font-weight: 600;
  margin-left: 0.25rem;
}

.cloud-btn-archived:hover .archived-badge {
  background: linear-gradient(135deg, #f87171, #ef4444);
  color: white;
}
</style>
