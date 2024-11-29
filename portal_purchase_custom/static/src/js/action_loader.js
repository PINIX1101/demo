/** static/src/js/action_loader.js **/
import { DataInputComponent } from './data_input_component';

odoo.define('your_module_name.ActionLoader', function (require) {
    "use strict";

    const { mount } = owl;
    const AbstractAction = require('web.AbstractAction');

    const ActionLoader = AbstractAction.extend({
        start() {
            const el = document.createElement('div');
            this.el.appendChild(el);
            mount(DataInputComponent, {}, el);
            return this._super();
        },
    });

    return ActionLoader;
});
