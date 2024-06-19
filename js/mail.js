function enviarcorreo(e){

    const form = document.getElementById("form");
    e.preventDefault();
    let parms ={
        from_name : document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message : document.getElementById("mensaje").value
    }
    emailjs.send("service_0fh2rkj", "template_41td3b8", parms).then(function (res){
        alert("Enviado con exito! ");
        form.reset();
    })
    
}