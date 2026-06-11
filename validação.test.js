const validarEmail = require('./validação').validarEmail
const validarSenha = require('./validação').validarSenha
const buscarUsuario = require('./validação').buscarUsuario

test("Verificar que validarEmail('usuario@email.com') retorna truthy",()=>{
    expect(validarEmail("usuario@validarEmail.com")).toBeTruthy()
});

test("Verificar que validarEmail('emailinvalido') retorna falsy",()=>{
    expect(validarEmail("emailinvalid")).toBeFalsy()
});
test("Verificar que validarSenha('abc') lança um erro",()=>{
    expect(()=> validarSenha("abcde")).toThrow(Error)
});
test("Verificar que validarSenha('minhasenha') retorna true",()=>{
    expect(validarSenha('minhasenha')).toBeTruthy()
});
test("Verificar que buscarUsuario(1) retorna Ana",()=>{
    expect(buscarUsuario('1')).toBe("Ana")
});
test("Verificar que buscarUsuario(99) retorna null",()=>{
    expect(buscarUsuario(99)).toBeNull()
})