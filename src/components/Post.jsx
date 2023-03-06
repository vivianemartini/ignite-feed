import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';
 
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post muito bacana!'
      ]);

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })
    
    function handleCrateNewComment() {
        event.preventDefault()
    
        setComments([...comments, newCommentText]);
        setNewCommentText('')
      }

      function handleNewCommentChange(){
        setNewCommentText(event.target.value);
      }

      function deleteComment(commentToDelete){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeleteOne)
      }
    

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                name='comment'
                placeholder='Deixe seu comentário'
                value={newCommentText}
                onChange={handleNewCommentChange}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
              {comments.map(comment => {
                return (
                    <Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}
                    />
                )
            })}
            </div>
        </article>
    );
  }