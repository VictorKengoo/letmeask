import '../Room/room.scss'
import logoImg from '../../assets/images/logo.svg'
import { Button } from '../../components/Button/Button'
import { RoomCode } from '../../components/RoomCode/RoomCode'
import { useParams } from 'react-router-dom'
import { Question } from '../../components/Question/Question'
import { useRoom } from '../../hooks/useRoom'

type RoomParams = {
  id: string
}

export function AdminRoom() {
  // const { user } = useAuth()
  const roomId = useParams<RoomParams>().id
  const { questions, title } = useRoom(roomId)

  return (
    <h1 id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar a sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            )
          })}
        </div>
      </main>
    </h1>
  )
}