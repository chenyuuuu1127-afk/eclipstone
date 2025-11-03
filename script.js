// 淡入效果
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, appearOptions);
faders.forEach(f => appearOnScroll.observe(f));

// 回到上層按鈕
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 手機選單
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('mobile-active');
});

// 異能者與賭俗資訊滑出
function toggleInfo(type) {
  const info = document.getElementById(`${type}-info`);
  info.classList.toggle('active');
}

// 點擊空白關閉資訊卡
document.addEventListener('click', (e) => {
  const abilityInfo = document.getElementById('ability-info');
  const gamblerInfo = document.getElementById('gambler-info');
  if (abilityInfo.classList.contains('active') && 
      !abilityInfo.contains(e.target) && 
      !e.target.closest('.power-card[onclick*="ability"]')) {
    abilityInfo.classList.remove('active');
  }
  if (gamblerInfo.classList.contains('active') && 
      !gamblerInfo.contains(e.target) && 
      !e.target.closest('.power-card[onclick*="gambler"]')) {
    gamblerInfo.classList.remove('active');
  }
});

// 區域地圖開關
function toggleMap() {
  const map = document.getElementById('mapWrapper');
  const btn = document.querySelector('.map-toggle');
  const isActive = map.classList.toggle('active');
  btn.textContent = isActive ? '收起區域地圖' : '查看區域地圖';

  if (isActive && window.innerWidth > 768) {
    setTimeout(() => {
      const y = map.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 300);
  }
}

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('selectstart', event => event.preventDefault());
document.addEventListener('copy', event => event.preventDefault());
document.addEventListener('dragstart', event => event.preventDefault());
document.addEventListener('touchstart', event => {
/*
document.addEventListener('touchstart', event => {
  if (event.touches.length > 1) event.preventDefault(); // 防止雙指縮放
}, { passive: false });
*/
