import React from 'react';
import PropTypes from 'prop-types';

export const Form = ({
    action = '#',
    method = 'post',
    onSubmit = () => {},
    children,
}) => {
    return (
        <form
            action={action}
            method={method}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
}

Form.propTypes = {
    action: PropTypes.string,
    method: PropTypes.string,
    onSubmit: PropTypes.func,
    children: PropTypes.array.isRequired
}
