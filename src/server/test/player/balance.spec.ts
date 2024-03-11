import { store } from "server/store"
import { selectPlayerBalance, selectPlayerBalances } from "shared/store/selectors/players"
import { defaultPlayerData } from "shared/store/slices/players/utils"
import { resetStore } from "../utils/resetStore"

export = () => {
    const playerId = tostring( "TEST" )

    it( "should have balances", () => {
        store.loadPlayerData( playerId, defaultPlayerData )
        store.flush()
        const balances = store.getState( selectPlayerBalances( playerId ) )
        expect( balances ).to.be.ok()
    } )

    it( "should have 0 coins", () => {
        const coins = store.getState( selectPlayerBalance( playerId, "Coins" ) )
        expect( coins ).to.equal( 0 )
    } )

    it( "should have 5 coins", () => {
        store.changeBalance( playerId, "Coins", 5 )
        const coins = store.getState( selectPlayerBalance( playerId, "Coins" ) )
        expect( coins ).to.equal( 5 )
    } )

    it( "should have 1 balance", () => {
        store.changeBalance( playerId, "Coins", -4 )
        const coins = store.getState( selectPlayerBalance( playerId, "Coins" ) )
        expect( coins ).to.equal( 1 )
    } )

    resetStore()
}
