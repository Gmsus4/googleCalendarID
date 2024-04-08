import './App.css'
import { data } from './data/data'

function App() {
  return (
    <>
      <h1>Keywords for the new Google Calendar</h1>
      <div className='divContainer'>
        {
          data.map(item => (
            <div key={item.name} className='dataContainer'>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <img src={`https://ssl.gstatic.com/tmly/f8944938hffheth4ew890ht4i8/flairs/xxhdpi/img_${item.name}.jpg`} alt={item.name}/>
            </div>
          ))
        }
      </div>
      <footer>
        <a className="read-the-docs">
          Click here to learn more
        </a>
      </footer>
    </>
  )
}

export default App
