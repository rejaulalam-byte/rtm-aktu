// ------------------------------------------------------------------
// Central data source for the Photo Gallery listing
// (pages/photo-gallery.html) - one record per photo album, keyed by
// id, same data-driven pattern as pages/news/news-data.js,
// pages/notices/notices-data.js and pages/events/events-data.js.
//
// Headings, dates and cover images below match the Figma source
// (file TzuvEKEzb297MFROjbO9UF, node 1406:475, "photo gallery group
// image-01" through "image-07") - each entry's image is that same
// numbered cover photo (images/photo-gallery/cover-0N.jpg).
//
// Paths below are relative to pages/photo-gallery.html.
// ------------------------------------------------------------------
const galleryData = {
  'tree-plantation-week': {
    heading: 'The university observes Tree Plantation Week.',
    date: '2026-08-22',
    image: '../images/photo-gallery/cover-01.jpg',
  },
  'mothers-day-family-affairs': {
    heading: "Teachers & Students Family Affairs on the occasion of Mothers' Day",
    date: '2026-06-10',
    image: '../images/photo-gallery/cover-02.jpg',
  },
  'inter-departmental-seminars': {
    heading: 'Various departments of the university organize inter-departmental seminars.',
    date: '2026-04-22',
    image: '../images/photo-gallery/cover-03.jpg',
  },
  'annual-sports-competition-2025': {
    heading: 'The university has successfully concluded its annual sports competition for 2025.',
    date: '2025-12-25',
    image: '../images/photo-gallery/cover-04.jpg',
  },
  'job-fair-for-graduates': {
    heading: 'The university successfully organized a job fair for its graduates.',
    date: '2025-12-10',
    image: '../images/photo-gallery/cover-05.jpg',
  },
  'convocation-2025': {
    heading: 'Students revel in joy as they attend the 2025 convocation.',
    date: '2025-11-22',
    image: '../images/photo-gallery/cover-06.jpg',
  },
  'alumni-reunion': {
    heading: 'The university campus comes alive with the alumni reunion.',
    date: '2025-08-22',
    image: '../images/photo-gallery/cover-07.jpg',
  },
};

// Shared date helpers so the grid always formats the same ISO `date`
// value the same way - same helpers as formatNewsDateLong/Weekday etc.
function formatGalleryDateLong(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}
