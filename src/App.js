import './App.css';
import { Token } from './components';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table className="chess-board">
          <tbody>
            <tr>
              <th></th>
              <th>a</th>
              <th>b</th>
              <th>c</th>
              <th>d</th>
              <th>e</th>
              <th>f</th>
              <th>g</th>
              <th>h</th>
            </tr>
            <tr>
              <th>1</th>
              <td className="light">○</td>
              <td className="dark"></td>
              <td className="light">●</td>
              <td className="dark"></td>
              <td className="light"><Token color="" /></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
            </tr>
            <tr>
              <th>2</th>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
            </tr>
            <tr>
              <th>3</th>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
            </tr>
            <tr>
              <th>4</th>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
            </tr>
            <tr>
              <th>5</th>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
            </tr>
            <tr>
              <th>6</th>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
            </tr>
            <tr>
              <th>7</th>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
            </tr>
            <tr>
              <th>8</th>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
              <td className="dark"></td>
              <td className="light"></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
