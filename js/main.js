//Animate smooth scroll

$("#view-work").on("click", function() {
  const images = $("#images").position().top;

  $("html,body").animate(
    {
      scrollTop: images
    },
    900
  );
});

$("#contact").on("click", function() {
  const contact = $("#footer").position().top;

  $("html,body").animate(
    {
      scrollTop: contact
    },
    900
  );
});
