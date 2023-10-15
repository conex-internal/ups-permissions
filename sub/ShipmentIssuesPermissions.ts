export const ShipmentIssuesPermissions: Record<ShipmentIssuesPermissionsIdsI, PermissionsI> = {
	//Issue Permissions:
	"issue:all": {
		id: "issue:all",
		name: "Issue All",
		description: "Issue All",
		requires: ["issue:view", "issue:create", "issue:edit", "issue:delete"],
	},
	"issue:view": {
		id: "issue:view",
		name: "Issue View",
		description: "Issue View",
		requires: [],
	},
	"issue:create": {
		id: "issue:create",
		name: "Issue Create",
		description: "Issue Create",
		requires: ["issue:view"],
	},
	"issue:edit": {
		id: "issue:edit",
		name: "Issue Edit",
		description: "Issue Edit",
		requires: ["issue:view"],
	},
	"issue:delete": {
		id: "issue:delete",
		name: "Issue Delete",
		description: "Issue Delete",
		requires: ["issue:view"],
	},
};
