export const SETTINGS = ["Play Music", "Sound Effects", "PvP"] as const;
export type Setting = (typeof SETTINGS)[number];
