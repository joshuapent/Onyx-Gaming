import "./Home.css";
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
            <img src="https://i.imgur.com/e6gOX8t.png" alt="GamerCentral" srcset="" />
          </div>
        </div>
      </div>
    );
  }