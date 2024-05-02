export function Subscribe() {
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
        <div className="flex-space-even" id="navigation">
          <div className="white margin-hor-100 flex-hor-center font-size-bigger">
            Subscribe
          </div>
        </div>
      </div>

      <div className="app-content flex-just-center" id="app-content">
        <div className="flex-vert-center">
          <span
            className="material-symbols-outlined white font-size-gigantic padding-100"
            id="icon"
          >
            equalizer
          </span>
          <h2 className="white font-size-normal" id="message">
            Subscribing you to the Remix...
          </h2>
        </div>
      </div>
    </div>
  );
}
