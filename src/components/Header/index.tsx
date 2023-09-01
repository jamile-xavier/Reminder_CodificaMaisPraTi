import { useState } from "react";
import reminderLogo from "../../assets/images/Logo.jpg";
import { Container } from "./styles";
import { Button } from "../Button";

export function Header() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  return (
    <Container>
      <img src={reminderLogo} alt="Logo React Reminder" />
      <Button title="Adicionar lembrete" onClick={increment} />
    </Container>
  );
}
