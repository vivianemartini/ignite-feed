import "./global.css";
import styles from "./App.module.css";

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Viviane Martini"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Sed voluptas accusamus suscipit, laboriosam aperiam voluptatum veritatis? 
            Aliquam, iusto accusamus laudantium, doloribus amet, sint maiores temporibus repudiandae quaerat saepe aliquid ipsum!"
          />
          <Post author="Miguel" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
