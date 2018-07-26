$( document ).ready(function() {
  console.log( "ready!" );
  $.ajax({
    type:"GET",
    url:"js/test.json",
    success: function(data) {
      console.log(data);
    },
    dataType: 'json',
  });
});
