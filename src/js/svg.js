/**
 * Gameforest Bootstrap Gaming Theme
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * Licensed under The GPLv3 License
 * For full copyright and license information, please see the LICENSE.md
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) yakuthemes.com (https://yakuthemes.com)
 * @link      https://yakuthemes.com
 * @since     1.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 */

const Svg = (() => {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const DATA                   = 'ya-svg'
    const DATA_KEY               = `[${DATA}]`
    const VERSION                = '1.0.0'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    class Svg {
        constructor(element) {
            this._element       = element
            this._attr          = element.getAttribute(DATA)
        }

        static get VERSION() {
            return VERSION
        }

        _get() {
            const svg = {
                awesome   : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><g><path d="M24,46A22,22,0,1,1,46,24,22.025,22.025,0,0,1,24,46Z" fill="#ffd764"/> <path d="M12,25a1,1,0,0,1-.707-1.707l6-6a1,1,0,0,1,1.414,1.414l-6,6A1,1,0,0,1,12,25Z" fill="#444"/><path d="M18,25a1,1,0,0,1-.707-.293l-6-6a1,1,0,0,1,1.414-1.414l6,6A1,1,0,0,1,18,25Z" fill="#444"/> <path d="M36,25a1,1,0,0,0,.707-1.707l-6-6a1,1,0,0,0-1.414,1.414l6,6A1,1,0,0,0,36,25Z" fill="#444"/><path d="M30,25a1,1,0,0,0,.707-.293l6-6a1,1,0,0,0-1.414-1.414l-6,6A1,1,0,0,0,30,25Z" fill="#444"/> <path d="M24,39a5,5,0,1,1,5-5A5.006,5.006,0,0,1,24,39Z" fill="#ae453e"/><ellipse cx="24" cy="37" rx="3.974" ry="2" fill="#fa645a"/></g></svg>',
                like      : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><g><path d="M24,46A22,22,0,1,1,46,24,22.025,22.025,0,0,1,24,46Z" fill="#ffd764"/> <circle cx="38" cy="28" r="3" fill="#e86c60" opacity="0.5"/> <circle cx="10" cy="28" r="3" fill="#e86c60" opacity="0.5"/> <path d="M19,24a1,1,0,0,1-1-1,2,2,0,0,0-4,0,1,1,0,0,1-2,0,4,4,0,0,1,8,0A1,1,0,0,1,19,24Z" fill="#444"/> <path d="M35,24a1,1,0,0,1-1-1,2,2,0,0,0-4,0,1,1,0,0,1-2,0,4,4,0,0,1,8,0A1,1,0,0,1,35,24Z" fill="#444"/> <path d="M24.059,39a9.025,9.025,0,0,1-7.81-4.537,1,1,0,0,1,1.736-.994,6.989,6.989,0,0,0,12.147,0,1,1,0,0,1,1.736.994A9.024,9.024,0,0,1,24.059,39Z" fill="#444"/></g></svg>',
                sick      : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><g><path d="M24,46A22,22,0,1,1,46,24,22.025,22.025,0,0,1,24,46Z" fill="#ffd764"/> <path d="M12,25a1,1,0,0,1-.448-1.895L15.764,21,11.553,18.9a1,1,0,0,1,.894-1.79l6,3a1,1,0,0,1,0,1.79l-6,3A1,1,0,0,1,12,25Z" fill="#444"/> <path d="M36,25a1,1,0,0,1-.446-.105l-6-3a1,1,0,0,1,0-1.79l6-3a1,1,0,1,1,.894,1.79L32.236,21l4.211,2.105A1,1,0,0,1,36,25Z" fill="#444"/> <path d="M40,42a3.97,3.97,0,0,0-2.666,1.04,6.978,6.978,0,0,0-11.551-1.691,5.97,5.97,0,0,0-7.283-.213,5.978,5.978,0,0,0-8.433,1.457A3.954,3.954,0,0,0,8,42a4,4,0,0,0-4,4H44A4,4,0,0,0,40,42Z" fill="#72c472"/> <circle cx="38" cy="36" r="2" fill="#72c472"/> <circle cx="11.5" cy="37.5" r="1.5" fill="#72c472"/> <path d="M14.134,30H33.866c-1.76-1.809-5.421-3-9.866-3S15.894,28.191,14.134,30Z" fill="#fff"/> <path d="M14.134,30A3.579,3.579,0,0,0,13,32.5c0,3.136,4.729,5.5,11,5.5s11-2.364,11-5.5A3.579,3.579,0,0,0,33.866,30Z" fill="#ae453e"/> <path d="M18,30V43a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V30Z" fill="#72c472"/></g></svg>',
                angry     : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><g><path d="M24,46A22,22,0,1,1,46,24,22.025,22.025,0,0,1,24,46Z" fill="#e86c60"/> <circle cx="33" cy="25" r="3" fill="#444"/> <circle cx="15" cy="25" r="3" fill="#444"/> <path d="M17.292,37a1,1,0,0,1-.745-1.667,10,10,0,0,1,14.906,0,1,1,0,1,1-1.49,1.334,8,8,0,0,0-11.926,0A1,1,0,0,1,17.292,37Z" fill="#444"/> <path d="M30,21a1,1,0,0,1-.516-1.857l5-3a1,1,0,0,1,1.03,1.714l-5,3A.994.994,0,0,1,30,21Z" fill="#444"/> <path d="M18,21a.994.994,0,0,1-.514-.143l-5-3a1,1,0,0,1,1.03-1.714l5,3A1,1,0,0,1,18,21Z" fill="#444"/></g></svg>'
            }

            if (this._attr) {
                this._element.innerHTML = svg[this._attr]
            }

            return true
        }

        // static
        static _init() {
            const data = new Svg(this)
            data._get()
        }
    }

    /**
     * ------------------------------------------------------------------------
     * Load Event
     * ------------------------------------------------------------------------
    */

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll(DATA_KEY).forEach((el) => {
            Svg._init.call(el)
        })
    })

    return Svg
})()

export default Svg
