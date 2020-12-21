import { useState } from 'react'
import './App.css';

import Layout from './hoc/layout/Layout';
import Blog from './container/BlogPage/BlogPage';
import SignIn from './component/SignIn/SignIn';

function App() {
  {/*<Layout>
    <Blog></Blog>
  </Layout>*/}
  return (
    <SignIn></SignIn>
  );
}

export default App;
