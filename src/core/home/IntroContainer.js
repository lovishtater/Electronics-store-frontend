import React from 'react'

const IntroContainer = () => {
  return (
    <section class="py-5" style={{ backgroundColor: "#4D96FF" }}>
      <div class="container">
        <div class="row align-items-center py-5">
          <div class="col-md-6 text-white text-center">
            <h1
              class="center font-weight-bold"
              style={{ fontSize: "70px", color: "white" }}
            >
              Vijay Electronics
            </h1>
            <p>one stop destination for home appliance shopping in India.</p>
          </div>
          <div class="col-md-6">
            <img
              src="https://i.ibb.co/McSRhck/electronics-store.png"
              alt="About Hero"
              class="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroContainer