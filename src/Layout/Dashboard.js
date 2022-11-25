import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="furnishbay-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side border-r-2 border-slate-300">
                    <label htmlFor="furnishbay-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-64 text-base-content font-semibold">
                        <li><Link to="/dashboard/allusers">All users</Link></li>
                        <li><Link to="/dashboard/allsellers">All sellers</Link></li>
                        <li><Link to="/dashboard/reporteditems">Reported items</Link></li>
                        <li><Link to="/dashboard/myproducts">My products</Link></li>
                        <li><Link to="/dashboard/addproduct">Add a product</Link></li>
                        <li><Link to="/dashboard/myorder">My orders</Link></li>
                        <li><Link to="/dashboard/mywishlist">My wishlist</Link></li>
                    </ul>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;