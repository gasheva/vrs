import {computed, ref} from 'vue';

const DEFAULT_AMOUNT_ON_PAGE = 10;

export function usePagination() {
    const pageCount = ref(1);
    const displayingItems = ref([]);
    const currentPage = ref(1);
    let items = [];
    let amountOnPage;

    const increasePage = () => {
        if (currentPage.value === pageCount.value) {
            console.warn('[Paginator] Max page');
            return;
        }
        currentPage.value += 1;
    };
    const decreasePage = () => {
        if (currentPage.value === 1) {
            console.warn('[Paginator] Min page');
            return;
        }
        currentPage.value -= 1;
    };
    const sliceDisplayingItems = (items, currentPage, amountOnPage) => {
        const start = (currentPage - 1) * amountOnPage;
        const end = (currentPage - 1) * amountOnPage + amountOnPage;
        return items.slice(start, end);
    };

    const next = () => {
        increasePage();
        displayingItems.value = sliceDisplayingItems(items, currentPage.value, amountOnPage);
    };
    const prev = () => {
        decreasePage();
        displayingItems.value = sliceDisplayingItems(items, currentPage.value, amountOnPage);
    };
    const onPage = (page) => {
        currentPage.value = page;
        if (page <= 0) currentPage.value = 1;
        if (page >= pageCount.value) currentPage.value = pageCount.value;
        displayingItems.value = sliceDisplayingItems(items, currentPage.value, amountOnPage);
    };
    const onFirst = () => {
        currentPage.value = 1;
        displayingItems.value = sliceDisplayingItems(items, currentPage.value, amountOnPage);
    };
    const onLast = () => {
        currentPage.value = pageCount.value;
        displayingItems.value = sliceDisplayingItems(items, currentPage.value, amountOnPage);
    };

    const setup = (_items = [], _amountOnPage = DEFAULT_AMOUNT_ON_PAGE) => {
        amountOnPage = _amountOnPage;
        items = _items;

        pageCount.value = Math.ceil(items.length / amountOnPage);
        if(pageCount.value===0){
            pageCount.value = 1;
        }
        displayingItems.value = sliceDisplayingItems(_items, currentPage.value, amountOnPage);
    };

    const isLast = computed(() => currentPage.value === pageCount.value);
    const isFirst = computed(() => currentPage.value === 1);
    return {
        pageCount,
        currentPage,
        displayingItems,
        setup,
        next,
        prev,
        onPage,
        onFirst,
        onLast,
        isLast,
        isFirst,
    };
}
