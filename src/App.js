import { MyElem } from "./component/MyElem";
import { MyComp } from "./component/MyComp";

//  export된 컴포넌트(변수, 함수, 객체) 를 import 해서 사용

function App() {
  return (
    <>
      <MyComp />
      <MyElem />
    </>
  );
}

export default App;
