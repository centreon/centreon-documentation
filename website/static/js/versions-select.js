// Turn off ESLint for this file because it's sent down to users as-is.
/* eslint-disable */

window.addEventListener('load', () => {
  const versions = ['21.10', '21.04', '20.10'];
  const olderUrl = 'https://docs.centreon.com/older/index.html';

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
    } else {
      versionHref = currentUrl.replace('/current/', '/' + version + '/');
    }
    const regexp = new RegExp('/' + version + '/', 'g');
    const selected = currentUrl.match(regexp) ? 'selected' : '';
    selectHtml += '<option value="' + versionHref + '" ' + selected + '>' + version + ((version === '21.10') ? ' (current)':'') + '</option>';
  });

  selectHtml += '<option value="' + olderUrl + '">Older</option>';

  selectHtml += '</select>';
  versionsLi.innerHTML = selectHtml;
});
