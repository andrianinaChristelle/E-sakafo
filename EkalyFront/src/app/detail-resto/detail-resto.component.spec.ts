import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRestoComponent } from './detail-resto.component';

describe('DetailRestoComponent', () => {
  let component: DetailRestoComponent;
  let fixture: ComponentFixture<DetailRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
