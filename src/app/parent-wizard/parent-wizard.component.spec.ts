import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentWizardComponent } from './parent-wizard.component';

describe('ParentWizardComponent', () => {
  let component: ParentWizardComponent;
  let fixture: ComponentFixture<ParentWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
