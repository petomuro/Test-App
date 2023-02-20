<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Google Maps</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content id="map" :fullscreen="true">
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {useGoogleMaps} from "@/composables/useGoogleMaps";
import {onMounted} from "vue";

const {initMap} = useGoogleMaps()

onMounted(initMap);
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>