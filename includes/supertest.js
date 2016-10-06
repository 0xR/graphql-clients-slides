import request from 'supertest';

it('should return the index.html page and status 200 when the request to / is made', done => {
  const app = initializeApp();

  request(app)
    .get('/')
    .expect('Cache-Control', 'public, no-cache')
    .expect('X-Frame-Options', 'SAMEORIGIN')
    .expect('Content-Security-Policy', contentSecurityPolicy)
    .expect('X-Content-Security-Policy', contentSecurityPolicy)
    .expect(200)
    .end(err => done(err));
});
