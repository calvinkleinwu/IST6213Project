var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);

$("body").append($overlay);
  //2.1 An image
  //2.2 A caption
//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");

  $image.attr("src", imageLocation);
  //1.1 Show the overlay.
  
  //1.2 Update overlay with the image linked in the link
  //1.3 Get child's alt attribute and set caption

  $overlay.show();
  
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function(){
	$overlay.hide();
});