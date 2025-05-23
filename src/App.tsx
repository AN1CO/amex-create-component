import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
function App() {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div>
        <Button />
      </div>
      <Modal />
    </div>
  );
}

export default App;
