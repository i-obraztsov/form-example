import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Input = forwardRef(({
    type = 'text',
    name = '',
    id = '',
    onChange = () => {},
    ...rest
}, ref) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        onChange(event);
        setValue(event.target.value)
    }

    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            id={id}
            ref={ref}
            { ...rest }
        />
    )
});

Input.displayName = 'Input';

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
}
