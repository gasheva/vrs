<template>
<div class="calendar">
  <FullCalendar :options='calendarOptions' />
</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import {fetchEvents} from '@/services/api';
export default {
  name: "CalendarView",
  components: {
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
      this.events = await fetchEvents()
          .map(event=>({start: new Date(event.startTime), title: event.title}));
    } catch (err){
      this.error = err?.message || err
    }
  }
}
</script>

<style scoped>
.calendar {
  margin: 90px;
}
</style>