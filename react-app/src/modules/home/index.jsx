import { useDispatch } from 'react-redux';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Dashboard from './dashboard';
import { useEffect } from 'react';
import { fetchTACData } from '../../store/actions/home';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        //dispatch(fetchTACData())
    }, [dispatch])

    return (
        <div className="w-full flex h-svh max-h-svh">
            <div className='h-full flex-1'>
                <div className='flex h-full flex-col justify-between overflow-y-hidden'>
                    <Header selected="dashboard" />
                    <Dashboard />
                    <Footer />
                </div>
            </div>
            
        </div>
    )
}

export default Home;