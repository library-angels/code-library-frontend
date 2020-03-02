import React from 'react';
import { useParams } from 'react-router-dom';

function Category() {
    const { department } = useParams();
    return <div>Category {department}</div>;
}

export default Category;
