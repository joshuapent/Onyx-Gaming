import "./Home.css";
import "../../components/NavBar/NavBar";
import "../Home/vanilla-tilt";

export default function Home() {
  return (
    <div className="home">
      <div className="paralax">
        <div className="paralax-item p-item1"></div>
        <div className="paralax-item p-item2"></div>
        <div className="paralax-item p-item3"></div>
        <div className="paralax-item p-item4"></div>
      </div>
      <div className="container">
        <div className="content-header">
          <h1>Welcome to Onyx Gaming!</h1>
          <h2>Got Game?</h2>
        </div>
        <div className="content">
          <div className="imgdiv">
            <img
              className="gamericon"
              src="https://i.imgur.com/e6gOX8t.png"
              alt="GamerCentral"
            />
            <div className="content-txt">
              <h1>It's Quick and Easy!</h1>
              <h3>
                Choose one of the games from the collection below and add it to your
                profile. You can then navigate to the "connect" page where you
                can browse through gamers with the same games looking to team-up{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
        <div className="gamecards">
          <div className="card" data-tilt>
            <img
              className="cardimg"
              src="https://i.imgur.com/izMJ3ib.jpeg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Call of Duty: Modern Warfare 2</h5>
              <p className="card-text">
                Call of Duty: Modern Warfare II is a 2022 first-person shooter
                game developed by Infinity Ward and published by Activision. It
                is a sequel to the 2019 reboot, and serves as the nineteenth
                installment in the overall Call of Duty series
              </p>
              <button>
                <a href="#" className="card-btn">
                  Add to Profile
                </a>
              </button>
            </div>
          </div>
          <div className="card" data-tilt>
            <img
              className="cardimg"
              src="https://i.imgur.com/PU9EoEz.jpeg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Fortnite</h5>
              <p className="card-text">
              A cooperative shooter-survival game for up to four players to fight off zombie-like husks, defend objects with fortifications you can build, and a battle royale mode where up to 100 players fight to be the last person standing.
              </p>
              <button>
                <a href="#" className="card-btn">
                  Add to Profile
                </a>
              </button>
            </div>
          </div>
          <div className="card" data-tilt>
            <img
              className="cardimg"
              src="https://i.imgur.com/7E7JIl8.jpeg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">NBA 2K23</h5>
              <p className="card-text">
              NBA 2K23 is a 2022 basketball video game developed by Visual Concepts and published by 2K, based on the National Basketball Association. It is the 24th installment in the NBA 2K franchise and is the successor to NBA 2K22
              </p>
              <button>
                <a href="#" className="card-btn">
                  Add to Profile
                </a>
              </button>
            </div>
          </div>
          <div className="card1" data-tilt>
            <img
              className="cardimg"
              src="https://i.imgur.com/We8DDeM.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">ADD A GAME</h5>
              <p className="card-texts">
              Don't see one of your favorite games? Don't worry! Just click the "Add Game" button to add a game to the library.
              </p>
              <div>
                <a href="#divOne" className="button1">Add Game</a>
              </div>
              <div className="overlay" id="divOne">
                <div className="wrapper1">
                  <h2>Please fill out game info</h2>
                  <a href="#" className="close">&times;</a>
                  <div className="content1">
                    <div className="container1">
                      <form>
                        <label>Game Name</label>
                        <input type="text" placeholder="Name of game" />
                        <label>Image URL</label>
                        <input type="text" placeholder="Please insert image URL" />
                        <label>Description</label>
                        <textarea placeholder="Your Query Here..."></textarea>
                        <input type="submit" value="Submit" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script type="text/javascript" src="vanilla-tilt.js"></script>
        </div>

      {window.addEventListener("scroll", function (e) {
        let s = this.scrollY;
        let w = this.outerWidth;
        let h = document.getElementsByClassName("paralax")[0].clientWidth;
        let h_b = document.getElementsByClassName("container")[0].clientWidth;
        let p = (s / h) * 100;
        let p_b = (s / h_b) * 100;
        let opas = 1 - (1 / 100) * p_b;
        let z_1 = 1 + (w / 10000) * p_b;
        document.getElementsByClassName(
          "p-item4"
        )[0].style = `transform: scale(${z_1});opacity: ${opas}`;
        let z_2 = 1 + (w / 5000000) * p;
        document.getElementsByClassName(
          "p-item1"
        )[0].style = `transform: scale(${z_2})`;
        let hr = (w / 2000) * p_b;
        let z_3 = 1 + w * 0.000005 * p_b;
        document.getElementsByClassName(
          "p-item2"
        )[0].style = `transform: translate3d(${hr}px,0,0) scale(${z_3})`;
        let hr_2 = (w / 1500) * p_b;
        let z_4 = 1 + w * 0.00001 * p_b;
        document.getElementsByClassName(
          "p-item3"
        )[0].style = `transform: translate3d(${hr_2}px,0,0) scale(${z_4})`;
      })}
      
    </div>
  );
}
