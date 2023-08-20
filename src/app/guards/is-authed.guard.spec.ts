import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { isAuthedGuard } from './is-authed.guard';

describe('isAuthedGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isAuthedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
