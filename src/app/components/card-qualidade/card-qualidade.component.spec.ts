import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQualidadeComponent } from './card-qualidade.component';

describe('CardQualidadeComponent', () => {
  let component: CardQualidadeComponent;
  let fixture: ComponentFixture<CardQualidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardQualidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardQualidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
