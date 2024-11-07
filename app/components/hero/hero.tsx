import foto from "/app/foto.jpg";

export default function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-gray-300 font-bold">CV online</h1>
      <h2 className="text-3xl">Agung Febrian</h2>
      <Profile />
      <p className="text-gray-600 text-lg mt-4">
        Saya adalah seorang Web Developer. Cita cita saya ingin menjadi Penguasa
        Dunia{" "}
      </p>
    </div>
  );
}

function Profile() {
  return <img src={foto.src} alt="Agung Febrian" className="fotoku" />;
}
