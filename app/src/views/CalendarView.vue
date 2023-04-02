<template>
<div class="calendar">
  <div class="icon-wrapper">
    <the-error class="error" v-if="error" :error="error" color="red"/>
    <list-icon class="icon" @click="redirectToList"/>
  </div>
  <FullCalendar :options='calendarOptions'/>
</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import {fetchEvents} from '@/services/api';
import ListIcon from '@/icons/ListIcon.vue';
import TheError from '@/components/TheError.vue';
import router from '@/router';
export default {
  name: "CalendarView",
  components: {
    TheError,
    ListIcon,
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        selectable: true,
        events: [],
        eventClick: this.redirectToEvent,
      },
      error: null,
    }
  },

  async created() {
    try{
      this.calendarOptions.events = (await fetchEvents()).data?.events
          ?.map(event=>({start: new Date(event.startTime), title: event.title, id: event.id}));
    } catch (err){
      this.error = err?.message || err
    }
  },
  methods: {
    redirectToList(){
      this.$router.push({name: 'home'})
    },
    redirectToEvent(event){
      this.$router.push({name: 'event', params: {id: event.event._def.publicId}})
    }
  }
}
</script>

<style scoped>
.calendar {
  margin: 90px;
  margin-top: 10px;
}
.icon-wrapper {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 30px;
}
.icon:hover{
  cursor: pointer;
}
.error{
  margin-right: auto;
}
</style>