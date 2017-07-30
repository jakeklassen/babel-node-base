import test from 'ava';
import request from 'supertest';
import app from '../../src';

test.cb('index route', t => {
  t.plan(2);

  request(app).get('/').expect(200).end((err, res) => {
    t.falsy(err);
    t.is(res.body.message, 'o hai!');

    t.end();
  });
});

test.cb('404', t => {
  t.plan(2);

  request(app).get('/nope').expect(404).end((err, res) => {
    t.falsy(err);
    t.is(res.body.error, '/nope - 404 Not Found');

    t.end();
  });
});
