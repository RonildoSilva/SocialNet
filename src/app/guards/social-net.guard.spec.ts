import { TestBed } from '@angular/core/testing';

import { SocialNetGuard } from './social-net.guard';

describe('SocialNetGuard', () => {
  let guard: SocialNetGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SocialNetGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
