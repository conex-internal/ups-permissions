declare type AdminGlobalPermissionsIdsI = "admin:all" | "admin:view";
declare type AdminManagementPermissionsIdsI =
	| "admin:create"
	| "admin:enable"
	| "admin:edit"
	| "admin:assign_clients"
	| "admin:edit_password";
declare type AdminActivitiesPermissionsIdsI = "admin:activity_logs";
declare type AdminPermissionsIdsI =
	/* admin */
	AdminGlobalPermissionsIdsI | AdminManagementPermissionsIdsI | AdminActivitiesPermissionsIdsI;
