function App() {
  return (
    <div>
      <MyComponent1 />
      <MyComponent1 />
    </div>
  );
}

function MyComponent1() {
  return (
    <div style={{ width: "100%" }}>
      <img
        style={{ width: "100%" }}
        src="https://imgur.com/SuL4x4v.jpeg"
        alt="경복궁"
      />
    </div>
  );
}

export default App;
