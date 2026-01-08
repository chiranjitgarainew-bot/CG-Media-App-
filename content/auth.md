<div id="auth-wrapper">

  <div id="messageBoxSection">

    <!-- LOGIN -->
    <div class="auth-page active" id="loginPage">

      <h2>🔐 Login</h2>

      <input id="loginEmail" class="auth-input" placeholder="Email" />
      <input id="loginPassword" type="password" class="auth-input" placeholder="Password" />

      <button class="auth-btn" onclick="login()">Login</button>

      <div class="auth-link">
        New user?
        <span onclick="showSignup()">Create account</span>
      </div>

    </div>

    <!-- SIGNUP -->
    <div class="auth-page" id="signupPage">

      <h2>📝 Signup</h2>

      <input id="signupName" class="auth-input" placeholder="Full Name" />
      <input id="signupEmail" class="auth-input" placeholder="Email" />
      <input id="signupPassword" type="password" class="auth-input" placeholder="Password" />

      <button class="auth-btn" onclick="signup()">Signup</button>

      <div class="auth-link">
        Already have account?
        <span onclick="showLogin()">Login</span>
      </div>

    </div>

    <p id="msg"></p>

  </div>
</div>