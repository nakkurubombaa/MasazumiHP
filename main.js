// Nav: 背景をスクロール時に付ける
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 60);
}, { passive: true });

// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  const open = navMenu.classList.toggle('is-open');
  hamburger.classList.toggle('is-open', open);
  hamburger.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
});

// メニューのリンクをタップしたら閉じる
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-label', 'メニューを開く');
  });
});

// ライトボックス
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
  lightboxImg.src = '';
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// Career タブ切替
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('is-active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('is-active'));

    btn.classList.add('is-active');
    document.getElementById(target).classList.add('is-active');
  });
});
