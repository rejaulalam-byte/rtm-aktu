document.addEventListener('DOMContentLoaded', () => {
  initPolicyReadMore();
});

// ------------------------------------------------------------------
// Progressive "Read More" disclosure for the Academic Policy page's
// long body text (pages/academic-policy.html). Sections render in the
// DOM in full document order, but only the first carries no `hidden`
// attribute on load.
//
// Content only ever gets added, never hidden again - clicking "Read
// More" un-hides the next section and leaves every section shown so
// far completely untouched, so scrolling back up always shows the
// full text read to that point. (An earlier version hid each section
// as the next one revealed, which shrank the page and made the
// browser snap the scroll position to somewhere else entirely.)
//
// There is one "Read More" button in the whole page, created here and
// moved to the end of whichever section is currently the last visible
// one; it's removed for good once the final section is revealed.
// ------------------------------------------------------------------
function initPolicyReadMore() {
  const sections = Array.from(document.querySelectorAll('.policy-section'));
  if (sections.length === 0) return;

  const readMore = document.createElement('div');
  readMore.className = 'policy-readmore';
  readMore.innerHTML = '<button type="button" class="conduct-more__toggle policy-readmore-btn">Read More &rarr;</button>';
  sections[0].appendChild(readMore);

  let revealed = 0;

  readMore.querySelector('.policy-readmore-btn').addEventListener('click', () => {
    revealed += 1;
    const nextSection = sections[revealed];
    nextSection.hidden = false;

    if (revealed === sections.length - 1) {
      readMore.remove();
    } else {
      nextSection.appendChild(readMore);
    }

    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
