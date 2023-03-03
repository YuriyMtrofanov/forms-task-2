import React from "react";
import PropTypes from "prop-types";

const TextField = ({
    label,
    type,
    name,
    value,
    onChange,
    error
}) => {
    return (
        <div className="row mb-3">
            <label htmlFor={name}> { label } </label>
            <div className="input-group has-validation">
                <input
                    type = {type}
                    id = {name}
                    name = {name}
                    value = {value}
                    onChange = {onChange}
                />
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};

TextField.propTupes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
