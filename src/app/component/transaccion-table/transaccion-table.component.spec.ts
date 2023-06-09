import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionTableComponent } from './transaccion-table.component';

describe('TransaccionTableComponent', () => {
  let component: TransaccionTableComponent;
  let fixture: ComponentFixture<TransaccionTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransaccionTableComponent]
    });
    fixture = TestBed.createComponent(TransaccionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
