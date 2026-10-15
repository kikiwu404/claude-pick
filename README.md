# Claude's Pick — The Kiki Daily Music Archive

An archive of the "Today's Music" section from *The Kiki Daily* newsletter: one non-pop pick a day, chosen by Claude to suit my taste.

It's a plain static site with no build step, backend, database or dependencies, so it can be hosted on GitHub Pages as is.

## Features

- **Daily cards.** Each entry has a cover image, the date, the title, the artist, a short blurb, genre tags, a listen button and an optional source link.
- **Newest first.** Entries are sorted by date automatically, so the order in `data.js` doesn't matter.
- **Genre filtering.** Clicking a `#tag` on any card shows only the entries with that tag. Clicking it again, or clicking "✕ Show all", clears the filter.
- **Shareable filter links.** The active filter is kept in the URL hash (for example `index.html#tag=experimental`), so a filtered view can be bookmarked or shared.
- **Graceful fallbacks.** If a cover image fails to load, its area is hidden. If there are no entries, the page shows an empty-state message.

## File structure

```text
index.html   Page skeleton (header, filter bar, card grid, footer)
style.css    Styles that match the newsletter: cream background, thick black borders,
             square corners, chartreuse and lavender accents
app.js       Reads MUSIC_ENTRIES from data.js, sorts by date, renders the cards
             and handles tag filtering
data.js      The only file you edit day to day; it holds every music entry
```

## Adding a new entry

Open `data.js` and add an object anywhere in the `MUSIC_ENTRIES` array:

```js
{
  date: "2026-10-16",              // Date of the newsletter issue (YYYY-MM-DD)
  title: "Album or track title",
  artist: "Artist name",
  genre: "Avant-Jazz / IDM",       // One or more genres, separated by "/" or ","
  description:
    "A 1–3 sentence blurb, in the same tone as the newsletter.",
  cover: "https://...",            // Cover image URL (optional, see below)
  platform: "bandcamp",            // "bandcamp" | "spotify" | "youtube" | "other"
  url: "https://...",              // Link to listen
  sourceName: "All About Jazz",    // Citation label (optional)
  sourceUrl: "https://...",        // Citation link (optional)
},
```

### Field notes

- **`genre`** is split on `/` and `,` into tags. Each tag is lowercased and its spaces become hyphens, so `"Junk Percussion / Experimental"` becomes `#junk-percussion` and `#experimental`. Use the same wording across entries so the filters group them together.
- **`cover`** links straight to the cover image on Bandcamp or Spotify; the image file is not stored in this repo. To get the URL, open the album page, right-click the cover and choose "Copy Image Address". Bandcamp covers usually look like `https://f4.bcbits.com/img/aXXXXXXXXXX_5.jpg`. If you leave `cover` empty, the card has no cover area.
- **`platform`** sets the button label:
  - `bandcamp` → "Listen on Bandcamp"
  - `spotify` → "Listen on Spotify"
  - `youtube` → "Watch on YouTube"
  - `other` → "Listen"
- **`sourceName` / `sourceUrl`** add a small "Source:" link under the blurb. The link only appears when both fields are set; otherwise remove both lines.

Save the file and push to GitHub, and the live site updates.

> **About cover images:** covers are hotlinked from Bandcamp or Spotify and are only displayed here as a reference, the same way the newsletter links to its sources. Copyright stays with the labels and artists, and no image files are copied into this repo.

## Running locally

Open `index.html` in a browser. To serve it locally instead:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, go to **Settings → Pages**. Under **Source**, choose the `main` branch and the `/ (root)` folder.
3. After you save, GitHub shows the site URL, usually `https://<username>.github.io/<repo-name>/`. It takes about 1–2 minutes to go live.
4. Every later push to `data.js` redeploys the site automatically.

## Possible future automation

For now, a new entry is added to `data.js` by hand after each newsletter goes out, then pushed to GitHub. To automate this step (for example, committing and pushing as soon as the newsletter's scheduled task finishes), the automation needs write access to the repository. Two options:

- A fine-grained GitHub Personal Access Token limited to this repository
- Zapier's GitHub integration
