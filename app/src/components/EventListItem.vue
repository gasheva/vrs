<template>
<article class="event" @click="redirectToEvent">
  <div class="event__time">{{event.startTime}}</div>
  <div class="event__info">
    <div class="event__place">{{event.place}}</div>
    <div class="event__description">{{event.description}}</div>
  </div>
</article>
</template>

<script>
export default {
  name: "EventListItem",
  props: {
    event: {
      type: Object,
      required: true,
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
  flex: 10;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
}
.event__time{
  flex: 1;
  text-align: center;
  color: var(--color-green)
}
.event__place{
  color: var(--color-white);
  font-size: 19px;
  margin-left: auto;
}
.event__description {
  font-size: 20px;
}
</style>