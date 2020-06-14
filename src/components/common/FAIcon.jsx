/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FAIcon extends PureComponent {
  render() {
    const { icon, label = '', children } = this.props
    return (
      <>
        {icon && <FontAwesomeIcon width="10px" icon={icon} className="mx-2" />}
        {!isEmpty(label) && <span>{label}</span>}
        {children}
      </>
    )
  }
}

FAIcon.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.string,
  children: PropTypes.element,
}

FAIcon.defaultProps = {
  icon: null,
  label: '',
  children: null,
}

export default FAIcon
