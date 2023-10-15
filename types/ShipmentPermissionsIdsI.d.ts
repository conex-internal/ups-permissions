declare type ShipmentGlobalPermissionsIdsI = "shipment:all" | "shipment:view";

declare type ShipmentManagementPermissionsIdsI = "shipment:create" | "shipment:get_label" | "shipment:edit" | "shipment:delete";

declare type ShipmentStatusPermissionsIdsI =
	/* shipment getters  */
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
	| "shipment:view_returned";

declare type ShipmentActionsPermissionsIdsI =
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
	| "shipment:confirm_money_collection";

declare type ShipmentPermissionsIdsI =
	/* all shipments */
	| ShipmentGlobalPermissionsIdsI
	| ShipmentManagementPermissionsIdsI
	| ShipmentStatusPermissionsIdsI
	| ShipmentStatusPermissionsIdsI
	| ShipmentActionsPermissionsIdsI;
