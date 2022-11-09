// Pamiętaj aby na końcu pliku wyeksportować komponent jako domyślny export
// np. export default User
import React from "react";
import PropTypes from "prop-types";

const User = ({firstName, lastName, onClick, age}) => {
    return (
        <>
            <h1>Cześć {firstName} {lastName}</h1>
            {age && <div>Masz {age} lat</div>}
            <button onClick={onClick}>Start</button>
        </>
    )
}

User.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default User;
