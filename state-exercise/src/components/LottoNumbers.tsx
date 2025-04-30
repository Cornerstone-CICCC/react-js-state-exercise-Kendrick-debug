type Props = {
  randomNumber: () => void
}

const LottoNumbers = (props: Props) => {
  return (
    <div>
      <button onClick={props.randomNumber}>Generate Randome Lotto Numbers</button>
    </div>
  )
}

export default LottoNumbers