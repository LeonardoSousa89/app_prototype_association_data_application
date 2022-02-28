const doc = document

$('#login').click(function(){
    let username = doc.getElementById('email').value
    let pass     = doc.getElementById('pass').value

    const url = 'http://192.168.100.20:8081/login'

    const user = {username, pass}

    const config = {
       method:'POST',
       mode:'cors',
       body: JSON.stringify(user),
        headers:{
                'Content-Type':'application/json'
        }
   }

   fetch(url,config)
        .then(response => {
            
            if(response.OK)
            {
                doc.location.href = '192.168.100.20:80/application/index.html'
            }
            else
            {
                console.log(response.statusText)
            }
        })
        .catch()

})