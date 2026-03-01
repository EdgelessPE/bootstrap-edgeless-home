<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar"
    :class="{ 'top-nav-collapse': isScrolled }">
    <div class="container">
      <a class="navbar-brand" href="#">
        <span class="font-earth">edgElEss</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li v-for="link in navLinks" :key="link.href" class="nav-item">
            <a
              class="nav-link"
              :href="link.href"
              :target="link.target"
            >{{ link.text }}</a>
          </li>
        </ul>
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item">
            <a :href="downloadLink.href" class="nav-link border border-light rounded waves-effect waves-light px-3">{{ downloadLink.text }}</a>
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
  transition: background-color 0.3s ease;
  z-index: 1040;
}

.navbar.top-nav-collapse {
  background: #1c2331 !important;
}

.scrolling-navbar {
  padding-top: 10px;
  padding-bottom: 10px;
}

.nav-link {
  color: #fff;
}
</style>