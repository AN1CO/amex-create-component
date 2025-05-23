import { useState } from "react";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
function App() {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(true);
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Button label="Open Modal" onClick={toggleModal} />
      <Modal isOpen={openModal}>Modal stuff here</Modal>
    </div>
  );
}

export default App;
