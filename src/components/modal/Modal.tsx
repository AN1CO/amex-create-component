import { useRef, useEffect } from "react";
import CloseIcon from "../../assets/close-circle.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => (
  <button
    aria-label="Close"
    onClick={onClick}
    className="absolute top-1 right-1"
  >
    <img className="w-8 h-8" src={CloseIcon} />
  </button>
);

export default function Modal({ isOpen, onClose, children }: ModalProps) {
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
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className="max-w-fit p-6 rounded-2xl relative m-auto backdrop:backdrop-grayscale-50"
    >
      <div className="p-8 rounded w-96 relative flex-col">
        <CloseButton onClick={handleCloseModal} />
        <div>{children}</div>
      </div>
    </dialog>
  );
}
