import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddUser = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(formData.firstName, formData.lastName);
    setFormData({
      firstName: '',
      lastName: '',
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label>First Name</Label>
        <Input
          placeholder="First name"
          name="firstName"
          onChange={formChangeHandler}
          value={formData.firstName}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input
          placeholder="Last name"
          name="lastName"
          onChange={formChangeHandler}
          value={formData.lastName}
          required
        />
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">
          Save
        </Button>
      </FormGroup>
    </Form>
  );
};

export default AddUser;
