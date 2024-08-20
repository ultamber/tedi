import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostChipComponent } from './post-chip.component';

describe('PostChipComponent', () => {
  let component: PostChipComponent;
  let fixture: ComponentFixture<PostChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostChipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
