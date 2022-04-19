import { Router } from 'express';
import { expressRoutesAdapter } from '../adapters/expressRoutesAdapter';
import { makeDecomposeNumbersController } from '../factories/decomposeNumbers';

export default (router: Router): void => {
  router.post(
    '/decompose-numbers',
    expressRoutesAdapter(makeDecomposeNumbersController()),
  );
};
