import React, { useEffect, useState } from "react";
import { Modal, InputGroup, Form, Button } from "react-bootstrap";

const initialState = {
  name: '',
  description: "",
  imageUrl: "",
  state: "",
  category: "",

};

const ModalUpdateProduct = ({
  show,
  productToEdit,
  setShowModal,
  setProductToEdit,
  updateProduct
}) => {
  const [product, setProduct] = useState(initialState);

  useEffect(() => {
    if(productToEdit && Object.keys(productToEdit).length !== 0){
        setProduct(productToEdit) 
      }else{
        setProduct(initialState)
      }
  }, [show]);

  const handleOnChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setShowModal(false);
    };

  const handleUpdateProduct = () => {
    updateProduct(product);
    setShowModal(false);
  };
  const stateOptions = [
    { value: "Activo", label: "Activo" },
    { value: "Inactivo", label: "Inactivo" }
  ];
  const categoryOptions = [
    { value: "Lacteos", label: "Lacteos" },
    { value: "Gaseosa", label: "Gaseosa" },
    { value: "Dulces", label: "Dulces" },
    { value: "Abarrotes", label: "Abarrotes" }
  ];
  function handleKeyDown(event) {
    const regex = /^[a-zA-Z\s]+$/;
    const key = event.key;
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  }
  return (
    <Form noValidate >
    <Modal show={show} centered>
      <Modal.Header>Editar Producto</Modal.Header>
      <Modal.Body>
        {/*<InputGroup className="mb-3">
          <InputGroup.Text >Nombre Producto</InputGroup.Text>
          <Form.Control
            placeholder="Nombre de Producto"
            onChange={handleOnChange}
            name="name"
            value={product.name}
          />
        </InputGroup>*/}
        <InputGroup className="mb-3">
          <InputGroup.Text>Nombre Producto</InputGroup.Text>
          <Form.Control
            placeholder="Nombre de Producto"
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            name="name"
            value={product.name}
            required
            minLength={3}
            maxLength={20}
          />
          <Form.Control.Feedback type="invalid">
            Debe ingresar un nombre válido.
          </Form.Control.Feedback>
        </InputGroup>
        {/*
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Descripcion</InputGroup.Text>
          <Form.Control
            placeholder="Descripcion del producto"
            name="description"
            value={product.description}
            onChange={handleOnChange}
          />
        </InputGroup> */}
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Descripcion</InputGroup.Text>
          <Form.Control
            placeholder="Descripcion del producto"
            name="description"
            value={product.description}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            required
          />
          <Form.Control.Feedback type="invalid">
            Debes añadir una descripcion
          </Form.Control.Feedback>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text >Url de imagen</InputGroup.Text>
          <Form.Control
            placeholder="Imagen de Producto"
            onChange={handleOnChange}
            name="imageUrl"
            value={product.imageUrl}
          />
        </InputGroup>
        {/*  
        <Form.Select
          value={product.state}
          name="state"
          aria-label="Default select example"
          onChange={handleOnChange}
        >
          <option>Selecione un estado</option>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </Form.Select>
        */}
        <Form.Select
          value={
            product.state === "Activo" || product.state === "Inactivo"
              ? product.state
              : "Estado anterior"
          }
          name="state"
          aria-label="Default select example"
          onChange={handleOnChange}
        >
          <option key="default" disabled>
          Seleccione una estado
          </option>
          {stateOptions.map((option) => {
            if (option.value === product.state) {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            }
            if (option.value !== product.state) {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            }
          })}
        </Form.Select>

        {/*
        <Form.Select
          value={product.category}
          name="category"
          aria-label="Default select example"
          onChange={handleOnChange}
        >
          <option>Seleccione una categoria</option>
          <option>Lacteos</option>
          <option>Gaseosa</option>
          <option>Dulces</option>
          <option>Abarrotes</option>
        </Form.Select>
        */}
        <Form.Select
        value={
          product.category
            ? product.category
            : "Seleccione una categoria"
        }
        name="category"
        aria-label="Default select example"
        onChange={handleOnChange}
      >
        <option key="default" disabled>
          Seleccione una categoria
        </option>
        {categoryOptions.map((option) => {
          if (option.value === product.category) {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          }
          if (option.value !== product.category) {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          }
        })}
      </Form.Select>
      
        

      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => handleCancel()}>
          Cancel
        </Button>
        <Button onClick={handleUpdateProduct}>Aceptar</Button>
      </Modal.Footer>
    </Modal>
    </Form>
  );
};

export default ModalUpdateProduct;
