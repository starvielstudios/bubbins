"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>

     {/* =====================================================
                    HERO
====================================================== */}

<section className="hero">

<nav className="navbar">
  <div className="navInner">

    <a href="/" className="logo">
      <img src="/bubbins-logo.png" alt="Bubbins" />
    </a>

    <div className="navLinks">
      <a href="/">Home</a>
      <a href="/whitelist">Whitelist</a>
    </div>

    <a href="/coming-soon" className="playNav">
      Play Now →
    </a>

  </div>
</nav>


        <div className="heroContent">
          <div className="heroCopy">

            <h1>
              Collect. Care.
              <br />
              Breed.
              <br />
              Explore. Earn.
            </h1>

            <p>
              Bubbins is a next-generation aquarium game on Solana.
              Collect unique fish, care for them, breed new generations,
              explore a vibrant ocean world, and earn rewards in a
              player-driven ecosystem.
            </p>

            <div className="heroButtons">
              <a href="/coming-soon" className="yellowButton">
                Play Now →
              </a>

              <a href="/coming-soon" className="blueOutlineButton">
                ◆ View Fish Packs
              </a>
            </div>


            <div className="heroTrust">

              <div className="trustItem">
                <img src="/leaf-icon.png" alt="Solana" />
                <span>
                  Built on
                  <br />
                  Solana
                </span>
              </div>

              <div className="trustItem">
                <img src="/people-icon.png" alt="Player Owned" />
                <span>
                  Player
                  <br />
                  Owned
                </span>
              </div>

              <div className="trustItem">
                <img src="/shield-icon.png" alt="Safe and Transparent" />
                <span>
                  Safe &amp;
                  <br />
                  Transparent
                </span>
              </div>

              <div className="trustItem">
                <img src="/heart-icon.png" alt="Healthier Ocean" />
                <span>
                  A Healthier,
                  <br />
                  Brighter Ocean
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>



      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="howSection" id="how">
        <div className="howInner">

          <div className="howIntro">
            <p className="eyebrow">HOW IT WORKS</p>

            <h2>
              From a Tiny
              <br />
              Fish to a
              <br />
              Thriving Ocean
            </h2>

            <p className="howDescription">
              A simple and fun journey with endless possibilities.
              Collect, care, breed, explore and earn as you grow your
              aquarium and make a positive impact in the Bubbins world.
            </p>

            <a href="/coming-soon" className="howLearnButton">
              Learn More →
            </a>
          </div>


          <div className="stepsGrid">

            <div className="stepCard">
              <div className="stepNumber blueNumber">1</div>

              <img
                src="/fish-step.png"
                alt="Collect"
                className="stepIcon"
              />

              <h3>Collect</h3>

              <p>
                Open fish packs and discover unique Bubbins.
              </p>
            </div>


            <div className="stepArrow">→</div>


            <div className="stepCard">
              <div className="stepNumber greenNumber">2</div>

              <img
                src="/leaf-step.png"
                alt="Care"
                className="stepIcon"
              />

              <h3>Care</h3>

              <p>
                Keep your fish happy, fed and growing stronger.
              </p>
            </div>


            <div className="stepArrow">→</div>


            <div className="stepCard">
              <div className="stepNumber pinkNumber">3</div>

              <img
                src="/heart-step.png"
                alt="Breed"
                className="stepIcon"
              />

              <h3>Breed</h3>

              <p>
                Combine Bubbins to create new generations.
              </p>
            </div>


            <div className="stepArrow">→</div>


            <div className="stepCard">
              <div className="stepNumber blueNumber">4</div>

              <img
                src="/compass-step.png"
                alt="Explore"
                className="stepIcon"
              />

              <h3>Explore</h3>

              <p>
                Send Bubbins on ocean adventures and discover rewards.
              </p>
            </div>


            <div className="stepArrow">→</div>


            <div className="stepCard">
              <div className="stepNumber goldNumber">5</div>

              <img
                src="/coin-step.png"
                alt="Earn"
                className="stepIcon"
              />

              <h3>Earn</h3>

              <p>
                Complete activities and earn tokens and valuable items.
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* =====================================================
          RARITY LADDER
      ====================================================== */}

      <section className="raritySection">

        <div className="sectionHeading">
          <div>
            <p className="eyebrow">RARITY LADDER</p>
            <h2>Every Bubbins is Special</h2>
          </div>

          <p>
            From common to mythic. Collect and breed them all!
          </p>
        </div>


        <div className="rarityGrid">

          <div className="rarityCard">
            <div className="rarityPicture" />
            <strong>Common</strong>
          </div>

          <div className="rarityCard">
            <div className="rarityPicture" />
            <strong>Uncommon</strong>
          </div>

          <div className="rarityCard">
            <div className="rarityPicture" />
            <strong>Rare</strong>
          </div>

          <div className="rarityCard">
            <div className="rarityPicture" />
            <strong>Super Rare</strong>
          </div>

          <div className="rarityCard">
            <div className="rarityPicture" />
            <strong>Epic</strong>
          </div>

          <div className="rarityCard">
            <div className="rarityPicture" />
            <strong>Legendary</strong>
          </div>

          <div className="rarityCard">
            <div className="rarityPicture" />
            <strong>Exotic</strong>
          </div>

          <div className="rarityCard">
            <div className="rarityPicture" />
            <strong>Mythic</strong>
          </div>

        </div>
      </section>



      {/* =====================================================
          GAME FEATURES
      ====================================================== */}

      <section className="featuresSection" id="features">

        <div className="sectionHeading">

          <div>
            <p className="eyebrow">GAME FEATURES</p>

            <h2>
              More Ways to Play, More Ways to Earn
            </h2>
          </div>

          <p>
            Fun, rewarding, and a brighter ocean for everyone.
          </p>

        </div>


        <div className="featuresGrid">

          <div className="featureCard">

            <img
              src="/fish-packs.png"
              alt="Bubbins Fish Packs"
            />

            <h3>Fish Packs</h3>

            <p>
              Open themed packs to discover new Bubbins with unique traits.
            </p>

            <a href="/coming-soon">
              View Fish Packs →
            </a>

          </div>


          <div className="featureCard">

            <img
              src="/breeding.png"
              alt="Bubbins Breeding"
            />

            <h3>Breeding</h3>

            <p>
              Combine Bubbins to create new generations and rare traits.
            </p>

            <a href="/coming-soon">
              Learn About Breeding →
            </a>

          </div>


          <div className="featureCard">

            <img
              src="/marketplace.png"
              alt="Bubbins Marketplace"
            />

            <h3>Marketplace</h3>

            <p>
              Buy, sell and trade Bubbins with players worldwide.
            </p>

            <a href="/coming-soon">
              Visit Marketplace →
            </a>

          </div>


          <div className="featureCard">

            <img
              src="/token-economy.png"
              alt="Bubbins Token Economy"
            />

            <h3>Token Economy</h3>

            <p>
              Powered by $BBT. Play, earn and be part of the Bubbins economy.
            </p>

            <a href="/coming-soon">
              Learn About Token →
            </a>

          </div>

        </div>
      </section>



      {/* =====================================================
          ABOUT BUBBINS
      ====================================================== */}

      <section className="aboutSection" id="about">

        <div className="aboutCopy">

          <p className="eyebrow">ABOUT BUBBINS</p>

          <h2>
            A Brighter Ocean,
            <br />
            Together
          </h2>

          <p>
            Bubbins is more than a game — it&apos;s a growing community
            on Solana built around fun, creativity, collecting,
            ownership and a vibrant underwater world.
          </p>

          <a
            href="/coming-soon"
            className="blueSmallButton"
          >
            Our Story →
          </a>

        </div>


        <div className="aboutValues">

          <div className="value">

            <img
              src="/people-about.png"
              alt="Community"
              className="valueIcon"
            />

            <strong>
              A Growing Community
            </strong>

            <small>
              Players from around the world.
            </small>

          </div>


          <div className="value">

            <img
              src="/coin-step.png"
              alt="Ownership"
              className="valueIcon"
            />

            <strong>
              Real Ownership
            </strong>

            <small>
              Your fish, your rewards.
            </small>

          </div>


          <div className="value">

            <img
              src="/controller-about.png"
              alt="Play and Earn"
              className="valueIcon"
            />

            <strong>
              Play &amp; Earn
            </strong>

            <small>
              Fun that has real value.
            </small>

          </div>


          <div className="value">

            <img
              src="/leaf-about.png"
              alt="Kinder Ocean Future"
              className="valueIcon"
            />

            <strong>
              A Kinder Ocean Future
            </strong>

            <small>
              Play, earn and help oceans thrive.
            </small>

          </div>

        </div>
      </section>



      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="ctaSection">

        <div className="ctaContent">

          <h2>
            Ready to Start Your Bubbins
            <br />
            Journey?
          </h2>

          <p>
            Dive into a vibrant ocean world. Collect, care,
            breed, explore and earn today!
          </p>

          <a
            href="/coming-soon"
            className="yellowButton"
          >
            Play Now →
          </a>

        </div>
      </section>



      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="faqSection" id="faq">

        <p className="eyebrow">FAQ</p>

        <h2>
          Frequently Asked Questions
        </h2>


        <div className="faqGrid">

          {/* FAQ 1 */}
          <div
            className={`faqCard ${
              openFaq === 0 ? "open" : ""
            }`}
          >

            <button
              type="button"
              className="faqQuestion"
              onClick={() =>
                setOpenFaq(
                  openFaq === 0 ? null : 0
                )
              }
            >

              <span>
                What is Bubbins?
              </span>

              <span className="faqIcon">
                {openFaq === 0 ? "×" : "+"}
              </span>

            </button>


            {openFaq === 0 && (
              <div className="faqAnswer">
                Bubbins is an aquarium game where players
                collect, care for, breed and explore with
                unique fish.
              </div>
            )}

          </div>


          {/* FAQ 2 */}
          <div
            className={`faqCard ${
              openFaq === 1 ? "open" : ""
            }`}
          >

            <button
              type="button"
              className="faqQuestion"
              onClick={() =>
                setOpenFaq(
                  openFaq === 1 ? null : 1
                )
              }
            >

              <span>
                How do Fish Packs work?
              </span>

              <span className="faqIcon">
                {openFaq === 1 ? "×" : "+"}
              </span>

            </button>


            {openFaq === 1 && (
              <div className="faqAnswer">
                Fish Packs let players discover Bubbins
                with different appearances, traits and rarities.
              </div>
            )}

          </div>


          {/* FAQ 3 */}
          <div
            className={`faqCard ${
              openFaq === 2 ? "open" : ""
            }`}
          >

            <button
              type="button"
              className="faqQuestion"
              onClick={() =>
                setOpenFaq(
                  openFaq === 2 ? null : 2
                )
              }
            >

              <span>
                Can Bubbins be bred?
              </span>

              <span className="faqIcon">
                {openFaq === 2 ? "×" : "+"}
              </span>

            </button>


            {openFaq === 2 && (
              <div className="faqAnswer">
                Yes. Breeding allows players to create
                new generations and discover combinations
                of traits.
              </div>
            )}

          </div>

        </div>
      </section>



      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">

        <div className="footerInner">

          <div className="footerLogo">
            <strong>Bubbins</strong>

            <span>
              A brighter ocean awaits.
            </span>
          </div>


          <div className="footerLinks">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#how">How It Works</a>
            <a href="#features">Fish Packs</a>
            <a href="/coming-soon">Marketplace</a>
            <a href="#faq">FAQ</a>
          </div>

        </div>
      </footer>

    </main>
  );
}