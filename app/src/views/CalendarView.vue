<template>
<div class="calendar">
  <div class="icon-wrapper">
    <list-icon class="icon" @click="redirectToList"/>
  </div>
  <FullCalendar :options='calendarOptions' />
</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import {fetchEvents} from '@/services/api';
import ListIcon from '@/icons/ListIcon.vue';
export default {
  name: "CalendarView",
  components: {
    ListIcon,
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: [],
      },
      error: null,
    }
  },

  async created() {
    try{
      this.events = (await fetchEvents())?.data?.events
          ?.map(event=>({start: new Date(event.startTime), title: event.title}));
    } catch (err){
      this.error = err?.message || err
    }
  },
  methods: {
    redirectToList(){
      this.$router.push({name: 'home'})
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
  margin-bottom: 30px;
}
.icon:hover{
  cursor: pointer;
}
</style>