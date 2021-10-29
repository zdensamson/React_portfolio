import Nav from './components/Nav';

function App() {
  const categories = [
    {
      title: 'my_code',
      description: 'Projects'
    },
    {
      title: 'me',
      description: 'A little about myself'
    },
    {
      title: 'resume',
      description: 'Let\'s keep it professional'
    },
    {
      title: 'contact',
      description: 'I\'d love to hear from you!'
    }
  ];

  return (
    <div>
      <Nav
        categories={categories}
      ></Nav>
    </div>
  );
}

export default App;
