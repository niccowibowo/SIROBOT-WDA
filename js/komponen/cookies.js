
(function () {
    'use strict';

    // Panggil komponen cookies
    fetch('cookies.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Gagal memuat cookies');
            }

            return response.text();
        })
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);

            initCookies();
        })
        .catch(error => console.error(error));

    function initCookies() {
        const banner = document.getElementById('cookie-banner');
        const accept = document.getElementById('cookie-accept');
        const reject = document.getElementById('cookie-reject');

        function getCookie(name) {
            const item = document.cookie
                .split('; ')
                .find(row => row.startsWith(name + '='));

            return item ? item.split('=').slice(1).join('=') : null;
        }

        function setCookie(value) {
            document.cookie =
                `cookie_consent=${value}; Max-Age=${180 * 86400}; Path=/; SameSite=Lax` +
                (location.protocol === 'https:' ? '; Secure' : '');
        }

        // Periksa persetujuan
        if (getCookie('cookie_consent') !== null) {
            banner.hidden = true;
        }

        accept.addEventListener('click', function () {
            setCookie('accepted');
            banner.hidden = true;
        });

        reject.addEventListener('click', function () {
            setCookie('rejected');
            banner.hidden = true;
        });
    }
})();
