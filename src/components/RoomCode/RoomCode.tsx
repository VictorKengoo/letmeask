import copyImg from '../../assets/images/copy.svg'
import './room-code.scss'

type RoomCodeProps = {
  code: string
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #-McuddJP6PT1959mkbaL</span>
    </button>
  )
}