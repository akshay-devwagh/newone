import React, { useState } from "react";

interface RegistrationProps {
  name: string;
  email: string;
  password: string;
    Confirm: string;
}

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirm, setConfirm] = useState("");
  const [registrationData, setRegistrationData] = useState<RegistrationProps[]>(
    []
  );

  const handlesave = () => {
    setRegistrationData((prevData) => [...prevData, { name, email, password , Confirm}]);
    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");
  };
  const handleclear = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");
    setRegistrationData([]);
  };
  return (
    <div>
      <h1>Registration form</h1>
      <div>
        <h2>Name : {name}</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <h2>Email : {email}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
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
        <h2>Confirm Password : {Confirm}</h2>
        <input
          type="password"
          placeholder="Confirm Password"
          value={Confirm}
          onChange={(event) => {
            setConfirm(event.target.value);
          }}
        />
        <br></br>
        <button onClick={handlesave}>Save</button>
        <button onClick={handleclear}>Clear</button>
        <div>
          <p>{JSON.stringify(registrationData)}</p>
        </div>
      </div>
    </div>
  );
}
