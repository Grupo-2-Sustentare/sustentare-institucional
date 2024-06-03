import styles from "./ValueCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ValueCard({ titulo, corpo, topicos }) {
    return (
        <>
            <div className={styles.valueCard}>
                <div>
                    <h4>{titulo}</h4>
                    <hr />
                </div>
                <p>{corpo}</p>
                <ul>
                    {topicos.map((x) => 
                        <li>
                            <FontAwesomeIcon icon="fa-solid fa-circle-check" className={styles.icon} />
                            {x}
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}