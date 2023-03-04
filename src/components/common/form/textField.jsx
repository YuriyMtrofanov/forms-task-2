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
    // Для подсвечиввания ошибки в поле ввода добавляем className="form-control is-invalid",
    // однако данный класc всегда подсвечивает поле красным. Соответственно требуется при
    // наличии ошибки динамически добавлять "is-invalid" в className. Для этого создадим функцию
    const changeClassName = () => {
        const className = "form-control" + (error ? " is-invalid" : "")
        return className;
    };

    return (
        <div className="mb-4">
            <label htmlFor={name}> { label } </label>
            <div className="input-group has-validation">
                <input
                    className={changeClassName()}
                    type = {type}
                    id = {name}
                    name = {name}
                    value = {value}
                    onChange = {onChange}
                />
                {error && <div className = "invalid-feedback">{error}</div>}
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
