import React from 'react';
import PropTypes from 'prop-types';

export const InputContainer = ({ children }) => {
    return (
        <div className="row">
            {children}
        </div>
    )
}

InputContainer.propTypes = {
    children: PropTypes.array.isRequired
}
