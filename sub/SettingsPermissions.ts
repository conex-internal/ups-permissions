export const SettingsPermissions: Record<SettingsPermissionsIdsI, PermissionsI> = {
	//Dashboard Permissions:

	"settings:view": {
		id: "settings:view",
		name: "Settings View",
		description: "Settings View",
		requires: [],
	},
	"settings:edit": {
		id: "settings:edit",
		name: "Settings Edit",
		description: "Settings Edit",
		requires: ["settings:view"],
	},
};
export const SettingsPermissionsD = Object.values(SettingsPermissions);
