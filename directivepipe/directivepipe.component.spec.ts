import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivepipeComponent } from './directivepipe.component';

describe('DirectivepipeComponent', () => {
  let component: DirectivepipeComponent;
  let fixture: ComponentFixture<DirectivepipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivepipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
