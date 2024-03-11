/* eslint-disable roblox-ts/no-private-identifier */
import { OnInit, Service } from "@flamework/core";
import ProfileService from "@rbxts/profileservice";
import { Profile } from "@rbxts/profileservice/globals";
import { Players, RunService } from "@rbxts/services";
import { store } from "server/store";
import { selectPlayerBalances, selectPlayerData } from "shared/store/selectors/players";
import { PlayerData } from "shared/store/slices/players/types";
import { defaultPlayerData } from "shared/store/slices/players/utils";
import { forEveryPlayer } from "shared/utils/functions/forEveryPlayer";

let DataStoreName = "Production";
const KEY_TEMPLATE = "%d_Data";

if ( RunService.IsStudio() ) DataStoreName = "Testing";

@Service()
export class PlayerDataService implements OnInit {
	private profileStore = ProfileService.GetProfileStore(DataStoreName, defaultPlayerData);
	private profiles = new Map<Player, Profile<PlayerData>>();

	onInit() {
		forEveryPlayer(
			(player) => this.createProfile(player),
			(player) => this.removeProfile(player),
		);

		task.spawn(() => {
			while (true) {
				Players.GetPlayers().forEach((player) => store.changeBalance(tostring(player.UserId), "Coins", 1));
				task.wait(1);
			}
		});
	}

	private createProfile(player: Player) {
		const userId = player.UserId;
		const profileKey = KEY_TEMPLATE.format(userId);
		const profile = this.profileStore.LoadProfileAsync(profileKey);

		if (!profile) return player.Kick();

		profile.ListenToRelease(() => {
			this.profiles.delete(player);
			store.closePlayerData(tostring(player.UserId));
			player.Kick();
		});

		profile.AddUserId(userId);
		profile.Reconcile();

		this.profiles.set(player, profile);
		store.loadPlayerData(tostring(player.UserId), profile.Data);
		this.createLeaderstats(player);

		const unsubscribe = store.subscribe(selectPlayerData(tostring(player.UserId)), (save) => {
			if (save) profile.Data = save;
		});
		Players.PlayerRemoving.Connect((player) => {
			if (player === player) unsubscribe();
		});
	}

	private createLeaderstats(player: Player) {
		const leaderstats = new Instance("Folder", player);
		leaderstats.Name = "leaderstats";

		const coins = new Instance("NumberValue", leaderstats);
		coins.Name = "Coins";

		const gems = new Instance("NumberValue", leaderstats);
		gems.Name = "Gems";

		const unsubscribe = store.subscribe(selectPlayerBalances(tostring(player.UserId)), (save) => {
			coins.Value = save?.Coins ?? 0;
			gems.Value = save?.Gems ?? 0;
		});
		Players.PlayerRemoving.Connect((player) => {
			if (player === player) unsubscribe();
		});
	}

	private removeProfile(player: Player) {
		const profile = this.profiles.get(player);
		profile?.Release();
	}

	public getProfile(player: Player) {
		return this.profiles.get(player);
	}
}
