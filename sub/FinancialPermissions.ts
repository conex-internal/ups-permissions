export const FinancialPermissions: Record<FinancialPermissionsIdsI, PermissionsI> = {
	// Financial Permissions:
	"financial:all": {
		id: "financial:all",
		name: "Financial All",
		description: "Financial All",
		requires: ["financial:view", "financial:adjust", "financial:report"],
	},
	"financial:view": {
		id: "financial:view",
		name: "Financial View",
		description: "Financial View",
		requires: [],
	},
	"financial:adjust": {
		id: "financial:adjust",
		name: "Financial Adjust",
		description: "Financial Adjust",
		requires: ["financial:view"],
	},
	"financial:report": {
		id: "financial:report",
		name: "Financial Report",
		description: "Financial Report",
		requires: ["financial:view"],
	},
};
