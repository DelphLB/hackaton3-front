import React from 'react';

const ConnectPage = ({ user }) => {
    return <div>{`Hello {user.firstname} {user.lastname}.`}</div>;
};

export default ConnectPage;
