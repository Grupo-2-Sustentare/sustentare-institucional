import styles from "./Values.module.css"
import values from "../../assets/values.json"
import ValueCard from "../../components/ValueCard"

export default function Values() {
    return (
        <>
            <section id="values" className={styles.values}>
                <h3>Nossos valores</h3>
                <hr />
                <p>
                    Temos sede por resolução de problemas. Existimos para tornar os avanços tecnológicos mais acessíveis, práticos.
                </p>
                <div>
                    {values.map(
                        (x) =>
                            <ValueCard
                                titulo={x.titulo}
                                corpo={x.corpo}
                                topicos={x.topicos}
                            />
                    )}
                </div>
            </section>
        </>
    )
}