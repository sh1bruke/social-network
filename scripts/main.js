$(document).ready(function(){

    $("#bsend").click(function(){
      $("#post").append(
        '<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">' +
        '<div class="toast-header">' +
          '<strong class="mr-auto">' +
            $("#Titulo").val() +
          '</strong>' +
          '<small>11 mins ago</small>' +
          '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
          '</button>' +
        '</div>' +
        '<div class="toast-body">' +
            $("#Mensaje").val() +
        '</div>' +
      '</div>'     
      );
    })
})
