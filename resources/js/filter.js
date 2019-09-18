import Vue from 'vue'
var moment = require('moment');
moment().format();

Vue.filter('timeFormat', function (value) {
    if (!value) return ''
    return moment(value).format('MMMM Do YYYY');
})

Vue.filter('shortLength', function (text,length,suffix) {
    if (!text) return ''
    return text.substring(0,length)+' ' + suffix;
})