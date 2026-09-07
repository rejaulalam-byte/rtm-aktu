document.addEventListener('DOMContentLoaded', () => {
  initPolicyReadMore();
});

// ------------------------------------------------------------------
// Progressive "Read More" disclosure for the Academic Policy page's
// long body text (pages/academic-policy.html). Sections render in the
// DOM in full document order, but only the first carries no `hidden`
// attribute - clicking a section's "Read More" hides it and reveals
// the next one in its place, so the page never shows the entire
// document at once.
//
// The last section behaves differently: instead of revealing "the
// next one" (there isn't one), its button reveals every earlier
// section at once, restoring the complete document. That inserts a
// large block of content above the reader's current scroll position,
// which would otherwise yank the viewport upward - so we measure the
// button's position before and after the reveal and scroll by the
// difference to keep the reader anchored on the text they were
// reading.
// ------------------------------------------------------------------
function initPolicyReadMore() {
  const sections = Array.from(document.querySelectorAll('.policy-section'));
  if (sections.length === 0) return;

  sections.forEach((section, index) => {
    const btn = section.querySelector('.policy-readmore-btn');
    if (!btn) return;
    const isLast = index === sections.length - 1;

    btn.addEventListener('click', () => {
      if (!isLast) {
        section.hidden = true;
        sections[index + 1].hidden = false;
        return;
      }

      const beforeTop = btn.getBoundingClientRect().top;
      sections.forEach((s) => { s.hidden = false; });
      const afterTop = btn.getBoundingClientRect().top;
      window.scrollBy(0, afterTop - beforeTop);
      // Every section is visible now, so every earlier section's own
      // "Read More" (still wired to hide-and-advance) would otherwise
      // re-hide it if clicked - remove them all, not just this one.
      document.querySelectorAll('.policy-readmore').forEach((el) => el.remove());
    });
  });
}
