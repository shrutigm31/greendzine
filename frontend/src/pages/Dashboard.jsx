import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiBell,
  FiSettings,
  FiSearch,
  FiEdit,
  FiGrid,
  FiUsers,
  FiFolder,
  FiBattery,
  FiActivity,
  FiZap,
  FiTruck
} from "react-icons/fi";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
} from "chart.js";

import Avatar from "../assets/one.webp";
import WASP from "../assets/two.webp";
import SNAIL from "../assets/three.png";
import BIKE from "../assets/five.png";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [toggles, setToggles] = useState({
    follow: true,
    answer: false,
    mention: true,
    newLaunches: false,
    monthlyUpdates: false,
    newsletter: true,
    weeklyMails: true,
  });

  const location = useLocation();

  const toggleSwitch = (key) => {
    setToggles({ ...toggles, [key]: !toggles[key] });
  };

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Utilization (%)",
        data: [20, 45, 25, 60, 90, 70, 85],
        backgroundColor: "#ffffff",
        borderRadius: 3,
        barThickness: 8
      }
    ]
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        ticks: { color: "#fff", font: { size: 8 } },
        grid: { color: "rgba(255,255,255,0.1)" }
      }
    }
  };

  const products = [
    { img: WASP, name: "WASP", desc: "High efficiency electric model" },
    { img: SNAIL, name: "SNAIL", desc: "Compact urban mobility" },
    { img: BIKE, name: "BIKE", desc: "Smart eco-friendly ride" },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; font-family: "Segoe UI", sans-serif; }
        body { margin: 0; background: linear-gradient(180deg, #0b4dbb, #275ab0); color: #fff; overflow: hidden; }
        .dashboard { display: flex; height: 100vh; padding: 4px; gap: 4px; }
        .sidebar-box { width: 180px; padding: 10px; background: linear-gradient(180deg, #071a3d, #19377c); border-radius: 12px; }
        .logo-box { text-align: center; font-size: 16px; margin-bottom: 16px; font-weight: 600; }
        .nav-box { padding: 6px 8px; border-radius: 8px; margin-bottom: 3px; cursor: pointer; font-size: 12px; transition: all 0.3s ease; display: flex; align-items: center; gap: 4px; }
        .nav-box:hover { background: rgba(255,255,255,0.2); }
        .nav-box.active { background: rgba(255,255,255,0.12); }
        .account-title { margin-top: 12px; margin-bottom: 6px; font-size: 9px; opacity: 0.6; }
        .main-area { flex: 1; display: flex; flex-direction: column; gap: 8px; }
        .header-box { padding: 2px 2px; display: flex; justify-content: space-between; align-items: center; }
        .search-box { display: flex; align-items: center; background: #0c1f4d; padding: 2px 6px; border-radius: 10px; width: 120px; height: 24px; }
        .search-box input { background: none; border: none; outline: none; color: #fff; margin-left: 3px; width: 100%; font-size: 10px; }
        .content-area { flex: 1; display: flex; flex-direction: column; gap: 8px; }
        .profile-box { background: linear-gradient(135deg, #0b1f4d, #071a3d); border-radius: 12px; padding: 6px 8px; display: flex; justify-content: space-between; align-items: center; }
        .profile-left { display: flex; align-items: center; gap: 8px; }
        .tabs-box { display: flex; gap: 4px; }
        .tabs-box button { background: rgba(255,255,255,0.12); border: none; color: #fff; padding: 3px 6px; border-radius: 6px; font-size: 11px; display: flex; align-items: center; gap: 3px; cursor: pointer; transition: all 0.3s ease; }
        .tabs-box button:hover { background: #1677ff; }
        .tabs-box button.active { background: #1677ff; }
        .avatar-wrapper { position: relative; width: 32px; height: 32px; }
        .avatar-wrapper img { width: 100%; height: 100%; border-radius: 6px; }
        .edit-icon { position: absolute; bottom: -2px; right: -3px; background: #1f252d; padding: 2px; border-radius: 3px; font-size: 7px; cursor: pointer; }
        .info-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 6px; }
        .moptro-info-box, .utilization-box, .platform-box, .products-box { background: linear-gradient(135deg, #0b1f4d, #071a3d); border-radius: 12px; padding: 20px; }
        .moptro-info-box { display: flex; gap: 8px; align-items: center; }
        .battery-box { width: 140px; height: 140px; border-radius: 50%; background: radial-gradient(circle, #2be2b5, #0a6c5b); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;font-size: 100%; }
        .mini-box-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px; flex: 1; }
        .mini-box { background: rgba(255,255,255,0.08); padding: 15px; border-radius: 6px; font-size: 15px; display: flex; align-items: center; gap: 2px; }
        .mini-box svg { font-size: 14px; flex-shrink: 0; }
        .bottom-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 6px; }
        .platform-box strong { display: block; margin-bottom: 4px; font-size: 11px; }
        .setting-row { display: flex; justify-content: space-between; align-items: center; font-size: 9px; margin-top: 4px; }
        .toggle { width: 24px; height: 14px; border-radius: 14px; background: #1677ff; position: relative; cursor: pointer; }
        .toggle::after { content: ""; width: 10px; height: 10px; background: #fff; border-radius: 50%; position: absolute; top: 2px; right: 2px; transition: all 0.3s ease; }
        .toggle.off { background: rgba(255,255,255,0.2); }
        .toggle.off::after { right: auto; left: 2px; }
        footer { text-align: left; font-size: 15x; opacity: 0.5; padding: 2px 0; }
      `}</style>

      <div className="dashboard">
        <aside className="sidebar-box">
          <div className="logo-box">MOPTro</div>
          <div className={`nav-box ${location.pathname === "/" ? "active" : ""}`}><FiGrid /> Dashboard</div>
          <div className="nav-box"><FiFolder /> Tables</div>
          <div className="account-title">ACCOUNT PAGES</div>

          {/* CLICKABLE SIGN IN */}
          <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`nav-box ${location.pathname === "/signin" ? "active" : ""}`}><FiGrid /> Sign In</div>
          </Link>

          {/* CLICKABLE SIGN UP */}
          <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`nav-box ${location.pathname === "/signup" ? "active" : ""}`}><FiUsers /> Sign Up</div>
          </Link>
        </aside>

        <div className="main-area">
          <header className="header-box">
            <div>
              <small style={{ opacity: 0.7 }}>Pages / Dashboard</small>
              <h4 style={{ margin: 0, fontSize: 12 }}>Profile</h4>
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <div className="search-box"><FiSearch size={10} /><input placeholder="Type here..." /></div>
              <span style={{ fontSize: 10 }}>Sign In</span>
              <FiSettings size={14} style={{ cursor: "pointer" }} />
              <FiBell size={14} style={{ cursor: "pointer" }} />
            </div>
          </header>

          <main className="content-area">
            {/* PROFILE */}
            <div className="profile-box">
              <div className="profile-left">
                <div className="avatar-wrapper"><img src={Avatar} alt="Avatar" /><div className="edit-icon"><FiEdit /></div></div>
                <div><strong style={{ fontSize: 11 }}>Mark Johnson</strong><div style={{ fontSize: 8, opacity: 0.6 }}>mark@simmmple.com</div></div>
              </div>
              <div className="tabs-box">
                <button className={activeTab === "overview" ? "active" : ""} onClick={() => setActiveTab("overview")}><FiGrid /> Overview</button>
                <button className={activeTab === "teams" ? "active" : ""} onClick={() => setActiveTab("teams")}><FiUsers /> Teams</button>
                <button className={activeTab === "projects" ? "active" : ""} onClick={() => setActiveTab("projects")}><FiFolder /> Projects</button>
              </div>
            </div>

            {/* TOP GRID */}
            <div className="info-grid">
              <div className="moptro-info-box">
                <div>
                  <strong style={{ fontSize: 10 }}>MOPTro Informations</strong>
                  <div style={{ fontSize: 7, opacity: 0.6, marginBottom: 4 }}>Hello, Mark Johnson! Your MOPTro is ready.</div>
                  <div className="battery-box">
                    <h2 style={{ fontSize: 12 }}>68%</h2>
                    <span style={{ fontSize: 7 }}>Charging</span>
                    <small style={{ fontSize: 6 }}>0h 58 min</small>
                    <small style={{ fontSize: 5, opacity: 0.7 }}>Time to full charge</small>
                  </div>
                </div>

                <div className="mini-box-grid">
                  <div className="mini-box"><FiBattery /> <b>Battery:</b> 76%</div>
                  <div className="mini-box"><FiTruck /> <b>Efficiency:</b> +20%</div>
                  <div className="mini-box"><FiZap /> <b>Consumption:</b> 163W/km</div>
                  <div className="mini-box"><FiActivity /> <b>This Week:</b> 1.342km</div>
                </div>
              </div>

              <div className="utilization-box" style={{ padding: "6px" }}>
                <Bar data={data} options={options} />
                <h4 style={{ marginTop: 4, fontSize: 10 }}>Utilization</h4>
                <small style={{ display: "block", marginBottom: 4, fontSize: 7 }}><span style={{ color: "#2be2b5" }}>+23%</span> than last week</small>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 8 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}><FiBattery size={12} /><span style={{ fontWeight: "bold" }}>$32,984</span><small>Wallet</small></div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}><FiTruck size={12} /><span style={{ fontWeight: "bold" }}>35 Km</span><small>Range</small></div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}><FiZap size={12} /><span style={{ fontWeight: "bold" }}>$2,400</span><small>Consumables</small></div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}><FiActivity size={12} /><span style={{ fontWeight: "bold" }}>$5,000</span><small>Maintenance</small></div>
                </div>
              </div>
            </div>

            {/* BOTTOM GRID */}
            <div className="bottom-grid">
              <div className="platform-box">
                <strong>Platform Settings</strong>
                <div style={{ fontSize: 7, opacity: 0.5, marginTop: 4 }}>ACCOUNT</div>
                {["follow", "answer", "mention", "newLaunches", "monthlyUpdates", "newsletter", "weeklyMails"].map((t) => (
                  <div className="setting-row" key={t}>
                    {t}
                    <div className={`toggle ${toggles[t] ? "" : "off"}`} onClick={() => toggleSwitch(t)} />
                  </div>
                ))}
              </div>

              <div className="products-box">
                <strong>Products</strong>
                <div style={{ fontSize: 6, opacity: 0.6 }}>Architects design houses</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginTop: "6px" }}>
                  {products.map(item => (
                    <div key={item.name} style={{ background: "rgba(255,255,255,0.08)", borderRadius: "8px", padding: "6px", textAlign: "center" }}>
                      <img src={item.img} alt={item.name} style={{ width: "60%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: "6px", marginBottom: "4px" }} />
                      <div style={{ fontSize: 8, fontWeight: 600 }}>{item.name}</div>
                      <div style={{ fontSize: 6, opacity: 0.6 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <footer>© 2025, Greendzine Technologies Pvt Ltd</footer>
          </main>
        </div>
      </div>
    </>
  );
}
