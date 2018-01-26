// eslint-disable-next-line
import './scroll'; // https://github.com/alvarotrigo/fullPage.js/issues/2442
// eslint-disable-next-line
import 'fullpage.js';
import '../css/index.scss';

// https://github.com/alvarotrigo/fullPage.js/issues/2371
$(document).ready(() => {
    $('#fullpage').fullpage({
        scrollOverflow: true,
    });
});
