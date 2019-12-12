let siteInfo = {
  title: 'Indecision App',
  subtitle: 'Let me do the thinking for you!'
};

const template = (
  <div>
    <h1>{siteInfo.title}</h1>
    <p>{siteInfo.subtitle}</p>
  </div>
);

let user = {
  name: 'Rita Bradley',
  age: 32,
  location: 'Las Vegas, NV'
};

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

const root = document.getElementById('root');

ReactDOM.render(template, root);
