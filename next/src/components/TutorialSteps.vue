<template>
  <section>
    <div class="section light-bg pb-0">
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
              <li class="media">
                <div class="circle-icon me-4">1</div>
                <div class="media-body">
                  <h4 class="h4 h-auto" style="color: #2F5696">下载</h4>
                  <p>通过上方的下载链接下载Edgeless Hub聚合客户端并运行<br /><small style="color: #505356">提示：Edgeless Hub仅支持Windows10
                      64位平台，您可能需要根据提供的教程自行完成制作。</small> </p>
                </div>
              </li>
              <li class="media my-4">
                <div class="circle-icon me-4">2</div>
                <div class="media-body">
                  <h4 class="h4 h-auto" style="color: #2F5696">写入</h4>
                  <p>将一个容量大于等于1GB（建议4GB及以上且支持USB3.x）的空U盘插入计算机，运行Edgeless Hub并根据提示执行写入操作<br /><small
                      style="color: #505356">注意：U盘内的数据（包括所有分区数据）都将会被清空！请注意备份！</small></p>
                </div>
              </li>
              <li class="media">
                <div class="circle-icon me-4">3</div>
                <div class="media-body">
                  <h4 class="h4 h-auto" style="color: #2F5696">配置</h4>
                  <p>在Edgeless Hub的插件板块中下载、管理您的插件，或是进行个性化配置<br /><small
                      style="color: #505356">从下载站下载的主题资源包没有特定的位置，请任意新建一个文件夹放置</small> </p>
                </div>
              </li>
              <li class="media mt-4">
                <div class="text-end">
                  <a href="https://wiki.edgeless.top/v2/guide/burn.html" target="_blank"
                    class="btn btn-primary">详细步骤</a>
                </div>
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

<style scoped>
.section {
  padding: 60px 0;
}

.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1;
}

.circle-icon {
  width: 50px;
  height: 50px;
  background-color: #2F5696;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
}

.btn-primary {
  background-color: #2F5696;
  border-color: #2F5696;
}
</style>
