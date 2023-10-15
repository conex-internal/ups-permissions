export const DeskPermissions: Record<DeskPermissionsIdsI, PermissionsI> = {
	// Desk Permissions:
	"desk:all": {
		id: "desk:all",
		name: "Desk All",
		description: "Desk All",
		requires: ["desk:view", "desk:create", "desk:edit", "desk:delete"],
	},
	"desk:view": {
		id: "desk:view",
		name: "Desk View",
		description: "Desk View",
		requires: [],
	},
	"desk:create": {
		id: "desk:create",
		name: "Desk Create",
		description: "Desk Create",
		requires: ["desk:view"],
	},
	"desk:edit": {
		id: "desk:edit",
		name: "Desk Edit",
		description: "Desk Edit",
		requires: ["desk:view"],
	},
	"desk:generate_desks_excel": {
		id: "desk:generate_desks_excel",
		name: "Desk Generate Desks Excel",
		description: "Desk Generate Desks Excel",
		requires: ["desk:view"],
	},
	"desk:assign_responsible": {
		id: "desk:assign_responsible",
		name: "Desk Assign Responsible",
		description: "Desk Assign Responsible",
		requires: ["desk:view"],
	},
	"desk:archive": {
		id: "desk:archive",
		name: "Desk Archive",
		description: "Desk Archive",
		requires: ["desk:view"],
	},
	"desk:view_workers": {
		id: "desk:view_workers",
		name: "Desk View Workers",
		description: "Desk View Workers",
		requires: ["desk:view"],
	},
	"desk:add_workers": {
		id: "desk:add_workers",
		name: "Desk Add Workers",
		description: "Desk Add Workers",
		requires: ["desk:view"],
	},
	"desk:remove_workers": {
		id: "desk:remove_workers",
		name: "Desk Remove Workers",
		description: "Desk Remove Workers",
		requires: ["desk:view"],
	},
};
