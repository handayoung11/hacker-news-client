import { RouteInfo } from "../types";
import View from './view';
export default class Router {
    routeTable: RouteInfo[];
    defaultRoute: null | RouteInfo;

    constructor() {
        window.addEventListener('hashchange', this.route.bind(this));
        this.routeTable = [];
        this.defaultRoute = null;
    }

    setDefaultPage(page: View): void {
        this.defaultRoute = { path: '', page }
    }

    addRoutePath(path: string, page: View): void {
        this.routeTable.push({ path, page });
    }

    route() {
        const routePath = location.hash;

        if (routePath == '' && this.defaultRoute) {
            this.defaultRoute.page.render();
        }

        for (const routeInfo of this.routeTable) {
            if (routePath.includes(routeInfo.path)) {
                routeInfo.page.render();
                break;
            }
        }
    }
}