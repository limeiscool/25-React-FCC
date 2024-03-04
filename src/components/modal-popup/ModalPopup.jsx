import { useState } from "react";
import Modal from "./Modal";
import "./modal-popup.css";

function ModalPopup() {
  const [showModal, setShowModal] = useState(false);

  const toggleModalPopup = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={toggleModalPopup}>Open Modal Popup</button>
      {showModal && (
        <Modal
          onClose={onClose}
          header={<div>Custom Header</div>}
          body={<div>Custom Body</div>}
          footer={<div>Custom Footer</div>}
        />
      )}
    </div>
  );
}

export default ModalPopup;
