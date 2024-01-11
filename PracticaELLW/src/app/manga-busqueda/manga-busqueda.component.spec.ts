import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaBusquedaComponent } from './manga-busqueda.component';

describe('MangaBusquedaComponent', () => {
  let component: MangaBusquedaComponent;
  let fixture: ComponentFixture<MangaBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangaBusquedaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MangaBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
