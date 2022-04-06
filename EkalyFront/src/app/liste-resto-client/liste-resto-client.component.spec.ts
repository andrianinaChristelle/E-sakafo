import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRestoClientComponent } from './liste-resto-client.component';

describe('ListeRestoClientComponent', () => {
  let component: ListeRestoClientComponent;
  let fixture: ComponentFixture<ListeRestoClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRestoClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRestoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
