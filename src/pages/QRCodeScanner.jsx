/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../QRCodeScanner/Header';
import QRCodeImage from '../QRCodeScanner/QRCodeImage';
import ScanButton from '../QRCodeScanner/ScanButton';

function QRCodeScanner() {
  return (
    <main className="flex flex-col py-16 text-5xl font-extrabold bg-neutral-500 rounded-[79px] text-zinc-800 max-md:text-4xl">
      <Header />
      <QRCodeImage />
      <ScanButton />
    </main>
  );
}

export default QRCodeScanner;
