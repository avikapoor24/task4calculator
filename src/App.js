import "./App.css";
import React from "react";
function App() {
  const display = document.querySelector("#display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((item) => {
    item.onclick = () => {
      if (item.id === "clear") {
        display.innerText = "";
      } else if (item.id === "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
      } else if (display.innerText !== "" && item.id === "equal") {
        display.innerText = eval(display.innerText);
      } else if (display.innerText === "" && item.id === "equal") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      } else {
        display.innerText += item.id;
      }
    };
  });
  
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
  let isDark = true;
  themeToggleBtn.onclick = (dark) => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};
  
  return (
    <div className='container'>
        <div className='calculator dark'>
            <div className='theme-toggler active'>
                <i class='toggler-icon'></i> 
            </div>
            <div className='display-screen'>
                <div id='display'></div>
            </div>
          <div className='buttons'>
            <table>
            
                    <tr>
                        <td><button className='btn-operator' id="clear">C</button></td>
                        <td><button className= 'btn-operator' id="/">&divide;</button></td>
                        <td><button className='btn-operator' id="*">&times;</button></td>
                        <td><button className='btn-operator' id="backspace"> BS </button></td>
                    </tr>
                    <tr>
                        <td><button className='btn-number' id="7">7</button></td>
                        <td><button className='btn-number' id="8">8</button></td>
                        <td><button className='btn-number' id="9">9</button></td>
                        <td><button className='btn-operator' id="-">-</button></td>
                    </tr>
                    <tr>
                        <td><button className='btn-number' id="4">4</button></td>
                        <td><button className='btn-number' id="5">5</button></td>
                        <td><button className='btn-number' id="6">6</button></td>
                        <td><button className='btn-operator' id="+">+</button></td>
                    </tr>
                    <tr>
                        <td><button className='btn-number' id="1">1</button></td>
                        <td><button className='btn-number' id="2">2</button></td>
                        <td><button className='btn-number' id="3">3</button></td>
                        <td rowspan="2"><button className='btn-equal' id="equal">=</button></td>
                    </tr>
                    <tr>
                        <td><button className='btn-operator' id="(">(</button></td>
                        <td><button className='btn-number' id="0">0</button></td>
                        <td><button className='btn-operator' id=")">)</button></td>
                    </tr>
                
          </table>
            </div>
        </div>
    </div>
  );
};

export default App;
