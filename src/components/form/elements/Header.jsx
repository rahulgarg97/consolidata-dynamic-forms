import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return <div className="form-group form-header">
        <h2>{props.title}</h2>
    </div>
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;