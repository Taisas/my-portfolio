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
    desc: "リアルタイムデータを美しく可視化するダッシュボードアプリ。D3.jsとWebSocketを使用し、KPIの変動を秒単位で追跡できます。",
    tags: ["JavaScript", "WebGL", "WebAudio API", "Webpack", "gsap"],
    features: [
      { icon: "ti-refresh", label: "リアルタイム3Dレンダリング" },
      { icon: "ti-device-desktop", label: "レスポンシブ" }
    ],
    url: "#"
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
    desc: "ヘッドレスCMSと連携したコンテンツ管理システム。マークダウンエディタとドラッグ&ドロップによるレイアウト編集を備えています。",
    tags: ["JavaScript", "WebGL", "WebAudio API", "Webpack", "gsap"],
    features: [
      { icon: "ti-markdown", label: "Markdownエディタ" },
      { icon: "ti-drag-drop", label: "D&Dレイアウト" },
      { icon: "ti-users", label: "マルチユーザー" },
      { icon: "ti-history", label: "バージョン管理" }
    ],
    url: "https://tais-record-v2.vercel.app/"
  },
  {
    title: "Lumina Store",
    tag: "E-Commerce",
    icon: "ti-shopping-bag",
    thumb: "images/lumina-store.png",
    bg: "linear-gradient(135deg,#e4e4df,#d0d0c8)",
    accent: "#5f5e5a",
    desc: "ミニマルなデザインのECサイト。スムーズなアニメーションと直感的なカート操作で、購買体験を向上させています。",
    tags: ["Vue.js", "Stripe", "Node.js"],
    features: [
      { icon: "ti-credit-card", label: "Stripe決済" },
      { icon: "ti-search", label: "商品検索" },
      { icon: "ti-heart", label: "お気に入り" },
      { icon: "ti-truck", label: "配送管理" }
    ],
    url: "#"
  },
  {
    title: "Pulse Social",
    tag: "Social Platform",
    icon: "ti-users",
    thumb: "images/pulse-social.png",
    bg: "linear-gradient(135deg,#e0e0da,#ccccc4)",
    accent: "#444441",
    desc: "クリエイター向けのミニマルなSNSプラットフォーム。投稿、フォロー、リアルタイム通知機能を持つフルスタックアプリケーション。",
    tags: ["Next.js", "Firebase", "Tailwind"],
    features: [
      { icon: "ti-bell", label: "リアルタイム通知" },
      { icon: "ti-photo", label: "メディア投稿" },
      { icon: "ti-message", label: "DM機能" },
      { icon: "ti-hash", label: "ハッシュタグ" }
    ],
    url: "#"
  },
  {
    title: "Atlas Maps",
    tag: "Geospatial",
    icon: "ti-map",
    thumb: "images/atlas-maps.png",
    bg: "linear-gradient(135deg,#dcdcd6,#c8c8c0)",
    accent: "#5f5e5a",
    desc: "地図データをインタラクティブに探索できるWebアプリ。MapboxとGeoJSONを活用し、データドリブンな地理情報を視覚化します。",
    tags: ["JavaScript", "Mapbox", "GeoJSON"],
    features: [
      { icon: "ti-location", label: "ジオコーディング" },
      { icon: "ti-layers-difference", label: "レイヤー管理" },
      { icon: "ti-zoom-in", label: "ズーム・パン" },
      { icon: "ti-download", label: "データエクスポート" }
    ],
    url: "#"
  },
  {
    title: "Rhythm App",
    tag: "Music & Audio",
    icon: "ti-music",
    thumb: "images/rhythm-app.png",
    bg: "linear-gradient(135deg,#e2e2dc,#cecec6)",
    accent: "#444441",
    desc: "Web Audio APIを駆使した音楽プレーヤー兼ビジュアライザー。波形表示とイコライザー機能を持つ没入感のある音楽体験を提供します。",
    tags: ["Web Audio API", "Canvas", "JavaScript"],
    features: [
      { icon: "ti-wave-sine", label: "波形ビジュアライザー" },
      { icon: "ti-adjustments", label: "イコライザー" },
      { icon: "ti-playlist", label: "プレイリスト" },
      { icon: "ti-player-play", label: "クロスフェード" }
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
  document.getElementById("mLink").href = p.url;

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
