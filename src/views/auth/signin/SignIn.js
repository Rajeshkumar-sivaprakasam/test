import React from "react";
import { Lock } from "@mui/icons-material";
import { Checkbox, TextField, Button } from "@mui/material";
import "./signin.css";
function SignIn() {
  return (
    <div className="contain-2">
      <div style={{ width: "100px" }}>
        <Lock
          style={{
            color: "white",
            background: "#10B981",
            borderRadius: "40px",
            padding: "10px",
            width: "44px",
            height: "44px",
          }}
        />
        <h3 style={{ marginTop: "2px" }}>Sign in</h3>
      </div>
      <form style={{ maxWidth: "400px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            style={{ margin: "10px" }}
            required
            id="outlined-required"
            label="Email Address"
          />
          <TextField
            style={{ margin: "10px" }}
            required
            id="outlined-required"
            label="Password"
          />
        </div>
        <div style={{ display: "flex" }}>
          <Checkbox />
          <p>Remember Me</p>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <Button
            style={{
              background: "#3832A0",
              color: "white",
              padding: "9px 0px",
            }}
          >
            Sign In
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <a style={{ marginRight: "20px" }} href="#">
              Forgot Password?
            </a>
            <a href="#">Don't have an account? Sign Up</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
