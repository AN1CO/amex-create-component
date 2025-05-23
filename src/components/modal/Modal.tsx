import { useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  hasCloseBtn,
}: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  // for when you use escape to close a modal, React keeps track of the close/open state
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog ref={modalRef} className="p-4 block">
      {hasCloseBtn && (
        // TODO: ICON FOR CLOSING
        <button
          className="modal-close-btn"
          aria-label="Close"
          onClick={handleCloseModal}
        >
          Close
        </button>
      )}
      {children}
    </dialog>
  );
}
