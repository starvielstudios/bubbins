import "./token.css";

import "./token.css";

export default function TokenPage() {
  return (
    <main className="token-page">

      {/* FULL TOKEN BACKGROUND */}
      <img
        src="/token/token-background.png"
        alt=""
        className="token-background"
      />

      {/* CENTER BUBBINS COIN */}
      <div className="coin-position">
        <img
          src="/token/bubbins-coin.png"
          alt="Bubbins Coin"
          className="token-coin"
        />
      </div>

    </main>
  );
}