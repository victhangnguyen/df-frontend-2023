import { Fragment } from 'react';
import { useOutlet } from 'react-router-dom';
//! Components
import Footer from './Footer';
import Header from './Header';

const Root = () => {
  const outlet = useOutlet();

  return (
    <>
      <Header />
      <main className="container--body">{outlet}</main>
      <Footer />
    </>
  );
};

export default Root;
