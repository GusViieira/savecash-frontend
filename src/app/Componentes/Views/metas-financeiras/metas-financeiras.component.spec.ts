import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasFinanceirasComponent } from './metas-financeiras.component';

describe('MetasFinanceirasComponent', () => {
  let component: MetasFinanceirasComponent;
  let fixture: ComponentFixture<MetasFinanceirasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetasFinanceirasComponent]
    });
    fixture = TestBed.createComponent(MetasFinanceirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
