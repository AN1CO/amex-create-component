interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className={"rounded-full p-4 bg-purple-500 hover:bg-fuchsia-500"}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
