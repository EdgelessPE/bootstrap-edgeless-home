<template>
  <div id="carousel-example-1z" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li
        v-for="(slide, index) in slides"
        :key="index"
        data-bs-target="#carousel-example-1z"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
      ></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <div class="view"
          :style="`background-image: url('${slide.bgImage}'); background-repeat: no-repeat; background-size: cover;`">
          <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
            <div class="text-center white-text mx-5 wow fadeIn">
              <h1 class="mb-4" :class="{ 'font-earth': slide.isTitleLarge }">
                <strong v-html="slide.title"></strong>
              </h1>
              <p :class="{ 'mb-4 d-none d-md-block': slide.showSubtitle }">
                <strong v-if="slide.showSubtitle">{{ slide.subtitle }}</strong>
                <div v-else class="font-size-sm" v-html="slide.description"></div>
              </p>
              <div v-if="slide.showVersion" id="version" class="flex gap-4 font-size-sm">
                <div>Beta公测版本：{{ beta }}</div>
                <div v-if="alpha !== '0.0.0'">Alpha内测版本：{{ alpha }}</div>
              </div>
              <a
                v-if="slide.button"
                :href="slide.buttonUrl"
                class="btn btn-outline-white btn-lg mt-4"
                :target="slide.buttonTarget"
              >{{ slide.button }}</a>
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

const slides = [
  {
    bgImage: '/img/picbed/r1.jpg',
    title: 'edgElEss',
    subtitle: '强大而优雅的半开源PE工具',
    showSubtitle: true,
    showVersion: true,
    isTitleLarge: true,
    button: '',
    buttonUrl: '',
    description: '',
  },
  {
    bgImage: '/img/picbed/r2.jpg',
    title: '强大的插件包功能',
    description: '自由组合插件包，快速打造最适合你的PE',
    showSubtitle: false,
    showVersion: false,
    isTitleLarge: false,
    button: '了解详情',
    buttonUrl: '#plugin',
    buttonTarget: '',
  },
  {
    bgImage: '/img/picbed/r3.jpg',
    title: '优雅的主题包功能',
    description: '在界面上实现高度自定义，我的PE就是与众不同',
    showSubtitle: false,
    showVersion: false,
    isTitleLarge: false,
    button: '了解详情',
    buttonUrl: '#theme',
    buttonTarget: '',
  },
  {
    bgImage: '/img/picbed/r4.jpg',
    title: '也许是东半球第一个部分开源的PE项目',
    description: '恪守三无原则：无广告无收费无劫持，告别流氓PE的困扰',
    showSubtitle: false,
    showVersion: false,
    isTitleLarge: false,
    button: '查看仓库',
    buttonUrl: 'https://github.com/EdgelessPE/Edgeless',
    buttonTarget: '_blank',
  },
]

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
  background-color: rgba(0, 0, 0, 0.3);
}

.white-text {
  color: #fff !important;
}

.white-text h1 {
  font-size: 40px;
}

.white-text p {
  font-size: 1.25rem;
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
  background-image: none !important;
  width: 50px !important;
  height: 50px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 20 !important;
  opacity: 1 !important;
}

.carousel-control-prev,
.carousel-control-next {
  z-index: 20 !important;
  width: 15% !important;
  opacity: 1 !important;
}

.carousel-control-prev {
  left: 0 !important;
}

.carousel-control-next {
  right: 0 !important;
}

.carousel-control-prev:hover .carousel-control-prev-icon::before,
.carousel-control-next:hover .carousel-control-next-icon::before {
  color: #fff !important;
}

.carousel-control-prev-icon::before {
  font-family: 'FontAwesome' !important;
  content: '\f104' !important;
  color: #ddd !important;
  font-size: 2rem !important;
  transition: color 0.3s ease;
}

.carousel-control-next-icon::before {
  font-family: 'FontAwesome' !important;
  content: '\f105' !important;
  color: #ddd !important;
  font-size: 2rem !important;
  transition: color 0.3s ease;
}
</style>
