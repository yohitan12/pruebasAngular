import { incrementar } from './numeros';
describe('Pruebas de numeros', () => {

    it('Debe de retornar 100, si el numero ingresado es mayor a 100', () => {

        const respuesta = incrementar(300);
        expect(respuesta).toBe(100);

    });

    it('Debe de retornar el numero enviado + 1, si no es mayor a 100', () => {

        const respuesta = incrementar(50);
        expect(respuesta).toBe(51);

    });

});
