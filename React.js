function Hello() {
    return <h1>How are you</h1>;
  }
  
  const container = document.getElementById('mydiv');
  const root = ReactDOM.createRoot(container);
  root.render(<Hello />)