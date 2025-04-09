
import './App.css'
import Compo from './components/ex-1/Compo'
import LightDarkMode from './components/ex-2/LightDarkMode'
import Todo from './components/ex-3/Todo'

function App() {
  return (
    <div className='container mx-auto max-w-4xl'>
      {/* <h1 className='text-red-600'>Hello</h1> */}
      {/* <Compo name = "Rahul" email = "2nK3W@example.com" age = {20}/> */}
      {/* <LightDarkMode /> */}
      <Todo />
    </div>
  )
}

export default App
