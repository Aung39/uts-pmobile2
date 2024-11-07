"use client";

import { useState } from "react";
export default function FavColor() {
  // useState untuk warna default
  const [warna, setwarna] = useState("Merah");
  return (
    <div className="container mx-auto p-4 text-center">
      <h1>Warna Favorit saya adalah warna {warna}</h1>
      <hr className="m-10" />
      <p>Ubah state warna ke warna:</p>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setwarna("Merah")}
      >
        Merah
      </button>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setwarna("Kuning")}
      >
        Kuning
      </button>
      <button
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setwarna("Pink")}
      >
        Pink
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setwarna("Biru")}
      >
        Biru
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setwarna("Hijau")}
      >
        Hijau
      </button>
      <button
        className="bg-purple-500 hover:bg-purple-700text-white font-bold py-2 px-4 rounded"
        onClick={() => setwarna("Ungu")}
      >
        Ungu
      </button>
    </div>
  );
}
