import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasolineraListComponent } from './gasolinera-list.component';

describe('GasolineraListComponent', () => {
  let component: GasolineraListComponent;
  let fixture: ComponentFixture<GasolineraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GasolineraListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasolineraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
