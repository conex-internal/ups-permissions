export const DeliveryPermissions: Record<DeliveryPermissionsIdsI, PermissionsI> = {
	// Delivery man Permissions:
	"delivery:all": {
		id: "delivery:all",
		name: "Delivery All",
		description: "Delivery All",
		requires: ["delivery:view", "delivery:create", "delivery:enable", "delivery:edit", "delivery:delete"],
	},
	"delivery:view": {
		id: "delivery:view",
		name: "Delivery View",
		description: "Delivery View",
		requires: [],
	},
	"delivery:create": {
		id: "delivery:create",
		name: "Delivery Create",
		description: "Delivery Create",
		requires: ["delivery:view"],
	},
	"delivery:enable": {
		id: "delivery:enable",
		name: "Delivery Enable",
		description: "Delivery Enable",
		requires: ["delivery:view"],
	},
	"delivery:edit": {
		id: "delivery:edit",
		name: "Delivery Edit",
		description: "Delivery Edit",
		requires: ["delivery:view"],
	},
	"delivery:delete": {
		id: "delivery:delete",
		name: "Delivery Delete",
		description: "Delivery Delete",
		requires: ["delivery:view"],
	},
	"delivery:assign": {
		id: "delivery:assign",
		name: "Delivery Assign",
		description: "Delivery Assign",
		requires: ["delivery:view"],
	},
	"delivery:unassign": {
		id: "delivery:unassign",
		name: "Delivery Unassign",
		description: "Delivery Unassign",
		requires: ["delivery:view"],
	},
	"delivery:cancel": {
		id: "delivery:cancel",
		name: "Delivery Cancel",
		description: "Delivery Cancel",
		requires: ["delivery:view"],
	},
	"delivery:complete": {
		id: "delivery:complete",
		name: "Delivery Complete",
		description: "Delivery Complete",
		requires: ["delivery:view"],
	},
};
