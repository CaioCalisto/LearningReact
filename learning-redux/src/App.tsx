import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLanguage, addLanguage } from "./redux/sliceLanguage"

function App() {

  const languages = useSelector(useLanguage)
  const [newLanguage, setNewLanguage] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <ul>
        {
          languages.map(language =>
            <li>{language.name}</li>
          )
        }
      </ul>
      <div>
        <input 
          type="text" 
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
        />
        <button type="button" onClick={() => dispatch(addLanguage(newLanguage))}>Add</button>
      </div>
    </div>
  )
}

export default App
