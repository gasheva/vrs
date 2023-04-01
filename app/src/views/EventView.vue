<template>
<the-loader v-if="loading"/>
<div v-else class="event">
  <div class="event__header header">
    <h2 class="header__title">{{event.title}}</h2>
    <div class="header__end">
      <span class="header__date">{{ date }}</span>
      <span class="header__time">{{ time }}</span>
    </div>
  </div>
    <div class="event__info info">
      <div class="info__place">
        {{event.place}}
      </div>
      <div class="info__text">
        {{event.description}}
      </div>
      <div class="info__aside">
        <div class="info__image"></div>
          <base-button text="sign up for an event" @click="isOpen = true"/>
      </div>
  </div>
  <the-modal v-if="isOpen" v-model="isOpen"
             @update:isOpen="isOpen=false"
             @sign-up="showCongratModal"
             :event="event"/>
  <congrat-modal v-if="isCongratOpen" v-model="isCongratOpen" @update:isOpen="isCongratOpen=false"/>
</div>
</template>

<script>
import {fetchEvent} from '@/services/api';
import TheLoader from '@/components/TheLoader.vue';
import BaseButton from '@/components/BaseButton.vue';
import TheModal from '@/components/SignModal.vue';
import CongratModal from '@/components/CongratModal.vue';
import {Formats, formatTime} from '@/utils/utils';

export default {
  name: "EventView",
  components: {CongratModal, TheModal, BaseButton, TheLoader},
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data(){
    return {
      event: null,
      loading: false,
      isOpen: false,
      isCongratOpen: false,
    }
  },
  computed: {
    date(){
      return this.event.startTime ? formatTime(this.event.startTime, Formats.date) : ''
    },
    time(){
      return this.event.startTime ? formatTime(this.event.startTime, Formats.time) : ''
    }
  },
  async created() {
    this.loading = true;
    await this.fetchEvent();
    this.loading = false;
  },
  methods: {
    async fetchEvent(id) {
      this.event = await fetchEvent(id);
    },
    showCongratModal(){
      this.isOpen = false;
      this.isCongratOpen = true;
    }
  }
}
</script>

<style scoped>
.event{
padding: 0 101px 0 89px;
}
.event__header {

}
.event__info {

}
.info {
  background-color: var(--color-green-pale);
  border-radius: var(--radius-1);
  display: grid;
  grid-template:  "h h"
                  "text aside";
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr auto; /*minmax(auto, 5fr);*/
  column-gap: 80px;
  row-gap: 30px;
  padding: 38px 78px 48px 68px;
}
.info__text{
  grid-area: text;
  display: flex;
  justify-content: center;
  font-size: 25px;
  line-height: 30px;
  text-align: justify;
  color: var(--color-green)
}
.info__place {
  grid-area: h;
  margin-bottom: 18px;

  color: var(--color-green);
  font-size: 35px;
  line-height: 35px;
}
.info__aside{
  grid-area: aside;
  display: flex;
  flex-direction: column;
}
.info__image {
  width: 324px;
  height: 418px;
}
.header{
  margin: 50px 0 12px 0;
  display: flex;
  font-size: 35px;
  line-height: 35px;
  color: var(--color-green)
}
.header__title{
  margin-left: 50px;

  color: black;
  font-size: 50px;
  line-height: 50px;
}

.header__end {
  margin-left: auto;
  display: flex;
}
.header__date{
  margin-right: 70px;
}
</style>