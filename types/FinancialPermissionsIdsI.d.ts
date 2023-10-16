declare type FinancialGlobalPermissionsIdsI = "financial:all" | "financial:view";
declare type FinancialActionsPermissionsIdsI = "financial:adjust";
declare type FinancialPermissionsIdsI =
	/* financial */
	FinancialGlobalPermissionsIdsI | FinancialActionsPermissionsIdsI;
