let siteInfo = {
  title: 'Indecision App',
  subtitle: 'Let me do the thinking for you!',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{siteInfo.title}</h1>
    {siteInfo.subtitle && <p>{siteInfo.subtitle}</p>}
    <p>
      {siteInfo.options.length > 0
        ? 'Here are your options'
        : 'No options available'}
    </p>
  </div>
);

let user = {
  name: 'Rita Bradley',
  age: 32,
  location: 'Las Vegas, NV'
};

const getLocation = location => {
  if (location) {
    return <p>Location: {location}</p>;
  }
};

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const root = document.getElementById('root');

ReactDOM.render(template, root);
