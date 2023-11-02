export const AdsGlobalPermissions: Record<AdsGlobalPermissionsIdsI, PermissionsI> = {
	"ads:all": {
		id: "ads:all",
		name: "Ads All",
		description: "Ads All",
		requires: ["ads:view", "ads:create", "ads:edit"],
	},
	"ads:view": {
		id: "ads:view",
		name: "Ads View",
		description: "Ads View",
		requires: [],
	},
};
export const AdsManagementPermissions: Record<AdsManagementPermissionsIdsI, PermissionsI> = {
	"ads:create": {
		id: "ads:create",
		name: "Ads Create",
		description: "Ads Create",
		requires: ["ads:view"],
	},
	"ads:edit": {
		id: "ads:edit",
		name: "Ads Edit",
		description: "Ads Edit",
		requires: ["ads:view"],
	},
	"ads:archive": {
		id: "ads:archive",
		name: "Ads Archive",
		description: "Ads Archive",
		requires: ["ads:view"],
	},
};

export const AdsPermissions: Record<AdsPermissionsIdsI, PermissionsI> = {
	// Ads Permissions:
	...AdsGlobalPermissions,
	...AdsManagementPermissions,
};
export const AdsPermissionsD = Object.values(AdsPermissions);
export const AdsGlobalPermissionsD = Object.values(AdsGlobalPermissions);
export const AdsManagementPermissionsD = Object.values(AdsManagementPermissions);
