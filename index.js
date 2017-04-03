const React = require('react');
const ReactDOM = require('react-dom');

const Spaceship = require('./components/Spaceship');

const mFcolors = ['grey', 'dirty', 'rust']

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
  />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
