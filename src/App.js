
function App() {
  return (
    <div>
        <MyComponent1 />
        <MyComponent2 />
    </div>
  );
}

function MyComponent1() {
    return (
        <div>
            <h1>Hello Component</h1>
        </div>
    );
}

function MyComponent2() {
    return (
        <>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
                <li>Lorem.</li>
                <li>Quo.</li>
                <li>Illum.</li>
            </ul>
        </>
    )
}

export default App;
