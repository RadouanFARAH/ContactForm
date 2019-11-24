const name = document.getElementById('nom')
const tel = document.getElementById('tel')
const email = document.getElementById('email')
const societe = document.getElementById('societe')
const objet = document.getElementById('objet')
const message = document.getElementById('message')
const form = document.getElementById('form')
const nomerror = document.getElementById('nomerror')
const telerror = document.getElementById('telerror')
const emailerror = document.getElementById('emailerror')
const messageerror = document.getElementById('messageerror')
const info = document.getElementById('info')



form.addEventListener('submit', (e) => {
    let values=[]
    let err=0
    e.preventDefault()
    if (name.value ==='' | name.value==null) {
        e.preventDefault()
        nomerror.innerText = 'nom est obligatoire'

        err++


    }
    else {
        values.push('nom complet : '+name.value)
        nomerror.innerText='' 
        name.value =''
}
    if (tel.value ==='' | tel.value==null) {
        e.preventDefault()
        telerror.innerText = 'tel est obligatoire'
        err++


    }
    else {
        values.push('tel : '+tel.value)
        telerror.innerText='' 
        tel.value=''
    }
    if (email.value ==='' | email.value==null) {
        e.preventDefault()
        email.class='form-control is-invalid'
        emailerror.innerText = 'email est obligatoire'
        err++


    }
    else {
        values.push('Email : '+email.value)
        emailerror.innerText='' 
        email.value=''
    }
      if (message.value ==='' | message.value==null) {
        e.preventDefault()
        messageerror.innerText = 'message est obligatoire'
        err++

    }
    else {
        values.push('message : '+message.value)
        messageerror.innerText='' 
        message.value=''
    }
    values.push('societe : '+societe.value)
    values.push('object : '+objet.value)
    societe.value=''
    objet.value=''
    if (err===0){
        info.innerText= values.join("\r\n")
        info.style="position: relative; width: 60%; left: 20%; border: 2px dotted black; padding-left: 15px; padding-right: 15px; text-align: justify;text-justify: auto;"
}
else {
    info.innerText=''
}
      
})