import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarmensajesComponent } from './listarmensajes.component';

describe('ListarmensajesComponent', () => {
  let component: ListarmensajesComponent;
  let fixture: ComponentFixture<ListarmensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarmensajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarmensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
