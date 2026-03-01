<template>
  <section class="w3l-index-block3 pt-3 pb-5">
    <ImageModal
      :visible="showModal"
      imageSrc="/img/alipay.jpg"
      alt="支付宝捐赠码"
      @close="showModal = false"
    />
    <div class="section-info py-md-5">
      <div class="container py-md-3">
        <h1 class="h1 text-center h-auto" style="color: #2F5696">
          如果您认可<span class="font-earth">edgElEss</span>
          <br />
          请帮助我们继续前行
        </h1>

        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <a class="inline-block" href="https://wiki.edgeless.top/v2/global/donate.html" target="_blank">
              <img src="/img/pay.png" alt="捐赠二维码" class="img-fluid rounded mb-3" style="max-width: 250px;" />
              <h4 style="color: #0072bc">支持支付宝、微信</h4>
            </a>
            <small class="d-block" style="color: #0072bc">点击二维码查看捐赠列表，如需要退款请联系我们</small>
          </div>
        </div>

        <div class="text-center mt-4">
          <h3 class="h4 mb-4" style="color: #2F5696">扫码付费过于直白？我们提供了额外的捐赠方式</h3>
          <button class="btn btn-primary" @click="showModal = true">让我康康</button>
        </div>
      </div>
    </div>
    <div id="download"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ImageModal from './ImageModal.vue'

const showModal = ref(false)
</script>

<style scoped>
.section-info {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
}

.btn-primary {
  background-color: #2F5696;
  border-color: #2F5696;
}
</style>