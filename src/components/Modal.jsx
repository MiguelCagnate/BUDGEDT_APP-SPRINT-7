import "./Modal.css";

export function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={() => onClose(false)}></div>
      <div className="modal-body">{children}</div>
    </div>
  );
}
