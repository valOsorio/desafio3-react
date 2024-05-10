import React, { Component } from 'react'

class Buscador extends Component {
  constructor (props) {
    super(props)
    this.state = {
      terminoBusqueda: ''
    }
  }

  handleChange = (event) => {
    const termino = event.target.value
    this.setState({ terminoBusqueda: termino })
    this.props.buscarColaboradores(termino)
  }

  render () {
    return (
      <input
        type='text'
        placeholder='Buscar colaborador'
        value={this.state.terminoBusqueda}
        onChange={this.handleChange}
      />
    )
  }
}

export default Buscador
