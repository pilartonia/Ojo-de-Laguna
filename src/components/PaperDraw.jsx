import './PaperDraw.css'

const Header = () => {
  return (
    
<>
  
      <div className="container">
        <h2>Cuando devienen obra gráfica <br/>
        <span>Naturaleza y Materia</span></h2>
        <div className="card_text">
          <p>Somos artistas interesados en experimentar y crear obras de arte junto al diseño multimedia</p>
          <div className="box_paper">
            <h3>Papel artesanal</h3>
          </div>
        </div>
        <div className="draw">
          <img className="perro" src="/src/img/Laguna-perrito.png" alt="ilustración de perro" />
          <div className="box_group">
            <div className="illustration">
              <h3>Ilustración <br/>y dibujo</h3>
            </div>
            <div className="matera">
              <h3>Casas para plantas</h3>
            </div>
          </div>
        </div>


      </div>

</>

  )
}

export default Header

