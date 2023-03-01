import React from "react";
import PropTypes from "prop-types";

const TextField = ({ name }) => {
    return (
        <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">{name}</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id={name}/>
            </div>
        </div>
    );
};

TextField.propTupes = {
    name: PropTypes.string
};

export default TextField;
