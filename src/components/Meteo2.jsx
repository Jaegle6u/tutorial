import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export default function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Définir la fonction asynchrone
    const fetchData = async () => {
      try {
        const response = await fetch('https://data.api.xweather.com/conditions/48.04157592920532%2C%207.134168427113806?lang=fr&client_id=Ty2BrTpHgWDbhsW7WSI3S&client_secret=nmibJ8NxoYJbrVCH2ZgQp2kSbzn571Vpz381N9B0');
        
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        
        const result = await response.json();
        setData(result); // 2. Mettre à jour l'état avec les données
      } catch (err) {
        setError(err.message); // 3. Gérer l'erreur si elle survient
      } finally {
        setLoading(false); // 4. Arrêter l'état de chargement
      }
    };

    // 5. Exécuter l'appel au montage du composant
    fetchData(); 
  }, []); // Le tableau vide [] assure que l'appel ne se fait qu'une seule fois

  // Gestion des différents états d'affichage
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      
      <p>Il fait {data.response[0].periods[0].tempC} degré à {data.response[0].place.name} et le temps est {data.response[0].periods[0].weather.toLowerCase()}</p> 
    : <p>Désolé mais il y'a un problème avec la méteo</p>
    </div>
  );
}