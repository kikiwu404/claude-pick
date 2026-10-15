# The Kiki Daily — Music Archive

這是《The Kiki Daily》電子報「Today's Music」單元的歸檔網站。純靜態網站，沒有後台、沒有資料庫，所以可以直接放到 GitHub Pages 上。

## 檔案結構

```
index.html   頁面骨架（標頭 + 卡片容器）
style.css    視覺樣式，色票跟電子報一致
app.js       讀取 data.js 的資料，依日期新到舊排序後畫出卡片
data.js      唯一需要每天手動更新的檔案 ——所有音樂項目都存在這裡
```

## 每天怎麼新增一筆

打開 `data.js`，在 `MUSIC_ENTRIES`陣列裡新增一個物件（複製貼上現有的格式即可，放在陣列的任何位置都可以，網站會自動依日期排序，最新的顯示最前面）：

```js
{
  date: "2026-10-16",              // 當天電子報的日期
  title: "專輯或曲目名稱",
  artist: "演出者",
  genre: "簡短的曲風標籤，例如 Avant-Jazz / IDM / Classical",
  description:
    "1–3 句介紹，語氣跟電子報一樣。",
  cover: "https://...",            // 專輯封面圖片網址（選填，見下方說明）
  platform: "bandcamp",            // "bandcamp" | "spotify" | "youtube" | "other"
  url: "https://...",              // 播放連結
  sourceName: "來源名稱（選填）",   // 例如 "All About Jazz"
  sourceUrl: "https://...",        // 來源連結（選填）
},
```

欄位說明：

- `cover` 是專輯封面的圖片網址。做法是直接連到 Bandcamp／Spotify 頁面上那張封面圖的網址（也就是「hotlink」，不用把圖片檔案存到這個 repo 裡），例如 Bandcamp 的封面網址通常長這樣：`https://f4.bcbits.com/img/a xxxxxxxxxx_5.jpg`。最簡單的找法：打開該專輯的 Bandcamp 或 Spotify 頁面，在封面圖上按右鍵選「複製圖片網址」即可。如果留空，卡片就不會顯示封面區塊。
- `platform` 決定按鈕文字（Bandcamp → "Listen on Bandcamp"，Spotify → "Listen on Spotify"，YouTube → "Watch on YouTube"，其他 → "Listen"）。
- `sourceName` / `sourceUrl` 是選填的，如果有的話會在卡片下方顯示一個小小的來源連結；沒有就留空或整個拿掉這兩行。

存檔之後，推到 GitHub 就會更新上線。

> 封面圖是直接連到 Bandcamp／Spotify 上的圖，版權還是屬於廠牌／藝人，這裡只是引用顯示（跟電子報裡引用來源連結是一樣的做法），並沒有把圖片檔案複製存到這個 repo 裡。

## 放到 GitHub Pages 上

1. 把這個資料夾整個推到你的 GitHub repo（可以是全新的 repo，或是現有的都可以）。
2. 到 repo 的 Settings → Pages，Source 選 `main`（或你用的分支）、資料夾選 `/ (root)`。
3. 存檔後 GitHub 會給你一個網址，通常是 `https://<你的帳號>.github.io/<repo 名稱>/`，大概等 1-2 分鐘生效。
4. 之後每次更新 `data.js` 並 push 上去，網站會自動重新部署，不需要再做其他設定。

## 之後想要自動更新的話

目前是每天電子報寄出後，你（或我）手動在 `data.js` 加一筆、推到 GitHub。如果之後想要讓這個步驟自動化（例如電子報排程任務跑完後自動 commit、push），需要先決定要用哪種方式讓我能寫入你的 GitHub —— 比較常見的做法是你建立一個權限範圍限定的 Personal Access Token 給我，或是透過 Zapier 的 GitHub 整合來寫入。這部分我們之前提過，之後你想做的時候再跟我說即可，不急著現在決定。
