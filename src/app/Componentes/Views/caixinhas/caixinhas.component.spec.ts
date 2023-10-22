import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixinhasComponent } from './caixinhas.component';

describe('CaixinhasComponent', () => {
  let component: CaixinhasComponent;
  let fixture: ComponentFixture<CaixinhasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaixinhasComponent]
    });
    fixture = TestBed.createComponent(CaixinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
