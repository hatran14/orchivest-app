import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/layout';
import DashBoard from './pages/Dashboard/dashboard';



function App() {
  return (
    <>
      <Layout>
        <DashBoard />
        {/* <h1>abc</h1> */}
      </Layout>
    </>
  );
}

export default App;
