const aplicarDesconto = require('./calculadora').aplicarDesconto
const precoFinal = require('./calculadora').precoFinal

test("Verificar que aplicarDesconto(200, 10) retorna exatamente 180", () =>{
    expect(aplicarDesconto(200,10)).toBe(180)
});
test(" Verificar que aplicarDesconto(100, 0) retorna 100 (sem desconto)",()=>{
    expect(aplicarDesconto(100,0)).toBe(100)
});
test("Verificar que precoFinal(150, 20) retorna 170",()=>{
    expect(precoFinal(150,20)).toBe(170)
});
test("Verificar que precoFinal(0, 15) retorna 15",()=>{
    expect(precoFinal(0,15)).toBe(15)
});