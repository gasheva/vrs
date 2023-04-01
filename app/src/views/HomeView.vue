<template>
<div class="home">
  <div class="menu">
    <div class="menu__input">
      <input type="text"
                v-model.trim="searchVal"
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
      <event-list-item class="events__item" v-for="event in displayingItems"
                       :key="event.id"
                       :event="event"/>
    </div>
    <paginator-base
        class="messages__paginator"
        :currentPageValue="currentPage"
        :last-page="pageCount"
        @prev="prevHandler"
        @next="nextHandler"
        @openFirst="openFirstHandler"
        @openLast="openLastHandler"
        @update:currentPageValue="turnPageHandler"
    />
  </section>
</div>
</template>

<script setup>
import CalendarIcon from '@/icons/CalendarIcon.vue';
import EventListItem from '@/components/EventListItem.vue';
import {fetchEvents} from '@/services/api';
import TheError from '@/components/TheError.vue';
import debounce from 'lodash.debounce'
import TheLoader from '@/components/TheLoader.vue';
import PaginatorBase from '@/components/PaginatorBase.vue';
import {computed, onMounted, ref, watch} from 'vue';
import {usePagination} from '@/composable/pagination';
import {useRouter} from 'vue-router';

const router = useRouter();
const searchVal = ref('');
const events = ref([]);
const error = ref(null);
const loading = ref(false);
const filteredItems = ref([]);

// PAGINATOR
const {currentPage, next, prev, displayingItems, setup, pageCount, onPage, onFirst, onLast} = usePagination();
watch(filteredItems, () => {
  setup(filteredItems.value);
});

watch(searchVal, debounce(function () {
  onFirst()
  filteredItems.value = events.value.filter(item => item?.title?.toLocaleLowerCase().includes(searchVal.value.toLocaleLowerCase()) || item?.description?.toLocaleLowerCase().includes(searchVal.value.toLocaleLowerCase()))
}, 300),{immediate: true})
const prevHandler = () => {
  prev();
};
const nextHandler = () => {
  next();
};
const turnPageHandler = (_page) => {
  onPage(_page);
};
const openFirstHandler = () => {
  onFirst();
};
const openLastHandler = () => {
  onLast();
};

const redirectToCalendar=()=>{
  router.push({name: 'calendar'})
};
const getEvents = async (params) => {
  events.value = await fetchEvents(params);
  filteredItems.value = events.value;
}

onMounted(async ()=>{
  loading.value = true;
  await getEvents();
  loading.value = false;
})
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