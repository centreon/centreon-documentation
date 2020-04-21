// Turn off ESLint for this file because it's sent down to users as-is.
/* eslint-disable */

window.addEventListener('load', function() {
  const elements = document.getElementsByClassName('nav-site nav-site-internal');
  const languagesLi = document.createElement('li');

  elements[0].insertBefore(languagesLi, document.getElementsByClassName('siteNavItemActive')[1]);

  const currentUrl = window.location.href;

  // To add a new language, add it to the languages table and to the regex below.
  const languages = [
    {
      short: 'fr',
      long: 'Français',
    },
    {
      short: 'en',
      long: 'English',
    },
  ];
  const matches = currentUrl.match(/\/(en|fr)\//);

  let selectHtml = '<select id="select-language" class="selec-lang" onchange="window.location.href=this.value;">';
  languages.forEach((language) => {
    let languageHref = currentUrl;
    if (matches && matches[1]) {
      languageHref = currentUrl.replace('/' + matches[1] + '/', '/' + language.short + '/');
    }
    const regexp = new RegExp('/' + language.short + '/', 'g');
    const selected = currentUrl.match(regexp) ? 'selected' : '';
    selectHtml += '<option value="' + languageHref + '" ' + selected + '>' + language.long + '</option>';
  })
  selectHtml += '</select>';
  languagesLi.innerHTML = selectHtml;
});
