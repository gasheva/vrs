import axios from 'axios';

const service = axios.create({
    baseURL: process.env.VUE_APP_SERVER_API
});

export async function fetchEvents(params){
    return service.get('/events');
}

export async function fetchEvent(id){
    return service.get(`/events/${id}`);
}

export async function subscribeToEvent(params, id){
    return service.post(`/events/${id}/subscribe`, params);
}

export function checkSubscription(id){
    return service.get(`/events/${id}/checkSubscription`);
}
export function unsubscribe(id){
    return service.post(`/events/${id}/unsubscribe`);
}