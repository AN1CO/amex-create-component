import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Modal from "../components/modal/Modal";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Modal",
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const DialogModal: Story = {
//   args: { isOpen },
// };

const DialogModal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Modal isOpen={true} onClose={() => setOpenModal(false)}>
        <h2>Confirmation</h2>
        <p></p>
        <div>
          <button onClick={() => console.log("Confirmed!")}>Confirm</button>
        </div>
      </Modal>
    </div>
  );
};

export const Basic: Story = {
  render: () => <DialogModal />,
};
