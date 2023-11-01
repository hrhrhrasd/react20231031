export function MyElem() {
  //  named export
  return (
    <div>
      <h1>My Element</h1>
    </div>
  );
}

//  named export
export const city = "seoul";

// default export
// 이름이 정해져 있지 않음
// 한 파일에 하나만 가능
const age = 33;
export default age;
