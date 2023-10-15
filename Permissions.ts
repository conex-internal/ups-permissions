export const Permissions: Record<PermissionsIdsI, PermissionsI> = {
	"admin:super": {
		id: "admin:super",
		name: "Super Admin",
		description: "Super Admin",
		requires: [],
	},

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

	//Shipment Permissions:
	"shipment:all": {
		id: "shipment:all",
		name: "Shipment All",
		description: "Shipment All",
		requires: ["shipment:view", "shipment:assign", "shipment:create", "shipment:edit", "shipment:delete", "shipment:cancel"],
	},
	"shipment:view": {
		id: "shipment:view",
		name: "Shipment View",
		description: "Shipment View",
		requires: [],
	},
	"shipment:assign": {
		id: "shipment:assign",
		name: "Shipment Assign",
		description: "Shipment Assign",
		requires: ["shipment:view"],
	},
	"shipment:create": {
		id: "shipment:create",
		name: "Shipment Create",
		description: "Shipment Create",
		requires: ["shipment:view"],
	},
	"shipment:edit": {
		id: "shipment:edit",
		name: "Shipment Edit",
		description: "Shipment Edit",
		requires: ["shipment:view"],
	},
	// can see or not see COD
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

	// Desk Permissions:
	"desk:all": {
		id: "desk:all",
		name: "Desk All",
		description: "Desk All",
		requires: ["desk:view", "desk:create", "desk:edit", "desk:delete"],
	},
	"desk:view": {
		id: "desk:view",
		name: "Desk View",
		description: "Desk View",
		requires: [],
	},
	"desk:create": {
		id: "desk:create",
		name: "Desk Create",
		description: "Desk Create",
		requires: ["desk:view"],
	},
	"desk:edit": {
		id: "desk:edit",
		name: "Desk Edit",
		description: "Desk Edit",
		requires: ["desk:view"],
	},

	// Financial Permissions:
	"financial:all": {
		id: "financial:all",
		name: "Financial All",
		description: "Financial All",
		requires: ["financial:view", "financial:adjust", "financial:report"],
	},
	"financial:view": {
		id: "financial:view",
		name: "Financial View",
		description: "Financial View",
		requires: [],
	},
	"financial:adjust": {
		id: "financial:adjust",
		name: "Financial Adjust",
		description: "Financial Adjust",
		requires: ["financial:view"],
	},
	"financial:report": {
		id: "financial:report",
		name: "Financial Report",
		description: "Financial Report",
		requires: ["financial:view"],
	},

	/*
	// Device Management Permissions
	device_view : "device:view":{},
	device_add : "device:add":{},
	device_remove : "device:remove":{},
	*/
	// Financial Transactions Permissions
	// Client Activity Logs Permissions
	"activity_logs:view": {
		id: "activity_logs:view",
		name: "Activity Logs View",
		description: "Activity Logs View",
		requires: [],
	},

	// User Authentication Permissions
	"user_auth:view": {
		id: "user_auth:view",
		name: "User Authentication View",
		description: "User Authentication View",
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
	"client:extract_money": {
		id: "client:extract_money",
		name: "Client Extract Money",
		description: "Client Extract Money",
		requires: ["client:view"],
	},
	"shipment:delete": {
		id: "shipment:delete",
		name: "Shipment Delete",
		description: "Shipment Delete",
		requires: ["shipment:view"],
	},
	"shipment:view_issue": {
		id: "shipment:view_issue",
		name: "Shipment View Issue",
		description: "Shipment View Issue",
		requires: ["shipment:view"],
	},
	"shipment:view_coming": {
		id: "shipment:view_coming",
		name: "Shipment View Coming",
		description: "Shipment View Coming",
		requires: ["shipment:view"],
	},
	"shipment:view_in_hold": {
		id: "shipment:view_in_hold",
		name: "Shipment View In Hold",
		description: "Shipment View In Hold",
		requires: ["shipment:view"],
	},
	"shipment:view_canceled_in_hold": {
		id: "shipment:view_canceled_in_hold",
		name: "Shipment View Canceled In Hold",
		description: "Shipment View Canceled In Hold",
		requires: ["shipment:view"],
	},
	"shipment:view_assigned": {
		id: "shipment:view_assigned",
		name: "Shipment View Assigned",
		description: "Shipment View Assigned",
		requires: ["shipment:view"],
	},
	"shipment:view_assigned_in_transit": {
		id: "shipment:view_assigned_in_transit",
		name: "Shipment View Assigned In Transit",
		description: "Shipment View Assigned In Transit",
		requires: ["shipment:view"],
	},
	"shipment:view_assigned_in_return": {
		id: "shipment:view_assigned_in_return",
		name: "Shipment View Assigned In Return",
		description: "Shipment View Assigned In Return",
		requires: ["shipment:view"],
	},
	"shipment:view_in_transit": {
		id: "shipment:view_in_transit",
		name: "Shipment View In Transit",
		description: "Shipment View In Transit",
		requires: ["shipment:view"],
	},
	"shipment:view_in_delivery": {
		id: "shipment:view_in_delivery",
		name: "Shipment View In Delivery",
		description: "Shipment View In Delivery",
		requires: ["shipment:view"],
	},
	"shipment:view_in_return": {
		id: "shipment:view_in_return",
		name: "Shipment View In Return",
		description: "Shipment View In Return",
		requires: ["shipment:view"],
	},
	"shipment:view_delivered": {
		id: "shipment:view_delivered",
		name: "Shipment View Delivered",
		description: "Shipment View Delivered",
		requires: ["shipment:view"],
	},
	"shipment:view_money_collected": {
		id: "shipment:view_money_collected",
		name: "Shipment View Money Collected",
		description: "Shipment View Money Collected",
		requires: ["shipment:view"],
	},
	"shipment:view_money_affected": {
		id: "shipment:view_money_affected",
		name: "Shipment View Money Affected",
		description: "Shipment View Money Affected",
		requires: ["shipment:view"],
	},
	"shipment:view_returned": {
		id: "shipment:view_returned",
		name: "Shipment View Returned",
		description: "Shipment View Returned",
		requires: ["shipment:view"],
	},
	"shipment:get_label": {
		id: "shipment:get_label",
		name: "Shipment Get Label",
		description: "Shipment Get Label",
		requires: ["shipment:view"],
	},
	"shipment:assign_transit": {
		id: "shipment:assign_transit",
		name: "Shipment Assign Transit",
		description: "Shipment Assign Transit",
		requires: ["shipment:view"],
	},
	"shipment:assign_return": {
		id: "shipment:assign_return",
		name: "Shipment Assign Return",
		description: "Shipment Assign Return",
		requires: ["shipment:view"],
	},
	"shipment:cancel": {
		id: "shipment:cancel",
		name: "Shipment Cancel",
		description: "Shipment Cancel",
		requires: ["shipment:view"],
	},
	"shipment:cancel_assignment": {
		id: "shipment:cancel_assignment",
		name: "Shipment Cancel Assignment",
		description: "Shipment Cancel Assignment",
		requires: ["shipment:view"],
	},
	"shipment:create_issue": {
		id: "shipment:create_issue",
		name: "Shipment Create Issue",
		description: "Shipment Create Issue",
		requires: ["shipment:view"],
	},
	"shipment:resolve_issue": {
		id: "shipment:resolve_issue",
		name: "Shipment Resolve Issue",
		description: "Shipment Resolve Issue",
		requires: ["shipment:view"],
	},
	"shipment:prepare": {
		id: "shipment:prepare",
		name: "Shipment Prepare",
		description: "Shipment Prepare",
		requires: ["shipment:view"],
	},
	"shipment:re_collect": {
		id: "shipment:re_collect",
		name: "Shipment Re Collect",
		description: "Shipment Re Collect",
		requires: ["shipment:view"],
	},
	"shipment:confirm_collection": {
		id: "shipment:confirm_collection",
		name: "Shipment Confirm Collection",
		description: "Shipment Confirm Collection",
		requires: ["shipment:view"],
	},
	"shipment:confirm_delivery": {
		id: "shipment:confirm_delivery",
		name: "Shipment Confirm Delivery",
		description: "Shipment Confirm Delivery",
		requires: ["shipment:view"],
	},
	"shipment:confirm_return": {
		id: "shipment:confirm_return",
		name: "Shipment Confirm Return",
		description: "Shipment Confirm Return",
		requires: ["shipment:view"],
	},
	"shipment:confirm_transited": {
		id: "shipment:confirm_transited",
		name: "Shipment Confirm Transited",
		description: "Shipment Confirm Transited",
		requires: ["shipment:view"],
	},
	"shipment:confirm_arriving": {
		id: "shipment:confirm_arriving",
		name: "Shipment Confirm Arriving",
		description: "Shipment Confirm Arriving",
		requires: ["shipment:view"],
	},
	"shipment:confirm_money_collection": {
		id: "shipment:confirm_money_collection",
		name: "Shipment Confirm Money Collection",
		description: "Shipment Confirm Money Collection",
		requires: ["shipment:view"],
	},
	"desk:generate_desks_excel": {
		id: "desk:generate_desks_excel",
		name: "Desk Generate Desks Excel",
		description: "Desk Generate Desks Excel",
		requires: ["desk:view"],
	},
	"desk:assign_responsible": {
		id: "desk:assign_responsible",
		name: "Desk Assign Responsible",
		description: "Desk Assign Responsible",
		requires: ["desk:view"],
	},
	"desk:archive": {
		id: "desk:archive",
		name: "Desk Archive",
		description: "Desk Archive",
		requires: ["desk:view"],
	},
	"desk:view_workers": {
		id: "desk:view_workers",
		name: "Desk View Workers",
		description: "Desk View Workers",
		requires: ["desk:view"],
	},
	"desk:add_workers": {
		id: "desk:add_workers",
		name: "Desk Add Workers",
		description: "Desk Add Workers",
		requires: ["desk:view"],
	},
	"desk:remove_workers": {
		id: "desk:remove_workers",
		name: "Desk Remove Workers",
		description: "Desk Remove Workers",
		requires: ["desk:view"],
	},
	"money_collection:all": {
		id: "money_collection:all",
		name: "Money Collection All",
		description: "Money Collection All",
		requires: [
			"money_collection:view",
			"money_collection:view_one",
			"money_collection:view_sent",
			"money_collection:view_received",
			"money_collection:view_to_be_received",
			"money_collection:create",
			"money_collection:validate",
		],
	},
	"money_collection:view_one": {
		id: "money_collection:view_one",
		name: "Money Collection View One",
		description: "Money Collection View One",
		requires: [],
	},
	"money_collection:view_sent": {
		id: "money_collection:view_sent",
		name: "Money Collection View Sent",
		description: "Money Collection View Sent",
		requires: ["money_collection:view_one"],
	},
	"money_collection:view_received": {
		id: "money_collection:view_received",
		name: "Money Collection View Received",
		description: "Money Collection View Received",
		requires: ["money_collection:view_one"],
	},
	"money_collection:view_to_be_received": {
		id: "money_collection:view_to_be_received",
		name: "Money Collection View To Be Received",
		description: "Money Collection View To Be Received",
		requires: ["money_collection:view_one"],
	},
	"money_collection:create": {
		id: "money_collection:create",
		name: "Money Collection Create",
		description: "Money Collection Create",
		requires: ["money_collection:view_one"],
	},
	"money_collection:validate": {
		id: "money_collection:validate",
		name: "Money Collection Validate",
		description: "Money Collection Validate",
		requires: ["money_collection:view_one"],
	},
};
export const PermissionsIds = Object.keys(Permissions) as PermissionsIdsI[];
