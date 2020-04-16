window.addEventListener('load', () => {
  $(".docsContainer article").append('<div class="img-lightboxing"></div>');

  $(".docsContainer img").on('click', (ev) => {
    const smallSrcImage = ev.target.src || null;

    $('.img-lightboxing')
      .html('<img src="' + smallSrcImage + '"/>')
      .addClass('img-lightboxing-show');

    $('.img-lightboxing-show').on('click', (ev) => {
      $(ev.target)
        .parent('div')
        .removeClass('img-lightboxing-show');
    });
  });
});