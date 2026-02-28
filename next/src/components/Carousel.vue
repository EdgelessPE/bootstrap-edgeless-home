<template>
  <div id="carousel-example-1z" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#carousel-example-1z" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#carousel-example-1z" data-bs-slide-to="1"></li>
      <li data-bs-target="#carousel-example-1z" data-bs-slide-to="2"></li>
      <li data-bs-target="#carousel-example-1z" data-bs-slide-to="3"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <div class="view" style="background-image: url('/img/picbed/r1.jpg'); background-repeat: no-repeat; background-size: cover;">
          <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
            <div class="text-center white-text mx-5 wow fadeIn">
              <h1 class="mb-4">
                <span class="font-earth" style="font-size: 40px;"><strong>edgElEss</strong></span>
              </h1>
              <p class="mb-4 d-none d-md-block">
                <strong>强大而优雅的半开源PE工具</strong>
              </p>
              <p id="version">
                Beta公测版本：{{ beta }}
                <template v-if="alpha !== '0.0.0'">
                  &nbsp;&nbsp;&nbsp; Alpha内测版本：{{ alpha }}
                </template>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="view" style="background-image: url('/img/picbed/r2.jpg'); background-repeat: no-repeat; background-size: cover;">
          <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
            <div class="text-center white-text mx-5 wow fadeIn">
              <h1 class="mb-4">
                <strong>强大的插件包功能</strong>
              </h1>
              <p>
                <strong>自由组合插件包，快速打造最适合你的PE</strong>
              </p>
              <a href="#plugin" class="btn btn-outline-white btn-lg">了解详情</a>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="view" style="background-image: url('/img/picbed/r3.jpg'); background-repeat: no-repeat; background-size: cover;">
          <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
            <div class="text-center white-text mx-5 wow fadeIn">
              <h1 class="mb-4">
                <strong>优雅的主题包功能</strong>
              </h1>
              <p>
                <strong>在界面上实现高度自定义，我的PE就是与众不同</strong>
              </p>
              <a href="#theme" class="btn btn-outline-white btn-lg">了解详情</a>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="view" style="background-image: url('/img/picbed/r4.jpg'); background-repeat: no-repeat; background-size: cover;">
          <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
            <div class="text-center white-text mx-5 wow fadeIn">
              <h1 class="mb-4">
                <strong>也许是东半球第一个部分开源的PE项目</strong>
              </h1>
              <p>
                <strong>恪守三无原则：无广告无收费无劫持，告别流氓PE的困扰</strong>
              </p>
              <a href="https://github.com/EdgelessPE/Edgeless" class="btn btn-outline-white btn-lg" target="_blank">查看仓库</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
    <div id="feature"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const beta = ref('loading...');
const alpha = ref('loading...');

const getEdgeless = async () => {
  try {
    const res = await fetch('https://legacy.edgeless.top/api/v2/info/iso_version');
    const ver = await res.text();
    beta.value = ver;
  } catch (e) {
    beta.value = '获取失败';
  }

  try {
    const res = await fetch('https://legacy.edgeless.top/api/v2/alpha/data?token=そうだよ');
    const json = await res.json();
    alpha.value = json.version;
  } catch (e) {
    alpha.value = '0.0.0';
  }
};

onMounted(() => {
  getEdgeless();
});
</script>

<style>
#carousel-example-1z {
  position: relative;
}

#carousel-example-1z .carousel-inner {
  height: 100%;
}

#carousel-example-1z .carousel-item {
  height: 100%;
  position: relative;
}

#carousel-example-1z .view {
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

#carousel-example-1z .mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rgba-black-light {
  background-color: rgba(0, 0, 0, 0.6);
}

#carousel-example-1z .carousel, 
#carousel-example-1z .carousel-item, 
#carousel-example-1z .carousel-item.active {
  height: 100%;
}

#carousel-example-1z .carousel-inner {
  height: 100%;
}

#carousel-example-1z .carousel-indicators {
  z-index: 15;
}

.btn-outline-white {
  border: 2px solid white;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
}

.btn-outline-white:hover {
  background-color: white;
  color: #333;
}

.wow.fadeIn {
  animation-duration: 1s;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-image: none;
}

.carousel-control-prev-icon::before {
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  content: '\f053';
  color: white;
  font-size: 2rem;
}

.carousel-control-next-icon::before {
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  content: '\f054';
  color: white;
  font-size: 2rem;
}
</style>
