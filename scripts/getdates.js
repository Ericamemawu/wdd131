// getdates.js - loaded with defer, runs after DOM is parsed

// 1) Set the current year in the footer's first paragraph
const copyrightEl = document.getElementById('copyright');
if (copyrightEl) {
  const year = new Date().getFullYear();
  copyrightEl.textContent = `© ${year} Rubia Magdalene Francesco • Madagascar`;
}

// 2) Output the CodePen/Date Object note in the second paragraph
const noteEl = document.getElementById('note');
if (noteEl) {
  noteEl.textContent = 'Note this CodePen ☼ JavaScript Date Object summary of using the Date object in different ways.';
}

// 3) Output the document’s last modified date
const lastModifiedEl = document.getElementById('lastModified');
if (lastModifiedEl) {
  lastModifiedEl.innerHTML = `Last Modified: ${document.lastModified}`;
}