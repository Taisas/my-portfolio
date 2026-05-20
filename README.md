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
│   ├── thumb_01〜06.webp    # カードサムネイル画像
│   ├── detail_*_*.webp      # モーダルカルーセル用詳細画像
│   └── .gitkeep
└── .gitignore               # .DS_Store を除外
```

---

## 実装機能

### パスワード保護
- ページを開いた際にパスワード入力画面を表示
- `sessionStorage` を使用し、タブを閉じるまで再入力不要
- パスワードは `js/main.js` 冒頭の `PASSWORD` 定数で変更可能

```js
const PASSWORD = "your_password";
```

### 全体背景
- `body` にモノクロのグラデーションを適用（`#ededea → #ccccc4 → #a8a89e`、135度方向）

### ポートフォリオグリッド
- `auto-fill` グリッドによるレスポンシブなタイル表示
- カードホバー時に浮き上がるアニメーション
- サムネイル画像が存在しない場合はアイコンにフォールバック

### モーダル
- カード選択でプロジェクト詳細をモーダル表示
- 開閉時にフェード＋スケールアニメーション（0.25s）
- 閉じ方：✕ボタン／背景クリック／Escキー
- `url` が `"#"` または空の場合、「サイトを見る」ボタンを非表示

### カルーセル（複数画像対応）
- プロジェクトに `thumbs` 配列（2枚以上）を設定するとモーダル内がカルーセルになる
- 左右ボタンとドットインジケーターで操作可能
- スライドトランジション：`transform: translateX` で滑らかに切り替え

```js
// 複数画像の設定例
thumbs: [
  "images/detail_1_1.webp",
  "images/detail_1_2.webp",
  "images/detail_1_3.webp"
]
```

---

## デプロイ手順

```bash
# リポジトリ作成 & push
gh repo create my-portfolio --public --source=. --push

# GitHub Pages 有効化（main ブランチのルート）
gh api repos/Taisas/my-portfolio/pages \
  --method POST \
  --field "source[branch]=main" \
  --field "source[path]=/"
```

---

## 使用技術

| 種別 | 内容 |
|------|------|
| フロントエンド | HTML / CSS / Vanilla JavaScript |
| アイコン | [Tabler Icons](https://tabler.io/icons)（CDN） |
| ホスティング | GitHub Pages |
| 認証 | sessionStorage による簡易パスワード保護 |
