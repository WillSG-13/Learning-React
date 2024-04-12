import './App.css';
import Testimonio from './componentes/Testimonio';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Esto es lo que dice esta gente que deja sus reseñas </h1>
        <Testimonio
          nombre='Familia SG'
          pais='Costa Rica'
          imagen='fam'
          cargo='Mamahuevos'
          empresa='Casa'
          alt='Foto familia'
          testimonio='Mobbin like a motherfucker, stuck
          Can you put your middle finger out the window
          Gettin fucked off liquor, gettin loaded, cant control it
          Nigga, pass me the blunt and let me roll it
          You get the bozack to the ho-stack, thats for sure, black
          So be a mack and keep your dough fat
          And tell me, what does it take to be a G?
          I started with a quarter ounce, soon bounced to a key
          You gotta watch your back, stay strapped, be alert
          Started as a young motherfucker doin dirt
          And now Im in the rap game, like the crack game, I got enemies
          Cant pretend to see my friends are not my enemies'/>
           <Testimonio
          alt='foto sacha'
          nombre='Sacha'
          pais='Costa Rica'
          imagen='sacha'
          cargo='Perra Necia'
          empresa='Casa '
          testimonio='Mobbin like a motherfucker'/>
           <Testimonio
          nombre='Choque'
          alt='foto choque'
          pais='Costa Rica'
          imagen='choque'
          cargo='La doña'
          empresa='Calle '
          testimonio='esta doña pego el carro contra un peaje'/>
      </div>
    </div>
  );
}

export default App;
