declare type DeliveryGlobalPermissionsIdsI = "delivery:all" | "delivery:view";
declare type DeliveryAssignmentPermissionsIdsI = "delivery:assign" | "delivery:unassign";

declare type DeliveryManagementPermissionsIdsI = "delivery:create" | "delivery:enable" | "delivery:edit";
declare type DeliveryPermissionsIdsI =
	/* all delivery */
	DeliveryGlobalPermissionsIdsI | DeliveryAssignmentPermissionsIdsI | DeliveryManagementPermissionsIdsI;
