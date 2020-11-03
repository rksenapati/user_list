import { TestBed } from '@angular/core/testing';

import { UserListLibService } from './user-list-lib.service';

describe('UserListLibService', () => {
  let service: UserListLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
