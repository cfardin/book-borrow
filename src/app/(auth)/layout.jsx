import Navbar from '@/components/Navbar';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AuthLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayout;