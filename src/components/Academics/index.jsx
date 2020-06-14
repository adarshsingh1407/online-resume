/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

class Academics extends PureComponent {
  render() {
    const {
      academicDetail: { year = '', line1 = '', college = '', marks = '' } = {},
    } = this.props
    return (
      <div className="container-xl pb-3">
        <div className="card text-white bg-dark">
          <div className="custom-card-header">
            <div className="row">
              <div className="col-9 card-header-left job-title bg-black pl-2 pt-1">
                <div>{line1}</div>
              </div>
              <div className="col-3 card-header-right">
                <div className="float-right">
                  <div className="start-date text-center">{year}</div>
                  <div className="end-date text-center">{marks}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-12">
              {!isEmpty(college) && <div>{college}</div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Academics.propTypes = {
  academicDetail: PropTypes.object.isRequired,
}

export default Academics
