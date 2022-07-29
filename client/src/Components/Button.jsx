import React from 'react'
import PropTypes from 'prop-types'

export default function Button({ name }) {
  return (
    <div>
      <button type="submit" className="button--send">
        {name}
      </button>
    </div>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
}
