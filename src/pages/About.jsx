import React from "react";
//Styling on BootSwatch Journal tyyliä
//perus lisäsivu harjoitukseksi
const About = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h1 className="card-title text-center mb-4">About the Art Institute of Chicago</h1>

              <p className="lead text-center mb-5">
                Welcome to the <b>Art Institute of Chicago</b>, one of the oldest and largest art museums in the United States. We are dedicated to connecting people with art through our world-class collection, exhibitions, and public programs.
              </p>

              <section className="mb-4">
                <h2 className="h4 mb-3 text-primary">Our Mission</h2>
                <p>
                  The Art Institute of Chicago's mission is to collect, preserve, study, and display works of art of the highest quality, and to provide educational programs that advance the public's understanding and appreciation of the visual arts.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 mb-3 text-primary">Our Values</h2>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <b>Excellence:</b> We maintain rigorous standards in conservation, scholarship, and exhibition.
                  </li>
                  <li className="mb-2">
                    <b>Accessibility:</b> We strive to make art meaningful and accessible to diverse audiences.
                  </li>
                  <li className="mb-2">
                    <b>Education:</b> We foster learning through docent-led tours, lectures, and family programs.
                  </li>
                  <li className="mb-2">
                    <b>Stewardship:</b> We care for our collection and support research and conservation.
                  </li>
                </ul>
              </section>

              <section className="mb-4">
                <h2 className="h4 mb-3 text-primary">Our Story</h2>
                <p>
                  Founded in 1879, the Art Institute of Chicago has grown from a small collection to a global cultural institution. Our holdings span centuries and cultures, featuring masterpieces by artists such as Monet, Van Gogh, Picasso, and Grant Wood. The museum's campus in Grant Park includes landmark buildings and the iconic lion statues guarding the entrance.
                </p>
                <p>
                  Over the decades we've expanded our galleries, launched research and conservation initiatives, and developed educational programs that serve Chicago and visitors from around the world.
                </p>
              </section>

              <section className="text-center mt-5">
                <h2 className="h4 mb-3 text-primary">Visit & Contact</h2>
                <p>
                  Plan your visit, view current exhibitions, or learn about membership and donations on our official website:
                </p>
                <p>
                  <a
                    href="https://www.artic.edu"
                    className="link-primary text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    artic.edu
                  </a>
                </p>
                <p className="mt-3">
                  For general inquiries, call <b>(312) 443-3600</b> or use the contact forms on the website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

