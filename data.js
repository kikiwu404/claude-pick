// The Kiki Daily — Music Archive
// Add a new entry each day by copying the object shape below and adding it
// anywhere in this array (it gets sorted newest-first automatically, so you
// never have to worry about where you paste it).
//
// Fields:
//   date        "YYYY-MM-DD" — the date it appeared in The Kiki Daily
//   title       track or album title
//   artist      artist / act name
//   genre       short genre tag, e.g. "Avant-Jazz", "IDM", "Classical"
//   description 1–3 sentence blurb (same tone as the newsletter)
//   cover       album cover image URL (from Bandcamp/Spotify — hotlinked, not hosted here)
//   platform    "bandcamp" | "spotify" | "youtube" | "other" — controls the button label
//   url         link to listen
//   sourceName  (optional) label for the citation link, e.g. "All About Jazz"
//   sourceUrl   (optional) link backing up the description

const MUSIC_ENTRIES = [
  {
    date: "2026-10-08",
    title: "Manitoba Tuck",
    artist: "Tim Olive",
    genre: "Experimental Noise",
    description:
      "A cassette built from grinding, brittle contact-mic noise that sounds like machinery quietly being torn apart. Bandcamp Daily critic Marc Masters singled it out as one of April's sharpest experimental releases — the patterns inside the noise only reveal themselves the longer you sit with it.",
    cover: "https://f4.bcbits.com/img/a0984165361_5.jpg",
    platform: "bandcamp",
    url: "https://moltfluid.bandcamp.com/album/manitoba-tuck",
    sourceName: "Bandcamp Daily",
    sourceUrl:
      "https://daily.bandcamp.com/best-experimental/the-best-experimental-music-on-bandcamp-april-2026",
  },
  {
    date: "2026-10-09",
    title: "Play Some Music",
    artist: "Neptune",
    genre: "Junk Percussion / Experimental",
    description:
      "The Baltimore trio's first album in roughly 15 years, built entirely from homemade instruments, scavenged junk, and scraping, clattering percussion rather than any standard rock setup. Treble critic Brad Cohan named it one of spring 2026's best experimental releases — a record built on textures and found sound rather than songs in any conventional sense.",
    cover: "https://f4.bcbits.com/img/a2202261600_5.jpg",
    platform: "bandcamp",
    url: "https://sleepinggiantglossolalia.bandcamp.com/album/neptune-play-some-music",
    sourceName: "Treble",
    sourceUrl: "https://www.treblezine.com/11-great-experimental-albums-from-spring-2026/",
  },
  {
    date: "2026-10-10",
    title: "The Light Is Real",
    artist: "Terry Riley, Thollem & Nels Cline",
    genre: "Minimalist / Improvised Drone",
    description:
      "A 2023 recording on the Other Minds label: minimalist pioneer Terry Riley (voice) and pianist/synthesist Thollem began the project remotely during the pandemic, trading recordings of breath and light across a 10-hour time difference before guitarist Nels Cline added live responses. Two 18-minute pieces built from dhrupad-style drones, syllabic vocal play and inventive electric guitar — meditative and largely improvised.",
    cover: "https://f4.bcbits.com/img/a2062524028_5.jpg",
    platform: "bandcamp",
    url: "https://thollem.bandcamp.com/album/the-light-is-real",
    sourceName: "The Vinyl Factory",
    sourceUrl: "https://archive.thevinylfactory.com/?p=141637",
  },
  {
    date: "2026-10-11",
    title: "Deep Listening",
    artist: "Pauline Oliveros, Stuart Dempster & Panaiotis",
    genre: "Improvised Ambient / Drone",
    description:
      "Recorded in 1988 fourteen feet underground in a disused cistern the trio reached by squeezing through a manhole-sized opening, this fully improvised 1989 album let the space's long, uneven reverb become a fourth performer. No score, no plan — just the cistern's decay time shaping every note. Important Records' 30th-anniversary reissue adds tracks from a related session and a mesostic poem by John Cage.",
    cover: "https://i.scdn.co/image/ab67616d0000b273bf09511609d2e556ea7322b5",
    platform: "spotify",
    url: "https://open.spotify.com/album/1h4VM1Nsgav7liCdWBoGlC",
    sourceName: "The Vinyl Factory (citing Important Records)",
    sourceUrl: "https://archive.thevinylfactory.com/?p=141637",
  },
  {
    date: "2026-10-12",
    title: "Triptych",
    artist: "Éliane Radigue",
    genre: "Drone",
    description:
      "The final collaboration between the French drone-music pioneer and Important Records, released as a double LP shortly before Radigue's death in February 2026 at age 94. Like the rest of her catalog — decades of slowly evolving, highly detailed electronic drone — Triptych asks for patient, immersive listening rather than background play.",
    cover: "https://f4.bcbits.com/img/a1187731256_5.jpg",
    platform: "bandcamp",
    url: "https://imprec.bandcamp.com/album/triptych",
    sourceName: "Important Records",
    sourceUrl: "https://importantrecords.com/blogs/news/pre-order-eliane-radigues-triptych-2lp",
  },
  {
    date: "2026-10-13",
    title: "The Light Is Real",
    artist: "Terry Riley, Thollem & Nels Cline",
    genre: "Improvised Drone / Avant-Garde",
    description:
      "A 2023 release on Other Minds, the Bay Area new-music label — two side-long improvisations born from a pandemic-era collaboration. Pianist/synthesist Thollem had an epiphany watching sunlight through a window in New Mexico and proposed vocalizing it with minimalist pioneer Terry Riley across a 10-hour time difference, then invited guitarist Nels Cline to respond. A shifting, breath-and-drone soundscape built for close, patient listening.",
    cover: "https://f4.bcbits.com/img/a2062524028_5.jpg",
    platform: "bandcamp",
    url: "https://thollem.bandcamp.com/album/the-light-is-real",
    sourceName: "Other Minds",
    sourceUrl: "https://otherminds.org/recording/the-light-is-real",
  },
  {
    date: "2026-10-14",
    title: "GETGETGET",
    artist: "Thomas Brinkmann",
    genre: "Dark Ambient / Experimental Electronics",
    description:
      "A limited vinyl LP (300 copies) on Editions Mego, built from material Brinkmann developed with the late Peter Rehberg — the title borrows from Rehberg's own PITA album trilogy. The record treats silence as an active compositional element, drawing on philosopher Günther Anders' idea of \"negative music\": dark, abstract electronics built around pauses and disrupted signal as much as sound itself.",
    cover: "https://f4.bcbits.com/img/a0124978747_5.jpg",
    platform: "bandcamp",
    url: "https://thomasbrinkmann.bandcamp.com/album/getgetget",
    sourceName: "Norman Records",
    sourceUrl: "https://www.normanrecords.com/records/217797-thomas-brinkmann-getgetget",
  },
  {
    date: "2026-10-15",
    title: "Wellspring",
    artist: "DoYeon Kim",
    genre: "Avant-Jazz",
    description:
      "Released this year on the Tao Forms label — the first album Korean musician DoYeon Kim has put out fully under her own name, built around the gayageum (a traditional Korean zither) plus her own voice. Joined by Mat Maneri, Henry Fraser and Tyshawn Sorey for a set of freely shifting avant-garde jazz that lets Korean folk inflections surface without ever taking over.",
    cover: "https://f4.bcbits.com/img/a3555149952_5.jpg",
    platform: "bandcamp",
    url: "https://taoforms.bandcamp.com/album/wellspring",
    sourceName: "All About Jazz",
    sourceUrl: "https://www.allaboutjazz.com/wellspring-doyeon-kim-tao-forms",
  },
];
