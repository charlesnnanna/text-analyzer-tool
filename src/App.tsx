import { useCallback, useEffect, useRef, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

export interface MyResultType {
  title: string
  value: number
}

const regExp = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/g

const App = () => {
  const ref = useRef<HTMLTextAreaElement | null>(null)

  const [resultBar, setResultBar] = useState<MyResultType[]>([
    {
      title: 'Words',
      value: 0,
    },
    {
      title: 'Characters',
      value: 0,
    },
    {
      title: 'Sentences',
      value: 0,
    },
    {
      title: 'Paragraphs ',
      value: 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ])

  const countAllStructures = useCallback((paragraph: string): void => {
    const arrOfCharacters = paragraph ? paragraph.split('') : []
    const results = [...resultBar]
    const characterIndex = results.findIndex((item) => item.title === 'Characters')
    results[characterIndex] = { title: 'Characters', value: arrOfCharacters.length }

    const arrOfWords = paragraph ? paragraph.trim().split(' ') : []
    const wordIndex = results.findIndex((item) => item.title === 'Words')
    results[wordIndex] = { title: 'Words', value: arrOfWords.length }


    const arrOfSpecial = paragraph ?  paragraph.match(regExp) : []
    const sentenceIndex = results.findIndex((item) => item.title === 'Sentences')
    results[sentenceIndex] = { title: 'Sentences', value: 0}

    console.log(paragraph.match(regExp))

    setResultBar([...results])
  }, [])

  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [ref])
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox resultBar={resultBar} />
          <TextArea
            ref={ref}
            countAllStructures={countAllStructures}
          />
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
