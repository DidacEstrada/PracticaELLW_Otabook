import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfiveComponent } from './topfive.component';

describe('TopfiveComponent', () => {
  let component: TopfiveComponent;
  let fixture: ComponentFixture<TopfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopfiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
