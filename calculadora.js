function aplicarDesconto(preco, percentual) {
    return preco - (preco * percentual / 100)
    }
    function precoFinal(preco, frete) {
    return preco + frete
    }
    module.exports = { aplicarDesconto, precoFinal }
    
