import React from 'react';
import { Route, Routes } from 'react-router-dom/dist';
import Reviews from '../admin/container/Reviews/Reviews';
import PrivateRoutes from './PrivateRoutes';
import Layout from '../admin/component/Layout/Layout';
import Property from '../admin/container/Property/Property';


function AdminRoutes(props) {
    return (
        <Layout>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route excat path='/Property' element={<Property />} />
                    <Route excat path='/Reviews' element={<Reviews />} />
                </Route>
            </Routes>
        </Layout>
    );
}

export default AdminRoutes;