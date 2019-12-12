'use strict';

var siteInfo = {
  title: 'Indecision App',
  subtitle: 'Let me do the thinking for you!'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    siteInfo.title
  ),
  React.createElement(
    'p',
    null,
    siteInfo.subtitle
  )
);

var user = {
  name: 'Rita Bradley',
  age: 32,
  location: 'Las Vegas, NV'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var root = document.getElementById('root');

ReactDOM.render(template, root);
