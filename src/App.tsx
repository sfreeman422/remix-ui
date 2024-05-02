import "./App.css";

function App() {
  return (
    <div>
      <div className="header flex-space-btwn">
        <div id="logo hover-green">
          <h1>
            <a href="/">
              <span className="white">Remix</span>
              <span className="green">.lol</span>
            </a>
          </h1>
        </div>
        <div className="flex-space-even" id="navigation">
          <div className="white margin-hor-100 flex-hor-center hover-green hover-pointer">
            <a href="/how-it-works" className="white hover-green">
              How It Works
            </a>
          </div>
          <div className="white margin-hor-100 flex-hor-center">|</div>
          <div className="white margin-hor-100 flex-hor-center hover-pointer hover-green">
            <a href="/login" className="white hover-green">
              Log In with Spotify
            </a>
          </div>
        </div>
      </div>
      <div
        className="bg-white flex-vert-center flex-just-center content"
        id="content"
      >
        <div className="flex-vert-center margin-100 padding-100">
          <h1 className="font-size-biggest font-weight-700 white">
            <span className="green">Discover</span> new music curated by{" "}
            <span className="green">your friends.</span>
          </h1>
          <h2 className="font-size-bigger white">
            Automated. Asynchronous. Amazing.
          </h2>
          <p className="font-size-big white">
            Remix.lol creates a playlist each week with all of the music you and
            your friends have been listening to.
          </p>
        </div>
        <div className="margin-hor-100 hover-white hover-pointer bg-green padding-050 bdr-rad-010">
          <a href="/login" className="black">
            Log In with Spotify
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
