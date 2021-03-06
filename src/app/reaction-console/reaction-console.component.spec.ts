import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionConsoleComponent } from './reaction-console.component';

describe('ReactionConsoleComponent', () => {
  let component: ReactionConsoleComponent;
  let fixture: ComponentFixture<ReactionConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
