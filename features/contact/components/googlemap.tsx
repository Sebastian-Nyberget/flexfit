'use client';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 60.807502,
  lng: 11.053014
};

const GoogleMapComponent = () => {
  return (
    <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1946.0748479231324!2d11.051716877417729!3d60.80652359191502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641e11ed2aa2b19%3A0x7d0684a2db521496!2sRinggata%20235%2C%202315%20Hamar!5e0!3m2!1sno!2sno!4v1729503362175!5m2!1sno!2sno" loading="lazy"></iframe>
  );
};

export default GoogleMapComponent;
