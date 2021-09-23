

$(document).ready((e) => {


    // CAPTURO EL VALOR DEL INPUT 
    $('#btn-whatsapp').click((e) => {

        let mensaje = $('#mensajeWhatsapp').val()
       

        //DETECTO LOS ESPACIOS Y LOS REEMPLAZO por %
       
        mensaje.replace(/\s/g, '%')

        // GENERO LA URL

        let url = `https://api.whatsapp.com/send?phone=5493534258397&text=${mensaje}`

        window.open(url,'_blank')
    });

   
})
