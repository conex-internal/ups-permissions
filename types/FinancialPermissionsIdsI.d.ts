declare type FinancialGlobalPermissionsIdsI = "financial:all" | "financial:view";
declare type FinancialActionsPermissionsIdsI = "financial:adjust" | "financial:report";
declare type FinancialPermissionsIdsI =
	/* financial */
	FinancialGlobalPermissionsIdsI | FinancialActionsPermissionsIdsI;
