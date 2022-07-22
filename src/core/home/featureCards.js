import React from 'react'

const featureCards = () => {
  return (
    <section className="container py-5">
      <div className="row text-center pt-5 pb-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Our Services</h1>
          <p>We provide the best services to our customers.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 pb-5">
          <div className="h-100 py-5 services-icon-wap shadow">
            <div className="h1 text-info text-center">
              <i className="fa fa-truck fa-lg"></i>
            </div>
            <h2 className="h5 mt-4 text-center">Delivery Services</h2>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 pb-5">
          <div className="h-100 py-5 services-icon-wap shadow">
            <div className="h1 text-info text-center">
              <i className="fa fa-exchange"></i>
            </div>
            <h2 className="h5 mt-4 text-center">Shipping & Return</h2>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 pb-5">
          <div className="h-100 py-5 services-icon-wap shadow">
            <div className="h1 text-info text-center">
              <i className="fa fa-wrench"></i>
            </div>
            <h2 className="h5 mt-4 text-center">Repair</h2>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 pb-5">
          <div className="h-100 py-5 services-icon-wap shadow">
            <div className="h1 text-info text-center">
              <i className="fa fa-user"></i>
            </div>
            <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default featureCards