import React, { useMemo } from 'react';
import PageLayout from './components/PageLayout/PageLayout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  const header = useMemo(() => {
    return (
      <Header />
    )
  }, []);
  const footer = useMemo(() => {
    return (
      <Footer />
    );
  }, []);
  return (
    <PageLayout
      header={header}
      footer={footer}
    >
    </PageLayout>
  );
}

export default App;
