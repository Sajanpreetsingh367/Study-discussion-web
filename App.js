import React, { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [signupData, setSignupData] = useState({ username: "", email: "", password: "", mobile: "", pin: "" });
  const [loginData, setLoginData] = useState({ username: "", email: "", password: "", mobile: "", pin: "" });
  const [selectedExam, setSelectedExam] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    minHeight: "100vh",
  };

  const inputStyle = {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
    border: "1px solid #ccc",
  };

  const buttonStyle = (bg) => ({
    backgroundColor: bg,
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    cursor: bg === "gray" ? "not-allowed" : "pointer",
  });

  const examBoxStyle = (selected) => ({
    padding: 15,
    borderRadius: 10,
    margin: 8,
    width: "100%",
    textAlign: "center",
    border: "1px solid #ccc",
    backgroundColor: selected ? "#FF4500" : "#fff",
    cursor: "pointer",
  });

  const menuBtnStyle = {
    padding: 15,
    borderRadius: 8,
    margin: 5,
    width: "80%",
    textAlign: "center",
    border: "1px solid #ccc",
    cursor: "pointer",
  };

  // ----------------- WELCOME SCREEN -----------------
  if (screen === "welcome") {
    return (
      <div style={{ ...containerStyle, backgroundColor: "#90EE90" }}>
        <img
          src="https://i.postimg.cc/Pf08JGn1/Screenshot-2025-10-05-17-33-28-667-edit-com-miui-gallery.jpg"
          alt="logo"
          style={{ width: 120, height: 120, borderRadius: "50%", marginBottom: 20 }}
        />
        <h2>Welcome to Study Discussion Club</h2>
        <p>This App is Developed by Sajan</p>
        <div style={buttonStyle("#007AFF")} onClick={() => setScreen("signup")}>Next</div>
      </div>
    );
  }

  // ----------------- SIGNUP SCREEN -----------------
  if (screen === "signup") {
    const isFormFilled = Object.values(signupData).every((val) => val.trim() !== "");
    return (
      <div style={{ ...containerStyle, backgroundColor: "#89CFF0", maxWidth: 400, margin: "0 auto" }}>
        <h2>Signup</h2>
        <input placeholder="Username" style={inputStyle} value={signupData.username} onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} />
        <input placeholder="Email" style={inputStyle} value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
        <input type="password" placeholder="Password" style={inputStyle} value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
        <input placeholder="Mobile No" style={inputStyle} value={signupData.mobile} onChange={(e) => setSignupData({ ...signupData, mobile: e.target.value })} />
        <input type="password" placeholder="Set Security Pin" style={inputStyle} value={signupData.pin} onChange={(e) => setSignupData({ ...signupData, pin: e.target.value })} />
        <div style={buttonStyle(isFormFilled ? "#007AFF" : "gray")} onClick={() => isFormFilled && setScreen("examlist")}>Signup</div>
        <p style={{ color: "#007AFF", cursor: "pointer" }} onClick={() => setScreen("login")}>Already have an account?</p>
      </div>
    );
  }

  // ----------------- LOGIN SCREEN -----------------
  if (screen === "login") {
    return (
      <div style={{ ...containerStyle, backgroundColor: "#D3D3D3", maxWidth: 400, margin: "0 auto" }}>
        <p style={{ cursor: "pointer", fontSize: 18 }} onClick={() => setScreen("signup")}>🔙 Back</p>
        <h2>Login</h2>
        <input placeholder="Username" style={inputStyle} value={loginData.username} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />
        <input placeholder="Email" style={inputStyle} value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
        <input type="password" placeholder="Password" style={inputStyle} value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
        <input placeholder="Mobile No" style={inputStyle} value={loginData.mobile} onChange={(e) => setLoginData({ ...loginData, mobile: e.target.value })} />
        <input type="password" placeholder="Security Pin" style={inputStyle} value={loginData.pin} onChange={(e) => setLoginData({ ...loginData, pin: e.target.value })} />
        <div style={buttonStyle("#007AFF")} onClick={() => setScreen("examlist")}>Login</div>
      </div>
    );
  }

  // ----------------- EXAM LIST SCREEN -----------------
  if (screen === "examlist") {
    const exams = ["UPSC", "NEET", "JEE", "JUDICIARY", "NDA", "BOARD EXAM", "MATRIC CLASSES"];
    return (
      <div style={{ ...containerStyle, backgroundColor: "#FF7F7F", maxWidth: 400, margin: "0 auto" }}>
        <p style={{ cursor: "pointer", fontSize: 18 }} onClick={() => setScreen("login")}>🔙 Back</p>
        <h2>Exam List</h2>
        {exams.map((exam) => (
          <div key={exam} style={examBoxStyle(selectedExam === exam)} onClick={() => setSelectedExam(exam)}>{exam}</div>
        ))}
        <div style={buttonStyle(selectedExam ? "#007AFF" : "gray")} onClick={() => selectedExam && setScreen("payment")}>Next</div>
      </div>
    );
  }

  // ----------------- PAYMENT SCREEN -----------------
  if (screen === "payment") {
    const handlePayment = () => {
      alert("Payment Functionality Placeholder"); 
      setScreen("home");
    };
    return (
      <div style={{ ...containerStyle, backgroundColor: "#fff", maxWidth: 400, margin: "0 auto" }}>
        <h2>Payment</h2>
        <img src="https://via.placeholder.com/200" alt="Payment" style={{ width: 200, height: 200, marginBottom: 20 }} />
        <div style={buttonStyle("#007AFF")} onClick={handlePayment}>Pay Now ₹17</div>
      </div>
    );
  }

  // ----------------- HOME SCREEN -----------------
  if (screen === "home") {
    const menu = ["📌 Current Affairs", "📝 Practice Questions", "🎤 Interview Practice", "📚 Quick Books Revise", "📖 UPSC Mind Maps", "🔒 Hidden Topics", "💬 Discussion", "🏆 Contest"];
    return (
      <div style={{ ...containerStyle, backgroundColor: "#f0f0f0", maxWidth: 400, margin: "0 auto" }}>
        <h2>Home</h2>
        {menu.map((item) => (
          <div key={item} style={menuBtnStyle}>{item}</div>
        ))}
      </div>
    );
  }

  return null;
      }
