/** static/src/js/data_input_component.js **/
import { Component, useState } from "@odoo/owl";
import { xml } from "@odoo/owl";
import { rpc } from "@web/core/network/rpc";

export class DataInputComponent extends Component {
    // Template untuk komponen
    static template = xml`
        <div class="data-input-component">
            <h2>Input Data</h2>
            <form t-on-submit.prevent="submitData">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" t-model="state.name" required />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" t-model="state.email" required />
                </div>
                <button type="submit">Submit</button>
            </form>
            <t t-if="submitted">
                <h3>Submitted Data:</h3>
                <p><strong>Name:</strong> <t t-esc="state.name" /></p>
                <p><strong>Email:</strong> <t t-esc="state.email" /></p>
            </t>
        </div>
    `;

    // State untuk menyimpan data input
    setup() {
        this.state = useState({
            name: "",
            email: "",
        });
        this.submitted = false; // Flag untuk menampilkan data setelah submit
    }

    // Fungsi untuk menangani submit form
    async submitData() {
        try {
            // Kirim data ke server
            const result = await rpc({
                model: "your.model.name",
                method: "create",
                args: [{
                    name: this.state.name,
                    email: this.state.email,
                }],
            });
    
            this.submitted = true;
            console.log("Data saved on server with ID:", result);
        } catch (error) {
            console.error("Error saving data:", error);
        }
    }
}
