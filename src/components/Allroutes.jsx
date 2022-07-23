
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Product } from '../Pages/Product';
import { Cart } from '../Pages/Cart';
import { Login } from '../Pages/Login';
import { Signup } from '../Pages/Signup';
import { Products } from '../Pages/Products';

export const Allroutes = () => {


    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/product' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    )
}