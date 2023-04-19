import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLanguage, addLanguage, toFavorite } from "./redux/sliceLanguage"

function App() {

  const languages = useSelector(useLanguage)
  const [newLanguage, setNewLanguage] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <ul>
        {
          languages.map(language => {
            return (
              <div style={{ display: 'flex', gap: '20px', marginBottom: '10px'}}>
                <span style={{ color: language.favorite ? 'green' : 'black'}}>{language.name}</span>
                <button type='button' onClick={() => dispatch(toFavorite(language.name))}>
                  {language.favorite ? 'Remove' : 'Add'}
                </button>
              </div>
            )}
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
