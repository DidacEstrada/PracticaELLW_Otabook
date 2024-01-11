import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosMangasComponent } from './ultimos-mangas.component';

describe('UltimosMangasComponent', () => {
  let component: UltimosMangasComponent;
  let fixture: ComponentFixture<UltimosMangasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimosMangasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UltimosMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
