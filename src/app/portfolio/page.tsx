import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
               My projects
              </button>

            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">

                  <img src="/imgs/portfolio/brewlabs.png" alt="portfolio" />

                </div>
                <div className="portfolio-info">
                  <h4>-Topic<br></br>airdrop, defi, staking, ethereum, bsc, multichain <br></br>-Tech<br></br>solidity, react, node.js, typescript, microservice, express, web3</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/btmimg3.c9670c63.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>-Topic<br></br>dex, defi, staking, amm, ethereum, multichain, nft<br></br>-Tech<br></br>solidity, react, node.js, ether, typescript, microservice </h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/3.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>-Topic<br></br>Donates, defi, dex, staking, nft, multichain<br></br>-Tech<br></br> bitcoinjs,react, node.js, typescript, </h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/dalemundi.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>-Topic<br></br>real-estate,e-commerce<br></br>-Tech<br></br>next.js, node.js, typescript, express, microservice,rest-api
                  </h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/guglu.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>-Topic<br></br>real-estate,e-commerce<br></br>-Tech<br></br>next.js, node.js, typescript, express, microservice,rest-api</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/tofunft.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>-topic<br></br>gaming, p2e, defi, ethereum, bsc, multichain, nft <br></br>-Tech<br></br>solidity, next.js, node.js, typescript, express, web3</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/ordinalcouncil.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>-topic<br></br>bitcoin, brc-20, Ordinals, defi <br></br>-Tech<br></br>bitcoinjs, next.js, node.js, typescript, express, web3</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/colleage.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>-topic<br></br>gaming, p2e, marketplace, mulichain <br></br>-Tech<br></br>Rust, next.js, node.js, typescript, express, web3</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
             {/* Portfolio Item End*/}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/sideast.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>-topic<br></br>gaming, p2e, marketplace, mulichain <br></br>-Tech<br></br>solidity, next.js, node.js, typescript, express, web3</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
