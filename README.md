# my-portfolio

GitHub Pages でホストするポートフォリオサイト。

**URL:** https://taisas.github.io/my-portfolio/

---

## ディレクトリ構成

```
my-portfolio/
├── index.html               # HTML構造（CSS・JSを外部ファイルで読み込み）
├── css/
│   └── style.css            # 全スタイル定義
├── js/
│   └── main.js              # プロジェクトデータ・インタラクション処理
├── images/
│   ├── thumb_*.webp         # カードサムネイル画像
│   ├── detail_*_*.webp      # モーダルカルーセル用詳細画像
│   ├── movie_*.mp4          # 動画ファイル（ffmpegで圧縮済み）
│   └── .gitkeep
└── .gitignore               # .DS_Store を除外
```

---



## 使用技術

| 種別 | 内容 |
|------|------|
| フロントエンド | HTML / CSS / Vanilla JavaScript |
| アイコン | [Tabler Icons](https://tabler.io/icons)（CDN） |
| ホスティング | GitHub Pages |
| 認証 | sessionStorage による簡易パスワード保護 |
