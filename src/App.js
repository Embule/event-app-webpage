import React from 'react';
import './App.css';
import meininki from './Meininki.png';
import qr from './qr.png';

function App() {
  return (
    <div className="App">
      <div id="logo">
      <img src={meininki} alt="Meinkinki logo" id="meininki" />
      </div>
      <div className="box">
        <div className="text">
          <h1>Lue QR-koodi</h1>
          <p>Skannaa Android-puhelimellasi tämän QR-koodin Expo-mobiilisovelluksella ladataksesi projektin.</p>
          <p><b>ENEMMÄN TIETOA APPISTA??</b></p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum, quam aliquam perspiciatis aspernatur id quos sunt in assumenda. Dolorem iure possimus quidem labore magni quod nisi nesciunt ducimus maxime.</p>
        </div>
        <div className="image">
          <img src={qr} alt="QR-koodi" className="qrImg" />
        </div>
      </div>
    </div>
  );
}

export default App;
