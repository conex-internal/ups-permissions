export const DashboardPermissions: Record<DashboardPermissionsIdsI, PermissionsI> = {
	//Dashboard Permissions:
	"dashboard:all": {
		id: "dashboard:all",
		name: "Dashboard All",
		description: "Dashboard All",
		requires: ["dashboard:view", "dashboard:edit"],
	},
	"dashboard:view": {
		id: "dashboard:view",
		name: "Dashboard View",
		description: "Dashboard View",
		requires: [],
	},
	"dashboard:edit": {
		id: "dashboard:edit",
		name: "Dashboard Edit",
		description: "Dashboard Edit",
		requires: ["dashboard:view"],
	},
};
