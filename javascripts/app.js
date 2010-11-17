$(function(){
  getFlickrImages();

  $("#more img").click(function(){
    $("#images").html("");
      getFlickrImages();
  });
});
function getFlickrImages() {
  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?",function(data){
    $.each(data.items, function(i,item){
      $("<img/>").attr("src", item.media.m).appendTo("#images").wrap("<li><a href='" + item.link + "'></a></li>");
    });
  });
}
