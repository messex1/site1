// components/ContactUs.js
const ContactUs = () => {
    return (
      <section>
        <h2>Contact Us</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Message:</label>
          <textarea name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  };
  
  export default ContactUs;
  