import {
  MyBox,
  MyElem,
  MyContainer,
  name,
  address,
  person,
} from "./component/MyBox";

function App() {
  console.log(name);
  console.log(address);
  console.log(person);
  return (
    <>
      <MyBox />
      <MyElem />
      <MyContainer />
    </>
  );
}

export default App;
