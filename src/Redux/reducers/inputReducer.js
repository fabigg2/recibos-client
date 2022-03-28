export const inputReducer = (type, payload) => {
    switch (type) {
        //Evalua que el dato tenga mas de 2 caracteres
        case 'text':
            // console.log(payload)
            if (!/\d/g.test(payload) && payload.length > 1)
                return true;
            return false
        case 'email':
            let div = payload.split('@');
            if (div && div.length === 2 && div[1].length > 1)
                return true;

            return false;
        case 'password':
            if (/\d/g.test(payload) && /[a-z]/g.test(payload) && /[A-Z]/g.test(payload))
                return true;
            return false
        case 'number':
            if (/\d/g.test(payload) && !/[a-z]/g.test(payload) && !/[A-Z]/g.test(payload))
                return true;
            return false
        default:
            return false
    }
}