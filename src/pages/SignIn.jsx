import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/login-bg.png";

export default function SignIn() {
  const nav = useNavigate();

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Segoe UI", Arial, sans-serif;
        }

        body {
          margin: 0;
          background: radial-gradient(circle at top, #0b1440 0%, #020b2a 70%);
          color: #fff;
        }

        .auth-wrapper {
          display: flex;
          width: 100%;
          height: 100vh;
        }

        /* LEFT IMAGE */
        .auth-left {
          width: 50%;
          height: 100vh;
          background-image:
            linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),
            url(${bgImage});
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .left-overlay {
          position: absolute;
          top: 55%;
          left: 54%;
          transform: translate(-50%, -50%);
          text-align: center;
          letter-spacing: 3px;
        }

        .left-overlay span {
          font-size: 12px;
          opacity: 0.9;
        }

        .left-overlay h2 {
          margin-top: 10px;
          font-size: 28px;
          font-weight: 600;
        }

        /* RIGHT PANEL */
        .auth-right {
          width: 65%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle at top, #0b1440 0%, #020b2a 70%);
        }

        h1 {
          margin-bottom: 6px;
          font-size: 26px;
        }

        p {
          font-size: 13px;
          opacity: 0.7;
          margin-bottom: 28px;
        }

        label {
          font-size: 12px;
          opacity: 0.8;
        }

        /* THICK INPUT BORDER */
        input {
          width: 100%;
          padding: 14px 16px;
          margin: 6px 0 18px;
          border-radius: 22px;
          border: 3px solid rgba(255,255,255,0.35);
          background: transparent;
          color: #fff;
          outline: none;
        }

        input::placeholder {
          color: #cfd8ff;
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          margin-bottom: 28px;
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

        button {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          border: none;
          background: #1677ff;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
        }

        .bottom-text {
          margin-top: 14px;
          font-size: 13px;
          opacity: 0.7;
          text-align: center;
        }

        .bottom-text span {
          color: #5fa3ff;
          cursor: pointer;
        }

        .footer {
          position: absolute;
          bottom: 40px;
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

        @media (max-width: 900px) {
          .auth-wrapper {
            flex-direction: column;
          }

          .auth-left {
            width: 100%;
            height: 300px;
          }

          .auth-right {
            width: 100%;
            padding: 40px 20px;
          }

          .footer {
            position: static;
            margin-top: 30px;
          }
        }
      `}</style>

      <div className="auth-wrapper">
        <div className="auth-left">
          <div className="left-overlay">
            <span>INSPIRED BY THE FUTURE:</span>
            <h2>MOPTro</h2>
          </div>
        </div>

        <div className="auth-right">
          <div className="form-wrapper">
            <h1>Nice to see you!</h1>
            <p>Enter your email and password to sign in</p>

            <label>Email</label>
            <input type="email" placeholder="Your email address" />

            <label>Password</label>
            <input type="password" placeholder="Your password" />

            <div className="remember">
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
              Remember me
            </div>

            <button onClick={() => nav("/dashboard")}>SIGN IN</button>

            <div className="bottom-text">
              Don’t have an account?{" "}
              <span onClick={() => nav("/signup")}>Sign up</span>
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
