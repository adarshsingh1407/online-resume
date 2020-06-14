import React from 'react'
import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './App.css'
import FAIcon from './components/common/FAIcon'
import WorkExperience from './components/WorkExperience'
import { RESUME_DETAIL } from './constants'

function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <div className="jumbotron bg-primary">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12">
                  <h1 className="heading text-uppercase">
                    {RESUME_DETAIL.name}
                  </h1>
                </div>
                <div className="col-12">
                  <h2 className="sub-heading text-uppercase">
                    Experience Technologist
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 text-right">
              <div className="row heading-position">
                <div className="col-12 text-uppercase">Front-end Developer</div>
                <div className="col-12 text-uppercase pt-2">
                  Full-stack Developer
                </div>
              </div>
              <div className="row contact-info mt-4">
                <div className="col-12">
                  <FAIcon icon={faPhoneAlt}>
                    <a className="contact-action" href="tel:8800877179">
                      91-8800877179
                    </a>
                  </FAIcon>
                </div>
                <div className="col-12">
                  <FAIcon icon={faEnvelope}>
                    <a
                      className="contact-action"
                      href="mailto:adarshsingh1407@gmail.com"
                    >
                      adarshsingh1407@gmail.com
                    </a>
                  </FAIcon>
                </div>
                <div className="col-12">
                  <FAIcon icon={faMapMarkerAlt} label="Gurgaon, IN" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="text-uppercase text-center section-heading">
                Work Experience (5 Years)
              </h3>
              <hr className="section-border" />
              {RESUME_DETAIL.workExperiences.map(workExp => {
                return (
                  <WorkExperience key={workExp.startDate} workExp={workExp} />
                )
              })}
            </div>
            <div className="col-12 col-md-6">
              <h3 className="text-uppercase text-center section-heading">
                Academic Background
              </h3>
              <hr className="section-border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
