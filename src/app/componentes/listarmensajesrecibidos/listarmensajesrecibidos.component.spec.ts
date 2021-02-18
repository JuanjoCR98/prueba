import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarmensajesrecibidosComponent } from './listarmensajesrecibidos.component';

describe('ListarmensajesrecibidosComponent', () => {
  let component: ListarmensajesrecibidosComponent;
  let fixture: ComponentFixture<ListarmensajesrecibidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarmensajesrecibidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarmensajesrecibidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
