<template>
  <section id="donate" class="w3l-index-block3 pt-3 pb-5 donate-section">
    <ImageModal
      :visible="showModal"
      imageSrc="/img/alipay.jpg"
      alt="支付宝捐赠码"
      @close="showModal = false"
    />
    <div class="donate-card">
      <div class="container py-md-3">
        <h1 class="h1 text-center donate-title h-auto">
          如果您认可<span class="font-earth">edgElEss</span>
          <br />
          请帮助我们继续前行
        </h1>

        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <a
              class="donate-link"
              href="https://wiki.edgeless.top/v2/global/donate.html"
              target="_blank"
            >
              <div class="qrcode-wrapper">
                <img src="/img/pay.png" alt="捐赠二维码" class="img-fluid" />
              </div>
              <h4 class="donate-qr-title">支持支付宝、微信</h4>
              <small class="d-block donate-hint"
                >点击二维码查看捐赠列表，如需要退款请联系我们</small
              >
            </a>
          </div>
        </div>

        <div class="text-center mt-4">
          <h3 class="h4 mb-4 donate-subtitle h-auto">扫码付费过于直白？我们提供了额外的捐赠方式</h3>
          <button class="btn btn-donate" @click="showModal = true">让我康康</button>
        </div>
      </div>
    </div>
    <div id="download"></div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ImageModal from "./ImageModal.vue";

const showModal = ref(false);
</script>

<style scoped>
.donate-section {
  padding: 3rem 0;
}

.donate-card {
  background: linear-gradient(135deg, var(--bg-light) 0%, var(--bg-lighter) 100%);
  border-radius: 1.5rem;
  padding: 3rem 2rem;
  box-shadow: 0 8px 30px var(--black-06);
  border: 1px solid var(--border-color);
}

.donate-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--bg-dark-start);
  margin-bottom: 2.5rem;
  line-height: 1.4;
}

.donate-link {
  display: inline-block;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.donate-link:hover {
  transform: translateY(-4px);
}

.qrcode-wrapper {
  background: var(--white);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 8px 24px var(--black-1);
  display: inline-block;
  margin-bottom: 1rem;
  max-width: 250px;
}

.qrcode-wrapper img {
  border-radius: 0.5rem;
  width: 100%;
}

.donate-qr-title {
  color: var(--primary-color);
  font-weight: 600;
  margin-top: 0.5rem;
}

.donate-hint {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.donate-subtitle {
  color: var(--text-body);
  font-weight: 500;
}

.btn-donate {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: var(--white);
  border: none;
  padding: 0.875rem 2.5rem;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px var(--primary-3);
}

.btn-donate:hover {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
  transform: translateY(-2px);
  box-shadow: 0 8px 20px var(--primary-4);
}

.btn-primary {
  background: var(--brand-blue);
  border-color: var(--brand-blue);
}

@media (max-width: 768px) {
  .donate-title {
    font-size: 1.5rem;
  }

  .donate-card {
    padding: 2rem 1rem;
  }
}
</style>
