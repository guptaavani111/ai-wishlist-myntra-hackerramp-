// src/components/Recommendations.js
import React from 'react';

const Recommendations = ({ items }) => {
    return (
        <div className="recommendations">
            {items.map((item, index) => (
                <div key={index} className="item">
                    <img src={item.imageUrl} alt={item.name} />
                    <div>{item.name}</div>
                </div>
            ))}
        </div>
    );
};

export default Recommendations;
