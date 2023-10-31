function App() {
  // component
  // jsx에서 태그 사용시 반드시 종료태그 작성
  // 빈 요소이면 시작태그에서 종료
  return (
    <div>
      <h1>hello react</h1>
      <h2>hi</h2>
      <p>
        Lorem ipsum dolor.
        <br />
        Lorem ipsum dolor.
      </p>
      <MyComp />
      <MyComp2 />
    </div>
  );
}

// built-in component 는 소문자로 시작
// component 명은 대문자로 시작
// return 문을 가져야 함
// return 값은 보통 jsx코드

function MyComp() {
  // return 에 jsx코드 작성 가능
  // 꼭 하나의 root tag가 존재해야 함
  // return 값이 여러줄이면 ()
  // root tag 가 필요없다면 fragment 사용 가능 (tag명이 없는 tag)

  // jsx 에서 주석 사용 : {/*   */} (ctrl + /)
  return (
    <>
      <h1>hi comp</h1>
      <h2>asdad</h2>
    </>
  );
}

function MyComp2() {
  let name = "손흥민";
  let age = 33;
  // {} : jsx 에서 js 코드를 작성하기 위한 기호
  return (
    <>
      <h1>hello react</h1>
      <h1>hello {name}</h1>
      <h1>{age + 1} years</h1>
      <h1>{name + " 선수"}</h1>
      {/*  주석  */}
    </>
  );
}

export default App;
