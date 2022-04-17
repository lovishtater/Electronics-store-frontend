import React from 'react'

const Brands = () => {
  return (
    <section class="bg-light py-5">
      <div class="container my-4">
        <div class="row text-center py-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Our Brands</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div class="col-lg-9 m-auto tempaltemo-carousel">
            <div class="row d-flex flex-row">
              <div class="col-1 align-self-center">
                <a class="h1" href="#brand" role="button" data-bs-slide="prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-caret-left-fill"
                    viewBox="0 0 30 30"
                  >
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                  </svg>
                </a>
              </div>

              <div class="col">
                <div
                  class="carousel slide carousel-multi-item pt-2 pt-md-0"
                  id="brand"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner product-links-wap" role="listbox">
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-3 p-md-5">
                          <a href="#">
                            <img
                              class="img-fluid brand-img"
                              src="https://i.ibb.co/xqPcR48/dffedw.png"
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#">
                            <img
                              class="img-fluid brand-img"
                              src="https://i.ibb.co/MkzVRpG/1200px-Samsung-Logo-svg.png"
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#">
                            <img
                              class="img-fluid brand-img"
                              src="https://i.ibb.co/RydZn0q/lloyd-logo-6-FFE9-A0779-seeklogo-com.png"
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#">
                            <img
                              class="img-fluid brand-img"
                              src="https://i.ibb.co/ckTRxSY/unnamed-1-removebg-preview.png"
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-3 p-md-5">
                          <a href="#">
                            <img
                              class="img-fluid brand-img"
                              src="https://i.ibb.co/748Vgxc/PNGPIX-COM-Whirlpool-Logo-PNG-Transparent.png"
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#">
                            <img
                              class="img-fluid brand-img"
                              src="https://i.ibb.co/ckgnywn/png-clipart-logo-hitachi-high-technologies-america-manufacturing-others-electronics-text-removebg-pr.png"
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#">
                            <img
                              class="img-fluid brand-img"
                              src="https://i.ibb.co/qYkcXXp/unnamed-2.png"
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#">
                            <img
                              class="img-fluid brand-img"
                              src="https://i.ibb.co/0ZBSS6X/175-1755101-o-general-hd-png-download-removebg-preview.png"
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-3 p-md-5">
                          <a href="#">
                            <img
                              class="img-fluid brand-img"
                              src="https://i.ibb.co/MVDTFd3/ifb-logo-CDA98-EC536-seeklogo-com.png"
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#">
                            <img
                              class="img-fluid brand-img"
                              src="https://i.ibb.co/xqPcR48/dffedw.png"
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#">
                            <img
                              class="img-fluid brand-img"
                              src="https://i.ibb.co/ckgnywn/png-clipart-logo-hitachi-high-technologies-america-manufacturing-others-electronics-text-removebg-pr.png"
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#">
                            <img
                              class="img-fluid brand-img"
                              src="https://i.ibb.co/qYkcXXp/unnamed-2.png"
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-1 align-self-center">
                <a class="h1" href="#brand" role="button" data-bs-slide="next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-caret-right-fill"
                    viewBox="0 0 30 30"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands