import './App.css'

function Topo(){
    return(
        <div>
            <header>
                <img width={40} className='imgPerfil' src="./public/fotoPerfil.png" />
                <span>Picui</span>
                <img width={30} className='imgTresBarras' src="./public/tres_barras.png" id='tresBarras' />
                <div className="cxTresBarras" id="cxTresBarras">
                    
                </div>
            </header>
        </div>
    )
}

export default Topo