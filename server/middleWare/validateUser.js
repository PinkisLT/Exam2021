module.exports = (req, res, next) => {
    const {
        name,
        age,
        email,
        password
    } = req.body

    const  validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    function errorSend(message) {
        res.send({ success: false, message })
    }

    if(name.length > 100 || name.length < 2) {
        return errorSend('Vartotojo vardas yra per ilgas/trumpas')
    }
    if(age < 12) {
        return errorSend('Jus esate per jaunas cia lankytis')
    }
    if(!validateEmail(email)) {
        return errorSend('Netinkamas el. pasto formatas')
    }
    if(password.length < 3 || password.length > 10) {
        return errorSend('Slaptazodzio ilgis nera tinkamas')
    }
    next()

}