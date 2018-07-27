import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mapWhitespaceProps} from './props'

export default function CounterLabel({theme, children, ...rest}) {
  const {className} = mapWhitespaceProps(rest)
  return <span className={classnames(className, 'Counter', theme && `Counter--${theme}`)}>{children}</span>
}

CounterLabel.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(['gray', 'gray-light'])
}