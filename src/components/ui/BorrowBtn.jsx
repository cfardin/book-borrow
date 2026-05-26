"use client"
import React from 'react';
import { toast } from 'react-toastify';

const BorrowBtn = () => {
    return (
        <div>
            <button onClick={() => toast("Added to Borrow List")} className="btn btn-neutral mr-4">Borrow This Book</button>
        </div>
    );
};

export default BorrowBtn;