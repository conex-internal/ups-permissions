export const ClientPermissions: Record<ClientPermissionsIdsI, PermissionsI> = {
	// Client Permissions:
	"client:all": {
		id: "client:all",
		name: "Client All",
		description: "Client All",
		requires: [
			"client:view",
			"client:create",
			"client:enable",
			"client:edit",
			"client:pin",
			"client:password",
			"client:view_balance",
			"client:view_shipments",
			"client:view_products",
			"client:view_transactions",
		],
	},
	"client:view": {
		id: "client:view",
		name: "Client View",
		description: "Client View",
		requires: [],
	},
	"client:create": {
		id: "client:create",
		name: "Client Create",
		description: "Client Create",
		requires: ["client:view", "client:enable"],
	},
	"client:enable": {
		id: "client:enable",
		name: "Client Enable",
		description: "Client Enable",
		requires: ["client:view"],
	},
	"client:edit": {
		id: "client:edit",
		name: "Client Edit",
		description: "Client Edit",
		requires: ["client:view"],
	},
	"client:edit_pin": {
		id: "client:edit_pin",
		name: "Client Pin",
		description: "Client Pin",
		requires: ["client:view", "client:edit"],
	},
	"client:edit_password": {
		id: "client:edit_password",
		name: "Client Password",
		description: "Client Password",
		requires: ["client:view", "client:edit"],
	},
	/* client balance */
	"client:view_balance": {
		id: "client:view_balance",
		name: "Client View Balance",
		description: "Client View Balance",
		requires: ["client:view"],
	},
	/* client Shipments */
	"client:view_shipments": {
		id: "client:view_shipments",
		name: "Client View Shipments",
		description: "Client View Shipments",
		requires: ["client:view"],
	},
	"client:create_shipment": {
		id: "client:create_shipment",
		name: "Client Create Shipment",
		description: "Client Create Shipment",
		requires: ["client:view"],
	},
	/* client products */
	"client:create_product": {
		id: "client:create_product",
		name: "Client Create Product",
		description: "Client Create Product",
		requires: ["client:view"],
	},
	"client:view_products": {
		id: "client:view_products",
		name: "Client View Products",
		description: "Client View Products",
		requires: ["client:view"],
	},
	/* Transactions */
	"client:view_transactions": {
		id: "client:view_transactions",
		name: "Client View Transactions",
		description: "Client View Transactions",
		requires: ["client:view"],
	},
	// UPS Integration Permissions
	"client:view_integration": {
		id: "client:view_integration",
		name: "Client View Integration",
		description: "Client View Integration",
		requires: ["client:view"],
	},
	"client:revoke_integration": {
		id: "client:revoke_integration",
		name: "Client Revoke Integration",
		description: "Client Revoke Integration",
		requires: ["client:view_integration"],
	},
	"client:edit_integration": {
		id: "client:edit_integration",
		name: "Client Edit Integration",
		description: "Client Edit Integration",
		requires: ["client:view_integration"],
	},
	"client:view_payment_method": {
		id: "client:view_payment_method",
		name: "Client View Payment Method",
		description: "Client View Payment Method",
		requires: ["client:view"],
	},
	"client:edit_payment_method": {
		id: "client:edit_payment_method",
		name: "Client Edit Payment Method",
		description: "Client Edit Payment Method",
		requires: ["client:view_payment_method"],
	},

	/* client addresses */
	"client:view_addresses": {
		id: "client:view_addresses",
		name: "Client View Addresses",
		description: "Client View Addresses",
		requires: ["client:view"],
	},
	"client:create_address": {
		id: "client:create_address",
		name: "Client Create Address",
		description: "Client Create Address",
		requires: ["client:view"],
	},
	"client:make_default_address": {
		id: "client:make_default_address",
		name: "Client Make Default Address",
		description: "Client Make Default Address",
		requires: ["client:view"],
	},
	"client:unlink_address": {
		id: "client:unlink_address",
		name: "Client Unlink Address",
		description: "Client Unlink Address",
		requires: ["client:view"],
	},
	/* logs */
	"client:view_activity_logs": {
		id: "client:view_activity_logs",
		name: "Client View Activity Logs",
		description: "Client View Activity Logs",
		requires: ["client:view"],
	},
	// User Authentication Permissions
	"client:auth_logs": {
		id: "client:auth_logs",
		name: "User Authentication View",
		description: "User Authentication View",
		requires: [],
	},
	"client:extract_money": {
		id: "client:extract_money",
		name: "Client Extract Money",
		description: "Client Extract Money",
		requires: ["client:view"],
	},
};
