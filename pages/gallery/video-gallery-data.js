// ------------------------------------------------------------------
// Central data source for the Campus Reels (video gallery) listing
// (pages/video-gallery.html) - one record per video group, keyed by
// id, same data-driven pattern as pages/gallery/gallery-data.js
// (Photo Gallery's listing data).
//
// Headings/dates/captions below match the Figma source (file
// TzuvEKEzb297MFROjbO9UF, node 1435:164, "AKTU-Home - Campus Reels",
// "video box-1" through "video box-6") - two small grammar fixes
// applied to the Figma copy (campus-notes-2026, campus-movement-2026).
//
// `image` is a shared placeholder (images/campus-life/campus-life-poster.jpg,
// already used by the homepage's "Discover Our Campus Life" video) until
// each group's own real thumbnail is supplied.
//
// Paths below are relative to pages/video-gallery.html.
//
// Id convention: "<short-name>-<year>", same as gallery-data.js.
// ------------------------------------------------------------------
const videoGalleryData = {
  'freshers-welcome-2026': {
    heading: "Arrival of new students at the university for the freshers' welcome ceremony.",
    date: '2026-07-05',
    image: '../images/campus-life/campus-life-poster.jpg',
  },
  'fashion-show-2026': {
    heading: 'The Fashion Design Department organized a fashion show at the university auditorium.',
    date: '2026-07-25',
    image: '../images/campus-life/campus-life-poster.jpg',
  },
  'campus-life-2026': {
    heading: 'Students enjoying the university campus life.',
    date: '2026-02-20',
    image: '../images/campus-life/campus-life-poster.jpg',
  },
  'campus-notes-2026': {
    heading: "Students discussing their class notes on the university's campus.",
    date: '2026-03-05',
    image: '../images/campus-life/campus-life-poster.jpg',
  },
  'campus-movement-2026': {
    heading: "Students enjoying free movement inside the university's campus.",
    date: '2026-05-14',
    image: '../images/campus-life/campus-life-poster.jpg',
  },
  'library-facilities-2026': {
    heading: "Students always using the university's library facilities.",
    date: '2026-08-20',
    image: '../images/campus-life/campus-life-poster.jpg',
  },
};

// Shared date helper, same convention as formatGalleryDateLong etc.
function formatVideoGalleryDateLong(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}
