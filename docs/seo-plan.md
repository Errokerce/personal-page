# 🍮 Pur1nSuki 個人頁面 SEO 優化計劃

## 現況問題

| 問題 | 影響 |
|------|------|
| `<html lang="en">` 但內容是中文 | 搜尋引擎誤判語言，影響中文搜尋排名 |
| 沒有 `<meta name="description">` | 搜尋結果無法顯示有意義的摘要 |
| 沒有 Open Graph / Twitter Card 標籤 | 社群分享時無預覽圖、無標題摘要 |
| 沒有 structured data (JSON-LD) | Google 無法辨識這是個人檔案頁面 |
| 沒有 `robots.txt` | 爬蟲無明確指引 |
| 沒有 `sitemap.xml` | 搜尋引擎無法快速發現頁面 |
| SPA 純 client-side render | 爬蟲可能抓不到實際內容 |
| 沒有 canonical URL | 可能產生重複內容問題 |
| 語意化 HTML 不足 | `<div>` 為主，缺少 `<main>`, `<nav>`, `<header>` 等 |

## 優化計劃

### 1️⃣ 基礎 Meta 標籤

- 修正 `lang="zh-Hant"`
- 加入 `description`、`author`、`canonical`
- 加入 `theme-color` 靜態標籤

**SEO 理由**：這是搜尋引擎理解頁面最基本的資訊來源，直接影響搜尋結果的呈現。

### 2️⃣ Open Graph + Twitter Card

- `og:title`、`og:description`、`og:image`、`og:url`
- `twitter:card`、`twitter:site`
- 準備一張 1200×630 的分享預覽圖

**SEO 理由**：社群分享是個人頁面最主要的流量來源，好的預覽能大幅提升點擊率。

### 3️⃣ Structured Data — JSON-LD

- 使用 `Person` schema 標記個人資訊
- 標記 `sameAs` 連結（Twitch、Twitter、YouTube 等）

**SEO 理由**：讓 Google 知道這些社群帳號屬於同一個人，有機會出現 Knowledge Panel。

### 4️⃣ 語意化 HTML 改善

- `<main>`、`<nav>`、`<header>`、`<footer>` 取代純 `<div>`/`<section>`
- 連結列表用 `<nav>` + `<ul>` 包裝
- 外部連結加上 `rel="noopener noreferrer"`

**SEO 理由**：語意化標籤幫助爬蟲理解頁面結構，也提升無障礙可及性。

### 5️⃣ 靜態檔案

- `public/robots.txt` — 允許所有爬蟲
- `public/sitemap.xml` — 單頁 sitemap 指向 `https://link.pur1nsuki.com/`

**SEO 理由**：明確引導爬蟲，加速索引。

### 6️⃣ 預渲染（可選）

- 方案 A：`vite-plugin-prerender` 在 build 時產生靜態 HTML
- 方案 B：關鍵內容寫在 `<noscript>` 裡

**SEO 理由**：確保不執行 JS 的爬蟲（Bing、社群平台）也能讀取內容。

## 執行順序

1. 修改 `index.html`（meta、OG、JSON-LD）
2. 加入 `robots.txt` + `sitemap.xml`
3. 改善 `App.jsx` 語意化 HTML
4. 準備 OG image 並部署
5. （可選）加入預渲染
