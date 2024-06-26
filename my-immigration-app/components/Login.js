// components/Login.js
const Login = () => {
    return (
      <section>
        <h2>Login</h2>
        <form>
          <label>Username:</label>
          <input type="text" name="username" required />
          <label>Password:</label>
          <input type="password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </section>
    );
  };
  
  export default Login;
  