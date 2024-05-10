import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Formulario = ({ colaboradores, setColaboradores, setAlert }) => {
  const [nombreNuevoColaborador, setNombre] = useState('')
  const [correoNuevoColaborador, setCorreo] = useState('')
  const [edadNuevoColaborador, setEdad] = useState('')
  const [cargoNuevoColaborador, setCargo] = useState('')
  const [telefonoNuevoColaborador, setTelefono] = useState('')

  const handleSend = (e) => {
    e.preventDefault()

    // Validación de campos obligatorios
    if (
      !nombreNuevoColaborador.trim() ||
      !correoNuevoColaborador.trim() ||
      !edadNuevoColaborador.trim() ||
      !cargoNuevoColaborador.trim() ||
      !telefonoNuevoColaborador.trim()
    ) {
      setAlert({ msg: 'Debes completar todos los campos', color: 'danger' })
      return
    }

    // Validación de nombre
    const nameWords = nombreNuevoColaborador.trim().split(' ')
    if (nameWords.length !== 2) {
      setAlert({
        msg: 'Por favor, debe ingresar nombre y apellido',
        color: 'danger'
      })
      return
    }

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(correoNuevoColaborador)) {
      setAlert({
        msg: 'Por favor, ingresa un correo electrónico válido',
        color: 'danger'
      })
      return
    }
    // Validación de edad
    const edad = parseInt(edadNuevoColaborador)
    if (isNaN(edad) || edad < 18 || edad > 90) {
      setAlert({
        msg: 'Por favor, ingresa una edad válida para trabajar',
        color: 'danger'
      })
      return
    }
    // Validación de cargo
    if (!isNaN(cargoNuevoColaborador.trim())) {
      setAlert({
        msg: 'Por favor, ingresa un cargo válido (solo texto)',
        color: 'danger'
      })
      return
    }
    // Validación del teléfono
    const phoneRegex = /^\d{9}$/
    if (!phoneRegex.test(telefonoNuevoColaborador)) {
      setAlert({
        msg: 'Por favor, ingresa un número de teléfono válido (9 dígitos)',
        color: 'danger'
      })
      return
    }
    // Restablecer campos y agregar nuevo colaborador
    setAlert({ msg: 'Listo! Colaborador ingresado', color: 'success' })
    setNombre('')
    setCorreo('')
    setEdad('')
    setCargo('')
    setTelefono('')

    const nuevoColaborador = {
      id: Date.now(),
      nombre: nombreNuevoColaborador,
      correo: correoNuevoColaborador,
      edad: edadNuevoColaborador,
      cargo: cargoNuevoColaborador,
      telefono: telefonoNuevoColaborador
    }

    setColaboradores([...colaboradores, nuevoColaborador])
  }

  return (
    <Form onSubmit={handleSend}>
      <Form.Group className='mb-3' controlId='formBasicNombre'>
        <Form.Control
          type='text'
          placeholder='Nombre del colaborador'
          name='nombre'
          onChange={(e) => setNombre(e.target.value)}
          value={nombreNuevoColaborador}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control
          type='email'
          placeholder='Email del colaborador'
          name='correo'
          onChange={(e) => setCorreo(e.target.value)}
          value={correoNuevoColaborador}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEdad'>
        <Form.Control
          type='text'
          placeholder='Edad del colaborador'
          name='edad'
          onChange={(e) => setEdad(e.target.value)}
          value={edadNuevoColaborador}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicCargo'>
        <Form.Control
          type='text'
          placeholder='Cargo del colaborador'
          name='cargo'
          onChange={(e) => setCargo(e.target.value)}
          value={cargoNuevoColaborador}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicTelefono'>
        <Form.Control
          type='text'
          placeholder='Telefono del colaborador'
          name='telefono'
          onChange={(e) => setTelefono(e.target.value)}
          value={telefonoNuevoColaborador}
        />
      </Form.Group>

      <Button variant='primary' type='submit' className='w-100'>
        Agregar colaborador
      </Button>
    </Form>
  )
}

export default Formulario
