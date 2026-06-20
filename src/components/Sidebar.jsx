import { PencilLine } from 'phosphor-react'
import capa from "../assets/ignite-capa.png"

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={capa} />
            <div className={styles.profile}>

                <Avatar src="https://github.com/mdm04.png" />
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