
function App() {    // component
    return (
        <div>
            <h1>hello react</h1>
            <h2>hi</h2>
            <MyComp />
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

export default App;
