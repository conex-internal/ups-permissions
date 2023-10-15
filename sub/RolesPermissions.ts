export const RolesPermissions: Record<RolesPermissionsIdsI, PermissionsI> = {
	//Roles Permissions:
	"role:all": {
		id: "role:all",
		name: "Role All",
		description: "Role All",
		requires: ["role:view", "role:assign", "role:view-all", "role:create", "role:edit", "role:delete"],
	},
	"role:view": {
		id: "role:view",
		name: "Role View",
		description: "Role View",
		requires: [],
	},
	"role:assign": {
		id: "role:assign",
		name: "Role Assign",
		description: "Role Assign",
		requires: ["role:view"],
	},
	"role:view-all": {
		id: "role:view-all",
		name: "Role View All",
		description: "Role View All",
		requires: ["role:view"],
	},
	"role:create": {
		id: "role:create",
		name: "Role Create",
		description: "Role Create",
		requires: ["role:view"],
	},
	"role:edit": {
		id: "role:edit",
		name: "Role Edit",
		description: "Role Edit",
		requires: ["role:view"],
	},
	"role:delete": {
		id: "role:delete",
		name: "Role Delete",
		description: "Role Delete",
		requires: ["role:view"],
	},
};
