import App from "./App";

export function Central(){
    return(
        <section className="secaoCentral">
            <a href="">
                <div className="turismo">
                    <span>Conheça mais sobre os pontos turísticos.</span>
                    <img src="./public/paisagem(5).jpeg" />
                </div>
            </a>
            <a href="">
                <div className="academia">
                    <span></span>
                </div>
            </a>
            <a href="">
                <div className="supermercado">
                    <span>Supermercados</span>
                </div>
            </a>
            <a href="">
                <div className="sorveteria">
                    <span>Sorveterias</span>
                </div>
            </a>
            <a href="">
                <div className="lanchonete">
                    <span>Lanchonetes</span>
                </div>
            </a>
        </section>
    )
}