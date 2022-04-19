import request from 'supertest';

import { app } from '../config/app';

describe('DecomposeNumbers Routes', () => {
  describe('POST /decompose-numbers', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/decompose-numbers')
        .send({ number: 45 })
        .expect(200);
    });
  });
});
