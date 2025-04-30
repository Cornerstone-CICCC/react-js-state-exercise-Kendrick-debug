
type Props = {
    onLight: () => void
}

const LightToggle = ({onLight}: Props) => {
  return (
    <div>
    <button onClick={onLight}>LightToggle</button>
    </div>
  )
}

export default LightToggle