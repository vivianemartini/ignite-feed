import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://xesque.rocketseat.dev/users/avatar/profile-45fd3c33-6ed8-43e5-a837-87565fe2feee-1674592517618.jpg"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Viviane Martini</strong>
                            <time title='Dois de Março ás 11:26h' dateTime='2023-03-02 11:26:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}