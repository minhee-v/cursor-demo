import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  extractEmails,
  isValidEmail,
  getValidEmails,
  getUniqueValidEmails,
} from './email.js';

test('extractEmails returns emails from user array', () => {
  const users = [{ email: 'a@b.com' }, { email: 'c@d.com' }];
  assert.deepEqual(extractEmails(users), ['a@b.com', 'c@d.com']);
});

test('extractEmails returns empty array for non-array input', () => {
  assert.deepEqual(extractEmails(null), []);
});

test('isValidEmail validates email format', () => {
  assert.equal(isValidEmail('a@b.com'), true);
  assert.equal(isValidEmail('user+tag@example.com'), true);
  assert.equal(isValidEmail('"user"@example.com'), true);
  assert.equal(isValidEmail('user@[192.168.1.1]'), true);
  assert.equal(isValidEmail('invalid'), false);
  assert.equal(isValidEmail('@example.com'), false);
  assert.equal(isValidEmail('user..name@example.com'), false);
  assert.equal(isValidEmail(123), false);
});

test('getValidEmails filters invalid emails', () => {
  const users = [
    { email: 'a@b.com' },
    { email: 'invalid' },
    { email: 'c@d.co' },
  ];
  assert.deepEqual(getValidEmails(users), ['a@b.com', 'c@d.co']);
});

test('getUniqueValidEmails removes duplicates while preserving order', () => {
  const users = [
    { email: 'a@b.com' },
    { email: 'invalid' },
    { email: 'a@b.com' },
    { email: 'c@d.co' },
    { email: 'c@d.co' },
  ];
  assert.deepEqual(getUniqueValidEmails(users), ['a@b.com', 'c@d.co']);
});
