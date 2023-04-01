export const Formats = Object.freeze({
  date: 0,
  time: 1,
})
export function formatTime(value, format = Formats.date, locale='en-En') {
    let options = {};

    if(format === Formats.date){
        options = {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }
    }
    if(format === Formats.time){
        options.hour = '2-digit';
        options.minute = '2-digit';
    }
    return new Intl.DateTimeFormat(locale, options)
.format(new Date(value));
}