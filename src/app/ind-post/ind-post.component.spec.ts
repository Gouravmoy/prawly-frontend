import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndPostComponent } from './ind-post.component';

describe('IndPostComponent', () => {
  let component: IndPostComponent;
  let fixture: ComponentFixture<IndPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
