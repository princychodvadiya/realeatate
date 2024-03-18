import React from 'react';
import { Route, Routes } from 'react-router-dom/dist';
import Products from '../admin/container/Products/Products';
import PrivateRoutes from './PrivateRoutes';

function AdminRoutes(props) {
    return (
        <>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route excat path='/products' element={<Products />} />
                </Route>
            </Routes>
        </>
    );
}

export default AdminRoutes;