import request from 'supertest-as-promised';

it('should return the index.html page and status 200 when the request to / is made', () => {
  const app = initializeApp();

  return request(app)
    .get('/')
    .expect('Cache-Control', 'public, no-cache')
    .expect('X-Frame-Options', 'SAMEORIGIN')
    .expect('Content-Security-Policy', contentSecurityPolicy)
    .expect('X-Content-Security-Policy', contentSecurityPolicy)
    .expect(200);
});
