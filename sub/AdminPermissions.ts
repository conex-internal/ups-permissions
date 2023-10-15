export const AdminPermissions: Record<AdminPermissionsIdsI, PermissionsI> = {
	// admin permissions
	"admin:activity_logs": {
		id: "admin:activity_logs",
		name: "Activity Logs View",
		description: "Activity Logs View",
		requires: [],
	},

	//Admin Permissions:
	"admin:all": {
		id: "admin:all",
		name: "Admin All",
		description: "Admin All",
		requires: ["admin:view", "admin:create", "admin:enable", "admin:edit", "admin:delete"],
	},
	"admin:view": {
		id: "admin:view",
		name: "Admin View",
		description: "Admin View",
		requires: [],
	},
	"admin:create": {
		id: "admin:create",
		name: "Admin Create",
		description: "Admin Create",
		requires: ["admin:view"],
	},
	"admin:enable": {
		id: "admin:enable",
		name: "Admin Enable",
		description: "Admin Enable",
		requires: ["admin:view"],
	},
	"admin:edit": {
		id: "admin:edit",
		name: "Admin Edit",
		description: "Admin Edit",
		requires: ["admin:view"],
	},
	"admin:delete": {
		id: "admin:delete",
		name: "Admin Delete",
		description: "Admin Delete",
		requires: ["admin:view"],
	},
	/* admin clients */
	"admin:view_clients": {
		id: "admin:view_clients",
		name: "Admin View Clients",
		description: "Admin View Clients",
		requires: ["admin:view"],
	},
	"admin:edit_clients": {
		id: "admin:edit_clients",
		name: "Admin Edit Clients",
		description: "Admin Edit Clients",
		requires: ["admin:view_clients"],
	},
};
