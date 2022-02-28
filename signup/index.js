const doc = document

$('#signup').click(function(){
    let username     = doc.getElementById('username').value
    let email        = doc.getElementById('email').value
    let pass         = doc.getElementById('pass').value

    const url = 'http://192.168.100.20:8081/signup'

    const data = {username, email, pass}

    const config = {
       method:'POST',
       mode:'cors',
       body: JSON.stringify(data),
        headers:{
                'Content-Type':'application/json'
        }
   }

   fetch(url,config)
        .then(response => response.json())
        .catch((error)=>{
                    console.log(error)
        })

})