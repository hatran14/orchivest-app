import logo from './logo.svg';
import './App.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/js/all.min.js'
import Layout from './components/Layout/layout';
import DashBoard from './pages/Dashboard/dashboard';

function App() {


  
  return (
    <>
      <Layout>
        <DashBoard />
      </Layout>
    </>
  );
}

export default App;
