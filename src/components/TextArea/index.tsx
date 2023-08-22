import { ChangeEvent, forwardRef } from 'react';
import './index.scss'

type TextAreaProps = {
  countAllStructures: (paragraph: string) => void,
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {

  const { countAllStructures} = props
  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    countAllStructures(e.target.value)
  }
  return <textarea ref={ref } onChange={(e) => handleChange(e)} className="text-area" placeholder="Paste your text here..." />
})

export default TextArea
