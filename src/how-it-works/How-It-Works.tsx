export function HowItWorks() {
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
          <div className="white margin-hor-100 flex-hor-center hover-pointer hover-green">
            <a href="/login" className="white hover-green">
              Log In with Spotify
            </a>
          </div>
        </div>
      </div>

      <div className="app-content" id="app-content">
        <div className="flex-just-center flex-hor-center flex-column flex-space-btwn">
          <div className="flex-hor-center width-small padding-100">
            <div className="step-left step-item">
              <span className="white font-size-bigger">
                Create the <span className="green">Remix</span>
              </span>
            </div>
            <div className="step-item">
              <span className="white font-size-big">
                Create an automated Spotify playlist with all of the music you
                have been loving over the past week.
              </span>
            </div>
          </div>
          <div className="flex-hor-center width-small padding-100">
            <div className="step-item">
              <span className="white font-size-big">
                Share your <span className="green">Remix</span> with your
                friends. Once they click the link, they will be subscribed to
                the <span className="green">Remix</span> in Spotify and they
                will have their most recently loved tracks added to the
                playlist.
              </span>
            </div>
            <div className="step-right step-item">
              <span className="white font-size-bigger">
                Share the <span className="green">Remix</span>
              </span>
            </div>
          </div>
          <div className="flex-hor-center width-small padding-100">
            <div className="step-left step-item">
              <span className="white font-size-bigger">
                Enjoy the <span className="green">Remix</span>
              </span>
            </div>
            <div className="step-item">
              <span className="white font-size-big">
                Each Monday, your <span className="green">Remix</span> will be
                refreshed with the music you and your friends have been loving
                over the past week.
              </span>
            </div>
          </div>
        </div>
        <div className="flex-just-center flex-column">
          <h1 className="white">FAQs</h1>
          <div className="bg-light-black padding-100 width-large margin-100">
            <span className="white font-size-big">
              What is a <span className="green">Remix</span>?
            </span>
            <div className="margin-ver-100">
              <span className="white">
                A <span className="green">Remix</span> is an automated Spotify
                playlist that is managed by Remix.lol. It is refreshed every
                Monday with the latest songs you and your subscribers have been
                listening to the most.
              </span>
            </div>
          </div>
          <div className="bg-light-black padding-100 width-large margin-100">
            <span className="white font-size-big">
              How do you know what music I have been enjoying lately?
            </span>
            <div className="margin-ver-100">
              <span className="white">
                We use your Spotify data to determine which songs have a high
                affinity ranking as of late and filter through that list to
                curate the playlist with the music you and your subscribers have
                been enjoying the most.
              </span>
            </div>
          </div>
          <div className="bg-light-black padding-100 width-large margin-100">
            <span className="white font-size-big">
              What is the purpose of a <span className="green">Remix</span>?
            </span>
            <div className="margin-ver-100">
              <span className="white">
                Music sharing can be a pain. Maybe you aren't in the mood for a
                given genre, or maybe you were sent a link but forgot about it.
                With Remix.lol, you are given a curated playlist that encourages
                passive sharing of music amongst your friends and family. It is
                an effortless way to share music, and not only that, but share
                music that you have really been enjoying lately.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
