export default function ComingSoon() {
  return (
    <main className="comingSoonPage">

      <a href="/" className="returnHome">
        ← Return Home
      </a>

      <div className="comingSoonContent">

        {/* LOGO */}
        <img
          src="/bubbins-logo.png"
          alt="Bubbins"
          className="comingLogo"
        />

        {/* TAGLINE */}
        <p className="comingTagline">
          A BRIGHTER OCEAN AWAITS
        </p>

        {/* SPACE FOR THE COMING SOON SIGN */}
        <div className="comingSignSpace" />



{/* FEATURE CARDS */}
<div className="comingFeatures">

  <div className="comingFeature">
    <img
      src="/collect-coming.png"
      alt="Collect"
      className="comingFeatureImage"
    />

    <h3>Collect</h3>

    <p>
      Discover unique
      <br />
      Bubbins
    </p>
  </div>


  <div className="comingFeature">
    <img
      src="/care-coming.png"
      alt="Care"
      className="comingFeatureImage"
    />

    <h3>Care</h3>

    <p>
      Keep them happy
      <br />
      and growing
    </p>
  </div>


  <div className="comingFeature">
    <img
      src="/breed-coming.png"
      alt="Breed"
      className="comingFeatureImage"
    />

    <h3>Breed</h3>

    <p>
      Create new
      <br />
      generations
    </p>
  </div>


  <div className="comingFeature">
    <img
      src="/compass-coming.png"
      alt="Explore"
      className="comingFeatureImage"
    />

    <h3>Explore</h3>

    <p>
      Unlock new
      <br />
      adventures
    </p>
  </div>

</div>


        {/* COMING SOON BAR */}
        <div className="comingNotify">

          <div className="comingEmail">
            <span className="mailIcon">✉</span>
            <span>Coming Soon</span>
          </div>

          <button className="notifyButton" disabled>
            Notify Me →
          </button>

        </div>


        <p className="comingLaunchText">
          Be the first to know when we launch.
        </p>


        {/* SOCIAL ICONS */}
        <div className="comingSocials">

          <span>𝕏</span>
          <span>◉</span>
          <span>◎</span>
          <span>▶</span>

        </div>


        {/* FOLLOW BUTTON */}
        <div className="followUpdates">
          Follow for Updates
        </div>

      </div>

    </main>
  );
}