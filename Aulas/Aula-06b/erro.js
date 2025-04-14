function TratarErroLaunch() {
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function Nome_Gritado() {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch {
        TratarErroLaunch(e)
    } finally {
        console.log('Final || Endpoint')
    }
}

const obj = { nome: 'Rapadura'}
Nome_Gritado(obj)