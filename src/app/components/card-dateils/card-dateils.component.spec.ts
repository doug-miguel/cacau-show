import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDateilsComponent } from './card-dateils.component';

describe('CardDateilsComponent', () => {
  let component: CardDateilsComponent;
  let fixture: ComponentFixture<CardDateilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDateilsComponent]
    });
    fixture = TestBed.createComponent(CardDateilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
