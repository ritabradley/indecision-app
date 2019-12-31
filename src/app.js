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
    <ol>
      <li>Item One</li>
      <li>Items Two</li>
    </ol>
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
let count = 0;

const increase = () => {
  console.log('Add one');
  count++;
  renderCounterApp();
};

const decrease = () => {
  console.log('Substract one');
  count--;
  renderCounterApp();
};

const reset = () => {
  console.log('reset');
  count = 0;
  renderCounterApp();
};

const root = document.getElementById('root');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase} className="button">
        +1
      </button>
      <button onClick={decrease} className="button">
        -1
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, root);
};

renderCounterApp();
