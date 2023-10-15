declare type ShipmentIssuesGlobalPermissionsIdsI = "issue:all" | "issue:view";
declare type ShipmentIssuesManagementPermissionsIdsI = "issue:create" | "issue:edit";
declare type ShipmentIssuesPermissionsIdsI =
	/* issues */
	ShipmentIssuesGlobalPermissionsIdsI | ShipmentIssuesManagementPermissionsIdsI;
