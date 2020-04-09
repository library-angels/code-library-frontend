import React from 'react';
import Carousel from '../Carousel';

function HistoryList(props) {
    return (
        <div>
            <Carousel title={props.title} book={props.book} />
        </div>
    );
}

export default HistoryList;