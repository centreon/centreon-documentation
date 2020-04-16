// Turn off ESLint for this file because it's sent down to users as-is.
/* eslint-disable */

window.addEventListener('load', () => {
  const versions = ['20.04'];
  const oldertUrl = 'https://documentation.centreon.com/';

  // Add the version selector before the search bar
  const container = document.getElementsByClassName('nav-site nav-site-internal')[0];
  const numberOfLi = document.querySelectorAll('.nav-site-internal > li').length;

  const versionsLi = document.createElement('li');
  container.insertBefore(versionsLi, container.children[numberOfLi]);

  const currentUrl = window.location.href;
  const matches = currentUrl.match(/.+\/(\d+\.\d+)\/.+/);

  let selectHtml = '<select id="select-version" class="selec-vers" onchange="window.location.href=this.value;">';
  versions.forEach((version) => {
    let versionHref = currentUrl;
    if (matches && matches[1]) {
      versionHref = currentUrl.replace('/' + matches[1] + '/', '/' + version + '/');
    }
    const regexp = new RegExp('/' + version + '/', 'g');
    const selected = currentUrl.match(regexp) ? 'selected' : '';
    selectHtml += '<option value="' + versionHref + '" ' + selected + '>v.' + version + '</option>';
  });

  selectHtml += '<option value="' + oldertUrl + '">Older</option>';

  selectHtml += '</select>';
  versionsLi.innerHTML = selectHtml;
});
