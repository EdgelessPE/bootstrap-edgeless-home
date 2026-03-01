<template>
  <section class="card wow-fadeIn bg-cover" style="background-image: url(/img/picbed/d.jpg);">
    <div class="card-body text-white text-center py-5 px-5 my-5">
      <div class="mb-4">
        <h1 class="h1 h-auto"><strong>立即获取</strong>
          <span class="font-earth">edgElEss</span><strong>及其组件</strong>
        </h1>
      </div>
      <div class="flex flex-wrap justify-center gap-4 my-8">
        <a
          v-for="link in downloadLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          class="btn btn-outline-white inline-flex gap-2 items-center"
          role="button"
        >
          <i :class="link.icon"></i> {{ link.text }}
        </a>
      </div>
      <p><small><i>使用Edgeless（包括其相关功能）表示您已经阅读并同意<a href="https://wiki.edgeless.top/v2/global/contract.html"
              target="_blank" style="color: white">手册中的用户协议</a></i></small></p>
    </div>
  </section>
</template>

<script setup>
const downloadLinks = [
  { url: 'https://down.edgeless.top', icon: 'fas fa-arrow-circle-down', text: '下载站' },
  { url: 'https://down.edgeless.top/?backup=1', icon: 'fas fa-download', text: '备用站' },
  { url: 'https://down.edgeless.top/?backup=2', icon: 'fas fa-cloud', text: '网盘分享' },
]
</script>
