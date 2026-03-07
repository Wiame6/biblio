export default function Contact(){

return(
    <main className="page">
      <h1>Contact the University Library</h1>

      <p>
        If you have questions about borrowing books, library resources,
        or access to the system, you can contact the library staff using
        the information below.
      </p>

      <h2>Library Information</h2>

      <p>
        <strong>University Library</strong><br />
        University Campus<br />
        123 Academic Street<br />
        City, Country
      </p>

      <p>
        <strong>Email:</strong> library@university.edu<br />
        <strong>Phone:</strong> +123 456 789
      </p>

      <h2>Opening Hours</h2>

      <p>
        Monday – Friday: 8:00 AM – 8:00 PM <br />
        Saturday: 9:00 AM – 4:00 PM <br />
        Sunday: Closed
      </p>

      <h2>Contact Form</h2>

      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Your name" />

        <label>Email</label>
        <input type="email" placeholder="Your email" />

        <label>Message</label>
        <textarea placeholder="Write your message here"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </main>

)
}