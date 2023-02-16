<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button href="/tabs/tab1" tab="tab1">
          <ion-icon :icon="image"/>
          <ion-label>Photos</ion-label>
        </ion-tab-button>

        <ion-tab-button href="/tabs/tab2" tab="tab2">
          <ion-icon :icon="map"/>
          <ion-label>Maps</ion-label>
        </ion-tab-button>

        <ion-tab-button href="/tabs/tab3" tab="tab3">
          <ion-icon :icon="square"/>
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts" setup>
import {IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/vue';
import {image, map, square} from 'ionicons/icons';</script>
