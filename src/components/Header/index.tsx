import reminderLogo from "../../assets/images/Logo.jpg";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={reminderLogo} alt="Logo React Reminder" />
      <button>Adicionar Lembrete</button>
    </Container>
  );
}
