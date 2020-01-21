import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos', () => {

        const medicos = [
            { nombre: 'Médico Andres Galeano' },
            { nombre: 'Médico Andres Perez' },
            { nombre: 'Médico Luis Suarez' }
        ];

        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return from([
                medicos
            ]);
        });

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Guardar Médico: Debe de llamar al servidor para agregar un médico', () => {
        const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
            return empty();
        });
        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });


    it('Guardar Médico: Debe de agregar un nuevo médico al arreglo de médicos', () => {
        const medico = { nombre: 'Cristian Muñoz' };
        // Se valida esto porque en el subscribe del componente este se agrega al
        // array de medicos. La prueba se hace sobre esto
        spyOn(servicio, 'agregarMedico').and.returnValue(
            from([medico])
        );
        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Guardar Médico: Si falla el guardado la propiedad mensajeError, debe ser igual al error del servicio', () => {
        const miError = 'No se pudo agregar el médico';
        spyOn(servicio, 'agregarMedico').and.returnValue(
            throwError(miError)
        );
        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);
    });

    it('Borrar Médico: Debe de llamar al servidor para borrar un médico', () => {
        spyOn(window, 'confirm')
            .and.returnValue(true);
        const id = '1';
        const espia = spyOn(servicio, 'borrarMedico')
            .and.returnValue(empty());
        componente.borrarMedico(id);
        expect(espia).toHaveBeenCalledWith(id);
    });

    it('Borrar Médico: No debe de llamar al servidor para borrar un médico', () => {
        spyOn(window, 'confirm')
            .and.returnValue(false);
        const id = '1';
        const espia = spyOn(servicio, 'borrarMedico')
            .and.returnValue(empty());
        componente.borrarMedico(id);
        expect(espia).not.toHaveBeenCalledWith(id);
    });

});
