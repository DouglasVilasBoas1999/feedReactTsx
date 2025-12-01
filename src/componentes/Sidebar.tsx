import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import perfil from  '../assets/img/perfil.png'
import { Avatar } from './Avatar'


export function Sidebar() {
    return(
        <aside className={ styles.sidebar }> 
            <img className={ styles.cover } 
            src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=50&w=500'/>

            
            <div className={styles.avatar}>
                <Avatar src= { perfil } />
                <strong>Douglas Vilas Boas</strong>
                <span>Front-end</span>
            </div>

        <footer>
            <a href='#'>
                < PencilLine size={20}/>
                Editar o Perfil
            </a>
        </footer>
       
        </aside>
    )
}




