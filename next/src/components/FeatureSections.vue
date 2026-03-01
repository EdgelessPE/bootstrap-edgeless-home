<template>
  <main>
    <div class="container">
      <!-- Section 1 -->
      <section class="w3l-index-block3">
        <div class="py-md-5">
          <div class="container py-md-3">
            <h2 class="h2 text-center mb-5 h-auto">谁说PE只能满足维护？</h2>
            <div class="row">
              <div class="col-md-6 mb-4">
                <h4 class="mb-4 h4 h-auto">{{ introSection.title }}</h4>
                <p v-for="(text, i) in introSection.texts" :key="i" class="mb-3">{{ text }}</p>
              </div>
              <div class="col-md-6 mb-4">
                <img :src="introSection.image" class="img-fluid shadow-z-depth-2 rounded" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2 -->
      <section class="mt-5 wow-fadeIn">
        <div class="row">
          <div class="col-md-6 mb-4">
            <img :src="coreSection.image" class="img-fluid shadow-z-depth-2 rounded" alt="" />
          </div>
          <div class="col-md-6 mb-4">
            <h3 class="h3 mb-4 h-auto">{{ coreSection.title }}</h3>
            <p v-for="(text, i) in coreSection.texts" :key="i" class="mb-3">{{ text }}</p>
            <div id="plugin"></div>
          </div>
        </div>
      </section>

      <hr class="my-5" />

      <!-- Section 3: 强大的插件包 -->
      <section>
        <h3 class="h3 text-center mb-5">{{ pluginSection.title }}</h3>
        <div class="row wow-fadeIn">
          <div class="col-lg-6 col-md-12 px-4">
            <div v-for="(feature, index) in pluginFeatures" :key="index" class="row mb-6">
              <div class="col-1 me-3">
                <i :class="[feature.icon, 'fa-2x']" :style="{ color: feature.color }"></i>
              </div>
              <div class="col-10">
                <h5 class="feature-title">{{ feature.title }}</h5>
                <p class="grey-text" v-html="feature.description.replace('\n', '<br />')"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <img :src="pluginSection.image" class="img-fluid shadow-z-depth-2 rounded" alt="" />
          </div>
        </div>
        <div id="theme"></div>
      </section>

      <hr class="my-5" />

      <!-- Section 4: 优雅的主题包 -->
      <section>
        <h3 class="h3 text-center mb-5">{{ themeSection.title }}</h3>
        <div class="row wow-fadeIn">
          <div class="col-md-6 mb-4">
            <img :src="themeSection.image" class="img-fluid shadow-z-depth-2 rounded" alt="" />
          </div>
          <div class="col-lg-6 col-md-12 px-4">
            <div v-for="(feature, index) in themeFeatures" :key="index" class="row mb-6">
              <div class="col-1 me-3">
                <i :class="[feature.icon, 'fa-2x']" :style="{ color: feature.color }"></i>
              </div>
              <div class="col-10">
                <h5 class="feature-title">{{ feature.title }}</h5>
                <p class="grey-text" v-html="feature.description.replace('\n', '<br />')"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="my-5" />

      <!-- Section 5: 酣畅淋漓 分秒必争 -->
      <section>
        <h3 class="h3 text-center mb-5">{{ performanceSection.title }}</h3>
        <div>
          <div>
            <div v-for="(feature, index) in performanceFeatures" :key="index" class="row mb-6">
              <div class="col-1 me-3">
                <i :class="[feature.icon, 'fa-2x']" :style="{ color: feature.color }"></i>
              </div>
              <div class="col-10">
                <h5 class="feature-title">{{ feature.title }}</h5>
                <p class="grey-text" v-html="feature.description.replace('\n', '<br />')"></p>
              </div>
            </div>
          </div>
        </div>
        <div id="clear"></div>
      </section>
    </div>
  </main>
</template>

<script setup>
const introSection = {
  title: '维护只是副业，我们对PE有更高的追求',
  texts: [
    'Edgeless的创立旨在试图替代WTG的部分应用场景',
    '在保留原生Win10系统体验的同时提供强大、便捷、易用的自定义能力',
    '我们不断探索PE的极限，力图打造可玩性最佳的PE工具，为您呈现一份最适合您的PE'
  ],
  image: '/img/picbed/f1.jpg'
}

const coreSection = {
  title: '基于 Win10 的PE核心',
  texts: [
    '• 使用19043作为母盘，强力驱动主流配置机型',
    '• 支持Legacy+UEFI双引导，支持识别主流NVME协议SSD',
    '• 提供有线+无线网络连接能力，同时具备较为完整的库文件支持'
  ],
  image: '/img/picbed/f2.jpg'
}

const pluginSection = {
  title: '强大的插件包',
  image: '/img/picbed/f3.jpg'
}

const themeSection = {
  title: '优雅的主题包',
  image: '/img/picbed/f4.jpg'
}

const performanceSection = {
  title: '酣畅淋漓 分秒必争'
}

const pluginFeatures = [
  {
    icon: 'fa fa-hashtag',
    color: '#00bcd4',
    title: '功能强劲',
    description: '软件、壁纸、图标、主题、脚本、驱动、库文件...\n简单的操作，让您无需具备相应专业知识即可全面定制属于您的启动盘'
  },
  {
    icon: 'fa fa-rocket',
    color: '#F44336',
    title: '易于管理',
    description: '在启动盘指定目录放置.7z插件包即可应用插件\n使用命令行包管理程序ept或聚合客户端完全管理您的插件'
  },
  {
    icon: 'fa fa-book',
    color: '#4caf50',
    title: '提供开发者文档',
    description: '插件包原理简单易懂，快速完成开发\n使用专为调试插件包设计的开发工具并在交流群寻求帮助'
  },
]

const themeFeatures = [
  {
    icon: 'fa fa-magic',
    color: '#ff9800',
    title: '覆盖全面',
    description: '启动界面、桌面图标、系统图标、鼠标指针、桌面壁纸、开始菜单样式均可实现修改'
  },
  {
    icon: 'fa fa-puzzle-piece',
    color: '#3F51B5',
    title: '控制面板',
    description: '使用主题包作者提供的控制面板实现更全面的主题沉浸体验'
  },
  {
    icon: 'fa fa-graduation-cap',
    color: '#9c27b0',
    title: '轻松上手，助力开发',
    description: '专注于内容差异的艺术创作，无需操心底层实现\n允许使用已有资源包搭配生成主题包'
  },
]

const performanceFeatures = [
  {
    icon: 'fa fa-snowflake',
    color: '#03A9F4',
    title: '删去不常用的多余组件',
    description: 'Edgeless的定位并非维护PE，因此我们大胆地删除了启动菜单及其他启动内核用不到的组件'
  },
  {
    icon: 'fa fa-window-restore',
    color: '#009688',
    title: '寄生启动',
    description: '业界首次提出"寄生启动"概念，依托于现有启动盘启动Edgeless而无需重新制作启动盘，同时享有更优秀的启动菜单和旧版内核'
  },
  {
    icon: 'fa fa-bolt',
    color: '#ffeb3b',
    title: '轻量级架构',
    description: '镜像启动逻辑与微软官方镜像类似，便于实现更多自定义玩法'
  },
]
</script>
