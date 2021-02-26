import request from 'supertest';

import { app } from '../app';
import createConnection from '../database';

describe('Users', () => {
  beforeAll(async () => {
    const connection = await createConnection();

    await connection.runMigrations();
  });

  it('should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      name: 'User Test',
      email: 'usertest@example.com',
    });
  
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to create a new user if the email already exists', 
    async () => {
      const response = await request(app).post('/users').send({
        name: 'User Test',
        email: 'usertest@example.com',
      });

      expect(response.status).toBe(400);
    });
});