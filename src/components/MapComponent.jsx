import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// حل مشكلة أيقونات Marker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapComponent({
  center = [51.5045, -0.0899],
  zoom = 13,
  height = "55vh",
}) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{
        height: height,
        width: "65%",
        borderRadius: "5px",
        alignSelf: "center",
        marginBottom: "2rem",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={center}>
        <Popup>
          <b className="font-[Roboto-Slab] text-xl">
            Archi Carpenter Workshop
          </b>
          <br />
          <span className="font-[Roboto-Slab]">
            18 Timberyard Lane, London SE1, UK
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
