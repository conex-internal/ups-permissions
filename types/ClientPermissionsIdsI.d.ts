declare type ClientManagementPermissionsIdsI =
	/* client management */
	"client:create" | "client:enable" | "client:edit" | "client:edit_pin" | "client:edit_password";
declare type ClientShipmentPermissionsIdsI = /* client shipments */ "client:view_shipments" | "client:create_shipment";
declare type ClientAddressesPermissionsIdsI =
	/* client addresses */
	"client:view_addresses" | "client:create_address" | "client:make_default_address" | "client:unlink_address";
declare type ClientProductsPermissionsIdsI = /* client products */ "client:view_products" | "client:create_product";
declare type ClientTransactionsPermissionsIdsI =
	/* client transactions */
	"client:view_balance" | "client:view_transactions" | "client:extract_money";
declare type ClientActivitiesPermissionsIdsI = "client:view_activity_logs";
declare type ClientIntegrationPermissionsIdsI =
	/* client integrations */
	"client:view_integration" | "client:edit_integration" | "client:revoke_integration";
declare type ClientPaymentMethodPermissionsIdsI = /* client payment method */ "client:view_payment_method" | "client:edit_payment_method";
declare type ClientGlobalPermissionsIdsI =
	/* clients permissions */
	| "client:all"
	/* client view */
	| "client:view";
declare type ClientPermissionsIdsI =
	| ClientGlobalPermissionsIdsI
	| ClientManagementPermissionsIdsI
	| ClientShipmentPermissionsIdsI
	| ClientAddressesPermissionsIdsI
	| ClientProductsPermissionsIdsI
	| ClientTransactionsPermissionsIdsI
	| ClientActivitiesPermissionsIdsI
	| ClientIntegrationPermissionsIdsI
	| ClientPaymentMethodPermissionsIdsI;
