// ------------------------------------------------------------------
// Per-album detail data for pages/photo-gallery-details.html, keyed
// by the same album ids as pages/gallery/gallery-data.js (that file
// owns the listing-card fields: heading/date/cover image; this file
// owns what's specific to the detail page: the breadcrumb's short
// title, the album's own photo set, and an optional per-album
// heading/intro override).
//
// `heading`/`intro` are optional - when omitted, the shared template
// (pages/photo-gallery-details.html) falls back to its generic
// "Moments & Memories" heading/paragraph. Only set them when an
// album has its own Figma-specified copy, like tree-plantation-week-2026.
//
// tree-plantation-week-2026 has its real photo set (5 photos, sourced
// from the 2026 Tree Plantation Week event, per Figma node 1411:933).
// The other 6 albums are still on a single placeholder photo (their
// existing cover-0N.jpg) until real photos are supplied - swap
// `photos` to a full array the same way once they're ready.
// ------------------------------------------------------------------
const galleryDetailsData = {
  'tree-plantation-week-2026': {
    breadcrumbLabel: 'Tree Plantation 2026',
    heading: 'Tree Plantation Program 2026',
    intro: 'RTM Al-Kabir Technical University organized a tree plantation programme to promote environmental awareness and contribute to a greener, more sustainable campus. The event brought together faculty members, students, and staff in a shared commitment to protecting nature and building a better future.',
    photos: [
      { src: '../images/photo-gallery/tree-plantation-week-2026/photo-01.jpg', caption: 'The university observes Tree Plantation Week 2026' },
      { src: '../images/photo-gallery/tree-plantation-week-2026/photo-02.jpg', caption: 'The university observes Tree Plantation Week 2026' },
      { src: '../images/photo-gallery/tree-plantation-week-2026/photo-03.jpg', caption: 'The university observes Tree Plantation Week 2026' },
      { src: '../images/photo-gallery/tree-plantation-week-2026/photo-04.jpg', caption: 'The university observes Tree Plantation Week 2026' },
      { src: '../images/photo-gallery/tree-plantation-week-2026/photo-05.jpg', caption: 'The university observes Tree Plantation Week 2026' },
    ],
  },
  'mothers-day-family-affairs': {
    breadcrumbLabel: "Mothers' Day 2026",
    photos: [
      { src: '../images/photo-gallery/cover-02.jpg', caption: "Teachers & Students Family Affairs on the occasion of Mothers' Day" },
    ],
  },
  'inter-departmental-seminars': {
    breadcrumbLabel: 'Inter-departmental Seminars',
    photos: [
      { src: '../images/photo-gallery/cover-03.jpg', caption: 'Various departments of the university organize inter-departmental seminars.' },
    ],
  },
  'annual-sports-competition-2025': {
    breadcrumbLabel: 'Annual Sports Competition 2025',
    photos: [
      { src: '../images/photo-gallery/cover-04.jpg', caption: 'The university has successfully concluded its annual sports competition for 2025.' },
    ],
  },
  'job-fair-for-graduates': {
    breadcrumbLabel: 'Job Fair 2025',
    photos: [
      { src: '../images/photo-gallery/cover-05.jpg', caption: 'The university successfully organized a job fair for its graduates.' },
    ],
  },
  'convocation-2025': {
    breadcrumbLabel: 'Convocation 2025',
    photos: [
      { src: '../images/photo-gallery/cover-06.jpg', caption: 'Students revel in joy as they attend the 2025 convocation.' },
    ],
  },
  'alumni-reunion': {
    breadcrumbLabel: 'Alumni Reunion',
    photos: [
      { src: '../images/photo-gallery/cover-07.jpg', caption: 'The university campus comes alive with the alumni reunion.' },
    ],
  },
};
