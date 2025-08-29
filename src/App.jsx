import ProgressBier from './Components/ProgressBier';

function App() {
  return (
    <>
      <header>
        <h1>ProgrEssen bars</h1>
        <p>
          Little playground for food themed progress bars for a German trivia
          app
        </p>
        <p>Essen is the German word for "to eat" or "food"</p>
      </header>
      <main>
        <div className="bars-container">
           <ProgressBier duration={5000} />
            <ProgressBier duration={10000} />
             <ProgressBier duration={15000} />
      
        </div>

      </main>
     
    </>
  );
}

export default App;
