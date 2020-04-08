import React from 'react';
import ProfilePic from '../ProfilePic';

import './account.css';
import data from '../../LibTestApi/LibTestApiJson.json';
import BorrowingList from '../BorrowingList';
import WaitingList from '../WaitingList';
import HistoryList from '../HistoryList';
import RequestExtention from '../RequestExtention';
import useToggle from '../../hooks/toggle';
import useBookDetails from '../../hooks/bookDetails';

function Account() {
    const borrowing = data.slice(0, 5);
    const waitinglist = data.slice(5, 8);
    const historylist = data.slice(8, 20);
    const { modal } = useToggle();
    const { bookDetails } = useBookDetails();

    return (
        <div className="profilepic">
            <ProfilePic />
            <BorrowingList title="Borrowing" book={borrowing} />
            <WaitingList title="Waiting List" book={waitinglist} />
            <HistoryList title="History" book={historylist} />
            {modal.getState.show ? (
                <RequestExtention id={bookDetails.getState.showID} />
            ) : null}
        </div>
    );
}

export default Account;
