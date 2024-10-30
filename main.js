//State
class state{
  constructor(def){
    this.val=def;
    this.list=[];
  }
  use(obj,atr){
    obj[atr]=this.val;
    this.list.push({obj,atr});
  }
  change(newval){
    this.val=newval;
    for(let i=0;i<this.list.length;i++){
      this.list[i].obj[this.list[i].atr]=newval;
    }
  }
  remove(obj){
    this.list=this.list.filter(a=>a.obj!==obj)
  }
}


//Prop system
class prop {
  constructor(frame) {
    this.frame = frame.innerHTML;
    this.data = {};
    this.framepieces = [];
    this.datapieces = [];
    this.first = true; // if first element is not key
  }

  dataentry(data) {
    this.data = data; // Assign provided data object to this.data
  if(this.framepieces.length!==0) return;
  
    const regex = /\{(\w+)\}/g;
    let lastIndex = 0;
    let match;
  
    while ((match = regex.exec(this.frame)) !== null) {
      const key = match[1];
      if (this.data.hasOwnProperty(key)) {
        // Set first flag based on initial positions
        if (this.framepieces.length === 0 && this.datapieces.length === 1) this.first = false;
        
        // Store found key and frame piece
        this.datapieces.push(key);
        this.framepieces.push(this.frame.slice(lastIndex, match.index));
        
        lastIndex = regex.lastIndex;
      }
    }
  
    this.framepieces.push(this.frame.slice(lastIndex));
    console.log(this.framepieces, this.datapieces);
  }
  
  output() {
    let str = "";
    const pieceCount = Math.max(this.framepieces.length, this.datapieces.length);

    for (let i = 0; i < pieceCount; i++) {
      if (i < this.framepieces.length) {
        str += this.framepieces[i];
      }
      if (i < this.datapieces.length) {
        str += this.data[this.datapieces[i]];
      }
    }
    return str;
  }
}



//react router dom

let routers = [];
function navigate(path) {
  const { matchedPath, params } = matchRouteWithParams(path);
  if (matchedPath) {
    window.history.pushState({ params }, "Title", path);
    renderRoute(matchedPath);
  } else {
    console.error("Route not found:", path);
  }
}

function renderRoute(matchedPath) {
  let routeFound = false;

  for (let router of routers) {
    if (router.routes[matchedPath]) {
      const params = window.history.state ? window.history.state.params : {};
      router.navigate(matchedPath, params);
      routeFound = true;
      break;
    }
  }

  if (!routeFound) {
    console.error("No matching route:", matchedPath);
  }
}

window.addEventListener("popstate", () => {
  const path = window.location.pathname;
  const { matchedPath } = matchRouteWithParams(path);
  if (matchedPath) renderRoute(matchedPath);
});

class router {
  constructor(element) {
    this.target = element;
    this.routes = {};
    routers.push(this);
  }

  addroute(path,component) {
    this.routes[path] = component;
    component.innerHTML = "";
  }

  navigate(path, params = {}) {
    const component = this.routes[path];
    if (component) {
      this.target.innerHTML =component.innerHTML;
    }
  }
}



//Helpers
function fetchele(name){
  return document.querySelector(name);
}
function pathfinder(){
  return window.location.pathname
}
function matchRouteWithParams(path) {
  for (let router of routers) {
    for (let routePath in router.routes) {
      const { regex, paramNames } = createRouteRegex(routePath);
      const match = path.match(regex);

      if (match) {
        const params = extractParams(match, paramNames);
        return { matchedPath: routePath, params };
      }
    }
  }
  return { matchedPath: null, params: {} };
}
function createRouteRegex(routePath) {
  const paramNames = [];
  const regexPath = routePath.replace(/:([^/]+)/g, (fullMatch, paramName) => {
    paramNames.push(paramName);
    return "([^/]+)";
  });
  const regex = new RegExp(`^${regexPath}$`);
  return { regex, paramNames };
}
function extractParams(match, paramNames) {
  const params = {};
  paramNames.forEach((name, index) => {
    params[name] = match[index + 1];
  });
  return params;
}




//Users code
