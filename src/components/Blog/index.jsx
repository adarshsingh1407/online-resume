/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import FAIcon from '../common/FAIcon'

class Blog extends PureComponent {
  render() {
    const {
      blog: { name = '', url = '', description = '' },
    } = this.props
    return (
      <div className="container-xl pb-3">
        <div className="card text-white bg-dark">
          <div className="custom-card-header">
            <div className="row mb-2">
              <div className="col-9 card-header-left job-title bg-black pl-2 pt-1">
                <div>{name}</div>
              </div>
              <div className="col-3 card-header-right">
                <div className="float-right">
                  <div className="start-date text-center">
                    <a
                      href={url}
                      className="medium"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FAIcon icon={faMedium} />
                    </a>
                  </div>
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

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
}

export default Blog
