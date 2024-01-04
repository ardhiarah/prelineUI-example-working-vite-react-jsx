import { Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Input from '../pages/About';
import Accordion from '../pages/Accordion';

export default function Navigator() {
    return (
        <>
            <header>
                <div className='px-[50px] py-[20px]'>
                    <div className='flex flex-wrap gap-x-4'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/accordion'>Accordion</Link>
                    </div>
                </div>
            </header>

            <div className='px-[50px] pb-[20px]'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<Input />} />
                    <Route path='/accordion' element={<Accordion />} />
                </Routes>
            </div>
        </>
    );
}
