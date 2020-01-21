import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';

describe('Medico Component', () => {

    let componente: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MedicoComponent
            ],
            providers: [],
            imports: []
        });

        fixture = TestBed.createComponent<MedicoComponent>( MedicoComponent );
        componente = fixture.componentInstance;

    });

    it('Debe de crearse el componente', () => {
        expect(componente).toBe(true);
    });

    // TODO: Vídeo 282
    it('Debe de retornar el nombre del médico', () => {
        const nombre = 'Juan';
        const respuesta = componente.saludarMedico(nombre);
        expect(respuesta).toContain(nombre);
    });

    it('', () => {
    });

});
