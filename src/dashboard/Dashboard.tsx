import "./style.scss";

export function Dashboard() {
  return (
    <div className="dashboard">
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
            Dashboard
          </div>
        </div>
      </div>

      <div className="app-content" id="app-content"></div>
    </div>
  );
}
