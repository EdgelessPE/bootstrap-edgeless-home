<template>
  <footer class="footer wow-fadeIn">
    <ContentModal :visible="showBetaModal" title="获取内测" @close="showBetaModal = false">
      <div class="flex flex-col items-center gap-6">
        <a href="https://ks.wjx.top/vj/OSaSz3p.aspx" target="_blank" class="beta-btn">
          <i class="fas fa-external-link-alt"></i> 获取内测邀请码
        </a>
        <a
          href="https://jq.qq.com/?_wv=1027&k=asq7UUHa"
          target="_blank"
          class="beta-btn beta-btn-secondary"
        >
          <i class="fas fa-users"></i> 加入内测交流2群（已满员）
          <span class="beta-qq">1146253726</span>
        </a>
      </div>
    </ContentModal>
    <div class="footer-main pt-4" id="py">
      <h5 class="footer-title mb-4">友情链接</h5>
      <div v-for="(links, category) in friendlyLinks" :key="category" class="mb-4">
        <span class="category-label d-block mb-2">{{ category }}</span>
        <div class="friend-links">
          <a
            v-for="link in links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            :title="link.title"
            >{{ link.name }}</a
          >
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-links pt-4 pb-4">
        <div class="footer-link-item">
          <svg
            t="1635599987840"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2100"
            width="18"
            height="18"
          >
            <path
              d="M542.528 479.424c0-17.6 14.336-32.064 32-32.064s32 14.464 32 32.064S592.192 511.36 574.528 511.36 542.528 497.088 542.528 479.424zM857.792 915.264c-35.136 41.6-92.096 46.08-114.94[...]"
              fill="currentColor"
              p-id="2101"
            ></path>
          </svg>
          <a href="#" @click.prevent="showBetaModal = true">获取内测</a>
        </div>
        <div class="footer-link-item">
          <svg
            t="1635599866364"
            class="icon"
            viewBox="0 0 1088 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2057"
            width="18"
            height="18"
          >
            <path
              d="M560 876.032a363.968 363.968 0 1 1 0-728.064 364.032 364.032 0 0 1 0 727.936v0.128zM112 512a448 448 0 1 0 896 0 448 448 0 0 0-896 0z m504-168a56 56 0 1 0-112 0 56 56 0 0 0 112 0z [...]"
              fill="currentColor"
              p-id="2058"
            ></path>
          </svg>
          <a href="https://github.com/EdgelessPE/Edgeless/issues" target="_blank">问题反馈</a>
        </div>
      </div>
      <div class="footer-icp">
        <a href="http://beian.miit.gov.cn/" target="_blank">苏ICP备20000317号</a>
        <span class="divider">|</span>
        <a href="http://www.beian.gov.cn/" target="_blank">苏公网安备 32010202010568号</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ContentModal from "./ContentModal.vue";

const showBetaModal = ref(false);

onMounted(() => {
  showBetaModal.value = new URLSearchParams(window.location.search).get("openBetaDrawer") === "1";
});

const friendlyLinks = {
  Portal: [
    { name: "FirPE", url: "https://www.firpe.cn", title: "与Edgeless和谐共进的友商" },
    {
      name: "Samare",
      url: "https://github.com/EdgelessPE/Samare",
      title: "一个具有高拓展性的实验性质PE",
    },
    { name: "HotPE", url: "https://www.hotpe.top/", title: "" },
    { name: "CowPE", url: "https://cowpe.cn/", title: "" },
    { name: "ComPE", url: "https://www.win-compe.top/", title: "" },
    { name: "Windsys Project", url: "https://windsys.whatk.me", title: "方便好用的非盈利Project" },
    { name: "ThirdWIN", url: "https://third.win/", title: "分享第三方社区 Windows 系统的部落" },
    { name: "阿酷杂货铺", url: "https://www.coolexe.com", title: "一个啥都有的杂货铺" },
    { name: "果核剥壳", url: "https://www.ghpym.com/", title: "还原软件的本质" },
    {
      name: "WNGameBox",
      url: "https://wngamebox.cn/",
      title: "热爱生活和游戏，用双手创造更多乐趣!",
    },
    {
      name: "Myfile私有云盘",
      url: "https://my-file.cn/",
      title: "热爱生活和游戏，用双手创造更多乐趣!",
    },
  ],
  Blog: [
    { name: "Cno", url: "https://www.edgeless.top", title: "L0serJ3rry的博客" },
    { name: "今天好无聊", url: "http://www.wuliao666.cn", title: "今晚月色很美" },
    { name: "可爱多一点", url: "https://blog.njcit.me/", title: "喜欢卖萌和女装的的Web手" },
    { name: "王洪峰", url: "https://wanghongfeng.cn", title: "迷失的人迷失了，相逢的人会再相逢" },
    { name: "Mask", url: "https://mask6asok.top/", title: "莫师傅牛逼" },
    { name: "Spica", url: "https://blog.prometheuspica.top/", title: "" },
    { name: "Heven Kin", url: "https://bugteam.cn", title: "不去尝试，怎会成功" },
    { name: "皮毛技术君", url: "https://www.whoit.top", title: "永远年轻，永远热泪盈眶" },
    { name: "BJY678", url: "https://www.edgelogs.com/", title: "面朝大海，春暖花开" },
    { name: "XiaoJun", url: "https://cuonc.com", title: "愿你出走半生，归来仍是少年" },
    { name: "阳光之海", url: "https://www.ygsea.com", title: "分享心得经验，体会生活美好" },
    { name: "Horatio", url: "https://horatio.cn/", title: "一个沙雕网友的个人博客" },
    {
      name: "Tokisaki-Galaxy",
      url: "https://tski.uk/",
      title: "僕らの手には何もないけど,かわりに　つなぎあえるから",
    },
    { name: "Dmcimi", url: "https://blog.dmcimi.top/", title: "天下风云出我辈，一入江湖岁月催" },
    { name: "酸酸", url: "https://suan2005.com/", title: "诶嘿" },
    { name: "Cpl.Kerry", url: "https://rickg.cn/", title: "var(--custom-114514)" },
    { name: "Copur", url: "https://copur.xyz/", title: "" },
    { name: "Tim_Paik", url: "https://tim-paik.github.io/", title: "" },
    { name: "as2o3", url: "https://blog.as2o3.xyz/", title: "" },
    { name: "EVA存储", url: "https://www.evassd.cn/", title: "" },
    { name: "Bill50han", url: "https://www.tyatt.top/", title: "" },
  ],
};
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, var(--bg-dark-start) 0%, var(--bg-dark-end) 100%);
  color: var(--white);
  text-align: center;
  font-size: 0.875rem;
  margin-top: 4rem;
}

.footer-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--white);
}

.category-label {
  color: var(--white-5);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
}

.friend-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.friend-links a {
  color: var(--white-8);
  padding: 0.375rem 0.875rem;
  border-radius: 1.5rem;
  background: var(--white-08);
  transition: all 0.3s ease;
  font-size: 0.85rem;
  border: 1px solid transparent;
}

.friend-links a:hover {
  color: var(--white);
  background: var(--blue-3);
  border-color: var(--blue-5);
}

.footer-bottom {
  background: var(--black-3);
  margin-top: 2rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.footer-link-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--white-7);
}

.footer-link-item a {
  color: var(--white-7);
  transition: color 0.3s ease;
}

.footer-link-item a:hover {
  color: var(--primary-lighter);
}

.footer-link-item svg {
  color: var(--white-6);
}

.footer-icp {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: var(--white-4);
  font-size: 0.8rem;
  padding-bottom: 1.5rem;
}

.footer-icp a {
  color: var(--white-4);
  transition: color 0.3s ease;
}

.footer-icp a:hover {
  color: var(--white-7);
}

.divider {
  opacity: 0.3;
}

@media (max-width: 768px) {
  .friend-links a {
    font-size: 0.75rem;
    padding: 0.25rem 0.625rem;
  }
}

.beta-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--bg-dark-start);
  margin-bottom: 0.5rem;
}

.beta-subtitle {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.beta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: var(--white);
  border-radius: 0.75rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.beta-btn:hover {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--primary-3);
}

.beta-divider {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: var(--text-muted);
  font-size: 0.875rem;
}

.beta-divider::before,
.beta-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--border-color);
}

.beta-divider span {
  padding: 0 1rem;
}

.beta-btn-secondary {
  background: var(--bg-light);
  color: var(--bg-dark-start);
  border: 1px solid var(--border-color);
}

.beta-btn-secondary:hover {
  background: var(--bg-lighter);
  border-color: var(--border-light);
}

.beta-qq {
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  background: var(--primary-1);
  border-radius: 0.25rem;
  color: var(--primary-color);
  font-weight: 600;
}

.beta-footer {
  margin-top: 1.5rem;
  font-size: 0.75rem;
  color: var(--text-muted);
}
</style>