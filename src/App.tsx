import * as React from 'react'
import './global.css'
import styles from './App.module.css'
import { Header } from './componentes/Header'
import { Sidebar } from './componentes/Sidebar'
import { Post } from  './componentes/Post'
import perfil2 from  '../src/assets/img/perfil2.png'
import perfil3 from '../src/assets/img/perfil3.png'
import perfil1 from  '../src/assets/img/perfil.png'


const posts = [
  {
    id:1,
    author: {
      avatarUrl: perfil1,
      name:"Douglas Batista Vilas Boas Silva",
      role: "Front-end",
    }, 
    content: [
      { type: 'paragraph', content: 'Desenvolver e fácil!' },
      { type: 'paragraph', content: 'Acabei de descobrir essa funcionalidade de fazer nada com nada!' }, 
      { type: 'link', content:'javascript' },

    ],
    publishedAt: new Date('2025-10-20 15:00:00')

  },

  {
    id:2,
    author: {
      avatarUrl:perfil2,
      name:"Vinicius Júnior",
      role: 'Back-end',
    }, 
    content: [
      { type: 'paragraph', content: 'Desenvolver e díficil!' },
      { type: 'paragraph', content: 'Acabei de descobrir essa funcionalidade de fazer os cablocos chorar' }, 
      { type: 'link', content:'nodeJs' },

    ],
    publishedAt: new Date('2025-10-29 09:00:00')

  },
]

export function App() {
  return (
     <div>
        <Header />
      
         <div className= {styles.wrapper}>
            <Sidebar />
            <main>

              {posts.map(post => {
                return(
                  <Post
                    key={post.id}
                    author={post.author}
                    content= {post.content}
                    publishedAt={post.publishedAt}
                  />
                ) 
              })}
      
            </main>

          </div>
    </div>
    
  )
}

