import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ title = 'Title' }) => {
    return (
        <h1 className="title">{title}</h1>
    )
}

Title.propTypes = {
    title: PropTypes.string
}
