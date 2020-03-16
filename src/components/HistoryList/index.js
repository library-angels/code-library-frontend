import React from 'react';
import Carousel from '../Carousel';

function HistoryList(props) {
    return (
        <div className="profilepic">
            <Carousel title={props.title} />
        </div>
    );
}

export default HistoryList;
