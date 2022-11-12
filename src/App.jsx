import React from 'react';

import Navigation from './components/Navigation';

import DashboardPage from './pages/Dashboard';

function App() {
  const [Page, setPage] = React.useState(<DashboardPage />);

  React.useEffect(() => {
    
    

  }, []);

  return (
    <>
      <Navigation />
      <main>
        <DashboardPage />
      </main>
    </>
  );
}

export default App;
