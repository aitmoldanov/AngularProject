import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAgendaComponent } from './child-agenda.component';

describe('ChildAgendaComponent', () => {
  let component: ChildAgendaComponent;
  let fixture: ComponentFixture<ChildAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
