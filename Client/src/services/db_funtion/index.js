const apiURL = 'http://antony.labfp.es/api/';

export async function getUser(param, password) {
    const sentenceName = apiURL + `get/user/name=${param}`
    const sentenceEmail = apiURL + `get/user/email=${param}`

    if (param.includes('@')) {

        const response = fetch(sentenceEmail)
            .then(res => res.json())
            .then(response => {
                let result;
                response.length > 0 ?
                    result = response
                    : result = [{ ID: '', NOMBRE: '', CORREO: '', CONTRASENA: '' }]
                return result
            })

        return response.then(async response => {
            if (response[0].CORREO === param){
                if (response[0].CONTRASENA === password) {
                    return 'true'
                } else {
                    return 'false'
                }
            } else {
                return 'false'
            }
                
        })

    } else {

        const response = fetch(sentenceName)
            .then(res => res.json())
            .then(response => {
                let result;
                response.length > 0 ?
                    result = response
                    : result = [{ ID: '', NOMBRE: '', CORREO: '', CONTRASENA: '' }]
                return result
            })

        return response.then(async response => {
            if (response[0].NOMBRE === param){
                if (response[0].CONTRASENA === password) {
                    return 'true'
                } else {
                    return 'false'
                }
            } else {
                return 'false'
            }               
        })
    }
}

export function validateRegister(params) {
    const username = params.username
    const email = params.email
    const password = params.password
    const password2 = params.password2

    if(username.length < 1 && 
        email.length < 1 &&
         password.length < 1 &&
          password2.length < 1) {
        return {res: false , message: 'Los contenedores no pueden estar vacio.'}
    } else if (username.includes('@')) {
        return {res: false , message: 'El usuario no debe contener el caracter: @'}
    } else if (!email.includes('@') || email < 5) {
        return {res: false , message: 'El email no es valido.' }
    } else if (password !== password2) {
        return {res: false , message: 'Las contraseñas no coinciden.'}
    } else if (password < 8) {
        return {res: false , message: 'Las contraseña no puede ser menor de 8 caracteres.'}
    }
    else {
        return {res: true , message: 'OK'}
    }

}

export async function insertUser(params) {
    const sentence = apiURL + `insert/user`

    return fetch(sentence, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params)
    }).then(response => {
        return response.status === 200 ? 'true' : 'false'
    })
}

export async function insertFav(params) {
    const sentence = apiURL + `insert/fav/multimedia`

    console.log(params)

    return fetch(sentence, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params)
    }).then(response => {
        return response.status === 200 ? 'true' : 'false'
    })
}

export async function deletetFav(params) {
    const sentence = apiURL + `delete/fav/multimedia`

    return fetch(sentence, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params)
    }).then(response => {
        return response.status === 200 ? 'true' : 'false'
    })
}

export async function searchMultimediaFav(params) {
    const sentence = apiURL + `search/fav/multimedia`
    
    return fetch(sentence, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params)
    })
    .then(res => res.json())
    .then(response => {
        console.log(response)
        return response.length > 0 ? true : false
    })
}


export async function insertList(params) {
    const sentence = apiURL + `insert/list/multimedia`

    fetch(sentence, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params)
    }).then(response => {
        return response.status === 200 ? 'true' : 'false'
    })
}

