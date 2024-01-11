import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcioMangaComponent } from './descripcio-manga.component';

describe('DescripcioMangaComponent', () => {
  let component: DescripcioMangaComponent;
  let fixture: ComponentFixture<DescripcioMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripcioMangaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescripcioMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
