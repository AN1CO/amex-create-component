import {
  describe,
  vi,
  beforeAll,
  test,
  expect,
  beforeEach,
  afterEach,
} from "vitest";
import {
  screen,
  render,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Modal from "./Modal";

describe("Modal", () => {
  const mockClose = vi.fn();

  beforeAll(() => {
    HTMLDialogElement.prototype.show = vi.fn();
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  beforeEach(() => {
    render(
      <Modal isOpen={true} title="Confirm" onClose={mockClose}>
        Stuff
      </Modal>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("renders modal with expected controls", () => {
    expect(screen.getByRole("dialog", { hidden: true })).toBeInTheDocument();
    expect(screen.getByRole("heading", { hidden: true })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { hidden: true, name: /close/i })
    ).toBeInTheDocument();
  });

  describe("when passed onClose handler", () => {
    test("calls onClose action when pressing the ESC key", () => {
      fireEvent.keyDown(screen.getByRole("dialog", { hidden: true }), {
        key: "Escape",
        code: "Escape",
      });
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test("renders dismissible button that calls onClose action when clicked", async () => {
      const closeButton = screen.getByRole("button", {
        hidden: true,
        name: /close/i,
      });
      userEvent.click(closeButton);
      await waitFor(() => expect(mockClose).toHaveBeenCalledTimes(1));
    });

    test("calls onClose action when clicking outside of the modal", async () => {
      cleanup();
      render(
        <div>
          <div data-testid="mockId">Outside</div>
          <Modal isOpen={true} title="Confirm">
            Stuff
          </Modal>
        </div>
      );
      const scrimElement = screen.getByTestId("mockId");
      await waitFor(() => fireEvent.click(scrimElement));
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });
});
