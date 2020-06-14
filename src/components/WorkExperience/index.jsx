/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

class WorkExperience extends PureComponent {
  render() {
    const {
      workExp: {
        positionLine1 = '',
        positionLine2 = '',
        startDate = '',
        endDate = '',
        company = '',
        kras = [],
      } = {},
    } = this.props
    return (
      <div className="container-xl pb-3">
        <div className="row card text-white bg-dark">
          <div className="custom-card-header">
            <div className="row">
              <div className="col-8 card-header-left job-title">
                {!isEmpty(positionLine1) && <div>{positionLine1}</div>}
                {!isEmpty(positionLine2) && <div>{positionLine2}</div>}
              </div>
              <div className="col-4 card-header-right">
                <div className="float-right">
                  <div className="start-date text-center">{startDate}</div>
                  <div className="text-center">{endDate}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="card-title pt-1 text-center company-name">
              {company}
            </h5>
            <div className="col-12">
              <ul className="exp-details">
                {kras.length > 0 &&
                  kras.map(kra => {
                    return (
                      <li key={kra} className="pt-1">
                        {kra}
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

WorkExperience.propTypes = {
  workExp: PropTypes.object.isRequired,
}

export default WorkExperience
