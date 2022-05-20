const apiURL = 'http://www.themobee.com/api/';

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