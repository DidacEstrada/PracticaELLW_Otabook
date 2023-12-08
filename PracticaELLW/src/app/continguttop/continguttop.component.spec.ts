import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinguttopComponent } from './continguttop.component';

describe('ContinguttopComponent', () => {
  let component: ContinguttopComponent;
  let fixture: ComponentFixture<ContinguttopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinguttopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContinguttopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
