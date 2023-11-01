import Box, { color as bColor } from "./component/Box";
import Container, { color as cColor } from "./component/Container";

function App() {
  return (
    <div>
      <Box style={{ color: bColor }} />
      <Container style={{ color: cColor }} />
    </div>
  );
}

export default App;
