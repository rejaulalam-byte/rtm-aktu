// ------------------------------------------------------------------
// Per-group detail data for pages/video-details.html, keyed by the
// same group ids as pages/gallery/video-gallery-data.js (that file
// owns the listing-card fields: heading/date/thumbnail; this file
// owns what's specific to the detail page: the breadcrumb's short
// title and the group's own video set).
//
// Each group has a single video for now (youtubeId: null - no real
// YouTube videos exist yet, so the player shows a graceful "coming
// soon" state instead of a broken embed). `videos` is an array so a
// group can grow the same way Tree Plantation Week's `photos` array
// did on gallery-details-data.js - just append more { youtubeId,
// thumbnail, caption } entries once real clips are ready.
//
// `heading`/`intro` are optional per-group overrides, same convention
// as gallery-details-data.js - omitted here, so the shared template
// (pages/video-details.html) falls back to its generic Campus Reels
// heading/paragraph.
// ------------------------------------------------------------------
const videoGalleryDetailsData = {
  'freshers-welcome-2026': {
    breadcrumbLabel: "Freshers' Welcome 2026",
    videos: [
      { youtubeId: null, thumbnail: '../images/campus-life/campus-life-poster.jpg', caption: "Arrival of new students at the university for the freshers' welcome ceremony." },
    ],
  },
  'fashion-show-2026': {
    breadcrumbLabel: 'Fashion Show 2026',
    videos: [
      { youtubeId: null, thumbnail: '../images/campus-life/campus-life-poster.jpg', caption: 'The Fashion Design Department organized a fashion show at the university auditorium.' },
    ],
  },
  'campus-life-2026': {
    breadcrumbLabel: 'Campus Life',
    videos: [
      { youtubeId: null, thumbnail: '../images/campus-life/campus-life-poster.jpg', caption: 'Students enjoying the university campus life.' },
    ],
  },
  'campus-notes-2026': {
    breadcrumbLabel: 'Class Notes on Campus',
    videos: [
      { youtubeId: null, thumbnail: '../images/campus-life/campus-life-poster.jpg', caption: "Students discussing their class notes on the university's campus." },
    ],
  },
  'campus-movement-2026': {
    breadcrumbLabel: 'Campus Movement',
    videos: [
      { youtubeId: null, thumbnail: '../images/campus-life/campus-life-poster.jpg', caption: "Students enjoying free movement inside the university's campus." },
    ],
  },
  'library-facilities-2026': {
    breadcrumbLabel: 'Library Facilities',
    videos: [
      { youtubeId: null, thumbnail: '../images/campus-life/campus-life-poster.jpg', caption: "Students always using the university's library facilities." },
    ],
  },
};
