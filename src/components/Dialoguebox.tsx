interface DialogBoxProps {
  isOpen: boolean; // Determines if the dialog is visible or hidden
  title?: string; // Optional title for the dialog
  content: React.ReactNode; // The content to display inside the dialog
  onClose: () => void; // Function to call when the dialog is closed
  confirmText?: string; // Optional text for a confirm button
  cancelText?: string; // Optional text for a cancel button
  onConfirm?: () => void; // Function to call when confirm button is clicked
  onCancel?: () => void; // Function to call when cancel button is clicked
}

const DialogBox: React.FC<DialogBoxProps> = ({
  isOpen,
  title,
  content,
  onClose,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel
}) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        {title && <h2 className="dialog-title">{title}</h2>}
        <div className="dialog-body">
          {content}
        </div>
        <div className="dialog-footer">
          {onCancel && (
            <button onClick={onCancel} className="dialog-button">
              {cancelText}
            </button>
          )}
          {onConfirm && (
            <button onClick={onConfirm} className="dialog-button">
              {confirmText}
            </button>
          )}
          <button onClick={onClose} className="dialog-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default DialogBox
