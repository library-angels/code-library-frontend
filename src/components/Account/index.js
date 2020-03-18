import React from 'react';
import ProfilePic from '../ProfilePic';

import './account.css';
import BorrowingList from '../BorrowingList';
import WaitingList from '../WaitingList';
import HistoryList from '../HistoryList';

function Account() {
    return (
        <div className="profilepic">
            <ProfilePic />
            <BorrowingList title="Borrowing" />
            <WaitingList title="Waiting List" />
            <HistoryList title="History" />
        </div>
    );
}

export default Account;
