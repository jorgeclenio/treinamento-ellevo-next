import { TestBed } from '@angular/core/testing';

import { TaskControlService } from './task-control.service';

describe('TaskControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskControlService = TestBed.get(TaskControlService);
    expect(service).toBeTruthy();
  });
});
