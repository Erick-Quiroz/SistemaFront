import React, { useEffect, useState } from "react";
import { Modal, InputGroup, Form, Button } from "react-bootstrap";
import validUrl from 'valid-url';

const initialState = {
  name: '',
  description: "",
  imageUrl: "",
  state: "",
  category: "",
  price: "",
};

const ModalUpdateProduct = ({
  show,
  productToEdit,
  setShowModal,
  setProductToEdit,
  updateProduct
}) => {
  const [product, setProduct] = useState(initialState);
  const [name, setName] = useState({value: '', valid: true})
  const [description, setDescription] = useState({value: '', valid: true})
  const [price, setPrice]= useState({value:'', valid: true})
  const [imageUrl, setImageUrl]= useState({value:'', valid: true})

  useEffect(() => {
    if(productToEdit && Object.keys(productToEdit).length !== 0){
        setProduct(productToEdit) 
        setName({value: productToEdit.name, valid: true})
        setDescription({value: productToEdit.description, valid: true})
        setPrice({value: productToEdit.price, valid:true})
        setImageUrl({value: productToEdit.imageUrl, valid:true})
      }else{
        setProduct(initialState)
      }
  }, [show]);

  const handleOnChange = (e) => { 
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const rules =  /^[a-zA-Z\s]+$/;

  const handleOnChangeValidation = (value, min, max, callback ) => {
    if( value.length < min || value.length > max || !rules.test(value) ){
       callback({value: value, valid: false})
      }else{
        callback({value: value, valid: true})
    }
  }
  const handleOnChangeValidationNumber = (value, min, max, callback) => {
    if (value === null || value === undefined || !/^\d*\.?\d+$/.test(value) || value < 0 || value.length < min || value.length > max) {
      callback({ value: value, valid: false });
    } else {
      callback({ value: value, valid: true });
    }
  }
  
  //const handleOnChangeValidationLink = (value, min, max, callback) => {
  //  const pattern = /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,}(?:\/[^/]+)*\.(?:png|jpe?g|gif)$/i;
  //  const valid = value !== null && value !== undefined && value.length >= min && value.length <= max && pattern.test(value);
  //  callback({ value: value, valid: valid });
  // }

  //const handleOnChangeValidationLink = (value, min, max, callback) => {
  //  const length = value.trim().length;
  //  const valid = validUrl.isWebUri(value) && value.endsWith('.jpg') || value.endsWith('.jpeg') || value.endsWith('.png') || value.endsWith('.gif') && length >= min && length <= max;
  //  callback({ value: value, valid: valid });
  //}
  const handleOnChangeValidationLink = (value, min, max, callback) => {
    const length = value.trim().length;
    const validFormat = /\.(jpg|jpeg|png|gif)\b/i;
    const valid = validUrl.isWebUri(value) && validFormat.test(value) && length >= min && length <= max;
    callback({ value: value, valid: valid });
  }


  const handleCancel = () => {
    setShowModal(false);
    };

  const handleUpdateProduct = () => {
    if(name.valid && description.valid && price.valid && imageUrl.valid){
      updateProduct(product, name.value, description.value, price.value, imageUrl.value);
      setShowModal(false);
    }
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
        <InputGroup className="mb-3">
          <InputGroup.Text >Nombre Producto</InputGroup.Text>
          <Form.Control
            style={{ border: name.valid ? '1px solid green': '1px solid red'}}
            placeholder="Nombre de Producto"
            onChange={( e ) => handleOnChangeValidation(e.target.value, 3, 20, setName)}
            name="value"
            value={name.value}
          />
        </InputGroup>
        
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Descripcion</InputGroup.Text>
          <Form.Control
           style={{ border: description.valid ? '1px solid green': '1px solid red'}}
            placeholder="Descripcion del producto"
            name="value"
            value={description.value}
            onChange={(e) => handleOnChangeValidation(e.target.value, 3, 20, setDescription)}
          />
        </InputGroup>

{/*
        <InputGroup className="mb-3">
          <InputGroup.Text >Url de imagen</InputGroup.Text>
          <Form.Control
            placeholder="Imagen de Producto"
            onChange={handleOnChange}
            name="imageUrl"
            value={product.imageUrl}
          />
        </InputGroup>
*/}
        <InputGroup className="mb-3">
          <InputGroup.Text >Url de imagen</InputGroup.Text>
          <Form.Control
            style={{ border: imageUrl.valid ? '1px solid green': '1px solid red'}}
            placeholder="Imagen de Producto"
            onChange={( e ) => handleOnChangeValidationLink(e.target.value, 1, 200, setImageUrl)}
            name="value"
            value={imageUrl.value}
          />
        </InputGroup>


        <InputGroup className="mb-3">
          <InputGroup.Text >Precio</InputGroup.Text>
          <Form.Control
            style={{ border: price.valid ? '1px solid green': '1px solid red'}}
            placeholder="Precio de Producto"
            onChange={( e ) => handleOnChangeValidationNumber(e.target.value, 1, 5, setPrice)}
            name="value"
            value={price.value}
          />
        </InputGroup>
  

        {/*
        <InputGroup className="mb-3">
        <InputGroup.Text >Precio</InputGroup.Text>
          <Form.Control
            placeholder="Precio"
            onChange={handleOnChange}
            name="price"
            value={price.value}
          />
        
        <div className="col-md-3">
          <label
            htmlFor="validationCustom05"
            className="form-label">
            Precio
          </label>
          <input
            className="form-control"
            id="validationCustom05"
            min={1}
            name='price'
            onChange={handlerInputChange}
            required
            type="number"
            value={price}
          />
          <div className="invalid-feedback">
          Precio es requerido.
          </div>
        </div>
        </InputGroup>
        */}
        
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

