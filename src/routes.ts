import { Menu, Route, Param, MenuList } from "./components/side_nav/menu";
import PageOne from './components/pages/PageOne.svelte'
import { CRUMBS } from "./main_store";
let routeList = {}
let crumbList = {}

export function getRoutes() {
    for (let g = 0; g < Menu.length; g++) {
      /*   let group = `/${Menu[g].group}`;
        if (group ==='/HOME') group= group.replace('/HOME', '') */
        if (Menu[g].routes) extractRoutes(Menu[g].routes)
    }
    CRUMBS.set(crumbList)
    return routeList;
}

function extractRoutes(routes: Route[], prefix='', crumbs='') {
    for (let r = 0; r < routes.length; r++) {
       let route = `${prefix}${routes[r].path}`
       let crumb =`${crumbs}/${routes[r].name}`
        routeList[`${route}`] = routes[r].component ? routes[r].component : PageOne
        crumbList[`${route}`] = crumb
        if (routes[r].params) extractParams(routes[r].params, route, crumb)
        if (routes[r].subRoutes) extractRoutes(routes[r].subRoutes, route, crumb)
    }
}

function extractParams(params: Param[], prefix='', crumbs='') {
    for (let p = 0; p < params.length; p++) {
        let param = `${prefix}${params[p].param}`
        let crumb =`${crumbs}/${params[p].name}`
        routeList[`${param}`] = params[p].component ? params[p].component : PageOne
        crumbList[`${prefix}/params`] = crumb
    }
}

