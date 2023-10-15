declare type RolesGlobalPermissionsIdsI = "role:all" | "role:view";
declare type RolesManagementPermissionsIdsI = "role:create" | "role:edit" | "role:delete";
declare type RolesActionsPermissionsIdsI = "role:assign";
declare type RolesPermissionsIdsI =
	/* roles */
	RolesGlobalPermissionsIdsI | RolesManagementPermissionsIdsI | RolesActionsPermissionsIdsI;
