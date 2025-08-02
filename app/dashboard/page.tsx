export default function DashboardPage() {
  const prospect = {
    name: "MediRide LLC",
    size: 45,
    revenue: 8_200_000,
    timeSaved: "12 h/semaine",
    roi: "4 000 $/mois",
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Bienvenue {prospect.name}</h1>
      <p>Taille de la flotte : {prospect.size} véhicules</p>
      <p>CA estimé : ${prospect.revenue.toLocaleString()}</p>
      <p>Temps économisé : {prospect.timeSaved}</p>
      <p>ROI estimé : {prospect.roi}/mois</p>
      <a
        href="https://calendly.com/<your-name>/15min"
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded"
      >
        Réserver une démo
      </a>
    </main>
  );
}
