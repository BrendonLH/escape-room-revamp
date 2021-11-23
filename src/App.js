function App() {
  fetch("https://escape-room-server.herokuapp.com/riddles")
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <div className="App">
      <p>Start of escape room</p>
    </div>
  );
}

export default App;
