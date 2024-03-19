import React from 'react';
import { Route, Routes } from 'react-router-dom/dist';
import Products from '../admin/container/Products/Products';
import Reviews from '../admin/container/Reviews/Reviews';
import PrivateRoutes from './PrivateRoutes';
import Layout from '../admin/component/Layout/Layout';


function AdminRoutes(props) {
    return (
        <Layout>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route excat path='/products' element={<Products />} />
                    <Route excat path='/Reviews' element={<Reviews />} />
                </Route>
            </Routes>
        </Layout>
    );
}

export default AdminRoutes;