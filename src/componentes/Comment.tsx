import perfil from  '../assets/img/perfil3.png'
import styles from  './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content:string;
    onDeleteComment : (comment: string) => void;
}
export function Comment({content, onDeleteComment}:CommentProps){
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        });
    }
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src = { perfil } alt=''/>
            <div className= {styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Vinicius Gonçalves</strong>
                        <time title='11 de maio  às 12:13h' dateTime="2022-04-13 07:20:50">Cerca de 1h atrás </time>
                    </div>
                <button onClick={() => {
                    onDeleteComment(content)
                }}title='Deletar Comentário'>
                    <Trash size={24} />
                </button>
                </header>
                <p> {content} </p>
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