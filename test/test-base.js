const fs = require('fs');
const path = require('path');
const test = require('tape');

function keysStartWith (keys, str) {
  return keys.filter((key) => key.indexOf(str) === 0).length === keys.length;
}

function keysDoNotStartWith (keys, str) {
  return keys.filter((key) => key.indexOf(str) === -1).length === keys.length;
}

const files = fs.readdirSync(path.resolve(__dirname, '../rules'));
files.forEach((file) => {
  const config = require(`../rules/${file}`);
  if (typeof config.rules === 'undefined') {
    return;
  }
  test(`${file} should not combine base rules with react rules`, (t) => {
    t.plan(1);
    if (file === 'react.js') {
      // Stupid
      t.ok(true, 'Can start with react');
    } else if (file === 'a11y.js') {
        t.equal(keysStartWith(Object.keys(config.rules), 'jsx-a11y/'), true, 'All a11y rules start with jsx-a11y');
    } else {
      t.equal(keysDoNotStartWith(Object.keys(config.rules), 'react/'), true, 'None of the base rules start with react');
    }
    t.end();
  });
});
