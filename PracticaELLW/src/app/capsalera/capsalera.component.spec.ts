import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsaleraComponent } from './capsalera.component';

describe('CapsaleraComponent', () => {
  let component: CapsaleraComponent;
  let fixture: ComponentFixture<CapsaleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapsaleraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapsaleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
