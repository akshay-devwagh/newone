import React, { useState } from "react";

interface LoginFormProps {
  name: string;
  password: string;
}

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState<LoginFormProps[]>([]);

  const handleclick = () => {
    setLoginData((ring) => [...ring, { name, password }]); 
  };
  const handlereset = () => {
    setName("");
    setPassword("");
    setLoginData([]);
  };

  return (
    <div>
      <h1>Login form</h1>
      <div>
        <h2> Username : {name}</h2>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <h2>Password : {password}</h2>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br></br><button onClick={handleclick}>submit</button>
        <button onClick={handlereset}>reset</button>

        <div>
          <p>{JSON.stringify(loginData)}</p>
        </div>
      </div>
    </div>
  );
}
