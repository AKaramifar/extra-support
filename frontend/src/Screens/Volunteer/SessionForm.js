import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { getCategories, createSession, editSession } from '../../Redux/Actions';
import CategoryModal from '../../Components/Category/CategoryModal';
import Spinner from '../../Components/Spinner';

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    ActionController: state.ActionController,
  };
}
const SessionForm = ({ categories, getCategories, createSession, ActionController, location, editSession }) => {
  const [values, setValues] = React.useState({
    categoryId: '',
    title: '',
    description: '',
    requirements: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);
    if (ActionController.isLoading || !values.categoryId || !values.title || !values.description) {
      return <div style={{ color: 'red' }}>Please, Fill in the Category, Title and Description of the Session!</div>;
    } else {
      if (edit) {
        editSession(location.state._id, values);
      } else {
        createSession(values);
      }
    }
  };
  if (ActionController.actionType === '' && !ActionController.isLoading && submitted) {
    setValues({
      categoryId: '',
      title: '',
      description: '',
      requirements: '',
    });
    setSubmitted(false);
  }

  useEffect(() => {
    getCategories();
    if (location.state) {
      setValues({
        categoryId: location.state.categoryId,
        title: location.state.title,
        description: location.state.description,
        requirements: location.state.requirements,
      });
      setEdit(true);
    }
  }, [getCategories, location]);

  return (
    <div className="session-form-container">
      <div className="session-form">
        <Spinner isLoading={ActionController.isLoading} style={{ width: '200px', height: '200px' }} />
        <h1 style={{ margin: '5% 0 ' }}>Session Form</h1>
        <hr />
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="categorySelect">Categories</Label>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Input
                type="select"
                name="categoryId"
                onChange={handleChange}
                value={values.categoryId}
                id="categorySelect"
                style={{ marginRight: '20px' }}
              >
                <option value="" disabled>
                  Select here
                </option>
                {categories.map(category => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Input>
              <CategoryModal />
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
          <Button
            disabled={ActionController.isLoading || !values.categoryId || !values.title || !values.description}
            type="submit"
            color="primary"
          >
            Submit
          </Button>
        </Form>
      </div>
      <div />
    </div>
  );
};

export default connect(
  mapStateToProps,
  { getCategories, createSession, editSession }
)(SessionForm);
