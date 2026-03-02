<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar"
    :class="{ 'top-nav-collapse': isScrolled }">
    <div class="container">
      <a class="navbar-brand" href="#">
        <span class="font-earth brand-text">edgElEss</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li v-for="link in navLinks" :key="link.href" class="nav-item">
            <a class="nav-link" :href="link.href" :target="link.target">{{ link.text }}</a>
          </li>
        </ul>
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item">
            <a :href="downloadLink.href"
              class="text-[#ffffffe6] hover:text-[#ffffffe6] font-500 px-1 py-1.5 border border-light rounded waves-effect waves-light px-3">{{
                downloadLink.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const navLinks = [
  { text: '首页', href: '#' },
  { text: '特性', href: '#feature' },
  { text: '捐赠', href: '#donate' },
  { text: '文档', href: 'https://wiki.edgeless.top/v2', target: '_blank' },
  { text: 'GitHub', href: 'https://github.com/EdgelessPE/Edgeless', target: '_blank' },
]

const downloadLink = { text: '下载', href: '#download' }

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar {
  background: transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1040;
  padding: 0.75rem 0;
}

.navbar.top-nav-collapse {
  background: rgba(28, 35, 49, 0.95) !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 0;
}

.scrolling-navbar {
  padding-top: 10px;
  padding-bottom: 10px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 1rem !important;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  transition: all 0.3s ease;
  transform: translateX(-50%);
  border-radius: 1px;
}

.nav-link:hover {
  color: #fff;
}

.nav-link:hover::after {
  width: 60%;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-toggler {
  border: none;
  padding: 0.5rem;
}

.navbar-toggler:focus {
  box-shadow: none;
}

@media (max-width: 991px) {
  .navbar-collapse {
    background: rgba(28, 35, 49, 0.98);
    padding: 1rem;
    border-radius: 0 0 0.75rem 0.75rem;
    margin-top: 0.5rem;
  }

  .nav-link::after {
    display: none;
  }
}
</style>