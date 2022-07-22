import React from 'react'

const IntroContainer = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#4D96FF" }}>
      <div className="container">
        <div className="row align-items-center py-5">
          <div className="col-md-6 text-white text-center">
            <h1
              className="center font-weight-bold"
              style={{ fontSize: "70px", color: "white" }}
            >
              Vijay Electronics
            </h1>
            <p>one stop destination for home appliance shopping in India.</p>
          </div>
          <div className="col-md-6">
            <img
              src="https://i.ibb.co/McSRhck/electronics-store.png"
              alt="About Hero"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroContainer