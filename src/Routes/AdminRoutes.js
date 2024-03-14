import React from 'react';
import { Route, Routes } from 'react-router-dom/dist';
import Products from '../admin/container/Products/Products';

function AdminRoutes(props) {
    return (
        <>
            <Routes>
                <Route excat path='/products' element={<Products />} />
            </Routes>
        </>
    );
}

export default AdminRoutes;