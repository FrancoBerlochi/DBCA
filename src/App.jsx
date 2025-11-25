import ue from "./assets/vegetaUE-BUU.png";
import mui from "./assets/Goku-Manga-PNG-Image-HD-MUI.png";
import fp from "./assets/broly-fp-l.png";

const App = () => {
  return (
    <>
      <header>
        <h1 className="text-white">DRAGON BALL</h1>
      </header>
      {/* <div className="flex justify-around pt-50 card-anim w-screen h-screen"> 
      <img className="mui" src={mui} alt="goku ultra instinto dominado" />
      <img className="ue" src={ue} alt="vegeta ultra ego" />
      <img className="fp" src={fp} alt="broly full power" />
    </div>  */}
      <main className="grid grid-cols-3 mt-45 place-items-center">
        <div className="card relative z-30 bg-gradient-to-r from-[#bcb4ea] via-[#aca2cd] to-[#bcb4ea]">
          <div>
            <div className="absolute deco-1"></div>
            <div className="absolute deco-2"></div>
            <div className="absolute deco-3"></div>
            <div className="absolute deco-4"></div>
            <div className="inner-frame relative">
              <img src={mui} class="character mui" />
            </div>
            <div className="card-title">Goku Ultra Instinto</div>
          </div>
        </div>
        <div className="card relative z-30 bg-gradient-to-r from-[#bcb4ea] via-[#aca2cd] to-[#bcb4ea]">
          <div>
            <div className="absolute deco-1"></div>
            <div className="absolute deco-2"></div>
            <div className="absolute deco-3"></div>
            <div className="absolute deco-4"></div>
            <div className="inner-frame relative">
              <img src={mui} class="character mui" />
            </div>
            <div className="card-title">Goku Ultra Instinto</div>
          </div>
        </div>
        <div className="card relative z-30 bg-gradient-to-r from-[#bcb4ea] via-[#aca2cd] to-[#bcb4ea]">
          <div>
            <div className="absolute deco-1"></div>
            <div className="absolute deco-2"></div>
            <div className="absolute deco-3"></div>
            <div className="absolute deco-4"></div>
            <div className="inner-frame relative">
              <img src={mui} class="character mui" />
            </div>
            <div className="card-title">Goku Ultra Instinto</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
