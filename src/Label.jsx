import React from 'react';
import PropTypes from 'prop-types';

export const Label = ({ forId = '', children}) => {
    return (
        <label htmlFor={forId || null}>
            { children }
        </label>
    )
}

Label.propTypes = {
    forId: PropTypes.string,
    children: PropTypes.string.isRequired
}
