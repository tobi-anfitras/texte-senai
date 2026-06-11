function validarEmail(email) {
    return email.includes('@') && email.includes('.')
    }

    function validarSenha(senha) {
    if (senha.length < 6) throw new Error('Senha muito curta')
    return true
    }

function buscarUsuario(id) {
        const usuarios = { 1: 'Ana', 2: 'Bruno' }
        return usuarios[id] || null
        }
        module.exports = { validarEmail, validarSenha, buscarUsuario }