import React, { useMemo } from 'react';
import PageLayout from './components/PageLayout/PageLayout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IntroSection from './sections/IntroSection/IntroSection';
import LineGroup from './components/LineGroup/LineGroup';

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
      <IntroSection />
      <LineGroup />
    </PageLayout>
  );
}

export default App;
