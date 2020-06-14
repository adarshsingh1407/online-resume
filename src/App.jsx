import React from 'react'
import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './App.css'
import FAIcon from './components/common/FAIcon'
import WorkExperience from './components/WorkExperience'
import { RESUME_DETAIL, TOP_SKILLS_LIMIT } from './constants'
import Academics from './components/Academics'
import Project from './components/Project'
import Blog from './components/Blog'
import SkillsDistribution from './components/SkillsDistribution/SkillsDistribution'

function App() {
  const {
    name = '',
    email = '',
    mobilePrefix = '',
    mobileNo = '',
    location = '',
    positions = [],
    workExperiences = [],
    academicDetails = [],
    skills = [],
    projects = [],
    blogs = [],
  } = RESUME_DETAIL
  return (
    <div className="App">
      <div className="container-xl">
        <div className="jumbotron bg-primary">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12">
                  <h1 className="heading text-uppercase">{name}</h1>
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
                {positions.length > 0 &&
                  positions.map(position => {
                    return (
                      <div key={position} className="col-12 text-uppercase">
                        {position}
                      </div>
                    )
                  })}
              </div>
              <div className="row contact-info mt-4">
                <div className="col-12">
                  <FAIcon icon={faPhoneAlt}>
                    <a className="contact-action" href={`tel:${mobileNo}`}>
                      {`${mobilePrefix}${mobileNo}`}
                    </a>
                  </FAIcon>
                </div>
                <div className="col-12">
                  <FAIcon icon={faEnvelope}>
                    <a className="contact-action" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </FAIcon>
                </div>
                <div className="col-12">
                  <FAIcon icon={faMapMarkerAlt} label={location} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-uppercase text-center section-heading">
                    Work Experience
                    <sup className="workex-years p-2">(5 Years)</sup>
                  </h3>
                  <hr className="section-border" />
                  {workExperiences.map(workExp => {
                    return (
                      <WorkExperience
                        key={workExp.startDate}
                        workExp={workExp}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h3 className="text-uppercase text-center section-heading">
                    Academic Background
                  </h3>
                  <hr className="section-border" />
                  {academicDetails.map(academicDetail => {
                    return (
                      <Academics
                        key={academicDetail.year}
                        academicDetail={academicDetail}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-uppercase text-center section-heading">
                    Skills Distribution
                  </h3>
                  <hr className="section-border" />
                  <div className="container-xl pb-3">
                    <div className="row">
                      <div className="col-12">
                        <div className="skill-name">
                          <span className="top-skills-label mr-2 pr-2">
                            Top Skills
                          </span>
                          {skills.map((skill, skillIndex) => {
                            return (
                              skillIndex < TOP_SKILLS_LIMIT && (
                                <span
                                  key={skill.name}
                                  className="badge badge-primary mx-1"
                                >
                                  {skill.name}
                                </span>
                              )
                            )
                          })}
                        </div>
                      </div>
                      <div className="col-12">
                        <SkillsDistribution skills={skills} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h3 className="text-uppercase text-center section-heading">
                    Projects
                  </h3>
                  <hr className="section-border" />
                  {projects.map(project => {
                    return <Project key={project.name} project={project} />
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h3 className="text-uppercase text-center section-heading">
                    Blogs
                  </h3>
                  <hr className="section-border" />
                  {blogs.map(blog => {
                    return <Blog key={blog.name} blog={blog} />
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
