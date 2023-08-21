import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagComponent } from './tag.component';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagComponent],
    });
    fixture = TestBed.createComponent(TagComponent);

    component = fixture.componentInstance;
    component.tag = { group: 1, id: 1, name: 'tag' };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
