import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeperateviewComponent } from './seperateview.component';

describe('SeperateviewComponent', () => {
  let component: SeperateviewComponent;
  let fixture: ComponentFixture<SeperateviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeperateviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeperateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
