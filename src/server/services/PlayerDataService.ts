/* eslint-disable roblox-ts/no-private-identifier */
import { OnInit, Service } from "@flamework/core";
import ProfileService from "@rbxts/profileservice";
import { Profile } from "@rbxts/profileservice/globals";
import { Players, RunService } from "@rbxts/services";
import { store } from "server/store";
import { selectPlayerSave } from "shared/store/saves/save-selector";
import { PlayerSave, defaultPlayerSave } from "shared/store/saves/save-types";
import { forEveryPlayer } from "shared/utils/functions/forEveryPlayer";

let DataStoreName = "Production";
const KEY_TEMPLATE = "%d_Data";

if ( RunService.IsStudio() ) DataStoreName = "Testing";

@Service()
export class PlayerDataService implements OnInit {
	private profileStore = ProfileService.GetProfileStore(DataStoreName, defaultPlayerSave);
	private profiles = new Map<Player, Profile<PlayerSave>>();

	onInit() {
		forEveryPlayer(
			(player) => this.createProfile(player),
			(player) => this.removeProfile(player),
		);

		task.spawn(() => {
			while (true) {
				Players.GetPlayers().forEach((player) => store.adjustPlayerCurrency(player.Name, "Coins", 1));
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
			store.deletePlayerSave(player.Name);
			player.Kick();
		});

		profile.AddUserId(userId);
		profile.Reconcile();

		this.profiles.set(player, profile);
		store.setPlayerSave(player.Name, profile.Data);
		this.createLeaderstats(player);

		const unsubscribe = store.subscribe(selectPlayerSave(player.Name), (save) => {
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

		const unsubscribe = store.subscribe(selectPlayerSave(player.Name), (save) => {
			coins.Value = save?.currency.Coins ?? 0;
			gems.Value = save?.currency.Gems ?? 0;
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
