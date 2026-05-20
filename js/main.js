const projects = [
  {
    title: "Echo Dashboard",
    tag: "Data Visualization",
    icon: "ti-chart-bar",
    thumb: "images/echo-dashboard.png",
    bg: "linear-gradient(135deg,#e8e8e4,#d6d6d0)",
    accent: "#5f5e5a",
    desc: "リアルタイムデータを美しく可視化するダッシュボードアプリ。D3.jsとWebSocketを使用し、KPIの変動を秒単位で追跡できます。",
    tags: ["JavaScript", "D3.js", "WebSocket"],
    features: [
      { icon: "ti-refresh", label: "リアルタイム更新" },
      { icon: "ti-chart-line", label: "インタラクティブグラフ" },
      { icon: "ti-device-desktop", label: "レスポンシブ" },
      { icon: "ti-filter", label: "カスタムフィルター" }
    ],
    url: "#"
  },
  {
    title: "Folio CMS",
    tag: "Content Management",
    icon: "ti-file-text",
    thumb: "images/folio-cms.png",
    bg: "linear-gradient(135deg,#deded8,#cacac2)",
    accent: "#444441",
    desc: "ヘッドレスCMSと連携したコンテンツ管理システム。マークダウンエディタとドラッグ&ドロップによるレイアウト編集を備えています。",
    tags: ["React", "Headless CMS", "REST API"],
    features: [
      { icon: "ti-markdown", label: "Markdownエディタ" },
      { icon: "ti-drag-drop", label: "D&Dレイアウト" },
      { icon: "ti-users", label: "マルチユーザー" },
      { icon: "ti-history", label: "バージョン管理" }
    ],
    url: "#"
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

  if (p.thumb) {
    const img = document.createElement("img");
    img.src = p.thumb;
    img.alt = p.title;
    img.addEventListener("error", () => {
      img.replaceWith(createHeroFallback(p));
    });
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
