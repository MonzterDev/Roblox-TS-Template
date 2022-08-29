// This was created because of what seems to be an issue on Flamework's Netowrking?
// https://discord.com/channels/476080952636997633/1012815033559949412/1012815033559949412
/** Used to enable type inferencing on certain objects when networking */
export function isA<T> ( object: any ): object is T {
    return true
}
