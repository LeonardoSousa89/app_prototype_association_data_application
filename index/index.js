const doc = document

$('#login').click(function(){
    let email = doc.getElementById('email').value
    let pass     = doc.getElementById('pass').value

    const url = 'http://192.168.100.20:8081/login'

    const data = {email, pass}

    const config = {
       method:'POST',
       mode:'cors',
       body: JSON.stringify(data),
        headers:{
                'Content-Type':'application/json'
        }
   }

   fetch(url,config)
        .then(response => {
            
            if(response.ok)
            {
                doc.location.href = 'http://192.168.100.20:80/application/index.html'
            }
            else
            {
                console.log(response.statusText)
            }
        })
        .catch((error)=>{
                    console.log(error)
        })

})