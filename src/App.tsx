import { useState } from "react";
import Modal from "./components/modal/Modal";
function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-md p-4 text-white bg-violet-600 hover:bg-violet-400 hover:text-black"
      >
        Open Modal
      </button>
      <Modal
        isOpen={openModal}
        title="Confirm"
        onClose={() => setOpenModal(false)}
      >
        <p>
          Cupcake ipsum dolor sit amet muffin bear claw biscuit. Macaroon pie
          dragée jelly sesame snaps jelly-o pie cupcake liquorice. Chocolate
          cake chocolate cake danish bear claw cake.
        </p>
        <div className="flex justify-center">
          <button
            className="text-white bg-violet-600 hover:bg-violet-400 hover:text-black"
            onClick={() => console.log("Confirmed!")}
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
