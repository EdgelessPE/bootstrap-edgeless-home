<template>
  <section class="download-section wow-fadeIn">
    <div class="download-overlay"></div>
    <div class="card-body text-white text-center py-5 px-5 my-5">
      <div class="mb-4">
        <h1 class="h1 h-auto download-title">
          <strong>立即获取</strong> <span class="font-earth">edgElEss</span
          ><strong>及其组件</strong>
        </h1>
      </div>
      <div class="download-buttons my-8">
        <a
          v-for="link in downloadLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          class="btn download-btn"
          role="button"
        >
          <i :class="link.icon"></i> {{ link.text }}
        </a>
      </div>
      <p class="download-agreement">
        <small
          ><i
            >使用Edgeless（包括其相关功能）表示您已经阅读并同意<a
              href="https://wiki.edgeless.top/v2/global/contract.html"
              target="_blank"
              >手册中的用户协议</a
            ></i
          ></small
        >
      </p>
    </div>
  </section>
</template>

<script setup>
const downloadLinks = [
  { url: "https://down.edgeless.top", icon: "fas fa-arrow-circle-down", text: "下载站" },
  { url: "https://down.edgeless.top/?backup=1", icon: "fas fa-download", text: "备用站" },
  { url: "https://down.edgeless.top/?backup=2", icon: "fas fa-cloud", text: "网盘分享" },
];
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
</style>
