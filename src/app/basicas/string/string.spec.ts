import { mensaje } from './string';
// Sirve para agrupar pruebas
// describe();

// Crear una prueba única (concreto)
// it();


describe( 'Pruebas de strings', () => {

    it( 'Debe mostrar un string', () => {
        const respuesta = mensaje('Yhoan');
        expect(typeof respuesta).toBe('string');
    });

    it( 'Debe retornar un Saludo con el nombre enviado', () => {
        const nombre = 'Yhoan';
        const respuesta = mensaje(nombre);
        expect(respuesta).toContain(nombre);
    });

});
