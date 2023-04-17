import './App.css';
import { Token } from './components';

var root = document.querySelector(':root')

function App() {
  // root.computedStyleMap.setProperty

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
              <td className="light a1"><Token color={""} isKing={true} /></td>
              <td className="dark b1"></td>
              <td className="light c1"></td>
              <td className="dark d1"></td>
              <td className="light e1"></td>
              <td className="dark f1"></td>
              <td className="light g1"></td>
              <td className="dark h1"></td>
            </tr>
            <tr>
              <th>2</th>
              <td className="dark a2"></td>
              <td className="light b2"></td>
              <td className="dark c2"></td>
              <td className="light d2"></td>
              <td className="dark e2"></td>
              <td className="light f2"></td>
              <td className="dark g2"></td>
              <td className="light h2"></td>
            </tr>
            <tr>
              <th>3</th>
              <td className="light a3"></td>
              <td className="dark b3"></td>
              <td className="light c3"></td>
              <td className="dark d3"></td>
              <td className="light e3"></td>
              <td className="dark f3"></td>
              <td className="light g3"></td>
              <td className="dark h3"></td>
            </tr>
            <tr>
              <th>4</th>
              <td className="dark a4"></td>
              <td className="light b4"></td>
              <td className="dark c4"></td>
              <td className="light d4"></td>
              <td className="dark e4"></td>
              <td className="light f4"></td>
              <td className="dark g4"></td>
              <td className="light h4"></td>
            </tr>
            <tr>
              <th>5</th>
              <td className="light a5"></td>
              <td className="dark b5"></td>
              <td className="light c5"></td>
              <td className="dark d5"></td>
              <td className="light e5"></td>
              <td className="dark f5"></td>
              <td className="light g5"></td>
              <td className="dark h5"></td>
            </tr>
            <tr>
              <th>6</th>
              <td className="dark a6"></td>
              <td className="light b6"></td>
              <td className="dark c6"></td>
              <td className="light d6"></td>
              <td className="dark e6"></td>
              <td className="light f6"></td>
              <td className="dark g6"></td>
              <td className="light h6"></td>
            </tr>
            <tr>
              <th>7</th>
              <td className="light a7"><Token color='dark' isKing={false} /></td>
              <td className="dark b7"></td>
              <td className="light c7"></td>
              <td className="dark d7"></td>
              <td className="light e7"></td>
              <td className="dark f7"><Token color='dark' isKing={false} /></td>
              <td className="light g7"></td>
              <td className="dark h7"></td>
            </tr>
            <tr>
              <th>8</th>
              <td className="dark a8"></td>
              <td className="light b8"></td>
              <td className="dark c8"></td>
              <td className="light d8"></td>
              <td className="dark e8"></td>
              <td className="light f8"></td>
              <td className="dark g8"></td>
              <td className="light h8"></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
