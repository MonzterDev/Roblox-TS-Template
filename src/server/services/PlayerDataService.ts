import { OnInit, Service } from "@flamework/core";
import ProfileService from "@rbxts/profileservice";
import { Profile } from "@rbxts/profileservice/globals";
import { HttpService } from "@rbxts/services";
import { Events, Functions } from "server/network";
import { DEFAULT_PLAYER_DATA } from "shared/constants/PlayerData";
import { PlayerData, Settings } from "shared/types/PlayerData";
import { forEveryPlayer } from "shared/util/functions/forEveryPlayer";

const DATASTORE_NAME = "PlayerData";
const KEY_TEMPLATE = "%d_Data";

@Service()
export class PlayerDataService implements OnInit {
	private profileStore = ProfileService.GetProfileStore(DATASTORE_NAME, DEFAULT_PLAYER_DATA);
	private profiles = new Map<Player, Profile<PlayerData>>();

	onInit() {
		forEveryPlayer(
			(player) => this.createProfile(player),
			(player) => this.removeProfile(player),
		);

		Functions.getData.setCallback((player, data) => {
			const profile = this.profiles.get(player);
			return profile?.Data?.[data] ?? false;
		});
	}

	private createProfile(player: Player) {
		const userId = player.UserId;
		const profileKey = KEY_TEMPLATE.format(userId);
		const profile = this.profileStore.LoadProfileAsync(profileKey);

		if (!profile) return player.Kick();

		profile.ListenToRelease(() => {
			this.profiles.delete(player);
			player.Kick();
		});

		profile.AddUserId(userId);
		profile.Reconcile();

		this.profiles.set(player, profile);
		Events.updateData.fire(player, HttpService.JSONEncode(profile.Data));
	}

	private removeProfile(player: Player) {
		const profile = this.profiles.get(player);
		profile?.Release();
	}

	public getProfile(player: Player) {
		const profile = this.profiles.get(player);

		if (profile) {
			const setTaps = (value: number) => {
				profile.Data.taps = value;
				Events.updateTaps(player, value);
			};

			const adjustTaps = (value: number) => {
				const amount = profile.Data.taps + value;
				setTaps(amount);
			};

			return {
				data: profile.Data,
				setTaps: setTaps,
				adjustTaps: adjustTaps,
			};
		}

		return false;
	}
}
