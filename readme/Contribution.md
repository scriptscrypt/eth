+ Adding a new page and linking it from the left dashboard
    1. Go to [src/components/routes](../src/components/routes) and create a new file with _< route name >.js_ naming convention
    2. Now, visit [src/App.js](../src/App.js) and import the route component and then, specify the route using `<Route path="/< route name >" element={< route name />}/> `
    3. Add the navigation link to the route to the left dashboard [src/components/layouts/MainLayout.js](../src/components/layouts/Mainlayout.js) using `<Link to="/< route name >"><NavLink label="< Navlink label >" variant="light" /></Link>`

+ Adding a new card ( _Ex: Connect wallet_ ) in a route
    1.  ```
        <Cards btnName="< _Button name_ >"
          data = { _Data variable name_ }
          stateVar = "_State variable name_"
          stateVarObj ="_State variable name.method name_"
          func={ _Function name_ }
          code={`_One line Code_`}
          offLink="_Official link_" />
        ```