<template>
  <section>
    <h3 class="my-5 h3 text-center h-auto">打动你的更多细节</h3>
    <div
      v-for="(row, rowIndex) in features"
      :key="rowIndex"
      class="row features-small mt-5 wow fadeIn"
      :class="{ 'mt-4': rowIndex > 0 }"
    >
      <div v-for="(feature, index) in row" :key="index" class="col-xl-3 col-lg-6">
        <div class="row">
          <div class="col-2">
            <i :class="[feature.icon, 'fa-2x', 'mb-1', 'indigo-text']" aria-hidden="true"></i>
          </div>
          <div class="col-10 mb-2" :class="{ 'ps-3': index === 0 }">
            <h5 class="feature-title font-bold mb-1">{{ feature.title }}</h5>
            <p class="grey-text mt-2" v-html="feature.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  [
    { icon: 'fab fa-usb', title: '完整的U盘管理过程', description: '拥有第三方提供的U盘管家，支持悬浮窗和托盘管理USB存储设备' },
    { icon: 'fas fa-desktop', title: '重写复现的显示设置', description: '业界首创使用"分辨率.txt"和"wp.jpg"自定义启动分辨率和壁纸、支持PE内更改分辨率和更换壁纸' },
    { icon: 'fa fa-file-image', title: '缩略图可用', description: '支持资源管理器界面显示缩略图，附带原生图片查看器' },
    { icon: 'fa fa-arrow-down', title: '插件包下载器', description: '内置插件包下载器，即装即用的畅快体验' },
  ],
  [
    { icon: 'fa fa-list-alt', title: '过期插件包检查功能', description: '跟随内核实时更新已过期插件包信息，避免不必要的空间浪费' },
    { icon: 'fa fa-link', title: '关联.wim/.esd文件', description: '业界首创.wim/.esd文件关联到NTSetup，初代源代码开源在无忧启动论坛' },
    { icon: 'fa fa-database', title: '智能虚拟光驱', description: '提供镜像操作面板，快速安装系统镜像' },
    { icon: 'fa fa-folder', title: '快速访问安装镜像文件夹', description: '自动在桌面生成U盘安装镜像文件夹的快捷方式' },
  ],
  [
    { icon: 'fa fa-laptop', title: '较为全面的驱动支持', description: '完美驱动您的新机型' },
    { icon: 'fa fa-mobile', title: 'MTP和USB共享网络', description: '支持部分手机的MTP和RNDIS功能（取决于手机驱动是否能安装）' },
    { icon: 'fa fa-cube', title: 'MSI安装包支持', description: '允许部分MSI安装包运行' },
    { icon: 'far fa-file-code', title: '补充"Windows"文件夹', description: '快速补充缺失的运行库文件' },
  ],
  [
    { icon: 'fas fa-cogs', title: '功能开关', description: '无需插件包，快速实现部分个人偏好选项的设置' },
    { icon: 'fa fa-arrow-circle-up', title: 'LocalBoost仓库加速', description: '将插件安装至本地硬盘，以提升80%的Edgeless启动速度' },
    { icon: 'fa fa-plug', title: '全局日志和API', description: '指定日志文件写入方便提交报告BUG<br>提供便捷的API以供调用' },
    { icon: 'fa fa-terminal', title: '自定义Hook脚本', description: '通过自行编写Hook脚本为Edgeless提供更强的功能和特性' },
  ],
]
</script>

<style scoped>
.feature-title {
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.grey-text {
  color: #6c757d;
  margin-top: 0.5rem;
}

.indigo-text {
  color: #3f51b5;
}

.wow.fadeIn {
  animation-duration: 1s;
}
</style>
