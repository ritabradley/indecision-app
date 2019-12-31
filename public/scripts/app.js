'use strict';

var siteInfo = {
  title: 'Indecision App',
  subtitle: 'Let me do the thinking for you!',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    siteInfo.title
  ),
  siteInfo.subtitle && React.createElement(
    'p',
    null,
    siteInfo.subtitle
  ),
  React.createElement(
    'p',
    null,
    siteInfo.options.length > 0 ? 'Here are your options' : 'No options available'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Items Two'
    )
  )
);

var user = {
  name: 'Rita Bradley',
  age: 32,
  location: 'Las Vegas, NV'
};

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
};
var count = 0;

var increase = function increase() {
  console.log('Add one');
  count++;
  renderCounterApp();
};

var decrease = function decrease() {
  console.log('Substract one');
  count--;
  renderCounterApp();
};

var reset = function reset() {
  console.log('reset');
  count = 0;
  renderCounterApp();
};

var root = document.getElementById('root');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: increase, className: 'button' },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: decrease, className: 'button' },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );
  ReactDOM.render(templateTwo, root);
};

renderCounterApp();
