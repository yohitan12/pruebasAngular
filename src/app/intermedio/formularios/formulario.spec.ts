import { FormularioRegistro } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {

    let componente: FormularioRegistro;

    beforeEach(() => {
        componente = new FormularioRegistro(new FormBuilder());
    });

    it('Debe de crear un formulario con 2 campos, email y password', () => {
        expect( componente.form.contains('email') ).toBeTruthy();
        expect( componente.form.contains('password') ).toBeTruthy();
    });

    it('El email debe ser obligatorio', () => {
        const control = componente.form.get('email');
        control.setValue('yhoangaleano');
        expect( control.valid ).toBeFalsy();
    });

    it('El email debe ser un correo valido', () => {
        const control = componente.form.get('email');
        control.setValue('yhoangaleano@gmail.com');
        expect( control.valid ).toBeTruthy();
    });

});
