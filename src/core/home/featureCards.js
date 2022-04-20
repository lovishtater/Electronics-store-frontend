import React from 'react'

const featureCards = () => {
  return (
    <section class="container py-5">
      <div class="row text-center pt-5 pb-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">Our Services</h1>
          <p>We provide the best services to our customers.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3 pb-5">
          <div class="h-100 py-5 services-icon-wap shadow">
            <div class="h1 text-info text-center">
              <i class="fa fa-truck fa-lg"></i>
            </div>
            <h2 class="h5 mt-4 text-center">Delivery Services</h2>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 pb-5">
          <div class="h-100 py-5 services-icon-wap shadow">
            <div class="h1 text-info text-center">
              <i class="fa fa-exchange"></i>
            </div>
            <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 pb-5">
          <div class="h-100 py-5 services-icon-wap shadow">
            <div class="h1 text-info text-center">
              <i class="fa fa-wrench"></i>
            </div>
            <h2 class="h5 mt-4 text-center">Repair</h2>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 pb-5">
          <div class="h-100 py-5 services-icon-wap shadow">
            <div class="h1 text-info text-center">
              <i class="fa fa-user"></i>
            </div>
            <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default featureCards