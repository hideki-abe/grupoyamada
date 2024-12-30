import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviaProdutosComponent } from './previa-produtos.component';

describe('PreviaProdutosComponent', () => {
  let component: PreviaProdutosComponent;
  let fixture: ComponentFixture<PreviaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviaProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
