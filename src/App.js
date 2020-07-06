import React from 'react';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder.jsx'

function App() {
  return (
    <div>
     <Layout>
     <BurgerBuilder />
     </Layout>
    </div>
  );
}

export default App;
