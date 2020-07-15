import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { getSessionCategories } from '../../Redux/Actions';

function mapStateToProps(state) {
  return {
    sessionCategories: state.categories.sessionCategories,
  };
}

const SessionForm = ({ sessionCategories, getSessionCategories }) => {
  const [values, setValues] = React.useState({
    categories: '',
    title: '',
    description: '',
    requirements: '',
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    getSessionCategories();
  }, []);

  return (
    <div style={{ width: '75%', marginLeft: '10%', marginTop: '5%' }}>
      <h1 style={{ margin: '5% 0 ' }}>Volunteers Session Form</h1>
      <hr />
      <Form>
        <FormGroup>
          <Label for="categoriesSelect">Categories</Label>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Input
              type="select"
              name="categories"
              onChange={handleChange}
              value={values.categories}
              id="categoriesSelect"
              style={{ marginRight: '20px' }}
            >
              <option>Select here</option>
              {sessionCategories.map(category => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))}
            </Input>
            <Button color="success">New Category</Button>
          </div>
        </FormGroup>

        <FormGroup>
          <Label for="titleText">Title</Label>
          <Input
            type="text"
            name="title"
            onChange={handleChange}
            value={values.title}
            id="titleText"
            placeholder="Title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="descriptionText">Description</Label>
          <Input
            type="textarea"
            name="description"
            onChange={handleChange}
            value={values.description}
            id="descriptionText"
            placeholder="Description"
          />
        </FormGroup>
        <FormGroup>
          <Label for="requirementsText">Requirements</Label>
          <Input
            type="textarea"
            name="requirements"
            onChange={handleChange}
            value={values.requirements}
            id="requirementsText"
            placeholder="Requirements"
          />
        </FormGroup>

        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default connect(
  mapStateToProps,
  { getSessionCategories }
)(SessionForm);
