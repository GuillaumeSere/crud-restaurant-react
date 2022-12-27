import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header'
import OrderCard from './components/OrderCard';
import Pwd from './components/Pwd';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Pwd />} />
                <Route path="/pwd" element={<Pwd />} />
                <Route path="/home" element={<Home />} />
                <Route path="/ordercart" element={<OrderCard />} />
            </Routes>
        </>

    );
}

export default App;
