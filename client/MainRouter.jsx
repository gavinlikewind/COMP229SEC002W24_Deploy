//control all the page routing
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './core/Home';
import Users from './user/Users.jsx';
import Signup from './user/Signup.jsx';
import Signin from './lib/Signin.jsx';
import Profile from "./user/Profile.jsx";

import PrivateRoute from './lib/PrivateRoute.jsx';
import EditProfile from './user/EditProfile.jsx';

//shop 
import MyShops from './shop/MyShops'
import NewShop from './shop/NewShop'
import EditShop from './shop/EditShop'

//product
import NewProduct from "./product/NewProduct";
import EditProduct from "./product/EditProduct";

//menu
import Menu from './core/Menu';

const MainRouter = () => {
    return (
        <div>
            <Menu />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/user/:userId" element={<Profile />} />
                <Route path="/user/edit/:userId" element={<PrivateRoute> <EditProfile /></PrivateRoute>} />

                <Route path="/seller/shops" element={<PrivateRoute><MyShops /></PrivateRoute>} />
                <Route path="/seller/shop/new" element={<PrivateRoute><NewShop /></PrivateRoute>} />
                <Route path="/seller/shop/edit/:shopId" element={<PrivateRoute><EditShop /></PrivateRoute>} />

                <Route
                    path="/seller/:shopId/products/new"
                    element={
                        <PrivateRoute>
                            <NewProduct />
                        </PrivateRoute>
                    }
                    component={NewProduct}
                />
                <Route
                    path="/seller/:shopId/:productId/edit"
                    element={
                        <PrivateRoute>
                            <EditProduct />
                        </PrivateRoute>
                    }
                />

            </Routes>
        </div>
    )
};

export default MainRouter;
