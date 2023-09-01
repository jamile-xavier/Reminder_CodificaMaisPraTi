import { Container, Grid } from "./styles";

export function StickNotes() {
  return (
    <Container>
      <div className="reminderTitle">
        <h2>Lembretes</h2>
      </div>
      <Grid>
        <div>
          <h2>Título</h2>
          <p>Descrição</p>
        </div>
      </Grid>
    </Container>
  );
}
