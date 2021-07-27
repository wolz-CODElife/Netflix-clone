import React from 'react'
import Row from './Row'

const App = () => {
  return (
    <div className="App">
      <Row title={"NETFLIX Original"} />
      <Row title={"Trending Now"} />
      <Row title={"Top Rated"} />
      <Row title={"Action Movies"} />
      <Row title={"Comedy Movies"} />
    </div>
  )
}

export default App
