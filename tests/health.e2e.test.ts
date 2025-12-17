import request from 'supertest';
import { createApp } from '../apps/api/src/app';

describe('health endpoint', () => {
  it('returns ok', async () => {
    await request(createApp()).get('/health').expect(200);
  });
});
