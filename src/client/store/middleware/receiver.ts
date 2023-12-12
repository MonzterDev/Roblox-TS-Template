import { ProducerMiddleware, createBroadcastReceiver } from "@rbxts/reflex";
import { Events } from "client/network";

export function receiverMiddleware(): ProducerMiddleware {
	const receiver = createBroadcastReceiver({
		start: () => {
			Events.start.fire();
		},
	});

	Events.dispatch.connect((actions) => receiver.dispatch(actions));

	return receiver.middleware;
}
