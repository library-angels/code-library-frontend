import React from 'react';
import Carousel from '../Carousel';

function BorrowingList(props) {
    return (
        <div >
            <Carousel title={props.title} />
        </div>
    );
}

export default BorrowingList;
