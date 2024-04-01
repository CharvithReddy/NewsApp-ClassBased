import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  pageSize = 6;
  state = {
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <div>
                  <Navbar />
                  <LoadingBar color='#f11946' progress={this.state.progress}/>
                  <News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category ="general" />
                 </div>
      },
      {
        path: "/business",
        element: <div>
                  <Navbar />
                  <LoadingBar color='#f11946' progress={this.state.progress}/>
                  <News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category ="business" />
                 </div>
      },
      {
        path: "/entertainment",
        element: <div>
                  <Navbar />
                  <LoadingBar color='#f11946' progress={this.state.progress}/>
                  <News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category ="entertainment" />
                 </div>
      },
      {
        path: "/health",
        element: <div>
                  <Navbar />
                  <LoadingBar color='#f11946' progress={this.state.progress}/>
                  <News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category ="health" />
                 </div>
      },
      {
        path: "/sports",
        element: <div>
                  <Navbar />
                  <LoadingBar color='#f11946' progress={this.state.progress}/>
                  <News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category ="sports" />
                 </div>
      },
      {
        path: "/technology",
        element: <div>
                  <Navbar />
                  <LoadingBar color='#f11946' progress={this.state.progress}/>
                  <News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category ="technology" />
                 </div>
      }
    ])
  
    return (
      <>
       <RouterProvider router={router} />
      </>
    );
  }
}

export default App
