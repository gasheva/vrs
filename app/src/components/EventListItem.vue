<template>
<article class="event" @click="redirectToEvent">
  <div class="event__time">
    <div>{{date}}</div>
    <div>{{time}}</div>
  </div>
  <div class="event__info">
    <div class="event__title">{{event.title}}</div>
    <div class="event__place">{{event.place}}</div>
    <div class="event__description">{{event.description}}</div>
  </div>
</article>
</template>

<script>
import {Formats, formatTime} from '@/utils/utils';

export default {
  name: "EventListItem",
  props: {
    event: {
      type: Object,
      required: true,
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
  methods: {
    redirectToEvent(){
      this.$router.push({name: 'event', params: {id: this.event.id}})
    }
  }
}
</script>

<style scoped>
.event {
  display: flex;
  background-color: var(--color-gray-dark);
  border-radius: var(--radius-1);
  padding: 31px 38px 43px 34px;
}
.event:hover{
  cursor: pointer;
}
.event__info {
  flex: 7;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
}
.event__time{
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--color-green);
  font-size: 28px;
  line-height: 28px;
}
.event__place{
  color: var(--color-white);
  font-size: 19px;
  margin-left: auto;
}
.event__description {
  font-size: 20px;
}
.event__title{
  color: black;
  font-size: 28px;
}
</style>