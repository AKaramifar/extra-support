import React from 'react';
import { Modal } from 'reactstrap';
export default ({ isLoading, style }) => {
  return (
    <Modal isOpen={isLoading} className='spinner-container'>
       <span className="loader" style={style}/> 
    </Modal>
  );
};
