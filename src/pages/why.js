import React from 'react';

const Why = () => {
  return (
    <div className="container py-5" style={{ fontFamily: 'Questrial, sans-serif' }}>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-4 text-center mb-5">.why</h1>
          
          <section className="bg-white p-5 rounded-3 shadow-sm">
            <div className="prose">
              <div className="text-center mb-5">
                
                <div className="d-flex flex-column align-items-center gap-4 mb-5">
                  {/* Statement Container */}
                  <div className="statement-container position-relative">
                    <div className="statement-box bg-white p-4 rounded-4 shadow-sm mb-4" style={{ maxWidth: '600px' }}>
                      <div className="d-flex flex-column gap-3">
                        {/* Core Statements */}
                        {['should', 'have', 'want', 'need'].map((verb, index) => (
                          <div key={index} className="statement-line py-2 border-bottom">
                            <span className="fs-4">if people </span>
                            <span className="fs-4 fw-bold">{verb}</span>
                            <span className="fs-4">{verb !== 'should' ? ' to' : ''} talk</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  

                  {/* Current State */}
                  <div className="status-container my-4">
                    <p className="fs-5 fst-italic text-black mb-0">
                      but have nobody to talk with, they are stuck with their thoughts.
                    </p>
                  </div>

                  {/* Solution Statement */}
                  <div className="status-container my-4">
                    <p className="fs-5 text-black mb-0">
                      Today, they can face frustration. Tomorrow, they will use <strong>talk</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Why; 