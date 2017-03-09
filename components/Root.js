import React from 'react'
import NavbarSearch from './Appbar'

export default React.createClass({
  render() {
    return (
      <div>
        <NavbarSearch/>

        {this.props.children}
      </div>
    )
  }
})
