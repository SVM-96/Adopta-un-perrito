import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="body">
        <div className="header">
          <Header title="Adopta un perrito" />
        </div>
        <div className="card-container">
          <div className="card">
            <MyCard
              image="https://media.istockphoto.com/id/1503385646/es/foto/retrato-divertido-y-feliz-perro-cachorro-shiba-inu-asom%C3%A1ndose-detr%C3%A1s-de-una-pancarta-azul.jpg?s=612x612&w=0&k=20&c=mMZ1Dvy0J8iNpF2boWkL8bo45vYYPi_AvZ1aYr9oO8w="
              name="Max"
              description="Max es un perro macho extremadamente cariñoso y leal. Siempre está dispuesto a dar y recibir amor. Le gusta seguir a sus dueños a todas partes y disfruta de momentos de juego y afecto. Max demuestra su cariño de diversas maneras, desde dar lamidas hasta acurrucarse en busca de mimos. Es un compañero leal y afectuoso."
              texto="Adoptame"
              bgcolor="primary"
            />
          </div>
          <div className="card">
            <MyCard
              image="https://media.istockphoto.com/id/1439709160/es/foto/gal%C3%A9s-corgi-cardigan-lindo-cachorro-de-perro-esponjoso-divertidos-animales-felices-sobre-fondo.jpg?s=612x612&w=0&k=20&c=QRUP-AGEOxlAAiSlbkn1Dune-8JA87exnbgjDccO1QQ="
              name="Luna"
              description="Luna es una perrita hembra muy cariñosa y afectuosa. Siempre busca la atención y el cariño de sus dueños, disfrutando de momentos de afecto y cercanía. Le encanta estar cerca de las personas, recibir caricias y dar lamidas cariñosas. Es leal y demuestra su amor de manera tierna y juguetona."
              texto="Adoptame"
              bgcolor="success"
            />
          </div>
          <div className="card">
            <MyCard
              image="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
              name="Rocky"
              description="Rocky es un perro macho lleno de energía y afecto. Es muy cariñoso y disfruta pasar tiempo con sus dueños. Le gusta jugar y recibir caricias, y siempre está emocionado cuando hay muestras de amor y atención. Rocky es leal y siempre está dispuesto a hacer feliz a su familia con su cariño juguetón."
              texto="Adoptame"
              bgcolor="danger"
            />
          </div>
          <div className="card">
            <MyCard
              image="https://cdn.pixabay.com/photo/2016/11/01/23/38/beach-1790049_1280.jpg"
              name="Bella"
              description="Bella es una perrita dulce y cariñosa que tiene un gran afecto por sus dueños. Es conocida por su naturaleza amigable y por siempre buscar la compañía de las personas. Ama estar cerca de la familia y se muestra muy feliz cuando está rodeada de amor y atención. Bella es una compañera leal y cariñosa."
              texto="Adoptame"
              bgcolor="info"
            />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
