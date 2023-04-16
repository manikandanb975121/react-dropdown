import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Page from '../routes/Page';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<Page />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
