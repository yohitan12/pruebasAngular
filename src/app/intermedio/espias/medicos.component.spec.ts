import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty } from 'rxjs';

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

    // TODO: Quede en el video 275: Probar errores en los observables

});
