import styles from "./Team.module.css"
import TeamMemberCard from "../../components/TeamMemberCard"
import team from "../../assets/team.json"

export default function Team() {
    return (
        <>
            <section className={styles.team}>
                <div>
                    <h3>Sobre nós</h3>
                    <hr />
                    <div className={styles.teamMembers}>
                        {team.map(
                            (x) =>
                            <TeamMemberCard
                                nome={x.nome}
                                funcao={x.funcao}
                                linkedin={x.linkedin}
                                github={x.github}
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}