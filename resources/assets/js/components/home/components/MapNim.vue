<template>
  <div id="map" style="height:400px"></div>
</template>

<script>
import L from "leaflet";
export default {
  name: "MapNim",
  mounted() {
    var mymap = L.map("map").setView([34.0248922, 51.4901517], 16);
    var icon = new L.Icon.Default();
    icon.options.shadowSize = [0, 0];
    var marker = L.marker([34.0248922, 51.4901517],{icon : icon}).addTo(mymap);
    marker.bindPopup("<b>شرکت نیم رخ بافت</b>").openPopup();
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 15
    }).addTo(mymap);
  }
};
</script>

<style>
.leaflet-popup-content {
  margin: 13px 4px;
  font-family: iranyekan;
  width: 96px;
}
</style>
