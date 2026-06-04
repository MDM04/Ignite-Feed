import { PencilLine } from 'phosphor-react'
import capa from "../assets/ignite-capa.png"

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src= {capa} />
            <div className={styles.profile}>

                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/116397937?v=4" alt="" />
                <strong>MDM Pro</strong>
                <span>Desenvolvedor Full Stack</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}