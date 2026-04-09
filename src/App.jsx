import neckPain from './assets/neck-pain.webp'
import neckPainSquare from './assets/neck-pain-square.webp'

const services = [
  'Chiropractic Care',
  'Personal Injury Cases',
  'Workers’ Compensation',
  'Neck Pain',
  'Back Pain',
  'Whiplash',
  'Sciatica',
  'Herniated Disc',
]

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <p className="eyebrow">Las Vegas Chiropractic Care</p>
            <h1 className="brand">Advanced Neck and Back Care</h1>
          </div>

          <nav className="nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="call-button" href="tel:7026587777">
            Call 702-658-7777
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="pill">Chiropractic • Personal Injury • Workers’ Compensation</div>
              <h2>Relief starts here.</h2>
              <p className="hero-copy">
                Specialized chiropractic care for neck pain, back pain, and injury recovery. We focus on helping patients
                feel better, move better, and get back to daily life with confidence.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#contact">
                  Request Appointment
                </a>
                <a className="secondary-button" href="tel:7026587777">
                  Call Now
                </a>
              </div>
            </div>

            <div className="hero-images">
              <figure className="image-card tall">
                <img src={neckPain} alt="Cervical spine and neck pain illustration" />
              </figure>
              <figure className="image-card square">
                <img src={neckPainSquare} alt="Close-up illustration of neck pain area" />
              </figure>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container">
            <p className="section-label">Our Services</p>
            <h3 className="section-title">Focused care for pain, injury, and recovery</h3>
            <div className="service-grid">
              {services.map((service) => (
                <div className="service-card" key={service}>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-grid">
            <div>
              <p className="section-label">About Us</p>
              <h3 className="section-title">Patient-centered care with a practical, professional approach</h3>
              <p className="body-copy">
                Advanced Neck and Back Care provides chiropractic treatment focused on pain relief, injury recovery, and
                long-term wellness. We work with both personal injury and workers’ compensation cases and aim to make
                the process clear and supportive for every patient.
              </p>
            </div>
            <div className="info-card">
              <h4>Office Hours</h4>
              <p>Monday–Friday: 9:00 AM – 6:00 PM</p>
              <p>Lunch: 12:00 PM – 2:00 PM</p>
              <p>Saturday: By appointment only</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="section-label">Contact</p>
              <h3 className="section-title">Request an appointment</h3>
              <div className="contact-details">
                <p><strong>Phone:</strong> <a href="tel:7026587777">702-658-7777</a></p>
                <p><strong>Email:</strong> <a href="mailto:advneckandback@yahoo.com">advneckandback@yahoo.com</a></p>
                <p><strong>Address:</strong> 7390 West Sahara Ave, Suite #232, Las Vegas, NV 89117</p>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/advneckandback@yahoo.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New appointment request from Advanced Neck and Back Care website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://advancedneckandbackcare-puqhh13gc.vercel.app" />

              <label>
                Full Name
                <input type="text" name="name" required />
              </label>

              <label>
                Phone
                <input type="tel" name="phone" required />
              </label>

              <label>
                Email
                <input type="email" name="email" required />
              </label>

              <label>
                Message
                <textarea name="message" rows="5" required></textarea>
              </label>

              <button type="submit" className="primary-button full-width">
                Send Request
              </button>
              <p className="form-note">After the first submission, FormSubmit will send a one-time activation email to confirm the form.</p>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
