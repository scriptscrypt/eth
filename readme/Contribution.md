+ Adding a route to the side navigation dashboard
    -- Head over to [src/components/routes](../src/components/routes) and create a new file with < Filename >.js naming convention
    -- Then, head over to [src/App.js](../src/App.js) and import the route component and specify the route using `<Route path="/< route name >"  element={< route name />}/> `
    -- Then, Add the navigation link to the dashboard [src/components/layouts/MainLayout.js](../src/components/layouts/Mainlayout.js) using `<Link to="/< route name >"><NavLink label="< Navlink label >" variant="light" /></Link>`