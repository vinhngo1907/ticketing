import { Message } from "node-nats-streaming";
import { Listener } from "./base-listener";
import { Subjects } from "./subjects";

import { TicketCreatedEvent } from "./ticket-created-event";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
    qGroupName: string = 'payments-service';

    onMessage(data: { id: string; title: string; price: number; userId: string; }, msg: Message): void {
        console.log('Event data', data);
        msg.ack();
    }
}