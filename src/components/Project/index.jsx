/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import FAIcon from '../common/FAIcon'

class Project extends PureComponent {
  render() {
    const {
      project: { name = '', url = '', demoUrl = '', description = '' },
    } = this.props
    return (
      <div className="container-xl pb-3">
        <div className="card text-white bg-dark">
          <div className="custom-card-header">
            <div className="row">
              <div className="col-9 card-header-left job-title bg-black pl-2 pt-1">
                <div>{name}</div>
              </div>
              <div className="col-3 card-header-right">
                <div className="float-right">
                  <div className="start-date text-center">
                    <a
                      href={url}
                      className="github"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FAIcon icon={faGithub} />
                    </a>
                  </div>
                  {!isEmpty(demoUrl) && (
                    <div className="end-date text-center">
                      <a
                        href={demoUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Demo
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-9">
              {!isEmpty(description) && <div>{description}</div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export default Project
