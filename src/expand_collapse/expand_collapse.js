// Reference the toggle link
const xa = document.getElementById('expAll');

// Register link on click event
xa.addEventListener('click', function(e) {

  /* Toggle the two classes that represent "state"
  || determined when link is clicked
  */
  e.currentTarget.classList.toggle('exp');
  e.currentTarget.classList.toggle('col');

  // Collect all <details> into a NodeList
  const details = document.querySelectorAll('details');

  /* Convert NodeList into an array then iterate
  || through it...
  */
  Array.from(details).forEach(function(obj, idx) {

    /* If the link has the class .exp...
    || make each <detail>'s open attribute true
    */
    if (e.currentTarget.classList.contains('exp')) {
      obj.open = true;
      // Otherwise remove [open]
    } else {
      obj.removeAttribute('open');
    }

  });

}, false);