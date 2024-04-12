import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../imagenes/fam.jpg')}
        alt='Foto Familia' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Familia Sequeira Guevara en Puntarenas</p>
        <p className='cargo-testimonio'>Monton de mamaguevos</p>
        <p className='texto-testimonio'>Mobbin' like a motherfucker, stuck
          Can you put your middle finger out the window
          Gettin' fucked off liquor, gettin' loaded, can't control it
          Nigga, pass me the blunt and let me roll it
          You get the bozack to the ho-stack, that's for sure, black
          So be a mack and keep your dough fat
          And tell me, what does it take to be a G?
          I started with a quarter ounce, soon bounced to a key
          You gotta watch your back, stay strapped, be alert
          Started as a young motherfucker doin' dirt
          And now I'm in the rap game, like the crack game, I got enemies
          Can't pretend to see my friends are not my enemies </p>
      </div>
    </div>
  );
}

export default Testimonio;