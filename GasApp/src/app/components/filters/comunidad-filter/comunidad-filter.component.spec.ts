import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadFilterComponent } from './comunidad-filter.component';

describe('ComunidadFilterComponent', () => {
  let component: ComunidadFilterComponent;
  let fixture: ComponentFixture<ComunidadFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComunidadFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunidadFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
