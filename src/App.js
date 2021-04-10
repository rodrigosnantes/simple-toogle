import './App.css';

export default function App() {

  const toogleMenu = () => {
    const menuToggle = document.querySelector('.toogle');
    menuToggle.classList.toggle('active');
  }

  return (
    <div className="App">
         <div
            className="toogle"
            onClick={toogleMenu}>
        </div>
    </div>
  );
}
