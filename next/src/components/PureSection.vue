<template>
  <section>
    <h2 class="my-5 h2 text-center">不仅仅是纯净</h2>
    <div class="row features-small mb-5 mt-3 wow fadeIn">
      <div class="col-md-4">
        <div class="row mb-4">
          <div class="col-10">
            <h3 class="h3 h-auto">{{ pureSection.title }}</h3>
          </div>
        </div>
        <div v-for="(feature, index) in pureSection.features" :key="index" class="row mb-4">
          <div class="col-2">
            <i class="fas fa-check-circle fa-2x indigo-text"></i>
          </div>
          <div class="col-10">
            <h6 class="feature-title">{{ feature.title }}</h6>
            <p class="grey-text" v-html="feature.description"></p>
          </div>
        </div>
      </div>
      <div class="col-md-4 flex-center text-center">
        <img :src="centerImage" class="img-fluid shadow-z-depth-2 rounded" alt="" />
      </div>
      <div class="col-md-4 mt-2">
        <div class="row mb-4">
          <div class="col-10">
            <h3 class="h3 h-auto">{{ openSourceSection.title }}</h3>
          </div>
        </div>
        <div v-for="(feature, index) in openSourceSection.features" :key="index" class="row mb-4">
          <div class="col-2">
            <i class="fas fa-check-circle fa-2x indigo-text"></i>
          </div>
          <div class="col-10">
            <h6 class="feature-title">{{ feature.title }}</h6>
            <p class="grey-text" v-html="feature.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const centerImage = '/img/picbed/f5.png'

const pureSection = {
  title: '恪守"三无"原则',
  features: [
    { title: '无广告', description: '官方PE内核、官方插件、官方网站均无广告' },
    { title: '无收费', description: '官方PE内核、官方插件均为永久免费使用，内测交流群永久免费进群，拒绝变相收费' },
    { title: '无劫持', description: '官方PE核心、官方插件不会对本地硬盘的系统进行任何恶意修改' },
  ]
}

const openSourceSection = {
  title: '有胆量就开源',
  features: [
    { title: '多数原创代码均遵循MPL-2.0协议开源', description: '欢迎各位同行在遵循MPL-2.0协议的前提下使用我们的原创代码<br><a href="https://github.com/EdgelessPE/Edgeless" target="_blank">查看GitHub仓库</a>' },
    { title: '大量使用解释型代码', description: '使用批处理和PECMD脚本实现功能<br>无需复杂的逆向操作，Edgeless的运行过程清晰可见' },
    { title: '欢迎修改打包形成自己的作品', description: '我们开放了Edgeless内核的修改授权，请前往文档的"合作洽谈"章节查看要求' },
  ]
}
</script>

<style scoped>
.feature-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.grey-text {
  color: #6c757d;
}

.indigo-text {
  color: #3f51b5;
}

.shadow-z-depth-2 {
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}

.wow.fadeIn {
  animation-duration: 1s;
}
</style>
