
$(document).ready(function(){


  // pagina post //
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
    //fin de pagina post//


    //botton login//
    $("#buttonlog").click(function(){
      var usuario = "hola";
      var password = "alabama";
      var inputUsuario = $("#input-user").val()
      var inputpassword = $("#input-password").val()
      
      if (inputUsuario ==="" || 
          inputpassword === ""){
            alert("completa los campos"); 
      } else{
        
      if(inputUsuario === "hola" && inputpassword === "alabama") {
          alert("usuario correcto"); 
          window.location.href = "../index.html"
      }
       else {
      alert("usuario incorrecto"); 
      }}  
  })
    //fin de boton login//

  
})
