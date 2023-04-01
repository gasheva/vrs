<template>
<div class="home">
  <div class="menu">
    <div class="menu__input">
      <input type="text"
                v-model="searchVal"
                placeholder="Search"
                class="input">
    </div>
    <span class="menu__calendar">
      <calendar-icon @click="redirectToCalendar"/>
    </span>
  </div>

  <the-loader v-if="loading"/>
  <section v-else>
    <the-error v-if="error"/>
    <div class="events" v-else>
      <event-list-item class="events__item" v-for="event in events" :key="event.id" :event="event"/>
    </div>
  </section>
</div>
</template>

<script>
import CalendarIcon from '@/icons/CalendarIcon.vue';
import EventListItem from '@/components/EventListItem.vue';
import {fetchEvents} from '@/services/api';
import TheError from '@/components/TheError.vue';
import debounce from 'lodash.debounce'
import TheLoader from '@/components/TheLoader.vue';
export default {
  name: "HomeView",
  components: {TheLoader, TheError, EventListItem, CalendarIcon},

  data() {
    return {
      searchVal: '',
      events: '',
      error: null,
      loading: '',
    }
  },

  watch: {
    searchVal: {
      immediate: true,
      handler: debounce(async function () {
        this.loading = true;
        await this.fetchEvents({filter:{text: this.searchVal}});
        this.loading = false;
      }, 300),
    }
  },

  methods: {
    redirectToCalendar(){
      this.$router.push({name: 'calendar'})
    },
    async fetchEvents(params) {
      this.events = await fetchEvents(params);
    }
  }
}
</script>

<style scoped>
.home {
  margin: 0 var(--margin-right) 0 var(--margin-left);
}
.menu{
  display: flex;
  margin: 10px 0 25px 0;
}
.menu__calendar{
  flex: 1;
  display: inline-block;
  width: 93px;
  height: 93px;
}
.menu__input{
  flex: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input {
  width: 963px;
  height: 52px;
  padding-left: 10px;
  font-size: 32px;
  background-color: var(--color-green-pale);
}
.input::placeholder{
  color: var(--color-green);
}
.events__item {
  margin-bottom: 31px;
}
</style>