
type Props = {
  onCounter: () => void
}

const ClickCounter = (props: Props) => {
  return (
    <div>
      <button onClick={props.onCounter}>Count</button>
    </div>
  )
}

export default ClickCounter