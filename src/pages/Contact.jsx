import { useState } from "react";

//feikki formi ja sen toiminto
const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // perusprintti vaan toiminnoksi
    console.log("Form submitted:", formData);
    // Reset 
    setFormData({ name: "", email: "", message: "" });
  };

  //BootSwatch Journal CSS tyylittelyä
  return (
    <div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-md-8 col-lg-6">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Contact AIC</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-bold">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg rounded-pill">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactMe;
