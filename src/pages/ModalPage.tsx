import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false)
  }

  const sctionBar = <div><Button primary onClick={handleClose}>I accept</Button></div>

  const modal = <Modal onClose={handleClose} actionBar={sctionBar}>
    <p>
      Here is an important agreement for you to accept
    </p>
  </Modal>


  return (
    <div>
      <Button primary onClick={handleClick} >
        Open Modal
      </Button>
      {showModal && modal}
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt animi itaque quidem eaque voluptate, aliquam obcaecati porro atque, fuga incidunt iusto facilis iure! Sed inventore eum voluptatum illo vel?</p>
      
    </div>
  );
}

export default ModalPage;
