import {
  __toESM,
  require_react
} from "./chunk-CE4FKTVB.js";

// node_modules/react-icons/lib/iconBase.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconContext.mjs
var import_react = __toESM(require_react(), 1);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => import_react2.default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => import_react2.default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// node_modules/react-icons/hi2/index.mjs
function HiAcademicCap(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" }, "child": [] }, { "tag": "path", "attr": { "d": "M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" }, "child": [] }, { "tag": "path", "attr": { "d": "M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" }, "child": [] }] })(props);
}
function HiAdjustmentsHorizontal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" }, "child": [] }] })(props);
}
function HiAdjustmentsVertical(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" }, "child": [] }] })(props);
}
function HiArchiveBoxArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArchiveBoxXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArchiveBox(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowDownCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowDownLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M20.03 3.97a.75.75 0 010 1.06L6.31 18.75h9.44a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75V8.25a.75.75 0 011.5 0v9.44L18.97 3.97a.75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowDownOnSquareStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.75 6.75h-3a3 3 0 00-3 3v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-3V1.5a.75.75 0 00-1.5 0v5.25zm0 0h1.5v5.69l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V6.75z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" }, "child": [] }] })(props);
}
function HiArrowDownOnSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" }, "child": [] }] })(props);
}
function HiArrowDownRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.97 3.97a.75.75 0 011.06 0l13.72 13.72V8.25a.75.75 0 011.5 0V19.5a.75.75 0 01-.75.75H8.25a.75.75 0 010-1.5h9.44L3.97 5.03a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowDownTray(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowLeftCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowLeftOnRectangle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowLongDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25a.75.75 0 01.75.75v16.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V3a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowLongLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowLongRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowLongUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.47 2.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06l-2.47-2.47V21a.75.75 0 01-1.5 0V4.81L8.78 7.28a.75.75 0 01-1.06-1.06l3.75-3.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowPathRoundedSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 013.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 00-4.392-4.392 49.422 49.422 0 00-7.436 0A4.756 4.756 0 003.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 101.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 013.01-3.01c1.19-.09 2.392-.135 3.605-.135zm-6.97 6.22a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 004.392 4.392 49.413 49.413 0 007.436 0 4.756 4.756 0 004.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 00-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 01-3.01 3.01 47.953 47.953 0 01-7.21 0 3.256 3.256 0 01-3.01-3.01 47.759 47.759 0 01-.1-1.759L6.97 15.53a.75.75 0 001.06-1.06l-3-3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowPath(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowRightCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowRightOnRectangle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowSmallDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowSmallLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowSmallRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowSmallUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowTopRightOnSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowTrendingDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.72 5.47a.75.75 0 011.06 0L9 11.69l3.756-3.756a.75.75 0 01.985-.066 12.698 12.698 0 014.575 6.832l.308 1.149 2.277-3.943a.75.75 0 111.299.75l-3.182 5.51a.75.75 0 01-1.025.275l-5.511-3.181a.75.75 0 01.75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 00-3.528-5.617l-3.809 3.81a.75.75 0 01-1.06 0L1.72 6.53a.75.75 0 010-1.061z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowTrendingUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowUpCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowUpLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.25 6.31v9.44a.75.75 0 01-1.5 0V4.5a.75.75 0 01.75-.75h11.25a.75.75 0 010 1.5H6.31l13.72 13.72a.75.75 0 11-1.06 1.06L5.25 6.31z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowUpOnSquareStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M9.97.97a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 01-1.06-1.06l3-3zM9.75 6.75v6a.75.75 0 001.5 0v-6h3a3 3 0 013 3v7.5a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3h3z" }, "child": [] }, { "tag": "path", "attr": { "d": "M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" }, "child": [] }] })(props);
}
function HiArrowUpOnSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" }, "child": [] }] })(props);
}
function HiArrowUpRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowUpTray(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowUturnDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15 3.75A5.25 5.25 0 009.75 9v10.19l4.72-4.72a.75.75 0 111.06 1.06l-6 6a.75.75 0 01-1.06 0l-6-6a.75.75 0 111.06-1.06l4.72 4.72V9a6.75 6.75 0 0113.5 0v3a.75.75 0 01-1.5 0V9c0-2.9-2.35-5.25-5.25-5.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowUturnLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowUturnRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowUturnUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M21.53 9.53a.75.75 0 01-1.06 0l-4.72-4.72V15a6.75 6.75 0 01-13.5 0v-3a.75.75 0 011.5 0v3a5.25 5.25 0 1010.5 0V4.81L9.53 9.53a.75.75 0 01-1.06-1.06l6-6a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowsPointingIn(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.22 3.22a.75.75 0 011.06 0l3.97 3.97V4.5a.75.75 0 011.5 0V9a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h2.69L3.22 4.28a.75.75 0 010-1.06zm17.56 0a.75.75 0 010 1.06l-3.97 3.97h2.69a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75V4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0zM3.75 15a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-2.69l-3.97 3.97a.75.75 0 01-1.06-1.06l3.97-3.97H4.5a.75.75 0 01-.75-.75zm10.5 0a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-2.69l3.97 3.97a.75.75 0 11-1.06 1.06l-3.97-3.97v2.69a.75.75 0 01-1.5 0V15z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowsPointingOut(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowsRightLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowsUpDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiAtSymbol(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBackspace(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBackward(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" }, "child": [] }] })(props);
}
function HiBanknotes(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" }, "child": [] }] })(props);
}
function HiBars2(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBars3BottomLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBars3BottomRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBars3CenterLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBars3(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBars4(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBarsArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm0 4.5A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm15-.75A.75.75 0 0118 9v10.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V9a.75.75 0 01.75-.75zm-15 5.25a.75.75 0 01.75-.75h9.75a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBarsArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBattery0(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M.75 9.75a3 3 0 013-3h15a3 3 0 013 3v.038c.856.173 1.5.93 1.5 1.837v2.25c0 .907-.644 1.664-1.5 1.838v.037a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6zm19.5 0a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-6z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBattery100(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15zM4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H4.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBattery50(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75h6.75A.75.75 0 0012 15v-4.5a.75.75 0 00-.75-.75H4.5z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBeaker(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBellAlert(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBellSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.57 16.476c-.223.082-.448.161-.674.238L7.319 4.137A6.75 6.75 0 0118.75 9v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.25 9c0-.184.007-.366.022-.546l10.384 10.384a3.751 3.751 0 01-7.396-1.119 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBellSnooze(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0zm.75-10.5a.75.75 0 000 1.5h1.599l-2.223 3.334A.75.75 0 0010.5 13.5h3a.75.75 0 000-1.5h-1.599l2.223-3.334A.75.75 0 0013.5 7.5h-3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBell(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBoltSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M20.798 11.012l-3.188 3.416L9.462 6.28l4.24-4.542a.75.75 0 011.272.71L12.982 9.75h7.268a.75.75 0 01.548 1.262zM3.202 12.988L6.39 9.572l8.148 8.148-4.24 4.542a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262zM3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18z" }, "child": [] }] })(props);
}
function HiBolt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBookOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" }, "child": [] }] })(props);
}
function HiBookmarkSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.25 5.507v11.561L5.853 2.671c.15-.043.306-.075.467-.094a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93zM3.75 21V6.932l14.063 14.063L12 18.088l-7.165 3.583A.75.75 0 013.75 21z" }, "child": [] }] })(props);
}
function HiBookmarkSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBookmark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBriefcase(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" }, "child": [] }] })(props);
}
function HiBugAnt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.478 1.6a.75.75 0 01.273 1.025 3.72 3.72 0 00-.425 1.122c.058.057.118.114.18.168A4.491 4.491 0 0112 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 00-.426-1.126.75.75 0 111.298-.75 5.22 5.22 0 01.671 2.045.75.75 0 01-.187.582c-.241.27-.505.52-.787.749a4.495 4.495 0 01.216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.741a23.122 23.122 0 003.832-.802 23.241 23.241 0 00-.345-2.634.75.75 0 011.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 01-.516.749c-1.527.5-3.119.855-4.76 1.05-.074.38-.22.735-.423 1.05a24.61 24.61 0 015.943 1.358.75.75 0 01.492.75 24.665 24.665 0 01-1.189 6.25.75.75 0 01-1.425-.47 23.141 23.141 0 001.077-5.307c-.5-.168-1.009-.32-1.524-.454.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.134-1.022.286-1.522.454a23.14 23.14 0 001.077 5.308.75.75 0 01-1.425.468 24.663 24.663 0 01-1.19-6.25.75.75 0 01.493-.749 24.593 24.593 0 014.964-1.24h.01c.321-.046.644-.085.969-.118a2.982 2.982 0 01-.424-1.05 24.614 24.614 0 01-4.76-1.05.75.75 0 01-.516-.75c.057-1.161.194-2.302.405-3.417a.75.75 0 011.474.28c-.164.862-.28 1.74-.345 2.634 1.237.37 2.517.641 3.832.802.085-.265.207-.514.359-.74a18.732 18.732 0 01-.547-.082c-.664-.108-1.311-.611-1.417-1.403a4.535 4.535 0 01.217-2.103 6.788 6.788 0 01-.788-.751.75.75 0 01-.187-.583 5.22 5.22 0 01.67-2.04.75.75 0 011.026-.273z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBuildingLibrary(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" }, "child": [] }] })(props);
}
function HiBuildingOffice2(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBuildingOffice(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiBuildingStorefront(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCake(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z" }, "child": [] }] })(props);
}
function HiCalculator(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.32 1.827a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93zM7.5 11.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H8.25zm-.75 3a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75H8.25zm1.748-6a.75.75 0 01.75-.75h.007a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.007a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.007zm-.75 3a.75.75 0 01.75-.75h.007a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.007a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75h-.007zm1.754-6a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.008zm-.75 3a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75h-.008zm1.748-6a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.008zm-8.25-6A.75.75 0 018.25 6h7.5a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-.75zm9 9a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-2.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCalendarDays(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCalendar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCamera(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChartBarSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChartBar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" }, "child": [] }] })(props);
}
function HiChartPie(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChatBubbleBottomCenterText(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChatBubbleBottomCenter(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChatBubbleLeftEllipsis(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChatBubbleLeftRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" }, "child": [] }, { "tag": "path", "attr": { "d": "M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" }, "child": [] }] })(props);
}
function HiChatBubbleLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChatBubbleOvalLeftEllipsis(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChatBubbleOvalLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCheckBadge(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCheckCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChevronDoubleDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChevronDoubleLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChevronDoubleRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChevronDoubleUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChevronDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChevronLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChevronRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChevronUpDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChevronUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCircleStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" }, "child": [] }] })(props);
}
function HiClipboardDocumentCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiClipboardDocumentList(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiClipboardDocument(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z" }, "child": [] }, { "tag": "path", "attr": { "d": "M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z" }, "child": [] }] })(props);
}
function HiClipboard(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiClock(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCloudArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCloudArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCloud(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCodeBracketSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCodeBracket(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCog6Tooth(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCog8Tooth(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCog(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCommandLine(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiComputerDesktop(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCpuChip(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M16.5 7.5h-9v9h9v-9z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCreditCard(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCubeTransparent(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCube(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" }, "child": [] }] })(props);
}
function HiCurrencyBangladeshi(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM10.5 7.963a1.5 1.5 0 00-2.17-1.341l-.415.207a.75.75 0 00.67 1.342L9 7.963V9.75h-.75a.75.75 0 100 1.5H9v4.688c0 .563.26 1.198.867 1.525A4.501 4.501 0 0016.41 14.4c.199-.977-.636-1.649-1.415-1.649h-.745a.75.75 0 100 1.5h.656a3.002 3.002 0 01-4.327 1.893.113.113 0 01-.045-.051.336.336 0 01-.034-.154V11.25h5.25a.75.75 0 000-1.5H10.5V7.963z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCurrencyDollar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCurrencyEuro(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.902 7.098a3.75 3.75 0 013.903-.884.75.75 0 10.498-1.415A5.25 5.25 0 008.005 9.75H7.5a.75.75 0 000 1.5h.054a5.281 5.281 0 000 1.5H7.5a.75.75 0 000 1.5h.505a5.25 5.25 0 006.494 2.701.75.75 0 00-.498-1.415 3.75 3.75 0 01-4.252-1.286h3.001a.75.75 0 000-1.5H9.075a3.77 3.77 0 010-1.5h3.675a.75.75 0 000-1.5h-3c.105-.14.221-.274.348-.402z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCurrencyPound(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9.763 9.51a2.25 2.25 0 013.828-1.351.75.75 0 001.06-1.06 3.75 3.75 0 00-6.38 2.252c-.033.307 0 .595.032.822l.154 1.077H8.25a.75.75 0 000 1.5h.421l.138.964a3.75 3.75 0 01-.358 2.208l-.122.242a.75.75 0 00.908 1.047l1.539-.512a1.5 1.5 0 01.948 0l.655.218a3 3 0 002.29-.163l.666-.333a.75.75 0 10-.67-1.342l-.667.333a1.5 1.5 0 01-1.145.082l-.654-.218a3 3 0 00-1.898 0l-.06.02a5.25 5.25 0 00.053-1.794l-.108-.752H12a.75.75 0 000-1.5H9.972l-.184-1.29a1.863 1.863 0 01-.025-.45z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCurrencyRupee(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCurrencyYen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9.624 7.084a.75.75 0 00-1.248.832l2.223 3.334H9a.75.75 0 000 1.5h2.25v1.5H9a.75.75 0 000 1.5h2.25v1.5a.75.75 0 001.5 0v-1.5H15a.75.75 0 000-1.5h-2.25v-1.5H15a.75.75 0 000-1.5h-1.599l2.223-3.334a.75.75 0 10-1.248-.832L12 10.648 9.624 7.084z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCursorArrowRays(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCursorArrowRipple(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M17.303 5.197A7.5 7.5 0 006.697 15.803a.75.75 0 01-1.061 1.061A9 9 0 1121 10.5a.75.75 0 01-1.5 0c0-1.92-.732-3.839-2.197-5.303zm-2.121 2.121a4.5 4.5 0 00-6.364 6.364.75.75 0 11-1.06 1.06A6 6 0 1118 10.5a.75.75 0 01-1.5 0c0-1.153-.44-2.303-1.318-3.182zm-3.634 1.314a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiDevicePhoneMobile(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiDeviceTablet(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10.5 18a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.125 1.5A3.375 3.375 0 003.75 4.875v14.25A3.375 3.375 0 007.125 22.5h9.75a3.375 3.375 0 003.375-3.375V4.875A3.375 3.375 0 0016.875 1.5h-9.75zM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 016 19.125V4.875z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiDocumentArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" }, "child": [] }] })(props);
}
function HiDocumentArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6.905 9.97a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72V18a.75.75 0 001.5 0v-4.19l1.72 1.72a.75.75 0 101.06-1.06l-3-3z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" }, "child": [] }] })(props);
}
function HiDocumentChartBar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 17.25a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zm2.25-3a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-5.25z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" }, "child": [] }] })(props);
}
function HiDocumentCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" }, "child": [] }] })(props);
}
function HiDocumentDuplicate(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" }, "child": [] }, { "tag": "path", "attr": { "d": "M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" }, "child": [] }] })(props);
}
function HiDocumentMagnifyingGlass(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11.625 16.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 001.06-1.06l-1.047-1.048A3.375 3.375 0 1011.625 18z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" }, "child": [] }] })(props);
}
function HiDocumentMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 14.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5H9.75z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" }, "child": [] }] })(props);
}
function HiDocumentPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" }, "child": [] }] })(props);
}
function HiDocumentText(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" }, "child": [] }] })(props);
}
function HiDocument(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" }, "child": [] }, { "tag": "path", "attr": { "d": "M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" }, "child": [] }] })(props);
}
function HiEllipsisHorizontalCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiEllipsisHorizontal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiEllipsisVertical(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiEnvelopeOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" }, "child": [] }, { "tag": "path", "attr": { "d": "M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" }, "child": [] }] })(props);
}
function HiEnvelope(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }, "child": [] }, { "tag": "path", "attr": { "d": "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" }, "child": [] }] })(props);
}
function HiExclamationCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiExclamationTriangle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiEyeDropper(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M16.098 2.598a3.75 3.75 0 113.622 6.275l-1.72.46V12a.75.75 0 01-.22.53l-.75.75a.75.75 0 01-1.06 0l-.97-.97-7.94 7.94a2.56 2.56 0 01-1.81.75 1.06 1.06 0 00-.75.31l-.97.97a.75.75 0 01-1.06 0l-.75-.75a.75.75 0 010-1.06l.97-.97a1.06 1.06 0 00.31-.75c0-.68.27-1.33.75-1.81L11.69 9l-.97-.97a.75.75 0 010-1.06l.75-.75A.75.75 0 0112 6h2.666l.461-1.72c.165-.617.49-1.2.971-1.682zm-3.348 7.463L4.81 18a1.06 1.06 0 00-.31.75c0 .318-.06.63-.172.922a2.56 2.56 0 01.922-.172c.281 0 .551-.112.75-.31l7.94-7.94-1.19-1.19z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiEyeSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" }, "child": [] }, { "tag": "path", "attr": { "d": "M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" }, "child": [] }, { "tag": "path", "attr": { "d": "M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" }, "child": [] }] })(props);
}
function HiEye(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12 15a3 3 0 100-6 3 3 0 000 6z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiFaceFrown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiFaceSmile(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiFilm(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiFingerPrint(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 3.75a6.715 6.715 0 00-3.722 1.118.75.75 0 11-.828-1.25 8.25 8.25 0 0112.8 6.883c0 3.014-.574 5.897-1.62 8.543a.75.75 0 01-1.395-.551A21.69 21.69 0 0018.75 10.5 6.75 6.75 0 0012 3.75zM6.157 5.739a.75.75 0 01.21 1.04A6.715 6.715 0 005.25 10.5c0 1.613-.463 3.12-1.265 4.393a.75.75 0 01-1.27-.8A6.715 6.715 0 003.75 10.5c0-1.68.503-3.246 1.367-4.55a.75.75 0 011.04-.211zM12 7.5a3 3 0 00-3 3c0 3.1-1.176 5.927-3.105 8.056a.75.75 0 11-1.112-1.008A10.459 10.459 0 007.5 10.5a4.5 4.5 0 119 0c0 .547-.022 1.09-.067 1.626a.75.75 0 01-1.495-.123c.041-.495.062-.996.062-1.503a3 3 0 00-3-3zm0 2.25a.75.75 0 01.75.75A15.69 15.69 0 018.97 20.738a.75.75 0 01-1.14-.975A14.19 14.19 0 0011.25 10.5a.75.75 0 01.75-.75zm3.239 5.183a.75.75 0 01.515.927 19.415 19.415 0 01-2.585 5.544.75.75 0 11-1.243-.84 17.912 17.912 0 002.386-5.116.75.75 0 01.927-.515z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiFire(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiFlag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiFolderArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiFolderMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zM9 12.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiFolderOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z" }, "child": [] }] })(props);
}
function HiFolderPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V10.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiFolder(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" }, "child": [] }] })(props);
}
function HiForward(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" }, "child": [] }] })(props);
}
function HiFunnel(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiGif(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm9 4.5a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zm1.5 0a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H16.5v2.25H18a.75.75 0 010 1.5h-1.5v3a.75.75 0 01-1.5 0v-7.5zM6.636 9.78c.404-.575.867-.78 1.25-.78s.846.205 1.25.78a.75.75 0 001.228-.863C9.738 8.027 8.853 7.5 7.886 7.5c-.966 0-1.852.527-2.478 1.417-.62.882-.908 2-.908 3.083 0 1.083.288 2.201.909 3.083.625.89 1.51 1.417 2.477 1.417.967 0 1.852-.527 2.478-1.417a.75.75 0 00.136-.431V12a.75.75 0 00-.75-.75h-1.5a.75.75 0 000 1.5H9v1.648c-.37.44-.774.602-1.114.602-.383 0-.846-.205-1.25-.78C6.226 13.638 6 12.837 6 12c0-.837.226-1.638.636-2.22z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiGiftTop(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11.25 3v4.046a3 3 0 00-4.277 4.204H1.5v-6A2.25 2.25 0 013.75 3h7.5zM12.75 3v4.011a3 3 0 014.239 4.239H22.5v-6A2.25 2.25 0 0020.25 3h-7.5zM22.5 12.75h-8.983a4.125 4.125 0 004.108 3.75.75.75 0 010 1.5 5.623 5.623 0 01-4.875-2.817V21h7.5a2.25 2.25 0 002.25-2.25v-6zM11.25 21v-5.817A5.623 5.623 0 016.375 18a.75.75 0 010-1.5 4.126 4.126 0 004.108-3.75H1.5v6A2.25 2.25 0 003.75 21h7.5z" }, "child": [] }, { "tag": "path", "attr": { "d": "M11.085 10.354c.03.297.038.575.036.805a7.484 7.484 0 01-.805-.036c-.833-.084-1.677-.325-2.195-.843a1.5 1.5 0 012.122-2.12c.517.517.759 1.36.842 2.194zM12.877 10.354c-.03.297-.038.575-.036.805.23.002.508-.006.805-.036.833-.084 1.677-.325 2.195-.843A1.5 1.5 0 0013.72 8.16c-.518.518-.76 1.362-.843 2.194z" }, "child": [] }] })(props);
}
function HiGift(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" }, "child": [] }] })(props);
}
function HiGlobeAlt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" }, "child": [] }] })(props);
}
function HiGlobeAmericas(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiGlobeAsiaAustralia(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiGlobeEuropeAfrica(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiHandRaised(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" }, "child": [] }] })(props);
}
function HiHandThumbDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" }, "child": [] }] })(props);
}
function HiHandThumbUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" }, "child": [] }] })(props);
}
function HiHashtag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.097 1.515a.75.75 0 01.589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 111.47.294L16.665 7.5h3.585a.75.75 0 010 1.5h-3.885l-1.2 6h3.585a.75.75 0 010 1.5h-3.885l-1.08 5.397a.75.75 0 11-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 01-1.47-.294l1.02-5.103H3.75a.75.75 0 110-1.5h3.885l1.2-6H5.25a.75.75 0 010-1.5h3.885l1.08-5.397a.75.75 0 01.882-.588zM10.365 9l-1.2 6h4.47l1.2-6h-4.47z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiHeart(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" }, "child": [] }] })(props);
}
function HiHomeModern(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiHome(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" }, "child": [] }] })(props);
}
function HiIdentification(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiInboxArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiInboxStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 00-.722-1.952l-3.285-3.832A3 3 0 0016.215 3h-8.43a3 3 0 00-2.278 1.048L2.222 7.88A3 3 0 001.5 9.832zM7.785 4.5a1.5 1.5 0 00-1.139.524L3.881 8.25h3.165a3 3 0 012.496 1.336l.164.246a1.5 1.5 0 001.248.668h2.092a1.5 1.5 0 001.248-.668l.164-.246a3 3 0 012.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 00-1.139-.524h-8.43z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 003 3h15a3 3 0 003-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 00-2.496 1.336l-.164.246a1.5 1.5 0 01-1.248.668h-2.092a1.5 1.5 0 01-1.248-.668l-.164-.246A3 3 0 007.046 15H2.812z" }, "child": [] }] })(props);
}
function HiInbox(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiInformationCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiKey(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiLanguage(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiLifebuoy(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M19.449 8.448L16.388 11a4.52 4.52 0 010 2.002l3.061 2.55a8.275 8.275 0 000-7.103zM15.552 19.45L13 16.388a4.52 4.52 0 01-2.002 0l-2.55 3.061a8.275 8.275 0 007.103 0zM4.55 15.552L7.612 13a4.52 4.52 0 010-2.002L4.551 8.45a8.275 8.275 0 000 7.103zM8.448 4.55L11 7.612a4.52 4.52 0 012.002 0l2.55-3.061a8.275 8.275 0 00-7.103 0zm8.657-.86a9.776 9.776 0 011.79 1.415 9.776 9.776 0 011.414 1.788 9.764 9.764 0 010 10.211 9.777 9.777 0 01-1.415 1.79 9.777 9.777 0 01-1.788 1.414 9.764 9.764 0 01-10.212 0 9.776 9.776 0 01-1.788-1.415 9.776 9.776 0 01-1.415-1.788 9.764 9.764 0 010-10.212 9.774 9.774 0 011.415-1.788A9.774 9.774 0 016.894 3.69a9.764 9.764 0 0110.211 0zM14.121 9.88a2.985 2.985 0 00-1.11-.704 3.015 3.015 0 00-2.022 0 2.985 2.985 0 00-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 000 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 001.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 000-2.022 2.985 2.985 0 00-.704-1.11z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiLightBulb(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiLink(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiListBullet(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiLockClosed(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiLockOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" }, "child": [] }] })(props);
}
function HiMagnifyingGlassCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMagnifyingGlassMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5zm4.5 0a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMagnifyingGlassPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5zm8.25-3.75a.75.75 0 01.75.75v2.25h2.25a.75.75 0 010 1.5h-2.25v2.25a.75.75 0 01-1.5 0v-2.25H7.5a.75.75 0 010-1.5h2.25V7.5a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMagnifyingGlass(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMapPin(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMap(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMegaphone(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 0 10-1.409.516c.059.16.116.321.17.483z" }, "child": [] }] })(props);
}
function HiMicrophone(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" }, "child": [] }, { "tag": "path", "attr": { "d": "M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" }, "child": [] }] })(props);
}
function HiMinusCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMinusSmall(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMoon(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMusicalNote(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiNewspaper(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" }, "child": [] }] })(props);
}
function HiNoSymbol(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPaintBrush(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPaperAirplane(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" }, "child": [] }] })(props);
}
function HiPaperClip(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPauseCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPause(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPencilSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" }, "child": [] }, { "tag": "path", "attr": { "d": "M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" }, "child": [] }] })(props);
}
function HiPencil(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" }, "child": [] }] })(props);
}
function HiPhoneArrowDownLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPhoneArrowUpRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPhoneXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.22 3.22a.75.75 0 011.06 0L18 4.94l1.72-1.72a.75.75 0 111.06 1.06L19.06 6l1.72 1.72a.75.75 0 01-1.06 1.06L18 7.06l-1.72 1.72a.75.75 0 11-1.06-1.06L16.94 6l-1.72-1.72a.75.75 0 010-1.06zM1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPhone(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPhoto(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPlayCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPlayPause(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M15 6.75a.75.75 0 00-.75.75V18a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75H15zM20.25 6.75a.75.75 0 00-.75.75V18c0 .414.336.75.75.75H21a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-.75zM5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L5.055 7.061z" }, "child": [] }] })(props);
}
function HiPlay(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPlusCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPlusSmall(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPower(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPresentationChartBar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPresentationChartLine(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPrinter(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiPuzzlePiece(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" }, "child": [] }] })(props);
}
function HiQrCode(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 9.375v-4.5zM4.875 4.5a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 01-1.875-1.875v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75A.75.75 0 016 7.5v-.75zm9.75 0A.75.75 0 0116.5 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 19.125v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875-.75a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM6 16.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm9.75 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm-3 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiQuestionMarkCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiQueueList(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" }, "child": [] }] })(props);
}
function HiRadio(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M20.432 4.103a.75.75 0 00-.364-1.455L4.128 6.632l-.2.033C2.498 6.904 1.5 8.158 1.5 9.575v9.175a3 3 0 003 3h15a3 3 0 003-3V9.574c0-1.416-.997-2.67-2.429-2.909a49.016 49.016 0 00-7.255-.658l7.616-1.904zm-9.585 8.56a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.06 0l-.006-.005a.75.75 0 010-1.061l.005-.005a.75.75 0 011.06 0l.006.005zM9.781 15.85a.75.75 0 001.061 0l.005-.005a.75.75 0 000-1.061l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zm-1.055-1.066a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.061 0l-.005-.005a.75.75 0 010-1.06l.005-.006a.75.75 0 011.06 0l.006.005zM7.66 13.73a.75.75 0 001.061 0l.005-.006a.75.75 0 000-1.06l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zM9.255 9.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h.008zm3.624 3.28a.75.75 0 00.275-1.025L13.15 12a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.024l.004.007a.75.75 0 001.024.274l.007-.003zm-1.38 5.126a.75.75 0 01-1.024-.274l-.004-.007a.75.75 0 01.275-1.024l.006-.004a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.282-6.776a.75.75 0 00-.274-1.025l-.007-.003a.75.75 0 00-1.024.274l-.004.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zm1.369 5.129a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025l.004-.006a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-.145-1.502a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zm-3.75 2.243a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V18a.75.75 0 01.75-.75h.008zm-2.871-.47a.75.75 0 00.274-1.025l-.003-.006a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.025l.004.006a.75.75 0 001.024.274l.007-.003zm1.366-5.12a.75.75 0 01-1.025-.274l-.004-.006a.75.75 0 01.275-1.025l.006-.003a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.281 6.215a.75.75 0 00-.275-1.024l-.006-.004a.75.75 0 00-1.025.274l-.003.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zM6.655 12.76a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025L5.353 12a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-1.15 2.248a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zM17.25 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1.5 6a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiReceiptPercent(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 001.029.696l3.471-1.388 3.472 1.388a.75.75 0 00.556 0l3.472-1.388 3.471 1.388a.75.75 0 001.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0012 1.5zm3.53 7.28a.75.75 0 00-1.06-1.06l-6 6a.75.75 0 101.06 1.06l6-6zM8.625 9a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm5.625 3.375a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiReceiptRefund(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 001.029.696l3.471-1.388 3.472 1.388a.75.75 0 00.556 0l3.472-1.388 3.471 1.388a.75.75 0 001.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0012 1.5zm-.97 6.53a.75.75 0 10-1.06-1.06L7.72 9.22a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06l-.97-.97h3.065a1.875 1.875 0 010 3.75H12a.75.75 0 000 1.5h1.125a3.375 3.375 0 100-6.75h-3.064l.97-.97z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiRectangleGroup(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiRectangleStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" }, "child": [] }] })(props);
}
function HiRocketLaunch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" }, "child": [] }] })(props);
}
function HiRss(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.75 4.5a.75.75 0 01.75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 01-.75-.75V4.5zm0 6.75a.75.75 0 01.75-.75h.75a8.25 8.25 0 018.25 8.25v.75a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-.75a6 6 0 00-6-6H4.5a.75.75 0 01-.75-.75v-.75zm0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiScale(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiScissors(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.128 9.155a3.751 3.751 0 11.713-1.321l1.136.656a.75.75 0 01.222 1.104l-.006.007a.75.75 0 01-1.032.157 1.421 1.421 0 00-.113-.072l-.92-.531zm-4.827-3.53a2.25 2.25 0 013.994 2.063.756.756 0 00-.122.23 2.25 2.25 0 01-3.872-2.293zM13.348 8.272a5.073 5.073 0 00-3.428 3.57c-.101.387-.158.79-.165 1.202a1.415 1.415 0 01-.707 1.201l-.96.554a3.751 3.751 0 10.734 1.309l13.729-7.926a.75.75 0 00-.181-1.374l-.803-.215a5.25 5.25 0 00-2.894.05l-5.325 1.629zm-9.223 7.03a2.25 2.25 0 102.25 3.897 2.25 2.25 0 00-2.25-3.897zM12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M16.372 12.615a.75.75 0 01.75 0l5.43 3.135a.75.75 0 01-.182 1.374l-.802.215a5.25 5.25 0 01-2.894-.051l-5.147-1.574a.75.75 0 01-.156-1.367l3-1.732z" }, "child": [] }] })(props);
}
function HiServerStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiServer(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.08 5.227A3 3 0 016.979 3H17.02a3 3 0 012.9 2.227l2.113 7.926A5.228 5.228 0 0018.75 12H5.25a5.228 5.228 0 00-3.284 1.153L4.08 5.227z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.25 13.5a3.75 3.75 0 100 7.5h13.5a3.75 3.75 0 100-7.5H5.25zm10.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5zm3.75-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiShare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiShieldCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiShieldExclamation(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.515 12.74 12.74 0 01.635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 01-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 01.722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 15a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H12z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiShoppingBag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiShoppingCart(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" }, "child": [] }] })(props);
}
function HiSignalSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.47 2.47a.75.75 0 011.06 0l8.407 8.407a1.125 1.125 0 011.186 1.186l1.462 1.461a3.001 3.001 0 00-.464-3.645.75.75 0 111.061-1.061 4.501 4.501 0 01.486 5.79l1.072 1.072a6.001 6.001 0 00-.497-7.923.75.75 0 011.06-1.06 7.501 7.501 0 01.505 10.05l1.064 1.065a9 9 0 00-.508-12.176.75.75 0 011.06-1.06c3.923 3.922 4.093 10.175.512 14.3l1.594 1.594a.75.75 0 11-1.06 1.06l-2.106-2.105-2.121-2.122h-.001l-4.705-4.706a.747.747 0 01-.127-.126L2.47 3.53a.75.75 0 010-1.061zm1.189 4.422a.75.75 0 01.326 1.01 9.004 9.004 0 001.651 10.462.75.75 0 11-1.06 1.06C1.27 16.12.63 11.165 2.648 7.219a.75.75 0 011.01-.326zM5.84 9.134a.75.75 0 01.472.95 6 6 0 001.444 6.159.75.75 0 01-1.06 1.06A7.5 7.5 0 014.89 9.606a.75.75 0 01.95-.472zm2.341 2.653a.75.75 0 01.848.638c.088.62.37 1.218.849 1.696a.75.75 0 01-1.061 1.061 4.483 4.483 0 01-1.273-2.546.75.75 0 01.637-.848z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiSignal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.636 4.575a.75.75 0 010 1.06 9 9 0 000 12.729.75.75 0 01-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 011.06 0zm12.728 0a.75.75 0 011.06 0c4.101 4.1 4.101 10.749 0 14.85a.75.75 0 11-1.06-1.061 9 9 0 000-12.728.75.75 0 010-1.06zM7.757 6.696a.75.75 0 010 1.061 6 6 0 000 8.485.75.75 0 01-1.06 1.061 7.5 7.5 0 010-10.607.75.75 0 011.06 0zm8.486 0a.75.75 0 011.06 0 7.5 7.5 0 010 10.607.75.75 0 01-1.06-1.06 6 6 0 000-8.486.75.75 0 010-1.06zM9.879 8.818a.75.75 0 010 1.06 3 3 0 000 4.243.75.75 0 11-1.061 1.06 4.5 4.5 0 010-6.363.75.75 0 011.06 0zm4.242 0a.75.75 0 011.061 0 4.5 4.5 0 010 6.364.75.75 0 01-1.06-1.06 3 3 0 000-4.244.75.75 0 010-1.06zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiSparkles(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiSpeakerWave(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" }, "child": [] }, { "tag": "path", "attr": { "d": "M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" }, "child": [] }] })(props);
}
function HiSpeakerXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" }, "child": [] }] })(props);
}
function HiSquare2Stack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M16.5 6a3 3 0 00-3-3H6a3 3 0 00-3 3v7.5a3 3 0 003 3v-6A4.5 4.5 0 0110.5 6h6z" }, "child": [] }, { "tag": "path", "attr": { "d": "M18 7.5a3 3 0 013 3V18a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3H18z" }, "child": [] }] })(props);
}
function HiSquare3Stack3D(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" }, "child": [] }, { "tag": "path", "attr": { "d": "M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" }, "child": [] }, { "tag": "path", "attr": { "d": "M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" }, "child": [] }] })(props);
}
function HiSquares2X2(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiSquaresPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" }, "child": [] }] })(props);
}
function HiStar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiStopCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiStop(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiSun(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" }, "child": [] }] })(props);
}
function HiSwatch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" }, "child": [] }] })(props);
}
function HiTableCells(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiTag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiTicket(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiTrash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiTrophy(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiTruck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" }, "child": [] }, { "tag": "path", "attr": { "d": "M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" }, "child": [] }, { "tag": "path", "attr": { "d": "M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" }, "child": [] }] })(props);
}
function HiTv(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M19.5 6h-15v9h15V6z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiUserCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiUserGroup(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" }, "child": [] }] })(props);
}
function HiUserMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10.375 2.25a4.125 4.125 0 100 8.25 4.125 4.125 0 000-8.25zM10.375 12a7.125 7.125 0 00-7.124 7.247.75.75 0 00.363.63 13.067 13.067 0 006.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 00.364-.63l.001-.12v-.002A7.125 7.125 0 0010.375 12zM16 9.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6z" }, "child": [] }] })(props);
}
function HiUserPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" }, "child": [] }] })(props);
}
function HiUser(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiUsers(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" }, "child": [] }] })(props);
}
function HiVariable(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M19.253 2.292a.75.75 0 01.955.461A28.123 28.123 0 0121.75 12c0 3.266-.547 6.388-1.542 9.247a.75.75 0 11-1.416-.494c.94-2.7 1.458-5.654 1.458-8.753s-.519-6.054-1.458-8.754a.75.75 0 01.461-.954zm-14.227.013a.75.75 0 01.414.976A23.183 23.183 0 003.75 12c0 3.085.6 6.027 1.69 8.718a.75.75 0 01-1.39.563c-1.161-2.867-1.8-6-1.8-9.281 0-3.28.639-6.414 1.8-9.281a.75.75 0 01.976-.414zm4.275 5.052a1.5 1.5 0 012.21.803l.716 2.148L13.6 8.246a2.438 2.438 0 012.978-.892l.213.09a.75.75 0 11-.584 1.381l-.214-.09a.937.937 0 00-1.145.343l-2.021 3.033 1.084 3.255 1.445-.89a.75.75 0 11.786 1.278l-1.444.889a1.5 1.5 0 01-2.21-.803l-.716-2.148-1.374 2.062a2.437 2.437 0 01-2.978.892l-.213-.09a.75.75 0 01.584-1.381l.214.09a.938.938 0 001.145-.344l2.021-3.032-1.084-3.255-1.445.89a.75.75 0 11-.786-1.278l1.444-.89z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiVideoCameraSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.5 17.69c0 .471-.202.86-.504 1.124l-4.746-4.746V7.939l2.69-2.689c.944-.945 2.56-.276 2.56 1.06v11.38zM15.75 7.5v5.068L7.682 4.5h5.068a3 3 0 013 3zM1.5 7.5c0-.782.3-1.494.79-2.028l12.846 12.846A2.995 2.995 0 0112.75 19.5H4.5a3 3 0 01-3-3v-9z" }, "child": [] }] })(props);
}
function HiVideoCamera(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" }, "child": [] }] })(props);
}
function HiViewColumns(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z" }, "child": [] }] })(props);
}
function HiViewfinderCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M6 3a3 3 0 00-3 3v1.5a.75.75 0 001.5 0V6A1.5 1.5 0 016 4.5h1.5a.75.75 0 000-1.5H6zM16.5 3a.75.75 0 000 1.5H18A1.5 1.5 0 0119.5 6v1.5a.75.75 0 001.5 0V6a3 3 0 00-3-3h-1.5zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM4.5 16.5a.75.75 0 00-1.5 0V18a3 3 0 003 3h1.5a.75.75 0 000-1.5H6A1.5 1.5 0 014.5 18v-1.5zM21 16.5a.75.75 0 00-1.5 0V18a1.5 1.5 0 01-1.5 1.5h-1.5a.75.75 0 000 1.5H18a3 3 0 003-3v-1.5z" }, "child": [] }] })(props);
}
function HiWallet(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" }, "child": [] }] })(props);
}
function HiWifi(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiWindow(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm18 3H3.75v9a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V9zm-15-3.75A.75.75 0 004.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H5.25zm1.5.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V6zm3-.75A.75.75 0 009 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H9.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiWrenchScrewdriver(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiWrench(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiXCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiOutlineAcademicCap(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" }, "child": [] }] })(props);
}
function HiOutlineAdjustmentsHorizontal(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" }, "child": [] }] })(props);
}
function HiOutlineAdjustmentsVertical(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" }, "child": [] }] })(props);
}
function HiOutlineArchiveBoxArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" }, "child": [] }] })(props);
}
function HiOutlineArchiveBoxXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" }, "child": [] }] })(props);
}
function HiOutlineArchiveBox(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" }, "child": [] }] })(props);
}
function HiOutlineArrowDownCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineArrowDownLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" }, "child": [] }] })(props);
}
function HiOutlineArrowDownOnSquareStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" }, "child": [] }] })(props);
}
function HiOutlineArrowDownOnSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" }, "child": [] }] })(props);
}
function HiOutlineArrowDownRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" }, "child": [] }] })(props);
}
function HiOutlineArrowDownTray(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" }, "child": [] }] })(props);
}
function HiOutlineArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" }, "child": [] }] })(props);
}
function HiOutlineArrowLeftCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineArrowLeftOnRectangle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" }, "child": [] }] })(props);
}
function HiOutlineArrowLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" }, "child": [] }] })(props);
}
function HiOutlineArrowLongDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" }, "child": [] }] })(props);
}
function HiOutlineArrowLongLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" }, "child": [] }] })(props);
}
function HiOutlineArrowLongRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" }, "child": [] }] })(props);
}
function HiOutlineArrowLongUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" }, "child": [] }] })(props);
}
function HiOutlineArrowPathRoundedSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" }, "child": [] }] })(props);
}
function HiOutlineArrowPath(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" }, "child": [] }] })(props);
}
function HiOutlineArrowRightCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineArrowRightOnRectangle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" }, "child": [] }] })(props);
}
function HiOutlineArrowRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }, "child": [] }] })(props);
}
function HiOutlineArrowSmallDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" }, "child": [] }] })(props);
}
function HiOutlineArrowSmallLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" }, "child": [] }] })(props);
}
function HiOutlineArrowSmallRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" }, "child": [] }] })(props);
}
function HiOutlineArrowSmallUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" }, "child": [] }] })(props);
}
function HiOutlineArrowTopRightOnSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" }, "child": [] }] })(props);
}
function HiOutlineArrowTrendingDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" }, "child": [] }] })(props);
}
function HiOutlineArrowTrendingUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" }, "child": [] }] })(props);
}
function HiOutlineArrowUpCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineArrowUpLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25" }, "child": [] }] })(props);
}
function HiOutlineArrowUpOnSquareStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" }, "child": [] }] })(props);
}
function HiOutlineArrowUpOnSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" }, "child": [] }] })(props);
}
function HiOutlineArrowUpRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" }, "child": [] }] })(props);
}
function HiOutlineArrowUpTray(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" }, "child": [] }] })(props);
}
function HiOutlineArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" }, "child": [] }] })(props);
}
function HiOutlineArrowUturnDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3" }, "child": [] }] })(props);
}
function HiOutlineArrowUturnLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" }, "child": [] }] })(props);
}
function HiOutlineArrowUturnRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" }, "child": [] }] })(props);
}
function HiOutlineArrowUturnUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3" }, "child": [] }] })(props);
}
function HiOutlineArrowsPointingIn(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" }, "child": [] }] })(props);
}
function HiOutlineArrowsPointingOut(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" }, "child": [] }] })(props);
}
function HiOutlineArrowsRightLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" }, "child": [] }] })(props);
}
function HiOutlineArrowsUpDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" }, "child": [] }] })(props);
}
function HiOutlineAtSymbol(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "d": "M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" }, "child": [] }] })(props);
}
function HiOutlineBackspace(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" }, "child": [] }] })(props);
}
function HiOutlineBackward(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" }, "child": [] }] })(props);
}
function HiOutlineBanknotes(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" }, "child": [] }] })(props);
}
function HiOutlineBars2(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 9h16.5m-16.5 6.75h16.5" }, "child": [] }] })(props);
}
function HiOutlineBars3BottomLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" }, "child": [] }] })(props);
}
function HiOutlineBars3BottomRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" }, "child": [] }] })(props);
}
function HiOutlineBars3CenterLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" }, "child": [] }] })(props);
}
function HiOutlineBars3(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }, "child": [] }] })(props);
}
function HiOutlineBars4(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" }, "child": [] }] })(props);
}
function HiOutlineBarsArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" }, "child": [] }] })(props);
}
function HiOutlineBarsArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" }, "child": [] }] })(props);
}
function HiOutlineBattery0(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" }, "child": [] }] })(props);
}
function HiOutlineBattery100(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" }, "child": [] }] })(props);
}
function HiOutlineBattery50(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" }, "child": [] }] })(props);
}
function HiOutlineBeaker(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" }, "child": [] }] })(props);
}
function HiOutlineBellAlert(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" }, "child": [] }] })(props);
}
function HiOutlineBellSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53" }, "child": [] }] })(props);
}
function HiOutlineBellSnooze(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M10.5 8.25h3l-3 4.5h3" }, "child": [] }] })(props);
}
function HiOutlineBell(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" }, "child": [] }] })(props);
}
function HiOutlineBoltSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21" }, "child": [] }] })(props);
}
function HiOutlineBolt(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" }, "child": [] }] })(props);
}
function HiOutlineBookOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" }, "child": [] }] })(props);
}
function HiOutlineBookmarkSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" }, "child": [] }] })(props);
}
function HiOutlineBookmarkSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" }, "child": [] }] })(props);
}
function HiOutlineBookmark(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" }, "child": [] }] })(props);
}
function HiOutlineBriefcase(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" }, "child": [] }] })(props);
}
function HiOutlineBugAnt(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" }, "child": [] }] })(props);
}
function HiOutlineBuildingLibrary(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" }, "child": [] }] })(props);
}
function HiOutlineBuildingOffice2(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" }, "child": [] }] })(props);
}
function HiOutlineBuildingOffice(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" }, "child": [] }] })(props);
}
function HiOutlineBuildingStorefront(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" }, "child": [] }] })(props);
}
function HiOutlineCake(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" }, "child": [] }] })(props);
}
function HiOutlineCalculator(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" }, "child": [] }] })(props);
}
function HiOutlineCalendarDays(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" }, "child": [] }] })(props);
}
function HiOutlineCalendar(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" }, "child": [] }] })(props);
}
function HiOutlineCamera(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" }, "child": [] }] })(props);
}
function HiOutlineChartBarSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" }, "child": [] }] })(props);
}
function HiOutlineChartBar(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" }, "child": [] }] })(props);
}
function HiOutlineChartPie(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" }, "child": [] }] })(props);
}
function HiOutlineChatBubbleBottomCenterText(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" }, "child": [] }] })(props);
}
function HiOutlineChatBubbleBottomCenter(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" }, "child": [] }] })(props);
}
function HiOutlineChatBubbleLeftEllipsis(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" }, "child": [] }] })(props);
}
function HiOutlineChatBubbleLeftRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" }, "child": [] }] })(props);
}
function HiOutlineChatBubbleLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" }, "child": [] }] })(props);
}
function HiOutlineChatBubbleOvalLeftEllipsis(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" }, "child": [] }] })(props);
}
function HiOutlineChatBubbleOvalLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" }, "child": [] }] })(props);
}
function HiOutlineCheckBadge(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" }, "child": [] }] })(props);
}
function HiOutlineCheckCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M4.5 12.75l6 6 9-13.5" }, "child": [] }] })(props);
}
function HiOutlineChevronDoubleDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" }, "child": [] }] })(props);
}
function HiOutlineChevronDoubleLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" }, "child": [] }] })(props);
}
function HiOutlineChevronDoubleRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" }, "child": [] }] })(props);
}
function HiOutlineChevronDoubleUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" }, "child": [] }] })(props);
}
function HiOutlineChevronDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 8.25l-7.5 7.5-7.5-7.5" }, "child": [] }] })(props);
}
function HiOutlineChevronLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 19.5L8.25 12l7.5-7.5" }, "child": [] }] })(props);
}
function HiOutlineChevronRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.25 4.5l7.5 7.5-7.5 7.5" }, "child": [] }] })(props);
}
function HiOutlineChevronUpDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" }, "child": [] }] })(props);
}
function HiOutlineChevronUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M4.5 15.75l7.5-7.5 7.5 7.5" }, "child": [] }] })(props);
}
function HiOutlineCircleStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" }, "child": [] }] })(props);
}
function HiOutlineClipboardDocumentCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" }, "child": [] }] })(props);
}
function HiOutlineClipboardDocumentList(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" }, "child": [] }] })(props);
}
function HiOutlineClipboardDocument(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" }, "child": [] }] })(props);
}
function HiOutlineClipboard(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" }, "child": [] }] })(props);
}
function HiOutlineClock(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineCloudArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" }, "child": [] }] })(props);
}
function HiOutlineCloudArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" }, "child": [] }] })(props);
}
function HiOutlineCloud(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" }, "child": [] }] })(props);
}
function HiOutlineCodeBracketSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" }, "child": [] }] })(props);
}
function HiOutlineCodeBracket(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" }, "child": [] }] })(props);
}
function HiOutlineCog6Tooth(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }, "child": [] }] })(props);
}
function HiOutlineCog8Tooth(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }, "child": [] }] })(props);
}
function HiOutlineCog(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" }, "child": [] }] })(props);
}
function HiOutlineCommandLine(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" }, "child": [] }] })(props);
}
function HiOutlineComputerDesktop(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" }, "child": [] }] })(props);
}
function HiOutlineCpuChip(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" }, "child": [] }] })(props);
}
function HiOutlineCreditCard(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" }, "child": [] }] })(props);
}
function HiOutlineCubeTransparent(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" }, "child": [] }] })(props);
}
function HiOutlineCube(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" }, "child": [] }] })(props);
}
function HiOutlineCurrencyBangladeshi(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineCurrencyDollar(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineCurrencyEuro(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineCurrencyPound(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineCurrencyRupee(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineCurrencyYen(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineCursorArrowRays(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" }, "child": [] }] })(props);
}
function HiOutlineCursorArrowRipple(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" }, "child": [] }] })(props);
}
function HiOutlineDevicePhoneMobile(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" }, "child": [] }] })(props);
}
function HiOutlineDeviceTablet(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" }, "child": [] }] })(props);
}
function HiOutlineDocumentArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" }, "child": [] }] })(props);
}
function HiOutlineDocumentArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" }, "child": [] }] })(props);
}
function HiOutlineDocumentChartBar(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" }, "child": [] }] })(props);
}
function HiOutlineDocumentCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" }, "child": [] }] })(props);
}
function HiOutlineDocumentDuplicate(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" }, "child": [] }] })(props);
}
function HiOutlineDocumentMagnifyingGlass(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" }, "child": [] }] })(props);
}
function HiOutlineDocumentMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" }, "child": [] }] })(props);
}
function HiOutlineDocumentPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" }, "child": [] }] })(props);
}
function HiOutlineDocumentText(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" }, "child": [] }] })(props);
}
function HiOutlineDocument(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" }, "child": [] }] })(props);
}
function HiOutlineEllipsisHorizontalCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineEllipsisHorizontal(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" }, "child": [] }] })(props);
}
function HiOutlineEllipsisVertical(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" }, "child": [] }] })(props);
}
function HiOutlineEnvelopeOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" }, "child": [] }] })(props);
}
function HiOutlineEnvelope(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" }, "child": [] }] })(props);
}
function HiOutlineExclamationCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" }, "child": [] }] })(props);
}
function HiOutlineExclamationTriangle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" }, "child": [] }] })(props);
}
function HiOutlineEyeDropper(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9" }, "child": [] }] })(props);
}
function HiOutlineEyeSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" }, "child": [] }] })(props);
}
function HiOutlineEye(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }, "child": [] }] })(props);
}
function HiOutlineFaceFrown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" }, "child": [] }] })(props);
}
function HiOutlineFaceSmile(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" }, "child": [] }] })(props);
}
function HiOutlineFilm(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" }, "child": [] }] })(props);
}
function HiOutlineFingerPrint(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" }, "child": [] }] })(props);
}
function HiOutlineFire(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" }, "child": [] }] })(props);
}
function HiOutlineFlag(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" }, "child": [] }] })(props);
}
function HiOutlineFolderArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" }, "child": [] }] })(props);
}
function HiOutlineFolderMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" }, "child": [] }] })(props);
}
function HiOutlineFolderOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" }, "child": [] }] })(props);
}
function HiOutlineFolderPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" }, "child": [] }] })(props);
}
function HiOutlineFolder(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" }, "child": [] }] })(props);
}
function HiOutlineForward(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" }, "child": [] }] })(props);
}
function HiOutlineFunnel(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" }, "child": [] }] })(props);
}
function HiOutlineGif(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" }, "child": [] }] })(props);
}
function HiOutlineGiftTop(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 004.875-4.875V12m6.375 5.25a4.875 4.875 0 01-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 013.182 3.182zM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 113.182-3.182z" }, "child": [] }] })(props);
}
function HiOutlineGift(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" }, "child": [] }] })(props);
}
function HiOutlineGlobeAlt(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" }, "child": [] }] })(props);
}
function HiOutlineGlobeAmericas(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" }, "child": [] }] })(props);
}
function HiOutlineGlobeAsiaAustralia(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" }, "child": [] }] })(props);
}
function HiOutlineGlobeEuropeAfrica(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" }, "child": [] }] })(props);
}
function HiOutlineHandRaised(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" }, "child": [] }] })(props);
}
function HiOutlineHandThumbDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" }, "child": [] }] })(props);
}
function HiOutlineHandThumbUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" }, "child": [] }] })(props);
}
function HiOutlineHashtag(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" }, "child": [] }] })(props);
}
function HiOutlineHeart(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" }, "child": [] }] })(props);
}
function HiOutlineHomeModern(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" }, "child": [] }] })(props);
}
function HiOutlineHome(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" }, "child": [] }] })(props);
}
function HiOutlineIdentification(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" }, "child": [] }] })(props);
}
function HiOutlineInboxArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" }, "child": [] }] })(props);
}
function HiOutlineInboxStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" }, "child": [] }] })(props);
}
function HiOutlineInbox(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" }, "child": [] }] })(props);
}
function HiOutlineInformationCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" }, "child": [] }] })(props);
}
function HiOutlineKey(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" }, "child": [] }] })(props);
}
function HiOutlineLanguage(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" }, "child": [] }] })(props);
}
function HiOutlineLifebuoy(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" }, "child": [] }] })(props);
}
function HiOutlineLightBulb(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" }, "child": [] }] })(props);
}
function HiOutlineLink(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" }, "child": [] }] })(props);
}
function HiOutlineListBullet(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" }, "child": [] }] })(props);
}
function HiOutlineLockClosed(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" }, "child": [] }] })(props);
}
function HiOutlineLockOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" }, "child": [] }] })(props);
}
function HiOutlineMagnifyingGlassCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineMagnifyingGlassMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" }, "child": [] }] })(props);
}
function HiOutlineMagnifyingGlassPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" }, "child": [] }] })(props);
}
function HiOutlineMagnifyingGlass(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" }, "child": [] }] })(props);
}
function HiOutlineMapPin(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" }, "child": [] }] })(props);
}
function HiOutlineMap(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" }, "child": [] }] })(props);
}
function HiOutlineMegaphone(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" }, "child": [] }] })(props);
}
function HiOutlineMicrophone(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" }, "child": [] }] })(props);
}
function HiOutlineMinusCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineMinusSmall(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M18 12H6" }, "child": [] }] })(props);
}
function HiOutlineMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.5 12h-15" }, "child": [] }] })(props);
}
function HiOutlineMoon(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" }, "child": [] }] })(props);
}
function HiOutlineMusicalNote(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" }, "child": [] }] })(props);
}
function HiOutlineNewspaper(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" }, "child": [] }] })(props);
}
function HiOutlineNoSymbol(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" }, "child": [] }] })(props);
}
function HiOutlinePaintBrush(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" }, "child": [] }] })(props);
}
function HiOutlinePaperAirplane(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" }, "child": [] }] })(props);
}
function HiOutlinePaperClip(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" }, "child": [] }] })(props);
}
function HiOutlinePauseCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlinePause(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 5.25v13.5m-7.5-13.5v13.5" }, "child": [] }] })(props);
}
function HiOutlinePencilSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" }, "child": [] }] })(props);
}
function HiOutlinePencil(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" }, "child": [] }] })(props);
}
function HiOutlinePhoneArrowDownLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" }, "child": [] }] })(props);
}
function HiOutlinePhoneArrowUpRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" }, "child": [] }] })(props);
}
function HiOutlinePhoneXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 3.75L18 6m0 0l2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" }, "child": [] }] })(props);
}
function HiOutlinePhone(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" }, "child": [] }] })(props);
}
function HiOutlinePhoto(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" }, "child": [] }] })(props);
}
function HiOutlinePlayCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" }, "child": [] }] })(props);
}
function HiOutlinePlayPause(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z" }, "child": [] }] })(props);
}
function HiOutlinePlay(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" }, "child": [] }] })(props);
}
function HiOutlinePlusCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlinePlusSmall(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 6v12m6-6H6" }, "child": [] }] })(props);
}
function HiOutlinePlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 4.5v15m7.5-7.5h-15" }, "child": [] }] })(props);
}
function HiOutlinePower(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M5.636 5.636a9 9 0 1012.728 0M12 3v9" }, "child": [] }] })(props);
}
function HiOutlinePresentationChartBar(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" }, "child": [] }] })(props);
}
function HiOutlinePresentationChartLine(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" }, "child": [] }] })(props);
}
function HiOutlinePrinter(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" }, "child": [] }] })(props);
}
function HiOutlinePuzzlePiece(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" }, "child": [] }] })(props);
}
function HiOutlineQrCode(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" }, "child": [] }] })(props);
}
function HiOutlineQuestionMarkCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" }, "child": [] }] })(props);
}
function HiOutlineQueueList(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" }, "child": [] }] })(props);
}
function HiOutlineRadio(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" }, "child": [] }] })(props);
}
function HiOutlineReceiptPercent(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" }, "child": [] }] })(props);
}
function HiOutlineReceiptRefund(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" }, "child": [] }] })(props);
}
function HiOutlineRectangleGroup(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" }, "child": [] }] })(props);
}
function HiOutlineRectangleStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" }, "child": [] }] })(props);
}
function HiOutlineRocketLaunch(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" }, "child": [] }] })(props);
}
function HiOutlineRss(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" }, "child": [] }] })(props);
}
function HiOutlineScale(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" }, "child": [] }] })(props);
}
function HiOutlineScissors(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" }, "child": [] }] })(props);
}
function HiOutlineServerStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" }, "child": [] }] })(props);
}
function HiOutlineServer(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" }, "child": [] }] })(props);
}
function HiOutlineShare(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" }, "child": [] }] })(props);
}
function HiOutlineShieldCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" }, "child": [] }] })(props);
}
function HiOutlineShieldExclamation(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" }, "child": [] }] })(props);
}
function HiOutlineShoppingBag(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" }, "child": [] }] })(props);
}
function HiOutlineShoppingCart(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" }, "child": [] }] })(props);
}
function HiOutlineSignalSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3 3l8.735 8.735m0 0a.374.374 0 11.53.53m-.53-.53l.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 010 5.304m2.121-7.425a6.75 6.75 0 010 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 01-1.06-2.122m-1.061 4.243a6.75 6.75 0 01-1.625-6.929m-.496 9.05c-3.068-3.067-3.664-7.67-1.79-11.334M12 12h.008v.008H12V12z" }, "child": [] }] })(props);
}
function HiOutlineSignal(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" }, "child": [] }] })(props);
}
function HiOutlineSparkles(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" }, "child": [] }] })(props);
}
function HiOutlineSpeakerWave(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" }, "child": [] }] })(props);
}
function HiOutlineSpeakerXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" }, "child": [] }] })(props);
}
function HiOutlineSquare2Stack(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" }, "child": [] }] })(props);
}
function HiOutlineSquare3Stack3D(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" }, "child": [] }] })(props);
}
function HiOutlineSquares2X2(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" }, "child": [] }] })(props);
}
function HiOutlineSquaresPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" }, "child": [] }] })(props);
}
function HiOutlineStar(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" }, "child": [] }] })(props);
}
function HiOutlineStopCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" }, "child": [] }] })(props);
}
function HiOutlineStop(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" }, "child": [] }] })(props);
}
function HiOutlineSun(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" }, "child": [] }] })(props);
}
function HiOutlineSwatch(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" }, "child": [] }] })(props);
}
function HiOutlineTableCells(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" }, "child": [] }] })(props);
}
function HiOutlineTag(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6 6h.008v.008H6V6z" }, "child": [] }] })(props);
}
function HiOutlineTicket(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" }, "child": [] }] })(props);
}
function HiOutlineTrash(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" }, "child": [] }] })(props);
}
function HiOutlineTrophy(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" }, "child": [] }] })(props);
}
function HiOutlineTruck(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" }, "child": [] }] })(props);
}
function HiOutlineTv(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" }, "child": [] }] })(props);
}
function HiOutlineUserCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" }, "child": [] }] })(props);
}
function HiOutlineUserGroup(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" }, "child": [] }] })(props);
}
function HiOutlineUserMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" }, "child": [] }] })(props);
}
function HiOutlineUserPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" }, "child": [] }] })(props);
}
function HiOutlineUser(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" }, "child": [] }] })(props);
}
function HiOutlineUsers(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" }, "child": [] }] })(props);
}
function HiOutlineVariable(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09" }, "child": [] }] })(props);
}
function HiOutlineVideoCameraSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" }, "child": [] }] })(props);
}
function HiOutlineVideoCamera(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "d": "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" }, "child": [] }] })(props);
}
function HiOutlineViewColumns(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" }, "child": [] }] })(props);
}
function HiOutlineViewfinderCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" }, "child": [] }] })(props);
}
function HiOutlineWallet(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" }, "child": [] }] })(props);
}
function HiOutlineWifi(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" }, "child": [] }] })(props);
}
function HiOutlineWindow(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" }, "child": [] }] })(props);
}
function HiOutlineWrenchScrewdriver(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" }, "child": [] }] })(props);
}
function HiOutlineWrench(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" }, "child": [] }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M4.867 19.125h.008v.008h-.008v-.008z" }, "child": [] }] })(props);
}
function HiOutlineXCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
function HiOutlineXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6 18L18 6M6 6l12 12" }, "child": [] }] })(props);
}
function HiMiniAcademicCap(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniAdjustmentsHorizontal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" }, "child": [] }] })(props);
}
function HiMiniAdjustmentsVertical(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M17 2.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zM17 15.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM3.75 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM4.5 2.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zM10 11a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5A.75.75 0 0110 11zM10.75 2.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM10 6a2 2 0 100 4 2 2 0 000-4zM3.75 10a2 2 0 100 4 2 2 0 000-4zM16.25 10a2 2 0 100 4 2 2 0 000-4z" }, "child": [] }] })(props);
}
function HiMiniArchiveBoxArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArchiveBoxXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zm5.22 1.72a.75.75 0 011.06 0L10 10.94l1.72-1.72a.75.75 0 111.06 1.06L11.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 01-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArchiveBox(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowDownCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowDownLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M14.78 5.22a.75.75 0 00-1.06 0L6.5 12.44V6.75a.75.75 0 00-1.5 0v7.5c0 .414.336.75.75.75h7.5a.75.75 0 000-1.5H7.56l7.22-7.22a.75.75 0 000-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowDownOnSquareStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8 1a.75.75 0 01.75.75V6h-1.5V1.75A.75.75 0 018 1zm-.75 5v3.296l-.943-1.048a.75.75 0 10-1.114 1.004l2.25 2.5a.75.75 0 001.114 0l2.25-2.5a.75.75 0 00-1.114-1.004L8.75 9.296V6h2A2.25 2.25 0 0113 8.25v4.5A2.25 2.25 0 0110.75 15h-5.5A2.25 2.25 0 013 12.75v-4.5A2.25 2.25 0 015.25 6h2zM7 16.75v-.25h3.75a3.75 3.75 0 003.75-3.75V10h.25A2.25 2.25 0 0117 12.25v4.5A2.25 2.25 0 0114.75 19h-5.5A2.25 2.25 0 017 16.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowDownOnSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M13.75 7h-3v5.296l1.943-2.048a.75.75 0 011.114 1.004l-3.25 3.5a.75.75 0 01-1.114 0l-3.25-3.5a.75.75 0 111.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 00-1.5 0V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7z" }, "child": [] }] })(props);
}
function HiMiniArrowDownRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z" }, "child": [] }] })(props);
}
function HiMiniArrowDownTray(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" }, "child": [] }, { "tag": "path", "attr": { "d": "M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" }, "child": [] }] })(props);
}
function HiMiniArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowLeftCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "g", "attr": { "clipPath": "url(#clip0_9_2121)" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm3.25-7.25a.75.75 0 000-1.5H8.66l2.1-1.95a.75.75 0 10-1.02-1.1l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 001.02-1.1l-2.1-1.95h4.59z", "clipRule": "evenodd" }, "child": [] }] }, { "tag": "defs", "attr": {}, "child": [{ "tag": "clipPath", "attr": { "id": "clip0_9_2121" }, "child": [{ "tag": "path", "attr": { "d": "M0 0h20v20H0z" }, "child": [] }] }] }] })(props);
}
function HiMiniArrowLeftOnRectangle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowLongDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 2a.75.75 0 01.75.75v12.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowLongLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowLongRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowLongUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a.75.75 0 01-.75-.75V4.66L7.3 6.76a.75.75 0 11-1.1-1.02l3.25-3.5a.75.75 0 011.1 0l3.25 3.5a.75.75 0 01-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0110 18z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowPathRoundedSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 4.5c1.215 0 2.417.055 3.604.162a.68.68 0 01.615.597c.124 1.038.208 2.088.25 3.15l-1.689-1.69a.75.75 0 00-1.06 1.061l2.999 3a.75.75 0 001.06 0l3.001-3a.75.75 0 10-1.06-1.06l-1.748 1.747a41.31 41.31 0 00-.264-3.386 2.18 2.18 0 00-1.97-1.913 41.512 41.512 0 00-7.477 0 2.18 2.18 0 00-1.969 1.913 41.16 41.16 0 00-.16 1.61.75.75 0 101.495.12c.041-.52.093-1.038.154-1.552a.68.68 0 01.615-.597A40.012 40.012 0 0110 4.5zM5.281 9.22a.75.75 0 00-1.06 0l-3.001 3a.75.75 0 101.06 1.06l1.748-1.747c.042 1.141.13 2.27.264 3.386a2.18 2.18 0 001.97 1.913 41.533 41.533 0 007.477 0 2.18 2.18 0 001.969-1.913c.064-.534.117-1.071.16-1.61a.75.75 0 10-1.495-.12c-.041.52-.093 1.037-.154 1.552a.68.68 0 01-.615.597 40.013 40.013 0 01-7.208 0 .68.68 0 01-.615-.597 39.785 39.785 0 01-.25-3.15l1.689 1.69a.75.75 0 001.06-1.061l-2.999-3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowPath(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowRightCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowRightOnRectangle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowSmallDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowSmallLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowSmallRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowSmallUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 15a.75.75 0 01-.75-.75V7.612L7.29 9.77a.75.75 0 01-1.08-1.04l3.25-3.5a.75.75 0 011.08 0l3.25 3.5a.75.75 0 11-1.08 1.04l-1.96-2.158v6.638A.75.75 0 0110 15z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowTopRightOnSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowTrendingDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.22 5.222a.75.75 0 011.06 0L7 9.942l3.768-3.769a.75.75 0 011.113.058 20.908 20.908 0 013.813 7.254l1.574-2.727a.75.75 0 011.3.75l-2.475 4.286a.75.75 0 01-1.025.275l-4.287-2.475a.75.75 0 01.75-1.3l2.71 1.565a19.422 19.422 0 00-3.013-6.024L7.53 11.533a.75.75 0 01-1.06 0l-5.25-5.25a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowTrendingUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowUpCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowUpLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M14.78 14.78a.75.75 0 01-1.06 0L6.5 7.56v5.69a.75.75 0 01-1.5 0v-7.5A.75.75 0 015.75 5h7.5a.75.75 0 010 1.5H7.56l7.22 7.22a.75.75 0 010 1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowUpOnSquareStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.75 6h-2v4.25a.75.75 0 01-1.5 0V6h1.5V3.704l.943 1.048a.75.75 0 001.114-1.004l-2.25-2.5a.75.75 0 00-1.114 0l-2.25 2.5a.75.75 0 001.114 1.004l.943-1.048V6h-2A2.25 2.25 0 003 8.25v4.5A2.25 2.25 0 005.25 15h5.5A2.25 2.25 0 0013 12.75v-4.5A2.25 2.25 0 0010.75 6zM7 16.75v-.25h3.75a3.75 3.75 0 003.75-3.75V10h.25A2.25 2.25 0 0117 12.25v4.5A2.25 2.25 0 0114.75 19h-5.5A2.25 2.25 0 017 16.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowUpOnSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M13.75 7h-3V3.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 4.74a.75.75 0 001.1 1.02l1.95-2.1V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7zm-3 0h-1.5v5.25a.75.75 0 001.5 0V7z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowUpRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowUpTray(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" }, "child": [] }, { "tag": "path", "attr": { "d": "M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" }, "child": [] }] })(props);
}
function HiMiniArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowUturnDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.232 12.207a.75.75 0 011.06.025l3.958 4.146V6.375a5.375 5.375 0 0110.75 0V9.25a.75.75 0 01-1.5 0V6.375a3.875 3.875 0 00-7.75 0v10.003l3.957-4.146a.75.75 0 011.085 1.036l-5.25 5.5a.75.75 0 01-1.085 0l-5.25-5.5a.75.75 0 01.025-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowUturnLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowUturnRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowUturnUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M17.768 7.793a.75.75 0 01-1.06-.025L12.75 3.622v10.003a5.375 5.375 0 01-10.75 0V10.75a.75.75 0 011.5 0v2.875a3.875 3.875 0 007.75 0V3.622L7.293 7.768a.75.75 0 01-1.086-1.036l5.25-5.5a.75.75 0 011.085 0l5.25 5.5a.75.75 0 01-.024 1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowsPointingIn(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.28 2.22a.75.75 0 00-1.06 1.06L5.44 6.5H2.75a.75.75 0 000 1.5h4.5A.75.75 0 008 7.25v-4.5a.75.75 0 00-1.5 0v2.69L3.28 2.22zM13.5 2.75a.75.75 0 00-1.5 0v4.5c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-2.69l3.22-3.22a.75.75 0 00-1.06-1.06L13.5 5.44V2.75zM3.28 17.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 101.06 1.06zM13.5 14.56l3.22 3.22a.75.75 0 101.06-1.06l-3.22-3.22h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-2.69z" }, "child": [] }] })(props);
}
function HiMiniArrowsPointingOut(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M13.28 7.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 001.06 1.06zM2 17.25v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22a.75.75 0 011.06 1.06L4.56 16.5h2.69a.75.75 0 010 1.5h-4.5a.747.747 0 01-.75-.75zM12.22 13.28l3.22 3.22h-2.69a.75.75 0 000 1.5h4.5a.747.747 0 00.75-.75v-4.5a.75.75 0 00-1.5 0v2.69l-3.22-3.22a.75.75 0 10-1.06 1.06zM3.5 4.56l3.22 3.22a.75.75 0 001.06-1.06L4.56 3.5h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0V4.56z" }, "child": [] }] })(props);
}
function HiMiniArrowsRightLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniArrowsUpDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniAtSymbol(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBackspace(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.22 3.22A.75.75 0 017.75 3h9A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17h-9a.75.75 0 01-.53-.22L.97 10.53a.75.75 0 010-1.06l6.25-6.25zm3.06 4a.75.75 0 10-1.06 1.06L10.94 10l-1.72 1.72a.75.75 0 101.06 1.06L12 11.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L12 8.94l-1.72-1.72z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBackward(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M7.712 4.819A1.5 1.5 0 0110 6.095v2.973c.104-.131.234-.248.389-.344l6.323-3.905A1.5 1.5 0 0119 6.095v7.81a1.5 1.5 0 01-2.288 1.277l-6.323-3.905a1.505 1.505 0 01-.389-.344v2.973a1.5 1.5 0 01-2.288 1.276l-6.323-3.905a1.5 1.5 0 010-2.553L7.712 4.82z" }, "child": [] }] })(props);
}
function HiMiniBanknotes(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBars2(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 6.75A.75.75 0 012.75 6h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 6.75zm0 6.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBars3BottomLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBars3BottomRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm7 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBars3CenterLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBars3(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBars4(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBarsArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h7.508a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.75.75v6.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V7.75A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75h4.562a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBarsArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBattery0(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 7.25A2.25 2.25 0 013.25 5h12.5A2.25 2.25 0 0118 7.25v1.085a1.5 1.5 0 011 1.415v.5a1.5 1.5 0 01-1 1.415v1.085A2.25 2.25 0 0115.75 15H3.25A2.25 2.25 0 011 12.75v-5.5zm2.25-.75a.75.75 0 00-.75.75v5.5c0 .414.336.75.75.75h12.5a.75.75 0 00.75-.75v-5.5a.75.75 0 00-.75-.75H3.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBattery100(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.75 8a.75.75 0 00-.75.75v2.5c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-2.5a.75.75 0 00-.75-.75h-9.5z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 7.25A2.25 2.25 0 013.25 5h12.5A2.25 2.25 0 0118 7.25v1.085a1.5 1.5 0 011 1.415v.5a1.5 1.5 0 01-1 1.415v1.085A2.25 2.25 0 0115.75 15H3.25A2.25 2.25 0 011 12.75v-5.5zm2.25-.75a.75.75 0 00-.75.75v5.5c0 .414.336.75.75.75h12.5a.75.75 0 00.75-.75v-5.5a.75.75 0 00-.75-.75H3.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBattery50(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.75 8a.75.75 0 00-.75.75v2.5c0 .414.336.75.75.75H9.5a.75.75 0 00.75-.75v-2.5A.75.75 0 009.5 8H4.75z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.25 5A2.25 2.25 0 001 7.25v5.5A2.25 2.25 0 003.25 15h12.5A2.25 2.25 0 0018 12.75v-1.085a1.5 1.5 0 001-1.415v-.5a1.5 1.5 0 00-1-1.415V7.25A2.25 2.25 0 0015.75 5H3.25zM2.5 7.25a.75.75 0 01.75-.75h12.5a.75.75 0 01.75.75v5.5a.75.75 0 01-.75.75H3.25a.75.75 0 01-.75-.75v-5.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBeaker(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBellAlert(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.214 3.227a.75.75 0 00-1.156-.956 8.97 8.97 0 00-1.856 3.826.75.75 0 001.466.316 7.47 7.47 0 011.546-3.186zM16.942 2.271a.75.75 0 00-1.157.956 7.47 7.47 0 011.547 3.186.75.75 0 001.466-.316 8.971 8.971 0 00-1.856-3.826z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.94 32.94 0 003.256.508 3.5 3.5 0 006.972 0 32.933 32.933 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zm0 14.5a2 2 0 01-1.95-1.557 33.54 33.54 0 003.9 0A2 2 0 0110 16.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBellSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4 8c0-.26.017-.517.049-.77l7.722 7.723a33.56 33.56 0 01-3.722-.01 2 2 0 003.862.15l1.134 1.134a3.5 3.5 0 01-6.53-1.409 32.91 32.91 0 01-3.257-.508.75.75 0 01-.515-1.076A11.448 11.448 0 004 8zM17.266 13.9a.756.756 0 01-.068.116L6.389 3.207A6 6 0 0116 8c.001 1.887.455 3.665 1.258 5.234a.75.75 0 01.01.666zM3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06L3.28 2.22z" }, "child": [] }] })(props);
}
function HiMiniBellSnooze(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4 8a6 6 0 1112 0c0 1.887.454 3.665 1.257 5.234a.75.75 0 01-.515 1.076 32.903 32.903 0 01-3.256.508 3.5 3.5 0 01-6.972 0 32.91 32.91 0 01-3.256-.508.75.75 0 01-.515-1.076A11.448 11.448 0 004 8zm6 7c-.655 0-1.305-.02-1.95-.057a2 2 0 003.9 0c-.645.038-1.295.057-1.95.057zM8.75 6a.75.75 0 000 1.5h1.043L8.14 9.814A.75.75 0 008.75 11h2.5a.75.75 0 000-1.5h-1.043l1.653-2.314A.75.75 0 0011.25 6h-2.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBell(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBoltSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.22 2.22a.75.75 0 011.06 0l14.5 14.5a.75.75 0 11-1.06 1.06L2.22 3.28a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M4.73 7.912L2.191 10.75A.75.75 0 002.75 12h6.068L4.73 7.912zM9.233 12.415l-1.216 5.678a.75.75 0 001.292.657l2.956-3.303-3.032-3.032zM15.27 12.088l2.539-2.838A.75.75 0 0017.25 8h-6.068l4.088 4.088zM10.767 7.585l1.216-5.678a.75.75 0 00-1.292-.657L7.735 4.553l3.032 3.032z" }, "child": [] }] })(props);
}
function HiMiniBolt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" }, "child": [] }] })(props);
}
function HiMiniBookOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" }, "child": [] }] })(props);
}
function HiMiniBookmarkSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M17 4.517v9.301L5.433 2.252a41.44 41.44 0 019.637.058C16.194 2.45 17 3.414 17 4.517zM3 17.25V6.182l10.654 10.654L10 15.082l-5.925 2.844A.75.75 0 013 17.25zM3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06L3.28 2.22z" }, "child": [] }] })(props);
}
function HiMiniBookmarkSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM6 13.25V3.5h8v9.75a.75.75 0 01-1.064.681L10 12.576l-2.936 1.355A.75.75 0 016 13.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBookmark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBriefcase(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" }, "child": [] }] })(props);
}
function HiMiniBugAnt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.56 1.14a.75.75 0 01.177 1.045 3.989 3.989 0 00-.464.86c.185.17.382.329.59.473A3.993 3.993 0 0110 2c1.272 0 2.405.594 3.137 1.518.208-.144.405-.302.59-.473a3.989 3.989 0 00-.464-.86.75.75 0 011.222-.869c.369.519.65 1.105.822 1.736a.75.75 0 01-.174.707 7.03 7.03 0 01-1.299 1.098A4 4 0 0114 6c0 .52-.301.963-.723 1.187a6.961 6.961 0 01-1.158.486c.13.208.231.436.296.679 1.413-.174 2.779-.5 4.081-.96a19.655 19.655 0 00-.09-2.319.75.75 0 111.493-.146 21.239 21.239 0 01.08 3.028.75.75 0 01-.482.667 20.874 20.874 0 01-5.153 1.249 2.51 2.51 0 01-.107.247 20.86 20.86 0 015.253 1.257.75.75 0 01.48.74 20.946 20.946 0 01-.907 5.107.75.75 0 01-1.433-.444c.415-1.34.69-2.743.806-4.19-.495-.174-1-.328-1.512-.461.05.284.076.575.076.873 0 1.814-.517 3.312-1.426 4.37A4.639 4.639 0 0110 19a4.64 4.64 0 01-3.574-1.63C5.516 16.311 5 14.813 5 13c0-.298.026-.59.076-.873-.513.133-1.017.287-1.512.46.116 1.448.39 2.85.806 4.191a.75.75 0 01-1.433.444 20.94 20.94 0 01-.908-5.107.75.75 0 01.482-.74 20.857 20.857 0 015.252-1.257 2.481 2.481 0 01-.107-.247 20.874 20.874 0 01-5.153-1.249.75.75 0 01-.482-.667 21.342 21.342 0 01.08-3.028.75.75 0 111.493.146 19.745 19.745 0 00-.09 2.32c1.302.459 2.668.785 4.08.959.066-.243.166-.471.297-.679a6.962 6.962 0 01-1.158-.486A1.348 1.348 0 016 6a4 4 0 01.166-1.143 7.032 7.032 0 01-1.3-1.098.75.75 0 01-.173-.707 5.48 5.48 0 01.822-1.736.75.75 0 011.046-.176z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBuildingLibrary(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.674 2.075a.75.75 0 01.652 0l7.25 3.5A.75.75 0 0117 6.957V16.5h.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H3V6.957a.75.75 0 01-.576-1.382l7.25-3.5zM11 6a1 1 0 11-2 0 1 1 0 012 0zM7.5 9.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zm3.25 0a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zm3.25 0a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBuildingOffice2(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 2.75A.75.75 0 011.75 2h10.5a.75.75 0 010 1.5H12v13.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5H2v-13h-.25A.75.75 0 011 2.75zM4 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM4.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM8 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM8.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM14.25 6a.75.75 0 00-.75.75V17a1 1 0 001 1h3.75a.75.75 0 000-1.5H18v-9h.25a.75.75 0 000-1.5h-4zm.5 3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBuildingOffice(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniBuildingStorefront(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M2.879 7.121A3 3 0 007.5 6.66a2.997 2.997 0 002.5 1.34 2.997 2.997 0 002.5-1.34 3 3 0 104.622-3.78l-.293-.293A2 2 0 0015.415 2H4.585a2 2 0 00-1.414.586l-.292.292a3 3 0 000 4.243zM3 9.032a4.507 4.507 0 004.5-.29A4.48 4.48 0 0010 9.5a4.48 4.48 0 002.5-.758 4.507 4.507 0 004.5.29V16.5h.25a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-3.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v3.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5H3V9.032z" }, "child": [] }] })(props);
}
function HiMiniCake(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M6.75.98l-.884.883a1.25 1.25 0 101.768 0L6.75.98zM13.25.98l-.884.883a1.25 1.25 0 101.768 0L13.25.98zM10 .98l.884.883a1.25 1.25 0 11-1.768 0L10 .98zM7.5 5.75a.75.75 0 00-1.5 0v.464c-1.179.305-2 1.39-2 2.622v.094c.1-.02.202-.038.306-.051A42.869 42.869 0 0110 8.5c1.93 0 3.83.129 5.694.379.104.013.206.03.306.051v-.094c0-1.232-.821-2.317-2-2.622V5.75a.75.75 0 00-1.5 0v.318a45.645 45.645 0 00-1.75-.062V5.75a.75.75 0 00-1.5 0v.256c-.586.01-1.17.03-1.75.062V5.75zM4.505 10.365A41.377 41.377 0 0110 10c1.863 0 3.697.124 5.495.365C16.967 10.562 18 11.838 18 13.28v.693a3.72 3.72 0 01-1.665-.393 5.222 5.222 0 00-4.67 0 3.722 3.722 0 01-3.33 0 5.222 5.222 0 00-4.67 0A3.72 3.72 0 012 13.972v-.693c0-1.441 1.033-2.716 2.505-2.914zM15.665 14.921a5.22 5.22 0 002.335.551V16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-1.028c.8 0 1.6-.183 2.335-.551a3.722 3.722 0 013.33 0c1.47.735 3.2.735 4.67 0a3.722 3.722 0 013.33 0z" }, "child": [] }] })(props);
}
function HiMiniCalculator(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 1c-1.716 0-3.408.106-5.07.31C3.806 1.45 3 2.414 3 3.517V16.75A2.25 2.25 0 005.25 19h9.5A2.25 2.25 0 0017 16.75V3.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 1zM5.99 8.75A.75.75 0 016.74 8h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zm-.75 2.916a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zm1.417-5.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zm-.75 2.916a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zm1.42-5.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zm-.75 2.916a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zM12.5 8.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zm0 2.166a.75.75 0 01.75.75v2.167a.75.75 0 11-1.5 0v-2.167a.75.75 0 01.75-.75zM6.75 4a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-.5a.75.75 0 00-.75-.75h-6.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCalendarDays(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCalendar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCamera(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChartBarSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM15 5.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5zm-8.5 6a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM8.584 9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zm3.58-1.25a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChartBar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" }, "child": [] }] })(props);
}
function HiMiniChartPie(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12 9a1 1 0 01-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 015.933 5.933c.078.547-.378.997-.93.997h-5z" }, "child": [] }, { "tag": "path", "attr": { "d": "M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 001 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 012 11a7.002 7.002 0 016.003-6.93z" }, "child": [] }] })(props);
}
function HiMiniChatBubbleBottomCenterText(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChatBubbleBottomCenter(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.102 41.102 0 01-3.55.414c-.28.02-.521.18-.643.413l-1.712 3.293a.75.75 0 01-1.33 0l-1.713-3.293a.783.783 0 00-.642-.413 41.108 41.108 0 01-3.55-.414C1.993 13.245 1 11.986 1 10.574V5.426c0-1.413.993-2.67 2.43-2.902z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChatBubbleLeftEllipsis(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChatBubbleLeftRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" }, "child": [] }, { "tag": "path", "attr": { "d": "M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" }, "child": [] }] })(props);
}
function HiMiniChatBubbleLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.202 41.202 0 01-5.183.501.78.78 0 00-.528.224l-3.579 3.58A.75.75 0 016 17.25v-3.443a41.033 41.033 0 01-2.57-.33C1.993 13.244 1 11.986 1 10.573V5.426c0-1.413.993-2.67 2.43-2.902z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChatBubbleOvalLeftEllipsis(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChatBubbleOvalLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCheckBadge(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCheckCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChevronDoubleDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChevronDoubleLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChevronDoubleRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChevronDoubleUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.23 15.79a.75.75 0 01-.02-1.06l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 11-1.08 1.04L10 11.832 6.29 15.77a.75.75 0 01-1.06.02zm0-6a.75.75 0 01-.02-1.06l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 11-1.08 1.04L10 5.832 6.29 9.77a.75.75 0 01-1.06.02z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChevronDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChevronLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChevronRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChevronUpDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniChevronUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCircleStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4-7-1.79-7-4 3.134-4 7-4zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178c.396.37.842.688 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37zM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822c-.396.37-.842.688-1.306.953-1.532.875-3.548 1.369-5.694 1.369s-4.162-.494-5.694-1.37A7.009 7.009 0 013 13.179z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniClipboardDocumentCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M18 5.25a2.25 2.25 0 00-2.012-2.238A2.25 2.25 0 0013.75 1h-1.5a2.25 2.25 0 00-2.238 2.012c-.875.092-1.6.686-1.884 1.488H11A2.5 2.5 0 0113.5 7v7h2.25A2.25 2.25 0 0018 11.75v-6.5zM12.25 2.5a.75.75 0 00-.75.75v.25h3v-.25a.75.75 0 00-.75-.75h-1.5z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 6a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-1-1H3zm6.874 4.166a.75.75 0 10-1.248-.832l-2.493 3.739-.853-.853a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.154-.114l3-4.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniClipboardDocumentList(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniClipboardDocument(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5v-3.379a3 3 0 00-.879-2.121l-3.12-3.121a3 3 0 00-1.402-.791 2.252 2.252 0 011.913-1.576A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M3.5 6A1.5 1.5 0 002 7.5v9A1.5 1.5 0 003.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L8.44 6.439A1.5 1.5 0 007.378 6H3.5z" }, "child": [] }] })(props);
}
function HiMiniClipboard(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniClock(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCloudArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm5.25-9.25a.75.75 0 00-1.5 0v4.59l-1.95-2.1a.75.75 0 10-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V7.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCloudArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCloud(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M1 12.5A4.5 4.5 0 005.5 17H15a4 4 0 001.866-7.539 3.504 3.504 0 00-4.504-4.272A4.5 4.5 0 004.06 8.235 4.502 4.502 0 001 12.5z" }, "child": [] }] })(props);
}
function HiMiniCodeBracketSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCodeBracket(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCog6Tooth(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCog8Tooth(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCog(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M13.024 9.25c.47 0 .827-.433.637-.863a4 4 0 00-4.094-2.364c-.468.05-.665.576-.43.984l1.08 1.868a.75.75 0 00.649.375h2.158zM7.84 7.758c-.236-.408-.79-.5-1.068-.12A3.982 3.982 0 006 10c0 .884.287 1.7.772 2.363.278.38.832.287 1.068-.12l1.078-1.868a.75.75 0 000-.75L7.839 7.758zM9.138 12.993c-.235.408-.039.934.43.984a4 4 0 004.094-2.364c.19-.43-.168-.863-.638-.863h-2.158a.75.75 0 00-.65.375l-1.078 1.868z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M14.13 4.347l.644-1.117a.75.75 0 00-1.299-.75l-.644 1.116a6.954 6.954 0 00-2.081-.556V1.75a.75.75 0 00-1.5 0v1.29a6.954 6.954 0 00-2.081.556L6.525 2.48a.75.75 0 10-1.3.75l.645 1.117A7.04 7.04 0 004.347 5.87L3.23 5.225a.75.75 0 10-.75 1.3l1.116.644A6.954 6.954 0 003.04 9.25H1.75a.75.75 0 000 1.5h1.29c.078.733.27 1.433.556 2.081l-1.116.645a.75.75 0 10.75 1.298l1.117-.644a7.04 7.04 0 001.523 1.523l-.645 1.117a.75.75 0 101.3.75l.644-1.116a6.954 6.954 0 002.081.556v1.29a.75.75 0 001.5 0v-1.29a6.954 6.954 0 002.081-.556l.645 1.116a.75.75 0 001.299-.75l-.645-1.117a7.042 7.042 0 001.523-1.523l1.117.644a.75.75 0 00.75-1.298l-1.116-.645a6.954 6.954 0 00.556-2.081h1.29a.75.75 0 000-1.5h-1.29a6.954 6.954 0 00-.556-2.081l1.116-.644a.75.75 0 00-.75-1.3l-1.117.645a7.04 7.04 0 00-1.524-1.523zM10 4.5a5.475 5.475 0 00-2.781.754A5.527 5.527 0 005.22 7.277 5.475 5.475 0 004.5 10a5.475 5.475 0 00.752 2.777 5.527 5.527 0 002.028 2.004c.802.458 1.73.719 2.72.719a5.474 5.474 0 002.78-.753 5.527 5.527 0 002.001-2.027c.458-.802.719-1.73.719-2.72a5.475 5.475 0 00-.753-2.78 5.528 5.528 0 00-2.028-2.002A5.475 5.475 0 0010 4.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCommandLine(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zm.943 8.752a.75.75 0 01.055-1.06L6.128 9l-1.88-1.693a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.06-.055zM9.75 10.25a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniComputerDesktop(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCpuChip(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M14 6H6v8h8V6z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.25 3V1.75a.75.75 0 011.5 0V3h1.5V1.75a.75.75 0 011.5 0V3h.5A2.75 2.75 0 0117 5.75v.5h1.25a.75.75 0 010 1.5H17v1.5h1.25a.75.75 0 010 1.5H17v1.5h1.25a.75.75 0 010 1.5H17v.5A2.75 2.75 0 0114.25 17h-.5v1.25a.75.75 0 01-1.5 0V17h-1.5v1.25a.75.75 0 01-1.5 0V17h-1.5v1.25a.75.75 0 01-1.5 0V17h-.5A2.75 2.75 0 013 14.25v-.5H1.75a.75.75 0 010-1.5H3v-1.5H1.75a.75.75 0 010-1.5H3v-1.5H1.75a.75.75 0 010-1.5H3v-.5A2.75 2.75 0 015.75 3h.5V1.75a.75.75 0 011.5 0V3h1.5zM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCreditCard(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCubeTransparent(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCube(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCurrencyBangladeshi(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 2a8 8 0 100 16 8 8 0 000-16zM5.94 5.5c.944-.945 2.56-.276 2.56 1.06V8h5.75a.75.75 0 010 1.5H8.5v4.275c0 .296.144.455.26.499a3.5 3.5 0 004.402-1.77h-.412a.75.75 0 010-1.5h.537c.462 0 .887.21 1.156.556.278.355.383.852.184 1.337a5.001 5.001 0 01-6.4 2.78C7.376 15.353 7 14.512 7 13.774V9.5H5.75a.75.75 0 010-1.5H7V6.56l-.22.22a.75.75 0 11-1.06-1.06l.22-.22z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCurrencyDollar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCurrencyEuro(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8.798 7.45c.512-.67 1.135-.95 1.702-.95s1.19.28 1.702.95a.75.75 0 001.192-.91C12.637 5.55 11.596 5 10.5 5s-2.137.55-2.894 1.54A5.205 5.205 0 006.83 8H5.75a.75.75 0 000 1.5h.77a6.333 6.333 0 000 1h-.77a.75.75 0 000 1.5h1.08c.183.528.442 1.023.776 1.46.757.99 1.798 1.54 2.894 1.54s2.137-.55 2.894-1.54a.75.75 0 00-1.192-.91c-.512.67-1.135.95-1.702.95s-1.19-.28-1.702-.95a3.505 3.505 0 01-.343-.55h1.795a.75.75 0 000-1.5H8.026a4.835 4.835 0 010-1h2.224a.75.75 0 000-1.5H8.455c.098-.195.212-.38.343-.55z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCurrencyPound(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8.732 6.232a2.5 2.5 0 013.536 0 .75.75 0 101.06-1.06A4 4 0 006.5 8v.165c0 .364.034.728.1 1.085h-.35a.75.75 0 000 1.5h.737a5.25 5.25 0 01-.367 3.072l-.055.123a.75.75 0 00.848 1.037l1.272-.283a3.493 3.493 0 011.604.021 4.992 4.992 0 002.422 0l.97-.242a.75.75 0 00-.363-1.456l-.971.243a3.491 3.491 0 01-1.694 0 4.992 4.992 0 00-2.258-.038c.19-.811.227-1.651.111-2.477H9.75a.75.75 0 000-1.5H8.136A4.397 4.397 0 018 8.165V8c0-.641.244-1.28.732-1.768z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCurrencyRupee(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM6 5.75A.75.75 0 016.75 5h6.5a.75.75 0 010 1.5h-2.127c.4.5.683 1.096.807 1.75h1.32a.75.75 0 010 1.5h-1.32a4.003 4.003 0 01-3.404 3.216l1.754 1.754a.75.75 0 01-1.06 1.06l-3-3a.75.75 0 01.53-1.28H8c1.12 0 2.067-.736 2.386-1.75H6.75a.75.75 0 010-1.5h3.636A2.501 2.501 0 008 6.5H6.75A.75.75 0 016 5.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCurrencyYen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7.346 5.294a.75.75 0 00-1.192.912L9.056 10H6.75a.75.75 0 000 1.5h2.5v1h-2.5a.75.75 0 000 1.5h2.5v1.25a.75.75 0 001.5 0V14h2.5a.75.75 0 100-1.5h-2.5v-1h2.5a.75.75 0 100-1.5h-2.306l2.902-3.794a.75.75 0 10-1.192-.912L10 8.765l-2.654-3.47z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCursorArrowRays(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniCursorArrowRipple(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.111 11.89A5.5 5.5 0 1115.501 8 .75.75 0 1017 8a7 7 0 10-11.95 4.95.75.75 0 001.06-1.06zm2.121-5.658a2.5 2.5 0 000 3.536.75.75 0 11-1.06 1.06A4 4 0 1114 8a.75.75 0 01-1.5 0 2.5 2.5 0 00-4.268-1.768zm2.534 1.279a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniDevicePhoneMobile(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniDeviceTablet(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5 1a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V4a3 3 0 00-3-3H5zM3.5 4A1.5 1.5 0 015 2.5h10A1.5 1.5 0 0116.5 4v12a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 16V4zm5.25 11.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniDocumentArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm4.75 6.75a.75.75 0 011.5 0v2.546l.943-1.048a.75.75 0 011.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V8.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniDocumentArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm4.75 11.25a.75.75 0 001.5 0v-2.546l.943 1.048a.75.75 0 101.114-1.004l-2.25-2.5a.75.75 0 00-1.114 0l-2.25 2.5a.75.75 0 101.114 1.004l.943-1.048v2.546z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniDocumentChartBar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zM13.25 9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zm-6.5 4a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5a.75.75 0 01.75-.75zm4-1.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniDocumentCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zm10.857 5.691a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 00-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniDocumentDuplicate(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" }, "child": [] }, { "tag": "path", "attr": { "d": "M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" }, "child": [] }] })(props);
}
function HiMiniDocumentMagnifyingGlass(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M8 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm5 5a3 3 0 101.524 5.585l1.196 1.195a.75.75 0 101.06-1.06l-1.195-1.196A3 3 0 009.5 7z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniDocumentMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm7.75 9.75a.75.75 0 000-1.5h-4.5a.75.75 0 000 1.5h4.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniDocumentPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zM10 8a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 0110 8z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniDocumentText(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniDocument(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13z" }, "child": [] }] })(props);
}
function HiMiniEllipsisHorizontalCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 1a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniEllipsisHorizontal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" }, "child": [] }] })(props);
}
function HiMiniEllipsisVertical(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" }, "child": [] }] })(props);
}
function HiMiniEnvelopeOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.106 6.447A2 2 0 001 8.237V16a2 2 0 002 2h14a2 2 0 002-2V8.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5zm1.48 4.007a.75.75 0 00-.671 1.342l5.855 2.928a2.75 2.75 0 002.46 0l5.852-2.926a.75.75 0 10-.67-1.342l-5.853 2.926a1.25 1.25 0 01-1.118 0l-5.856-2.928z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniEnvelope(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" }, "child": [] }, { "tag": "path", "attr": { "d": "M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" }, "child": [] }] })(props);
}
function HiMiniExclamationCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniExclamationTriangle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniEyeDropper(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.1 3.667a3.502 3.502 0 116.782 1.738 3.487 3.487 0 01-.907 1.57 3.495 3.495 0 01-1.617.919L16 7.99V10a.75.75 0 01-.22.53l-.25.25a.75.75 0 01-1.06 0l-.845-.844L7.22 16.34A2.25 2.25 0 015.629 17H5.12a.75.75 0 00-.53.22l-1.56 1.56a.75.75 0 01-1.061 0l-.75-.75a.75.75 0 010-1.06l1.56-1.561a.75.75 0 00.22-.53v-.508c0-.596.237-1.169.659-1.59l6.405-6.406-.844-.845a.75.75 0 010-1.06l.25-.25A.75.75 0 0110 4h2.01l.09-.333zM4.72 13.84l6.405-6.405 1.44 1.439-6.406 6.405a.75.75 0 01-.53.22H5.12c-.258 0-.511.044-.75.129a2.25 2.25 0 00.129-.75v-.508a.75.75 0 01.22-.53z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniEyeSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" }, "child": [] }] })(props);
}
function HiMiniEye(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniFaceFrown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm-3.536-3.475a.75.75 0 001.061 0 3.5 3.5 0 014.95 0 .75.75 0 101.06-1.06 5 5 0 00-7.07 0 .75.75 0 000 1.06zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniFaceSmile(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-4.464a.75.75 0 10-1.061-1.061 3.5 3.5 0 01-4.95 0 .75.75 0 00-1.06 1.06 5 5 0 007.07 0zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniFilm(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniFingerPrint(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniFire(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniFlag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" }, "child": [] }] })(props);
}
function HiMiniFolderArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 4.75C2 3.784 2.784 3 3.75 3h4.836c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 00.177.073h4.836c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0116.25 17H3.75A1.75 1.75 0 012 15.25V4.75zm8.75 4a.75.75 0 00-1.5 0v2.546l-.943-1.048a.75.75 0 10-1.114 1.004l2.25 2.5a.75.75 0 001.114 0l2.25-2.5a.75.75 0 10-1.114-1.004l-.943 1.048V8.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniFolderMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 4.75C2 3.784 2.784 3 3.75 3h4.836c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 00.177.073h4.836c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0116.25 17H3.75A1.75 1.75 0 012 15.25V4.75zm10.25 7a.75.75 0 000-1.5h-4.5a.75.75 0 000 1.5h4.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniFolderOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.75 3A1.75 1.75 0 003 4.75v2.752l.104-.002h13.792c.035 0 .07 0 .104.002V6.75A1.75 1.75 0 0015.25 5h-3.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H4.75zM3.104 9a1.75 1.75 0 00-1.673 2.265l1.385 4.5A1.75 1.75 0 004.488 17h11.023a1.75 1.75 0 001.673-1.235l1.384-4.5A1.75 1.75 0 0016.896 9H3.104z" }, "child": [] }] })(props);
}
function HiMiniFolderPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.75 3A1.75 1.75 0 002 4.75v10.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0018 15.25v-8.5A1.75 1.75 0 0016.25 5h-4.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H3.75zM10 8a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 0110 8z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniFolder(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.75 3A1.75 1.75 0 002 4.75v3.26a3.235 3.235 0 011.75-.51h12.5c.644 0 1.245.188 1.75.51V6.75A1.75 1.75 0 0016.25 5h-4.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H3.75zM3.75 9A1.75 1.75 0 002 10.75v4.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0018 15.25v-4.5A1.75 1.75 0 0016.25 9H3.75z" }, "child": [] }] })(props);
}
function HiMiniForward(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.288 4.819A1.5 1.5 0 001 6.095v7.81a1.5 1.5 0 002.288 1.277l6.323-3.905c.155-.096.285-.213.389-.344v2.973a1.5 1.5 0 002.288 1.276l6.323-3.905a1.5 1.5 0 000-2.553L12.288 4.82A1.5 1.5 0 0010 6.095v2.973a1.506 1.506 0 00-.389-.344L3.288 4.82z" }, "child": [] }] })(props);
}
function HiMiniFunnel(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniGif(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm4.026 2.879C5.356 7.65 5.72 7.5 6 7.5s.643.15.974.629a.75.75 0 001.234-.854C7.66 6.484 6.873 6 6 6c-.873 0-1.66.484-2.208 1.275C3.25 8.059 3 9.048 3 10c0 .952.25 1.941.792 2.725C4.34 13.516 5.127 14 6 14c.873 0 1.66-.484 2.208-1.275a.75.75 0 00.133-.427V10a.75.75 0 00-.75-.75H6.25a.75.75 0 000 1.5h.591v1.295c-.293.342-.6.455-.841.455-.279 0-.643-.15-.974-.629C4.69 11.386 4.5 10.711 4.5 10c0-.711.19-1.386.526-1.871zM10.75 6a.75.75 0 01.75.75v6.5a.75.75 0 01-1.5 0v-6.5a.75.75 0 01.75-.75zm3 0h2.5a.75.75 0 010 1.5H14.5v1.75h.75a.75.75 0 010 1.5h-.75v2.5a.75.75 0 01-1.5 0v-6.5a.75.75 0 01.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniGiftTop(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.25 3H3.5A1.5 1.5 0 002 4.5v4.75h3.365A2.75 2.75 0 019.25 5.362V3zM2 10.75v4.75A1.5 1.5 0 003.5 17h5.75v-4.876A4.75 4.75 0 015 14.75a.75.75 0 010-1.5 3.251 3.251 0 003.163-2.5H2zM10.75 17h5.75a1.5 1.5 0 001.5-1.5v-4.75h-6.163A3.251 3.251 0 0015 13.25a.75.75 0 010 1.5 4.75 4.75 0 01-4.25-2.626V17zM18 9.25V4.5A1.5 1.5 0 0016.5 3h-5.75v2.362a2.75 2.75 0 013.885 3.888H18zm-4.496-2.755a1.25 1.25 0 00-1.768 0c-.36.359-.526.999-.559 1.697-.01.228-.006.443.004.626.183.01.398.014.626.003.698-.033 1.338-.2 1.697-.559a1.25 1.25 0 000-1.767zm-5.24 0a1.25 1.25 0 00-1.768 1.767c.36.36 1 .526 1.697.56.228.01.443.006.626-.004.01-.183.015-.398.004-.626-.033-.698-.2-1.338-.56-1.697z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniGift(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M14 6a2.5 2.5 0 00-4-3 2.5 2.5 0 00-4 3H3.25C2.56 6 2 6.56 2 7.25v.5C2 8.44 2.56 9 3.25 9h6V6h1.5v3h6C17.44 9 18 8.44 18 7.75v-.5C18 6.56 17.44 6 16.75 6H14zm-1-1.5a1 1 0 01-1 1h-1v-1a1 1 0 112 0zm-6 0a1 1 0 001 1h1v-1a1 1 0 00-2 0z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M9.25 10.5H3v4.75A2.75 2.75 0 005.75 18h3.5v-7.5zM10.75 18v-7.5H17v4.75A2.75 2.75 0 0114.25 18h-3.5z" }, "child": [] }] })(props);
}
function HiMiniGlobeAlt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M16.555 5.412a8.028 8.028 0 00-3.503-2.81 14.899 14.899 0 011.663 4.472 8.547 8.547 0 001.84-1.662zM13.326 7.825a13.43 13.43 0 00-2.413-5.773 8.087 8.087 0 00-1.826 0 13.43 13.43 0 00-2.413 5.773A8.473 8.473 0 0010 8.5c1.18 0 2.304-.24 3.326-.675zM6.514 9.376A9.98 9.98 0 0010 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 01-.351 3.759A13.54 13.54 0 0110 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 01-.352-3.758zM5.285 7.074a14.9 14.9 0 011.663-4.471 8.028 8.028 0 00-3.503 2.81c.529.638 1.149 1.199 1.84 1.66zM17.334 6.798a7.973 7.973 0 01.614 4.115 13.47 13.47 0 01-3.178 1.72 15.093 15.093 0 00.174-3.939 10.043 10.043 0 002.39-1.896zM2.666 6.798a10.042 10.042 0 002.39 1.896 15.196 15.196 0 00.174 3.94 13.472 13.472 0 01-3.178-1.72 7.973 7.973 0 01.615-4.115zM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 01-1.72 3.178 8.099 8.099 0 01-1.826 0 13.47 13.47 0 01-1.72-3.178c.855.151 1.735.23 2.633.23zM14.357 14.357a14.912 14.912 0 01-1.305 3.04 8.027 8.027 0 004.345-4.345c-.953.542-1.971.981-3.04 1.305zM6.948 17.397a8.027 8.027 0 01-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 001.305 3.04z" }, "child": [] }] })(props);
}
function HiMiniGlobeAmericas(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.447a3.5 3.5 0 001.025 2.475L8.293 10 8 10.293a1 1 0 000 1.414l1.06 1.06a1.5 1.5 0 01.44 1.061v.363a1 1 0 00.553.894l.276.139a1 1 0 001.342-.448l1.454-2.908a1.5 1.5 0 00-.281-1.731l-.772-.772a1 1 0 00-1.023-.242l-.384.128a.5.5 0 01-.606-.25l-.296-.592a.481.481 0 01.646-.646l.262.131a1 1 0 00.447.106h.188a1 1 0 00.949-1.316l-.068-.204a.5.5 0 01.149-.538l1.44-1.234A6.492 6.492 0 0116.5 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniGlobeAsiaAustralia(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6.5 6.326a6.52 6.52 0 01-1.5.174 6.487 6.487 0 01-5.011-2.36l.49-.98a.423.423 0 01.614-.164l.294.196a.992.992 0 001.491-1.139l-.197-.593a.252.252 0 01.126-.304l1.973-.987a.938.938 0 00.361-1.359.375.375 0 01.239-.576l.125-.025A2.421 2.421 0 0012.327 6.6l.05-.149a1 1 0 00-.242-1.023l-1.489-1.489a.5.5 0 01-.146-.353v-.067a6.5 6.5 0 015.392 9.23 1.398 1.398 0 00-.68-.244l-.566-.566a1.5 1.5 0 00-1.06-.439h-.172a1.5 1.5 0 00-1.06.44l-.593.592a.501.501 0 01-.13.093l-1.578.79a1 1 0 00-.553.894v.191a1 1 0 001 1h.5a.5.5 0 01.5.5v.326z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniGlobeEuropeAfrica(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.503.204A6.5 6.5 0 117.95 3.83L6.927 5.62a1.453 1.453 0 001.91 2.02l.175-.087a.5.5 0 01.224-.053h.146a.5.5 0 01.447.724l-.028.055a.4.4 0 01-.357.221h-.502a2.26 2.26 0 00-1.88 1.006l-.044.066a2.099 2.099 0 001.085 3.156.58.58 0 01.397.547v1.05a1.175 1.175 0 002.093.734l1.611-2.014c.192-.24.296-.536.296-.842 0-.316.128-.624.353-.85a1.363 1.363 0 00.173-1.716l-.464-.696a.369.369 0 01.527-.499l.343.257c.316.237.738.275 1.091.098a.586.586 0 01.677.11l1.297 1.297z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniHandRaised(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11 2a1 1 0 10-2 0v6.5a.5.5 0 01-1 0V3a1 1 0 10-2 0v5.5a.5.5 0 01-1 0V5a1 1 0 10-2 0v7a7 7 0 1014 0V8a1 1 0 10-2 0v3.5a.5.5 0 01-1 0V3a1 1 0 10-2 0v5.5a.5.5 0 01-1 0V2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniHandThumbDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M18.905 12.75a1.25 1.25 0 01-2.5 0v-7.5a1.25 1.25 0 112.5 0v7.5zM8.905 17v1.3c0 .268-.14.526-.395.607A2 2 0 015.905 17c0-.995.182-1.948.514-2.826.204-.54-.166-1.174-.744-1.174h-2.52c-1.242 0-2.26-1.01-2.146-2.247.193-2.08.652-4.082 1.341-5.974C2.752 3.678 3.833 3 5.005 3h3.192a3 3 0 011.342.317l2.733 1.366A3 3 0 0013.613 5h1.292v7h-.963c-.684 0-1.258.482-1.612 1.068a4.012 4.012 0 01-2.165 1.73c-.433.143-.854.386-1.012.814-.16.432-.248.9-.248 1.388z" }, "child": [] }] })(props);
}
function HiMiniHandThumbUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" }, "child": [] }] })(props);
}
function HiMiniHashtag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.493 2.853a.75.75 0 00-1.486-.205L7.545 6H4.198a.75.75 0 000 1.5h3.14l-.69 5H3.302a.75.75 0 000 1.5h3.14l-.435 3.148a.75.75 0 001.486.205L7.955 14h2.986l-.434 3.148a.75.75 0 001.486.205L12.456 14h3.346a.75.75 0 000-1.5h-3.14l.69-5h3.346a.75.75 0 000-1.5h-3.14l.435-3.147a.75.75 0 00-1.486-.205L12.045 6H9.059l.434-3.147zM8.852 7.5l-.69 5h2.986l.69-5H8.852z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniHeart(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" }, "child": [] }] })(props);
}
function HiMiniHomeModern(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M14.916 2.404a.75.75 0 01-.32 1.012l-.596.31V17a1 1 0 01-1 1h-2.26a.75.75 0 01-.75-.75v-3.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H2V9.957a.75.75 0 01-.596-1.372L2 8.275V5.75a.75.75 0 011.5 0v1.745l10.404-5.41a.75.75 0 011.012.32zM15.861 8.57a.75.75 0 01.736-.025l1.999 1.04A.75.75 0 0118 10.957V16.5h.25a.75.75 0 110 1.5h-2a.75.75 0 01-.75-.75V9.21a.75.75 0 01.361-.64z" }, "child": [] }] })(props);
}
function HiMiniHome(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniIdentification(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniInboxArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10 2a.75.75 0 01.75.75v5.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0L6.2 7.26a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z" }, "child": [] }, { "tag": "path", "attr": { "d": "M5.273 4.5a1.25 1.25 0 00-1.205.918l-1.523 5.52c-.006.02-.01.041-.015.062H6a1 1 0 01.894.553l.448.894a1 1 0 00.894.553h3.438a1 1 0 00.86-.49l.606-1.02A1 1 0 0114 11h3.47a1.318 1.318 0 00-.015-.062l-1.523-5.52a1.25 1.25 0 00-1.205-.918h-.977a.75.75 0 010-1.5h.977a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h.977a.75.75 0 010 1.5h-.977z" }, "child": [] }] })(props);
}
function HiMiniInboxStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.045 6.954a2.75 2.75 0 01.217-.678L2.53 3.58A2.75 2.75 0 015.019 2h9.962a2.75 2.75 0 012.488 1.58l1.27 2.696c.101.216.174.444.216.678A1 1 0 0119 7.25v1.5a2.75 2.75 0 01-2.75 2.75H3.75A2.75 2.75 0 011 8.75v-1.5a1 1 0 01.045-.296zm2.843-2.736A1.25 1.25 0 015.02 3.5h9.962c.484 0 .925.28 1.13.718l.957 2.032H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 6.25H2.932l.956-2.032z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M1 14a1 1 0 011-1h4a1 1 0 01.894.553l.448.894a1 1 0 00.894.553h3.438a1 1 0 00.86-.49l.606-1.02A1 1 0 0114 13h4a1 1 0 011 1v2a2 2 0 01-2 2H3a2 2 0 01-2-2v-2z" }, "child": [] }] })(props);
}
function HiMiniInbox(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniInformationCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniKey(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniLanguage(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M7.75 2.75a.75.75 0 00-1.5 0v1.258a32.987 32.987 0 00-3.599.278.75.75 0 10.198 1.487A31.545 31.545 0 018.7 5.545 19.381 19.381 0 017 9.56a19.418 19.418 0 01-1.002-2.05.75.75 0 00-1.384.577 20.935 20.935 0 001.492 2.91 19.613 19.613 0 01-3.828 4.154.75.75 0 10.945 1.164A21.116 21.116 0 007 12.331c.095.132.192.262.29.391a.75.75 0 001.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 002.333-5.332c.31.031.618.068.924.108a.75.75 0 00.198-1.487 32.832 32.832 0 00-3.599-.278V2.75z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M13 8a.75.75 0 01.671.415l4.25 8.5a.75.75 0 11-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 11-1.342-.67l4.25-8.5A.75.75 0 0113 8zm2.037 6.5L13 10.427 10.964 14.5h4.073z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniLifebuoy(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.171 4.146l1.947 2.466a3.514 3.514 0 011.764 0l1.947-2.466a6.52 6.52 0 00-5.658 0zm8.683 3.025l-2.466 1.947c.15.578.15 1.186 0 1.764l2.466 1.947a6.52 6.52 0 000-5.658zm-3.025 8.683l-1.947-2.466c-.578.15-1.186.15-1.764 0l-1.947 2.466a6.52 6.52 0 005.658 0zM4.146 12.83l2.466-1.947a3.514 3.514 0 010-1.764L4.146 7.171a6.52 6.52 0 000 5.658zM5.63 3.297a8.01 8.01 0 018.738 0 8.031 8.031 0 012.334 2.334 8.01 8.01 0 010 8.738 8.033 8.033 0 01-2.334 2.334 8.01 8.01 0 01-8.738 0 8.032 8.032 0 01-2.334-2.334 8.01 8.01 0 010-8.738A8.03 8.03 0 015.63 3.297zm5.198 4.882a2.008 2.008 0 00-2.243.407 1.994 1.994 0 00-.407 2.243 1.993 1.993 0 00.992.992 2.008 2.008 0 002.243-.407c.176-.175.31-.374.407-.585a2.008 2.008 0 00-.407-2.243 1.993 1.993 0 00-.585-.407z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniLightBulb(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10 1a6 6 0 00-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 00.572.729 6.016 6.016 0 002.856 0A.75.75 0 0012 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0010 1zM8.863 17.414a.75.75 0 00-.226 1.483 9.066 9.066 0 002.726 0 .75.75 0 00-.226-1.483 7.553 7.553 0 01-2.274 0z" }, "child": [] }] })(props);
}
function HiMiniLink(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" }, "child": [] }, { "tag": "path", "attr": { "d": "M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" }, "child": [] }] })(props);
}
function HiMiniListBullet(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniLockClosed(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniLockOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M14.5 1A4.5 4.5 0 0010 5.5V9H3a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1.5V5.5a3 3 0 116 0v2.75a.75.75 0 001.5 0V5.5A4.5 4.5 0 0014.5 1z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniMagnifyingGlassCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M6.5 9a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM9 5a4 4 0 102.248 7.309l1.472 1.471a.75.75 0 101.06-1.06l-1.471-1.472A4 4 0 009 5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniMagnifyingGlassMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M6.75 8.25a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9 2a7 7 0 104.391 12.452l3.329 3.328a.75.75 0 101.06-1.06l-3.328-3.329A7 7 0 009 2zM3.5 9a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniMagnifyingGlassPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M9 6a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 019 6z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9zm7-5.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniMagnifyingGlass(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniMapPin(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniMap(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.157 2.175a1.5 1.5 0 00-1.147 0l-4.084 1.69A1.5 1.5 0 002 5.251v10.877a1.5 1.5 0 002.074 1.386l3.51-1.453 4.26 1.763a1.5 1.5 0 001.146 0l4.083-1.69A1.5 1.5 0 0018 14.748V3.873a1.5 1.5 0 00-2.073-1.386l-3.51 1.452-4.26-1.763zM7.58 5a.75.75 0 01.75.75v6.5a.75.75 0 01-1.5 0v-6.5A.75.75 0 017.58 5zm5.59 2.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniMegaphone(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M13.92 3.845a19.361 19.361 0 01-6.3 1.98C6.765 5.942 5.89 6 5 6a4 4 0 00-.504 7.969 15.974 15.974 0 001.271 3.341c.397.77 1.342 1 2.05.59l.867-.5c.726-.42.94-1.321.588-2.021-.166-.33-.315-.666-.448-1.004 1.8.358 3.511.964 5.096 1.78A17.964 17.964 0 0015 10c0-2.161-.381-4.234-1.08-6.155zM15.243 3.097A19.456 19.456 0 0116.5 10c0 2.431-.445 4.758-1.257 6.904l-.03.077a.75.75 0 001.401.537 20.902 20.902 0 001.312-5.745 1.999 1.999 0 000-3.545 20.902 20.902 0 00-1.312-5.745.75.75 0 00-1.4.537l.029.077z" }, "child": [] }] })(props);
}
function HiMiniMicrophone(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z" }, "child": [] }, { "tag": "path", "attr": { "d": "M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z" }, "child": [] }] })(props);
}
function HiMiniMinusCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniMinusSmall(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" }, "child": [] }] })(props);
}
function HiMiniMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniMoon(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniMusicalNote(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M17.721 1.599a.75.75 0 01.279.584v11.29a2.25 2.25 0 01-1.774 2.198l-2.041.442a2.216 2.216 0 01-.938-4.333l2.662-.576a.75.75 0 00.591-.734V6.112l-8 1.73v7.684a2.25 2.25 0 01-1.774 2.2l-2.042.44a2.216 2.216 0 11-.935-4.33l2.659-.574A.75.75 0 007 12.53V4.237a.75.75 0 01.591-.733l9.5-2.054a.75.75 0 01.63.149z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniNewspaper(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v11.75A2.75 2.75 0 0016.75 18h-12A2.75 2.75 0 012 15.25V3.5zm3.75 7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM5 5.75A.75.75 0 015.75 5h4.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5A.75.75 0 015 8.25v-2.5z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M16.5 6.5h-1v8.75a1.25 1.25 0 102.5 0V8a1.5 1.5 0 00-1.5-1.5z" }, "child": [] }] })(props);
}
function HiMiniNoSymbol(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.965 4.904l9.131 9.131a6.5 6.5 0 00-9.131-9.131zm8.07 10.192L4.904 5.965a6.5 6.5 0 009.131 9.131zM4.343 4.343a8 8 0 1111.314 11.314A8 8 0 014.343 4.343z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniPaintBrush(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M15.993 1.385a1.87 1.87 0 012.623 2.622l-4.03 5.27a12.749 12.749 0 01-4.237 3.562 4.508 4.508 0 00-3.188-3.188 12.75 12.75 0 013.562-4.236l5.27-4.03zM6 11a3 3 0 00-3 3 .5.5 0 01-.72.45.75.75 0 00-1.035.931A4.001 4.001 0 009 14.004V14a3.01 3.01 0 00-1.66-2.685A2.99 2.99 0 006 11z" }, "child": [] }] })(props);
}
function HiMiniPaperAirplane(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" }, "child": [] }] })(props);
}
function HiMiniPaperClip(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniPauseCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5zm4 0a.75.75 0 01.75-.75h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniPause(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" }, "child": [] }] })(props);
}
function HiMiniPencilSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" }, "child": [] }, { "tag": "path", "attr": { "d": "M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" }, "child": [] }] })(props);
}
function HiMiniPencil(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" }, "child": [] }] })(props);
}
function HiMiniPhoneArrowDownLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.5 2A1.5 1.5 0 002 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 009.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 001.5-1.5v-1.148a1.5 1.5 0 00-1.175-1.465l-3.223-.716a1.5 1.5 0 00-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 01-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 001.052-1.767l-.716-3.223A1.5 1.5 0 004.648 2H3.5zM16.72 2.22a.75.75 0 111.06 1.06L14.56 6.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22z" }, "child": [] }] })(props);
}
function HiMiniPhoneArrowUpRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.5 2A1.5 1.5 0 002 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 009.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 001.5-1.5v-1.148a1.5 1.5 0 00-1.175-1.465l-3.223-.716a1.5 1.5 0 00-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 01-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 001.052-1.767l-.716-3.223A1.5 1.5 0 004.648 2H3.5zM16.5 4.56l-3.22 3.22a.75.75 0 11-1.06-1.06l3.22-3.22h-2.69a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V4.56z" }, "child": [] }] })(props);
}
function HiMiniPhoneXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.5 2A1.5 1.5 0 002 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 009.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 001.5-1.5v-1.148a1.5 1.5 0 00-1.175-1.465l-3.223-.716a1.5 1.5 0 00-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 01-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 001.052-1.767l-.716-3.223A1.5 1.5 0 004.648 2H3.5zm9.78.22a.75.75 0 10-1.06 1.06L13.94 5l-1.72 1.72a.75.75 0 001.06 1.06L15 6.06l1.72 1.72a.75.75 0 101.06-1.06L16.06 5l1.72-1.72a.75.75 0 00-1.06-1.06L15 3.94l-1.72-1.72z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniPhone(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniPhoto(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniPlayCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniPlayPause(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-.5zM17.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-.5zM3.288 4.819A1.5 1.5 0 001 6.095v7.81a1.5 1.5 0 002.288 1.277l6.323-3.906a1.5 1.5 0 000-2.552L3.288 4.819z" }, "child": [] }] })(props);
}
function HiMiniPlay(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" }, "child": [] }] })(props);
}
function HiMiniPlusCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniPlusSmall(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" }, "child": [] }] })(props);
}
function HiMiniPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }, "child": [] }] })(props);
}
function HiMiniPower(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 2a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06 6.5 6.5 0 109.192 0 .75.75 0 111.06-1.06 8 8 0 11-11.313 0 .75.75 0 011.06 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniPresentationChartBar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 2.75A.75.75 0 011.75 2h16.5a.75.75 0 010 1.5H18v8.75A2.75 2.75 0 0115.25 15h-1.072l.798 3.06a.75.75 0 01-1.452.38L13.41 18H6.59l-.114.44a.75.75 0 01-1.452-.38L5.823 15H4.75A2.75 2.75 0 012 12.25V3.5h-.25A.75.75 0 011 2.75zM7.373 15l-.391 1.5h6.037l-.392-1.5H7.373zM13.25 5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5a.75.75 0 01.75-.75zm-6.5 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 016.75 9zm4-1.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniPresentationChartLine(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 2.75A.75.75 0 011.75 2h16.5a.75.75 0 010 1.5H18v8.75A2.75 2.75 0 0115.25 15h-1.072l.798 3.06a.75.75 0 01-1.452.38L13.41 18H6.59l-.114.44a.75.75 0 01-1.452-.38L5.823 15H4.75A2.75 2.75 0 012 12.25V3.5h-.25A.75.75 0 011 2.75zM7.373 15l-.391 1.5h6.037l-.392-1.5H7.373zm7.49-8.931a.75.75 0 01-.175 1.046 19.326 19.326 0 00-3.398 3.098.75.75 0 01-1.097.04L8.5 8.561l-2.22 2.22A.75.75 0 115.22 9.72l2.75-2.75a.75.75 0 011.06 0l1.664 1.663a20.786 20.786 0 013.122-2.74.75.75 0 011.046.176z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniPrinter(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.752.097 1.126.153A2.212 2.212 0 0118 8.653v4.097A2.25 2.25 0 0115.75 15h-.241l.305 1.984A1.75 1.75 0 0114.084 19H5.915a1.75 1.75 0 01-1.73-2.016L4.492 15H4.25A2.25 2.25 0 012 12.75V8.653c0-1.082.775-2.034 1.874-2.198.374-.056.75-.107 1.127-.153L5 6.25v-3.5zm8.5 3.397a41.533 41.533 0 00-7 0V2.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v3.397zM6.608 12.5a.25.25 0 00-.247.212l-.693 4.5a.25.25 0 00.247.288h8.17a.25.25 0 00.246-.288l-.692-4.5a.25.25 0 00-.247-.212H6.608z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniPuzzlePiece(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12 4.467c0-.405.262-.75.559-1.027.276-.257.441-.584.441-.94 0-.828-.895-1.5-2-1.5s-2 .672-2 1.5c0 .362.171.694.456.953.29.265.544.6.544.994a.968.968 0 01-1.024.974 39.655 39.655 0 01-3.014-.306.75.75 0 00-.847.847c.14.993.242 1.999.306 3.014A.968.968 0 014.447 10c-.393 0-.729-.253-.994-.544C3.194 9.17 2.862 9 2.5 9 1.672 9 1 9.895 1 11s.672 2 1.5 2c.356 0 .683-.165.94-.441.276-.297.622-.559 1.027-.559a.997.997 0 011.004 1.03 39.747 39.747 0 01-.319 3.734.75.75 0 00.64.842c1.05.146 2.111.252 3.184.318A.97.97 0 0010 16.948c0-.394-.254-.73-.545-.995C9.171 15.693 9 15.362 9 15c0-.828.895-1.5 2-1.5s2 .672 2 1.5c0 .356-.165.683-.441.94-.297.276-.559.622-.559 1.027a.998.998 0 001.03 1.005c1.337-.05 2.659-.162 3.961-.337a.75.75 0 00.644-.644c.175-1.302.288-2.624.337-3.961A.998.998 0 0016.967 12c-.405 0-.75.262-1.027.559-.257.276-.584.441-.94.441-.828 0-1.5-.895-1.5-2s.672-2 1.5-2c.362 0 .694.17.953.455.265.291.601.545.995.545a.97.97 0 00.976-1.024 41.159 41.159 0 00-.318-3.184.75.75 0 00-.842-.64c-1.228.164-2.473.271-3.734.319A.997.997 0 0112 4.467z" }, "child": [] }] })(props);
}
function HiMiniQrCode(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.75 2A1.75 1.75 0 002 3.75v3.5C2 8.216 2.784 9 3.75 9h3.5A1.75 1.75 0 009 7.25v-3.5A1.75 1.75 0 007.25 2h-3.5zM3.5 3.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zM3.75 11A1.75 1.75 0 002 12.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 009 16.25v-3.5A1.75 1.75 0 007.25 11h-3.5zm-.25 1.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zm7.5-9c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0116.25 9h-3.5A1.75 1.75 0 0111 7.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm-7.26 1a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm-9 9a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm-3.5-1.5a1 1 0 011-1H12a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V12zm6-1a1 1 0 00-1 1v.01a1 1 0 001 1H17a1 1 0 001-1V12a1 1 0 00-1-1h-.01zm-1 6a1 1 0 011-1H17a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V17zm-4-1a1 1 0 00-1 1v.01a1 1 0 001 1H12a1 1 0 001-1V17a1 1 0 00-1-1h-.01z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniQuestionMarkCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniQueueList(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M2 4.5A2.5 2.5 0 014.5 2h11a2.5 2.5 0 010 5h-11A2.5 2.5 0 012 4.5zM2.75 9.083a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zM2.75 12.663a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zM2.75 16.25a.75.75 0 000 1.5h14.5a.75.75 0 100-1.5H2.75z" }, "child": [] }] })(props);
}
function HiMiniRadio(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M17.45 3.473a.75.75 0 10-.4-1.446L5.313 5.265c-.84.096-1.671.217-2.495.362A2.212 2.212 0 001 7.817v7.933A2.25 2.25 0 003.25 18h13.5A2.25 2.25 0 0019 15.75V7.816c0-1.06-.745-2-1.817-2.189a41.124 41.124 0 00-5.406-.589l5.673-1.565zM16 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM14.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-9.26-5a.75.75 0 01.75-.75H6a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V11zm2.75-.75a.75.75 0 00-.75.75v.01c0 .415.336.75.75.75H8a.75.75 0 00.75-.75V11a.75.75 0 00-.75-.75h-.01zm-1.75-1.5A.75.75 0 016.99 8H7a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm3.583.42a.75.75 0 00-1.06 0l-.007.007a.75.75 0 000 1.06l.007.008a.75.75 0 001.06 0l.007-.007a.75.75 0 000-1.061l-.007-.007zm.427 2.08A.75.75 0 0111 12v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V12a.75.75 0 01.75-.75h.01zm-.42 3.584a.75.75 0 000-1.061l-.007-.007a.75.75 0 00-1.06 0l-.007.007a.75.75 0 000 1.06l.007.008a.75.75 0 001.06 0l.008-.007zm-3.59.416a.75.75 0 01.75-.75H7a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm-1.013-1.484a.75.75 0 00-1.06 0l-.008.007a.75.75 0 000 1.06l.007.008a.75.75 0 001.061 0l.007-.007a.75.75 0 000-1.061l-.007-.007zM3.75 11.25a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V12a.75.75 0 01.75-.75h.01zm1.484-1.012a.75.75 0 000-1.061l-.007-.007a.75.75 0 00-1.06 0l-.007.007a.75.75 0 000 1.06l.007.008a.75.75 0 001.06 0l.007-.007zM7.24 13a.75.75 0 01.75-.75H8a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V13zm-1.25-.75a.75.75 0 00-.75.75v.01c0 .415.336.75.75.75H6a.75.75 0 00.75-.75V13a.75.75 0 00-.75-.75h-.01z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniReceiptPercent(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.93 1.31a41.401 41.401 0 0110.14 0C16.194 1.45 17 2.414 17 3.517V18.25a.75.75 0 01-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 01-.65 0l-2.8-1.344-2.8 1.344A.75.75 0 013 18.25V3.517c0-1.103.806-2.068 1.93-2.207zm8.85 5.97a.75.75 0 00-1.06-1.06l-6.5 6.5a.75.75 0 101.06 1.06l6.5-6.5zM9 8a1 1 0 11-2 0 1 1 0 012 0zm3 5a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniReceiptRefund(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.93 1.31a41.401 41.401 0 0110.14 0C16.194 1.45 17 2.414 17 3.517V18.25a.75.75 0 01-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 01-.65 0l-2.8-1.344-2.8 1.344A.75.75 0 013 18.25V3.517c0-1.103.806-2.068 1.93-2.207zm4.822 4.997a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 001.004-1.114L8.704 8.75h1.921a1.875 1.875 0 010 3.75.75.75 0 000 1.5 3.375 3.375 0 100-6.75h-1.92l1.047-.943z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniRectangleGroup(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.5 3A1.5 1.5 0 001 4.5v4A1.5 1.5 0 002.5 10h6A1.5 1.5 0 0010 8.5v-4A1.5 1.5 0 008.5 3h-6zm11 2A1.5 1.5 0 0012 6.5v7a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017.5 5h-4zm-10 7A1.5 1.5 0 002 13.5v2A1.5 1.5 0 003.5 17h6a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 009.5 12h-6z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniRectangleStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M5.127 3.502L5.25 3.5h9.5c.041 0 .082 0 .123.002A2.251 2.251 0 0012.75 2h-5.5a2.25 2.25 0 00-2.123 1.502zM1 10.25A2.25 2.25 0 013.25 8h13.5A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5zM3.25 6.5c-.04 0-.082 0-.123.002A2.25 2.25 0 015.25 5h9.5c.98 0 1.814.627 2.123 1.502a3.819 3.819 0 00-.123-.002H3.25z" }, "child": [] }] })(props);
}
function HiMiniRocketLaunch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniRss(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z" }, "child": [] }, { "tag": "path", "attr": { "d": "M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z" }, "child": [] }] })(props);
}
function HiMiniScale(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 2a.75.75 0 01.75.75v.258a33.186 33.186 0 016.668.83.75.75 0 01-.336 1.461 31.28 31.28 0 00-1.103-.232l1.702 7.545a.75.75 0 01-.387.832A4.981 4.981 0 0115 14c-.825 0-1.606-.2-2.294-.556a.75.75 0 01-.387-.832l1.77-7.849a31.743 31.743 0 00-3.339-.254v11.505a20.01 20.01 0 013.78.501.75.75 0 11-.339 1.462A18.558 18.558 0 0010 17.5c-1.442 0-2.845.165-4.191.477a.75.75 0 01-.338-1.462 20.01 20.01 0 013.779-.501V4.509c-1.129.026-2.243.112-3.34.254l1.771 7.85a.75.75 0 01-.387.83A4.98 4.98 0 015 14a4.98 4.98 0 01-2.294-.556.75.75 0 01-.387-.832L4.02 5.067c-.37.07-.738.148-1.103.232a.75.75 0 01-.336-1.462 32.845 32.845 0 016.668-.829V2.75A.75.75 0 0110 2zM5 7.543L3.92 12.33a3.499 3.499 0 002.16 0L5 7.543zm10 0l-1.08 4.787a3.498 3.498 0 002.16 0L15 7.543z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniScissors(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1.469 3.75a3.5 3.5 0 005.617 4.11l.883.51c.025.092.147.116.21.043a3.75 3.75 0 01.5-.484c.286-.23.3-.709-.018-.892l-.825-.477A3.501 3.501 0 001.47 3.75zm2.03 3.482a2 2 0 112-3.464 2 2 0 01-2 3.464zM9.956 8.322a2.75 2.75 0 00-1.588 1.822L7.97 11.63l-.884.51a3.501 3.501 0 10.75 1.3l10.68-6.166a.75.75 0 00-.182-1.374l-.703-.189a2.75 2.75 0 00-1.78.123L9.955 8.322zM2.768 15.5a2 2 0 113.464-2 2 2 0 01-3.464 2z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M12.52 11.89a.5.5 0 00.056.894l3.274 1.381a2.75 2.75 0 001.78.123l.704-.188a.75.75 0 00.18-1.374l-3.47-2.004a.5.5 0 00-.5 0L12.52 11.89z" }, "child": [] }] })(props);
}
function HiMiniServerStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.464 3.162A2 2 0 016.28 2h7.44a2 2 0 011.816 1.162l1.154 2.5c.067.145.115.291.145.438A3.508 3.508 0 0016 6H4c-.288 0-.568.035-.835.1.03-.147.078-.293.145-.438l1.154-2.5z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 9.5a2 2 0 012-2h12a2 2 0 110 4H4a2 2 0 01-2-2zm13.24 0a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V9.5zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V9.5a.75.75 0 00-.75-.75h-.01zM2 15a2 2 0 012-2h12a2 2 0 110 4H4a2 2 0 01-2-2zm13.24 0a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniServer(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniShare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z" }, "child": [] }] })(props);
}
function HiMiniShieldCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniShieldExclamation(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.339 2.237a.532.532 0 00-.678 0 11.947 11.947 0 01-7.078 2.75.5.5 0 00-.479.425A12.11 12.11 0 002 7c0 5.163 3.26 9.564 7.834 11.257a.48.48 0 00.332 0C14.74 16.564 18 12.163 18 7.001c0-.54-.035-1.07-.104-1.59a.5.5 0 00-.48-.425 11.947 11.947 0 01-7.077-2.75zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniShoppingBag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniShoppingCart(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" }, "child": [] }] })(props);
}
function HiMiniSignalSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M2.22 2.22a.75.75 0 011.06 0l6.783 6.782a1 1 0 01.935.935l6.782 6.783a.75.75 0 11-1.06 1.06l-6.783-6.782a1 1 0 01-.935-.935L2.22 3.28a.75.75 0 010-1.06zM3.636 16.364a9.004 9.004 0 01-1.39-10.936L3.349 6.53a7.503 7.503 0 001.348 8.773.75.75 0 01-1.061 1.061zM6.464 13.536a5 5 0 01-1.213-5.103l1.262 1.262a3.493 3.493 0 001.012 2.78.75.75 0 01-1.06 1.06zM16.364 3.636a9.004 9.004 0 011.39 10.937l-1.103-1.104a7.503 7.503 0 00-1.348-8.772.75.75 0 111.061-1.061zM13.536 6.464a5 5 0 011.213 5.103l-1.262-1.262a3.493 3.493 0 00-1.012-2.78.75.75 0 011.06-1.06z" }, "child": [] }] })(props);
}
function HiMiniSignal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M16.364 3.636a.75.75 0 00-1.06 1.06 7.5 7.5 0 010 10.607.75.75 0 001.06 1.061 9 9 0 000-12.728zM4.697 4.697a.75.75 0 00-1.061-1.06 9 9 0 000 12.727.75.75 0 101.06-1.06 7.5 7.5 0 010-10.607z" }, "child": [] }, { "tag": "path", "attr": { "d": "M12.475 6.465a.75.75 0 011.06 0 5 5 0 010 7.07.75.75 0 11-1.06-1.06 3.5 3.5 0 000-4.95.75.75 0 010-1.06zM7.525 6.465a.75.75 0 010 1.06 3.5 3.5 0 000 4.95.75.75 0 01-1.06 1.06 5 5 0 010-7.07.75.75 0 011.06 0zM11 10a1 1 0 11-2 0 1 1 0 012 0z" }, "child": [] }] })(props);
}
function HiMiniSparkles(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" }, "child": [] }] })(props);
}
function HiMiniSpeakerWave(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.061 5.5 5.5 0 010 7.778.75.75 0 001.06 1.06 7 7 0 000-9.899z" }, "child": [] }, { "tag": "path", "attr": { "d": "M13.829 7.172a.75.75 0 00-1.061 1.06 2.5 2.5 0 010 3.536.75.75 0 001.06 1.06 4 4 0 000-5.656z" }, "child": [] }] })(props);
}
function HiMiniSpeakerXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M9.547 3.062A.75.75 0 0110 3.75v12.5a.75.75 0 01-1.264.546L4.703 13H3.167a.75.75 0 01-.7-.48A6.985 6.985 0 012 10c0-.887.165-1.737.468-2.52a.75.75 0 01.7-.48h1.535l4.033-3.796a.75.75 0 01.811-.142zM13.28 7.22a.75.75 0 10-1.06 1.06L13.94 10l-1.72 1.72a.75.75 0 001.06 1.06L15 11.06l1.72 1.72a.75.75 0 101.06-1.06L16.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L15 8.94l-1.72-1.72z" }, "child": [] }] })(props);
}
function HiMiniSquare2Stack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M2 4.25A2.25 2.25 0 014.25 2h6.5A2.25 2.25 0 0113 4.25V5.5H9.25A3.75 3.75 0 005.5 9.25V13H4.25A2.25 2.25 0 012 10.75v-6.5z" }, "child": [] }, { "tag": "path", "attr": { "d": "M9.25 7A2.25 2.25 0 007 9.25v6.5A2.25 2.25 0 009.25 18h6.5A2.25 2.25 0 0018 15.75v-6.5A2.25 2.25 0 0015.75 7h-6.5z" }, "child": [] }] })(props);
}
function HiMiniSquare3Stack3D(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z" }, "child": [] }, { "tag": "path", "attr": { "d": "M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z" }, "child": [] }, { "tag": "path", "attr": { "d": "M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z" }, "child": [] }] })(props);
}
function HiMiniSquares2X2(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniSquaresPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25 2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" }, "child": [] }] })(props);
}
function HiMiniStar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniStopCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniStop(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z" }, "child": [] }] })(props);
}
function HiMiniSun(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" }, "child": [] }] })(props);
}
function HiMiniSwatch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.5 2A1.5 1.5 0 002 3.5V15a3 3 0 106 0V3.5A1.5 1.5 0 006.5 2h-3zm11.753 6.99L9.5 14.743V6.257l1.51-1.51a1.5 1.5 0 012.122 0l2.121 2.121a1.5 1.5 0 010 2.122zM8.364 18H16.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-2.136l-6 6zM5 16a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniTableCells(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75zM17.5 7.5v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniTag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniTicket(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M13 3v1.27a.75.75 0 001.5 0V3h2.25A2.25 2.25 0 0119 5.25v2.628a.75.75 0 01-.5.707 1.5 1.5 0 000 2.83c.3.106.5.39.5.707v2.628A2.25 2.25 0 0116.75 17H14.5v-1.27a.75.75 0 00-1.5 0V17H3.25A2.25 2.25 0 011 14.75v-2.628c0-.318.2-.601.5-.707a1.5 1.5 0 000-2.83.75.75 0 01-.5-.707V5.25A2.25 2.25 0 013.25 3H13zm1.5 4.396a.75.75 0 00-1.5 0v1.042a.75.75 0 001.5 0V7.396zm0 4.167a.75.75 0 00-1.5 0v1.041a.75.75 0 001.5 0v-1.041zM6 10.75a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zm0 2.5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniTrash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniTrophy(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 00-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 00-.552.698 5 5 0 004.503 5.152 6 6 0 002.946 1.822A6.451 6.451 0 017.768 13H7.5A1.5 1.5 0 006 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 00-1.5-1.5h-.268a6.453 6.453 0 01-.684-2.202 6 6 0 002.946-1.822 5 5 0 004.503-5.152.75.75 0 00-.552-.698A31.804 31.804 0 0016 2.562v-.387a.75.75 0 00-.629-.74A33.227 33.227 0 0010 1zM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 01-1.855-2.68zm14.95 0a3.503 3.503 0 01-1.854 2.68C15.866 6.449 16 5.74 16 5v-.91c.496.099.988.21 1.475.332z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniTruck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M6.5 3c-1.051 0-2.093.04-3.125.117A1.49 1.49 0 002 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A41.568 41.568 0 006.5 3zM2 12v2.5A1.5 1.5 0 003.5 16h.041a3 3 0 015.918 0h.791a.75.75 0 00.75-.75V12H2z" }, "child": [] }, { "tag": "path", "attr": { "d": "M6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13.25 5a.75.75 0 00-.75.75v8.514a3.001 3.001 0 014.893 1.44c.37-.275.61-.719.595-1.227a24.905 24.905 0 00-1.784-8.549A1.486 1.486 0 0014.823 5H13.25zM14.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" }, "child": [] }] })(props);
}
function HiMiniTv(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4 5h12v7H4V5z" }, "child": [] }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M1 3.5A1.5 1.5 0 012.5 2h15A1.5 1.5 0 0119 3.5v10a1.5 1.5 0 01-1.5 1.5H12v1.5h3.25a.75.75 0 010 1.5H4.75a.75.75 0 010-1.5H8V15H2.5A1.5 1.5 0 011 13.5v-10zm16.5 0h-15v10h15v-10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniUserCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniUserGroup(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" }, "child": [] }] })(props);
}
function HiMiniUserMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.046 15.253c-.058.468.172.92.57 1.175A9.953 9.953 0 008 18c1.982 0 3.83-.578 5.384-1.573.398-.254.628-.707.57-1.175a6.001 6.001 0 00-11.908 0zM12.75 7.75a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" }, "child": [] }] })(props);
}
function HiMiniUserPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" }, "child": [] }] })(props);
}
function HiMiniUser(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" }, "child": [] }] })(props);
}
function HiMiniUsers(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" }, "child": [] }] })(props);
}
function HiMiniVariable(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.212 2.079a.75.75 0 011.006.336A16.932 16.932 0 0118 10c0 2.724-.641 5.3-1.782 7.585a.75.75 0 11-1.342-.67A15.432 15.432 0 0016.5 10c0-2.486-.585-4.834-1.624-6.915a.75.75 0 01.336-1.006zm-10.424 0a.75.75 0 01.336 1.006A15.433 15.433 0 003.5 10c0 2.486.585 4.834 1.624 6.915a.75.75 0 11-1.342.67A16.933 16.933 0 012 10c0-2.724.641-5.3 1.782-7.585a.75.75 0 011.006-.336zm2.285 3.554a1.5 1.5 0 012.219.677l.856 2.08 1.146-1.77a2.25 2.25 0 013.137-.65l.235.156a.75.75 0 11-.832 1.248l-.235-.156a.75.75 0 00-1.045.216l-1.71 2.644 1.251 3.04.739-.492a.75.75 0 11.832 1.248l-.739.493a1.5 1.5 0 01-2.219-.677l-.856-2.08-1.146 1.77a2.25 2.25 0 01-3.137.65l-.235-.156a.75.75 0 01.832-1.248l.235.157a.75.75 0 001.045-.217l1.71-2.644-1.251-3.04-.739.492a.75.75 0 01-.832-1.248l.739-.493z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniVideoCameraSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M1 13.75V7.182L9.818 16H3.25A2.25 2.25 0 011 13.75zM13 6.25v6.568L4.182 4h6.568A2.25 2.25 0 0113 6.25zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75zM2.28 4.22a.75.75 0 00-1.06 1.06l10.5 10.5a.75.75 0 101.06-1.06L2.28 4.22z" }, "child": [] }] })(props);
}
function HiMiniVideoCamera(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" }, "child": [] }] })(props);
}
function HiMiniViewColumns(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M14 17h2.75A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H14v14zM12.5 3h-5v14h5V3zM3.25 3H6v14H3.25A2.25 2.25 0 011 14.75v-9.5A2.25 2.25 0 013.25 3z" }, "child": [] }] })(props);
}
function HiMiniViewfinderCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M4.25 2A2.25 2.25 0 002 4.25v2a.75.75 0 001.5 0v-2a.75.75 0 01.75-.75h2a.75.75 0 000-1.5h-2zM13.75 2a.75.75 0 000 1.5h2a.75.75 0 01.75.75v2a.75.75 0 001.5 0v-2A2.25 2.25 0 0015.75 2h-2zM3.5 13.75a.75.75 0 00-1.5 0v2A2.25 2.25 0 004.25 18h2a.75.75 0 000-1.5h-2a.75.75 0 01-.75-.75v-2zM18 13.75a.75.75 0 00-1.5 0v2a.75.75 0 01-.75.75h-2a.75.75 0 000 1.5h2A2.25 2.25 0 0018 15.75v-2zM7 10a3 3 0 116 0 3 3 0 01-6 0z" }, "child": [] }] })(props);
}
function HiMiniWallet(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M1 4.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 2H3.25A2.25 2.25 0 001 4.25zM1 7.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 5H3.25A2.25 2.25 0 001 7.25zM7 8a1 1 0 011 1 2 2 0 104 0 1 1 0 011-1h3.75A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5A2.25 2.25 0 013.25 8H7z" }, "child": [] }] })(props);
}
function HiMiniWifi(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M.676 6.941A12.964 12.964 0 0110 3c3.657 0 6.963 1.511 9.324 3.941a.75.75 0 01-.008 1.053l-.353.354a.75.75 0 01-1.069-.008C15.894 6.28 13.097 5 10 5 6.903 5 4.106 6.28 2.106 8.34a.75.75 0 01-1.069.008l-.353-.354a.75.75 0 01-.008-1.053zm2.825 2.833A8.976 8.976 0 0110 7a8.976 8.976 0 016.499 2.774.75.75 0 01-.011 1.049l-.354.354a.75.75 0 01-1.072-.012A6.978 6.978 0 0010 9c-1.99 0-3.786.83-5.061 2.165a.75.75 0 01-1.073.012l-.354-.354a.75.75 0 01-.01-1.05zm2.82 2.84A4.989 4.989 0 0110 11c1.456 0 2.767.623 3.68 1.614a.75.75 0 01-.022 1.039l-.354.354a.75.75 0 01-1.085-.026A2.99 2.99 0 0010 13c-.88 0-1.67.377-2.22.981a.75.75 0 01-1.084.026l-.354-.354a.75.75 0 01-.021-1.039zm2.795 2.752a1.248 1.248 0 011.768 0 .75.75 0 010 1.06l-.354.354a.75.75 0 01-1.06 0l-.354-.353a.75.75 0 010-1.06z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniWindow(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zM2.5 9v5.75c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9h-15zM4 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H4zM6.25 6A.75.75 0 017 5.25h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H7a.75.75 0 01-.75-.75V6zM10 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H10z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniWrenchScrewdriver(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z", "clipRule": "evenodd" }, "child": [] }, { "tag": "path", "attr": { "d": "M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z" }, "child": [] }] })(props);
}
function HiMiniWrench(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M19 5.5a4.5 4.5 0 01-4.791 4.49c-.873-.055-1.808.128-2.368.8l-6.024 7.23a2.724 2.724 0 11-3.837-3.837L9.21 8.16c.672-.56.855-1.495.8-2.368a4.5 4.5 0 015.873-4.575c.324.105.39.51.15.752L13.34 4.66a.455.455 0 00-.11.494 3.01 3.01 0 001.617 1.617c.17.07.363.02.493-.111l2.692-2.692c.241-.241.647-.174.752.15.14.435.216.9.216 1.382zM4 17a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniXCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMiniXMark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }, "child": [] }] })(props);
}
export {
  HiAcademicCap,
  HiAdjustmentsHorizontal,
  HiAdjustmentsVertical,
  HiArchiveBox,
  HiArchiveBoxArrowDown,
  HiArchiveBoxXMark,
  HiArrowDown,
  HiArrowDownCircle,
  HiArrowDownLeft,
  HiArrowDownOnSquare,
  HiArrowDownOnSquareStack,
  HiArrowDownRight,
  HiArrowDownTray,
  HiArrowLeft,
  HiArrowLeftCircle,
  HiArrowLeftOnRectangle,
  HiArrowLongDown,
  HiArrowLongLeft,
  HiArrowLongRight,
  HiArrowLongUp,
  HiArrowPath,
  HiArrowPathRoundedSquare,
  HiArrowRight,
  HiArrowRightCircle,
  HiArrowRightOnRectangle,
  HiArrowSmallDown,
  HiArrowSmallLeft,
  HiArrowSmallRight,
  HiArrowSmallUp,
  HiArrowTopRightOnSquare,
  HiArrowTrendingDown,
  HiArrowTrendingUp,
  HiArrowUp,
  HiArrowUpCircle,
  HiArrowUpLeft,
  HiArrowUpOnSquare,
  HiArrowUpOnSquareStack,
  HiArrowUpRight,
  HiArrowUpTray,
  HiArrowUturnDown,
  HiArrowUturnLeft,
  HiArrowUturnRight,
  HiArrowUturnUp,
  HiArrowsPointingIn,
  HiArrowsPointingOut,
  HiArrowsRightLeft,
  HiArrowsUpDown,
  HiAtSymbol,
  HiBackspace,
  HiBackward,
  HiBanknotes,
  HiBars2,
  HiBars3,
  HiBars3BottomLeft,
  HiBars3BottomRight,
  HiBars3CenterLeft,
  HiBars4,
  HiBarsArrowDown,
  HiBarsArrowUp,
  HiBattery0,
  HiBattery100,
  HiBattery50,
  HiBeaker,
  HiBell,
  HiBellAlert,
  HiBellSlash,
  HiBellSnooze,
  HiBolt,
  HiBoltSlash,
  HiBookOpen,
  HiBookmark,
  HiBookmarkSlash,
  HiBookmarkSquare,
  HiBriefcase,
  HiBugAnt,
  HiBuildingLibrary,
  HiBuildingOffice,
  HiBuildingOffice2,
  HiBuildingStorefront,
  HiCake,
  HiCalculator,
  HiCalendar,
  HiCalendarDays,
  HiCamera,
  HiChartBar,
  HiChartBarSquare,
  HiChartPie,
  HiChatBubbleBottomCenter,
  HiChatBubbleBottomCenterText,
  HiChatBubbleLeft,
  HiChatBubbleLeftEllipsis,
  HiChatBubbleLeftRight,
  HiChatBubbleOvalLeft,
  HiChatBubbleOvalLeftEllipsis,
  HiCheck,
  HiCheckBadge,
  HiCheckCircle,
  HiChevronDoubleDown,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronDoubleUp,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiChevronUpDown,
  HiCircleStack,
  HiClipboard,
  HiClipboardDocument,
  HiClipboardDocumentCheck,
  HiClipboardDocumentList,
  HiClock,
  HiCloud,
  HiCloudArrowDown,
  HiCloudArrowUp,
  HiCodeBracket,
  HiCodeBracketSquare,
  HiCog,
  HiCog6Tooth,
  HiCog8Tooth,
  HiCommandLine,
  HiComputerDesktop,
  HiCpuChip,
  HiCreditCard,
  HiCube,
  HiCubeTransparent,
  HiCurrencyBangladeshi,
  HiCurrencyDollar,
  HiCurrencyEuro,
  HiCurrencyPound,
  HiCurrencyRupee,
  HiCurrencyYen,
  HiCursorArrowRays,
  HiCursorArrowRipple,
  HiDevicePhoneMobile,
  HiDeviceTablet,
  HiDocument,
  HiDocumentArrowDown,
  HiDocumentArrowUp,
  HiDocumentChartBar,
  HiDocumentCheck,
  HiDocumentDuplicate,
  HiDocumentMagnifyingGlass,
  HiDocumentMinus,
  HiDocumentPlus,
  HiDocumentText,
  HiEllipsisHorizontal,
  HiEllipsisHorizontalCircle,
  HiEllipsisVertical,
  HiEnvelope,
  HiEnvelopeOpen,
  HiExclamationCircle,
  HiExclamationTriangle,
  HiEye,
  HiEyeDropper,
  HiEyeSlash,
  HiFaceFrown,
  HiFaceSmile,
  HiFilm,
  HiFingerPrint,
  HiFire,
  HiFlag,
  HiFolder,
  HiFolderArrowDown,
  HiFolderMinus,
  HiFolderOpen,
  HiFolderPlus,
  HiForward,
  HiFunnel,
  HiGif,
  HiGift,
  HiGiftTop,
  HiGlobeAlt,
  HiGlobeAmericas,
  HiGlobeAsiaAustralia,
  HiGlobeEuropeAfrica,
  HiHandRaised,
  HiHandThumbDown,
  HiHandThumbUp,
  HiHashtag,
  HiHeart,
  HiHome,
  HiHomeModern,
  HiIdentification,
  HiInbox,
  HiInboxArrowDown,
  HiInboxStack,
  HiInformationCircle,
  HiKey,
  HiLanguage,
  HiLifebuoy,
  HiLightBulb,
  HiLink,
  HiListBullet,
  HiLockClosed,
  HiLockOpen,
  HiMagnifyingGlass,
  HiMagnifyingGlassCircle,
  HiMagnifyingGlassMinus,
  HiMagnifyingGlassPlus,
  HiMap,
  HiMapPin,
  HiMegaphone,
  HiMicrophone,
  HiMiniAcademicCap,
  HiMiniAdjustmentsHorizontal,
  HiMiniAdjustmentsVertical,
  HiMiniArchiveBox,
  HiMiniArchiveBoxArrowDown,
  HiMiniArchiveBoxXMark,
  HiMiniArrowDown,
  HiMiniArrowDownCircle,
  HiMiniArrowDownLeft,
  HiMiniArrowDownOnSquare,
  HiMiniArrowDownOnSquareStack,
  HiMiniArrowDownRight,
  HiMiniArrowDownTray,
  HiMiniArrowLeft,
  HiMiniArrowLeftCircle,
  HiMiniArrowLeftOnRectangle,
  HiMiniArrowLongDown,
  HiMiniArrowLongLeft,
  HiMiniArrowLongRight,
  HiMiniArrowLongUp,
  HiMiniArrowPath,
  HiMiniArrowPathRoundedSquare,
  HiMiniArrowRight,
  HiMiniArrowRightCircle,
  HiMiniArrowRightOnRectangle,
  HiMiniArrowSmallDown,
  HiMiniArrowSmallLeft,
  HiMiniArrowSmallRight,
  HiMiniArrowSmallUp,
  HiMiniArrowTopRightOnSquare,
  HiMiniArrowTrendingDown,
  HiMiniArrowTrendingUp,
  HiMiniArrowUp,
  HiMiniArrowUpCircle,
  HiMiniArrowUpLeft,
  HiMiniArrowUpOnSquare,
  HiMiniArrowUpOnSquareStack,
  HiMiniArrowUpRight,
  HiMiniArrowUpTray,
  HiMiniArrowUturnDown,
  HiMiniArrowUturnLeft,
  HiMiniArrowUturnRight,
  HiMiniArrowUturnUp,
  HiMiniArrowsPointingIn,
  HiMiniArrowsPointingOut,
  HiMiniArrowsRightLeft,
  HiMiniArrowsUpDown,
  HiMiniAtSymbol,
  HiMiniBackspace,
  HiMiniBackward,
  HiMiniBanknotes,
  HiMiniBars2,
  HiMiniBars3,
  HiMiniBars3BottomLeft,
  HiMiniBars3BottomRight,
  HiMiniBars3CenterLeft,
  HiMiniBars4,
  HiMiniBarsArrowDown,
  HiMiniBarsArrowUp,
  HiMiniBattery0,
  HiMiniBattery100,
  HiMiniBattery50,
  HiMiniBeaker,
  HiMiniBell,
  HiMiniBellAlert,
  HiMiniBellSlash,
  HiMiniBellSnooze,
  HiMiniBolt,
  HiMiniBoltSlash,
  HiMiniBookOpen,
  HiMiniBookmark,
  HiMiniBookmarkSlash,
  HiMiniBookmarkSquare,
  HiMiniBriefcase,
  HiMiniBugAnt,
  HiMiniBuildingLibrary,
  HiMiniBuildingOffice,
  HiMiniBuildingOffice2,
  HiMiniBuildingStorefront,
  HiMiniCake,
  HiMiniCalculator,
  HiMiniCalendar,
  HiMiniCalendarDays,
  HiMiniCamera,
  HiMiniChartBar,
  HiMiniChartBarSquare,
  HiMiniChartPie,
  HiMiniChatBubbleBottomCenter,
  HiMiniChatBubbleBottomCenterText,
  HiMiniChatBubbleLeft,
  HiMiniChatBubbleLeftEllipsis,
  HiMiniChatBubbleLeftRight,
  HiMiniChatBubbleOvalLeft,
  HiMiniChatBubbleOvalLeftEllipsis,
  HiMiniCheck,
  HiMiniCheckBadge,
  HiMiniCheckCircle,
  HiMiniChevronDoubleDown,
  HiMiniChevronDoubleLeft,
  HiMiniChevronDoubleRight,
  HiMiniChevronDoubleUp,
  HiMiniChevronDown,
  HiMiniChevronLeft,
  HiMiniChevronRight,
  HiMiniChevronUp,
  HiMiniChevronUpDown,
  HiMiniCircleStack,
  HiMiniClipboard,
  HiMiniClipboardDocument,
  HiMiniClipboardDocumentCheck,
  HiMiniClipboardDocumentList,
  HiMiniClock,
  HiMiniCloud,
  HiMiniCloudArrowDown,
  HiMiniCloudArrowUp,
  HiMiniCodeBracket,
  HiMiniCodeBracketSquare,
  HiMiniCog,
  HiMiniCog6Tooth,
  HiMiniCog8Tooth,
  HiMiniCommandLine,
  HiMiniComputerDesktop,
  HiMiniCpuChip,
  HiMiniCreditCard,
  HiMiniCube,
  HiMiniCubeTransparent,
  HiMiniCurrencyBangladeshi,
  HiMiniCurrencyDollar,
  HiMiniCurrencyEuro,
  HiMiniCurrencyPound,
  HiMiniCurrencyRupee,
  HiMiniCurrencyYen,
  HiMiniCursorArrowRays,
  HiMiniCursorArrowRipple,
  HiMiniDevicePhoneMobile,
  HiMiniDeviceTablet,
  HiMiniDocument,
  HiMiniDocumentArrowDown,
  HiMiniDocumentArrowUp,
  HiMiniDocumentChartBar,
  HiMiniDocumentCheck,
  HiMiniDocumentDuplicate,
  HiMiniDocumentMagnifyingGlass,
  HiMiniDocumentMinus,
  HiMiniDocumentPlus,
  HiMiniDocumentText,
  HiMiniEllipsisHorizontal,
  HiMiniEllipsisHorizontalCircle,
  HiMiniEllipsisVertical,
  HiMiniEnvelope,
  HiMiniEnvelopeOpen,
  HiMiniExclamationCircle,
  HiMiniExclamationTriangle,
  HiMiniEye,
  HiMiniEyeDropper,
  HiMiniEyeSlash,
  HiMiniFaceFrown,
  HiMiniFaceSmile,
  HiMiniFilm,
  HiMiniFingerPrint,
  HiMiniFire,
  HiMiniFlag,
  HiMiniFolder,
  HiMiniFolderArrowDown,
  HiMiniFolderMinus,
  HiMiniFolderOpen,
  HiMiniFolderPlus,
  HiMiniForward,
  HiMiniFunnel,
  HiMiniGif,
  HiMiniGift,
  HiMiniGiftTop,
  HiMiniGlobeAlt,
  HiMiniGlobeAmericas,
  HiMiniGlobeAsiaAustralia,
  HiMiniGlobeEuropeAfrica,
  HiMiniHandRaised,
  HiMiniHandThumbDown,
  HiMiniHandThumbUp,
  HiMiniHashtag,
  HiMiniHeart,
  HiMiniHome,
  HiMiniHomeModern,
  HiMiniIdentification,
  HiMiniInbox,
  HiMiniInboxArrowDown,
  HiMiniInboxStack,
  HiMiniInformationCircle,
  HiMiniKey,
  HiMiniLanguage,
  HiMiniLifebuoy,
  HiMiniLightBulb,
  HiMiniLink,
  HiMiniListBullet,
  HiMiniLockClosed,
  HiMiniLockOpen,
  HiMiniMagnifyingGlass,
  HiMiniMagnifyingGlassCircle,
  HiMiniMagnifyingGlassMinus,
  HiMiniMagnifyingGlassPlus,
  HiMiniMap,
  HiMiniMapPin,
  HiMiniMegaphone,
  HiMiniMicrophone,
  HiMiniMinus,
  HiMiniMinusCircle,
  HiMiniMinusSmall,
  HiMiniMoon,
  HiMiniMusicalNote,
  HiMiniNewspaper,
  HiMiniNoSymbol,
  HiMiniPaintBrush,
  HiMiniPaperAirplane,
  HiMiniPaperClip,
  HiMiniPause,
  HiMiniPauseCircle,
  HiMiniPencil,
  HiMiniPencilSquare,
  HiMiniPhone,
  HiMiniPhoneArrowDownLeft,
  HiMiniPhoneArrowUpRight,
  HiMiniPhoneXMark,
  HiMiniPhoto,
  HiMiniPlay,
  HiMiniPlayCircle,
  HiMiniPlayPause,
  HiMiniPlus,
  HiMiniPlusCircle,
  HiMiniPlusSmall,
  HiMiniPower,
  HiMiniPresentationChartBar,
  HiMiniPresentationChartLine,
  HiMiniPrinter,
  HiMiniPuzzlePiece,
  HiMiniQrCode,
  HiMiniQuestionMarkCircle,
  HiMiniQueueList,
  HiMiniRadio,
  HiMiniReceiptPercent,
  HiMiniReceiptRefund,
  HiMiniRectangleGroup,
  HiMiniRectangleStack,
  HiMiniRocketLaunch,
  HiMiniRss,
  HiMiniScale,
  HiMiniScissors,
  HiMiniServer,
  HiMiniServerStack,
  HiMiniShare,
  HiMiniShieldCheck,
  HiMiniShieldExclamation,
  HiMiniShoppingBag,
  HiMiniShoppingCart,
  HiMiniSignal,
  HiMiniSignalSlash,
  HiMiniSparkles,
  HiMiniSpeakerWave,
  HiMiniSpeakerXMark,
  HiMiniSquare2Stack,
  HiMiniSquare3Stack3D,
  HiMiniSquares2X2,
  HiMiniSquaresPlus,
  HiMiniStar,
  HiMiniStop,
  HiMiniStopCircle,
  HiMiniSun,
  HiMiniSwatch,
  HiMiniTableCells,
  HiMiniTag,
  HiMiniTicket,
  HiMiniTrash,
  HiMiniTrophy,
  HiMiniTruck,
  HiMiniTv,
  HiMiniUser,
  HiMiniUserCircle,
  HiMiniUserGroup,
  HiMiniUserMinus,
  HiMiniUserPlus,
  HiMiniUsers,
  HiMiniVariable,
  HiMiniVideoCamera,
  HiMiniVideoCameraSlash,
  HiMiniViewColumns,
  HiMiniViewfinderCircle,
  HiMiniWallet,
  HiMiniWifi,
  HiMiniWindow,
  HiMiniWrench,
  HiMiniWrenchScrewdriver,
  HiMiniXCircle,
  HiMiniXMark,
  HiMinus,
  HiMinusCircle,
  HiMinusSmall,
  HiMoon,
  HiMusicalNote,
  HiNewspaper,
  HiNoSymbol,
  HiOutlineAcademicCap,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineAdjustmentsVertical,
  HiOutlineArchiveBox,
  HiOutlineArchiveBoxArrowDown,
  HiOutlineArchiveBoxXMark,
  HiOutlineArrowDown,
  HiOutlineArrowDownCircle,
  HiOutlineArrowDownLeft,
  HiOutlineArrowDownOnSquare,
  HiOutlineArrowDownOnSquareStack,
  HiOutlineArrowDownRight,
  HiOutlineArrowDownTray,
  HiOutlineArrowLeft,
  HiOutlineArrowLeftCircle,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineArrowLongDown,
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
  HiOutlineArrowLongUp,
  HiOutlineArrowPath,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineArrowRight,
  HiOutlineArrowRightCircle,
  HiOutlineArrowRightOnRectangle,
  HiOutlineArrowSmallDown,
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
  HiOutlineArrowSmallUp,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineArrowTrendingDown,
  HiOutlineArrowTrendingUp,
  HiOutlineArrowUp,
  HiOutlineArrowUpCircle,
  HiOutlineArrowUpLeft,
  HiOutlineArrowUpOnSquare,
  HiOutlineArrowUpOnSquareStack,
  HiOutlineArrowUpRight,
  HiOutlineArrowUpTray,
  HiOutlineArrowUturnDown,
  HiOutlineArrowUturnLeft,
  HiOutlineArrowUturnRight,
  HiOutlineArrowUturnUp,
  HiOutlineArrowsPointingIn,
  HiOutlineArrowsPointingOut,
  HiOutlineArrowsRightLeft,
  HiOutlineArrowsUpDown,
  HiOutlineAtSymbol,
  HiOutlineBackspace,
  HiOutlineBackward,
  HiOutlineBanknotes,
  HiOutlineBars2,
  HiOutlineBars3,
  HiOutlineBars3BottomLeft,
  HiOutlineBars3BottomRight,
  HiOutlineBars3CenterLeft,
  HiOutlineBars4,
  HiOutlineBarsArrowDown,
  HiOutlineBarsArrowUp,
  HiOutlineBattery0,
  HiOutlineBattery100,
  HiOutlineBattery50,
  HiOutlineBeaker,
  HiOutlineBell,
  HiOutlineBellAlert,
  HiOutlineBellSlash,
  HiOutlineBellSnooze,
  HiOutlineBolt,
  HiOutlineBoltSlash,
  HiOutlineBookOpen,
  HiOutlineBookmark,
  HiOutlineBookmarkSlash,
  HiOutlineBookmarkSquare,
  HiOutlineBriefcase,
  HiOutlineBugAnt,
  HiOutlineBuildingLibrary,
  HiOutlineBuildingOffice,
  HiOutlineBuildingOffice2,
  HiOutlineBuildingStorefront,
  HiOutlineCake,
  HiOutlineCalculator,
  HiOutlineCalendar,
  HiOutlineCalendarDays,
  HiOutlineCamera,
  HiOutlineChartBar,
  HiOutlineChartBarSquare,
  HiOutlineChartPie,
  HiOutlineChatBubbleBottomCenter,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineChatBubbleLeft,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineChatBubbleLeftRight,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineCheck,
  HiOutlineCheckBadge,
  HiOutlineCheckCircle,
  HiOutlineChevronDoubleDown,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronUp,
  HiOutlineChevronUpDown,
  HiOutlineCircleStack,
  HiOutlineClipboard,
  HiOutlineClipboardDocument,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlineCloud,
  HiOutlineCloudArrowDown,
  HiOutlineCloudArrowUp,
  HiOutlineCodeBracket,
  HiOutlineCodeBracketSquare,
  HiOutlineCog,
  HiOutlineCog6Tooth,
  HiOutlineCog8Tooth,
  HiOutlineCommandLine,
  HiOutlineComputerDesktop,
  HiOutlineCpuChip,
  HiOutlineCreditCard,
  HiOutlineCube,
  HiOutlineCubeTransparent,
  HiOutlineCurrencyBangladeshi,
  HiOutlineCurrencyDollar,
  HiOutlineCurrencyEuro,
  HiOutlineCurrencyPound,
  HiOutlineCurrencyRupee,
  HiOutlineCurrencyYen,
  HiOutlineCursorArrowRays,
  HiOutlineCursorArrowRipple,
  HiOutlineDevicePhoneMobile,
  HiOutlineDeviceTablet,
  HiOutlineDocument,
  HiOutlineDocumentArrowDown,
  HiOutlineDocumentArrowUp,
  HiOutlineDocumentChartBar,
  HiOutlineDocumentCheck,
  HiOutlineDocumentDuplicate,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineDocumentMinus,
  HiOutlineDocumentPlus,
  HiOutlineDocumentText,
  HiOutlineEllipsisHorizontal,
  HiOutlineEllipsisHorizontalCircle,
  HiOutlineEllipsisVertical,
  HiOutlineEnvelope,
  HiOutlineEnvelopeOpen,
  HiOutlineExclamationCircle,
  HiOutlineExclamationTriangle,
  HiOutlineEye,
  HiOutlineEyeDropper,
  HiOutlineEyeSlash,
  HiOutlineFaceFrown,
  HiOutlineFaceSmile,
  HiOutlineFilm,
  HiOutlineFingerPrint,
  HiOutlineFire,
  HiOutlineFlag,
  HiOutlineFolder,
  HiOutlineFolderArrowDown,
  HiOutlineFolderMinus,
  HiOutlineFolderOpen,
  HiOutlineFolderPlus,
  HiOutlineForward,
  HiOutlineFunnel,
  HiOutlineGif,
  HiOutlineGift,
  HiOutlineGiftTop,
  HiOutlineGlobeAlt,
  HiOutlineGlobeAmericas,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineGlobeEuropeAfrica,
  HiOutlineHandRaised,
  HiOutlineHandThumbDown,
  HiOutlineHandThumbUp,
  HiOutlineHashtag,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineIdentification,
  HiOutlineInbox,
  HiOutlineInboxArrowDown,
  HiOutlineInboxStack,
  HiOutlineInformationCircle,
  HiOutlineKey,
  HiOutlineLanguage,
  HiOutlineLifebuoy,
  HiOutlineLightBulb,
  HiOutlineLink,
  HiOutlineListBullet,
  HiOutlineLockClosed,
  HiOutlineLockOpen,
  HiOutlineMagnifyingGlass,
  HiOutlineMagnifyingGlassCircle,
  HiOutlineMagnifyingGlassMinus,
  HiOutlineMagnifyingGlassPlus,
  HiOutlineMap,
  HiOutlineMapPin,
  HiOutlineMegaphone,
  HiOutlineMicrophone,
  HiOutlineMinus,
  HiOutlineMinusCircle,
  HiOutlineMinusSmall,
  HiOutlineMoon,
  HiOutlineMusicalNote,
  HiOutlineNewspaper,
  HiOutlineNoSymbol,
  HiOutlinePaintBrush,
  HiOutlinePaperAirplane,
  HiOutlinePaperClip,
  HiOutlinePause,
  HiOutlinePauseCircle,
  HiOutlinePencil,
  HiOutlinePencilSquare,
  HiOutlinePhone,
  HiOutlinePhoneArrowDownLeft,
  HiOutlinePhoneArrowUpRight,
  HiOutlinePhoneXMark,
  HiOutlinePhoto,
  HiOutlinePlay,
  HiOutlinePlayCircle,
  HiOutlinePlayPause,
  HiOutlinePlus,
  HiOutlinePlusCircle,
  HiOutlinePlusSmall,
  HiOutlinePower,
  HiOutlinePresentationChartBar,
  HiOutlinePresentationChartLine,
  HiOutlinePrinter,
  HiOutlinePuzzlePiece,
  HiOutlineQrCode,
  HiOutlineQuestionMarkCircle,
  HiOutlineQueueList,
  HiOutlineRadio,
  HiOutlineReceiptPercent,
  HiOutlineReceiptRefund,
  HiOutlineRectangleGroup,
  HiOutlineRectangleStack,
  HiOutlineRocketLaunch,
  HiOutlineRss,
  HiOutlineScale,
  HiOutlineScissors,
  HiOutlineServer,
  HiOutlineServerStack,
  HiOutlineShare,
  HiOutlineShieldCheck,
  HiOutlineShieldExclamation,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlineSignal,
  HiOutlineSignalSlash,
  HiOutlineSparkles,
  HiOutlineSpeakerWave,
  HiOutlineSpeakerXMark,
  HiOutlineSquare2Stack,
  HiOutlineSquare3Stack3D,
  HiOutlineSquares2X2,
  HiOutlineSquaresPlus,
  HiOutlineStar,
  HiOutlineStop,
  HiOutlineStopCircle,
  HiOutlineSun,
  HiOutlineSwatch,
  HiOutlineTableCells,
  HiOutlineTag,
  HiOutlineTicket,
  HiOutlineTrash,
  HiOutlineTrophy,
  HiOutlineTruck,
  HiOutlineTv,
  HiOutlineUser,
  HiOutlineUserCircle,
  HiOutlineUserGroup,
  HiOutlineUserMinus,
  HiOutlineUserPlus,
  HiOutlineUsers,
  HiOutlineVariable,
  HiOutlineVideoCamera,
  HiOutlineVideoCameraSlash,
  HiOutlineViewColumns,
  HiOutlineViewfinderCircle,
  HiOutlineWallet,
  HiOutlineWifi,
  HiOutlineWindow,
  HiOutlineWrench,
  HiOutlineWrenchScrewdriver,
  HiOutlineXCircle,
  HiOutlineXMark,
  HiPaintBrush,
  HiPaperAirplane,
  HiPaperClip,
  HiPause,
  HiPauseCircle,
  HiPencil,
  HiPencilSquare,
  HiPhone,
  HiPhoneArrowDownLeft,
  HiPhoneArrowUpRight,
  HiPhoneXMark,
  HiPhoto,
  HiPlay,
  HiPlayCircle,
  HiPlayPause,
  HiPlus,
  HiPlusCircle,
  HiPlusSmall,
  HiPower,
  HiPresentationChartBar,
  HiPresentationChartLine,
  HiPrinter,
  HiPuzzlePiece,
  HiQrCode,
  HiQuestionMarkCircle,
  HiQueueList,
  HiRadio,
  HiReceiptPercent,
  HiReceiptRefund,
  HiRectangleGroup,
  HiRectangleStack,
  HiRocketLaunch,
  HiRss,
  HiScale,
  HiScissors,
  HiServer,
  HiServerStack,
  HiShare,
  HiShieldCheck,
  HiShieldExclamation,
  HiShoppingBag,
  HiShoppingCart,
  HiSignal,
  HiSignalSlash,
  HiSparkles,
  HiSpeakerWave,
  HiSpeakerXMark,
  HiSquare2Stack,
  HiSquare3Stack3D,
  HiSquares2X2,
  HiSquaresPlus,
  HiStar,
  HiStop,
  HiStopCircle,
  HiSun,
  HiSwatch,
  HiTableCells,
  HiTag,
  HiTicket,
  HiTrash,
  HiTrophy,
  HiTruck,
  HiTv,
  HiUser,
  HiUserCircle,
  HiUserGroup,
  HiUserMinus,
  HiUserPlus,
  HiUsers,
  HiVariable,
  HiVideoCamera,
  HiVideoCameraSlash,
  HiViewColumns,
  HiViewfinderCircle,
  HiWallet,
  HiWifi,
  HiWindow,
  HiWrench,
  HiWrenchScrewdriver,
  HiXCircle,
  HiXMark
};
//# sourceMappingURL=react-icons_hi2.js.map
