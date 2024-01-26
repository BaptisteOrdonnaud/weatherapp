// Insert your code here
document.querySelector("#register").addEventListener('click', () => {

    const data = {
        name: document.querySelector('#registerName').value,
        email: document.querySelector('#registerEmail').value,
        password: document.querySelector('#registerPassword').value,
    }

    fetch('http://localhost:3000/users/signup', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(data)

    })
        .then(response => response.json())
        .then(userData => {
            if (userData.result) {
                window.location.assign('index.html')
            }
        })
})

document.querySelector("#connection").addEventListener('click', () => {

    const data = {
        email: document.querySelector('#connectionEmail').value,
        password: document.querySelector('#connectionPassword').value,
    }

    fetch('http://localhost:3000/users/signin', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(data)

    })
        .then(response => response.json())
        .then(userData => {
            if (userData.result) {
                window.location.assign('index.html')
            }
        })
})



