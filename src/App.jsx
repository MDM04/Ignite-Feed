import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";
export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="MDM Pro"
            content="Desenvolvedor Full Stack"
          />
          <Post
            author="Ellen Barbosa"
            content="Farmaceutica"
          />
        </main>
      </div>
    </>)
}

