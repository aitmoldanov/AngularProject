import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAgendaComponent } from './parent-agenda.component';

describe('ParentAgendaComponent', () => {
  let component: ParentAgendaComponent;
  let fixture: ComponentFixture<ParentAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
