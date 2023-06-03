import './App.css'
import { BiTrash } from 'react-icons/bi'



function App() {

  return (
    <>
      <div style={{backgroundColor:'white',borderRadius:30,padding:10}}>
        <div className='header'>
          <h1>Encontre <span style={{ color: '#864293' }}>Boris</span> no local de partida</h1>
          <b>Chega em 3 minutos (800 metros)</b>
        </div>

        <div className="container">

          <div>

            <div className="user-photo">
              <img src="image 3770.png" alt="" />
            </div>

            <div className="car-photo">
              <img src="image 3769.png" alt="" />
            </div>
          </div>


          <div className="car-model">
            <h3>BCD0D19</h3>
            <p>Honda Civic Roxo</p>
          </div>

        </div>


        <div className="input-area">
          <input placeholder="Enviar mensagem para Boris..." type="text" />

          <div className="button-group">
            <button>Publicar</button>
            <div>
              <img src="Vector (1).svg" alt="" />
            </div>
            <div>
              <img src="Vector.svg" alt="" />
            </div>
          </div>

        </div>


        <div className="user-info">
          <img src="Rectangle 4234.png" alt="" />
          <p>Boris estou no local já lhe esperando. estou com camisa azul e calça jeans</p>
          <BiTrash />
        </div>

        <div className="user-info">
          <img src="image 3770 (1).png" alt="" />
          <p>Acabei de lhe ver. Vou estacionar o carro próximo.</p>
          <BiTrash />
        </div>
      </div>

    </>
  )
}

export default App
