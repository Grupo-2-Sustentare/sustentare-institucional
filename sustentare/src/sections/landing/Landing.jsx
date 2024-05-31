import styles from "./Landing.module.css"
import telefone from "../../assets/cellphone.png"

export default function Landing() {
    return (
        <>
            <section className={styles.landing}>
                <div>
                    <div>
                        <h1>Tecnologia de ponta, na palma das suas mãos.</h1>
                        <p>
                            De projetos simples a complexos, a Sustentare te ajuda
                            a solucionar problemas e a tornar seus projetos realidade.
                        </p>
                        <button>Nosso email</button>
                    </div>
                    <div>
                        <img src={telefone}/>
                    </div>
                </div>
            </section>
        </>
    )
}