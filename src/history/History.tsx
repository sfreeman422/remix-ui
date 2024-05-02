export function History() {
  const goToDashboard = () => {
    console.log("go to dashboard");
  };

  return (
    <div>
      <div className="header flex-space-btwn">
        <div className="hover-green" id="logo">
          <h1>
            <a href="/">
              <span className="white">Remix</span>
              <span className="green">.lol</span>
            </a>
          </h1>
        </div>
        <div
          className="width-content margin-100 hover-white hover-pointer bg-green padding-050 bdr-rad-010"
          onClick={() => goToDashboard()}
        >
          Dashboard
        </div>
        <div className="flex-space-even" id="navigation">
          <div className="white margin-hor-100 flex-hor-center font-size-bigger">
            History
          </div>
        </div>
      </div>
      <div className="app-content">
        <div id="playlists"></div>
      </div>
    </div>
  );
}
