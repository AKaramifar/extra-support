import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import CategoryForm from './CategoryForm';

const CategoryModal = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>
        New Category
      </Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Category</ModalHeader>
        <ModalBody>
          <CategoryForm />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CategoryModal;
