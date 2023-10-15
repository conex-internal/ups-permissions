import { AdminPermissions } from "./sub/AdminPermissions";
import { ClientPermissions } from "./sub/ClientPermissions";
import { DeliveryPermissions } from "./sub/DeliveryPermissions";
import { DeskPermissions } from "./sub/DeskPermissions";
import { FinancialPermissions } from "./sub/FinancialPermissions";
import { ShipmentIssuesPermissions } from "./sub/ShipmentIssuesPermissions";
import { ShipmentPermissions } from "./sub/ShipmentPermissions";
import { RolesPermissions } from "./sub/RolesPermissions";
import { DashboardPermissions } from "./sub/DashboardPermissions";
import { MoneyCollectionPermissions } from "./sub/MoneyCollectionPermissions";

export const Permissions: Record<PermissionsIdsI, PermissionsI> = {
	"admin:super": {
		id: "admin:super",
		name: "Super Admin",
		description: "Super Admin",
		requires: [],
	},
	...ClientPermissions,
	...DeliveryPermissions,
	...AdminPermissions,
	...ShipmentPermissions,
	...ShipmentIssuesPermissions,
	...DashboardPermissions,
	...FinancialPermissions,
	...MoneyCollectionPermissions,
	...DeskPermissions,
	...RolesPermissions,
	// can see or not see COD
};
export const PermissionsIds = Object.keys(Permissions) as PermissionsIdsI[];
