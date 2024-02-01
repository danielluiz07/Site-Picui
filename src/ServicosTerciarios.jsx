import './App.css'

function servicosTerciarios(){
    return(
        <div>
            <section className="servicos-terciarios">
                <a href="src/Gastronomia.jsx">
                    <div className="gastronomia">
                        <img className='imgGastronomia' src="./public/restaurante-removebg-preview.png" />
                    </div>
                </a>
                <a href="src/Hospedagem.jsx">
                    <div className='hospedagem'>
                        <img className='imgHospedagem' src="./public/hospedagem-removebg-preview.png" />
                    </div>
                </a>
                <a href="src/Saude.jsx">
                    <div className='saude'>
                        <img className='imgSaude' src="./public/saude.png" />
                    </div>
                </a>
            </section>
        </div>
    )
}

export default servicosTerciarios