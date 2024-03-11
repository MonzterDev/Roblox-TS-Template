import { ProducerMiddleware, createBroadcaster } from "@rbxts/reflex";
import { Events } from "server/network";
import { slices } from "shared/store";

export function broadcasterMiddleware(): ProducerMiddleware {
	const broadcaster = createBroadcaster({
		producers: slices,
		dispatch: (player, actions) => {
			Events.reflex.dispatch(player, actions);
		},
	});

	Events.reflex.start.connect((player) => broadcaster.start(player));

	return broadcaster.middleware;
}
