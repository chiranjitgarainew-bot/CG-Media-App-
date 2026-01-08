<style>
/* ===== Auth UI (From login.html) ===== */
.auth-container {
  max-width: 420px;
  margin: 40px auto;
  background: #ffffff;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 25px 50px rgba(0,0,0,.2);
  font-family: system-ui, sans-serif;
}

.auth-container h2 {
  text-align: center;
  font-weight: 700;
  margin-bottom: 16px;
}

.auth-input {
  width: 100%;
  padding: 14px;
  margin-bottom: 12px;
  border-radius: 12px;
  border: 1px solid #ddd;
  font-size: 15px;
}

.auth-btn {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(to right, #667eea, #a770ef);
  color: #fff;
  cursor: pointer;
}

.auth-link {
  text-align: center;
  font-size: 14px;
  margin-top: 12px;
}

.auth-link span {
  color: #7c3aed;
  font-weight: 600;
  cursor: pointer;
}
</style>

<div class="auth-container">

<h2>🔐 Login</h2>

<input id="email" class="auth-input" placeholder="Email" />
<input id="password" type="password" class="auth-input" placeholder="Password" />

<button class="auth-btn" onclick="login()">Login</button>

<div class="auth-link">
  New user? <span onclick="showSignup()">Create account</span>
</div>

<hr style="margin:20px 0">

<h2>📝 Signup</h2>

<input id="name" class="auth-input" placeholder="Full Name" />
<input id="signupEmail" class="auth-input" placeholder="Email" />
<input id="signupPassword" type="password" class="auth-input" placeholder="Password" />

<button class="auth-btn" onclick="signup()">Signup</button>

<p id="msg"></p>

</div>