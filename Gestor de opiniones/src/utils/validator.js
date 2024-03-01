'use strict'

import { hash, compare } from 'bcrypt'

//Encriptar la contraseña
export const encrypt = (password)=>{
    try {
        return hash(password, 10)
    } catch(err) {
        console.error(err)
        return err
    }
}

//Validar la contraseña
export const checkPassword = async(password, hash)=>{
    try{
        return await compare(password, hash)
    }catch(err){
        console.error(err)
        return err
    }
}

export const checkUpdateUser = (data, id) => {
    if (id) {
        if (
            Object.entries(data).length === 0 ||
            data.name == '' ||
            data.description == '' ||
            data.password ||
            data.password == ''

        ) {
            return false
        }
        return true
    } else {
        if (
            Object.entries(data).length === 0 ||
            data.category ||
            data.category == ''
        ) {
            return false
        }
        return true
    }
}

export const checkUpdate = (data, id)=>{
    if (id) {
        if (
            Object.entries(data).length === 0 ||
            data.name == '' ||
            data.description == '' ||
            data.user ||
            data.user == '' ||
            data.category ||
            data.category == '' ||
            data.publication ||
            data.publication == '' ||
            data.comment == ''

        ) {
            return false
        }
        return true
    }
}  