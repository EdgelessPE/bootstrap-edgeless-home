<template>
  <section class="details-section">
    <h3 class="my-5 h3 text-center section-title">打动你的更多细节</h3>
    <div class="section-divider"></div>
    <div
      v-for="(row, rowIndex) in features"
      :key="rowIndex"
      class="row features-small mt-5 wow-fadeIn"
      :class="{ 'mt-4': rowIndex > 0 }"
    >
      <div v-for="(feature, index) in row" :key="index" class="col-xl-3 col-lg-6 col-md-6">
        <div class="detail-card">
          <div class="detail-icon">
            <i :class="[feature.icon]" aria-hidden="true"></i>
          </div>
          <div class="detail-content">
            <h5 class="feature-title">{{ feature.title }}</h5>
            <p class="grey-text" v-html="feature.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  [
    {
      icon: "fab fa-usb",
      title: "完整的U盘管理过程",
      description: "拥有第三方提供的U盘管家，支持悬浮窗和托盘管理USB存储设备",
    },
    {
      icon: "fas fa-desktop",
      title: "重写复现的显示设置",
      description:
        '业界首创使用"分辨率.txt"和"wp.jpg"自定义启动分辨率和壁纸、支持PE内更改分辨率和更换壁纸',
    },
    {
      icon: "fa fa-file-image",
      title: "缩略图可用",
      description: "支持资源管理器界面显示缩略图，附带原生图片查看器",
    },
    {
      icon: "fa fa-arrow-down",
      title: "插件包下载器",
      description: "内置插件包下载器，即装即用的畅快体验",
    },
  ],
  [
    {
      icon: "fa fa-list-alt",
      title: "过期插件包检查功能",
      description: "跟随内核实时更新已过期插件包信息，避免不必要的空间浪费",
    },
    {
      icon: "fa fa-link",
      title: "关联.wim/.esd文件",
      description: "业界首创.wim/.esd文件关联到NTSetup，初代源代码开源在无忧启动论坛",
    },
    {
      icon: "fa fa-database",
      title: "智能虚拟光驱",
      description: "提供镜像操作面板，快速安装系统镜像",
    },
    {
      icon: "fa fa-folder",
      title: "快速访问安装镜像文件夹",
      description: "自动在桌面生成U盘安装镜像文件夹的快捷方式",
    },
  ],
  [
    { icon: "fa fa-laptop", title: "较为全面的驱动支持", description: "完美驱动您的新机型" },
    {
      icon: "fa fa-mobile",
      title: "MTP和USB共享网络",
      description: "支持部分手机的MTP和RNDIS功能（取决于手机驱动是否能安装）",
    },
    { icon: "fa fa-cube", title: "MSI安装包支持", description: "允许部分MSI安装包运行" },
    {
      icon: "far fa-file-code",
      title: '补充"Windows"文件夹',
      description: "快速补充缺失的运行库文件",
    },
  ],
  [
    {
      icon: "fas fa-cogs",
      title: "功能开关",
      description: "无需插件包，快速实现部分个人偏好选项的设置",
    },
    {
      icon: "fa fa-arrow-circle-up",
      title: "LocalBoost仓库加速",
      description: "将插件安装至本地硬盘，以提升80%的Edgeless启动速度",
    },
    {
      icon: "fa fa-plug",
      title: "全局日志和API",
      description: "指定日志文件写入方便提交报告BUG<br>提供便捷的API以供调用",
    },
    {
      icon: "fa fa-terminal",
      title: "自定义Hook脚本",
      description: "通过自行编写Hook脚本为Edgeless提供更强的功能和特性",
    },
  ],
];
</script>

<style scoped>
.details-section {
  padding: 2rem 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
}

.section-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #60a5fa);
  border-radius: 2px;
  margin: 0 auto 2.5rem;
}

.detail-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.detail-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
  border-color: #e2e8f0;
}

.detail-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2563eb, #60a5fa);
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.detail-icon i {
  font-size: 1.25rem;
  color: white;
}

.detail-content {
  flex: 1;
}

.feature-title {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.grey-text {
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
}

.indigo-text {
  color: #2563eb !important;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
