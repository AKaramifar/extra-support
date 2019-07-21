import React from 'react'

export default ({ msg }) => (
  <div className="d-flex justify-content-center mt-5">
    {msg ? <h1>{msg}</h1> : <div className="loader" />}
  </div>
)
