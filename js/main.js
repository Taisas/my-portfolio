// Password protection
const PASSWORD = "your_password";
const SESSION_KEY = "portfolio_auth";

const authScreen = document.getElementById("authScreen");
const authForm = document.getElementById("authForm");
const authInput = document.getElementById("authInput");
const authError = document.getElementById("authError");

if (sessionStorage.getItem(SESSION_KEY) === "1") {
  authScreen.classList.add("hidden");
} else {
  authInput.focus();
}

authForm.addEventListener("submit", e => {
  e.preventDefault();
  if (authInput.value === PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "1");
    authScreen.classList.add("hidden");
  } else {
    authError.textContent = "パスワードが正しくありません";
    authInput.value = "";
    authInput.focus();
  }
});

const projects = [
  {
    title: "個人サイト",
    tag: "portfolio",
    icon: "ti-chart-bar",
    thumb: "images/thumb_01.webp",
    thumbs: [
      "images/detail_1_1.webp",
      "images/detail_1_2.webp",
      "images/detail_1_3.webp"
    ],
    bg: "linear-gradient(135deg,#e8e8e4,#d6d6d0)",
    accent: "#5f5e5a",
    desc: "個人の紹介のためのポートフォリオサイト。スクロールに応じてエッフェクトが変わるような演出を実装しています。オーディオファイルをリアルタイムに解析して周波数とシェーダーのパラメーターを同期させています。",
    tags: ["JavaScript", "WebGL", "WebAudio API", "Webpack", "gsap"],
    features: [
      { icon: "ti-refresh", label: "リアルタイム3Dレンダリング" },
      { icon: "ti-device-desktop", label: "レスポンシブ" }
    ],
    url: "https://taisas.github.io/portfolio2/"
  },
  {
    title: "個人所蔵レコードカタログサイト",
    tag: "portfolio",
    icon: "ti-file-text",
    thumb: "images/thumb_02.webp",
    thumbs: [
      "images/detail_2_1.webp",
      "images/detail_2_2.webp"
    ],
    bg: "linear-gradient(135deg,#deded8,#cacac2)",
    accent: "#444441",
    desc: "個人所有のレコードカタログサイト。レコード情報はMicroCMSに置かれていてAPIを介して取得しています。レコード詳細表示時はパッケージ画像のエフェクトとオーディオの周波数をシェーダーを介して連携しています。ビルドはVite、デプロイはVercel。",
    tags: ["JavaScript", "WebGL", "WebAudio API", "Vite", "gsap", "MicroCMS", "Vercel"],
    features: [
      { icon: "ti-refresh", label: "リアルタイム3Dレンダリング" },
      { icon: "ti-device-desktop", label: "ヘッドレスCMS連携" }
    ],
    url: "https://tais-record-v2.vercel.app/"
  },
  {
    title: "万博 セブンイレブン未来型店舗サイト",
    tag: "LP",
    icon: "ti-shopping-bag",
    thumb: "images/thumb_03.webp",
    thumbs: [
      "images/detail_3_1.webp",
      "images/detail_3_2.webp"
    ],
    bg: "linear-gradient(135deg,#e4e4df,#d0d0c8)",
    accent: "#5f5e5a",
    desc: "大阪万博のセブンイレブン未来型店舗特設サイトです。デザインとコーディングを担当しています。アニメーションを使用してリッチなサイトにしています。",
    tags: ["JavaScript"],
    features: [
      { icon: "ti-device-desktop", label: "レスポンシブ" }
    ],
    url: "#"
  },
  {
    title: "セブンイレブン 麺フェスページ",
    tag: "LP",
    icon: "ti-users",
    thumb: "images/thumb_04.webp",
    thumbs: [
      "images/detail_4_1.webp",
      "images/detail_4_2.webp",
      "images/detail_4_3.webp"
    ],
    bg: "linear-gradient(135deg,#e0e0da,#ccccc4)",
    accent: "#444441",
    desc: "セブンイレブン麺フェスページです。デザインとコーディングを担当しています。湯気の表現にこだわったサイトとなっています。",
    tags: ["JavaScript"],
    features: [
      { icon: "ti-device-desktop", label: "レスポンシブ" }
    ],
    url: "#"
  },
  {
    title: "セブンイレブンx刀剣乱舞キャンペーンサイト",
    tag: "LP",
    icon: "ti-map",
    thumb: "images/thumb_05.webp",
    thumbs: [
      "images/detail_5_1.webp",
      "images/detail_5_2.webp"
    ],
    bg: "linear-gradient(135deg,#dcdcd6,#c8c8c0)",
    accent: "#5f5e5a",
    desc: "セブンイレブンと刀剣乱舞のコラボページです。デザインとコーディングを担当しています。アニメーションを使用してリッチなサイトにしています。",
    tags: ["JavaScript"],
    features: [
    ],
    url: "#"
  },
  {
    title: "セブンイレブンxサンリオキャンペーンサイト",
    tag: "LP",
    icon: "ti-map",
    thumb: "images/thumb_07.webp",
    thumbs: [
      "images/detail_7_1.webp",
      "images/detail_7_2.webp",
      "images/detail_7_3.webp"
    ],
    bg: "linear-gradient(135deg,#dcdcd6,#c8c8c0)",
    accent: "#5f5e5a",
    desc: "セブンイレブンとサンリオのコラボページです。デザインとコーディングを担当しています。アニメーションを使用してリッチなサイトにしています。",
    tags: ["JavaScript"],
    features: [
    ],
    url: "#"
  },
  {
    title: "TOYOTA クラウン50周年サイト",
    tag: "LP",
    icon: "ti-music",
    thumb: "images/thumb_06.webp",
    thumbs: [
      "images/detail_6_1.webp",
      "images/detail_6_2.webp",
      "images/detail_6_3.webp"
    ],
    bg: "linear-gradient(135deg,#e2e2dc,#cecec6)",
    accent: "#444441",
    desc: "20年前に手がけたFlashサイト。疑似的な3D表現で博物館を巡るような演出を実装しています。",
    tags: ["Flash"],
    features: [
    ],
    url: "#"
  }
];

const grid = document.getElementById("grid");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

function createThumbContent(p) {
  if (p.thumb) {
    const img = document.createElement("img");
    img.src = p.thumb;
    img.alt = p.title;
    img.addEventListener("error", () => {
      img.replaceWith(createIconFallback(p));
    });
    return img;
  }
  return createIconFallback(p);
}

function createIconFallback(p) {
  const inner = document.createElement("div");
  inner.className = "thumb-inner";
  inner.innerHTML = `
    <i class="ti ${p.icon}" style="font-size:32px;color:${p.accent}" aria-hidden="true"></i>
    <span class="thumb-label" style="color:${p.accent}">${p.tag.toUpperCase()}</span>
  `;
  return inner;
}

projects.forEach((p) => {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", p.title + "の詳細を見る");

  const thumb = document.createElement("div");
  thumb.className = "thumb";
  thumb.style.background = p.bg;
  thumb.appendChild(createThumbContent(p));

  const body = document.createElement("div");
  body.className = "card-body";
  body.innerHTML = `
    <div class="card-title">${p.title}</div>
    <div class="card-tag">${p.tag}</div>
  `;

  card.appendChild(thumb);
  card.appendChild(body);
  card.addEventListener("click", () => openModal(p));
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") openModal(p);
  });
  grid.appendChild(card);
});

function openModal(p) {
  const mHero = document.getElementById("mHero");
  mHero.style.background = p.bg;
  mHero.innerHTML = "";

  const images = p.thumbs && p.thumbs.length > 1 ? p.thumbs : (p.thumb ? [p.thumb] : []);

  if (images.length > 1) {
    buildCarousel(mHero, images, p);
  } else if (images.length === 1) {
    const img = document.createElement("img");
    img.src = images[0];
    img.alt = p.title;
    img.addEventListener("error", () => img.replaceWith(createHeroFallback(p)));
    mHero.appendChild(img);
  } else {
    mHero.appendChild(createHeroFallback(p));
  }

  document.getElementById("mTitle").textContent = p.title;
  document.getElementById("mMeta").innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
  document.getElementById("mDesc").textContent = p.desc;
  document.getElementById("mFeatures").innerHTML = p.features.map(f =>
    `<div class="feature-item"><i class="ti ${f.icon}" aria-hidden="true"></i>${f.label}</div>`
  ).join("");
  const mLink = document.getElementById("mLink");
  if (p.url && p.url !== "#") {
    mLink.href = p.url;
    mLink.style.display = "";
  } else {
    mLink.style.display = "none";
  }

  overlay.classList.add("open");
  closeBtn.focus();
}

function buildCarousel(container, images, p) {
  let current = 0;

  const carousel = document.createElement("div");
  carousel.className = "carousel";

  const track = document.createElement("div");
  track.className = "carousel-track";

  const slides = images.map((src, i) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `${p.title} ${i + 1}`;
    img.addEventListener("error", () => img.replaceWith(createHeroFallback(p)));
    slide.appendChild(img);
    track.appendChild(slide);
    return slide;
  });

  const btnPrev = document.createElement("button");
  btnPrev.className = "carousel-btn carousel-btn-prev";
  btnPrev.setAttribute("aria-label", "前の画像");
  btnPrev.innerHTML = `<i class="ti ti-chevron-left"></i>`;

  const btnNext = document.createElement("button");
  btnNext.className = "carousel-btn carousel-btn-next";
  btnNext.setAttribute("aria-label", "次の画像");
  btnNext.innerHTML = `<i class="ti ti-chevron-right"></i>`;

  const dots = document.createElement("div");
  dots.className = "carousel-dots";
  const dotEls = images.map((_, i) => {
    const d = document.createElement("button");
    d.className = "carousel-dot" + (i === 0 ? " active" : "");
    d.setAttribute("aria-label", `画像 ${i + 1}`);
    d.addEventListener("click", () => goTo(i));
    dots.appendChild(d);
    return d;
  });

  function goTo(index) {
    current = (index + images.length) % images.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotEls.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  btnPrev.addEventListener("click", () => goTo(current - 1));
  btnNext.addEventListener("click", () => goTo(current + 1));

  carousel.appendChild(track);
  carousel.appendChild(btnPrev);
  carousel.appendChild(btnNext);
  carousel.appendChild(dots);
  container.appendChild(carousel);
}

function createHeroFallback(p) {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.gap = "10px";
  div.innerHTML = `
    <i class="ti ${p.icon}" style="font-size:52px;color:${p.accent}" aria-hidden="true"></i>
    <span class="modal-hero-label" style="color:${p.accent}">${p.tag.toUpperCase()}</span>
  `;
  return div;
}

closeBtn.addEventListener("click", () => overlay.classList.remove("open"));
overlay.addEventListener("click", e => {
  if (e.target === overlay) overlay.classList.remove("open");
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") overlay.classList.remove("open");
});
