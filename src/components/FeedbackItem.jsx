import Card from "../shared/Card";
import { useState } from "react";
import Modal from "react-overlays/Modal";
import { FaTimes } from "react-icons/fa";
import "./modal.css";

function FeedbackItem({ item, setFeedback }) {
  const [showModal, setShowModal] = useState(false);

  var handleClose = () => setShowModal(false);

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => setShowModal(true)} color="blue" />
      </button>
      <div className="text-display">{item.text}</div>

      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div>
          <div className="modal-header">
            <div className="modal-title">Delete Feedback</div>
            <div>
              <span className="close-button" onClick={handleClose}>
                x
              </span>
            </div>
          </div>
          <div className="modal-desc">
            <p>Are You Sure You Want To Delete Feedback</p>
          </div>
          <div className="modal-footer">
            <button className="secondary-button" onClick={handleClose}>
              Cancel
            </button>
            <button className="primary-button" onClick={setFeedback}>
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </Card>
  );
}

export default FeedbackItem;
