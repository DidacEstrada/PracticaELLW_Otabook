import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUltimosMangasComponent } from './lista-ultimos-mangas.component';

describe('ListaUltimosMangasComponent', () => {
  let component: ListaUltimosMangasComponent;
  let fixture: ComponentFixture<ListaUltimosMangasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUltimosMangasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaUltimosMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
