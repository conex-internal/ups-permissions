export const AdminGlobalPermissions: Record<AdminGlobalPermissionsIdsI, PermissionsI> = {
	"admin:all": {
		id: "admin:all",
		name: "Admin All",
		description: "Admin All",
		requires: ["admin:view", "admin:create", "admin:enable", "admin:edit"],
	},
	"admin:view": {
		id: "admin:view",
		name: "Admin View",
		description: "Admin View",
		requires: [],
	},
};
export const AdminManagementPermissions: Record<AdminManagementPermissionsIdsI, PermissionsI> = {
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
	"admin:assign_clients": {
		id: "admin:assign_clients",
		name: "Admin Assign Clients",
		description: "Admin Assign Clients",
		requires: ["admin:view", "client:view"],
	},
	"admin:edit_password": {
		id: "admin:edit_password",
		name: "Admin Edit Password",
		description: "Admin Edit Password",
		requires: ["admin:view"],
	},
};
export const AdminActivitiesPermissions: Record<AdminActivitiesPermissionsIdsI, PermissionsI> = {
	"admin:activity_logs": {
		id: "admin:activity_logs",
		name: "Activity Logs View",
		description: "Activity Logs View",
		requires: [],
	},
};
export const AdminPermissions: Record<AdminPermissionsIdsI, PermissionsI> = {
	//Admin Permissions:
	...AdminGlobalPermissions,
	...AdminManagementPermissions,
	...AdminActivitiesPermissions,
};
export const AdminPermissionsD = Object.values(AdminPermissions);
export const AdminGlobalPermissionsD = Object.values(AdminGlobalPermissions);
export const AdminManagementPermissionsD = Object.values(AdminManagementPermissions);
export const AdminActivitiesPermissionsD = Object.values(AdminActivitiesPermissions);
