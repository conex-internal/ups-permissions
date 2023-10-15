declare interface PermissionsI {
	id: PermissionsIdsI;
	name: string;
	description: string;
	requires: string[];
}

declare type PermissionsIdsI =
	| "admin:super"
	/* clients permissions */
	| "client:all"
	| "client:view"
	| "client:create"
	| "client:enable"
	| "client:edit"
	| "client:edit_pin"
	| "client:edit_password"
	| "client:view_shipments"
	| "client:create_shipment"
	| "client:view_addresses"
	| "client:create_address"
	| "client:make_default_address"
	| "client:unlink_address"
	| "client:view_products"
	| "client:create_product"
	/* client transactions */
	| "client:view_balance"
	| "client:view_transactions"
	| "client:extract_money"
	| "client:view_activity_logs"
	| "client:view_integration"
	| "client:edit_integration"
	| "client:revoke_integration"
	| "client:view_payment_method"
	| "client:edit_payment_method"
	/* all delivery */
	| "delivery:all"
	| "delivery:view"
	| "delivery:create"
	| "delivery:enable"
	| "delivery:edit"
	| "delivery:delete"
	| "delivery:assign"
	| "delivery:unassign"
	| "delivery:cancel"
	| "delivery:complete"
	/* all shipments */
	| "shipment:all"
	| "shipment:view"
	| "shipment:create"
	| "shipment:edit"
	| "shipment:delete"
	/* shipment getters  */
	| "shipment:view_issue"
	| "shipment:view_coming"
	| "shipment:view_in_hold"
	| "shipment:view_canceled_in_hold"
	| "shipment:view_assigned"
	| "shipment:view_assigned_in_transit"
	| "shipment:view_assigned_in_return"
	| "shipment:view_in_transit"
	| "shipment:view_in_delivery"
	| "shipment:view_in_return"
	| "shipment:view_delivered"
	| "shipment:view_money_collected"
	| "shipment:view_money_affected"
	| "shipment:view_returned"
	| "shipment:get_label"

	/* shipment actions */
	| "shipment:assign"
	| "shipment:assign_transit"
	| "shipment:assign_return"
	| "shipment:cancel"
	| "shipment:cancel_assignment"
	| "shipment:create_issue"
	| "shipment:resolve_issue"
	| "shipment:prepare"
	| "shipment:re_collect"
	| "shipment:confirm_collection"
	| "shipment:confirm_delivery"
	| "shipment:confirm_return"
	| "shipment:confirm_transited"
	| "shipment:confirm_arriving"
	| "shipment:confirm_money_collection"
	/* issues */
	| "issue:all"
	| "issue:view"
	| "issue:create"
	| "issue:edit"
	| "issue:delete"
	/* desks */
	| "desk:all"
	| "desk:generate_desks_excel"
	| "desk:view"
	| "desk:create"
	| "desk:edit"
	| "desk:assign_responsible"
	| "desk:archive"
	| "desk:view_workers"
	| "desk:add_workers"
	| "desk:remove_workers"
	/* financial */
	| "financial:all"
	| "financial:view"
	| "financial:adjust"
	| "financial:report"
	/* 
		"device:view"|
		"device:add"|
		"device:remove"| 
	*/
	| "activity_logs:view"
	| "user_auth:view"
	| "admin:all"
	| "admin:view"
	| "admin:create"
	| "admin:enable"
	| "admin:edit"
	| "admin:delete"
	| "admin:view_clients"
	| "admin:edit_clients"
	| "role:all"
	| "role:view"
	| "role:assign"
	| "role:view-all"
	| "role:create"
	| "role:edit"
	| "role:delete"
	| "money_collection:all"
	| "money_collection:view_one"
	| "money_collection:view_sent"
	| "money_collection:view_received"
	| "money_collection:view_to_be_received"
	| "money_collection:create"
	| "money_collection:validate"
	| "dashboard:all"
	| "dashboard:view"
	| "dashboard:edit";
