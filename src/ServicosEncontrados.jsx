import './App.css'

function ServicosEncontrados(){
    return(
        <div>
            <section className="servicosEncontrados">
                <div className="turismo">
                        <span>
                            Conheça sobre os
                            <br /> pontos turísticos
                            <br /> da cidade.
                        </span>
                    <div className="divImg">
                        <img src="public/paisagem(4).jpeg" alt="kkkkkk" />
                    </div>
                </div>
                <div className="academias">
                    <span>Academias</span>
                </div>
                <div className="supermercados">
                    <span>Supermercados</span>
                </div>
                <div className="sorveterias">
                    <span>Sorveterias</span>
                </div>
                <div className="lanchonetes">
                    <span>Lanchonetes</span>
                </div>
            </section>
        </div>
    )
}

export default ServicosEncontrados