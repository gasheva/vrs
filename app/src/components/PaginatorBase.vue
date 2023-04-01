<template>
  <div class="paginator">
    <button class="paginator__button"
            :class="{'paginator__button--disabled':isFirst}"
            :disabled="isFirst"
            @click.prevent="openFirstHandler">
      <span class="paginator__icon">&lt;&lt;</span>
    </button>
    <button class="paginator__button"
            :class="{'paginator__button--disabled':isFirst}"
            :disabled="isFirst"
            @click.prevent="prevHandler">
      <span class="paginator__icon">&lt;</span>
    </button>
    <div class="input">
            <span class="input__wrapper">
                <span class="input__width-setter" aria-hidden="true">_{{ currentPage }}_</span>
                <input class="input__input"
                       ref="inputRef"
                       v-model.trim.lazy="currentPage">
            </span>
      <span class="paginator__label">{{ ' / ' + lastPage }}</span>
    </div>
    <button class="paginator__button rotate-180"
            :class="{'paginator__button--disabled':isLast}"
            :disabled="isLast"
            @click.prevent="nextHandler">
      <span class="paginator__icon">&lt;</span>
    </button>
    <button class="paginator__button rotate-180"
            :class="{'paginator__button--disabled':isLast}"
            :disabled="isLast"
            @click.prevent="openLastHandler">
      <span class="paginator__icon">&lt;&lt;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PaginatorBase'
};
</script>
<script setup>

import {computed, ref, watch} from 'vue';

const props = defineProps({
  currentPageValue: {type: Number, default: 1},
  lastPage: {type: Number, default: 1},
});
const emit = defineEmits(['prev', 'next', 'update:currentPageValue', 'openFirst', 'openLast']);

const prevHandler = () => {
  emit('prev');
};
const nextHandler = () => {
  emit('next');
};

const openFirstHandler = () => {
  emit('openFirst');
};
const openLastHandler = () => {
  emit('openLast');
};

const $_setInputValue = (val) => {
  inputRef.value.value = val;
};
const inputRef = ref({});
const currentPage = computed({
  get() {
    return props.currentPageValue;
  },
  set(val) {
    if (!val) return;
    const valNumber = Number(val);
    if (!valNumber) {
      $_setInputValue(props.currentPageValue);
      return;
    }
    if (checkMoreThanLast(valNumber)) {
      $_setInputValue(props.lastPage);
      emit('update:currentPageValue', props.lastPage);
      return;
    }
    if (checkLessThanFirst(valNumber)) {
      $_setInputValue(1);
      emit('update:currentPageValue', 1);
      return;
    }
    emit('update:currentPageValue', Number(val));
  }
});
const isLast = computed(() => props.currentPageValue === props.lastPage);
const isFirst = computed(() => props.currentPageValue === 1);

const checkMoreThanLast = (_page) => _page > props.lastPage;
const checkLessThanFirst = (_page) => _page < 1;

</script>

<style scoped>
.paginator {
  display: flex;
  gap: 0.5rem;
}

.paginator__button{
   position: relative;
   height: 19px;
 }

.paginator__button + .paginator__button{
   margin-left: .25rem;
 }

.input {
  font-size: 15px;
}

.input__wrapper {
  position: relative;
  font-size: 15px;
}

.input__input {
  position: absolute;
  width: 100%;
  left: 0;
  font-size: 20px;
  line-height: 1rem;
  text-align: end;
}

.input__width-setter {
  font-size: 20px;
  line-height: 1rem;
}

.paginator__label {
   padding-right: 13px;
   font-size: 20px;
 }

.paginator__icon{
   display: inline-block;
   height: 19px;
 }

.rotate-180{
  transform: rotate(180deg);
}
</style>
<style>
.paginator__button--disabled path{
  stroke: var(--color-gray-dark);
}
</style>