// The Kiki Daily — Music Archive
// Renders the MUSIC_ENTRIES array (defined in data.js) into the grid,
// newest date first. You should not need to edit this file — just add
// entries to data.js.

(function () {
  var PLATFORM_LABELS = {
    bandcamp: "Listen on Bandcamp",
    spotify: "Listen on Spotify",
    youtube: "Watch on YouTube",
    other: "Listen",
  };

  function formatDate(isoDate) {
    // "2026-10-15" -> "Oct 15, 2026"
    var parts = isoDate.split("-");
    if (parts.length !== 3) return isoDate;
    var d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    if (isNaN(d.getTime())) return isoDate;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // "Junk Percussion / Experimental" -> ["junk-percussion", "experimental"]
  function genreTags(genre) {
    if (!genre) return [];
    return String(genre)
      .split(/[\/,]/)
      .map(function (t) {
        return t.trim().toLowerCase().replace(/\s+/g, "-");
      })
      .filter(Boolean);
  }

  var activeTag = null;

  function renderCard(entry) {
    var card = document.createElement("article");
    card.className = "card";

    if (entry.cover) {
      var coverWrap = document.createElement("div");
      coverWrap.className = "cover-wrap";
      var img = document.createElement("img");
      img.className = "cover";
      img.src = entry.cover;
      img.alt = (entry.title || "") + " — " + (entry.artist || "");
      img.loading = "lazy";
      img.onerror = function () {
        coverWrap.style.display = "none";
      };
      coverWrap.appendChild(img);
      card.appendChild(coverWrap);
    }

    var body = document.createElement("div");
    body.className = "card-body";
    card.appendChild(body);

    var dateEl = document.createElement("div");
    dateEl.className = "date";
    dateEl.textContent = formatDate(entry.date);
    body.appendChild(dateEl);

    var titleEl = document.createElement("h2");
    titleEl.textContent = entry.title || "";
    body.appendChild(titleEl);

    var artistEl = document.createElement("p");
    artistEl.className = "artist";
    artistEl.textContent = entry.artist || "";
    body.appendChild(artistEl);

    var descEl = document.createElement("p");
    descEl.className = "desc";
    descEl.textContent = entry.description || "";
    body.appendChild(descEl);

    var tags = genreTags(entry.genre);
    if (tags.length) {
      var tagRow = document.createElement("div");
      tagRow.className = "tags";
      tags.forEach(function (tag) {
        var tagBtn = document.createElement("button");
        tagBtn.type = "button";
        tagBtn.className = "tag" + (tag === activeTag ? " is-active" : "");
        tagBtn.textContent = "#" + tag;
        tagBtn.addEventListener("click", function () {
          setTag(tag === activeTag ? null : tag);
        });
        tagRow.appendChild(tagBtn);
      });
      body.appendChild(tagRow);
    }

    if (entry.sourceName && entry.sourceUrl) {
      var src = document.createElement("p");
      src.className = "source";
      src.innerHTML =
        "Source: <a href=\"" +
        entry.sourceUrl +
        "\" target=\"_blank\" rel=\"noopener noreferrer\">" +
        escapeHtml(entry.sourceName) +
        "</a>";
      body.appendChild(src);
    }

    if (entry.url) {
      var btn = document.createElement("a");
      btn.className = "listen-btn";
      btn.href = entry.url;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
      var label =
        PLATFORM_LABELS[entry.platform] || PLATFORM_LABELS.other;
      btn.textContent = label;
      card.appendChild(btn);
    }

    return card;
  }

  function setTag(tag) {
    activeTag = tag;
    var hash = tag ? "#tag=" + encodeURIComponent(tag) : "";
    if (location.hash !== hash) {
      history.replaceState(null, "", location.pathname + location.search + hash);
    }
    render();
    if (tag) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function tagFromHash() {
    var m = location.hash.match(/^#tag=(.+)$/);
    return m ? decodeURIComponent(m[1]) : null;
  }

  function render() {
    var grid = document.getElementById("grid");
    var emptyMsg = document.getElementById("empty-msg");
    var filterBar = document.getElementById("filter-bar");
    var filterTag = document.getElementById("filter-tag");
    var entries = (typeof MUSIC_ENTRIES !== "undefined" ? MUSIC_ENTRIES : []).slice();

    grid.innerHTML = "";

    if (entries.length === 0) {
      emptyMsg.style.display = "block";
      return;
    }

    if (activeTag) {
      entries = entries.filter(function (entry) {
        return genreTags(entry.genre).indexOf(activeTag) !== -1;
      });
      filterTag.textContent = "#" + activeTag + " (" + entries.length + ")";
      filterBar.hidden = false;
    } else {
      filterBar.hidden = true;
    }

    entries.sort(function (a, b) {
      return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
    });

    entries.forEach(function (entry) {
      grid.appendChild(renderCard(entry));
    });
  }

  document.getElementById("filter-clear").addEventListener("click", function () {
    setTag(null);
  });

  window.addEventListener("hashchange", function () {
    activeTag = tagFromHash();
    render();
  });

  activeTag = tagFromHash();
  render();
})();
