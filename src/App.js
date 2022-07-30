function App() {
  const name = 'John'
  const x = true

  return (
    <div className="container">
        <h1>Hello From React</h1>
        <h2>Hello {name}!</h2>
        <h2>Hello {2 + 2}!</h2>
        {/* ? = then and : = else*/}
        <h2>Hello {x ? 'Yes' : 'No'}!</h2>    
    </div>

  );
}

export default App;


// Notes: 
// You could use <> </> instead of div

