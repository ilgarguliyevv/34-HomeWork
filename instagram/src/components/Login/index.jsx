// import React from "react";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="hero">
//       <div>
//         <h2 className="name">Instagram</h2>
//       </div>
//       <div>
//         <input
//           type="text"
//           className="input-login"
//           placeholder="Telefon numarası, kullanıcı adı veya e-posta"
//         />
//       </div>
//       <div>
//         <input type="text" className="input-login" placeholder="Şifre" />
//       </div>
//       <div>
//         <button className="loginuser" onClick={() => navigate("/")}>
//           Giriş yap
//         </button>
//       </div>
//       <div className="xett">
//         <div className="row-1"></div>
//         <div className="row-state">YA DA</div>
//         <div className="row-1"></div>
//       </div>
//       <div className="fb-state">
//         <a>Facebook ile Giriş Yap</a>
//       </div>
//       <div className="şifre">
//         <span>Şifreni mi unuttun?</span>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:3000/api/users", {
  //       username,
  //       password,
  //     });
  //     if (response.data.success) {
  //       navigate("/");
  //     }
  //     console.log("Login successful:", response.data);
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };

  //   try {
  //     const response = await axios.post("http://localhost:3001/api/users", {
  //       username,
  //       password,
  //     });

  //     if (response.data.success) {
  //       // Başarılı giriş durumunda anasayfaya yönlendirme
  //       navigate("/");
  //     } else {
  //       setError(response.data.message);
  //     }
  //   } catch (error) {
  //     setError("Giriş işlemi sırasında bir hata oluştu.");
  //   }
  // };

  return (
    <div className="hero">
      <div>
        <h2 className="name">Instagram</h2>
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            className="input-login"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            className="input-login"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="loginuser" type="submit">
            Giriş Yap
          </button>
        </div>
      </form>
      {/* Diğer bileşenler */}
    </div>
  );
};

export default Login;
