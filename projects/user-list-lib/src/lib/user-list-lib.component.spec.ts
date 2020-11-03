import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListLibComponent } from './user-list-lib.component';

describe('UserListLibComponent', () => {
  let component: UserListLibComponent;
  let fixture: ComponentFixture<UserListLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
