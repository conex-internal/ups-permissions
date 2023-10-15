declare interface PermissionsI {
	id: PermissionsIdsI;
	name: string;
	description: string;
	requires: PermissionsIdsI[];
}

declare type DashboardPermissionsIdsI = /* dashboard */ "dashboard:view";

declare type PermissionsIdsI =
	| "admin:super"
	| ClientPermissionsIdsI
	| DeliveryPermissionsIdsI
	| ShipmentPermissionsIdsI
	| ShipmentIssuesPermissionsIdsI
	| DeskPermissionsIdsI
	| FinancialPermissionsIdsI
	| AdminPermissionsIdsI
	| RolesPermissionsIdsI
	| MoneyCollectionPermissionsIdsI
	| DashboardPermissionsIdsI;
