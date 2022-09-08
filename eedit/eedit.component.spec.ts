import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EeditComponent } from './eedit.component';

describe('EeditComponent', () => {
  let component: EeditComponent;
  let fixture: ComponentFixture<EeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
