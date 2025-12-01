import perfil from  '../assets/img/perfil2.png'
import styles from  './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment(props){
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src = { perfil } />
            
            <div className= {styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Vinicius Gonçalves</strong>
                        <time title='11 de maio  às 12:13h' datatime="2022-04-13 07:20:50">Cerca de 1h atrás </time>
                    </div>
                <button onClick={() => {
                    props.onDeleteComment()
                }}title='Deletar Comentário'>
                    <Trash size={24} />
                </button>
                
                </header>
                <p> {props.content} </p>
            </div>
            <footer>
                <button onClick={handleLikeComment} title='Aplaudir' >
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
            </div>
        </div>
    )
}