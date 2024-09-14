import React from 'react'
import UserContext from '../context/userContext';


function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const {setUser} = React.useContext(UserContext);

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username, password});
    };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login