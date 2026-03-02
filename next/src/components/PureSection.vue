<template>
  <section class="pure-section">
    <h2 class="my-5 h2 text-center section-title">不仅仅是纯净</h2>
    <div class="section-divider"></div>
    <div class="row features-small mb-5 mt-3 wow-fadeIn align-items-stretch">
      <div class="col-md-4">
        <div class="content-card h-100">
          <div class="row mb-4">
            <div class="col-10">
              <h3 class="h3 h-auto card-title">{{ pureSection.title }}</h3>
            </div>
          </div>
          <div v-for="(feature, index) in pureSection.features" :key="index" class="feature-row mb-4">
            <div class="feature-icon">
              <i class="fas fa-check-circle fa-lg"></i>
            </div>
            <div class="feature-info">
              <h6 class="feature-title">{{ feature.title }}</h6>
              <p class="grey-text" v-html="feature.description"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 flex-center text-center">
        <div class="center-image-wrapper">
          <img :src="centerImage" class="img-fluid shadow-z-depth-2 rounded" alt="" />
        </div>
      </div>
      <div class="col-md-4 mt-2">
        <div class="content-card h-100">
          <div class="row mb-4">
            <div class="col-10">
              <h3 class="h3 h-auto card-title">{{ openSourceSection.title }}</h3>
            </div>
          </div>
          <div v-for="(feature, index) in openSourceSection.features" :key="index" class="feature-row mb-4">
            <div class="feature-icon">
              <i class="fas fa-check-circle fa-lg"></i>
            </div>
            <div class="feature-info">
              <h6 class="feature-title">{{ feature.title }}</h6>
              <p class="grey-text" v-html="feature.description"></p>
            </div>
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
.pure-section {
  padding: 2rem 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.section-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #60a5fa);
  border-radius: 2px;
  margin: 0 auto 2.5rem;
}

.content-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.content-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e2e8f0;
}

.feature-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.feature-icon {
  flex-shrink: 0;
  color: #2563eb;
  margin-top: 0.25rem;
}

.feature-info {
  flex: 1;
}

.feature-title {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.grey-text {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

.center-image-wrapper {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  background: white;
}

.center-image-wrapper img {
  border-radius: 0.75rem;
}

.indigo-text {
  color: #2563eb !important;
}

@media (max-width: 991px) {
  .content-card {
    margin-bottom: 1.5rem;
  }
  
  .center-image-wrapper {
    margin: 1.5rem 0;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
