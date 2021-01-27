import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEstadiosComponent } from './crud-estadios.component';

describe('CrudEstadiosComponent', () => {
  let component: CrudEstadiosComponent;
  let fixture: ComponentFixture<CrudEstadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEstadiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEstadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
