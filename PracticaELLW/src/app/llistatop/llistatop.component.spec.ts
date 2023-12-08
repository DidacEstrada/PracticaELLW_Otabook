import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistatopComponent } from './llistatop.component';

describe('LlistatopComponent', () => {
  let component: LlistatopComponent;
  let fixture: ComponentFixture<LlistatopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistatopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LlistatopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
