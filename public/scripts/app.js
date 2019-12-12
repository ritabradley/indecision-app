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

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var root = document.getElementById('root');

ReactDOM.render(template, root);
