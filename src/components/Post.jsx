import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://xesque.rocketseat.dev/users/avatar/profile-45fd3c33-6ed8-43e5-a837-87565fe2feee-1674592517618.jpg" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Viviane Martini</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='Dois de Março ás 11:26h' dateTime='2023-03-02 11:26:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p> 
                    <a href=""> #novoprojeto</a> 
                    <a href=""> #nlw</a> 
                    <a href=""> #rocketseat</a>
                </p> 
            </div>
        </article>
    );
  }