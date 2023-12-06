// Getting Data

// fetch('http://127.0.0.1:8000/store/products/')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))

// Posting Data

fetch('http://127.0.0.1:8000/auth/users/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: 'Second-User-Frontend',
        password: '13angulo',
        email: 'user2@user2.com',
        first_name: 'Felipe',
        last_name: 'Gonzalez'
    })
}).then(res => {
    return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))