import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createCategory } from '../../Redux/Actions';
import ImageUpload from '../../Components/ImageUpload';

function mapStateToProps(state) {
  return {};
}

const CategoryForm = ({ createCategory }) => {
  const [values, setValues] = React.useState({
    name: '',
    image: '',
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageUpload = event => {
    console.log(event.target.files);
    const { files } = event.target;
    setValues({ ...values, image: URL.createObjectURL(files[0]) });
  };

  const handleSubmit = event => {
    event.preventDefault();
    createCategory(values);
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="nameText">Name</Label>
          <Input type="text" name="name" onChange={handleChange} value={values.name} id="nameText" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <ImageUpload label="Upload Image" onChange={handleImageUpload} image={values.image} isLoading={false} />
        </FormGroup>

        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default connect(
  mapStateToProps,
  { createCategory }
)(CategoryForm);
