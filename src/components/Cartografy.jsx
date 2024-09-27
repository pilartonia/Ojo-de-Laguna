import './Cartografy.css'

const Cartografy = () => {
  return (
    <div className="secado_plantas">
      <img className="pinzas" src="/src/img/Manos y caléndula.png" alt="proceso de secar flores" />
      <h4>Estrategias para <span>cartografiar, geolocalizar y prensar</span></h4>
      <div className="card_text_2">
          <p>Plantamos y secamos flores para que permanezcan en nuestra estética</p>
          <div className="box_secado">
            <h3>Secado de plantas</h3>
          </div>
      </div>
      <div className="card_invert">
        <div className="card_text_invert">
            <p>Construimos el ecosistema que transitamos por medio del bordado</p>
            <div className="box_secado">
              <h3>Riografías del entorno</h3>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Cartografy