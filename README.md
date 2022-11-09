# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method | path                    | purpose                                          |
|--------|-------------------------|--------------------------------------------------|
| Get    | /                       | Home page                                        |
| Get    | /places                 | places index page                                |
| Post   | /places                 | create new place                                 |
| Get    | /places/new             | Form page for creating a new place               |
| Get    | /places/:id             | Details about a particular place                 |
| Put    | /places/:id             | Update a particular place                        |
| Get    | /places/:id/edit        | form a page for editing an existing place        |
| Delete | /places/:id             | Delete a particular place                        |
| Post   | /places/:id/rant        | create a rant (comment) about a particular place |
| Delete | /places/:id/rant/rantId | Delete a rant (comment) about a particular place |
| Get    | *                       | 404 page (matches any route not defined above)   |

| Field     | Type   |
|-----------|--------|
| _id       | Object |
| name      | String |
| city      | String |
| state     | String |
| cruisines | String |
| pic       | String |