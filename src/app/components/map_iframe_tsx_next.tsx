import React from "react";

type MapProvider = "google" | "osm";

type Props = {
  /** adresse en texte (ex: "Abidjan, Côte d'Ivoire") */
  address?: string;
  /** latitude (prioritaire sur address si fourni) */
  lat?: number;
  /** longitude (prioritaire sur address si fourni) */
  lng?: number;
  /** niveau de zoom (Google: 0-21, OSM: ~0-18) */
  zoom?: number;
  /** fournisseur de cartes */
  mapProvider?: MapProvider;
  /** hauteur de l'iframe (ex: "400px" ou "50vh") */
  height?: string;
  /** classes supplémentaires (Tailwind friendly) */
  className?: string;
  allowFullScreen?: boolean;
  loading?: "lazy" | "eager";
};

/**
 * MapIframe
 * Composant Next.js/React qui affiche une carte via <iframe>.
 * - Supporte Google Maps (sans clé API) et OpenStreetMap.
 * - Si lat/lng fournis, ils sont prioritaires sur `address`.
 */
export default function MapIframe({
  address,
  lat,
  lng,
  zoom = 12,
  mapProvider = "google",
  height = "700px",
  className = "",
  allowFullScreen = true,
  loading = "lazy",
}: Props) {
  // Build src selon provider
  const buildGoogleSrc = () => {
    if (typeof lat === "number" && typeof lng === "number") {
      return `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
    }
    if (address) {
      return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=${zoom}&output=embed`;
    }

    // Si rien fourni, afficher Abidjan par défaut
    return `https://maps.google.com/maps?q=Abidjan,+C%C3%B4te%20d'Ivoire&z=${zoom}&output=embed`;
  };

  const buildOsmSrc = () => {
    if (typeof lat === "number" && typeof lng === "number") {
      const deltaLng = 0.02;
      const deltaLat = 0.01;
      const left = lng - deltaLng;
      const right = lng + deltaLng;
      const top = lat + deltaLat;
      const bottom = lat - deltaLat;
      return `https://www.openstreetmap.org/export/embed.html?bbox=${left},${bottom},${right},${top}&layer=mapnik&marker=${lat},${lng}`;
    }

    if (address) {
      return `https://www.openstreetmap.org/search?query=${encodeURIComponent(address)}#map=${zoom}`;
    }

    return `https://www.openstreetmap.org/#map=${zoom}/5.0/0.0`;
  };

  const src = mapProvider === "osm" ? buildOsmSrc() : buildGoogleSrc();

  const title = `Carte — ${
    typeof address === "string" ? address : typeof lat === "number" && typeof lng === "number" ? `${lat}, ${lng}` : "Localisation"
  }`;

  return (
    <div className={`w-full overflow-hidden rounded-xl shadow-sm ${className}`}>
      <iframe
        title={title}
        src={src}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen={allowFullScreen}
        loading={loading}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

/* -------------------------- Exemple d'utilisation --------------------------

// 1) Google Maps avec latitude/longitude
<MapIframe lat={5.3453} lng={-4.0123} zoom={13} height="50vh" />

// 2) Google Maps avec address
<MapIframe address="Abidjan, Côte d'Ivoire" zoom={12} />

// 3) OpenStreetMap
<MapIframe mapProvider="osm" lat={5.3453} lng={-4.0123} zoom={13} />

Notes:
- Ici on n'utilise **pas de clé API** Google.
- Pour une intégration plus avancée (markers multiples, interactions), utilisez une librairie comme @react-google-maps/api ou react-leaflet pour OSM.

*/
