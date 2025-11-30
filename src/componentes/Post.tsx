import * as React from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import  { ptBR }  from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState, type FormEvent, type ChangeEvent, type InvalidEvent } from 'react'


interface Author {
    name:string,
    role: string,
    avatarUrl:string
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;

}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({author, publishedAt, content}: PostProps){
   const [comments, setComments] = useState(['Teste'])
   const [newCommentText, setNewCommentText] =  useState('')
   
    const publishedDateFormatted = format(publishedAt, " d 'de' MMMM 'ás' H:mm'h' ", {
        locale: ptBR,
    })

    const publishedDateRelativeNow = formatDistanceToNow (publishedAt, {
        locale:ptBR,
        addSuffix: true

    })
        function handleCreateNewComment(event:FormEvent<HTMLFormElement>){
            event.preventDefault()
            const formData = new FormData(event.currentTarget);
            const newCommentText = formData.get('comment') as string;
            setComments([...comments, newCommentText]);
            setNewCommentText('');
        }
        function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
            
            event.target.setCustomValidity('Esse campo é obrigátorio')
        }

        function handleNewCommentChange (event:ChangeEvent<HTMLTextAreaElement>) {
           event.target.setCustomValidity('')
            setNewCommentText(event.target.value)
            
        }
        function deleteComment(commentToDelete: string) {
           setComments(prevState =>  prevState.filter(item => item !== commentToDelete))
        }
        const isNewCommentEmpty = newCommentText.length === 0
    return (
        <article className={styles.post}>
        <header>
            <div className={styles.author}>
               <Avatar src = { author.avatarUrl } />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>

                </div>
            </div>
            <time title={ publishedDateFormatted } dateTime={publishedAt.toISOString()} > 
                {publishedDateRelativeNow}
            </time>

        </header>
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link'){
                        return <p key={line.content}><a href='#'>{line.content} </a> </p>
                    }
                })}

            </div>
            
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required

                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>

                </footer>
            </form> 

            <div className={styles.CommentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content = {comment} 
                            onDeleteComment={() => deleteComment(comment)}
                        />
                    )
                })}
            </div>
        
        </article>

    )
} 