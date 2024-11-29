// // import PublicWidget from "@web/legacy/js/public/public_widget";
// // import { rpc } from "@web/core/network/rpc";

// // export const PurchaseLineInput = PublicWidget.Widget.extend({
// //     selector: ".o-purchase-lineinput",
// //     disabledInEditableMode: true,

// //     /**
// //      * @override
// //      */
// //     start() {
// //         this.disableDateTimePicker = this.call("datetime_picker", "create", {
// //             target: this.el,
// //             onChange: (newDate) => {
// //                 const { accessToken, orderId, lineId } = this.el.dataset;
// //                 console.log(lineId)
// //                 rpc(`/my/purchase/${orderId}/update?access_token=${accessToken}`, {
// //                     [lineId]: newDate.toISODate(),
// //                 });
// //             },
// //             pickerProps: {
// //                 type: "date",
// //                 value: luxon.DateTime.fromISO(this.el.dataset.value),
// //             },
// //         }).enable();
// //     },
// //     /**
// //      * @override
// //      */
// //     destroy() {
// //         this.disableDateTimePicker();
// //         return this._super(...arguments);
// //     },
// // });

// // PublicWidget.registry.PurchaseLineInput = PurchaseLineInput;

// odoo.define('portal_purchase_custom.input_line', function (require) {
//     'use strict';

//     console.log("Module Loaded");

//     // var core = require('web.core');
//     // var _t = core._t;

//     // function ClickButton() {
//     //     console.log("Button clicked!");
//     // }

//     // return {
//     //     ClickButton: ClickButton,
//     // };
    
//         // var publicWidget = require('web.public.widget');
    
//         // publicWidget.registry.PurchaseDatePickerCustom = publicWidget.registry.PurchaseDatePicker.extend({
//         //     selector: '.o-purchase-lineinput',
//         //     disabledInEditableMode: true,

//         //     /**
//         //      * @override
//         //      */
//         //     start() {
//         //         this.disableDateTimePicker = this.call("datetime_picker", "create", {
//         //             target: this.el,
//         //             onChange: (newDate) => {
//         //                 const { accessToken, orderId, lineId } = this.el.dataset;
//         //                 console.log(lineId)
//         //                 rpc(`/my/purchase/${orderId}/update?access_token=${accessToken}`, {
//         //                     [lineId]: newDate.toISODate(),
//         //                 });
//         //             },
//         //             pickerProps: {
//         //                 type: "date",
//         //                 value: luxon.DateTime.fromISO(this.el.dataset.value),
//         //             },
//         //         }).enable();
//         //     },
//         //     /**
//         //      * @override
//         //      */
//         //     destroy() {
//         //         this.disableDateTimePicker();
//         //         return this._super(...arguments);
//         //     },
//         // })
    
//     });

/** @odoo-module */

import PublicWidget from "@web/legacy/js/public/public_widget";

export const ClickButtonWidget = PublicWidget.Widget.extend({
    selector: ".o-click-button", // Selektor untuk elemen target

    events: {
        "click button": "_onButtonClick", // Tangkap event klik pada tombol
    },

    /**
     * Fungsi yang dipanggil saat tombol diklik
     */
    _onButtonClick(ev) {
        // let input = document.getElementById("input-product-qty")
        ev.preventDefault(); // Cegah perilaku default
        console.log(this.el.dataset);
        console.log(this.el.value);
        // console.log(input);
    },

    /**
     * Start lifecycle method
     */
    start() {
        // Bisa digunakan untuk inisialisasi
        console.log("Widget tombol diinisialisasi.");
        return this._super(...arguments);
    },
});

// Registrasi widget ke registry Odoo
PublicWidget.registry.ClickButtonWidget = ClickButtonWidget;