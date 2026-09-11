// ------------------------------------------------------------------
// Central data source for the Photo Gallery listing
// (pages/photo-gallery.html) - one record per photo album, keyed by
// id, same data-driven pattern as pages/news/news-data.js,
// pages/notices/notices-data.js and pages/events/events-data.js.
//
// Real Figma copy for these albums wasn't available when this file
// was created, so headings/dates below are representative campus-life
// placeholders, and every entry shares one placeholder cover photo
// (images/photo-gallery/cover-0N.jpg, copied from an existing campus
// photo already in the repo) - swap each entry's own text/date and
// drop a real photo at that same numbered path to replace a placeholder.
//
// Paths below are relative to pages/photo-gallery.html.
// ------------------------------------------------------------------
const galleryData = {
  'orientation-day-highlights': {
    heading: 'Orientation Day Highlights',
    date: '2026-08-22',
    image: '../images/photo-gallery/cover-01.jpg',
  },
  'annual-tech-fest-2026': {
    heading: 'Annual Tech Fest 2026',
    date: '2026-09-20',
    image: '../images/photo-gallery/cover-02.jpg',
  },
  'convocation-ceremony': {
    heading: 'Convocation Ceremony',
    date: '2026-10-12',
    image: '../images/photo-gallery/cover-03.jpg',
  },
  'inter-department-sports-week': {
    heading: 'Inter-Department Sports Week',
    date: '2026-10-28',
    image: '../images/photo-gallery/cover-04.jpg',
  },
  'cultural-night': {
    heading: 'Cultural Night',
    date: '2026-11-15',
    image: '../images/photo-gallery/cover-05.jpg',
  },
  'campus-library-and-study-spaces': {
    heading: 'Campus Library & Study Spaces',
    date: '2026-11-30',
    image: '../images/photo-gallery/cover-06.jpg',
  },
};

// Shared date helpers so the grid always formats the same ISO `date`
// value the same way - same helpers as formatNewsDateLong/Weekday etc.
function formatGalleryDateLong(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatGalleryWeekday(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}
