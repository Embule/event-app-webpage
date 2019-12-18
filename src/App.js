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
          <h1>Pääkaupunkiseudun tapahtumat puhelimessasi!</h1>
          <p>Meininki on sovellus pääkaupunkiseudun tapahtumista ja aktiviteeteista. Näet tulevat tapahtumat ja aktiviteetit syötteenä tai voit hakea itsellesi sopivia joko päivämäärän tai sanahaun perusteella.</p>
          <p>Meininki-sovelluksen saat käyttöösi skannaamalla Android-puhelimellasi oheisen QR-koodin. Lataaminen vaatii Expo-mobiilisovelluksen.</p>
        </div>
        <div className="image">
          <img src={qr} alt="QR-koodi" className="qrImg" />
        </div>
      </div>
    </div>
  );
}

export default App;
