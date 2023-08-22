import './index.scss'
import { MyResultType } from '../../App'

type ResultProps = {
  resultBar: Array<MyResultType>,
}

const ResultBox = (props : ResultProps) => {

  const { resultBar } = props

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
