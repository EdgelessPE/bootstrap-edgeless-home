<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar" :class="{ 'top-nav-collapse': isScrolled }">
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
          <li class="nav-item">
            <a class="nav-link" href="#">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#feature">特性</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#donate">捐赠</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://wiki.edgeless.top/v2" target="_blank">文档</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/EdgelessPE/Edgeless" target="_blank">GitHub</a>
          </li>
        </ul>
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item">
            <a href="#download" class="nav-link border border-light rounded waves-effect waves-light">&nbsp;&nbsp;&nbsp;下载&nbsp;&nbsp;&nbsp;</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
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
</style>
