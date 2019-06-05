  function crearCuenta(){ 
    //valido el nombre 
    if (document.formulario.nombre.value.length==0){ 
       alert("Tiene que escribir su nombre") 
       document.formulario.nombre.focus() 
       return 0; 
    } 

    if (document.formulario.correo.value.length==0){ 
      alert("Tiene que escribir su correo") 
      document.formulario.nombre.focus() 
      return 0; 
    }

    if (document.formulario.usuario.value.length==0){ 
    alert("Tiene que escribir su usuario") 
    document.formulario.nombre.focus() 
    return 0; 
    }

    if (document.formulario.pass.value.length==0){ 
    alert("Tiene que repetir su contraseña") 
    document.formulario.nombre.focus() 
    return 0; 
    }
     
    
    //el formulario se envia 
    if (formulario.usuario.correo.nombre.value.length!=0){
    alert("Muchas gracias por enviar el formulario"); 
    document.formulario.submit(); }
}//falta terminar el aviso de gracias por enviar******************