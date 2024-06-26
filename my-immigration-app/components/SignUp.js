// components/SignUp.js
const SignUp = () => {
    return (
      <section>
        <h2>Sign Up</h2>
        <form>
          <label>Choose an Immigration Agency:</label>
          <select name="agency">
            <option value="myfuturecanada">My Future Canada</option>
            <option value="yr">YR</option>
          </select>
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Password:</label>
          <input type="password" name="password" required />
          <button type="submit">Sign Up</button>
        </form>
      </section>
    );
  };
  
  export default SignUp;
  