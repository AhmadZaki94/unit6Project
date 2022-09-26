
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Product } from '../Pages/Product';
import { Cart } from '../Pages/Cart';
import { Login } from '../Pages/Login';
import { Signup } from '../Pages/Signup';
import { Products } from '../Pages/Products';
import { ProtectedRoute } from './Context/ProtectedRoute';


export const Allroutes = () => {


    return (
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:id' element={<Product/>} />
            <Route path='/cart' element={
                <ProtectedRoute>
                    <Cart/>
                </ProtectedRoute>
                }>
            </Route>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    )
}