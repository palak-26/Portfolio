import { useState, useEffect } from 'react';
import Welcome from './Components/Welcome';
import Portfolio from './Components/Portfolio';


function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  return showWelcome ? <Welcome/>:<Portfolio/>;
}

export default App;
