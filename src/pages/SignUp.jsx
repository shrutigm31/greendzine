import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/login-bg.png";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // You can add validation / API call here later
    navigate("/dashboard");
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        body {
          margin: 0;
          background: #020b2a;
        }

        .page {
          width: 100vw;
          height: 100vh;
          display: flex;
        }

        .left {
          width: 42%;
          height: 100%;
          background-image:
            linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),
            url(${bgImage});
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand {
          text-align: center;
          color: #fff;
          letter-spacing: 2px;
        }

        .brand span {
          font-size: 12px;
          opacity: 0.85;
        }

        .brand h1 {
          margin-top: 10px;
          font-size: 28px;
          font-weight: 500;
        }

        .right {
          width: 57%;
          height: 100%;
          background: linear-gradient(180deg, #020b2a 0%, #081d4a 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff;
          margin-top: 40px;
        }

        .content h2 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 2px;
        }

        .content p {
          font-size: 10px;
          opacity: 0.65;
          margin-bottom: 15px;
          text-align: center;
          line-height: 1.2;
        }

        .card {
          width: 260px;
          background: #2b3356;
          padding: 16px;
          border: 3px solid rgba(255,255,255,0.35);
        }

        .register-text {
          font-size: 12px;
          opacity: 0.85;
          text-align: center;
          margin-bottom: 10px;
        }

        .socials {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-bottom: 10px;
        }

        .social-btn {
          width: 52px;
          height: 34px;
          border-radius: 8px;
          border: 3px solid rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #fff;
        }

        .divider {
          font-size: 11px;
          opacity: 0.6;
          margin-bottom: 10px;
          text-align: center;
        }

        label {
          display: block;
          font-size: 11px;
          margin-bottom: 1px;
          opacity: 0.85;
        }

        input {
          width: 100%;
          height: 30px;
          border-radius: 80px;
          border: 3px solid rgba(255,255,255,0.35);
          background: transparent;
          padding: 0 10px;
          color: #fff;
          margin-bottom: 6px;
          font-size: 12px;
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          margin-bottom: 18px;
        }

        .switch {
          position: relative;
          width: 38px;
          height: 20px;
        }

        .switch input {
          opacity: 0;
        }

        .slider {
          position: absolute;
          inset: 0;
          background-color: #1f2a55;
          transition: .4s;
          border-radius: 20px;
        }

        .slider:before {
          content: "";
          position: absolute;
          height: 14px;
          width: 14px;
          left: 3px;
          bottom: 3px;
          background-color: #fff;
          transition: .4s;
          border-radius: 50%;
        }

        .switch input:checked + .slider {
          background-color: #1677ff;
        }

        .switch input:checked + .slider:before {
          transform: translateX(18px);
        }

        .signup-btn {
          width: 100%;
          height: 32px;
          background: #1677ff;
          border: none;
          border-radius: 8px;
          color: #fff;
          font-size: 12px;
          cursor: pointer;
        }

        .signin {
          margin-top: 10px;
          font-size: 11px;
          opacity: 0.7;
          text-align: center;
        }

        .signin span {
          color: #6ea8ff;
          cursor: pointer;
        }

        /* FOOTER — EXACT XD POSITION */
        .footer {
          position: absolute;
          bottom: 40px;
          left: 0%;
          width: 100%;
          text-align: center;
          font-size: 11px;
          opacity: 0.6;
        }

        .footer-links {
          margin-top: 6px;
          display: flex;
          justify-content: center;
          gap: 14px;
        }

        .footer-links a {
          color: #9fb7ff;
          text-decoration: none;
        }
      `}</style>

      <div className="page">
        <div className="left">
          <div className="brand">
            <span>INSPIRED BY THE FUTURE:</span>
            <h1>MOPTro</h1>
          </div>
        </div>

        <div className="right">
          <div className="content">
            <h2>Welcome!</h2>
            <p>
              Use these awesome forms to login or create new
              <br />
              account in your project for free.
            </p>

            <div className="card">
              <div className="register-text">Register<br />with</div>

              <div className="socials">
                <div className="social-btn">f</div>
                <div className="social-btn"></div>
                <div className="social-btn">G</div>
              </div>

              <div className="divider">or</div>

              <label>Name</label>
              <input placeholder="Your full name" />

              <label>Email</label>
              <input placeholder="Your email address" />

              <label>Password</label>
              <input type="password" placeholder="Your password" />

              <div className="remember">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
                Remember me
              </div>

              <button className="signup-btn" onClick={handleSignUp}>
                SIGN UP
              </button>

              <div className="signin">
                Already have an account?{" "}
                <span onClick={() => navigate("/signin")}>Sign in</span>
              </div>
            </div>
          </div>

          <div className="footer">
            © 2025, Greendzine Technologies Pvt Ltd
            <div className="footer-links">
              <a href="#">Marketplace</a>
              <a href="#">Blog</a>
              <a href="#">License</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
