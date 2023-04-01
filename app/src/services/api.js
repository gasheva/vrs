import axios from 'axios';

const service = axios.create({
    baseURL: process.env.VUE_APP_SERVER_API
});

export async function fetchEvents(params){
    // const resp = await service.get('/events');

    return [{
        "id": 0,
        "title": "День числа Пи2",
        "description": "День Пи... Ну... День Пи есть день Пи",
        "place": "Студенческий дворец культуры",
        "organizers": "Мех-мат ПГНИУ",
        "startTime": "2023-03-14T14:00:00.000Z",
        "endTime": "2023-03-14T16:00:00.000Z",
        "isRegistrationOpen": true,
    },
        {
            "id": 1,
            "title": "День числа Пи",
            "description": "День Пи... Ну... День Пи есть день Пи",
            "place": "Студенческий дворец культуры",
            "organizers": "Мех-мат ПГНИУ",
            "startTime": "2023-03-14T14:00:00.000Z",
            "endTime": "2023-03-14T16:00:00.000Z",
            "isRegistrationOpen": true,
        },
        {
            "id": 2,
            "title": "День числа Пи",
            "description": "День Пи... Ну... День Пи есть день Пи",
            "place": "Студенческий дворец культуры",
            "organizers": "Мех-мат ПГНИУ",
            "startTime": "2023-03-14T14:00:00.000Z",
            "endTime": "2023-03-14T16:00:00.000Z",
            "isRegistrationOpen": true,
        },
        {
            "id": 3,
            "title": "День числа Пи",
            "description": "День Пи... Ну... День Пи есть день Пи",
            "place": "Студенческий дворец культуры",
            "organizers": "Мех-мат ПГНИУ",
            "startTime": "2023-03-14T14:00:00.000Z",
            "endTime": "2023-03-14T16:00:00.000Z",
            "isRegistrationOpen": true,
        },
        {
            "id": 4,
            "title": "День числа Пи",
            "description": "День Пи... Ну... День Пи есть день Пи",
            "place": "Студенческий дворец культуры",
            "organizers": "Мех-мат ПГНИУ",
            "startTime": "2023-03-14T14:00:00.000Z",
            "endTime": "2023-03-14T16:00:00.000Z",
            "isRegistrationOpen": true,
        },
        {
            "id": 5,
            "title": "День числа Пи",
            "description": "День Пи... Ну... День Пи есть день Пи",
            "place": "Студенческий дворец культуры",
            "organizers": "Мех-мат ПГНИУ",
            "startTime": "2023-03-14T14:00:00.000Z",
            "endTime": "2023-03-14T16:00:00.000Z",
            "isRegistrationOpen": true,
        },
        {
            "id": 6,
            "title": "День числа Пи",
            "description": "День Пи... Ну... День Пи есть день Пи",
            "place": "Студенческий дворец культуры",
            "organizers": "Мех-мат ПГНИУ",
            "startTime": "2023-03-14T14:00:00.000Z",
            "endTime": "2023-03-14T16:00:00.000Z",
            "isRegistrationOpen": true,
        },
        {
            "id": 7,
            "title": "День числа Пи",
            "description": "День Пи... Ну... День Пи есть день Пи",
            "place": "Студенческий дворец культуры",
            "organizers": "Мех-мат ПГНИУ",
            "startTime": "2023-03-14T14:00:00.000Z",
            "endTime": "2023-03-14T16:00:00.000Z",
            "isRegistrationOpen": true,
        },
        {
            "id": 8,
            "title": "День числа Пи",
            "description": "День Пи... Ну... День Пи есть день Пи",
            "place": "Студенческий дворец культуры",
            "organizers": "Мех-мат ПГНИУ",
            "startTime": "2023-03-14T14:00:00.000Z",
            "endTime": "2023-03-14T16:00:00.000Z",
            "isRegistrationOpen": true,
        },
        {
            "id": 9,
            "title": "День числа Пи",
            "description": "День Пи... Ну... День Пи есть день Пи",
            "place": "Студенческий дворец культуры",
            "organizers": "Мех-мат ПГНИУ",
            "startTime": "2023-03-14T14:00:00.000Z",
            "endTime": "2023-03-14T16:00:00.000Z",
            "isRegistrationOpen": true,
        },
        {
            "id": 10,
            "title": "День числа Пи",
            "description": "День Пи... Ну... День Пи есть день Пи",
            "place": "Студенческий дворец культуры",
            "organizers": "Мех-мат ПГНИУ",
            "startTime": "2023-03-14T14:00:00.000Z",
            "endTime": "2023-03-14T16:00:00.000Z",
            "isRegistrationOpen": true,
        },
        {
            "id": 11,
            "title": "День числа Пи",
            "description": "Last День Пи... Ну... День Пи есть день Пи",
            "place": "Студенческий дворец культуры",
            "organizers": "Мех-мат ПГНИУ",
            "startTime": "2023-03-14T14:00:00.000Z",
            "endTime": "2023-03-14T16:00:00.000Z",
            "isRegistrationOpen": true,
        },
    ]
}

export async function fetchEvent(id){
    // const resp = await service.get('/events');

    return {
        "id": 0,
        "title": "День числа Пи",
        "description": ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus asperiores aspernatur deleniti eius et explicabo facilis, id illo illum incidunt laboriosam laudantium molestiae mollitia nam natus nisi nobis officia optio provident repellat rerum sunt suscipit tempore totam vitae voluptates!",
        "place": "Студенческий дворец культуры",
        "organizers": "Мех-мат ПГНИУ",
        "startTime": "2023-03-14T14:00:00.000Z",
        "endTime": "2023-03-14T16:00:00.000Z",
        "isRegistrationOpen": true,
    }
}

export async function signUpForEvent(params){

}