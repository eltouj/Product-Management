import { TestBed } from '@angular/core/testing';

import { LigneDeCommandeService } from './ligne-de-commande.service';

describe('LigneDeCommandeService', () => {
  let service: LigneDeCommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneDeCommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
