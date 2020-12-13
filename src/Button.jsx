import React from "react";
import PropTypes from 'prop-types';

export const Button = ({
    type = 'button',
    className = '',
    onClick = () => {},
    children,
    ...rest
}) => {
    return (
        <button
         className={className}
            onClick={onClick}
            type={type}
            {...rest}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
}
