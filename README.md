# cor-datadictionary-migrate

Hack Week project - temporary middleman between Financials and cor-datadictionary-api that will call an exposed API in Financials to get data dictionary entities to migrate, and then call an API in cor-datadictionary-api to migrate those entities. This removes the need for Financials and cor-datadictionary-api to know about each other and at some future point, once all data dictionary entities have been migrated this project will no longer be needed and can be removed.

### Usage
node migrate