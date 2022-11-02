+ Adding a new page and linking it from the left dashboard
    1. Go to [src/components/routes](../src/components/routes) and create a new file with _< route name >.js_ naming convention
    2. Now, visit [src/App.js](../src/App.js) and import the route component and then, specify the route using `<Route path="/< route name >" element={< route name />}/> `
    3. Add the navigation link to the route to the left dashboard [src/components/layouts/MainLayout.js](../src/components/layouts/Mainlayout.js) using `<Link to="/< route name >"><NavLink label="< Navlink label >" variant="light" /></Link>`

+ Adding a new card ( _Ex: Connect wallet_ ) in a route
    1. In the return block, define the Cards component props as below :

      ```
      <Cards btnName="_buttonName_"
        data = { _dataVariableName_ }
        stateVar = "_stateVariableName_"
        stateVarObj ="_stateVariableName.methodName_"
        func={ _functionName_ }
        code={`_code_`}
        offLink="_officialLink_" />
      ```

    2. In the same file, define a function in this pattern :
  
      ```
      const _functionName_ = () =>{
          try{
            _code_
          }
          catch(err){
            console.log(err)
            setErr(err.message)
            setOpened(true)
          }
        } 
      
      ( *Please use async-await if needed )
      ```