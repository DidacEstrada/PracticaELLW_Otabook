import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoNovedadesComponent } from './texto-novedades.component';

describe('TextoNovedadesComponent', () => {
  let component: TextoNovedadesComponent;
  let fixture: ComponentFixture<TextoNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoNovedadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextoNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
