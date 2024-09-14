import React from 'react'
import UserContext from '../context/userContext';

function Profile() {

  const { user } = React.useContext(UserContext);

  if (!user) return <div>Please Login.</div>

  return (
    <div>
        Welcome User: {user.username}
    </div>
  );
}

export default Profile