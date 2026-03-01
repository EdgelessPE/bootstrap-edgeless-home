<template>
  <section>
    <div class="py-15 pb-0 light-bg">
      <div class="text-center">
        <h1 class="h1 h-auto mb-2" style="color: #2F5696">
          三步打造属于你的
          <div class="font-earth">edgElEss</div>
        </h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 d-flex align-items-center">
            <ul class="list-unstyled ui-steps">
              <li
                v-for="(step, index) in steps"
                :key="index"
                class="flex items-start"
                :class="{ 'my-4': index === 1, 'mt-4': index === 3 }"
              >
                <template v-if="index < 3">
                  <div class="circle-icon me-4">{{ index + 1 }}</div>
                  <div class="flex-1">
                    <h4 class="h4 h-auto" style="color: #2F5696">{{ step.title }}</h4>
                    <p v-html="step.description"></p>
                  </div>
                </template>
                <template v-else>
                  <div class="text-end">
                    <a :href="step.url" target="_blank" class="btn btn-primary">{{ step.text }}</a>
                  </div>
                </template>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <img src="/img/picbed/b.png" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: '下载',
    description: '通过上方的下载链接下载Edgeless Hub聚合客户端并运行<br /><small style="color: #505356">提示：Edgeless Hub仅支持Windows10 64位平台，您可能需要根据提供的教程自行完成制作。</small>'
  },
  {
    title: '写入',
    description: '将一个容量大于等于1GB（建议4GB及以上且支持USB3.x）的空U盘插入计算机，运行Edgeless Hub并根据提示执行写入操作<br /><small style="color: #505356">注意：U盘内的数据（包括所有分区数据）都将会被清空！请注意备份！</small>'
  },
  {
    title: '配置',
    description: '在Edgeless Hub的插件板块中下载、管理您的插件，或是进行个性化配置<br /><small style="color: #505356">从下载站下载的主题资源包没有特定的位置，请任意新建一个文件夹放置</small>'
  },
  {
    text: '详细步骤',
    url: 'https://wiki.edgeless.top/v2/guide/burn.html'
  },
]
</script>
