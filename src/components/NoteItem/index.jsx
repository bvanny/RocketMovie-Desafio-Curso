import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  console.log(value);
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        onChange={(e) => e.target.value}
        disabled={!isNew}
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
