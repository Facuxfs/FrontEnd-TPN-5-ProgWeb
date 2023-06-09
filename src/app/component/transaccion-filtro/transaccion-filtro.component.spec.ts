import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionFiltroComponent } from './transaccion-filtro.component';

describe('TransaccionFiltroComponent', () => {
  let component: TransaccionFiltroComponent;
  let fixture: ComponentFixture<TransaccionFiltroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransaccionFiltroComponent]
    });
    fixture = TestBed.createComponent(TransaccionFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
