import React, { useEffect, useState } from "react";
import { Modal, InputGroup, Form, Button } from "react-bootstrap";

const initialState = {
  name: "",
  expiration: "",
  existence:"",
};

const ModalUpdateStock = ({
  show,
  productToEdit,
  setShowModal,
  setCategoryToEdit,
  updateProduct
}) => { 
const [product, setProduct] = useState(initialState);
  const [name, setName] = useState({value: '', valid: true})
  const [description, setDescription] = useState({value: '', valid: true})
  const [expiration, setExpiration] = useState({value: '', valid: true})
  const [existence, setExistence] = useState({value: '', valid: true})
  useEffect(() => {
    if(productToEdit && Object.keys(productToEdit).length !== 0){
      setProduct(productToEdit) 
        setName({value: productToEdit.name, valid: true})
        setDescription({value: productToEdit.description, valid: true})
        setExpiration({value: productToEdit.expiration, valid: true})
        setExistence({value: productToEdit.existence, valid: true})
      }else{
        setProduct(initialState)
      }
  }, [show]);

  const handleOnChange = (e) => { 
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const rules =  /^[a-zA-Z\s]+$/;

  const stateOptions = [
    { value: "Activo", label: "Activo" },
    { value: "Inactivo", label: "Inactivo" }
  ];
  const handleOnChangeValidation = (value, min, max, callback ) => {
    if( value.length < min || value.length > max  ){
       callback({value: value, valid: false})
      }else{
        callback({value: value, valid: true})
    }
  }
  const handleCancel = () => {
    setShowModal(false);
    }

  const handleUpdateCategory = () => {
    if(name.valid  &&expiration.valid &&existence.valid ){
      console.log(product._id, name.value, description.value, product); // Agregar el console.log aquí
      updateProduct(product,name.value,expiration.value, existence.value);
      
      setShowModal(false);
    }
  }
  const handleOnChangeValidationNumber = (value, min, max, callback ) => {
    if( value.length < min || value.length > max || !/^\d+$/.test(value) ){
       callback({value: value, valid: false})
      }else{
        callback({value: value, valid: true})
    }
  }
 
  return (
    <Form noValidate >
    <Modal show={show} centered>
      <Modal.Header>Añadir stock</Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text >Producto</InputGroup.Text>
          <Form.Control
            style={{ border: name.valid ? '1px solid green': '1px solid red'}}
            placeholder="Producto"
            onChange={( e ) => handleOnChangeValidation(e.target.value, 3, 20, setName)}
            name="value"
            value={name.value}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text >Fecha de entrega</InputGroup.Text>
          <Form.Control
            style={{ border: expiration.valid ? '1px solid green': '1px solid red'}}
            placeholder="fecha de entrega"
            onChange={( e ) => handleOnChangeValidation(e.target.value, 3, 100, setExpiration)}
            name="value"
            value={expiration.value}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text >Existencia</InputGroup.Text>
          <Form.Control
            style={{ border: existence.valid ? '1px solid green': '1px solid red'}}
            placeholder="Existencia"
            onChange={( e ) => handleOnChangeValidationNumber(e.target.value, 1, 5, setExistence)}
            name="value"
            value={existence.value}
          />
        </InputGroup>
        
               
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => handleCancel()}>
          Cancelar
        </Button>
        <Button onClick={handleUpdateCategory}>Aceptar</Button>
      </Modal.Footer>
    </Modal>
    </Form>
      
  ); console.log
};
 
export default ModalUpdateStock;