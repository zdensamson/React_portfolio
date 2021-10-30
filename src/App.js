import { useState } from 'react';
import Nav from './components/Nav';
import Gallery from './components/Gallery'

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

  const [currentCategory, setCurrentCategory] = useState(categories[1]);


  return (
    <div className="root">
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Nav>
      <main className="vertical-center">
        <Gallery currentCategory={currentCategory}></Gallery>
      </main>

    </div>
  );
}

export default App;
