import { TestBed } from '@angular/core/testing';

import { AiCustomizationService } from '../services/ai-customization.service';

describe('AiCustomizationService', () => {
  let service: AiCustomizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiCustomizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
