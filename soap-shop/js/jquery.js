// not recommended
// $(document).ready(function () {});

//recommended
$(function () {
  const getGalleryData = (data) => {
    let items = [];
    $.each(data, function (i, item) {
      const galleryItems = `
      <div class="grid-item">
        <img
            src="/soap-shop/images/gallery/${item.datamain}"
            alt="gallery${i}"
        />
        </div>`;
      items.push($(galleryItems).get(0));
    });
    $(".grid").append(items);
    $(".grid").imagesLoaded(function () {
      // images have loaded

      // Masonry Effect
      $(".grid").masonry({
        // options
        itemSelector: ".grid-item",
        //columnWidth: 200,
      });
    });
  };

  $.getJSON("/soap-shop/data/gallery.json", getGalleryData);

  // Navigation moving to Target Section
  $(".nav-lists li").on("click", function () {
    const targetIdx = $(this).index();
    const pagePosition = $(".nav-target").eq(targetIdx).offset().top;

    $("html,body").animate({ scrollTop: pagePosition }, 300);
  });
});
