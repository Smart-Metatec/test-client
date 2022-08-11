import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from 'styled-components';
import { Provider } from "react-redux"
import store from "./store"

let theme = {
  colors: {
    green: "#9ecd16",
    orange: "#ff4400",
    lightBlue: "#0567e1",
    darkBlue: "#051456",
    opacity(color, opacity){
      let themeColor
      switch(color){
        case "green":
            themeColor = this.green
            break
        case "orange":
            themeColor = this.orange
            break
        case "lightBlue":
            themeColor = this.lightBlue
            break
        case "darkBlue":
            themeColor = this.darkBlue
            break
        default:
          themeColor = "#9ecd16"
      }

      return themeColor + opacity
    }
  }
}

ReactDOM.render(
  <React.StrictMode> 
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
