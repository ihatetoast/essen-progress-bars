import ProgressBierPureCss from './Components/ProgressBierPureCSS';
import ProgressBierImg from './Components/ProgressBierImg';
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
        <p>
          Instead of passing an image by props, these are just going to be
          separate so that using either in another app will be easier to deal
          with.
        </p>
      </header>
      <main>
        <section>
          <h2>Biersteine with pure CSS</h2>
          <div className='bars-container'>
            <ProgressBierPureCss duration={5000} />
            <ProgressBierPureCss duration={10000} />
            <ProgressBierPureCss duration={15000} />
          </div>
        </section>
        <section>
          <h2>Biersteine with some SVGs</h2>
          <p>This zone is for working with a copy of the pure CSS component to make it workable in another app. This is a playground and might only relate to another app's specific needs. </p>
          <div className='bars-container'>
            <ProgressBierImg duration={5000} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
