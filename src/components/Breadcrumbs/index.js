import { useParams, useLocation } from "react-router-dom";

const formatBreadcrumbs = (pathname) => {
  pathname = pathname.split('/').filter(path => path !== '')
  for (let i = 0; i < pathname.length; i++) {
    pathname[i] = pathname[i].charAt(0).toUpperCase() + pathname[i].slice(1)
  }
  return pathname.join('/')
}

export function Breadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname === "/" ? "home" : location.pathname;
  // const params = useParams();
  // console.log(location);
  // console.log(location.pathname); // <-

  // const getRoutePath = (location, params) => {
  //   const { pathname } = location;

  //   if (!Object.keys(params).length) {
  //     return pathname; // we don't need to replace anything
  //   }

  //   let path = pathname;
  //   Object.entries(params).forEach(([paramName, paramValue]) => {
  //     if (paramValue) {
  //       path = path.replace(paramValue, `:${paramName}`);
  //     }
  //   });
  //   return path;
  // };

  // const path = getRoutePath(location, params);

  return (
    <div className="row justify-content-center">
      <div
        className="col-lg-8 col-sm-12"
        style={{ marginTop: 60, marginBottom: 30 }}
      >
        <span style={{ color: "#404C55", fontWeight: "bold" }}>{formatBreadcrumbs(pathname)}</span>
      </div>
    </div>
  );
}
