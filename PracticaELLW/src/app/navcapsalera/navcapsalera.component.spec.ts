import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcapsaleraComponent } from './navcapsalera.component';

describe('NavcapsaleraComponent', () => {
  let component: NavcapsaleraComponent;
  let fixture: ComponentFixture<NavcapsaleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavcapsaleraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavcapsaleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
