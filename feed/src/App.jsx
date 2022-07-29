import { Header } from './components/Header';

import styles from './App.module.css'
import './global.css';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

// author: {avatar_url:"", name: "", role: ""}
// publishedAt: Date
// content: String

const posts =[
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/drero.png',
      name: 'Andre Branco',
      role: 'FrontEnd @Uniasselvi'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa'},
      {type: 'paragraph', content: 'Acabei de desenvolver um projeto em React'},
      {type: 'link', content: 'anbra.com.br'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'CTO @RocketSeat'
    },
    content: [
      {type: 'paragraph', content: 'Fala Devs'},
      {type: 'paragraph', content: 'Também desenvolvi um projeto em React'},
      {type: 'link', content: 'albranco.com.br'},
    ],
    publishedAt: new Date('2022-10-03 21:00:00'),
  },
];

export function App() {

  return (
    <div>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
          <Post 
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />)
        })}
      </main>
    </div>
    </div>
  )
}
