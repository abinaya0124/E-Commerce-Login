// import React, { useContext, useState } from "react";
// import { UserContext } from "./Context/AppContext";
// import axios from "axios";

// const Login = () => {
//   const { username, setUsername } = useContext(UserContext);
//   const [password, setPassword] = useState("");
//   const handleSubmit = async () => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("https://dummyjson.com/auth/login", {
//         username,
//         password,
//       });
//       setUsername(res.data.username);
//       console.log(res.data);
//       // localStorage.setItem("authToken", res.data.token);
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button>Log in</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context/AppContext";

const Login = () => {
  const { username, setUsername, setToken } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      console.log("Login Success", res.data);
      setUsername(res.data.username);
      setToken(res.data.token)
      localStorage.setItem("authToken", res.data.token);
      console.log(res.data.token)
      navigate("/");
    } catch (error) {
      console.log("Login Error", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border-2"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border-2"
        />
        <button type="submit" className="bg-orange-500 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
