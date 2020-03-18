import React from 'react';
import Carousel from '../Carousel';

function BorrowingList(props) {
    return (
        <div className="profilepic">
            <Carousel title={props.title} />
        </div>
    );
}

export default BorrowingList;
