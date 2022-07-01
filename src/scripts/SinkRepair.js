import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"


export const SinkRepair = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
        ${ServiceForm()}
    </section>
    <section class="serviceRequests">
    <h2>Service Requests</h2>
    <div class="header1"><p class="header1">Description</p>
        <p class="header1">Completed By${Requests()}</p></div>
    </section>

    `
}

