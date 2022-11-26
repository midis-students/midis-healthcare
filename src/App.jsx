import React from 'react';

import Login from './pages/Login';
import MainPage from './pages/Main';
import { PageContext } from './store/page';

function App() {
  const [Page, setPage] = React.useState(<MainPage />);

  return <PageContext.Provider value={{ Page, setPage }}>{Page}</PageContext.Provider>;
}

export default App;
