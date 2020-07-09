// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/svelte/internal/index.mjs":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.action_destroyer = action_destroyer;
exports.add_attribute = add_attribute;
exports.add_classes = add_classes;
exports.add_flush_callback = add_flush_callback;
exports.add_location = add_location;
exports.add_render_callback = add_render_callback;
exports.add_resize_listener = add_resize_listener;
exports.add_transform = add_transform;
exports.afterUpdate = afterUpdate;
exports.append = append;
exports.append_dev = append_dev;
exports.assign = assign;
exports.attr = attr;
exports.attr_dev = attr_dev;
exports.beforeUpdate = beforeUpdate;
exports.bind = bind;
exports.blank_object = blank_object;
exports.bubble = bubble;
exports.check_outros = check_outros;
exports.children = children;
exports.claim_component = claim_component;
exports.claim_element = claim_element;
exports.claim_space = claim_space;
exports.claim_text = claim_text;
exports.clear_loops = clear_loops;
exports.component_subscribe = component_subscribe;
exports.compute_rest_props = compute_rest_props;
exports.createEventDispatcher = createEventDispatcher;
exports.create_animation = create_animation;
exports.create_bidirectional_transition = create_bidirectional_transition;
exports.create_component = create_component;
exports.create_in_transition = create_in_transition;
exports.create_out_transition = create_out_transition;
exports.create_slot = create_slot;
exports.create_ssr_component = create_ssr_component;
exports.custom_event = custom_event;
exports.dataset_dev = dataset_dev;
exports.debug = debug;
exports.destroy_block = destroy_block;
exports.destroy_component = destroy_component;
exports.destroy_each = destroy_each;
exports.detach = detach;
exports.detach_after_dev = detach_after_dev;
exports.detach_before_dev = detach_before_dev;
exports.detach_between_dev = detach_between_dev;
exports.detach_dev = detach_dev;
exports.dispatch_dev = dispatch_dev;
exports.each = each;
exports.element = element;
exports.element_is = element_is;
exports.empty = empty;
exports.escape = escape;
exports.exclude_internal_props = exclude_internal_props;
exports.fix_and_destroy_block = fix_and_destroy_block;
exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
exports.fix_position = fix_position;
exports.flush = flush;
exports.getContext = getContext;
exports.get_binding_group_value = get_binding_group_value;
exports.get_current_component = get_current_component;
exports.get_slot_changes = get_slot_changes;
exports.get_slot_context = get_slot_context;
exports.get_spread_object = get_spread_object;
exports.get_spread_update = get_spread_update;
exports.get_store_value = get_store_value;
exports.group_outros = group_outros;
exports.handle_promise = handle_promise;
exports.init = init;
exports.insert = insert;
exports.insert_dev = insert_dev;
exports.is_crossorigin = is_crossorigin;
exports.is_function = is_function;
exports.is_promise = is_promise;
exports.listen = listen;
exports.listen_dev = listen_dev;
exports.loop = loop;
exports.loop_guard = loop_guard;
exports.mount_component = mount_component;
exports.noop = noop;
exports.not_equal = not_equal;
exports.null_to_empty = null_to_empty;
exports.object_without_properties = object_without_properties;
exports.onDestroy = onDestroy;
exports.onMount = onMount;
exports.once = once;
exports.outro_and_destroy_block = outro_and_destroy_block;
exports.prevent_default = prevent_default;
exports.prop_dev = prop_dev;
exports.query_selector_all = query_selector_all;
exports.run = run;
exports.run_all = run_all;
exports.safe_not_equal = safe_not_equal;
exports.schedule_update = schedule_update;
exports.select_multiple_value = select_multiple_value;
exports.select_option = select_option;
exports.select_options = select_options;
exports.select_value = select_value;
exports.self = self;
exports.setContext = setContext;
exports.set_attributes = set_attributes;
exports.set_current_component = set_current_component;
exports.set_custom_element_data = set_custom_element_data;
exports.set_data = set_data;
exports.set_data_dev = set_data_dev;
exports.set_input_type = set_input_type;
exports.set_input_value = set_input_value;
exports.set_now = set_now;
exports.set_raf = set_raf;
exports.set_store_value = set_store_value;
exports.set_style = set_style;
exports.set_svg_attributes = set_svg_attributes;
exports.space = space;
exports.spread = spread;
exports.stop_propagation = stop_propagation;
exports.subscribe = subscribe;
exports.svg_element = svg_element;
exports.text = text;
exports.tick = tick;
exports.time_ranges_to_array = time_ranges_to_array;
exports.to_number = to_number;
exports.toggle_class = toggle_class;
exports.transition_in = transition_in;
exports.transition_out = transition_out;
exports.update_keyed_each = update_keyed_each;
exports.update_slot = update_slot;
exports.validate_component = validate_component;
exports.validate_each_argument = validate_each_argument;
exports.validate_each_keys = validate_each_keys;
exports.validate_slots = validate_slots;
exports.validate_store = validate_store;
exports.xlink_attr = xlink_attr;
exports.raf = exports.now = exports.missing_component = exports.is_client = exports.invalid_attribute_name_character = exports.intros = exports.identity = exports.has_prop = exports.globals = exports.escaped = exports.dirty_components = exports.current_component = exports.binding_callbacks = exports.SvelteElement = exports.SvelteComponentDev = exports.SvelteComponent = exports.HtmlTag = void 0;

function noop() {}

const identity = x => x;

exports.identity = identity;

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function is_promise(value) {
  return value && typeof value === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== 'function') {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}

function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }

  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function get_store_value(store) {
  let value;
  subscribe(store, _ => value = _)();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (typeof lets === 'object') {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);

      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);

  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}

function exclude_internal_props(props) {
  const result = {};

  for (const k in props) if (k[0] !== '$') result[k] = props[k];

  return result;
}

function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);

  for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];

  return rest;
}

function once(fn) {
  let ran = false;
  return function (...args) {
    if (ran) return;
    ran = true;
    fn.call(this, ...args);
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value = ret) {
  store.set(value);
  return ret;
}

const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

exports.has_prop = has_prop;

function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
exports.is_client = is_client;
let now = is_client ? () => window.performance.now() : () => Date.now();
exports.now = now;
let raf = is_client ? cb => requestAnimationFrame(cb) : noop; // used internally for testing

exports.raf = raf;

function set_now(fn) {
  exports.now = now = fn;
}

function set_raf(fn) {
  exports.raf = raf = fn;
}

const tasks = new Set();

function run_tasks(now) {
  tasks.forEach(task => {
    if (!task.c(now)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */


function clear_loops() {
  tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(fulfill => {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),

    abort() {
      tasks.delete(task);
    }

  };
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is
  });
}

function object_without_properties(obj, exclude) {
  const target = {};

  for (const k in obj) {
    if (has_prop(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value') {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group, __value, checked) {
  const value = new Set();

  for (let i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.add(group[i].__value);
  }

  if (!checked) {
    value.delete(__value);
  }

  return Array.from(value);
}

function to_number(value) {
  return value === '' ? undefined : +value;
}

function time_ranges_to_array(ranges) {
  const array = [];

  for (let i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeName === name) {
      let j = 0;
      const remove = [];

      while (j < node.attributes.length) {
        const attribute = node.attributes[j++];

        if (!attributes[attribute.name]) {
          remove.push(attribute.name);
        }
      }

      for (let k = 0; k < remove.length; k++) {
        node.removeAttribute(remove[k]);
      }

      return nodes.splice(i, 1)[0];
    }
  }

  return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeType === 3) {
      node.data = '' + data;
      return nodes.splice(i, 1)[0];
    }
  }

  return text(data);
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function set_data(text, data) {
  data = '' + data;
  if (text.data !== data) text.data = data;
}

function set_input_value(input, value) {
  input.value = value == null ? '' : value;
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? 'important' : '');
}

function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
}

function select_options(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  const selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
} // unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead


let crossorigin;

function is_crossorigin() {
  if (crossorigin === undefined) {
    crossorigin = false;

    try {
      if (typeof window !== 'undefined' && window.parent) {
        void window.parent.document;
      }
    } catch (error) {
      crossorigin = true;
    }
  }

  return crossorigin;
}

function add_resize_listener(node, fn) {
  const computed_style = getComputedStyle(node);
  const z_index = (parseInt(computed_style.zIndex) || 0) - 1;

  if (computed_style.position === 'static') {
    node.style.position = 'relative';
  }

  const iframe = element('iframe');
  iframe.setAttribute('style', `display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ` + `overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${z_index};`);
  iframe.setAttribute('aria-hidden', 'true');
  iframe.tabIndex = -1;
  const crossorigin = is_crossorigin();
  let unsubscribe;

  if (crossorigin) {
    iframe.src = `data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>`;
    unsubscribe = listen(window, 'message', event => {
      if (event.source === iframe.contentWindow) fn();
    });
  } else {
    iframe.src = 'about:blank';

    iframe.onload = () => {
      unsubscribe = listen(iframe.contentWindow, 'resize', fn);
    };
  }

  append(node, iframe);
  return () => {
    if (crossorigin) {
      unsubscribe();
    } else if (unsubscribe && iframe.contentWindow) {
      unsubscribe();
    }

    detach(iframe);
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

function query_selector_all(selector, parent = document.body) {
  return Array.from(parent.querySelectorAll(selector));
}

class HtmlTag {
  constructor(anchor = null) {
    this.a = anchor;
    this.e = this.n = null;
  }

  m(html, target, anchor = null) {
    if (!this.e) {
      this.e = element(target.nodeName);
      this.t = target;
      this.h(html);
    }

    this.i(anchor);
  }

  h(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.childNodes);
  }

  i(anchor) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert(this.t, this.n[i], anchor);
    }
  }

  p(html) {
    this.d();
    this.h(html);
    this.i(this.a);
  }

  d() {
    this.n.forEach(detach);
  }

}

exports.HtmlTag = HtmlTag;
const active_docs = new Set();
let active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = node.ownerDocument;
  active_docs.add(doc);
  const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
  const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

  if (!current_rules[name]) {
    current_rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }

  const animation = node.style.animation || '';
  node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}

function delete_rule(node, name) {
  const previous = (node.style.animation || '').split(', ');
  const next = previous.filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  );
  const deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(() => {
    if (active) return;
    active_docs.forEach(doc => {
      const stylesheet = doc.__svelte_stylesheet;
      let i = stylesheet.cssRules.length;

      while (i--) stylesheet.deleteRule(i);

      doc.__svelte_rules = {};
    });
    active_docs.clear();
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
  const {
    delay = 0,
    duration = 300,
    easing = identity,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay,
    // @ts-ignore todo:
    end = start_time + duration,
    tick = noop,
    css
  } = fn(node, {
    from,
    to
  }, params);
  let running = true;
  let started = false;
  let name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(now => {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      const p = now - start_time;
      const t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  const style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  const b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
  }
}

let current_component;
exports.current_component = current_component;

function set_current_component(component) {
  exports.current_component = current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error(`Function called outside component initialization`);
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      const event = custom_event(type, detail);
      callbacks.slice().forEach(fn => {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    callbacks.slice().forEach(fn => fn(event));
  }
}

const dirty_components = [];
exports.dirty_components = dirty_components;
const intros = {
  enabled: false
};
exports.intros = intros;
const binding_callbacks = [];
exports.binding_callbacks = binding_callbacks;
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}

let flushing = false;
const seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    dirty_components.length = 0;

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

let promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

const null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  let config = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  let started = false;
  return {
    start() {
      if (started) return;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },

    invalidate() {
      started = false;
    },

    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }

  };
}

function create_out_transition(node, fn, params) {
  let config = fn(node, params);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }

  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },

    end() {
      clear_animation();
      running_program = pending_program = null;
    }

  };
}

function handle_promise(promise, info) {
  const token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    let child_ctx = info.ctx;

    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }

    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, () => {
              info.blocks[i] = null;
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;

    if (needs_flush) {
      flush();
    }
  }

  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(value => {
      set_current_component(current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, error => {
      set_current_component(current_component);
      update(info.catch, 2, info.error, error);
      set_current_component(null);
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = promise;
  }
}

const globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;
exports.globals = globals;

function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};

  while (i--) old_indexes[old_blocks[i].key] = i;

  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;

  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  const will_move = new Set();
  const did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }

  while (n) insert(new_blocks[n - 1]);

  return new_blocks;
}

function validate_each_keys(ctx, list, get_context, get_key) {
  const keys = new Set();

  for (let i = 0; i < list.length; i++) {
    const key = get_key(get_context(ctx, list, i));

    if (keys.has(key)) {
      throw new Error(`Cannot have duplicate keys in a keyed each`);
    }

    keys.add(key);
  }
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html


const boolean_attributes = new Set(['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected']);
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

exports.invalid_attribute_name_character = invalid_attribute_name_character;

function spread(args, classes_to_add) {
  const attributes = Object.assign({}, ...args);

  if (classes_to_add) {
    if (attributes.class == null) {
      attributes.class = classes_to_add;
    } else {
      attributes.class += ' ' + classes_to_add;
    }
  }

  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalid_attribute_name_character.test(name)) return;
    const value = attributes[name];
    if (value === true) str += " " + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;')}"`;
    }
  });
  return str;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
exports.escaped = escaped;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

const missing_component = {
  $$render: () => ''
};
exports.missing_component = missing_component;

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

let on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : []),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$
    });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: (props = {}, options = {}) => {
      on_destroy = [];
      const result = {
        title: '',
        head: '',
        css: new Set()
      };
      const html = $$render(result, props, {}, options);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map(css => css.code).join('\n'),
          map: null // TODO

        },
        head: result.title + result.head
      };
    },
    $$render
  };
}

function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value) return '';
  return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

function add_classes(classes) {
  return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
  const index = component.$$.props[name];

  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(() => {
    const new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push(...new_on_destroy);
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const prop_values = options.props || {};
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty
  };
  let ready = false;
  $$.ctx = instance ? instance(component, prop_values, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if ($$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

let SvelteElement;
exports.SvelteElement = SvelteElement;

if (typeof HTMLElement === 'function') {
  exports.SvelteElement = SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
    }

    connectedCallback() {
      // @ts-ignore todo: improve typings
      for (const key in this.$$.slotted) {
        // @ts-ignore todo: improve typings
        this.appendChild(this.$$.slotted[key]);
      }
    }

    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }

    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }

    $on(type, callback) {
      // TODO should this delegate to addEventListener?
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }

    $set() {// overridden by instance, if it has props
    }

  };
}

class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set() {// overridden by instance, if it has props
  }

}

exports.SvelteComponent = SvelteComponent;

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.23.2'
  }, detail)));
}

function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node
  });
  append(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node,
    anchor
  });
  insert(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", {
    node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev("SvelteDOMAddEventListener", {
    node,
    event,
    handler,
    modifiers
  });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", {
      node,
      event,
      handler,
      modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
    node,
    attribute
  });else dispatch_dev("SvelteDOMSetAttribute", {
    node,
    attribute,
    value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev("SvelteDOMSetProperty", {
    node,
    property,
    value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev("SvelteDOMSetDataset", {
    node,
    property,
    value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.data === data) return;
  dispatch_dev("SvelteDOMSetData", {
    node: text,
    data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
    let msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}

class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error(`'target' is a required option`);
    }

    super();
  }

  $destroy() {
    super.$destroy();

    this.$destroy = () => {
      console.warn(`Component was already destroyed`); // eslint-disable-line no-console
    };
  }

  $capture_state() {}

  $inject_state() {}

}

exports.SvelteComponentDev = SvelteComponentDev;

function loop_guard(timeout) {
  const start = Date.now();
  return () => {
    if (Date.now() - start > timeout) {
      throw new Error(`Infinite loop detected`);
    }
  };
}
},{}],"../node_modules/svelte/store/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derived = derived;
exports.readable = readable;
exports.writable = writable;
Object.defineProperty(exports, "get", {
  enumerable: true,
  get: function () {
    return _internal.get_store_value;
  }
});

var _internal = require("../internal");

const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */

function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value, start = _internal.noop) {
  let stop;
  const subscribers = [];

  function set(new_value) {
    if ((0, _internal.safe_not_equal)(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        const run_queue = !subscriber_queue.length;

        for (let i = 0; i < subscribers.length; i += 1) {
          const s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
        }

        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run, invalidate = _internal.noop) {
    const subscriber = [run, invalidate];
    subscribers.push(subscriber);

    if (subscribers.length === 1) {
      stop = start(set) || _internal.noop;
    }

    run(value);
    return () => {
      const index = subscribers.indexOf(subscriber);

      if (index !== -1) {
        subscribers.splice(index, 1);
      }

      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set,
    update,
    subscribe
  };
}

function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, set => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = _internal.noop;

    const sync = () => {
      if (pending) {
        return;
      }

      cleanup();
      const result = fn(single ? values[0] : values, set);

      if (auto) {
        set(result);
      } else {
        cleanup = (0, _internal.is_function)(result) ? result : _internal.noop;
      }
    };

    const unsubscribers = stores_array.map((store, i) => (0, _internal.subscribe)(store, value => {
      values[i] = value;
      pending &= ~(1 << i);

      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      (0, _internal.run_all)(unsubscribers);
      cleanup();
    };
  });
}
},{"../internal":"../node_modules/svelte/internal/index.mjs"}],"main_store.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTIVE_PATH = exports.CRUMBS = exports.APPBAR_POSITION = exports.TOGGLE_ICON = exports.MINI_MENU = exports.MARGIN_LEFT = exports.MENU_WIDTH = exports.APP_WIDTH = void 0;

const store_1 = require("svelte/store");

exports.APP_WIDTH = store_1.writable(0);
exports.MENU_WIDTH = store_1.writable('70');
exports.MARGIN_LEFT = store_1.writable('70');
exports.MINI_MENU = store_1.writable(false);
exports.TOGGLE_ICON = store_1.writable('disc');
exports.APPBAR_POSITION = store_1.writable('sticky');
exports.CRUMBS = store_1.writable({});
exports.ACTIVE_PATH = store_1.writable('/');
},{"svelte/store":"../node_modules/svelte/store/index.mjs"}],"../node_modules/svelte/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SvelteComponent", {
  enumerable: true,
  get: function () {
    return _internal.SvelteComponentDev;
  }
});
Object.defineProperty(exports, "afterUpdate", {
  enumerable: true,
  get: function () {
    return _internal.afterUpdate;
  }
});
Object.defineProperty(exports, "beforeUpdate", {
  enumerable: true,
  get: function () {
    return _internal.beforeUpdate;
  }
});
Object.defineProperty(exports, "createEventDispatcher", {
  enumerable: true,
  get: function () {
    return _internal.createEventDispatcher;
  }
});
Object.defineProperty(exports, "getContext", {
  enumerable: true,
  get: function () {
    return _internal.getContext;
  }
});
Object.defineProperty(exports, "onDestroy", {
  enumerable: true,
  get: function () {
    return _internal.onDestroy;
  }
});
Object.defineProperty(exports, "onMount", {
  enumerable: true,
  get: function () {
    return _internal.onMount;
  }
});
Object.defineProperty(exports, "setContext", {
  enumerable: true,
  get: function () {
    return _internal.setContext;
  }
});
Object.defineProperty(exports, "tick", {
  enumerable: true,
  get: function () {
    return _internal.tick;
  }
});

var _internal = require("./internal");
},{"./internal":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/regexparam/dist/regexparam.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(str, loose) {
  if (str instanceof RegExp) return {
    keys: false,
    pattern: str
  };
  var c,
      o,
      tmp,
      ext,
      keys = [],
      pattern = '',
      arr = str.split('/');
  arr[0] || arr.shift();

  while (tmp = arr.shift()) {
    c = tmp[0];

    if (c === '*') {
      keys.push('wild');
      pattern += '/(.*)';
    } else if (c === ':') {
      o = tmp.indexOf('?', 1);
      ext = tmp.indexOf('.', 1);
      keys.push(tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length));
      pattern += !!~o && !~ext ? '(?:/([^/]+?))?' : '/([^/]+?)';
      if (!!~ext) pattern += (!!~o ? '?' : '') + '\\' + tmp.substring(ext);
    } else {
      pattern += '/' + tmp;
    }
  }

  return {
    keys: keys,
    pattern: new RegExp('^' + pattern + (loose ? '(?=$|\/)' : '\/?$'), 'i')
  };
}
},{}],"../node_modules/svelte-spa-router/Router.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = wrap;
exports.push = push;
exports.pop = pop;
exports.replace = replace;
exports.link = link;
exports.nextTickPromise = nextTickPromise;
exports.querystring = exports.location = exports.loc = exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

var _store = require("svelte/store");

var _regexparam = _interopRequireDefault(require("regexparam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ../node_modules/svelte-spa-router/Router.svelte generated by Svelte v3.23.2 */
const {
  Error: Error_1,
  Object: Object_1,
  console: console_1
} = _internal.globals;
const file = "../node_modules/svelte-spa-router/Router.svelte"; // (219:0) {:else}

function create_else_block(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value =
  /*component*/
  ctx[0];

  function switch_props(ctx) {
    return {
      $$inline: true
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    switch_instance.$on("routeEvent",
    /*routeEvent_handler_1*/
    ctx[5]);
  }

  const block = {
    c: function create() {
      if (switch_instance) (0, _internal.create_component)(switch_instance.$$.fragment);
      switch_instance_anchor = (0, _internal.empty)();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        (0, _internal.mount_component)(switch_instance, target, anchor);
      }

      (0, _internal.insert_dev)(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (switch_value !== (switch_value =
      /*component*/
      ctx[0])) {
        if (switch_instance) {
          (0, _internal.group_outros)();
          const old_component = switch_instance;
          (0, _internal.transition_out)(old_component.$$.fragment, 1, 0, () => {
            (0, _internal.destroy_component)(old_component, 1);
          });
          (0, _internal.check_outros)();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          switch_instance.$on("routeEvent",
          /*routeEvent_handler_1*/
          ctx[5]);
          (0, _internal.create_component)(switch_instance.$$.fragment);
          (0, _internal.transition_in)(switch_instance.$$.fragment, 1);
          (0, _internal.mount_component)(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        0;
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) (0, _internal.transition_in)(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) (0, _internal.transition_out)(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(switch_instance_anchor);
      if (switch_instance) (0, _internal.destroy_component)(switch_instance, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(219:0) {:else}",
    ctx
  });
  return block;
} // (217:0) {#if componentParams}


function create_if_block(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value =
  /*component*/
  ctx[0];

  function switch_props(ctx) {
    return {
      props: {
        params:
        /*componentParams*/
        ctx[1]
      },
      $$inline: true
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    switch_instance.$on("routeEvent",
    /*routeEvent_handler*/
    ctx[4]);
  }

  const block = {
    c: function create() {
      if (switch_instance) (0, _internal.create_component)(switch_instance.$$.fragment);
      switch_instance_anchor = (0, _internal.empty)();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        (0, _internal.mount_component)(switch_instance, target, anchor);
      }

      (0, _internal.insert_dev)(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      const switch_instance_changes = {};
      if (dirty &
      /*componentParams*/
      2) switch_instance_changes.params =
      /*componentParams*/
      ctx[1];

      if (switch_value !== (switch_value =
      /*component*/
      ctx[0])) {
        if (switch_instance) {
          (0, _internal.group_outros)();
          const old_component = switch_instance;
          (0, _internal.transition_out)(old_component.$$.fragment, 1, 0, () => {
            (0, _internal.destroy_component)(old_component, 1);
          });
          (0, _internal.check_outros)();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          switch_instance.$on("routeEvent",
          /*routeEvent_handler*/
          ctx[4]);
          (0, _internal.create_component)(switch_instance.$$.fragment);
          (0, _internal.transition_in)(switch_instance.$$.fragment, 1);
          (0, _internal.mount_component)(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) (0, _internal.transition_in)(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) (0, _internal.transition_out)(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(switch_instance_anchor);
      if (switch_instance) (0, _internal.destroy_component)(switch_instance, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(217:0) {#if componentParams}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*componentParams*/
    ctx[1]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    l: function claim(nodes) {
      throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        (0, _internal.check_outros)();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        (0, _internal.transition_in)(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) (0, _internal.detach_dev)(if_block_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function wrap(route, userData, ...conditions) {
  // Check if we don't have userData
  if (userData && typeof userData == "function") {
    conditions = conditions && conditions.length ? conditions : [];
    conditions.unshift(userData);
    userData = undefined;
  } // Parameter route and each item of conditions must be functions


  if (!route || typeof route != "function") {
    throw Error("Invalid parameter route");
  }

  if (conditions && conditions.length) {
    for (let i = 0; i < conditions.length; i++) {
      if (!conditions[i] || typeof conditions[i] != "function") {
        throw Error("Invalid parameter conditions[" + i + "]");
      }
    }
  } // Returns an object that contains all the functions to execute too


  const obj = {
    route,
    userData
  };

  if (conditions && conditions.length) {
    obj.conditions = conditions;
  } // The _sveltesparouter flag is to confirm the object was created by this router


  Object.defineProperty(obj, "_sveltesparouter", {
    value: true
  });
  return obj;
}
/**
 * @typedef {Object} Location
 * @property {string} location - Location (page/view), for example `/book`
 * @property {string} [querystring] - Querystring from the hash, as a string not parsed
 */

/**
 * Returns the current location from the hash.
 *
 * @returns {Location} Location object
 * @private
 */


function getLocation() {
  const hashPosition = window.location.href.indexOf("#/");
  let location = hashPosition > -1 ? window.location.href.substr(hashPosition + 1) : "/"; // Check if there's a querystring

  const qsPosition = location.indexOf("?");
  let querystring = "";

  if (qsPosition > -1) {
    querystring = location.substr(qsPosition + 1);
    location = location.substr(0, qsPosition);
  }

  return {
    location,
    querystring
  };
}

const loc = (0, _store.readable)(null, // eslint-disable-next-line prefer-arrow-callback
function start(set) {
  set(getLocation());

  const update = () => {
    set(getLocation());
  };

  window.addEventListener("hashchange", update, false);
  return function stop() {
    window.removeEventListener("hashchange", update, false);
  };
});
exports.loc = loc;
const location = (0, _store.derived)(loc, $loc => $loc.location);
exports.location = location;
const querystring = (0, _store.derived)(loc, $loc => $loc.querystring);
exports.querystring = querystring;

function push(location) {
  if (!location || location.length < 1 || location.charAt(0) != "/" && location.indexOf("#/") !== 0) {
    throw Error("Invalid parameter location");
  } // Execute this code when the current call stack is complete


  return (0, _svelte.tick)().then(() => {
    window.location.hash = (location.charAt(0) == "#" ? "" : "#") + location;
  });
}

function pop() {
  // Execute this code when the current call stack is complete
  return (0, _svelte.tick)().then(() => {
    window.history.back();
  });
}

function replace(location) {
  if (!location || location.length < 1 || location.charAt(0) != "/" && location.indexOf("#/") !== 0) {
    throw Error("Invalid parameter location");
  } // Execute this code when the current call stack is complete


  return (0, _svelte.tick)().then(() => {
    const dest = (location.charAt(0) == "#" ? "" : "#") + location;

    try {
      window.history.replaceState(undefined, undefined, dest);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.");
    } // The method above doesn't trigger the hashchange event, so let's do that manually


    window.dispatchEvent(new Event("hashchange"));
  });
}

function link(node, hrefVar) {
  // Only apply to <a> tags
  if (!node || !node.tagName || node.tagName.toLowerCase() != "a") {
    throw Error("Action \"link\" can only be used with <a> tags");
  }

  updateLink(node, hrefVar || node.getAttribute("href"));
  return {
    update(updated) {
      updateLink(node, updated);
    }

  };
} // Internal function used by the link function


function updateLink(node, href) {
  // Destination must start with '/'
  if (!href || href.length < 1 || href.charAt(0) != "/") {
    throw Error("Invalid value for \"href\" attribute");
  } // Add # to the href attribute


  node.setAttribute("href", "#" + href);
}

function nextTickPromise(cb) {
  // eslint-disable-next-line no-console
  console.warn("nextTickPromise from 'svelte-spa-router' is deprecated and will be removed in version 3; use the 'tick' method from the Svelte runtime instead");
  return (0, _svelte.tick)().then(cb);
}

function instance($$self, $$props, $$invalidate) {
  let $loc,
      $$unsubscribe_loc = _internal.noop,
      $$subscribe_loc = () => ($$unsubscribe_loc(), $$unsubscribe_loc = (0, _internal.subscribe)(loc, $$value => $$invalidate(6, $loc = $$value)), loc);

  (0, _internal.validate_store)(loc, "loc");
  (0, _internal.component_subscribe)($$self, loc, $$value => $$invalidate(6, $loc = $$value));
  $$self.$$.on_destroy.push(() => $$unsubscribe_loc());
  let {
    routes = {}
  } = $$props;
  let {
    prefix = ""
  } = $$props;
  /**
  * Container for a route: path, component
  */

  class RouteItem {
    /**
    * Initializes the object and creates a regular expression from the path, using regexparam.
    *
    * @param {string} path - Path to the route (must start with '/' or '*')
    * @param {SvelteComponent} component - Svelte component for the route
    */
    constructor(path, component) {
      if (!component || typeof component != "function" && (typeof component != "object" || component._sveltesparouter !== true)) {
        throw Error("Invalid component object");
      } // Path must be a regular or expression, or a string starting with '/' or '*'


      if (!path || typeof path == "string" && (path.length < 1 || path.charAt(0) != "/" && path.charAt(0) != "*") || typeof path == "object" && !(path instanceof RegExp)) {
        throw Error("Invalid value for \"path\" argument");
      }

      const {
        pattern,
        keys
      } = (0, _regexparam.default)(path);
      this.path = path; // Check if the component is wrapped and we have conditions

      if (typeof component == "object" && component._sveltesparouter === true) {
        this.component = component.route;
        this.conditions = component.conditions || [];
        this.userData = component.userData;
      } else {
        this.component = component;
        this.conditions = [];
        this.userData = undefined;
      }

      this._pattern = pattern;
      this._keys = keys;
    }
    /**
    * Checks if `path` matches the current route.
    * If there's a match, will return the list of parameters from the URL (if any).
    * In case of no match, the method will return `null`.
    *
    * @param {string} path - Path to test
    * @returns {null|Object.<string, string>} List of paramters from the URL if there's a match, or `null` otherwise.
    */


    match(path) {
      // If there's a prefix, remove it before we run the matching
      if (prefix && path.startsWith(prefix)) {
        path = path.substr(prefix.length) || "/";
      } // Check if the pattern matches


      const matches = this._pattern.exec(path);

      if (matches === null) {
        return null;
      } // If the input was a regular expression, this._keys would be false, so return matches as is


      if (this._keys === false) {
        return matches;
      }

      const out = {};
      let i = 0;

      while (i < this._keys.length) {
        out[this._keys[i]] = matches[++i] || null;
      }

      return out;
    }
    /**
    * Dictionary with route details passed to the pre-conditions functions, as well as the `routeLoaded` and `conditionsFailed` events
    * @typedef {Object} RouteDetail
    * @property {SvelteComponent} component - Svelte component
    * @property {string} name - Name of the Svelte component
    * @property {string} location - Location path
    * @property {string} querystring - Querystring from the hash
    * @property {Object} [userData] - Custom data passed by the user
    */

    /**
    * Executes all conditions (if any) to control whether the route can be shown. Conditions are executed in the order they are defined, and if a condition fails, the following ones aren't executed.
    * 
    * @param {RouteDetail} detail - Route detail
    * @returns {bool} Returns true if all the conditions succeeded
    */


    checkConditions(detail) {
      for (let i = 0; i < this.conditions.length; i++) {
        if (!this.conditions[i](detail)) {
          return false;
        }
      }

      return true;
    }

  } // Set up all routes


  const routesList = [];

  if (routes instanceof Map) {
    // If it's a map, iterate on it right away
    routes.forEach((route, path) => {
      routesList.push(new RouteItem(path, route));
    });
  } else {
    // We have an object, so iterate on its own properties
    Object.keys(routes).forEach(path => {
      routesList.push(new RouteItem(path, routes[path]));
    });
  } // Props for the component to render


  let component = null;
  let componentParams = null; // Event dispatcher from Svelte

  const dispatch = (0, _svelte.createEventDispatcher)(); // Just like dispatch, but executes on the next iteration of the event loop

  const dispatchNextTick = (name, detail) => {
    // Execute this code when the current call stack is complete
    (0, _svelte.tick)().then(() => {
      dispatch(name, detail);
    });
  };

  const writable_props = ["routes", "prefix"];
  Object_1.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Router> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("Router", $$slots, []);

  function routeEvent_handler(event) {
    (0, _internal.bubble)($$self, event);
  }

  function routeEvent_handler_1(event) {
    (0, _internal.bubble)($$self, event);
  }

  $$self.$set = $$props => {
    if ("routes" in $$props) $$invalidate(2, routes = $$props.routes);
    if ("prefix" in $$props) $$invalidate(3, prefix = $$props.prefix);
  };

  $$self.$capture_state = () => ({
    readable: _store.readable,
    derived: _store.derived,
    tick: _svelte.tick,
    wrap,
    getLocation,
    loc,
    location,
    querystring,
    push,
    pop,
    replace,
    link,
    updateLink,
    nextTickPromise,
    createEventDispatcher: _svelte.createEventDispatcher,
    regexparam: _regexparam.default,
    routes,
    prefix,
    RouteItem,
    routesList,
    component,
    componentParams,
    dispatch,
    dispatchNextTick,
    $loc
  });

  $$self.$inject_state = $$props => {
    if ("routes" in $$props) $$invalidate(2, routes = $$props.routes);
    if ("prefix" in $$props) $$invalidate(3, prefix = $$props.prefix);
    if ("component" in $$props) $$invalidate(0, component = $$props.component);
    if ("componentParams" in $$props) $$invalidate(1, componentParams = $$props.componentParams);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*component, $loc*/
    65) {
      // Handle hash change events
      // Listen to changes in the $loc store and update the page
      $: {
        // Find a route matching the location
        $$invalidate(0, component = null);
        let i = 0;

        while (!component && i < routesList.length) {
          const match = routesList[i].match($loc.location);

          if (match) {
            const detail = {
              component: routesList[i].component,
              name: routesList[i].component.name,
              location: $loc.location,
              querystring: $loc.querystring,
              userData: routesList[i].userData
            }; // Check if the route can be loaded - if all conditions succeed

            if (!routesList[i].checkConditions(detail)) {
              // Trigger an event to notify the user
              dispatchNextTick("conditionsFailed", detail);
              break;
            }

            $$invalidate(0, component = routesList[i].component); // Set componentParams onloy if we have a match, to avoid a warning similar to `<Component> was created with unknown prop 'params'`
            // Of course, this assumes that developers always add a "params" prop when they are expecting parameters

            if (match && typeof match == "object" && Object.keys(match).length) {
              $$invalidate(1, componentParams = match);
            } else {
              $$invalidate(1, componentParams = null);
            }

            dispatchNextTick("routeLoaded", detail);
          }

          i++;
        }
      }
    }
  };

  return [component, componentParams, routes, prefix, routeEvent_handler, routeEvent_handler_1];
}

class Router extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      routes: 2,
      prefix: 3
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Router",
      options,
      id: create_fragment.name
    });
  }

  get routes() {
    throw new Error_1("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set routes(value) {
    throw new Error_1("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get prefix() {
    throw new Error_1("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set prefix(value) {
    throw new Error_1("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Router;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","svelte/store":"../node_modules/svelte/store/index.mjs","regexparam":"../node_modules/regexparam/dist/regexparam.mjs"}],"../node_modules/svelte/easing/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backIn = backIn;
exports.backInOut = backInOut;
exports.backOut = backOut;
exports.bounceIn = bounceIn;
exports.bounceInOut = bounceInOut;
exports.bounceOut = bounceOut;
exports.circIn = circIn;
exports.circInOut = circInOut;
exports.circOut = circOut;
exports.cubicIn = cubicIn;
exports.cubicInOut = cubicInOut;
exports.cubicOut = cubicOut;
exports.elasticIn = elasticIn;
exports.elasticInOut = elasticInOut;
exports.elasticOut = elasticOut;
exports.expoIn = expoIn;
exports.expoInOut = expoInOut;
exports.expoOut = expoOut;
exports.quadIn = quadIn;
exports.quadInOut = quadInOut;
exports.quadOut = quadOut;
exports.quartIn = quartIn;
exports.quartInOut = quartInOut;
exports.quartOut = quartOut;
exports.quintIn = quintIn;
exports.quintInOut = quintInOut;
exports.quintOut = quintOut;
exports.sineIn = sineIn;
exports.sineInOut = sineInOut;
exports.sineOut = sineOut;
Object.defineProperty(exports, "linear", {
  enumerable: true,
  get: function () {
    return _internal.identity;
  }
});

var _internal = require("../internal");

/*
Adapted from https://github.com/mattdesl
Distributed under MIT License https://github.com/mattdesl/eases/blob/master/LICENSE.md
*/
function backInOut(t) {
  const s = 1.70158 * 1.525;
  if ((t *= 2) < 1) return 0.5 * (t * t * ((s + 1) * t - s));
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}

function backIn(t) {
  const s = 1.70158;
  return t * t * ((s + 1) * t - s);
}

function backOut(t) {
  const s = 1.70158;
  return --t * t * ((s + 1) * t + s) + 1;
}

function bounceOut(t) {
  const a = 4.0 / 11.0;
  const b = 8.0 / 11.0;
  const c = 9.0 / 10.0;
  const ca = 4356.0 / 361.0;
  const cb = 35442.0 / 1805.0;
  const cc = 16061.0 / 1805.0;
  const t2 = t * t;
  return t < a ? 7.5625 * t2 : t < b ? 9.075 * t2 - 9.9 * t + 3.4 : t < c ? ca * t2 - cb * t + cc : 10.8 * t * t - 20.52 * t + 10.72;
}

function bounceInOut(t) {
  return t < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0)) : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;
}

function bounceIn(t) {
  return 1.0 - bounceOut(1.0 - t);
}

function circInOut(t) {
  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}

function circIn(t) {
  return 1.0 - Math.sqrt(1.0 - t * t);
}

function circOut(t) {
  return Math.sqrt(1 - --t * t);
}

function cubicInOut(t) {
  return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}

function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  const f = t - 1.0;
  return f * f * f + 1.0;
}

function elasticInOut(t) {
  return t < 0.5 ? 0.5 * Math.sin(+13.0 * Math.PI / 2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0)) : 0.5 * Math.sin(-13.0 * Math.PI / 2 * (2.0 * t - 1.0 + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;
}

function elasticIn(t) {
  return Math.sin(13.0 * t * Math.PI / 2) * Math.pow(2.0, 10.0 * (t - 1.0));
}

function elasticOut(t) {
  return Math.sin(-13.0 * (t + 1.0) * Math.PI / 2) * Math.pow(2.0, -10.0 * t) + 1.0;
}

function expoInOut(t) {
  return t === 0.0 || t === 1.0 ? t : t < 0.5 ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0) : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
}

function expoIn(t) {
  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
}

function expoOut(t) {
  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
}

function quadInOut(t) {
  t /= 0.5;
  if (t < 1) return 0.5 * t * t;
  t--;
  return -0.5 * (t * (t - 2) - 1);
}

function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return -t * (t - 2.0);
}

function quartInOut(t) {
  return t < 0.5 ? +8.0 * Math.pow(t, 4.0) : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0;
}

function quartIn(t) {
  return Math.pow(t, 4.0);
}

function quartOut(t) {
  return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}

function quintInOut(t) {
  if ((t *= 2) < 1) return 0.5 * t * t * t * t * t;
  return 0.5 * ((t -= 2) * t * t * t * t + 2);
}

function quintIn(t) {
  return t * t * t * t * t;
}

function quintOut(t) {
  return --t * t * t * t * t + 1;
}

function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
}

function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1;else return 1 - v;
}

function sineOut(t) {
  return Math.sin(t * Math.PI / 2);
}
},{"../internal":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/svelte/transition/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blur = blur;
exports.crossfade = crossfade;
exports.draw = draw;
exports.fade = fade;
exports.fly = fly;
exports.scale = scale;
exports.slide = slide;

var _easing = require("../easing");

var _internal = require("../internal");

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function blur(node, {
  delay = 0,
  duration = 400,
  easing = _easing.cubicInOut,
  amount = 5,
  opacity = 0
}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const f = style.filter === 'none' ? '' : style.filter;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `opacity: ${target_opacity - od * u}; filter: ${f} blur(${u * amount}px);`
  };
}

function fade(node, {
  delay = 0,
  duration = 400,
  easing = _easing.linear
}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: t => `opacity: ${t * o}`
  };
}

function fly(node, {
  delay = 0,
  duration = 400,
  easing = _easing.cubicOut,
  x = 0,
  y = 0,
  opacity = 0
}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === 'none' ? '' : style.transform;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
  };
}

function slide(node, {
  delay = 0,
  duration = 400,
  easing = _easing.cubicOut
}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const height = parseFloat(style.height);
  const padding_top = parseFloat(style.paddingTop);
  const padding_bottom = parseFloat(style.paddingBottom);
  const margin_top = parseFloat(style.marginTop);
  const margin_bottom = parseFloat(style.marginBottom);
  const border_top_width = parseFloat(style.borderTopWidth);
  const border_bottom_width = parseFloat(style.borderBottomWidth);
  return {
    delay,
    duration,
    easing,
    css: t => `overflow: hidden;` + `opacity: ${Math.min(t * 20, 1) * opacity};` + `height: ${t * height}px;` + `padding-top: ${t * padding_top}px;` + `padding-bottom: ${t * padding_bottom}px;` + `margin-top: ${t * margin_top}px;` + `margin-bottom: ${t * margin_bottom}px;` + `border-top-width: ${t * border_top_width}px;` + `border-bottom-width: ${t * border_bottom_width}px;`
  };
}

function scale(node, {
  delay = 0,
  duration = 400,
  easing = _easing.cubicOut,
  start = 0,
  opacity = 0
}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === 'none' ? '' : style.transform;
  const sd = 1 - start;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
  };
}

function draw(node, {
  delay = 0,
  speed,
  duration,
  easing = _easing.cubicInOut
}) {
  const len = node.getTotalLength();

  if (duration === undefined) {
    if (speed === undefined) {
      duration = 800;
    } else {
      duration = len / speed;
    }
  } else if (typeof duration === 'function') {
    duration = duration(len);
  }

  return {
    delay,
    duration,
    easing,
    css: (t, u) => `stroke-dasharray: ${t * len} ${u * len}`
  };
}

function crossfade(_a) {
  var {
    fallback
  } = _a,
      defaults = __rest(_a, ["fallback"]);

  const to_receive = new Map();
  const to_send = new Map();

  function crossfade(from, node, params) {
    const {
      delay = 0,
      duration = d => Math.sqrt(d) * 30,
      easing = _easing.cubicOut
    } = (0, _internal.assign)((0, _internal.assign)({}, defaults), params);
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    const opacity = +style.opacity;
    return {
      delay,
      duration: (0, _internal.is_function)(duration) ? duration(d) : duration,
      easing,
      css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
    };
  }

  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, {
        rect: node.getBoundingClientRect()
      });
      return () => {
        if (counterparts.has(params.key)) {
          const {
            rect
          } = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade(rect, node, params);
        } // if the node is disappearing altogether
        // (i.e. wasn't claimed by the other list)
        // then we need to supply an outro


        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }

  return [transition(to_send, to_receive, false), transition(to_receive, to_send, true)];
}
},{"../easing":"../node_modules/svelte/easing/index.mjs","../internal":"../node_modules/svelte/internal/index.mjs"}],"assets/svgs.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVG = void 0;
let SVGS = {
  activity: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity stroke-current mx-2 {classNames}"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
  atom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24" class="fill-current stroke-current mx-2 {classNames}"><g id="outline"><path d="M32,26a6,6,0,1,0,6,6A6.006,6.006,0,0,0,32,26Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,32,36Z"/><path d="M60.841,13.459C58.3,9.512,51.583,8.884,42.349,11.68,39.744,5.517,36,2,32,2s-7.747,3.52-10.353,9.688a39.463,39.463,0,0,0-7.76-1.594A3.995,3.995,0,0,0,6,11c0,.02.006.039.006.059a6.691,6.691,0,0,0-2.847,2.4C.527,17.548,3.142,24.442,10.13,32,3.141,39.559.527,46.453,3.159,50.541c1.5,2.328,4.447,3.505,8.51,3.505a35.318,35.318,0,0,0,9.982-1.724C24.257,58.484,28,62,32,62a7.409,7.409,0,0,0,3.482-.918A3.959,3.959,0,0,0,38,62a3.989,3.989,0,0,0,2.9-6.742,27.4,27.4,0,0,0,1.449-2.937,35.306,35.306,0,0,0,9.984,1.725c4.062,0,7.012-1.177,8.51-3.505,2.632-4.088.018-10.982-6.969-18.539,1-1.081,1.924-2.171,2.768-3.256A3.961,3.961,0,0,0,58,29a3.987,3.987,0,0,0,2.7-6.937C62.163,18.581,62.229,15.614,60.841,13.459ZM43.3,22.739c-1.239-.9-2.492-1.768-3.761-2.58-1.734-1.116-3.535-2.149-5.355-3.131a65.1,65.1,0,0,1,7-2.865A46.128,46.128,0,0,1,43.3,22.739Zm.349,2.738A61.237,61.237,0,0,1,44,32a61.28,61.28,0,0,1-.348,6.523c-1.687,1.282-3.428,2.508-5.194,3.636C36.375,43.5,34.2,44.744,32,45.883c-2.2-1.138-4.376-2.382-6.462-3.726-1.763-1.126-3.5-2.353-5.191-3.634a61.308,61.308,0,0,1,0-13.046c1.687-1.282,3.428-2.508,5.194-3.636C27.625,20.5,29.8,19.256,32,18.117c2.2,1.138,4.376,2.382,6.462,3.726C40.224,22.969,41.965,24.2,43.652,25.477ZM32,4c3.133,0,6.178,3.012,8.443,8.3A68.647,68.647,0,0,0,32,15.869,68.33,68.33,0,0,0,23.557,12.3C25.822,7.013,28.867,4,32,4ZM22.817,14.162a65.313,65.313,0,0,1,7,2.866c-1.82.982-3.619,2.015-5.351,3.129-1.271.813-2.525,1.686-3.764,2.582A46.082,46.082,0,0,1,22.817,14.162ZM10,9a2,2,0,1,1-2,2A2,2,0,0,1,10,9ZM4.841,14.54A4.607,4.607,0,0,1,6.558,13a3.971,3.971,0,0,0,7.27-.907,37.513,37.513,0,0,1,7.083,1.46,50.118,50.118,0,0,0-2.462,10.857,70.642,70.642,0,0,0-6.933,6.142C5.427,23.929,2.805,17.7,4.841,14.54ZM18.2,36.827A66.631,66.631,0,0,1,12.9,32a66.474,66.474,0,0,1,5.3-4.827C18.081,28.748,18,30.351,18,32S18.081,35.253,18.2,36.827ZM4.841,49.459c-2.036-3.163.586-9.387,6.675-16.014a70.633,70.633,0,0,0,6.933,6.143,50.186,50.186,0,0,0,2.465,10.866C12.9,52.843,6.79,52.488,4.841,49.459Zm15.856-8.2c1.239.9,2.492,1.768,3.761,2.58,1.734,1.116,3.535,2.149,5.354,3.131a65,65,0,0,1-6.994,2.865A46.128,46.128,0,0,1,20.7,41.261ZM38,60a2,2,0,1,1,2-2A2,2,0,0,1,38,60Zm1.213-5.792A3.963,3.963,0,0,0,38,54a4,4,0,0,0-4,4,3.963,3.963,0,0,0,.285,1.46A5.324,5.324,0,0,1,32,60c-3.133,0-6.178-3.012-8.443-8.3A68.78,68.78,0,0,0,32,48.132,68.727,68.727,0,0,0,40.444,51.7,25.485,25.485,0,0,1,39.213,54.208Zm1.97-4.37a65.313,65.313,0,0,1-6.995-2.866c1.82-.982,3.619-2.015,5.351-3.129,1.271-.813,2.525-1.686,3.764-2.583A46.073,46.073,0,0,1,41.183,49.838Zm17.976-.379c-1.949,3.027-8.065,3.385-16.073.995a50.2,50.2,0,0,0,2.465-10.867,70.9,70.9,0,0,0,6.934-6.141C58.573,40.071,61.2,46.3,59.159,49.459ZM45.8,27.173A66.823,66.823,0,0,1,51.1,32a66.474,66.474,0,0,1-5.3,4.827c.117-1.575.2-3.178.2-4.827S45.919,28.747,45.8,27.173Zm9.19.435c-.767.981-1.6,1.967-2.506,2.948a71.048,71.048,0,0,0-6.935-6.144,50.173,50.173,0,0,0-2.465-10.866c8.01-2.39,14.124-2.034,16.073,1,1.215,1.885.636,4.485-.223,6.58A3.961,3.961,0,0,0,58,21a4,4,0,0,0-4,4A3.962,3.962,0,0,0,54.992,27.608ZM58,27a2,2,0,1,1,2-2A2,2,0,0,1,58,27Z"/></g></svg>`,
  bell: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell stroke-current mx-2 {classNames}"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
  book: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open  stroke-current mx-2 {classNames}"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar stroke-current mx-2 {classNames}"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  certificate: `<svg  xmlns="http://www.w3.org/2000/svg" id="Layer_3" enable-background="new 0 0 64 64" height="24" viewBox="0 0 64 64" width="21" class="fill-current stroke-current mx-2 {classNames} "><path d="m43 1h-.608l-.28.54c-2.466 4.756-5.367 9.312-8.602 13.585l-.858-.858c-1.104-1.104-2.726-1.482-4.179-1.066-.731-1.323-2.147-2.201-3.709-2.201h-1.527c-1.562 0-2.978.878-3.709 2.201-1.453-.416-3.076-.039-4.179 1.066l-1.08 1.08c-1.104 1.104-1.485 2.727-1.066 4.18-1.325.732-2.203 2.148-2.203 3.709v1.527c0 .48.092.944.246 1.381l-9.722 3.736 5.312 2.656-1.394 5.572 8.906-5.376.784.784c-4.275 3.235-8.839 6.131-13.592 8.596l-.54.28v.608c0 11.028 8.972 20 20 20h.608l.28-.54c9.063-17.48 23.093-31.509 40.572-40.572l.54-.28v-.608c0-11.028-8.972-20-20-20zm17.953 18.947c-9.089-.527-16.374-7.812-16.9-16.9 9.085.529 16.371 7.816 16.9 16.9zm-25.992 9.6c-.009-.361-.061-.723-.163-1.074 1.324-.732 2.202-2.148 2.202-3.709v-1.527c0-1.562-.878-2.978-2.202-3.709.251-.872.209-1.803-.099-2.649 2.803-3.649 5.344-7.517 7.603-11.533 1.414 8.342 7.996 14.928 16.335 16.348-6.637 3.73-12.76 8.172-18.27 13.259zm-21.961-6.311c0-1.039.737-1.955 1.753-2.18l1.397-.309-.77-1.206c-.56-.877-.433-2.046.302-2.78l1.08-1.08c.735-.733 1.904-.859 2.78-.302l1.206.77.309-1.396c.224-1.016 1.141-1.753 2.179-1.753h1.527c1.039 0 1.956.737 2.18 1.753l.309 1.396 1.206-.77c.877-.558 2.046-.432 2.78.302l1.08 1.08c.734.734.861 1.903.302 2.78l-.77 1.206 1.397.309c1.016.225 1.753 1.141 1.753 2.18v1.527c0 1.039-.737 1.955-1.753 2.18l-1.397.309.77 1.206c.56.877.433 2.046-.302 2.78l-1.08 1.08c-.734.734-1.903.861-2.78.302l-1.206-.77-.309 1.396c-.224 1.017-1.141 1.754-2.179 1.754h-1.527c-1.039 0-1.956-.737-2.18-1.753l-.309-1.396-1.206.77c-.876.56-2.045.433-2.78-.302l-1.08-1.08c-.734-.734-.861-1.903-.302-2.78l.77-1.206-1.397-.309c-1.016-.225-1.753-1.141-1.753-2.18zm3.957 11.488c.824.282 1.725.317 2.57.075.169.306.379.586.615.839l-2.262 5.886-1.344-2.689-2.427.607zm-10.481-4.604 5.887-2.262c.253.236.532.445.839.615-.244.845-.209 1.745.074 2.57l-4.717 2.849.606-2.428zm13.923 30.87c-9.449-.312-17.078-7.941-17.39-17.39 3.4-1.791 6.698-3.805 9.87-5.992l-2.989 4.949 5.573-1.393 2.656 5.311 3.735-9.721c.437.154.9.245 1.381.245h1.527c1.562 0 2.978-.878 3.709-2.201.351.1.711.152 1.072.161l5.408 5.408c-5.682 6.157-10.575 13.07-14.552 20.623zm15.936-22.069-4.537-4.537c.307-.178.596-.393.854-.651l1.08-1.08c.259-.259.474-.547.652-.854l4.537 4.537c-.878.845-1.74 1.707-2.586 2.585z"/><path d="m24 31c3.86 0 7-3.141 7-7s-3.14-7-7-7-7 3.141-7 7 3.14 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5z"/><path d="m42.658 12.542-1.681-1.084c-.358.555-.721 1.105-1.089 1.653l1.658 1.117c.377-.557.747-1.12 1.112-1.686z"/><path d="m40.402 15.893-1.637-1.148c-.379.54-.764 1.076-1.154 1.607l1.612 1.184c.399-.544.792-1.092 1.179-1.643z"/><path d="m27.109 43.379c-.536.677-1.064 1.36-1.584 2.052l1.6 1.201c.509-.678 1.026-1.348 1.552-2.011z"/><path d="m23.346 48.445 1.643 1.143c.475-.684.958-1.361 1.45-2.031l-1.612-1.184c-.502.684-.996 1.375-1.481 2.072z"/><path d="m18.172 56.713c-2.89-.598-5.549-2.116-7.55-4.325l-1.482 1.341c2.463 2.721 5.803 4.525 9.406 5.082l.69.106.338-.611c1.463-2.649 3.06-5.256 4.747-7.746l-1.656-1.121c-1.588 2.343-3.097 4.788-4.493 7.274z"/></svg>`,
  check_square: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square stroke-current mx-2 {classNames}"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
  chevron_right: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right stroke-current mx-2 {classNames}"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
  chevrons_right: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-right stroke-current {classNames}"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>`,
  circle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle stroke-current mx-2 {classNames}"><circle cx="12" cy="12" r="10"></circle></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock stroke-current mx-2 {classNames}"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x stroke-current mx-2 {classNames}"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  disc: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-disc stroke-current mx-2 {classNames}"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>`,
  edit: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit stroke-current mx-2 {classNames}"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
  graduation_cap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"  class="fill-current stroke-current mx-2 {classNames}"><path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="mx-2 fill-current stroke-current text-danger {classNames}"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home stroke-current {classNames}"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
  logout: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out stroke-current mx-2 {classNames}"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail stroke-current mx-2 {classNames}"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu stroke-current mx-2 {classNames}"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
  message: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square stroke-current mx-2 {classNames}"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon stroke-current mx-2 {classNames}"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  more_horizontal: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal stroke-current mx-2 {classNames}"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>`,
  more_vertical: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical stroke-current mx-2 {classNames}"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>`,
  pie: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart stroke-current mx-2 {classNames}"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>`,
  save: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save stroke-current mx-2 {classNames}"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search stroke-current mx-2 {classNames}"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  settings: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings stroke-current mx-2 {classNames}"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  staff: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fill-current stroke-current mx-2 {classNames}"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current mx-2 {classNames}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  student: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" fill-current mx-2 {classNames}"><path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun stroke-current mx-2 {classNames}"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  teacher: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class=" fill-current mx-2 {classNames}" ><path d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash stroke-current mx-2 {classNames}"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`
};

function SVG(name, classes) {
  return SVGS[name].replace("{classNames}", classes);
}

exports.SVG = SVG;
},{}],"components/app_bar/icons.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"components/avartar/Avartar.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svgs = require("../../assets/svgs.ts");

/* components/avartar/Avartar.svelte generated by Svelte v3.23.2 */
const file = "components/avartar/Avartar.svelte"; // (27:4) {:else}

function create_else_block(ctx) {
  let html_tag;
  let raw_value = (0, _svgs.SVG)(
  /*icon*/
  ctx[6],
  /*iconClass*/
  ctx[7]) + "";
  const block = {
    c: function create() {
      html_tag = new _internal.HtmlTag(null);
    },
    m: function mount(target, anchor) {
      html_tag.m(raw_value, target, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*icon, iconClass*/
      192 && raw_value !== (raw_value = (0, _svgs.SVG)(
      /*icon*/
      ctx[6],
      /*iconClass*/
      ctx[7]) + "")) html_tag.p(raw_value);
    },
    d: function destroy(detaching) {
      if (detaching) html_tag.d();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(27:4) {:else}",
    ctx
  });
  return block;
} // (23:26) 


function create_if_block_1(ctx) {
  let span;
  let t;
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      t = (0, _internal.text)(
      /*text*/
      ctx[4]);
      (0, _internal.attr_dev)(span, "class",
      /*textClass*/
      ctx[5]);
      (0, _internal.add_location)(span, file, 23, 4, 602);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      (0, _internal.append_dev)(span, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*text*/
      16) (0, _internal.set_data_dev)(t,
      /*text*/
      ctx[4]);

      if (dirty &
      /*textClass*/
      32) {
        (0, _internal.attr_dev)(span, "class",
        /*textClass*/
        ctx[5]);
      }
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(23:26) ",
    ctx
  });
  return block;
} // (21:4) {#if image !== ''}


function create_if_block(ctx) {
  let img;
  let img_src_value;
  const block = {
    c: function create() {
      img = (0, _internal.element)("img");
      if (img.src !== (img_src_value = "")) (0, _internal.attr_dev)(img, "src", img_src_value);
      (0, _internal.attr_dev)(img, "alt", "boy");
      (0, _internal.attr_dev)(img, "class",
      /*imageClass*/
      ctx[3]);
      (0, _internal.add_location)(img, file, 21, 6, 525);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, img, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*imageClass*/
      8) {
        (0, _internal.attr_dev)(img, "class",
        /*imageClass*/
        ctx[3]);
      }
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(img);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(21:4) {#if image !== ''}",
    ctx
  });
  return block;
} // (20:8)      


function fallback_block(ctx) {
  let if_block_anchor;

  function select_block_type(ctx, dirty) {
    if (
    /*image*/
    ctx[2] !== "") return create_if_block;
    if (
    /*text*/
    ctx[4] !== "") return create_if_block_1;
    return create_else_block;
  }

  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  const block = {
    c: function create() {
      if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    m: function mount(target, anchor) {
      if_block.m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d: function destroy(detaching) {
      if_block.d(detaching);
      if (detaching) (0, _internal.detach_dev)(if_block_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(20:8)      ",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div;
  let div_class_value;
  let current;
  const default_slot_template =
  /*$$slots*/
  ctx[9].default;
  const default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[8], null);
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      if (default_slot_or_fallback) default_slot_or_fallback.c();
      (0, _internal.attr_dev)(div, "class", div_class_value = "inline-flex items-center justify-around\n  border-0  rounded-full select-none bg-transparent font-semibold\n  text-cadetblue " +
      /*classNames*/
      ctx[0] + "\n  " +
      /*size*/
      ctx[1]);
      (0, _internal.add_location)(div, file, 13, 0, 325);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(div, null);
      }

      current = true;
    },
    p: function update(ctx, [dirty]) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        256) {
          (0, _internal.update_slot)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[8], dirty, null, null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && dirty &
        /*imageClass, image, textClass, text, icon, iconClass*/
        252) {
          default_slot_or_fallback.p(ctx, dirty);
        }
      }

      if (!current || dirty &
      /*classNames, size*/
      3 && div_class_value !== (div_class_value = "inline-flex items-center justify-around\n  border-0  rounded-full select-none bg-transparent font-semibold\n  text-cadetblue " +
      /*classNames*/
      ctx[0] + "\n  " +
      /*size*/
      ctx[1])) {
        (0, _internal.attr_dev)(div, "class", div_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    classNames = "bg-comet mr-1"
  } = $$props;
  let {
    size = "h-10 w-10"
  } = $$props;
  let {
    image = ""
  } = $$props;
  let {
    imageClass = ""
  } = $$props;
  let {
    text = ""
  } = $$props;
  let {
    textClass = "mx-auto uppercase"
  } = $$props;
  let {
    icon = "staff"
  } = $$props;
  let {
    iconClass = "w-5 h-5 "
  } = $$props;
  const writable_props = ["classNames", "size", "image", "imageClass", "text", "textClass", "icon", "iconClass"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Avartar> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("Avartar", $$slots, ['default']);

  $$self.$set = $$props => {
    if ("classNames" in $$props) $$invalidate(0, classNames = $$props.classNames);
    if ("size" in $$props) $$invalidate(1, size = $$props.size);
    if ("image" in $$props) $$invalidate(2, image = $$props.image);
    if ("imageClass" in $$props) $$invalidate(3, imageClass = $$props.imageClass);
    if ("text" in $$props) $$invalidate(4, text = $$props.text);
    if ("textClass" in $$props) $$invalidate(5, textClass = $$props.textClass);
    if ("icon" in $$props) $$invalidate(6, icon = $$props.icon);
    if ("iconClass" in $$props) $$invalidate(7, iconClass = $$props.iconClass);
    if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    SVG: _svgs.SVG,
    classNames,
    size,
    image,
    imageClass,
    text,
    textClass,
    icon,
    iconClass
  });

  $$self.$inject_state = $$props => {
    if ("classNames" in $$props) $$invalidate(0, classNames = $$props.classNames);
    if ("size" in $$props) $$invalidate(1, size = $$props.size);
    if ("image" in $$props) $$invalidate(2, image = $$props.image);
    if ("imageClass" in $$props) $$invalidate(3, imageClass = $$props.imageClass);
    if ("text" in $$props) $$invalidate(4, text = $$props.text);
    if ("textClass" in $$props) $$invalidate(5, textClass = $$props.textClass);
    if ("icon" in $$props) $$invalidate(6, icon = $$props.icon);
    if ("iconClass" in $$props) $$invalidate(7, iconClass = $$props.iconClass);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [classNames, size, image, imageClass, text, textClass, icon, iconClass, $$scope, $$slots];
}

class Avartar extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      classNames: 0,
      size: 1,
      image: 2,
      imageClass: 3,
      text: 4,
      textClass: 5,
      icon: 6,
      iconClass: 7
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Avartar",
      options,
      id: create_fragment.name
    });
  }

  get classNames() {
    throw new Error("<Avartar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set classNames(value) {
    throw new Error("<Avartar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get size() {
    throw new Error("<Avartar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set size(value) {
    throw new Error("<Avartar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get image() {
    throw new Error("<Avartar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set image(value) {
    throw new Error("<Avartar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get imageClass() {
    throw new Error("<Avartar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set imageClass(value) {
    throw new Error("<Avartar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get text() {
    throw new Error("<Avartar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set text(value) {
    throw new Error("<Avartar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get textClass() {
    throw new Error("<Avartar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set textClass(value) {
    throw new Error("<Avartar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get icon() {
    throw new Error("<Avartar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set icon(value) {
    throw new Error("<Avartar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get iconClass() {
    throw new Error("<Avartar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set iconClass(value) {
    throw new Error("<Avartar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Avartar;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","../../assets/svgs.ts":"assets/svgs.ts"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"components/app_bar/AppBar.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

var _svelteSpaRouter = require("svelte-spa-router");

var _transition = require("svelte/transition");

var _main_store = require("../../main_store");

var _svgs = require("../../assets/svgs");

var _icons = require("./icons");

var _Avartar = _interopRequireDefault(require("../avartar/Avartar.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/app_bar/AppBar.svelte generated by Svelte v3.23.2 */
const file = "components/app_bar/AppBar.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = "svelte-23k65m-style";
  style.textContent = "input.svelte-23k65m:-webkit-autofill,input.svelte-23k65m:-webkit-autofill:hover,input.svelte-23k65m:-webkit-autofill:focus{border:1px solid #5a67d8;-webkit-text-fill-color:#5a67d8;-webkit-box-shadow:0 0 0px 1000px white inset;box-shadow:0 0 0px 1000px white inset;transition:background-color 5000s ease-in-out 0s}\n";
  (0, _internal.append_dev)(document.head, style);
}

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  return child_ctx;
}

const get_favoriteIcons_slot_changes = dirty => ({});

const get_favoriteIcons_slot_context = ctx => ({}); // (76:2) {:else}


function create_else_block(ctx) {
  let div0;
  let span0;
  let raw0_value = (0, _svgs.SVG)("menu", "text-cadetblue w-6 h-6 hover:text-primary") + "";
  let t0;
  let span1;
  let div0_intro;
  let t1;
  let div2;
  let span2;
  let raw1_value = (0, _svgs.SVG)("search", "text-cadetblue w-6 h-6 hover:text-primary ") + "";
  let t2;
  let span3;
  let raw2_value = (0, _svgs.SVG)("bell", "text-cadetblue w-6 h-6 hover:text-primary ") + "";
  let t3;
  let div1;
  let span4;
  let t4;
  let t5;
  let span5;
  let t6;
  let t7;
  let avartar;
  let div2_intro;
  let current;
  let mounted;
  let dispose;
  const favoriteIcons_slot_template =
  /*$$slots*/
  ctx[7].favoriteIcons;
  const favoriteIcons_slot = (0, _internal.create_slot)(favoriteIcons_slot_template, ctx,
  /*$$scope*/
  ctx[6], get_favoriteIcons_slot_context);
  const favoriteIcons_slot_or_fallback = favoriteIcons_slot || fallback_block(ctx);
  avartar = new _Avartar.default({
    $$inline: true
  });
  const block = {
    c: function create() {
      div0 = (0, _internal.element)("div");
      span0 = (0, _internal.element)("span");
      t0 = (0, _internal.space)();
      span1 = (0, _internal.element)("span");
      if (favoriteIcons_slot_or_fallback) favoriteIcons_slot_or_fallback.c();
      t1 = (0, _internal.space)();
      div2 = (0, _internal.element)("div");
      span2 = (0, _internal.element)("span");
      t2 = (0, _internal.space)();
      span3 = (0, _internal.element)("span");
      t3 = (0, _internal.space)();
      div1 = (0, _internal.element)("div");
      span4 = (0, _internal.element)("span");
      t4 = (0, _internal.text)(
      /*currentUser*/
      ctx[1]);
      t5 = (0, _internal.space)();
      span5 = (0, _internal.element)("span");
      t6 = (0, _internal.text)(
      /*status*/
      ctx[2]);
      t7 = (0, _internal.space)();
      (0, _internal.create_component)(avartar.$$.fragment);
      (0, _internal.attr_dev)(span0, "class", "lg:hidden");
      (0, _internal.add_location)(span0, file, 80, 6, 2289);
      (0, _internal.attr_dev)(span1, "class", "hidden lg:inline-flex");
      (0, _internal.add_location)(span1, file, 83, 6, 2445);
      (0, _internal.attr_dev)(div0, "class", "inline-flex items-center align-middle");
      (0, _internal.add_location)(div0, file, 76, 4, 2177);
      (0, _internal.add_location)(span2, file, 98, 6, 2909);
      (0, _internal.attr_dev)(span3, "class", "hidden lg:block");
      (0, _internal.add_location)(span3, file, 106, 6, 3114);
      (0, _internal.attr_dev)(span4, "class", "text-sm font-semibold leading-5 select-none text-cadetblue");
      (0, _internal.add_location)(span4, file, 110, 8, 3291);
      (0, _internal.attr_dev)(span5, "class", "text-xs font-normal leading-3 tracking-tighter text-right select-none text-cadetblue");
      (0, _internal.add_location)(span5, file, 115, 8, 3432);
      (0, _internal.attr_dev)(div1, "class", "flex-col hidden mx-2 lg:flex ");
      (0, _internal.add_location)(div1, file, 109, 6, 3239);
      (0, _internal.attr_dev)(div2, "class", "inline-flex items-center align-middle ");
      (0, _internal.add_location)(div2, file, 94, 4, 2797);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div0, anchor);
      (0, _internal.append_dev)(div0, span0);
      span0.innerHTML = raw0_value;
      (0, _internal.append_dev)(div0, t0);
      (0, _internal.append_dev)(div0, span1);

      if (favoriteIcons_slot_or_fallback) {
        favoriteIcons_slot_or_fallback.m(span1, null);
      }

      (0, _internal.insert_dev)(target, t1, anchor);
      (0, _internal.insert_dev)(target, div2, anchor);
      (0, _internal.append_dev)(div2, span2);
      span2.innerHTML = raw1_value;
      (0, _internal.append_dev)(div2, t2);
      (0, _internal.append_dev)(div2, span3);
      span3.innerHTML = raw2_value;
      (0, _internal.append_dev)(div2, t3);
      (0, _internal.append_dev)(div2, div1);
      (0, _internal.append_dev)(div1, span4);
      (0, _internal.append_dev)(span4, t4);
      (0, _internal.append_dev)(div1, t5);
      (0, _internal.append_dev)(div1, span5);
      (0, _internal.append_dev)(span5, t6);
      (0, _internal.append_dev)(div2, t7);
      (0, _internal.mount_component)(avartar, div2, null);
      current = true;

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(span0, "click",
        /*click_handler_1*/
        ctx[12], false, false, false), (0, _internal.listen_dev)(span2, "click",
        /*click_handler_3*/
        ctx[14], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (favoriteIcons_slot) {
        if (favoriteIcons_slot.p && dirty &
        /*$$scope*/
        64) {
          (0, _internal.update_slot)(favoriteIcons_slot, favoriteIcons_slot_template, ctx,
          /*$$scope*/
          ctx[6], dirty, get_favoriteIcons_slot_changes, get_favoriteIcons_slot_context);
        }
      } else {
        if (favoriteIcons_slot_or_fallback && favoriteIcons_slot_or_fallback.p && dirty &
        /*favoriteIcons*/
        8) {
          favoriteIcons_slot_or_fallback.p(ctx, dirty);
        }
      }

      if (!current || dirty &
      /*currentUser*/
      2) (0, _internal.set_data_dev)(t4,
      /*currentUser*/
      ctx[1]);
      if (!current || dirty &
      /*status*/
      4) (0, _internal.set_data_dev)(t6,
      /*status*/
      ctx[2]);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(favoriteIcons_slot_or_fallback, local);

      if (!div0_intro) {
        (0, _internal.add_render_callback)(() => {
          div0_intro = (0, _internal.create_in_transition)(div0, _transition.fly, {
            x: -20,
            duration: 500
          });
          div0_intro.start();
        });
      }

      (0, _internal.transition_in)(avartar.$$.fragment, local);

      if (!div2_intro) {
        (0, _internal.add_render_callback)(() => {
          div2_intro = (0, _internal.create_in_transition)(div2, _transition.fly, {
            x: 20,
            duration: 500
          });
          div2_intro.start();
        });
      }

      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(favoriteIcons_slot_or_fallback, local);
      (0, _internal.transition_out)(avartar.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div0);
      if (favoriteIcons_slot_or_fallback) favoriteIcons_slot_or_fallback.d(detaching);
      if (detaching) (0, _internal.detach_dev)(t1);
      if (detaching) (0, _internal.detach_dev)(div2);
      (0, _internal.destroy_component)(avartar);
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(76:2) {:else}",
    ctx
  });
  return block;
} // (47:2) {#if searching}


function create_if_block(ctx) {
  let div2;
  let div0;
  let span0;
  let raw0_value = (0, _svgs.SVG)("search", "text-cadetblue w-6 h-6  ") + "";
  let t0;
  let input;
  let t1;
  let div1;
  let span1;
  let raw1_value = (0, _svgs.SVG)("close", "text-cadetblue w-6 h-6 hover:text-primary") + "";
  let div2_intro;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div2 = (0, _internal.element)("div");
      div0 = (0, _internal.element)("div");
      span0 = (0, _internal.element)("span");
      t0 = (0, _internal.space)();
      input = (0, _internal.element)("input");
      t1 = (0, _internal.space)();
      div1 = (0, _internal.element)("div");
      span1 = (0, _internal.element)("span");
      (0, _internal.attr_dev)(span0, "class", "inline");
      (0, _internal.add_location)(span0, file, 49, 8, 1420);
      (0, _internal.attr_dev)(input, "type", "text");
      (0, _internal.attr_dev)(input, "name", "search");
      (0, _internal.attr_dev)(input, "id", "search");
      (0, _internal.attr_dev)(input, "placeholder", "Search for...");
      (0, _internal.attr_dev)(input, "class", "flex-1 w-full h-10 bg-transparent border-0 outline-none text-cadetblue svelte-23k65m");
      (0, _internal.add_location)(input, file, 52, 8, 1526);
      (0, _internal.attr_dev)(div0, "class", "flex items-center flex-1 ");
      (0, _internal.add_location)(div0, file, 48, 6, 1372);
      (0, _internal.attr_dev)(span1, "class", "inline");
      (0, _internal.add_location)(span1, file, 64, 8, 1899);
      (0, _internal.add_location)(div1, file, 63, 6, 1885);
      (0, _internal.attr_dev)(div2, "class", "flex items-center w-full");
      (0, _internal.add_location)(div2, file, 47, 4, 1291);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div2, anchor);
      (0, _internal.append_dev)(div2, div0);
      (0, _internal.append_dev)(div0, span0);
      span0.innerHTML = raw0_value;
      (0, _internal.append_dev)(div0, t0);
      (0, _internal.append_dev)(div0, input);
      (0, _internal.set_input_value)(input,
      /*search*/
      ctx[0]);
      (0, _internal.append_dev)(div2, t1);
      (0, _internal.append_dev)(div2, div1);
      (0, _internal.append_dev)(div1, span1);
      span1.innerHTML = raw1_value;

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(input, "input",
        /*input_input_handler*/
        ctx[8]), (0, _internal.listen_dev)(input, "input",
        /*input_handler*/
        ctx[9], false, false, false), (0, _internal.listen_dev)(input, "focus",
        /*focus_handler*/
        ctx[10], false, false, false), (0, _internal.listen_dev)(span1, "click",
        /*click_handler*/
        ctx[11], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*search*/
      1 && input.value !==
      /*search*/
      ctx[0]) {
        (0, _internal.set_input_value)(input,
        /*search*/
        ctx[0]);
      }
    },
    i: function intro(local) {
      if (!div2_intro) {
        (0, _internal.add_render_callback)(() => {
          div2_intro = (0, _internal.create_in_transition)(div2, _transition.fly, {
            x: 20,
            duration: 500
          });
          div2_intro.start();
        });
      }
    },
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div2);
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(47:2) {#if searching}",
    ctx
  });
  return block;
} // (86:10) {#each favoriteIcons as icon}


function create_each_block(ctx) {
  let span;
  let html_tag;
  let raw_value = (0, _svgs.SVG)(
  /*icon*/
  ctx[15].name, `text-cadetblue w-6 h-6 hover:text-primary ${
  /*icon*/
  ctx[15].classNames}`) + "";
  let t;
  let mounted;
  let dispose;

  function click_handler_2(...args) {
    return (
      /*click_handler_2*/
      ctx[13](
      /*icon*/
      ctx[15], ...args)
    );
  }

  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      t = (0, _internal.space)();
      html_tag = new _internal.HtmlTag(t);
      (0, _internal.add_location)(span, file, 86, 12, 2570);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      html_tag.m(raw_value, span);
      (0, _internal.append_dev)(span, t);

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(span, "click", click_handler_2, false, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*favoriteIcons*/
      8 && raw_value !== (raw_value = (0, _svgs.SVG)(
      /*icon*/
      ctx[15].name, `text-cadetblue w-6 h-6 hover:text-primary ${
      /*icon*/
      ctx[15].classNames}`) + "")) html_tag.p(raw_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(86:10) {#each favoriteIcons as icon}",
    ctx
  });
  return block;
} // (85:35)            


function fallback_block(ctx) {
  let each_1_anchor;
  let each_value =
  /*favoriteIcons*/
  ctx[3];
  (0, _internal.validate_each_argument)(each_value);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      each_1_anchor = (0, _internal.empty)();
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }

      (0, _internal.insert_dev)(target, each_1_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*favoriteIcons, SVG*/
      8) {
        each_value =
        /*favoriteIcons*/
        ctx[3];
        (0, _internal.validate_each_argument)(each_value);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_each)(each_blocks, detaching);
      if (detaching) (0, _internal.detach_dev)(each_1_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(85:35)            ",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*searching*/
    ctx[4]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      if_block.c();
      (0, _internal.attr_dev)(div, "class", "flex justify-between px-2 py-3");
      (0, _internal.add_location)(div, file, 45, 0, 1224);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        (0, _internal.check_outros)();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        (0, _internal.transition_in)(if_block, 1);
        if_block.m(div, null);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      if_blocks[current_block_type_index].d();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let dispatch = (0, _svelte.createEventDispatcher)();
  let {
    search = ""
  } = $$props;
  let {
    currentUser = "Emmanuel"
  } = $$props;
  let {
    status = "Service"
  } = $$props;
  let {
    favoriteIcons = [// Array<FavIcon>
    {
      name: "message",
      callback: () => {
        (0, _svelteSpaRouter.push)("/books/id/false");
      }
    }, {
      name: "check_square"
    }, {
      name: "mail",
      callback: () => {
        (0, _svelteSpaRouter.push)("/books/id/true");
      }
    }, {
      name: "star",
      classNames: "text-warning focus:fill-current"
    }]
  } = $$props;
  let searching = false;
  const writable_props = ["search", "currentUser", "status", "favoriteIcons"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<AppBar> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("AppBar", $$slots, ['favoriteIcons']);

  function input_input_handler() {
    search = this.value;
    $$invalidate(0, search);
  }

  const input_handler = () => dispatch("search");

  const focus_handler = () => dispatch("focus");

  const click_handler = () => {
    $$invalidate(4, searching = false);
    dispatch("dismiss");
  };

  const click_handler_1 = () => dispatch("toggle");

  const click_handler_2 = icon => icon.callback();

  const click_handler_3 = () => {
    $$invalidate(4, searching = true);
    dispatch("show");
  };

  $$self.$set = $$props => {
    if ("search" in $$props) $$invalidate(0, search = $$props.search);
    if ("currentUser" in $$props) $$invalidate(1, currentUser = $$props.currentUser);
    if ("status" in $$props) $$invalidate(2, status = $$props.status);
    if ("favoriteIcons" in $$props) $$invalidate(3, favoriteIcons = $$props.favoriteIcons);
    if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    createEventDispatcher: _svelte.createEventDispatcher,
    dispatch,
    push: _svelteSpaRouter.push,
    pop: _svelteSpaRouter.pop,
    fly: _transition.fly,
    fade: _transition.fade,
    TOGGLE_ICON: _main_store.TOGGLE_ICON,
    MARGIN_LEFT: _main_store.MARGIN_LEFT,
    SVG: _svgs.SVG,
    icon_name: _svgs.icon_name,
    FavIcon: _icons.FavIcon,
    Avartar: _Avartar.default,
    search,
    currentUser,
    status,
    favoriteIcons,
    searching
  });

  $$self.$inject_state = $$props => {
    if ("dispatch" in $$props) $$invalidate(5, dispatch = $$props.dispatch);
    if ("search" in $$props) $$invalidate(0, search = $$props.search);
    if ("currentUser" in $$props) $$invalidate(1, currentUser = $$props.currentUser);
    if ("status" in $$props) $$invalidate(2, status = $$props.status);
    if ("favoriteIcons" in $$props) $$invalidate(3, favoriteIcons = $$props.favoriteIcons);
    if ("searching" in $$props) $$invalidate(4, searching = $$props.searching);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [search, currentUser, status, favoriteIcons, searching, dispatch, $$scope, $$slots, input_input_handler, input_handler, focus_handler, click_handler, click_handler_1, click_handler_2, click_handler_3];
}

class AppBar extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-23k65m-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      search: 0,
      currentUser: 1,
      status: 2,
      favoriteIcons: 3
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "AppBar",
      options,
      id: create_fragment.name
    });
  }

  get search() {
    throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set search(value) {
    throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get currentUser() {
    throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set currentUser(value) {
    throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get status() {
    throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set status(value) {
    throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get favoriteIcons() {
    throw new Error("<AppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set favoriteIcons(value) {
    throw new Error("<AppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = AppBar;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","svelte-spa-router":"../node_modules/svelte-spa-router/Router.svelte","svelte/transition":"../node_modules/svelte/transition/index.mjs","../../main_store":"main_store.ts","../../assets/svgs":"assets/svgs.ts","./icons":"components/app_bar/icons.ts","../avartar/Avartar.svelte":"components/avartar/Avartar.svelte","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/breadcrumb/Breadcrumb.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

var _transition = require("svelte/transition");

var _svelteSpaRouter = require("svelte-spa-router");

var _svgs = require("../../assets/svgs.ts");

var _main_store = require("../../main_store.ts");

/* components/breadcrumb/Breadcrumb.svelte generated by Svelte v3.23.2 */
const {
  console: console_1
} = _internal.globals;
const file = "components/breadcrumb/Breadcrumb.svelte";

const get_crumbs_slot_changes = dirty => ({});

const get_crumbs_slot_context = ctx => ({});

const get_separator_slot_changes = dirty => ({});

const get_separator_slot_context = ctx => ({});

const get_home_icon_slot_changes = dirty => ({});

const get_home_icon_slot_context = ctx => ({});

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  child_ctx[12] = i;
  return child_ctx;
}

const get_current_route_slot_changes = dirty => ({});

const get_current_route_slot_context = ctx => ({}); // (61:0) {:else}


function create_else_block(ctx) {
  let div1;
  let t;
  let div0;
  let div0_transition;
  let current;
  const current_route_slot_template =
  /*$$slots*/
  ctx[4]["current-route"];
  const current_route_slot = (0, _internal.create_slot)(current_route_slot_template, ctx,
  /*$$scope*/
  ctx[3], get_current_route_slot_context);
  const current_route_slot_or_fallback = current_route_slot || fallback_block_3(ctx);
  let each_value =
  /*paths*/
  ctx[0];
  (0, _internal.validate_each_argument)(each_value);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const out = i => (0, _internal.transition_out)(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  const block = {
    c: function create() {
      div1 = (0, _internal.element)("div");
      if (current_route_slot_or_fallback) current_route_slot_or_fallback.c();
      t = (0, _internal.space)();
      div0 = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      (0, _internal.attr_dev)(div0, "class", "items-center justify-start hidden md:flex");
      (0, _internal.add_location)(div0, file, 69, 4, 1970);
      (0, _internal.attr_dev)(div1, "class", "flex py-3 align-middle");
      (0, _internal.add_location)(div1, file, 61, 2, 1645);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div1, anchor);

      if (current_route_slot_or_fallback) {
        current_route_slot_or_fallback.m(div1, null);
      }

      (0, _internal.append_dev)(div1, t);
      (0, _internal.append_dev)(div1, div0);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (current_route_slot) {
        if (current_route_slot.p && dirty &
        /*$$scope*/
        8) {
          (0, _internal.update_slot)(current_route_slot, current_route_slot_template, ctx,
          /*$$scope*/
          ctx[3], dirty, get_current_route_slot_changes, get_current_route_slot_context);
        }
      } else {
        if (current_route_slot_or_fallback && current_route_slot_or_fallback.p && dirty &
        /*paths*/
        1) {
          current_route_slot_or_fallback.p(ctx, dirty);
        }
      }

      if (dirty &
      /*paths, jumpTo, titleCase, $$scope, SVG*/
      11) {
        each_value =
        /*paths*/
        ctx[0];
        (0, _internal.validate_each_argument)(each_value);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            (0, _internal.transition_in)(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            (0, _internal.transition_in)(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(current_route_slot_or_fallback, local);

      for (let i = 0; i < each_value.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      (0, _internal.add_render_callback)(() => {
        if (!div0_transition) div0_transition = (0, _internal.create_bidirectional_transition)(div0, _transition.fade, {}, true);
        div0_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(current_route_slot_or_fallback, local);
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      if (!div0_transition) div0_transition = (0, _internal.create_bidirectional_transition)(div0, _transition.fade, {}, false);
      div0_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div1);
      if (current_route_slot_or_fallback) current_route_slot_or_fallback.d(detaching);
      (0, _internal.destroy_each)(each_blocks, detaching);
      if (detaching && div0_transition) div0_transition.end();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(61:0) {:else}",
    ctx
  });
  return block;
} // (59:0) {#if paths.length === 0}


function create_if_block(ctx) {
  let html_tag;
  let raw_value = (0, _svgs.SVG)("home", "w-5 h-5 py-3 cursor-pointer inline-flex text-primary") + "";
  const block = {
    c: function create() {
      html_tag = new _internal.HtmlTag(null);
    },
    m: function mount(target, anchor) {
      html_tag.m(raw_value, target, anchor);
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) html_tag.d();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(59:0) {#if paths.length === 0}",
    ctx
  });
  return block;
} // (63:31)        


function fallback_block_3(ctx) {
  let h2;
  let t_value =
  /*paths*/
  ctx[0][
  /*paths*/
  ctx[0].length - 1] + "";
  let t;
  const block = {
    c: function create() {
      h2 = (0, _internal.element)("h2");
      t = (0, _internal.text)(t_value);
      (0, _internal.attr_dev)(h2, "class", "inline-flex p-0 px-2 mr-2 text-xl font-normal leading-6 border border-t-0 border-b-0 border-l-0 border-r-0 select-none lg:border-r text-cararra border-cararra ");
      (0, _internal.add_location)(h2, file, 63, 6, 1720);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, h2, anchor);
      (0, _internal.append_dev)(h2, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*paths*/
      1 && t_value !== (t_value =
      /*paths*/
      ctx[0][
      /*paths*/
      ctx[0].length - 1] + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(h2);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block_3.name,
    type: "fallback",
    source: "(63:31)        ",
    ctx
  });
  return block;
} // (72:8) {#if i === 0}


function create_if_block_3(ctx) {
  let current;
  const home_icon_slot_template =
  /*$$slots*/
  ctx[4]["home-icon"];
  const home_icon_slot = (0, _internal.create_slot)(home_icon_slot_template, ctx,
  /*$$scope*/
  ctx[3], get_home_icon_slot_context);
  const home_icon_slot_or_fallback = home_icon_slot || fallback_block_2(ctx);
  const block = {
    c: function create() {
      if (home_icon_slot_or_fallback) home_icon_slot_or_fallback.c();
    },
    m: function mount(target, anchor) {
      if (home_icon_slot_or_fallback) {
        home_icon_slot_or_fallback.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (home_icon_slot) {
        if (home_icon_slot.p && dirty &
        /*$$scope*/
        8) {
          (0, _internal.update_slot)(home_icon_slot, home_icon_slot_template, ctx,
          /*$$scope*/
          ctx[3], dirty, get_home_icon_slot_changes, get_home_icon_slot_context);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(home_icon_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(home_icon_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (home_icon_slot_or_fallback) home_icon_slot_or_fallback.d(detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(72:8) {#if i === 0}",
    ctx
  });
  return block;
} // (73:33)              


function fallback_block_2(ctx) {
  let span;
  let raw_value = (0, _svgs.SVG)("home", "w-5 h-5 cursor-pointer inline-flex text-primary") + "";
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      (0, _internal.add_location)(span, file, 73, 12, 2138);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      span.innerHTML = raw_value;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(span, "click",
        /*click_handler*/
        ctx[5], false, false, false);
        mounted = true;
      }
    },
    p: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block_2.name,
    type: "fallback",
    source: "(73:33)              ",
    ctx
  });
  return block;
} // (84:8) {#if i > 0 && i < paths.length}


function create_if_block_2(ctx) {
  let current;
  const separator_slot_template =
  /*$$slots*/
  ctx[4].separator;
  const separator_slot = (0, _internal.create_slot)(separator_slot_template, ctx,
  /*$$scope*/
  ctx[3], get_separator_slot_context);
  const separator_slot_or_fallback = separator_slot || fallback_block_1(ctx);
  const block = {
    c: function create() {
      if (separator_slot_or_fallback) separator_slot_or_fallback.c();
    },
    m: function mount(target, anchor) {
      if (separator_slot_or_fallback) {
        separator_slot_or_fallback.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (separator_slot) {
        if (separator_slot.p && dirty &
        /*$$scope*/
        8) {
          (0, _internal.update_slot)(separator_slot, separator_slot_template, ctx,
          /*$$scope*/
          ctx[3], dirty, get_separator_slot_changes, get_separator_slot_context);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(separator_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(separator_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (separator_slot_or_fallback) separator_slot_or_fallback.d(detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(84:8) {#if i > 0 && i < paths.length}",
    ctx
  });
  return block;
} // (85:33)              


function fallback_block_1(ctx) {
  let html_tag;
  let raw_value = (0, _svgs.SVG)("chevrons_right", "w-4 h-4 inline-flex text-cararra  cursor-default") + "";
  const block = {
    c: function create() {
      html_tag = new _internal.HtmlTag(null);
    },
    m: function mount(target, anchor) {
      html_tag.m(raw_value, target, anchor);
    },
    p: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) html_tag.d();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block_1.name,
    type: "fallback",
    source: "(85:33)              ",
    ctx
  });
  return block;
} // (97:12) {#if p !== ''}


function create_if_block_1(ctx) {
  let t_value = titleCase(
  /*p*/
  ctx[10]) + "";
  let t;
  const block = {
    c: function create() {
      t = (0, _internal.text)(t_value);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*paths*/
      1 && t_value !== (t_value = titleCase(
      /*p*/
      ctx[10]) + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(t);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(97:12) {#if p !== ''}",
    ctx
  });
  return block;
} // (89:28)            


function fallback_block(ctx) {
  let span;
  let span_class_value;
  let span_transition;
  let t;
  let current;
  let mounted;
  let dispose;
  let if_block =
  /*p*/
  ctx[10] !== "" && create_if_block_1(ctx);

  function click_handler_1(...args) {
    return (
      /*click_handler_1*/
      ctx[6](
      /*i*/
      ctx[12], ...args)
    );
  }

  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      if (if_block) if_block.c();
      t = (0, _internal.space)();
      (0, _internal.attr_dev)(span, "class", span_class_value = "text-sm text px-1 select-none " + (
      /*i*/
      ctx[12] <
      /*paths*/
      ctx[0].length - 1 ? "text-primary cursor-pointer" : "text-cararra cursor-default"));
      (0, _internal.add_location)(span, file, 89, 10, 2613);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      if (if_block) if_block.m(span, null);
      (0, _internal.insert_dev)(target, t, anchor);
      current = true;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(span, "click", click_handler_1, false, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;

      if (
      /*p*/
      ctx[10] !== "") {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          if_block.m(span, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (!current || dirty &
      /*paths*/
      1 && span_class_value !== (span_class_value = "text-sm text px-1 select-none " + (
      /*i*/
      ctx[12] <
      /*paths*/
      ctx[0].length - 1 ? "text-primary cursor-pointer" : "text-cararra cursor-default"))) {
        (0, _internal.attr_dev)(span, "class", span_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.add_render_callback)(() => {
        if (!span_transition) span_transition = (0, _internal.create_bidirectional_transition)(span, _transition.fade, {}, true);
        span_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      if (!span_transition) span_transition = (0, _internal.create_bidirectional_transition)(span, _transition.fade, {}, false);
      span_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
      if (if_block) if_block.d();
      if (detaching && span_transition) span_transition.end();
      if (detaching) (0, _internal.detach_dev)(t);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(89:28)            ",
    ctx
  });
  return block;
} // (71:6) {#each paths as p, i}


function create_each_block(ctx) {
  let t0;
  let t1;
  let current;
  let if_block0 =
  /*i*/
  ctx[12] === 0 && create_if_block_3(ctx);
  let if_block1 =
  /*i*/
  ctx[12] > 0 &&
  /*i*/
  ctx[12] <
  /*paths*/
  ctx[0].length && create_if_block_2(ctx);
  const crumbs_slot_template =
  /*$$slots*/
  ctx[4].crumbs;
  const crumbs_slot = (0, _internal.create_slot)(crumbs_slot_template, ctx,
  /*$$scope*/
  ctx[3], get_crumbs_slot_context);
  const crumbs_slot_or_fallback = crumbs_slot || fallback_block(ctx);
  const block = {
    c: function create() {
      if (if_block0) if_block0.c();
      t0 = (0, _internal.space)();
      if (if_block1) if_block1.c();
      t1 = (0, _internal.space)();
      if (crumbs_slot_or_fallback) crumbs_slot_or_fallback.c();
    },
    m: function mount(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      (0, _internal.insert_dev)(target, t0, anchor);
      if (if_block1) if_block1.m(target, anchor);
      (0, _internal.insert_dev)(target, t1, anchor);

      if (crumbs_slot_or_fallback) {
        crumbs_slot_or_fallback.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (
      /*i*/
      ctx[12] === 0) if_block0.p(ctx, dirty);

      if (
      /*i*/
      ctx[12] > 0 &&
      /*i*/
      ctx[12] <
      /*paths*/
      ctx[0].length) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*paths*/
          1) {
            (0, _internal.transition_in)(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_2(ctx);
          if_block1.c();
          (0, _internal.transition_in)(if_block1, 1);
          if_block1.m(t1.parentNode, t1);
        }
      } else if (if_block1) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        (0, _internal.check_outros)();
      }

      if (crumbs_slot) {
        if (crumbs_slot.p && dirty &
        /*$$scope*/
        8) {
          (0, _internal.update_slot)(crumbs_slot, crumbs_slot_template, ctx,
          /*$$scope*/
          ctx[3], dirty, get_crumbs_slot_changes, get_crumbs_slot_context);
        }
      } else {
        if (crumbs_slot_or_fallback && crumbs_slot_or_fallback.p && dirty &
        /*paths*/
        1) {
          crumbs_slot_or_fallback.p(ctx, dirty);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block0);
      (0, _internal.transition_in)(if_block1);
      (0, _internal.transition_in)(crumbs_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block0);
      (0, _internal.transition_out)(if_block1);
      (0, _internal.transition_out)(crumbs_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0) if_block0.d(detaching);
      if (detaching) (0, _internal.detach_dev)(t0);
      if (if_block1) if_block1.d(detaching);
      if (detaching) (0, _internal.detach_dev)(t1);
      if (crumbs_slot_or_fallback) crumbs_slot_or_fallback.d(detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(71:6) {#each paths as p, i}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*paths*/
    ctx[0].length === 0) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        (0, _internal.check_outros)();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        (0, _internal.transition_in)(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) (0, _internal.detach_dev)(if_block_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function titleCase(str) {
  if (str !== "") return str.toLowerCase().split(" ").map(function (word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(" ");
}

function instance($$self, $$props, $$invalidate) {
  let $CRUMBS;
  let $location;
  (0, _internal.validate_store)(_main_store.CRUMBS, "CRUMBS");
  (0, _internal.component_subscribe)($$self, _main_store.CRUMBS, $$value => $$invalidate(7, $CRUMBS = $$value));
  (0, _internal.validate_store)(_svelteSpaRouter.location, "location");
  (0, _internal.component_subscribe)($$self, _svelteSpaRouter.location, $$value => $$invalidate(8, $location = $$value));
  let {
    getCrumbs
  } = $$props;
  let {
    paths = []
  } = $$props;

  function getPaths() {
    try {
      return $CRUMBS[$location].split("/");
    } catch (e) {
      let a = $location.split("/");

      if ($location !== "/" && a.length > 2) {
        let b = a.slice(0, a.length - 2).join("/").toLowerCase();
        let c = $CRUMBS[`${b}/params`].split("/");
        let d = c.slice(-1)[0].split(",");
        if ($location.search("false") === -1 && $location.search("true") === -1) return `${b}/${d[2]}`.split("/");else if ($location.search("false") > -1) return `${b}/${d[1]}`.split("/");else if ($location.search("true") > -1) return `${b}/${d[0]}`.split("/");
      }
    }
  }

  function jumpTo(index) {
    let path = "";
    if (index === 0) path = "/";else for (let i = 0; i < index; i++) {
      path += "/" + paths[i + 1];
    }
    (0, _svelteSpaRouter.push)(path);
  }

  const writable_props = ["getCrumbs", "paths"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Breadcrumb> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("Breadcrumb", $$slots, ['current-route', 'home-icon', 'separator', 'crumbs']);

  const click_handler = () => {
    jumpTo(0);
  };

  const click_handler_1 = i => {
    if (i !== paths.length - 1) jumpTo(i);
  };

  $$self.$set = $$props => {
    if ("getCrumbs" in $$props) $$invalidate(2, getCrumbs = $$props.getCrumbs);
    if ("paths" in $$props) $$invalidate(0, paths = $$props.paths);
    if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    onMount: _svelte.onMount,
    fade: _transition.fade,
    location: _svelteSpaRouter.location,
    push: _svelteSpaRouter.push,
    pop: _svelteSpaRouter.pop,
    SVG: _svgs.SVG,
    CRUMBS: _main_store.CRUMBS,
    getCrumbs,
    paths,
    titleCase,
    getPaths,
    jumpTo,
    $CRUMBS,
    $location
  });

  $$self.$inject_state = $$props => {
    if ("getCrumbs" in $$props) $$invalidate(2, getCrumbs = $$props.getCrumbs);
    if ("paths" in $$props) $$invalidate(0, paths = $$props.paths);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*$CRUMBS, $location, getCrumbs*/
    388) {
      $: {
        console.log($CRUMBS[$location]);
        $$invalidate(0, paths = getCrumbs ? getCrumbs() : getPaths());
      }
    }
  };

  return [paths, jumpTo, getCrumbs, $$scope, $$slots, click_handler, click_handler_1];
}

class Breadcrumb extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      getCrumbs: 2,
      paths: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Breadcrumb",
      options,
      id: create_fragment.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (
    /*getCrumbs*/
    ctx[2] === undefined && !("getCrumbs" in props)) {
      console_1.warn("<Breadcrumb> was created without expected prop 'getCrumbs'");
    }
  }

  get getCrumbs() {
    throw new Error("<Breadcrumb>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set getCrumbs(value) {
    throw new Error("<Breadcrumb>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get paths() {
    throw new Error("<Breadcrumb>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set paths(value) {
    throw new Error("<Breadcrumb>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Breadcrumb;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","svelte/transition":"../node_modules/svelte/transition/index.mjs","svelte-spa-router":"../node_modules/svelte-spa-router/Router.svelte","../../assets/svgs.ts":"assets/svgs.ts","../../main_store.ts":"main_store.ts"}],"components/side_nav/MenuItem.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svgs = require("../../assets/svgs");

var _main_store = require("../../main_store");

var _svelteSpaRouter = require("svelte-spa-router");

var _svelte = require("svelte");

/* components/side_nav/MenuItem.svelte generated by Svelte v3.23.2 */
const file = "components/side_nav/MenuItem.svelte"; // (50:6) {#if full}

function create_if_block_1(ctx) {
  let span;
  let t_value =
  /*route*/
  ctx[0].name + "";
  let t;
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      t = (0, _internal.text)(t_value);
      (0, _internal.attr_dev)(span, "class", "flex-1 pl-2 font-normal select-none route-name text-cadetblue ");
      (0, _internal.add_location)(span, file, 50, 8, 1692);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      (0, _internal.append_dev)(span, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*route*/
      1 && t_value !== (t_value =
      /*route*/
      ctx[0].name + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(50:6) {#if full}",
    ctx
  });
  return block;
} // (58:4) {#if full}


function create_if_block(ctx) {
  let span;
  let raw_value = (0, _svgs.SVG)("chevron_right", ` text-cadetblue w-5 h-5  transform  ${
  /*expand*/
  ctx[4] ? "rotate-90" : ""} ${
  /*full*/
  ctx[3] &&
  /*route*/
  ctx[0].subRoutes ? "visible" : "invisible"}  transition-all duration-300 ease-linear`) + "";
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      (0, _internal.attr_dev)(span, "class", "expand-icon");
      (0, _internal.add_location)(span, file, 58, 6, 1873);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      span.innerHTML = raw_value;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(span, "click",
        /*click_handler*/
        ctx[13], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*expand, full, route*/
      25 && raw_value !== (raw_value = (0, _svgs.SVG)("chevron_right", ` text-cadetblue w-5 h-5  transform  ${
      /*expand*/
      ctx[4] ? "rotate-90" : ""} ${
      /*full*/
      ctx[3] &&
      /*route*/
      ctx[0].subRoutes ? "visible" : "invisible"}  transition-all duration-300 ease-linear`) + "")) span.innerHTML = raw_value;
      ;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(58:4) {#if full}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div1;
  let span2;
  let span1;
  let span0;
  let raw_value = (0, _svgs.SVG)(
  /*type*/
  ctx[2] === "parent" ?
  /*route*/
  ctx[0].icon : "circle", `text-cadetblue ${
  /*type*/
  ctx[2] === "parent" ? "w-5 h-5" : "w-3 h-3"}  `) + "";
  let t0;
  let span1_class_value;
  let t1;
  let span2_class_value;
  let t2;
  let div0;
  let div0_class_value;
  let div1_title_value;
  let div1_class_value;
  let current;
  let mounted;
  let dispose;
  let if_block0 =
  /*full*/
  ctx[3] && create_if_block_1(ctx);
  let if_block1 =
  /*full*/
  ctx[3] && create_if_block(ctx);
  const default_slot_template =
  /*$$slots*/
  ctx[12].default;
  const default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[11], null);
  const block = {
    c: function create() {
      div1 = (0, _internal.element)("div");
      span2 = (0, _internal.element)("span");
      span1 = (0, _internal.element)("span");
      span0 = (0, _internal.element)("span");
      t0 = (0, _internal.space)();
      if (if_block0) if_block0.c();
      t1 = (0, _internal.space)();
      if (if_block1) if_block1.c();
      t2 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");
      if (default_slot) default_slot.c();
      (0, _internal.attr_dev)(span0, "class", " icon");
      (0, _internal.add_location)(span0, file, 46, 6, 1504);
      (0, _internal.attr_dev)(span1, "class", span1_class_value = "icon--route-name flex flex-1 items-center select-none transform " + (
      /*hovering*/
      ctx[5] ? "translate-x-2" : "translate-x-0") + "\n      transition-all duration-300 ease-linear");
      (0, _internal.add_location)(span1, file, 42, 4, 1315);
      (0, _internal.attr_dev)(span2, "class", span2_class_value = " flex items-center justify-between p-2 mx-4 mb-2 rounded-md outline-none cursor-pointer select-none menu " + (
      /*route*/
      ctx[0].subRoutes &&
      /*$location*/
      ctx[7].includes(
      /*path*/
      ctx[1]) ?
      /*parentColor*/
      ctx[10] :
      /*inactive*/
      ctx[9]) + "\n    " +
      /*color*/
      ctx[6] + " ");
      (0, _internal.add_location)(span2, file, 32, 2, 923);
      (0, _internal.attr_dev)(div0, "class", div0_class_value = " menu-sub-items select-none " + (
      /*expand*/
      ctx[4] &&
      /*full*/
      ctx[3] ? "block " : "hidden") + "\n    transition-all duration-700 ease-linear");
      (0, _internal.add_location)(div0, file, 68, 2, 2233);
      (0, _internal.attr_dev)(div1, "title", div1_title_value =
      /*route*/
      ctx[0].title);
      (0, _internal.attr_dev)(div1, "class", div1_class_value = "" + ((
      /*type*/
      ctx[2] === "parent" ? "menu-item" : "menu-sub-item") + " block select-none"));
      (0, _internal.add_location)(div1, file, 28, 0, 810);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div1, anchor);
      (0, _internal.append_dev)(div1, span2);
      (0, _internal.append_dev)(span2, span1);
      (0, _internal.append_dev)(span1, span0);
      span0.innerHTML = raw_value;
      (0, _internal.append_dev)(span1, t0);
      if (if_block0) if_block0.m(span1, null);
      (0, _internal.append_dev)(span2, t1);
      if (if_block1) if_block1.m(span2, null);
      (0, _internal.append_dev)(div1, t2);
      (0, _internal.append_dev)(div1, div0);

      if (default_slot) {
        default_slot.m(div0, null);
      }

      current = true;

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(span2, "mousemove",
        /*mousemove_handler*/
        ctx[14], false, false, false), (0, _internal.listen_dev)(span2, "mouseout",
        /*mouseout_handler*/
        ctx[15], false, false, false), (0, _internal.listen_dev)(span2, "click",
        /*click_handler_1*/
        ctx[16], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, [dirty]) {
      if ((!current || dirty &
      /*type, route*/
      5) && raw_value !== (raw_value = (0, _svgs.SVG)(
      /*type*/
      ctx[2] === "parent" ?
      /*route*/
      ctx[0].icon : "circle", `text-cadetblue ${
      /*type*/
      ctx[2] === "parent" ? "w-5 h-5" : "w-3 h-3"}  `) + "")) span0.innerHTML = raw_value;
      ;

      if (
      /*full*/
      ctx[3]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          if_block0.m(span1, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (!current || dirty &
      /*hovering*/
      32 && span1_class_value !== (span1_class_value = "icon--route-name flex flex-1 items-center select-none transform " + (
      /*hovering*/
      ctx[5] ? "translate-x-2" : "translate-x-0") + "\n      transition-all duration-300 ease-linear")) {
        (0, _internal.attr_dev)(span1, "class", span1_class_value);
      }

      if (
      /*full*/
      ctx[3]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(span2, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (!current || dirty &
      /*route, $location, path, color*/
      195 && span2_class_value !== (span2_class_value = " flex items-center justify-between p-2 mx-4 mb-2 rounded-md outline-none cursor-pointer select-none menu " + (
      /*route*/
      ctx[0].subRoutes &&
      /*$location*/
      ctx[7].includes(
      /*path*/
      ctx[1]) ?
      /*parentColor*/
      ctx[10] :
      /*inactive*/
      ctx[9]) + "\n    " +
      /*color*/
      ctx[6] + " ")) {
        (0, _internal.attr_dev)(span2, "class", span2_class_value);
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        2048) {
          (0, _internal.update_slot)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[11], dirty, null, null);
        }
      }

      if (!current || dirty &
      /*expand, full*/
      24 && div0_class_value !== (div0_class_value = " menu-sub-items select-none " + (
      /*expand*/
      ctx[4] &&
      /*full*/
      ctx[3] ? "block " : "hidden") + "\n    transition-all duration-700 ease-linear")) {
        (0, _internal.attr_dev)(div0, "class", div0_class_value);
      }

      if (!current || dirty &
      /*route*/
      1 && div1_title_value !== (div1_title_value =
      /*route*/
      ctx[0].title)) {
        (0, _internal.attr_dev)(div1, "title", div1_title_value);
      }

      if (!current || dirty &
      /*type*/
      4 && div1_class_value !== (div1_class_value = "" + ((
      /*type*/
      ctx[2] === "parent" ? "menu-item" : "menu-sub-item") + " block select-none"))) {
        (0, _internal.attr_dev)(div1, "class", div1_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div1);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (default_slot) default_slot.d(detaching);
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let $MENU_WIDTH;
  let $location;
  (0, _internal.validate_store)(_main_store.MENU_WIDTH, "MENU_WIDTH");
  (0, _internal.component_subscribe)($$self, _main_store.MENU_WIDTH, $$value => $$invalidate(17, $MENU_WIDTH = $$value));
  (0, _internal.validate_store)(_svelteSpaRouter.location, "location");
  (0, _internal.component_subscribe)($$self, _svelteSpaRouter.location, $$value => $$invalidate(7, $location = $$value));
  let dispatch = (0, _svelte.createEventDispatcher)();
  let {
    route
  } = $$props;
  let {
    path
  } = $$props;
  let {
    type
  } = $$props; //'parent' | 'child'

  let full;
  let expand;
  let hovering;
  let active = type === "parent" && route.subRoutes ? "bg-comet shadow-none" : "bg-primary shadow-primary";
  let inactive = `bg-transparent`;
  let color = inactive;
  let parentColor = "bg-comet";
  const writable_props = ["route", "path", "type"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<MenuItem> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("MenuItem", $$slots, ['default']);

  const click_handler = () => {
    $$invalidate(4, expand = !expand);
    dispatch("expand", expand);
  };

  const mousemove_handler = () => $$invalidate(5, hovering = true);

  const mouseout_handler = () => $$invalidate(5, hovering = false);

  const click_handler_1 = () => {
    (0, _svelteSpaRouter.push)(path);
    dispatch("click", route.route);
  };

  $$self.$set = $$props => {
    if ("route" in $$props) $$invalidate(0, route = $$props.route);
    if ("path" in $$props) $$invalidate(1, path = $$props.path);
    if ("type" in $$props) $$invalidate(2, type = $$props.type);
    if ("$$scope" in $$props) $$invalidate(11, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    SVG: _svgs.SVG,
    icon_name: _svgs.icon_name,
    MENU_WIDTH: _main_store.MENU_WIDTH,
    ACTIVE_PATH: _main_store.ACTIVE_PATH,
    location: _svelteSpaRouter.location,
    push: _svelteSpaRouter.push,
    createEventDispatcher: _svelte.createEventDispatcher,
    dispatch,
    route,
    path,
    type,
    full,
    expand,
    hovering,
    active,
    inactive,
    color,
    parentColor,
    $MENU_WIDTH,
    $location
  });

  $$self.$inject_state = $$props => {
    if ("dispatch" in $$props) $$invalidate(8, dispatch = $$props.dispatch);
    if ("route" in $$props) $$invalidate(0, route = $$props.route);
    if ("path" in $$props) $$invalidate(1, path = $$props.path);
    if ("type" in $$props) $$invalidate(2, type = $$props.type);
    if ("full" in $$props) $$invalidate(3, full = $$props.full);
    if ("expand" in $$props) $$invalidate(4, expand = $$props.expand);
    if ("hovering" in $$props) $$invalidate(5, hovering = $$props.hovering);
    if ("active" in $$props) $$invalidate(18, active = $$props.active);
    if ("inactive" in $$props) $$invalidate(9, inactive = $$props.inactive);
    if ("color" in $$props) $$invalidate(6, color = $$props.color);
    if ("parentColor" in $$props) $$invalidate(10, parentColor = $$props.parentColor);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*$MENU_WIDTH*/
    131072) {
      $: {
        $$invalidate(3, full = $MENU_WIDTH === "70");
      }
    }

    if ($$self.$$.dirty &
    /*route, $location, path*/
    131) {
      $: {
        if (route.path === "/") $$invalidate(6, color = $location.length === 1 ? active : inactive);else $$invalidate(6, color = $location === path ? active : inactive);
      }
    }
  };

  return [route, path, type, full, expand, hovering, color, $location, dispatch, inactive, parentColor, $$scope, $$slots, click_handler, mousemove_handler, mouseout_handler, click_handler_1];
}

class MenuItem extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      route: 0,
      path: 1,
      type: 2
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "MenuItem",
      options,
      id: create_fragment.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (
    /*route*/
    ctx[0] === undefined && !("route" in props)) {
      console.warn("<MenuItem> was created without expected prop 'route'");
    }

    if (
    /*path*/
    ctx[1] === undefined && !("path" in props)) {
      console.warn("<MenuItem> was created without expected prop 'path'");
    }

    if (
    /*type*/
    ctx[2] === undefined && !("type" in props)) {
      console.warn("<MenuItem> was created without expected prop 'type'");
    }
  }

  get route() {
    throw new Error("<MenuItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set route(value) {
    throw new Error("<MenuItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get path() {
    throw new Error("<MenuItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set path(value) {
    throw new Error("<MenuItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get type() {
    throw new Error("<MenuItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set type(value) {
    throw new Error("<MenuItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = MenuItem;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","../../assets/svgs":"assets/svgs.ts","../../main_store":"main_store.ts","svelte-spa-router":"../node_modules/svelte-spa-router/Router.svelte","svelte":"../node_modules/svelte/index.mjs"}],"assets/logo.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logo = void 0;
exports.logo = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class=" fill-current w-10 h-10  ml-4 text-cadetblue" version="1.0" viewBox="0 0 600 600">
  <defs/>
  <path d="M283 .6c-64.3 6-121.4 32.8-164 77-39.2 40.6-62 87.7-70.2 144.9-1.9 13.1-1.6 51.2.5 64.8 4.4 28.3 11.5 51.5 23.6 76.2C85.6 389.3 101.1 411 121 431c71.1 71.3 176.6 94.4 271.4 59.4 56-20.6 104.8-62.4 134.5-115.1 27.9-49.6 38-110.4 27.6-166.9-19.8-107.5-106-189.7-215.9-206C328.8 1 292.1-.2 283 .6zm58.9 8.3C395.6 18.1 441.5 41.5 479 79c38.5 38.5 62.4 86.4 70.7 141.7 2 13.4 2.2 47.8.5 61.3-7.7 58.3-33.2 109.1-74.9 149-37.9 36.3-84.4 59.1-136.8 67.1-19.9 3.1-51.2 3.1-71.3 0-27.2-4.1-48.9-10.9-73.7-23-50-24.5-89.2-63.5-113.9-113.2-11.6-23.3-18.8-46.2-23.3-73.4-2.5-15.6-2.5-54.4 0-70.3 6.2-38.5 19.9-73.6 40.9-103.8C138.9 54 204.2 15 277 7.1c14.5-1.6 50.7-.6 64.9 1.8z"/>
  <path d="M279 16.1c-57.3 6.4-107.8 30.5-147.5 70.4-42.2 42.4-66.2 97.1-69.1 157.5-2.6 53.7 15.6 110.3 49.5 154 8 10.4 24.8 27.8 35.6 37 18.8 16 50 34.1 72.2 41.8 28.6 10 46.6 13.3 76.4 13.9 33.3.8 54.7-2.3 83.3-11.8 25.5-8.5 46.5-19.5 68.1-35.7 45.4-33.9 76.5-81.2 89.4-135.7 5-20.7 5.6-27.1 5.6-55 0-22.6-.3-27.7-2.3-38.7-9.1-50.8-32.2-94.3-69.3-130.3C433.4 47 389 25.2 336.6 17.4c-12.4-1.8-46-2.6-57.6-1.3zm35 44c5.8 16.6 11 31.3 11.5 32.6 1 2.3 1.9 1.3 14.4-17.1 7.4-10.8 13.6-19.4 13.9-19.1.2.2 2.2 11.1 4.3 24.1 2.1 13 4 23.8 4.2 24 .2.2 9.7-7.1 21.2-16.1 11.4-9.1 20.9-16.4 21.1-16.2.2.2-.8 11.5-2.1 25.2-1.4 13.6-2.4 25-2.1 25.2.3.3 12.7-3.1 27.5-7.4 14.9-4.4 27.1-7.5 27.1-7s-2.7 11.5-6.1 24.4c-3.3 12.9-5.8 23.7-5.5 24 .3.3 13.8-2.2 29.9-5.6 16.2-3.3 29.9-6.1 30.5-6.1.6 0-7.4 10.9-17.7 24.2-10.4 13.4-18.8 24.4-18.8 24.5.1 0 12.4.7 27.2 1.3 14.9.7 27.3 1.6 27.7 1.9.5.4-2.9 3.4-7.5 6.8-37.9 27.8-36.3 26.6-33.7 27.4 1.4.4 10.9 3.1 21.2 6 10.3 2.8 18.6 5.5 18.3 5.9-.2.4-7.9 5.7-17 11.9s-16.7 11.7-17 12.1c-.3.5 7.5 5 17.2 10.1 21.4 11 30.5 16 30.1 16.4-.2.2-13.1 3.1-28.7 6.4-15.7 3.4-28.6 6.3-28.8 6.5-.2.2 8.5 8.2 19.4 17.7 10.9 9.6 20.7 18.2 21.8 19.2 1.9 1.8 1.1 1.8-27.4 1.2-27.9-.6-29.3-.5-28.8 1.2.2 1 5.7 13.7 12.2 28.1 6.4 14.5 11.5 26.6 11.2 26.8-.2.3-11.7-3.1-25.5-7.6-13.7-4.4-25.2-8-25.4-8-.3 0-.8 4.2-1 9.3-1 17.9-8.4 33.4-22.7 47.8-9.6 9.6-18.7 15.3-31.6 19.6-7.2 2.4-9.5 2.7-23 2.7-13.1.1-16-.2-22.5-2.2-9.3-3-15.7-6.2-23.9-12-4.2-3-6.8-4.2-7.6-3.6-16.5 12.6-32.3 18.4-50.8 18.4-13 0-22.1-2.1-34.2-8-12-5.9-20.5-12.7-27.9-22.3-9.7-12.9-14.9-26.3-16.2-42-.5-5-1.1-7.7-1.8-7.4-4.5 1.8-49.8 15.8-50 15.5-.2-.2 5.3-12.8 12-28.2 6.8-15.3 12.4-28 12.4-28.3 0-.2-13-.1-29 .3-15.9.4-29 .5-29 .1 0-.3 9.7-9 21.5-19.3s21.3-18.9 21.2-19.1c-.2-.1-13.1-3-28.7-6.3s-28.6-6.3-28.9-6.5c-.6-.7-1.5-.2 22.4-12.5 12.1-6.2 22.8-11.9 23.8-12.5 1.6-1.1-.4-2.7-17.7-13.6-10.8-6.7-19.5-12.4-19.3-12.5.1-.1 10.1-2.7 22.2-5.8 12.1-3.1 22.4-5.8 22.9-5.9.5-.2-9.3-7.8-21.8-17s-22.2-16.9-21.4-17.1c.7-.2 13.2-.9 27.8-1.6 14.6-.6 26.7-1.3 26.9-1.5.2-.2-6.4-9.8-14.7-21.2-8.2-11.4-14.5-20.9-13.8-21 .6-.2 12.9 1.2 27.4 3 22.7 2.9 26.2 3.1 25.7 1.8-.4-.9-5.6-13.7-11.6-28.5-6.1-14.7-10.9-27-10.7-27.2.2-.1 14.9 4.9 32.6 11.3 17.8 6.3 32.4 11.4 32.6 11.2.2-.2-.7-10.8-2-23.4-1.3-12.7-2.3-24-2.1-25.2.2-2 3-.1 21 14.3 11.5 9.1 21 16.4 21.2 16.2.1-.2 2-11.2 4.1-24.6 2.1-13.3 4.1-24.2 4.4-24.2.3.1 6.5 8.9 13.8 19.6 7.4 10.8 13.5 19.4 13.6 19.2.2-.2 5.4-14.8 11.6-32.6 6.2-17.7 11.5-32.2 11.9-32.2.3 0 5.3 13.6 11.1 30.1z"/>
  <path d="M301.7 102.3c.7 5.7-1.1 15.5-4 21.7-1.3 2.9-5.9 8.2-12.8 15-5.9 5.8-11.5 12-12.4 13.8-1 2.1-1.6 5.8-1.6 9.8 0 8.3 3.1 15.2 9.7 21.7 4.4 4.4 14.3 11.7 15.8 11.7.3 0 .6-1.5.6-3.3 0-6.7 3-12.5 10.8-21 9.6-10.5 11.8-13.9 13.2-21 2.7-13.7-4.3-35.6-15.4-48.2l-4.4-5 .5 4.8z"/>
  <path d="M326.4 130.4c3.6 11.2 3.3 21.1-.9 29.9-1.5 3.2-6.5 10.7-11.2 16.5-9.2 11.5-10.7 14.3-9.8 18 .6 2.4.7 2.5 10.3 2 18.4-.9 27.2-8.3 28.8-24.5.8-7.2-1.4-14.2-9.2-29.3-5.3-10.4-9.3-16.7-8-12.6zM273.3 208c-1.8 2.7-3.3 5.2-3.3 5.5 0 .3 3.1 2.5 6.8 4.9 6.5 4.1 12.2 9.6 12.2 11.8 0 .5-.3.8-.7.6-.5-.2-4.2-2-8.3-4-9.7-4.8-18.3-6.8-29.4-6.8-25.8 0-48.4 14.2-59.6 37.5-4.9 10.3-6.4 16.8-6.3 28.5 0 17.3 5.7 31.9 17.3 44.3l6.7 7.2-6.2 6.7c-11.7 12.6-17.7 27.9-17.8 44.8 0 25.7 13.6 47.6 36.8 59.3 9.3 4.6 18.2 6.7 29.2 6.7 17.3 0 32.7-6 45.3-17.7l7-6.5 7 6.6c20.3 19.1 50.9 23.1 76.3 9.9 10.8-5.5 22.2-17.3 27.5-28.3 6.1-12.3 7.5-19.2 7-32.5-.7-17.4-6.2-30.4-18-42.7-3.2-3.3-5.8-6.1-5.8-6.2 0-.1 2.6-2.9 5.8-6.2 11.8-12.6 17.1-25.2 17.9-42.9.6-13.3-.8-20.1-6.8-32.5-8.2-16.8-25.7-30.4-44.5-34.5-15.5-3.5-34.5-.5-47.4 7.4-3.8 2.3-5 2.7-5 1.6 0-3.1 3.4-6.6 11.1-11.6 4.7-3.1 7.6-5.6 7.2-6.3-.3-.6-1.9-3-3.5-5.4l-2.9-4.2h-52.4l-3.2 5zm54.5 2.7l1.4 2.3h-26.1c-14.3 0-26.1-.2-26.1-.5s.6-1.4 1.3-2.5c1.2-2 2.1-2 24.6-1.8 23 .3 23.4.3 24.9 2.5zM322 218c-1.4 1.1-2.8 2-3.2 2-1.9 0-5.8 8.9-5.8 13.3 0 7.7.5 8 5.8 4.1 15.9-12.2 36.1-15.9 54.8-10 13.9 4.4 25.1 12.9 33.3 25.2 12.2 18.1 13.7 40.5 4 59.5-2 4.1-13.5 18.9-14.7 18.9-.4.1-2.4 1.6-4.5 3.5l-3.9 3.4 7.6 7.1c17.1 16.3 23.7 33.6 20.3 53.4-4 23-19.9 41.5-42.4 49.3-6.6 2.3-9.5 2.7-18.8 2.7-18.4 0-31.5-5.4-44.5-18.4l-7.6-7.5-7 7c-19.4 19.6-48.7 23.9-73.3 11-16.3-8.6-28.6-25.2-32.1-43.3-1.7-8.4-.8-21.2 2-28.5 3.2-8.5 11.2-19.8 18.9-26.8l6.7-6.1-9.1-9.2c-21.2-21.3-25.7-46.1-12.8-71 4.4-8.5 16.2-20.8 24.3-25.3 21.4-12 46.3-10.5 66.5 4.1 5.2 3.8 6.5 3.5 6.5-1.4 0-5.6-2.2-10.5-6.7-14.8l-4.6-4.2h42.8l-2.5 2z"/>
  <path d="M240.5 235c-19.3 4-35.1 18.9-40 37.7-1.7 6.6-1.9 18.8-.4 25.3 4.1 18 20.9 34.4 39 38.2l5.8 1.2-7 1.8c-9.4 2.3-17.1 6.9-24.4 14.3-9.7 9.8-14.5 21.5-14.5 35.5 0 14.5 4.5 25.6 14.7 36.2 20.3 20.9 53.2 21.1 73.9.4 6.8-6.8 11.7-15.5 13.8-24.4l1.3-5.7 1.2 4.5c3.2 12 7.6 19.5 16.1 27.4 20.7 19.1 53.5 17.8 72.8-2.8 27.2-29.2 13.4-75.2-25.7-85.7-3.7-.9-5.5-1.8-4.1-1.8 4.9-.2 16.1-5 22.5-9.6 13.4-9.5 21.5-25.2 21.5-41.7 0-25.2-19.4-47.5-44.5-51.1-15.4-2.2-31.9 2.9-43 13.4-8.2 7.7-12.5 15.2-15.6 26.9l-1.2 4.5-1.3-5.7c-6.2-26.6-33.9-44.3-60.9-38.8zm17.7 26.2c2.2.6 6.1 3.1 8.8 5.5 12.5 11.2 12.5 30.4 0 41.7-6.3 5.6-7.6 5-10.8-5.3l-1.9-6.5 2.8-3.9c1.6-2.2 2.9-5.3 2.9-6.8 0-11-13.8-15.1-18.5-5.4-2.4 5.1-1.7 8.3 2.7 13.2 1.8 1.9 1.9 2.6.8 6-2.9 9.7-4.2 12.3-6 12.3-2.5 0-10.1-7.6-12.5-12.5-2.9-5.9-3.2-17.1-.7-22.7 5.8-13.2 19.1-19.6 32.4-15.6zm106.3 1.2c9.4 4.3 15.4 13.8 15.5 24.2 0 8.6-2.3 14.6-8 20.4-6.1 6.3-8.3 6.4-10.4.7-4-11.2-4-11.6-1.3-14.5 3.3-3.5 4.2-7.2 2.7-11.7-2.7-8.2-14.7-8.5-18-.5-1.6 3.8-.7 8.4 2.5 12.6l2.4 3.2-2.5 7.6c-1.9 5.6-3 7.6-4.3 7.6-3 0-9.9-6.8-12.7-12.5-10.9-22.5 12-47.4 34.1-37.1zm-50 51.4c19 9.7 19.3 37.2.6 46.6-6.3 3.2-11.3 3.9-17.6 2.6-18.1-3.8-26.8-24.8-16.5-40.2 7.2-10.7 22.4-14.8 33.5-9zm-53 52c16.9 8.7 19.9 32.2 5.9 45.2-6.5 6-7.8 5.5-10.8-3.8-2.3-7.4-2.4-7.8-.6-9.7 4.2-4.8 5.1-9.5 2.5-14.4-2.8-5.5-10.4-6.4-15.2-1.9-4.2 4-4 10.5.6 15.7 2.3 2.6 2.2 3.9-1.1 12.8-2.5 6.9-4.6 6.9-10.9.4-13.9-14.4-8.8-38.8 9.6-45.6 5.3-2 14.9-1.4 20 1.3zm100.7-1.2c19.4 6.6 24.3 33.4 8.5 46.9-5.4 4.7-7.2 4.5-9-.8-3.9-10.8-3.9-10.6-.9-14.5 5.2-6.9 2.7-16.1-5-17.7-9.7-2.2-15.2 10.1-8.3 18.3l2.5 2.9-2.6 7.7c-3 9-4.3 9.5-10.4 4-21.8-19.7-2.2-56.2 25.2-46.8z"/>
  <path d="M553.1 352.2c-10.1 24.7-25 49.5-42.9 70.9-10 11.9-30.4 31.5-41 39.4l-8.1 6-.1 12.6v12.5l-8.7 5.3c-19.7 11.7-43.8 22.3-66.3 29-77.9 23.3-161.8 12.8-232.5-28.9l-8.6-5.1.7-11.8.7-11.7-5.9-4.4c-23.7-17.6-45.3-40.7-62.9-67-6.3-9.5-20-35.5-26.7-51l-1.6-3.5-.7 8c-1.1 11 0 29.9 2.9 49.5 1.3 9.1 2.2 16.7 2.1 16.9-.7.7-32.3-21.1-42.5-29.3-13-10.4-13.6-9.6-5 7.6 15.5 30.7 33.7 56.7 57.2 81.3 9.6 10.1 28.9 27.5 34.4 31.1 2.3 1.6 2.4 2 2.4 14v12.3l9.8 6.3c42.8 28 90.4 46.3 140.1 53.8 38.1 5.8 80.5 5 117.9-2.1 46.4-8.8 89.1-26 128.3-51.7l8.7-5.6.6-6.6c.3-3.6.6-9.3.6-12.6v-6.2l10.8-9c13.5-11.3 35.2-33.5 46.1-47.2 10.4-13.1 25.3-35.5 32-48.1 4.6-8.6 5.1-10.2 5.1-15.9v-6.4l-2.7 2.6c-4.7 4.3-14.7 11.5-29.6 21.4-12 8.1-14.2 9.3-14.5 7.6-.2-1 .7-8.1 1.8-15.8 2.4-15.2 3.7-46.4 2.3-52.7l-.8-3.9-3.4 8.4zm-3.6 48.3c-2 15.8-3.4 28.9-3.2 29.2.9.8 27.7-15.8 40-24.7 1.8-1.3 1.6-.7-.8 3.5-16.5 28.6-39.5 57.6-61.6 77.5-13.3 12.1-17 15.2-17.6 14.6-.3-.2-.2-2.3.2-4.4.6-3.5 1.9-5.1 10.2-12.4 11.9-10.3 28.8-28.8 39.7-43.3 13-17.3 13-17.3 5-11.9-7.5 5-21.9 12.6-22.6 11.9-.2-.3.6-8.5 1.8-18.2 1.3-9.8 2.3-18.4 2.4-19.1 0-.8-3.6 3.6-8 9.7-14.4 20.1-34.8 42-52.2 56-6.5 5.2-6.8 5.7-6.8 9.7 0 3.6-.5 4.5-3.4 6.8-1.9 1.4-3.8 2.6-4.2 2.6-.4 0-.4-3.7 0-8.3.6-7.7.8-8.3 3.8-10.7 16.8-13 34.5-30.4 47.2-46.1 8.8-10.9 22.9-32.2 28.6-43.1 2.5-4.8 4.6-8.5 4.8-8.3.1.1-1.3 13.2-3.3 29zM59 381.7c16.2 30.4 40.4 59.7 68.3 82.7l10.7 8.8v7.4c0 4.1-.3 7.4-.7 7.4-.3 0-2.1-1.1-4-2.6-3-2.2-3.2-2.9-2.7-6.2.5-3.6.4-3.8-7.3-9.8-18.2-14.3-35.8-33.1-51.4-54.7-4.6-6.4-8.4-11.5-8.5-11.4-.1.1.9 8.5 2.2 18.7 1.3 10.2 2.3 18.8 2.4 19.2.1 1.7-13.9-5.6-26.5-13.7l-3-2 1.9 3c8.9 13.9 26.3 34.2 44.2 51.4 14.1 13.5 14.5 14.1 14.2 17.6l-.3 3.7-8.5-7.4c-20.7-18.3-41.9-42.2-55.9-63.2-7.4-11-15.1-23.8-15.1-24.9 0-.4 2.5 1.1 5.5 3.4s12.2 8.1 20.3 13c11.9 7.1 14.8 8.4 15 7 .3-1.5-4.9-45.5-6.3-53.9-.3-1.7-.4-3.2-.1-3.2.2 0 2.8 4.4 5.6 9.7zm81 116.6c41.3 27.1 89.5 43.5 140.3 47.6 71 5.9 145-15.8 201.7-59.1 6.3-4.8 13-10 14.8-11.4l3.2-2.7v58.8l-8.8 5.7C443 568.6 389.5 587 332 592.1c-16.8 1.5-58.2.6-73.5-1.5-53.4-7.5-104.1-26.5-146.2-54.8l-7.3-4.9v-58.8l10.8 8.6c5.9 4.8 16.8 12.7 24.2 17.6z"/>
  <path d="M488.5 490.3c-8.8 6.8-29.7 20.3-40 26-34 18.7-72.3 30.7-112.5 35.3-19.9 2.2-59.8 1.5-78.1-1.5-50.9-8.2-96.1-26.8-134.3-55.2-5.9-4.4-10.9-7.9-11.1-7.7-.1.2-.5 9.1-.9 19.8-.8 22.8-2.3 19.6 13.4 29.2 68.9 42.2 148.1 58.5 227.6 46.8 43.7-6.4 85.9-21.6 124.4-44.6 19.2-11.5 17.1-7.5 16.8-31.5l-.3-20.5-5 3.9zM139 512.2c2.7 1.8 5 3.8 5 4.5 0 2.3-2.1 2.4-5.4.4l-3.4-2.1-1.6 2.4c-1.5 2.4-1.5 2.5 1.9 4.6 2.1 1.3 3.2 2.6 2.8 3.6-.7 1.8-1.5 1.8-5.3-.4-3-1.6-3.2-1.6-4.5.2-2.1 2.7-1.9 3.2 1.5 5.3 1.7.9 3 2.3 3 3 0 2.6-2.3 2.3-7.1-.8-3.6-2.3-4.8-3.6-4.4-4.8.6-1.7 11.8-19.1 12.3-19.1.1 0 2.5 1.5 5.2 3.2zm335.6-2c.4.6-.7 2.2-2.7 3.8-3 2.5-3.2 3-1.9 4.6.8 1.1 1.5 2.1 1.7 2.3.1.2 1.5-.6 3.1-1.8 3.6-2.5 4.8-2.6 5.6-.6.4 1.1-.6 2.2-2.9 3.6-2.9 1.7-3.3 2.4-2.5 3.9 1.6 3.1 2.9 3.3 6.5 1 1.9-1.2 3.5-1.9 3.5-1.7 0 .3.3 1.2.6 2.1.4 1.1-.9 2.4-4.2 4.6-2.6 1.6-5.1 3-5.5 3-.7 0-12.9-18.3-12.9-19.4 0-.8 8.4-6.5 9.7-6.6.6 0 1.5.5 1.9 1.2zm-315 16.5c1.4 3.1 1.4 4.2.4 7.6-1.6 5.5-6.2 9.7-10.6 9.7-3.2 0-14.7-4.8-14.2-6 .2-.3 2.8-5.1 5.7-10.7l5.5-10.2 5.7 3.1c4.2 2.1 6.2 4 7.5 6.5zm301.3-6.6c5.2 1.8 3.3 3.9-4.1 4.4-4.6.3-6.5 1.7-7.3 5.6-.8 3.5 1.4 7.4 5 9.1 3.1 1.4 7.8-.4 9.3-3.7 1-2.2 4.8-4.3 5.8-3.2 1 1-2.4 7.4-5 9.5-4.1 3.2-8 3.7-12.3 1.5-10.3-5.1-10.4-17.3-.2-22.5 4-2.1 4.6-2.1 8.8-.7zm-291.3 9c.3.6-1 4.6-3.1 9-3 6.5-3.5 8.2-2.5 9.4 2.4 2.9 4 1.4 8.2-7 2.3-4.7 4.5-8.5 4.8-8.5.3 0 1.2.4 2 1 1.2.7.8 2.3-2.6 9.7-4.3 9.5-7.1 12.1-11.7 10.9-3.2-.8-6.7-4.3-6.7-6.8 0-1 1.8-5.6 3.9-10.3 3.8-8.1 5.9-10.2 7.7-7.4zm274.1 9.9c4.8 10.3 5 11 3.1 11.5-1.1.4-2.1.5-2.3.3-.1-.1-2.5-4.8-5.3-10.3l-5.1-10 .6 12.6c.5 10 .3 12.8-.8 13.4-.9.6-3.9-1.9-10.2-8.6-8.4-8.9-8.7-9.4-6.6-10.4 1.9-.8 2.9-.2 8 5.5l5.8 6.5-.4-3.5c-.2-1.9-.6-5.8-.9-8.6l-.5-5.1 4.2-2.1c2.3-1.1 4.4-2.1 4.7-2.1.3 0 2.8 4.9 5.7 10.9zm-248.6.5c2.9 1.6 6.9 6.8 6.9 9.2 0 1.9-4.9-.3-7.2-3.2-4.2-5.3-12.8-1.9-12.8 5 0 4.9 2.9 7.5 8.3 7.6 2.3 0 5.1.4 6.2.8 1.8.7 1.7.9-1.2 2.4-8.9 4.6-18.3-1.2-18.3-11.1 0-9 9.9-14.9 18.1-10.7zm219.8 4.1c2.5 3.2 2.7 6.1.6 9.2-1.5 2.1-1.4 2.3 2.4 4.9 2.2 1.6 4 3.1 4.1 3.4 0 .4-1.2 1-2.6 1.3-2.2.6-3.4 0-6.5-3-2.1-2.1-4.1-3.5-4.4-3.2-.3.2.2 2.4 1 4.8 1.7 4.8 1.7 4.7-.9 5.2-1.7.2-2.6-1.3-5.8-10.1-2.1-5.7-3.7-10.9-3.5-11.4.4-1.4 6.5-3.5 10.4-3.6 2.3-.1 3.7.6 5.2 2.5zm-18.5 2.9c.3.9 0 1.8-.7 2-6.7 2.4-6.8 2.5-6.1 4.8.9 3.1.9 3.1 4.5 1.8 4.2-1.5 4.6-1.4 5.2.8.3 1.5-.4 2.1-3.4 3-4.1 1.3-4.2 1.4-3.3 4.9.4 1.5 1.2 2.1 2.3 1.8 5.9-1.8 6.8-1.7 7.3.2.5 1.7-.3 2.2-5.1 3.6-3.2.9-6 1.6-6.4 1.6-.7 0-7.8-22.2-7.3-22.7.6-.6 9-3.1 10.7-3.2.9-.1 2 .6 2.3 1.4zm-181 .3c1.1 1.8 1.9 25.2.8 25.2-2.7 0-4.2-1.4-4.2-3.9 0-2.3-.6-2.8-4.2-3.8-3.8-1-4.5-.9-6.4.8-1.8 1.7-5.4 1.8-5.4.2 0-.2 3.5-4.7 7.8-9.9 7-8.5 10.2-10.9 11.6-8.6zm13.1 2.8c3.6.9 6.5 1.9 6.5 2.3-.1 1.7-1.9 3.2-3.6 2.9-1.6-.3-2.2 1.1-4.3 8.9-2.2 8.5-2.6 9.3-4.8 9.3-1.8 0-2.3-.4-1.9-1.8.3-.9 1.2-4.6 2.1-8.2.9-3.6 1.8-7.2 2.1-8.1.3-1.1-.3-1.8-1.6-2.2-1.2-.3-2-1.3-2-2.6 0-2.5-.4-2.5 7.5-.5zm152 2.4c2.6 2.9.6 4.9-3 3-1.9-1-2.8-1.1-3.7-.2-1.9 1.9 0 4.1 4.2 4.8 4.6.7 6.7 2.4 7.6 5.8 1.2 4.8-2.9 9.6-8.2 9.6-1.7 0-6.4-4.4-6.4-6 0-1.5 3.1-1.2 5 .5 2.2 2 5 .9 5-2 0-2.4-1.7-3.5-5.1-3.5-2.8 0-6.9-4.4-6.9-7.5 0-5.6 7.7-8.7 11.5-4.5zM241 553.2c-.1.7-1.1 6-2.4 11.8-1.6 7.5-2.7 10.6-3.8 10.8-2.9.6-3-1.6-.7-12.8 2.1-10.2 2.5-11 4.6-11 1.3 0 2.3.6 2.3 1.2zm19.8 3.6c9.1 5.9 5.5 20.6-5.6 22.8-4.1.8-9.8-1.9-12.2-5.8-7.1-11.7 6.3-24.6 17.8-17zm95 .2c2.8 2.7 2.9 7.6.1 10.6l-2.1 2.2 3.6 4 3.6 4-2.5.4c-2 .4-3.3-.4-6.6-4.1l-4-4.6.6 5.2c.7 5.1.6 5.3-1.8 5.3-2.3 0-2.5-.5-3.6-8.3-.6-4.5-1.4-9.9-1.7-11.9-.6-3.4-.5-3.7 2.2-4.1 6.9-1 10.1-.7 12.2 1.3zm-78.6 7.5c2.4 4.1 4.6 7.5 5.1 7.5.4 0 .7-3.2.7-7 0-6.8.1-7 2.6-7h2.5l-.7 11.2c-.4 6.2-.9 11.8-1.3 12.4-1.3 2.5-4.9-.7-8.6-7.7-4.3-8.2-5.3-7.8-5.4 1.8-.1 5-.2 5.3-2.7 5.3h-2.5l.6-8.8c.9-13.6 1.3-15.2 3.5-15.2 1.4 0 3.2 2.2 6.2 7.5zm56.3-5.9c1.9.9 4.2 2.8 5.1 4.2 2 3.1 2.3 9.7.5 13-1.9 3.5-7 6.2-11.9 6.2-3.6 0-5-.6-7.7-3.3-6.4-6.4-5.1-16 2.6-19.9 4.2-2.2 7.1-2.3 11.4-.2zm-19.8 2.8c-.4 1.1-1.9 1.6-4.7 1.6-3.9 0-4.1.2-3.8 2.7.3 2.4.7 2.7 4.3 2.7 3.3.1 4 .4 4 2.1 0 1.6-.8 2.1-4.2 2.3l-4.3.3v5c0 4.1-.3 4.9-1.9 4.9-1.5 0-1.9-1.1-2.5-7.7-.3-4.2-.6-9.5-.6-11.9v-4.3l6.3-.3c6.7-.3 8.3.2 7.4 2.6z"/>
  <path d="M144.7 530l-3.7 6.9 2.9 1.6c1.7.8 3.8 1.5 4.9 1.5 2.7 0 6.2-4.2 6.8-8.2.5-3 .2-3.8-2.6-6.1-1.7-1.5-3.5-2.7-3.8-2.7-.4 0-2.4 3.2-4.5 7zM405.4 545.6c-1.9.8.5 7.4 2.6 7.4 4.5 0 5.5-7.3 1-7.7-1.4-.1-3 0-3.6.3zM209.1 555.6c-2.7 3.4-2.6 4.1.4 4.6 2.3.5 2.5.2 2.5-3.3 0-2.2-.2-3.9-.4-3.9-.3 0-1.4 1.2-2.5 2.6zM250.3 560c-4.7 1.9-5.7 8.7-1.8 12.5 1.3 1.4 3.6 2.5 5 2.5 3.5 0 7.5-4.2 7.5-7.8 0-5.5-5.6-9.3-10.7-7.2zM346.6 562.7c.8 4.7.8 4.7 3.7 3.9 5.2-1.3 4-7.6-1.4-7.6-2.9 0-3 .1-2.3 3.7zM322.9 563.9c-1.6 1.3-2.3 2.9-2.3 5.4 0 4.9 2.7 7.7 7.4 7.7s7.4-2.8 7.4-7.7c0-4.2-3.1-7.3-7.4-7.3-1.5 0-3.8.8-5.1 1.9z"/>
</svg>`;
},{}],"components/side_nav/MenuHeader.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svgs = require("../../assets/svgs.ts");

var _logo = require("../../assets/logo.ts");

var _main_store = require("../../main_store.ts");

var _svelte = require("svelte");

/* components/side_nav/MenuHeader.svelte generated by Svelte v3.23.2 */
const file = "components/side_nav/MenuHeader.svelte";

const get_menu_toggle_slot_changes = dirty => ({});

const get_menu_toggle_slot_context = ctx => ({});

const get_logo_name_slot_changes = dirty => ({});

const get_logo_name_slot_context = ctx => ({});

const get_logo_slot_changes = dirty => ({});

const get_logo_slot_context = ctx => ({}); // (27:22)        


function fallback_block_3(ctx) {
  let span;
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      (0, _internal.attr_dev)(span, "class", "logo");
      (0, _internal.add_location)(span, file, 27, 6, 681);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      span.innerHTML = _logo.logo;
    },
    p: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block_3.name,
    type: "fallback",
    source: "(27:22)        ",
    ctx
  });
  return block;
} // (32:4) {#if $MENU_WIDTH === '70'}


function create_if_block(ctx) {
  let span;
  let t;
  let current;
  const logo_name_slot_template =
  /*$$slots*/
  ctx[7]["logo-name"];
  const logo_name_slot = (0, _internal.create_slot)(logo_name_slot_template, ctx,
  /*$$scope*/
  ctx[6], get_logo_name_slot_context);
  const logo_name_slot_or_fallback = logo_name_slot || fallback_block_2(ctx);
  const menu_toggle_slot_template =
  /*$$slots*/
  ctx[7]["menu-toggle "];
  const menu_toggle_slot = (0, _internal.create_slot)(menu_toggle_slot_template, ctx,
  /*$$scope*/
  ctx[6], get_menu_toggle_slot_context);
  const menu_toggle_slot_or_fallback = menu_toggle_slot || fallback_block_1(ctx);
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      if (logo_name_slot_or_fallback) logo_name_slot_or_fallback.c();
      t = (0, _internal.space)();
      if (menu_toggle_slot_or_fallback) menu_toggle_slot_or_fallback.c();
      (0, _internal.attr_dev)(span, "class", "px-2 text-lg font-semibold select-none logo-name font-mons text-cararra");
      (0, _internal.add_location)(span, file, 32, 6, 785);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);

      if (logo_name_slot_or_fallback) {
        logo_name_slot_or_fallback.m(span, null);
      }

      (0, _internal.insert_dev)(target, t, anchor);

      if (menu_toggle_slot_or_fallback) {
        menu_toggle_slot_or_fallback.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (logo_name_slot) {
        if (logo_name_slot.p && dirty &
        /*$$scope*/
        64) {
          (0, _internal.update_slot)(logo_name_slot, logo_name_slot_template, ctx,
          /*$$scope*/
          ctx[6], dirty, get_logo_name_slot_changes, get_logo_name_slot_context);
        }
      }

      if (menu_toggle_slot) {
        if (menu_toggle_slot.p && dirty &
        /*$$scope*/
        64) {
          (0, _internal.update_slot)(menu_toggle_slot, menu_toggle_slot_template, ctx,
          /*$$scope*/
          ctx[6], dirty, get_menu_toggle_slot_changes, get_menu_toggle_slot_context);
        }
      } else {
        if (menu_toggle_slot_or_fallback && menu_toggle_slot_or_fallback.p && dirty &
        /*$APP_WIDTH, $MARGIN_LEFT, open, $TOGGLE_ICON*/
        27) {
          menu_toggle_slot_or_fallback.p(ctx, dirty);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(logo_name_slot_or_fallback, local);
      (0, _internal.transition_in)(menu_toggle_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(logo_name_slot_or_fallback, local);
      (0, _internal.transition_out)(menu_toggle_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
      if (logo_name_slot_or_fallback) logo_name_slot_or_fallback.d(detaching);
      if (detaching) (0, _internal.detach_dev)(t);
      if (menu_toggle_slot_or_fallback) menu_toggle_slot_or_fallback.d(detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(32:4) {#if $MENU_WIDTH === '70'}",
    ctx
  });
  return block;
} // (36:31) Idel-Sekondi


function fallback_block_2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = (0, _internal.text)("Idel-Sekondi");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(t);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block_2.name,
    type: "fallback",
    source: "(36:31) Idel-Sekondi",
    ctx
  });
  return block;
} // (38:32)          


function fallback_block_1(ctx) {
  let span;
  let raw_value = (0, _svgs.SVG)(
  /*$TOGGLE_ICON*/
  ctx[4], "stroke-current hover:text-primary text-cararra w-5 h-5") + "";
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      (0, _internal.attr_dev)(span, "class", "mr-3 cursor-pointer select-none menu-toggle");
      (0, _internal.add_location)(span, file, 38, 8, 993);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      span.innerHTML = raw_value;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(span, "click",
        /*click_handler*/
        ctx[8], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*$TOGGLE_ICON*/
      16 && raw_value !== (raw_value = (0, _svgs.SVG)(
      /*$TOGGLE_ICON*/
      ctx[4], "stroke-current hover:text-primary text-cararra w-5 h-5") + "")) span.innerHTML = raw_value;
      ;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block_1.name,
    type: "fallback",
    source: "(38:32)          ",
    ctx
  });
  return block;
} // (22:6)    


function fallback_block(ctx) {
  let div;
  let t;
  let current;
  let mounted;
  let dispose;
  const logo_slot_template =
  /*$$slots*/
  ctx[7].logo;
  const logo_slot = (0, _internal.create_slot)(logo_slot_template, ctx,
  /*$$scope*/
  ctx[6], get_logo_slot_context);
  const logo_slot_or_fallback = logo_slot || fallback_block_3(ctx);
  let if_block =
  /*$MENU_WIDTH*/
  ctx[2] === "70" && create_if_block(ctx);
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      if (logo_slot_or_fallback) logo_slot_or_fallback.c();
      t = (0, _internal.space)();
      if (if_block) if_block.c();
      (0, _internal.attr_dev)(div, "class", "flex items-center justify-between pt-3 pb-1 cursor-pointer select-none menu-header");
      (0, _internal.add_location)(div, file, 22, 2, 522);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      if (logo_slot_or_fallback) {
        logo_slot_or_fallback.m(div, null);
      }

      (0, _internal.append_dev)(div, t);
      if (if_block) if_block.m(div, null);
      current = true;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(div, "click", click_handler_1, false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (logo_slot) {
        if (logo_slot.p && dirty &
        /*$$scope*/
        64) {
          (0, _internal.update_slot)(logo_slot, logo_slot_template, ctx,
          /*$$scope*/
          ctx[6], dirty, get_logo_slot_changes, get_logo_slot_context);
        }
      }

      if (
      /*$MENU_WIDTH*/
      ctx[2] === "70") {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*$MENU_WIDTH*/
          4) {
            (0, _internal.transition_in)(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          (0, _internal.transition_in)(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block, 1, 1, () => {
          if_block = null;
        });
        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(logo_slot_or_fallback, local);
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(logo_slot_or_fallback, local);
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      if (logo_slot_or_fallback) logo_slot_or_fallback.d(detaching);
      if (if_block) if_block.d();
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(22:6)    ",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let current;
  const default_slot_template =
  /*$$slots*/
  ctx[7].default;
  const default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[6], null);
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  const block = {
    c: function create() {
      if (default_slot_or_fallback) default_slot_or_fallback.c();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, [dirty]) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        64) {
          (0, _internal.update_slot)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[6], dirty, null, null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && dirty &
        /*$APP_WIDTH, $MARGIN_LEFT, open, $TOGGLE_ICON, $$scope, $MENU_WIDTH*/
        95) {
          default_slot_or_fallback.p(ctx, dirty);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

const click_handler_1 = () => {};

function instance($$self, $$props, $$invalidate) {
  let $APP_WIDTH;
  let $MINI_MENU;
  let $MENU_WIDTH;
  let $MARGIN_LEFT;
  let $TOGGLE_ICON;
  (0, _internal.validate_store)(_main_store.APP_WIDTH, "APP_WIDTH");
  (0, _internal.component_subscribe)($$self, _main_store.APP_WIDTH, $$value => $$invalidate(1, $APP_WIDTH = $$value));
  (0, _internal.validate_store)(_main_store.MINI_MENU, "MINI_MENU");
  (0, _internal.component_subscribe)($$self, _main_store.MINI_MENU, $$value => $$invalidate(9, $MINI_MENU = $$value));
  (0, _internal.validate_store)(_main_store.MENU_WIDTH, "MENU_WIDTH");
  (0, _internal.component_subscribe)($$self, _main_store.MENU_WIDTH, $$value => $$invalidate(2, $MENU_WIDTH = $$value));
  (0, _internal.validate_store)(_main_store.MARGIN_LEFT, "MARGIN_LEFT");
  (0, _internal.component_subscribe)($$self, _main_store.MARGIN_LEFT, $$value => $$invalidate(3, $MARGIN_LEFT = $$value));
  (0, _internal.validate_store)(_main_store.TOGGLE_ICON, "TOGGLE_ICON");
  (0, _internal.component_subscribe)($$self, _main_store.TOGGLE_ICON, $$value => $$invalidate(4, $TOGGLE_ICON = $$value));
  let dispatch = (0, _svelte.createEventDispatcher)();
  let {
    open = false
  } = $$props;
  const writable_props = ["open"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<MenuHeader> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("MenuHeader", $$slots, ['logo', 'logo-name', 'menu-toggle ', 'default']);

  const click_handler = () => {
    if ($APP_WIDTH >= 1024) {
      if ($MARGIN_LEFT === "70") {
        _main_store.MARGIN_LEFT.set("20");

        _main_store.MINI_MENU.set(true);
      } else {
        _main_store.MARGIN_LEFT.set("70");

        _main_store.MINI_MENU.set(false);
      }
    } else {
      _main_store.MENU_WIDTH.set("70");

      _main_store.MARGIN_LEFT.set("20");

      _main_store.MINI_MENU.set(false);

      $$invalidate(0, open = false);
      dispatch("toggle", false);
    }
  };

  $$self.$set = $$props => {
    if ("open" in $$props) $$invalidate(0, open = $$props.open);
    if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    SVG: _svgs.SVG,
    logo: _logo.logo,
    APP_WIDTH: _main_store.APP_WIDTH,
    TOGGLE_ICON: _main_store.TOGGLE_ICON,
    MENU_WIDTH: _main_store.MENU_WIDTH,
    MARGIN_LEFT: _main_store.MARGIN_LEFT,
    MINI_MENU: _main_store.MINI_MENU,
    createEventDispatcher: _svelte.createEventDispatcher,
    dispatch,
    open,
    $APP_WIDTH,
    $MINI_MENU,
    $MENU_WIDTH,
    $MARGIN_LEFT,
    $TOGGLE_ICON
  });

  $$self.$inject_state = $$props => {
    if ("dispatch" in $$props) $$invalidate(5, dispatch = $$props.dispatch);
    if ("open" in $$props) $$invalidate(0, open = $$props.open);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*$APP_WIDTH, $MINI_MENU*/
    514) {
      $: {
        if ($APP_WIDTH >= 1024) {
          if ($MINI_MENU) _main_store.TOGGLE_ICON.set("circle");else _main_store.TOGGLE_ICON.set("disc");
        } else _main_store.TOGGLE_ICON.set("close");
      }
    }
  };

  return [open, $APP_WIDTH, $MENU_WIDTH, $MARGIN_LEFT, $TOGGLE_ICON, dispatch, $$scope, $$slots, click_handler];
}

class MenuHeader extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      open: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "MenuHeader",
      options,
      id: create_fragment.name
    });
  }

  get open() {
    throw new Error("<MenuHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set open(value) {
    throw new Error("<MenuHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = MenuHeader;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","../../assets/svgs.ts":"assets/svgs.ts","../../assets/logo.ts":"assets/logo.ts","../../main_store.ts":"main_store.ts","svelte":"../node_modules/svelte/index.mjs"}],"components/form_builder/form_options.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"components/input_field/TextField.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svgs = require("../../assets/svgs");

var _svelte = require("svelte");

/* components/input_field/TextField.svelte generated by Svelte v3.23.2 */
const {
  console: console_1
} = _internal.globals;
const file = "components/input_field/TextField.svelte";

const get_endIcon_slot_changes = dirty => ({});

const get_endIcon_slot_context = ctx => ({});

const get_startIcon_slot_changes = dirty => ({});

const get_startIcon_slot_context = ctx => ({}); // (66:2) {#if variant==='normal'}


function create_if_block_4(ctx) {
  let label_1;
  let t;
  let label_1_class_value;
  const block = {
    c: function create() {
      label_1 = (0, _internal.element)("label");
      t = (0, _internal.text)(
      /*label*/
      ctx[3]);
      (0, _internal.attr_dev)(label_1, "for",
      /*id*/
      ctx[1]);
      (0, _internal.attr_dev)(label_1, "class", label_1_class_value = "pl-1 text-xs select-none text-" + (
      /*active*/
      ctx[29] ?
      /*colors*/
      ctx[11][1] :
      /*colors*/
      ctx[11][2]));
      (0, _internal.add_location)(label_1, file, 66, 2, 2013);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, label_1, anchor);
      (0, _internal.append_dev)(label_1, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*label*/
      8) (0, _internal.set_data_dev)(t,
      /*label*/
      ctx[3]);

      if (dirty[0] &
      /*id*/
      2) {
        (0, _internal.attr_dev)(label_1, "for",
        /*id*/
        ctx[1]);
      }

      if (dirty[0] &
      /*active, colors*/
      536872960 && label_1_class_value !== (label_1_class_value = "pl-1 text-xs select-none text-" + (
      /*active*/
      ctx[29] ?
      /*colors*/
      ctx[11][1] :
      /*colors*/
      ctx[11][2]))) {
        (0, _internal.attr_dev)(label_1, "class", label_1_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(label_1);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: "(66:2) {#if variant==='normal'}",
    ctx
  });
  return block;
} // (74:4) {#if startIcon}


function create_if_block_3(ctx) {
  let span;
  let span_class_value;
  let current;
  let mounted;
  let dispose;
  const startIcon_slot_template =
  /*$$slots*/
  ctx[37].startIcon;
  const startIcon_slot = (0, _internal.create_slot)(startIcon_slot_template, ctx,
  /*$$scope*/
  ctx[36], get_startIcon_slot_context);
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      if (startIcon_slot) startIcon_slot.c();
      (0, _internal.attr_dev)(span, "class", span_class_value = "absolute select-none top-" +
      /*top*/
      ctx[32] + " left-1 " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]}` : `text-${
      /*colors*/
      ctx[11][2]}`) + "\n        " +
      /*iconsClass*/
      ctx[26] + "\n        " +
      /*leadingIconClass*/
      ctx[27]);
      (0, _internal.add_location)(span, file, 74, 6, 2371);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);

      if (startIcon_slot) {
        startIcon_slot.m(span, null);
      }

      current = true;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(span, "click",
        /*click_handler*/
        ctx[38], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (startIcon_slot) {
        if (startIcon_slot.p && dirty[1] &
        /*$$scope*/
        32) {
          (0, _internal.update_slot)(startIcon_slot, startIcon_slot_template, ctx,
          /*$$scope*/
          ctx[36], dirty, get_startIcon_slot_changes, get_startIcon_slot_context);
        }
      }

      if (!current || dirty[0] &
      /*active, colors*/
      536872960 | dirty[1] &
      /*top*/
      2 && span_class_value !== (span_class_value = "absolute select-none top-" +
      /*top*/
      ctx[32] + " left-1 " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]}` : `text-${
      /*colors*/
      ctx[11][2]}`) + "\n        " +
      /*iconsClass*/
      ctx[26] + "\n        " +
      /*leadingIconClass*/
      ctx[27])) {
        (0, _internal.attr_dev)(span, "class", span_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(startIcon_slot, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(startIcon_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
      if (startIcon_slot) startIcon_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(74:4) {#if startIcon}",
    ctx
  });
  return block;
} // (89:4) {#if variant !== 'normal'}


function create_if_block_2(ctx) {
  let label_1;
  let t;
  let label_1_class_value;
  const block = {
    c: function create() {
      label_1 = (0, _internal.element)("label");
      t = (0, _internal.text)(
      /*label*/
      ctx[3]);
      (0, _internal.attr_dev)(label_1, "for",
      /*id*/
      ctx[1]);
      (0, _internal.attr_dev)(label_1, "class", label_1_class_value = " select-none leading-none absolute top-" +
      /*top*/
      ctx[32] + " text-sm " + (
      /*startIcon*/
      ctx[15] ? "left-8" : "left-1") + "\n        inline-block w-auto m-0 px-2 py-0 origin-center transition duration-300\n        bg-" +
      /*colors*/
      ctx[11][0] + " bg-transparent " + (
      /*float*/
      ctx[30] ? `transform translate-x-0 -translate-y-${
      /*variant*/
      ctx[14] === "outlined" ?
      /*top*/
      ctx[32] + 2 :
      /*top*/
      ctx[32] - 1} scale-90 ` : "") + "\n        " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]}` : `text-${
      /*colors*/
      ctx[11][2]}`) + "\n        " +
      /*labelClass*/
      ctx[24]);
      (0, _internal.add_location)(label_1, file, 89, 4, 2833);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, label_1, anchor);
      (0, _internal.append_dev)(label_1, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*label*/
      8) (0, _internal.set_data_dev)(t,
      /*label*/
      ctx[3]);

      if (dirty[0] &
      /*id*/
      2) {
        (0, _internal.attr_dev)(label_1, "for",
        /*id*/
        ctx[1]);
      }

      if (dirty[0] &
      /*startIcon, colors, float, variant, active*/
      1610663936 | dirty[1] &
      /*top*/
      2 && label_1_class_value !== (label_1_class_value = " select-none leading-none absolute top-" +
      /*top*/
      ctx[32] + " text-sm " + (
      /*startIcon*/
      ctx[15] ? "left-8" : "left-1") + "\n        inline-block w-auto m-0 px-2 py-0 origin-center transition duration-300\n        bg-" +
      /*colors*/
      ctx[11][0] + " bg-transparent " + (
      /*float*/
      ctx[30] ? `transform translate-x-0 -translate-y-${
      /*variant*/
      ctx[14] === "outlined" ?
      /*top*/
      ctx[32] + 2 :
      /*top*/
      ctx[32] - 1} scale-90 ` : "") + "\n        " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]}` : `text-${
      /*colors*/
      ctx[11][2]}`) + "\n        " +
      /*labelClass*/
      ctx[24])) {
        (0, _internal.attr_dev)(label_1, "class", label_1_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(label_1);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(89:4) {#if variant !== 'normal'}",
    ctx
  });
  return block;
} // (134:4) {#if endIcon}


function create_if_block_1(ctx) {
  let span;
  let span_class_value;
  let current;
  let mounted;
  let dispose;
  const endIcon_slot_template =
  /*$$slots*/
  ctx[37].endIcon;
  const endIcon_slot = (0, _internal.create_slot)(endIcon_slot_template, ctx,
  /*$$scope*/
  ctx[36], get_endIcon_slot_context);
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      if (endIcon_slot) endIcon_slot.c();
      (0, _internal.attr_dev)(span, "class", span_class_value = "absolute select-none top-" +
      /*top*/
      ctx[32] + " right-2 " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]}` : `text-${
      /*colors*/
      ctx[11][2]}`) + "\n        " +
      /*iconsClass*/
      ctx[26] + "\n        " +
      /*trailingIconClass*/
      ctx[28]);
      (0, _internal.add_location)(span, file, 134, 6, 4172);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);

      if (endIcon_slot) {
        endIcon_slot.m(span, null);
      }

      current = true;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(span, "click",
        /*click_handler_1*/
        ctx[42], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (endIcon_slot) {
        if (endIcon_slot.p && dirty[1] &
        /*$$scope*/
        32) {
          (0, _internal.update_slot)(endIcon_slot, endIcon_slot_template, ctx,
          /*$$scope*/
          ctx[36], dirty, get_endIcon_slot_changes, get_endIcon_slot_context);
        }
      }

      if (!current || dirty[0] &
      /*active, colors*/
      536872960 | dirty[1] &
      /*top*/
      2 && span_class_value !== (span_class_value = "absolute select-none top-" +
      /*top*/
      ctx[32] + " right-2 " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]}` : `text-${
      /*colors*/
      ctx[11][2]}`) + "\n        " +
      /*iconsClass*/
      ctx[26] + "\n        " +
      /*trailingIconClass*/
      ctx[28])) {
        (0, _internal.attr_dev)(span, "class", span_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(endIcon_slot, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(endIcon_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
      if (endIcon_slot) endIcon_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(134:4) {#if endIcon}",
    ctx
  });
  return block;
} // (150:2) {#if hint !== ''}


function create_if_block(ctx) {
  let div;
  let p;
  let t;
  let div_class_value;
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      p = (0, _internal.element)("p");
      t = (0, _internal.text)(
      /*hint*/
      ctx[5]);
      (0, _internal.add_location)(p, file, 151, 6, 4704);
      (0, _internal.attr_dev)(div, "class", div_class_value = "block mx-3 py-1 text-xs select-none truncate " +
      /*hintClass*/
      ctx[25]);
      (0, _internal.add_location)(div, file, 150, 4, 4627);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      (0, _internal.append_dev)(div, p);
      (0, _internal.append_dev)(p, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*hint*/
      32) (0, _internal.set_data_dev)(t,
      /*hint*/
      ctx[5]);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(150:2) {#if hint !== ''}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div1;
  let t0;
  let div0;
  let t1;
  let t2;
  let input;
  let input_placeholder_value;
  let input_class_value;
  let t3;
  let div0_class_value;
  let div0_resize_listener;
  let t4;
  let div1_class_value;
  let current;
  let mounted;
  let dispose;
  let if_block0 =
  /*variant*/
  ctx[14] === "normal" && create_if_block_4(ctx);
  let if_block1 =
  /*startIcon*/
  ctx[15] && create_if_block_3(ctx);
  let if_block2 =
  /*variant*/
  ctx[14] !== "normal" && create_if_block_2(ctx);
  let if_block3 =
  /*endIcon*/
  ctx[16] && create_if_block_1(ctx);
  let if_block4 =
  /*hint*/
  ctx[5] !== "" && create_if_block(ctx);
  const block = {
    c: function create() {
      div1 = (0, _internal.element)("div");
      if (if_block0) if_block0.c();
      t0 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");
      if (if_block1) if_block1.c();
      t1 = (0, _internal.space)();
      if (if_block2) if_block2.c();
      t2 = (0, _internal.space)();
      input = (0, _internal.element)("input");
      t3 = (0, _internal.space)();
      if (if_block3) if_block3.c();
      t4 = (0, _internal.space)();
      if (if_block4) if_block4.c();
      (0, _internal.attr_dev)(input, "id",
      /*id*/
      ctx[1]);
      (0, _internal.attr_dev)(input, "name",
      /*name*/
      ctx[2]);
      (0, _internal.attr_dev)(input, "min",
      /*min*/
      ctx[7]);
      (0, _internal.attr_dev)(input, "max",
      /*max*/
      ctx[8]);
      (0, _internal.attr_dev)(input, "step",
      /*step*/
      ctx[9]);
      (0, _internal.attr_dev)(input, "type",
      /*type*/
      ctx[6]);
      input.readOnly =
      /*readonly*/
      ctx[10];
      (0, _internal.attr_dev)(input, "autocomplete", "off");
      (0, _internal.attr_dev)(input, "placeholder", input_placeholder_value =
      /*variant*/
      ctx[14] === "normal" ?
      /*placeholder*/
      ctx[4] : "");
      (0, _internal.attr_dev)(input, "class", input_class_value = " block w-full " +
      /*height*/
      ctx[13] + "\n      " + (
      /*startIcon*/
      ctx[15] ? "pl-10" : "px-4") + "\n      " + (
      /*endIcon*/
      ctx[16] ? "pr-10" : "px-4") + " m-0 leading-none transition duration-300\n      ease-in-out bg-transparent outline-none border-none " +
      /*inputClass*/
      ctx[23]);
      (0, _internal.add_location)(input, file, 100, 4, 3325);
      (0, _internal.attr_dev)(div0, "class", div0_class_value = "" + (
      /*variantStyle*/
      ctx[33] + "\n    " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]} border-${
      /*colors*/
      ctx[11][1]}` :
      /*variant*/
      ctx[14] === "normal" ? `text-${
      /*colors*/
      ctx[11][2]} border-transparent` : `text-${
      /*colors*/
      ctx[11][2]} border-${
      /*colors*/
      ctx[11][2]}`)));
      (0, _internal.add_render_callback)(() =>
      /*div0_elementresize_handler*/
      ctx[43].call(div0));
      (0, _internal.add_location)(div0, file, 68, 2, 2124);
      (0, _internal.attr_dev)(div1, "class", div1_class_value = " " +
      /*width*/
      ctx[12] + " " +
      /*wrapperClass*/
      ctx[22]);
      (0, _internal.add_location)(div1, file, 64, 0, 1946);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div1, anchor);
      if (if_block0) if_block0.m(div1, null);
      (0, _internal.append_dev)(div1, t0);
      (0, _internal.append_dev)(div1, div0);
      if (if_block1) if_block1.m(div0, null);
      (0, _internal.append_dev)(div0, t1);
      if (if_block2) if_block2.m(div0, null);
      (0, _internal.append_dev)(div0, t2);
      (0, _internal.append_dev)(div0, input);
      (0, _internal.append_dev)(div0, t3);
      if (if_block3) if_block3.m(div0, null);
      div0_resize_listener = (0, _internal.add_resize_listener)(div0,
      /*div0_elementresize_handler*/
      ctx[43].bind(div0));
      (0, _internal.append_dev)(div1, t4);
      if (if_block4) if_block4.m(div1, null);
      current = true;

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(input, "blur",
        /*blur_handler*/
        ctx[39], false, false, false), (0, _internal.listen_dev)(input, "input",
        /*input_handler*/
        ctx[40], false, false, false), (0, _internal.listen_dev)(input, "focus",
        /*focus_handler*/
        ctx[41], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (
      /*variant*/
      ctx[14] === "normal") {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_4(ctx);
          if_block0.c();
          if_block0.m(div1, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*startIcon*/
      ctx[15]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty[0] &
          /*startIcon*/
          32768) {
            (0, _internal.transition_in)(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_3(ctx);
          if_block1.c();
          (0, _internal.transition_in)(if_block1, 1);
          if_block1.m(div0, t1);
        }
      } else if (if_block1) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        (0, _internal.check_outros)();
      }

      if (
      /*variant*/
      ctx[14] !== "normal") {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block_2(ctx);
          if_block2.c();
          if_block2.m(div0, t2);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }

      if (!current || dirty[0] &
      /*id*/
      2) {
        (0, _internal.attr_dev)(input, "id",
        /*id*/
        ctx[1]);
      }

      if (!current || dirty[0] &
      /*name*/
      4) {
        (0, _internal.attr_dev)(input, "name",
        /*name*/
        ctx[2]);
      }

      if (!current || dirty[0] &
      /*min*/
      128) {
        (0, _internal.attr_dev)(input, "min",
        /*min*/
        ctx[7]);
      }

      if (!current || dirty[0] &
      /*max*/
      256) {
        (0, _internal.attr_dev)(input, "max",
        /*max*/
        ctx[8]);
      }

      if (!current || dirty[0] &
      /*step*/
      512) {
        (0, _internal.attr_dev)(input, "step",
        /*step*/
        ctx[9]);
      }

      if (!current || dirty[0] &
      /*type*/
      64) {
        (0, _internal.attr_dev)(input, "type",
        /*type*/
        ctx[6]);
      }

      if (!current || dirty[0] &
      /*readonly*/
      1024) {
        (0, _internal.prop_dev)(input, "readOnly",
        /*readonly*/
        ctx[10]);
      }

      if (!current || dirty[0] &
      /*variant, placeholder*/
      16400 && input_placeholder_value !== (input_placeholder_value =
      /*variant*/
      ctx[14] === "normal" ?
      /*placeholder*/
      ctx[4] : "")) {
        (0, _internal.attr_dev)(input, "placeholder", input_placeholder_value);
      }

      if (!current || dirty[0] &
      /*height, startIcon, endIcon*/
      106496 && input_class_value !== (input_class_value = " block w-full " +
      /*height*/
      ctx[13] + "\n      " + (
      /*startIcon*/
      ctx[15] ? "pl-10" : "px-4") + "\n      " + (
      /*endIcon*/
      ctx[16] ? "pr-10" : "px-4") + " m-0 leading-none transition duration-300\n      ease-in-out bg-transparent outline-none border-none " +
      /*inputClass*/
      ctx[23])) {
        (0, _internal.attr_dev)(input, "class", input_class_value);
      }

      if (
      /*endIcon*/
      ctx[16]) {
        if (if_block3) {
          if_block3.p(ctx, dirty);

          if (dirty[0] &
          /*endIcon*/
          65536) {
            (0, _internal.transition_in)(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block_1(ctx);
          if_block3.c();
          (0, _internal.transition_in)(if_block3, 1);
          if_block3.m(div0, null);
        }
      } else if (if_block3) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        (0, _internal.check_outros)();
      }

      if (!current || dirty[0] &
      /*active, colors, variant*/
      536889344 | dirty[1] &
      /*variantStyle*/
      4 && div0_class_value !== (div0_class_value = "" + (
      /*variantStyle*/
      ctx[33] + "\n    " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]} border-${
      /*colors*/
      ctx[11][1]}` :
      /*variant*/
      ctx[14] === "normal" ? `text-${
      /*colors*/
      ctx[11][2]} border-transparent` : `text-${
      /*colors*/
      ctx[11][2]} border-${
      /*colors*/
      ctx[11][2]}`)))) {
        (0, _internal.attr_dev)(div0, "class", div0_class_value);
      }

      if (
      /*hint*/
      ctx[5] !== "") {
        if (if_block4) {
          if_block4.p(ctx, dirty);
        } else {
          if_block4 = create_if_block(ctx);
          if_block4.c();
          if_block4.m(div1, null);
        }
      } else if (if_block4) {
        if_block4.d(1);
        if_block4 = null;
      }

      if (!current || dirty[0] &
      /*width*/
      4096 && div1_class_value !== (div1_class_value = " " +
      /*width*/
      ctx[12] + " " +
      /*wrapperClass*/
      ctx[22])) {
        (0, _internal.attr_dev)(div1, "class", div1_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block1);
      (0, _internal.transition_in)(if_block3);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block1);
      (0, _internal.transition_out)(if_block3);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div1);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
      if (if_block3) if_block3.d();
      div0_resize_listener();
      if (if_block4) if_block4.d();
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  const dispatch = (0, _svelte.createEventDispatcher)();
  let active = false;
  let float = false;
  let {
    id = ""
  } = $$props;
  let {
    name = ""
  } = $$props;
  let {
    label = ""
  } = $$props;
  let {
    placeholder = ""
  } = $$props;
  let {
    value = ""
  } = $$props;
  let {
    hint = ""
  } = $$props;
  let {
    type = "text"
  } = $$props;
  let {
    min = 0
  } = $$props;
  let {
    max = 10000000
  } = $$props;
  let {
    step = 1
  } = $$props;
  let {
    readonly = false
  } = $$props;
  let {
    colors = ["comet", "primary", "cadetblue"]
  } = $$props; //bg, focus, blur

  let {
    width = "w-full"
  } = $$props;
  let {
    height = "h-8"
  } = $$props;
  let {
    variant = "normal"
  } = $$props; //|"standard" | "outlined"

  let {
    startIcon = false
  } = $$props;
  let {
    endIcon = false
  } = $$props;
  let {
    validators = []
  } = $$props;
  let {
    onInput = null
  } = $$props;
  let {
    onFocus = null
  } = $$props;
  let {
    onBlur = null
  } = $$props;
  let {
    onStartIconClicked = null
  } = $$props;
  let {
    onEndIconClicked = null
  } = $$props;
  const wrapperClass = "mb-5";
  const inputClass = ``;
  const labelClass = "";
  const hintClass = "text-red-600";
  const iconsClass = "";
  const leadingIconClass = active ? ` text-${colors[1]} ` : ` text-${colors[2]} `;
  const trailingIconClass = active ? ` text-${colors[1]} ` : ` text-${colors[2]} `;
  let h, top;
  let variantStyle;
  const writable_props = ["id", "name", "label", "placeholder", "value", "hint", "type", "min", "max", "step", "readonly", "colors", "width", "height", "variant", "startIcon", "endIcon", "validators", "onInput", "onFocus", "onBlur", "onStartIconClicked", "onEndIconClicked"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<TextField> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("TextField", $$slots, ['startIcon', 'endIcon']);

  const click_handler = () => {
    dispatch("iconClicked", {
      icon: "first"
    });
    if (onStartIconClicked) onStartIconClicked();
  };

  const blur_handler = () => {
    $$invalidate(29, active = false);
    $$invalidate(30, float = value !== "");
    dispatch("blur");
    if (onBlur) onBlur();
  };

  const input_handler = e => {
    $$invalidate(0, value = e.target.value);
    dispatch("input");
    if (onInput) onInput();
  };

  const focus_handler = () => {
    $$invalidate(29, active = true);
    $$invalidate(30, float = true);
    dispatch("focus");
    if (onFocus) onFocus();
  };

  const click_handler_1 = () => {
    dispatch("iconClicked", {
      icon: "last"
    });
    if (onEndIconClicked) onEndIconClicked();
  };

  function div0_elementresize_handler() {
    h = this.clientHeight;
    $$invalidate(31, h);
  }

  $$self.$set = $$props => {
    if ("id" in $$props) $$invalidate(1, id = $$props.id);
    if ("name" in $$props) $$invalidate(2, name = $$props.name);
    if ("label" in $$props) $$invalidate(3, label = $$props.label);
    if ("placeholder" in $$props) $$invalidate(4, placeholder = $$props.placeholder);
    if ("value" in $$props) $$invalidate(0, value = $$props.value);
    if ("hint" in $$props) $$invalidate(5, hint = $$props.hint);
    if ("type" in $$props) $$invalidate(6, type = $$props.type);
    if ("min" in $$props) $$invalidate(7, min = $$props.min);
    if ("max" in $$props) $$invalidate(8, max = $$props.max);
    if ("step" in $$props) $$invalidate(9, step = $$props.step);
    if ("readonly" in $$props) $$invalidate(10, readonly = $$props.readonly);
    if ("colors" in $$props) $$invalidate(11, colors = $$props.colors);
    if ("width" in $$props) $$invalidate(12, width = $$props.width);
    if ("height" in $$props) $$invalidate(13, height = $$props.height);
    if ("variant" in $$props) $$invalidate(14, variant = $$props.variant);
    if ("startIcon" in $$props) $$invalidate(15, startIcon = $$props.startIcon);
    if ("endIcon" in $$props) $$invalidate(16, endIcon = $$props.endIcon);
    if ("validators" in $$props) $$invalidate(35, validators = $$props.validators);
    if ("onInput" in $$props) $$invalidate(17, onInput = $$props.onInput);
    if ("onFocus" in $$props) $$invalidate(18, onFocus = $$props.onFocus);
    if ("onBlur" in $$props) $$invalidate(19, onBlur = $$props.onBlur);
    if ("onStartIconClicked" in $$props) $$invalidate(20, onStartIconClicked = $$props.onStartIconClicked);
    if ("onEndIconClicked" in $$props) $$invalidate(21, onEndIconClicked = $$props.onEndIconClicked);
    if ("$$scope" in $$props) $$invalidate(36, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    SVG: _svgs.SVG,
    createEventDispatcher: _svelte.createEventDispatcher,
    onMount: _svelte.onMount,
    dispatch,
    active,
    float,
    id,
    name,
    label,
    placeholder,
    value,
    hint,
    type,
    min,
    max,
    step,
    readonly,
    colors,
    width,
    height,
    variant,
    startIcon,
    endIcon,
    validators,
    onInput,
    onFocus,
    onBlur,
    onStartIconClicked,
    onEndIconClicked,
    wrapperClass,
    inputClass,
    labelClass,
    hintClass,
    iconsClass,
    leadingIconClass,
    trailingIconClass,
    h,
    top,
    variantStyle
  });

  $$self.$inject_state = $$props => {
    if ("active" in $$props) $$invalidate(29, active = $$props.active);
    if ("float" in $$props) $$invalidate(30, float = $$props.float);
    if ("id" in $$props) $$invalidate(1, id = $$props.id);
    if ("name" in $$props) $$invalidate(2, name = $$props.name);
    if ("label" in $$props) $$invalidate(3, label = $$props.label);
    if ("placeholder" in $$props) $$invalidate(4, placeholder = $$props.placeholder);
    if ("value" in $$props) $$invalidate(0, value = $$props.value);
    if ("hint" in $$props) $$invalidate(5, hint = $$props.hint);
    if ("type" in $$props) $$invalidate(6, type = $$props.type);
    if ("min" in $$props) $$invalidate(7, min = $$props.min);
    if ("max" in $$props) $$invalidate(8, max = $$props.max);
    if ("step" in $$props) $$invalidate(9, step = $$props.step);
    if ("readonly" in $$props) $$invalidate(10, readonly = $$props.readonly);
    if ("colors" in $$props) $$invalidate(11, colors = $$props.colors);
    if ("width" in $$props) $$invalidate(12, width = $$props.width);
    if ("height" in $$props) $$invalidate(13, height = $$props.height);
    if ("variant" in $$props) $$invalidate(14, variant = $$props.variant);
    if ("startIcon" in $$props) $$invalidate(15, startIcon = $$props.startIcon);
    if ("endIcon" in $$props) $$invalidate(16, endIcon = $$props.endIcon);
    if ("validators" in $$props) $$invalidate(35, validators = $$props.validators);
    if ("onInput" in $$props) $$invalidate(17, onInput = $$props.onInput);
    if ("onFocus" in $$props) $$invalidate(18, onFocus = $$props.onFocus);
    if ("onBlur" in $$props) $$invalidate(19, onBlur = $$props.onBlur);
    if ("onStartIconClicked" in $$props) $$invalidate(20, onStartIconClicked = $$props.onStartIconClicked);
    if ("onEndIconClicked" in $$props) $$invalidate(21, onEndIconClicked = $$props.onEndIconClicked);
    if ("h" in $$props) $$invalidate(31, h = $$props.h);
    if ("top" in $$props) $$invalidate(32, top = $$props.top);
    if ("variantStyle" in $$props) $$invalidate(33, variantStyle = $$props.variantStyle);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty[1] &
    /*validators*/
    16) {
      $: {
        /*  run validators*/
        validators.forEach(v => {
          console.log(v);
        });
      }
    }

    if ($$self.$$.dirty[1] &
    /*h, top*/
    3) {
      $: {
        $$invalidate(32, top = Math.trunc(h / 8) - 2);
        console.log("height", h, top);
      }
    }

    if ($$self.$$.dirty[0] &
    /*variant, active, colors*/
    536889344 | $$self.$$.dirty[1] &
    /*h*/
    1) {
      $: {
        $$invalidate(33, variantStyle = variant === "outlined" ? `border-solid rounded ${active ? " border-2 " : " border "}` : variant === "standard" ? `border-t-0 border-l-0 border-r-0 border-b bg-${colors[0]} 
         ${active ? " border-b-2 " : " border-b "} ${h < 49 ? " pt-2 " : ""}` : `border-solid rounded bg-${colors[0]}  ${active ? " border-2 " : " border "}`);
      }
    }
  };

  return [value, id, name, label, placeholder, hint, type, min, max, step, readonly, colors, width, height, variant, startIcon, endIcon, onInput, onFocus, onBlur, onStartIconClicked, onEndIconClicked, wrapperClass, inputClass, labelClass, hintClass, iconsClass, leadingIconClass, trailingIconClass, active, float, h, top, variantStyle, dispatch, validators, $$scope, $$slots, click_handler, blur_handler, input_handler, focus_handler, click_handler_1, div0_elementresize_handler];
}

class TextField extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      id: 1,
      name: 2,
      label: 3,
      placeholder: 4,
      value: 0,
      hint: 5,
      type: 6,
      min: 7,
      max: 8,
      step: 9,
      readonly: 10,
      colors: 11,
      width: 12,
      height: 13,
      variant: 14,
      startIcon: 15,
      endIcon: 16,
      validators: 35,
      onInput: 17,
      onFocus: 18,
      onBlur: 19,
      onStartIconClicked: 20,
      onEndIconClicked: 21,
      wrapperClass: 22,
      inputClass: 23,
      labelClass: 24,
      hintClass: 25,
      iconsClass: 26,
      leadingIconClass: 27,
      trailingIconClass: 28
    }, [-1, -1]);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "TextField",
      options,
      id: create_fragment.name
    });
  }

  get id() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set id(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get name() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set name(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get label() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set label(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get placeholder() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set placeholder(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get value() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set value(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get hint() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set hint(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get type() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set type(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get min() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set min(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get max() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set max(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get step() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set step(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get readonly() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set readonly(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get colors() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set colors(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get width() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set width(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get height() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set height(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get variant() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set variant(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get startIcon() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set startIcon(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get endIcon() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set endIcon(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get validators() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set validators(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get onInput() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set onInput(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get onFocus() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set onFocus(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get onBlur() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set onBlur(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get onStartIconClicked() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set onStartIconClicked(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get onEndIconClicked() {
    throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set onEndIconClicked(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get wrapperClass() {
    return this.$$.ctx[22];
  }

  set wrapperClass(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get inputClass() {
    return this.$$.ctx[23];
  }

  set inputClass(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get labelClass() {
    return this.$$.ctx[24];
  }

  set labelClass(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get hintClass() {
    return this.$$.ctx[25];
  }

  set hintClass(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get iconsClass() {
    return this.$$.ctx[26];
  }

  set iconsClass(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get leadingIconClass() {
    return this.$$.ctx[27];
  }

  set leadingIconClass(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get trailingIconClass() {
    return this.$$.ctx[28];
  }

  set trailingIconClass(value) {
    throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = TextField;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","../../assets/svgs":"assets/svgs.ts","svelte":"../node_modules/svelte/index.mjs"}],"components/form_builder/FormBuilder.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _form_options = require("./form_options");

var _TextField = _interopRequireDefault(require("../input_field/TextField.svelte"));

var _AppBar = _interopRequireDefault(require("../app_bar/AppBar.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/form_builder/FormBuilder.svelte generated by Svelte v3.23.2 */
const file = "components/form_builder/FormBuilder.svelte";

function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}

const get_section_title_slot_changes = dirty => ({});

const get_section_title_slot_context = ctx => ({});

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
} // (12:8) {#if s.title}


function create_if_block_3(ctx) {
  let div;
  let current;
  const default_slot_template =
  /*$$slots*/
  ctx[3].default;
  const default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[2], null);
  const default_slot_or_fallback = default_slot || fallback_block_1(ctx);
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      if (default_slot_or_fallback) default_slot_or_fallback.c();
      (0, _internal.attr_dev)(div, "class", "pt-4 pb-3 text-sm font-normal text-cadetblue");
      (0, _internal.add_location)(div, file, 12, 10, 388);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(div, null);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        4) {
          (0, _internal.update_slot)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[2], dirty, null, null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && dirty &
        /*options*/
        2) {
          default_slot_or_fallback.p(ctx, dirty);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(12:8) {#if s.title}",
    ctx
  });
  return block;
} // (14:18) {s.title}


function fallback_block_1(ctx) {
  let t_value =
  /*s*/
  ctx[5].title + "";
  let t;
  const block = {
    c: function create() {
      t = (0, _internal.text)(t_value);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*options*/
      2 && t_value !== (t_value =
      /*s*/
      ctx[5].title + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(t);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block_1.name,
    type: "fallback",
    source: "(14:18) {s.title}",
    ctx
  });
  return block;
} // (11:33)          


function fallback_block(ctx) {
  let if_block_anchor;
  let current;
  let if_block =
  /*s*/
  ctx[5].title && create_if_block_3(ctx);
  const block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (
      /*s*/
      ctx[5].title) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*options*/
          2) {
            (0, _internal.transition_in)(if_block, 1);
          }
        } else {
          if_block = create_if_block_3(ctx);
          if_block.c();
          (0, _internal.transition_in)(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block, 1, 1, () => {
          if_block = null;
        });
        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) (0, _internal.detach_dev)(if_block_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(11:33)          ",
    ctx
  });
  return block;
} // (28:12) {:else}


function create_else_block(ctx) {
  let textfield;
  let updating_value;
  let current;
  const textfield_spread_levels = [
  /*f*/
  ctx[11]];

  function textfield_value_binding(value) {
    /*textfield_value_binding*/
    ctx[4].call(null, value,
    /*f*/
    ctx[11]);
  }

  let textfield_props = {};

  for (let i = 0; i < textfield_spread_levels.length; i += 1) {
    textfield_props = (0, _internal.assign)(textfield_props, textfield_spread_levels[i]);
  }

  if (
  /*data*/
  ctx[0][
  /*f*/
  ctx[11].name] !== void 0) {
    textfield_props.value =
    /*data*/
    ctx[0][
    /*f*/
    ctx[11].name];
  }

  textfield = new _TextField.default({
    props: textfield_props,
    $$inline: true
  });

  _internal.binding_callbacks.push(() => (0, _internal.bind)(textfield, "value", textfield_value_binding));

  const block = {
    c: function create() {
      (0, _internal.create_component)(textfield.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(textfield, target, anchor);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      const textfield_changes = dirty &
      /*options*/
      2 ? (0, _internal.get_spread_update)(textfield_spread_levels, [(0, _internal.get_spread_object)(
      /*f*/
      ctx[11])]) : {};

      if (!updating_value && dirty &
      /*data, options*/
      3) {
        updating_value = true;
        textfield_changes.value =
        /*data*/
        ctx[0][
        /*f*/
        ctx[11].name];
        (0, _internal.add_flush_callback)(() => updating_value = false);
      }

      textfield.$set(textfield_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(textfield.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(textfield.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(textfield, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(28:12) {:else}",
    ctx
  });
  return block;
} // (26:41) 


function create_if_block_2(ctx) {
  let p;
  const block = {
    c: function create() {
      p = (0, _internal.element)("p");
      p.textContent = "Slider range picker goes here";
      (0, _internal.add_location)(p, file, 26, 14, 1067);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, p, anchor);
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(p);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(26:41) ",
    ctx
  });
  return block;
} // (24:68) 


function create_if_block_1(ctx) {
  let p;
  const block = {
    c: function create() {
      p = (0, _internal.element)("p");
      p.textContent = "combo box dropdown field goes here";
      (0, _internal.add_location)(p, file, 24, 14, 969);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, p, anchor);
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(p);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(24:68) ",
    ctx
  });
  return block;
} // (22:12) {#if f.type === 'radio' || f.type === 'checkbox' || f.type === 'chip'}


function create_if_block(ctx) {
  let p;
  const block = {
    c: function create() {
      p = (0, _internal.element)("p");
      p.textContent = "single and multi select items";
      (0, _internal.add_location)(p, file, 22, 14, 849);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, p, anchor);
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(p);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(22:12) {#if f.type === 'radio' || f.type === 'checkbox' || f.type === 'chip'}",
    ctx
  });
  return block;
} // (20:10) {#each r.fields as f}


function create_each_block_2(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_if_block_1, create_if_block_2, create_else_block];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*f*/
    ctx[11].type === "radio" ||
    /*f*/
    ctx[11].type === "checkbox" ||
    /*f*/
    ctx[11].type === "chip") return 0;
    if (
    /*f*/
    ctx[11].type === "chipinput" ||
    /*f*/
    ctx[11].type === "select") return 1;
    if (
    /*f*/
    ctx[11].type === "range") return 2;
    return 3;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        (0, _internal.check_outros)();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        (0, _internal.transition_in)(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) (0, _internal.detach_dev)(if_block_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block_2.name,
    type: "each",
    source: "(20:10) {#each r.fields as f}",
    ctx
  });
  return block;
} // (18:6) {#each s.rows as r}


function create_each_block_1(ctx) {
  let div;
  let div_class_value;
  let current;
  let each_value_2 =
  /*r*/
  ctx[8].fields;
  (0, _internal.validate_each_argument)(each_value_2);
  let each_blocks = [];

  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }

  const out = i => (0, _internal.transition_out)(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  const block = {
    c: function create() {
      div = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      (0, _internal.attr_dev)(div, "class", div_class_value = "row inline-flex flex-wrap justify-between w-full " +
      /*r*/
      ctx[8].class);
      (0, _internal.add_location)(div, file, 18, 8, 561);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*options, data*/
      3) {
        each_value_2 =
        /*r*/
        ctx[8].fields;
        (0, _internal.validate_each_argument)(each_value_2);
        let i;

        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx, each_value_2, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            (0, _internal.transition_in)(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            (0, _internal.transition_in)(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value_2.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        (0, _internal.check_outros)();
      }

      if (!current || dirty &
      /*options*/
      2 && div_class_value !== (div_class_value = "row inline-flex flex-wrap justify-between w-full " +
      /*r*/
      ctx[8].class)) {
        (0, _internal.attr_dev)(div, "class", div_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;

      for (let i = 0; i < each_value_2.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      (0, _internal.destroy_each)(each_blocks, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(18:6) {#each s.rows as r}",
    ctx
  });
  return block;
} // (9:2) {#each options.sections as s}


function create_each_block(ctx) {
  let div;
  let t0;
  let t1;
  let div_class_value;
  let current;
  const section_title_slot_template =
  /*$$slots*/
  ctx[3]["section-title"];
  const section_title_slot = (0, _internal.create_slot)(section_title_slot_template, ctx,
  /*$$scope*/
  ctx[2], get_section_title_slot_context);
  const section_title_slot_or_fallback = section_title_slot || fallback_block(ctx);
  let each_value_1 =
  /*s*/
  ctx[5].rows;
  (0, _internal.validate_each_argument)(each_value_1);
  let each_blocks = [];

  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  const out = i => (0, _internal.transition_out)(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      if (section_title_slot_or_fallback) section_title_slot_or_fallback.c();
      t0 = (0, _internal.space)();

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      t1 = (0, _internal.space)();
      (0, _internal.attr_dev)(div, "class", div_class_value = "section " +
      /*s*/
      ctx[5].class);
      (0, _internal.add_location)(div, file, 9, 4, 290);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      if (section_title_slot_or_fallback) {
        section_title_slot_or_fallback.m(div, null);
      }

      (0, _internal.append_dev)(div, t0);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }

      (0, _internal.append_dev)(div, t1);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (section_title_slot) {
        if (section_title_slot.p && dirty &
        /*$$scope*/
        4) {
          (0, _internal.update_slot)(section_title_slot, section_title_slot_template, ctx,
          /*$$scope*/
          ctx[2], dirty, get_section_title_slot_changes, get_section_title_slot_context);
        }
      } else {
        if (section_title_slot_or_fallback && section_title_slot_or_fallback.p && dirty &
        /*options, $$scope*/
        6) {
          section_title_slot_or_fallback.p(ctx, dirty);
        }
      }

      if (dirty &
      /*options, data*/
      3) {
        each_value_1 =
        /*s*/
        ctx[5].rows;
        (0, _internal.validate_each_argument)(each_value_1);
        let i;

        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx, each_value_1, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            (0, _internal.transition_in)(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            (0, _internal.transition_in)(each_blocks[i], 1);
            each_blocks[i].m(div, t1);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        (0, _internal.check_outros)();
      }

      if (!current || dirty &
      /*options*/
      2 && div_class_value !== (div_class_value = "section " +
      /*s*/
      ctx[5].class)) {
        (0, _internal.attr_dev)(div, "class", div_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(section_title_slot_or_fallback, local);

      for (let i = 0; i < each_value_1.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(section_title_slot_or_fallback, local);
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      if (section_title_slot_or_fallback) section_title_slot_or_fallback.d(detaching);
      (0, _internal.destroy_each)(each_blocks, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(9:2) {#each options.sections as s}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div;
  let current;
  let each_value =
  /*options*/
  ctx[1].sections;
  (0, _internal.validate_each_argument)(each_value);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const out = i => (0, _internal.transition_out)(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  const block = {
    c: function create() {
      div = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      (0, _internal.attr_dev)(div, "class", "w-full form");
      (0, _internal.add_location)(div, file, 7, 0, 228);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }

      current = true;
    },
    p: function update(ctx, [dirty]) {
      if (dirty &
      /*options, data, $$scope*/
      7) {
        each_value =
        /*options*/
        ctx[1].sections;
        (0, _internal.validate_each_argument)(each_value);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            (0, _internal.transition_in)(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            (0, _internal.transition_in)(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (let i = 0; i < each_value.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      (0, _internal.destroy_each)(each_blocks, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    options
  } = $$props;
  let {
    data = {}
  } = $$props;
  const writable_props = ["options", "data"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FormBuilder> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("FormBuilder", $$slots, ['default', 'section-title']);

  function textfield_value_binding(value, f) {
    data[f.name] = value;
    $$invalidate(0, data);
  }

  $$self.$set = $$props => {
    if ("options" in $$props) $$invalidate(1, options = $$props.options);
    if ("data" in $$props) $$invalidate(0, data = $$props.data);
    if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    FormOption: _form_options.FormOption,
    TextField: _TextField.default,
    AppBar: _AppBar.default,
    options,
    data
  });

  $$self.$inject_state = $$props => {
    if ("options" in $$props) $$invalidate(1, options = $$props.options);
    if ("data" in $$props) $$invalidate(0, data = $$props.data);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [data, options, $$scope, $$slots, textfield_value_binding];
}

class FormBuilder extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      options: 1,
      data: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "FormBuilder",
      options,
      id: create_fragment.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (
    /*options*/
    ctx[1] === undefined && !("options" in props)) {
      console.warn("<FormBuilder> was created without expected prop 'options'");
    }
  }

  get options() {
    throw new Error("<FormBuilder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set options(value) {
    throw new Error("<FormBuilder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get data() {
    throw new Error("<FormBuilder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set data(value) {
    throw new Error("<FormBuilder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = FormBuilder;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","./form_options":"components/form_builder/form_options.ts","../input_field/TextField.svelte":"components/input_field/TextField.svelte","../app_bar/AppBar.svelte":"components/app_bar/AppBar.svelte"}],"components/toggle_switch/ToggleSwitch.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

/* components/toggle_switch/ToggleSwitch.svelte generated by Svelte v3.23.2 */
const file = "components/toggle_switch/ToggleSwitch.svelte"; // (19:2) {#if withText}

function create_if_block(ctx) {
  let span0;
  let t1;
  let span1;
  const block = {
    c: function create() {
      span0 = (0, _internal.element)("span");
      span0.textContent = "on";
      t1 = (0, _internal.space)();
      span1 = (0, _internal.element)("span");
      span1.textContent = "off";
      (0, _internal.attr_dev)(span0, "class", "px-1 text-xs leading-normal lowercase align-text-top select-none text-cararra");
      (0, _internal.add_location)(span0, file, 19, 2, 459);
      (0, _internal.attr_dev)(span1, "class", "px-1 text-xs leading-normal lowercase align-text-top select-none text-cararra");
      (0, _internal.add_location)(span1, file, 20, 2, 563);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span0, anchor);
      (0, _internal.insert_dev)(target, t1, anchor);
      (0, _internal.insert_dev)(target, span1, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span0);
      if (detaching) (0, _internal.detach_dev)(t1);
      if (detaching) (0, _internal.detach_dev)(span1);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(19:2) {#if withText}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div;
  let t;
  let span;
  let span_class_value;
  let div_class_value;
  let mounted;
  let dispose;
  let if_block =
  /*withText*/
  ctx[2] && create_if_block(ctx);
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      if (if_block) if_block.c();
      t = (0, _internal.space)();
      span = (0, _internal.element)("span");
      (0, _internal.attr_dev)(span, "class", span_class_value = "absolute w-5 h-5 border rounded-full " + (
      /*value*/
      ctx[0] ? "border-success" : "border-comet") + "\n    bg-cararra transform transition-all duration-300 ease-linear " + (
      /*value*/
      ctx[0] ? "translate-x-7" : "translate-x-0"));
      (0, _internal.add_location)(span, file, 22, 2, 676);
      (0, _internal.attr_dev)(div, "class", div_class_value = " inline-flex items-center rounded-full w-12\n  " + (
      /*variant*/
      ctx[1] === "inner" ? "h-5" : "h-3") + "\n  " + (
      /*value*/
      ctx[0] ? "bg-success" : "bg-comet"));
      (0, _internal.add_location)(div, file, 8, 0, 212);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      if (if_block) if_block.m(div, null);
      (0, _internal.append_dev)(div, t);
      (0, _internal.append_dev)(div, span);

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(div, "click",
        /*click_handler*/
        ctx[4], false, false, false), (0, _internal.listen_dev)(div, "click",
        /*click_handler_1*/
        ctx[5], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, [dirty]) {
      if (
      /*withText*/
      ctx[2]) {
        if (if_block) {} else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(div, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (dirty &
      /*value*/
      1 && span_class_value !== (span_class_value = "absolute w-5 h-5 border rounded-full " + (
      /*value*/
      ctx[0] ? "border-success" : "border-comet") + "\n    bg-cararra transform transition-all duration-300 ease-linear " + (
      /*value*/
      ctx[0] ? "translate-x-7" : "translate-x-0"))) {
        (0, _internal.attr_dev)(span, "class", span_class_value);
      }

      if (dirty &
      /*variant, value*/
      3 && div_class_value !== (div_class_value = " inline-flex items-center rounded-full w-12\n  " + (
      /*variant*/
      ctx[1] === "inner" ? "h-5" : "h-3") + "\n  " + (
      /*value*/
      ctx[0] ? "bg-success" : "bg-comet"))) {
        (0, _internal.attr_dev)(div, "class", div_class_value);
      }
    },
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      if (if_block) if_block.d();
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let dispatch = (0, _svelte.createEventDispatcher)();
  let {
    value = false
  } = $$props;
  let {
    variant = "inner"
  } = $$props; //'outer'

  let {
    withText = true
  } = $$props;
  const writable_props = ["value", "variant", "withText"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ToggleSwitch> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("ToggleSwitch", $$slots, []);

  function click_handler(event) {
    (0, _internal.bubble)($$self, event);
  }

  const click_handler_1 = () => {
    $$invalidate(0, value = !value);
    dispatch("toggle", value);
  };

  $$self.$set = $$props => {
    if ("value" in $$props) $$invalidate(0, value = $$props.value);
    if ("variant" in $$props) $$invalidate(1, variant = $$props.variant);
    if ("withText" in $$props) $$invalidate(2, withText = $$props.withText);
  };

  $$self.$capture_state = () => ({
    createEventDispatcher: _svelte.createEventDispatcher,
    dispatch,
    value,
    variant,
    withText
  });

  $$self.$inject_state = $$props => {
    if ("dispatch" in $$props) $$invalidate(3, dispatch = $$props.dispatch);
    if ("value" in $$props) $$invalidate(0, value = $$props.value);
    if ("variant" in $$props) $$invalidate(1, variant = $$props.variant);
    if ("withText" in $$props) $$invalidate(2, withText = $$props.withText);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [value, variant, withText, dispatch, click_handler, click_handler_1];
}

class ToggleSwitch extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      value: 0,
      variant: 1,
      withText: 2
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "ToggleSwitch",
      options,
      id: create_fragment.name
    });
  }

  get value() {
    throw new Error("<ToggleSwitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set value(value) {
    throw new Error("<ToggleSwitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get variant() {
    throw new Error("<ToggleSwitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set variant(value) {
    throw new Error("<ToggleSwitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get withText() {
    throw new Error("<ToggleSwitch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set withText(value) {
    throw new Error("<ToggleSwitch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = ToggleSwitch;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs"}],"components/radio_button/RadioButton.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _form_options = require("../form_builder/form_options");

/* components/radio_button/RadioButton.svelte generated by Svelte v3.23.2 */
const file = "components/radio_button/RadioButton.svelte";

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[8] = i;
  return child_ctx;
} // (13:2) {#each items as item, i}


function create_each_block(ctx) {
  let div1;
  let div0;
  let div0_class_value;
  let t0;
  let span;
  let t1_value = (
  /*item*/
  ctx[6].label ?
  /*item*/
  ctx[6].label :
  /*item*/
  ctx[6].value) + "";
  let t1;
  let t2;
  let mounted;
  let dispose;

  function click_handler_1(...args) {
    return (
      /*click_handler_1*/
      ctx[5](
      /*i*/
      ctx[8], ...args)
    );
  }

  const block = {
    c: function create() {
      div1 = (0, _internal.element)("div");
      div0 = (0, _internal.element)("div");
      t0 = (0, _internal.space)();
      span = (0, _internal.element)("span");
      t1 = (0, _internal.text)(t1_value);
      t2 = (0, _internal.space)();
      (0, _internal.attr_dev)(div0, "class", div0_class_value = "inline-flex w-5 h-5 border-2 transition-all duration-300\n        ease-linear rounded-full " + (
      /*selected*/
      ctx[3] ===
      /*i*/
      ctx[8] ? `bg-${
      /*checkedColor*/
      ctx[1]} border-${
      /*checkedColor*/
      ctx[1]}` : " bg-transparent border-cadetblue"));
      (0, _internal.add_location)(div0, file, 23, 6, 581);
      (0, _internal.attr_dev)(span, "class", "ml-2 select-none");
      (0, _internal.add_location)(span, file, 27, 6, 812);
      (0, _internal.attr_dev)(div1, "class", "inline-flex mr-4 ");
      (0, _internal.add_location)(div1, file, 13, 4, 383);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div1, anchor);
      (0, _internal.append_dev)(div1, div0);
      (0, _internal.append_dev)(div1, t0);
      (0, _internal.append_dev)(div1, span);
      (0, _internal.append_dev)(span, t1);
      (0, _internal.append_dev)(div1, t2);

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(div1, "click",
        /*click_handler*/
        ctx[4], false, false, false), (0, _internal.listen_dev)(div1, "click", click_handler_1, false, false, false)];
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty &
      /*selected, checkedColor*/
      10 && div0_class_value !== (div0_class_value = "inline-flex w-5 h-5 border-2 transition-all duration-300\n        ease-linear rounded-full " + (
      /*selected*/
      ctx[3] ===
      /*i*/
      ctx[8] ? `bg-${
      /*checkedColor*/
      ctx[1]} border-${
      /*checkedColor*/
      ctx[1]}` : " bg-transparent border-cadetblue"))) {
        (0, _internal.attr_dev)(div0, "class", div0_class_value);
      }

      if (dirty &
      /*items*/
      4 && t1_value !== (t1_value = (
      /*item*/
      ctx[6].label ?
      /*item*/
      ctx[6].label :
      /*item*/
      ctx[6].value) + "")) (0, _internal.set_data_dev)(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div1);
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(13:2) {#each items as item, i}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div;
  let each_value =
  /*items*/
  ctx[2];
  (0, _internal.validate_each_argument)(each_value);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const block = {
    c: function create() {
      div = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      (0, _internal.attr_dev)(div, "class", "inline-flex items-center ");
      (0, _internal.add_location)(div, file, 11, 0, 312);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p: function update(ctx, [dirty]) {
      if (dirty &
      /*selected, value, items, checkedColor*/
      15) {
        each_value =
        /*items*/
        ctx[2];
        (0, _internal.validate_each_argument)(each_value);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      (0, _internal.destroy_each)(each_blocks, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    checkedColor = "primary"
  } = $$props;
  let {
    items = [{
      id: "0",
      value: "ItemOne"
    }, {
      id: "1",
      value: "ItemTwo"
    }, {
      id: "3",
      value: "ItemThree"
    }]
  } = $$props;
  let selected = 0;
  let {
    value = items[selected]
  } = $$props;
  const writable_props = ["checkedColor", "items", "value"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<RadioButton> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("RadioButton", $$slots, []);

  function click_handler(event) {
    (0, _internal.bubble)($$self, event);
  }

  const click_handler_1 = i => {
    if (selected !== i) {
      $$invalidate(3, selected = i);
      $$invalidate(0, value = items[selected]);
    }
  };

  $$self.$set = $$props => {
    if ("checkedColor" in $$props) $$invalidate(1, checkedColor = $$props.checkedColor);
    if ("items" in $$props) $$invalidate(2, items = $$props.items);
    if ("value" in $$props) $$invalidate(0, value = $$props.value);
  };

  $$self.$capture_state = () => ({
    Items: _form_options.Items,
    checkedColor,
    items,
    selected,
    value
  });

  $$self.$inject_state = $$props => {
    if ("checkedColor" in $$props) $$invalidate(1, checkedColor = $$props.checkedColor);
    if ("items" in $$props) $$invalidate(2, items = $$props.items);
    if ("selected" in $$props) $$invalidate(3, selected = $$props.selected);
    if ("value" in $$props) $$invalidate(0, value = $$props.value);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [value, checkedColor, items, selected, click_handler, click_handler_1];
}

class RadioButton extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      checkedColor: 1,
      items: 2,
      value: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "RadioButton",
      options,
      id: create_fragment.name
    });
  }

  get checkedColor() {
    throw new Error("<RadioButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set checkedColor(value) {
    throw new Error("<RadioButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get items() {
    throw new Error("<RadioButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set items(value) {
    throw new Error("<RadioButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get value() {
    throw new Error("<RadioButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set value(value) {
    throw new Error("<RadioButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = RadioButton;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","../form_builder/form_options":"components/form_builder/form_options.ts"}],"components/chip_input/Chip.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svgs = require("../../assets/svgs.ts");

var _Avartar = _interopRequireDefault(require("../avartar/Avartar.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/chip_input/Chip.svelte generated by Svelte v3.23.2 */
const file = "components/chip_input/Chip.svelte";

const get_end_slot_changes = dirty => ({});

const get_end_slot_context = ctx => ({});

const get_start_slot_changes = dirty => ({});

const get_start_slot_context = ctx => ({}); // (23:2) {#if dismissable}


function create_if_block(ctx) {
  let current;
  const end_slot_template =
  /*$$slots*/
  ctx[4].end;
  const end_slot = (0, _internal.create_slot)(end_slot_template, ctx,
  /*$$scope*/
  ctx[3], get_end_slot_context);
  const end_slot_or_fallback = end_slot || fallback_block(ctx);
  const block = {
    c: function create() {
      if (end_slot_or_fallback) end_slot_or_fallback.c();
    },
    m: function mount(target, anchor) {
      if (end_slot_or_fallback) {
        end_slot_or_fallback.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (end_slot) {
        if (end_slot.p && dirty &
        /*$$scope*/
        8) {
          (0, _internal.update_slot)(end_slot, end_slot_template, ctx,
          /*$$scope*/
          ctx[3], dirty, get_end_slot_changes, get_end_slot_context);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(end_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(end_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (end_slot_or_fallback) end_slot_or_fallback.d(detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(23:2) {#if dismissable}",
    ctx
  });
  return block;
} // (24:21)        


function fallback_block(ctx) {
  let span;
  let raw_value = (0, _svgs.SVG)("close", "w-4 h-4") + "";
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      (0, _internal.attr_dev)(span, "class", "p-0 m-0");
      (0, _internal.add_location)(span, file, 24, 6, 557);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      span.innerHTML = raw_value;
    },
    p: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(24:21)        ",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div;
  let t0;
  let span;
  let t1;
  let div_class_value;
  let current;
  let mounted;
  let dispose;
  const start_slot_template =
  /*$$slots*/
  ctx[4].start;
  const start_slot = (0, _internal.create_slot)(start_slot_template, ctx,
  /*$$scope*/
  ctx[3], get_start_slot_context);
  const default_slot_template =
  /*$$slots*/
  ctx[4].default;
  const default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[3], null);
  let if_block =
  /*dismissable*/
  ctx[2] && create_if_block(ctx);
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      if (start_slot) start_slot.c();
      t0 = (0, _internal.space)();
      span = (0, _internal.element)("span");
      if (default_slot) default_slot.c();
      t1 = (0, _internal.space)();
      if (if_block) if_block.c();
      (0, _internal.attr_dev)(span, "id",
      /*id*/
      ctx[0]);
      (0, _internal.attr_dev)(span, "class", "pl-2");
      (0, _internal.add_location)(span, file, 18, 2, 460);
      (0, _internal.attr_dev)(div, "id",
      /*id*/
      ctx[0]);
      (0, _internal.attr_dev)(div, "class", div_class_value = "inline-flex justify-evenly items-center rounded cursor-pointer text-cadetblue bg-haiti\n  text-sm truncate select-none " +
      /*classNames*/
      ctx[1]);
      (0, _internal.add_location)(div, file, 8, 0, 197);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      if (start_slot) {
        start_slot.m(div, null);
      }

      (0, _internal.append_dev)(div, t0);
      (0, _internal.append_dev)(div, span);

      if (default_slot) {
        default_slot.m(span, null);
      }

      (0, _internal.append_dev)(div, t1);
      if (if_block) if_block.m(div, null);
      current = true;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(div, "click",
        /*click_handler*/
        ctx[5], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, [dirty]) {
      if (start_slot) {
        if (start_slot.p && dirty &
        /*$$scope*/
        8) {
          (0, _internal.update_slot)(start_slot, start_slot_template, ctx,
          /*$$scope*/
          ctx[3], dirty, get_start_slot_changes, get_start_slot_context);
        }
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        8) {
          (0, _internal.update_slot)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[3], dirty, null, null);
        }
      }

      if (!current || dirty &
      /*id*/
      1) {
        (0, _internal.attr_dev)(span, "id",
        /*id*/
        ctx[0]);
      }

      if (
      /*dismissable*/
      ctx[2]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*dismissable*/
          4) {
            (0, _internal.transition_in)(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          (0, _internal.transition_in)(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block, 1, 1, () => {
          if_block = null;
        });
        (0, _internal.check_outros)();
      }

      if (!current || dirty &
      /*id*/
      1) {
        (0, _internal.attr_dev)(div, "id",
        /*id*/
        ctx[0]);
      }

      if (!current || dirty &
      /*classNames*/
      2 && div_class_value !== (div_class_value = "inline-flex justify-evenly items-center rounded cursor-pointer text-cadetblue bg-haiti\n  text-sm truncate select-none " +
      /*classNames*/
      ctx[1])) {
        (0, _internal.attr_dev)(div, "class", div_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(start_slot, local);
      (0, _internal.transition_in)(default_slot, local);
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(start_slot, local);
      (0, _internal.transition_out)(default_slot, local);
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      if (start_slot) start_slot.d(detaching);
      if (default_slot) default_slot.d(detaching);
      if (if_block) if_block.d();
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    id
  } = $$props;
  let {
    classNames = ""
  } = $$props;
  let {
    dismissable = true
  } = $$props;
  const writable_props = ["id", "classNames", "dismissable"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Chip> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("Chip", $$slots, ['start', 'default', 'end']);

  function click_handler(event) {
    (0, _internal.bubble)($$self, event);
  }

  $$self.$set = $$props => {
    if ("id" in $$props) $$invalidate(0, id = $$props.id);
    if ("classNames" in $$props) $$invalidate(1, classNames = $$props.classNames);
    if ("dismissable" in $$props) $$invalidate(2, dismissable = $$props.dismissable);
    if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    SVG: _svgs.SVG,
    Avartar: _Avartar.default,
    id,
    classNames,
    dismissable
  });

  $$self.$inject_state = $$props => {
    if ("id" in $$props) $$invalidate(0, id = $$props.id);
    if ("classNames" in $$props) $$invalidate(1, classNames = $$props.classNames);
    if ("dismissable" in $$props) $$invalidate(2, dismissable = $$props.dismissable);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [id, classNames, dismissable, $$scope, $$slots, click_handler];
}

class Chip extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      id: 0,
      classNames: 1,
      dismissable: 2
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Chip",
      options,
      id: create_fragment.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (
    /*id*/
    ctx[0] === undefined && !("id" in props)) {
      console.warn("<Chip> was created without expected prop 'id'");
    }
  }

  get id() {
    throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set id(value) {
    throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get classNames() {
    throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set classNames(value) {
    throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get dismissable() {
    throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set dismissable(value) {
    throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Chip;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","../../assets/svgs.ts":"assets/svgs.ts","../avartar/Avartar.svelte":"components/avartar/Avartar.svelte"}],"components/chip_input/ChipsInput.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _Chip = _interopRequireDefault(require("./Chip.svelte"));

var _svelte = require("svelte");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/chip_input/ChipsInput.svelte generated by Svelte v3.23.2 */
const {
  console: console_1
} = _internal.globals;
const file = "components/chip_input/ChipsInput.svelte";

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[46] = list[i];
  child_ctx[48] = i;
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[46] = list[i];
  return child_ctx;
} // (225:8) <Chip id="{item._id}" on:click="{removeChip}">


function create_default_slot(ctx) {
  let t_value =
  /*item*/
  ctx[46].title + "";
  let t;
  const block = {
    c: function create() {
      t = (0, _internal.text)(t_value);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*selectedItems*/
      2 && t_value !== (t_value =
      /*item*/
      ctx[46].title + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(t);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(225:8) <Chip id=\\\"{item._id}\\\" on:click=\\\"{removeChip}\\\">",
    ctx
  });
  return block;
} // (224:12)          


function fallback_block(ctx) {
  let chip;
  let t;
  let current;
  chip = new _Chip.default({
    props: {
      id:
      /*item*/
      ctx[46]._id,
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx
      }
    },
    $$inline: true
  });
  chip.$on("click",
  /*removeChip*/
  ctx[24]);
  const block = {
    c: function create() {
      (0, _internal.create_component)(chip.$$.fragment);
      t = (0, _internal.space)();
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(chip, target, anchor);
      (0, _internal.insert_dev)(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      const chip_changes = {};
      if (dirty[0] &
      /*selectedItems*/
      2) chip_changes.id =
      /*item*/
      ctx[46]._id;

      if (dirty[0] &
      /*selectedItems*/
      2 | dirty[1] &
      /*$$scope*/
      128) {
        chip_changes.$$scope = {
          dirty,
          ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(chip, detaching);
      if (detaching) (0, _internal.detach_dev)(t);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(224:12)          ",
    ctx
  });
  return block;
} // (223:4) {#each selectedItems as item}


function create_each_block_1(ctx) {
  let current;
  const default_slot_template =
  /*$$slots*/
  ctx[30].default;
  const default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[38], null);
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  const block = {
    c: function create() {
      if (default_slot_or_fallback) default_slot_or_fallback.c();
    },
    m: function mount(target, anchor) {
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty[1] &
        /*$$scope*/
        128) {
          (0, _internal.update_slot)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[38], dirty, null, null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && dirty[0] &
        /*selectedItems*/
        2) {
          default_slot_or_fallback.p(ctx, dirty);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(223:4) {#each selectedItems as item}",
    ctx
  });
  return block;
} // (258:2) {#if error !== ''}


function create_if_block_1(ctx) {
  let div;
  let p;
  let t;
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      p = (0, _internal.element)("p");
      t = (0, _internal.text)(
      /*error*/
      ctx[10]);
      (0, _internal.attr_dev)(p, "class", "py-1 text-xs text-center text-red-600 ");
      (0, _internal.add_location)(p, file, 259, 6, 7541);
      (0, _internal.attr_dev)(div, "class", "block");
      (0, _internal.add_location)(div, file, 258, 4, 7515);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      (0, _internal.append_dev)(div, p);
      (0, _internal.append_dev)(p, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*error*/
      1024) (0, _internal.set_data_dev)(t,
      /*error*/
      ctx[10]);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(258:2) {#if error !== ''}",
    ctx
  });
  return block;
} // (265:2) {#if active && dropOptions.length > 0}


function create_if_block(ctx) {
  let div;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let each_value =
  /*dropOptions*/
  ctx[16];
  (0, _internal.validate_each_argument)(each_value);

  const get_key = ctx =>
  /*item*/
  ctx[46]._id;

  (0, _internal.validate_each_keys)(ctx, each_value, get_each_context, get_key);

  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  const block = {
    c: function create() {
      div = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      (0, _internal.attr_dev)(div, "id", "drop-down-wrapper");
      (0, _internal.attr_dev)(div, "class", "absolute inset-x-0 block h-32 overflow-y-auto bg-white border shadow-md mt-21 border-b-solid rounded-b-md z-2500 ");
      (0, _internal.add_location)(div, file, 265, 4, 7701);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*dropOptions, addSelectedItem, hovering*/
      8470528) {
        const each_value =
        /*dropOptions*/
        ctx[16];
        (0, _internal.validate_each_argument)(each_value);
        (0, _internal.validate_each_keys)(ctx, each_value, get_each_context, get_key);
        each_blocks = (0, _internal.update_keyed_each)(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, _internal.destroy_block, create_each_block, null, get_each_context);
      }
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(265:2) {#if active && dropOptions.length > 0}",
    ctx
  });
  return block;
} // (270:6) {#each dropOptions as item, index (item._id)}


function create_each_block(key_1, ctx) {
  let p;
  let t0_value =
  /*item*/
  ctx[46].title + "";
  let t0;
  let t1;
  let p_id_value;
  let mounted;
  let dispose;

  function click_handler(...args) {
    return (
      /*click_handler*/
      ctx[36](
      /*item*/
      ctx[46], ...args)
    );
  }

  const block = {
    key: key_1,
    first: null,
    c: function create() {
      p = (0, _internal.element)("p");
      t0 = (0, _internal.text)(t0_value);
      t1 = (0, _internal.space)();
      (0, _internal.attr_dev)(p, "id", p_id_value =
      /*item*/
      ctx[46]._id);
      (0, _internal.attr_dev)(p, "class", "px-4 py-2 font-sans text-sm font-normal hover:bg-gray-200 focus:bg-primary");
      (0, _internal.add_location)(p, file, 270, 8, 7929);
      this.first = p;
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, p, anchor);
      (0, _internal.append_dev)(p, t0);
      (0, _internal.append_dev)(p, t1);

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(p, "click", click_handler, false, false, false), (0, _internal.listen_dev)(p, "mouseover",
        /*mouseover_handler*/
        ctx[37], false, false, false)];
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] &
      /*dropOptions*/
      65536 && t0_value !== (t0_value =
      /*item*/
      ctx[46].title + "")) (0, _internal.set_data_dev)(t0, t0_value);

      if (dirty[0] &
      /*dropOptions*/
      65536 && p_id_value !== (p_id_value =
      /*item*/
      ctx[46]._id)) {
        (0, _internal.attr_dev)(p, "id", p_id_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(p);
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(270:6) {#each dropOptions as item, index (item._id)}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div2;
  let div1;
  let t0;
  let div0;
  let div0_class_value;
  let div1_class_value;
  let t1;
  let label_1;
  let t2_value = (
  /*active*/
  ctx[12] ?
  /*label*/
  ctx[4] :
  /*placeholder*/
  ctx[0]) + "";
  let t2;
  let label_1_class_value;
  let label_1_style_value;
  let t3;
  let t4;
  let div2_class_value;
  let current;
  let mounted;
  let dispose;
  let each_value_1 =
  /*selectedItems*/
  ctx[1];
  (0, _internal.validate_each_argument)(each_value_1);
  let each_blocks = [];

  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  const out = i => (0, _internal.transition_out)(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  let if_block0 =
  /*error*/
  ctx[10] !== "" && create_if_block_1(ctx);
  let if_block1 =
  /*active*/
  ctx[12] &&
  /*dropOptions*/
  ctx[16].length > 0 && create_if_block(ctx);
  const block = {
    c: function create() {
      div2 = (0, _internal.element)("div");
      div1 = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      t0 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");
      t1 = (0, _internal.space)();
      label_1 = (0, _internal.element)("label");
      t2 = (0, _internal.text)(t2_value);
      t3 = (0, _internal.space)();
      if (if_block0) if_block0.c();
      t4 = (0, _internal.space)();
      if (if_block1) if_block1.c();
      (0, _internal.attr_dev)(div0, "id",
      /*id*/
      ctx[2]);
      (0, _internal.attr_dev)(div0, "name",
      /*name*/
      ctx[3]);
      (0, _internal.attr_dev)(div0, "contenteditable", "true");
      (0, _internal.attr_dev)(div0, "class", div0_class_value = "inline-flex " + (
      /*active*/
      ctx[12] ? "" : "pt-4") + " pr-8 outline-none text-" +
      /*inactiveColor*/
      ctx[6] + "\n      focus:text-" +
      /*color*/
      ctx[5]);
      if (
      /*input*/
      ctx[15] === void 0) (0, _internal.add_render_callback)(() =>
      /*div0_input_handler*/
      ctx[31].call(div0));
      (0, _internal.add_location)(div0, file, 228, 4, 6734);
      (0, _internal.attr_dev)(div1, "class", div1_class_value = "\n    " +
      /*defaultInputClass*/
      ctx[22] + "\n    " + (
      /*active*/
      ctx[12] ? "border-primary" : "border-gray-400") + "\n    " +
      /*inputClass*/
      ctx[9]);
      (0, _internal.add_location)(div1, file, 215, 2, 6405);
      (0, _internal.attr_dev)(label_1, "for",
      /*id*/
      ctx[2]);
      (0, _internal.attr_dev)(label_1, "class", label_1_class_value = "" + (
      /*defaultLabelClass*/
      ctx[19] + "\n    " + (
      /*active*/
      ctx[12] ?
      /*floatingLabelClass*/
      ctx[21] :
      /*normalLabelClass*/
      ctx[20]) + "\n    " +
      /*labelClass*/
      ctx[8] + "\n    "));
      (0, _internal.attr_dev)(label_1, "style", label_1_style_value = "" + (
      /*defaultLabelStyle*/
      ctx[17] + "\n    " + (
      /*active*/
      ctx[12] ?
      /*floatingState*/
      ctx[18] :
      /*normalLabelClass*/
      ctx[20])));
      (0, _internal.add_location)(label_1, file, 246, 2, 7231);
      (0, _internal.attr_dev)(div2, "id", "wrapper");
      (0, _internal.attr_dev)(div2, "class", div2_class_value = "relative flex my-2 " +
      /*wrapperClass*/
      ctx[7] + " ");
      (0, _internal.add_location)(div2, file, 214, 0, 6341);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div2, anchor);
      (0, _internal.append_dev)(div2, div1);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }

      (0, _internal.append_dev)(div1, t0);
      (0, _internal.append_dev)(div1, div0);

      if (
      /*input*/
      ctx[15] !== void 0) {
        div0.innerHTML =
        /*input*/
        ctx[15];
      }

      (0, _internal.append_dev)(div2, t1);
      (0, _internal.append_dev)(div2, label_1);
      (0, _internal.append_dev)(label_1, t2);
      (0, _internal.append_dev)(div2, t3);
      if (if_block0) if_block0.m(div2, null);
      (0, _internal.append_dev)(div2, t4);
      if (if_block1) if_block1.m(div2, null);
      current = true;

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(div0, "input",
        /*div0_input_handler*/
        ctx[31]), (0, _internal.listen_dev)(div0, "focus",
        /*focus_handler*/
        ctx[32], false, false, false), (0, _internal.listen_dev)(div0, "blur",
        /*blur_handler*/
        ctx[33], false, false, false), (0, _internal.listen_dev)(div0, "keydown",
        /*keydown_handler*/
        ctx[34], false, false, false), (0, _internal.listen_dev)(div0, "input",
        /*input_handler*/
        ctx[35], false, false, false), (0, _internal.listen_dev)(div1, "click", function () {
          if ((0, _internal.is_function)(
          /*handleFocus*/
          ctx[25]({
            id:
            /*id*/
            ctx[2]
          })))
            /*handleFocus*/
            ctx[25]({
              id:
              /*id*/
              ctx[2]
            }).apply(this, arguments);
        }, false, false, false)];
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty[0] &
      /*selectedItems, removeChip*/
      16777218 | dirty[1] &
      /*$$scope*/
      128) {
        each_value_1 =
        /*selectedItems*/
        ctx[1];
        (0, _internal.validate_each_argument)(each_value_1);
        let i;

        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx, each_value_1, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            (0, _internal.transition_in)(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            (0, _internal.transition_in)(each_blocks[i], 1);
            each_blocks[i].m(div1, t0);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        (0, _internal.check_outros)();
      }

      if (!current || dirty[0] &
      /*id*/
      4) {
        (0, _internal.attr_dev)(div0, "id",
        /*id*/
        ctx[2]);
      }

      if (!current || dirty[0] &
      /*name*/
      8) {
        (0, _internal.attr_dev)(div0, "name",
        /*name*/
        ctx[3]);
      }

      if (!current || dirty[0] &
      /*active, inactiveColor, color*/
      4192 && div0_class_value !== (div0_class_value = "inline-flex " + (
      /*active*/
      ctx[12] ? "" : "pt-4") + " pr-8 outline-none text-" +
      /*inactiveColor*/
      ctx[6] + "\n      focus:text-" +
      /*color*/
      ctx[5])) {
        (0, _internal.attr_dev)(div0, "class", div0_class_value);
      }

      if (dirty[0] &
      /*input*/
      32768 &&
      /*input*/
      ctx[15] !== div0.innerHTML) {
        div0.innerHTML =
        /*input*/
        ctx[15];
      }

      if (!current || dirty[0] &
      /*active, inputClass*/
      4608 && div1_class_value !== (div1_class_value = "\n    " +
      /*defaultInputClass*/
      ctx[22] + "\n    " + (
      /*active*/
      ctx[12] ? "border-primary" : "border-gray-400") + "\n    " +
      /*inputClass*/
      ctx[9])) {
        (0, _internal.attr_dev)(div1, "class", div1_class_value);
      }

      if ((!current || dirty[0] &
      /*active, label, placeholder*/
      4113) && t2_value !== (t2_value = (
      /*active*/
      ctx[12] ?
      /*label*/
      ctx[4] :
      /*placeholder*/
      ctx[0]) + "")) (0, _internal.set_data_dev)(t2, t2_value);

      if (!current || dirty[0] &
      /*id*/
      4) {
        (0, _internal.attr_dev)(label_1, "for",
        /*id*/
        ctx[2]);
      }

      if (!current || dirty[0] &
      /*active, labelClass*/
      4352 && label_1_class_value !== (label_1_class_value = "" + (
      /*defaultLabelClass*/
      ctx[19] + "\n    " + (
      /*active*/
      ctx[12] ?
      /*floatingLabelClass*/
      ctx[21] :
      /*normalLabelClass*/
      ctx[20]) + "\n    " +
      /*labelClass*/
      ctx[8] + "\n    "))) {
        (0, _internal.attr_dev)(label_1, "class", label_1_class_value);
      }

      if (!current || dirty[0] &
      /*active*/
      4096 && label_1_style_value !== (label_1_style_value = "" + (
      /*defaultLabelStyle*/
      ctx[17] + "\n    " + (
      /*active*/
      ctx[12] ?
      /*floatingState*/
      ctx[18] :
      /*normalLabelClass*/
      ctx[20])))) {
        (0, _internal.attr_dev)(label_1, "style", label_1_style_value);
      }

      if (
      /*error*/
      ctx[10] !== "") {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          if_block0.m(div2, t4);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*active*/
      ctx[12] &&
      /*dropOptions*/
      ctx[16].length > 0) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(div2, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (!current || dirty[0] &
      /*wrapperClass*/
      128 && div2_class_value !== (div2_class_value = "relative flex my-2 " +
      /*wrapperClass*/
      ctx[7] + " ")) {
        (0, _internal.attr_dev)(div2, "class", div2_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;

      for (let i = 0; i < each_value_1.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div2);
      (0, _internal.destroy_each)(each_blocks, detaching);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  const dispatch = (0, _svelte.createEventDispatcher)();
  let {
    options = []
  } = $$props;
  let {
    id = ""
  } = $$props;
  let {
    name = ""
  } = $$props;
  let {
    label = "Your label"
  } = $$props;
  let {
    placeholder = ""
  } = $$props;
  let {
    selectedItems = []
  } = $$props;
  let {
    color = "primary"
  } = $$props;
  let {
    inactiveColor = "gray-400"
  } = $$props;
  let {
    wrapperClass = ""
  } = $$props;
  let {
    labelClass = ""
  } = $$props;
  let {
    inputClass = ""
  } = $$props;
  let {
    error = ""
  } = $$props;
  let {
    validators = []
  } = $$props;
  let {
    callback = null
  } = $$props;
  let active = false;
  let isShowing = false;
  let hovering = false;
  let arrowUpDown = false;
  let highligthedOption = {};
  let input = "";
  let lastIndex = 0;
  const tempHolder = placeholder;
  let filteredOptions = [];
  let dropOptions = [];
  let defaultLabelStyle = "top: 0.75em; left: 0.75em; transition: transform 0.25s, opacity 0.25s, padding 0.25s ease-in-out; transform-origin: 0 0;";
  let floatingState = "z-index: 2500; transform: translate(0, -2em) scale(0.9);";
  let defaultLabelClass = "bg-white text-gray-600 select-none   leading-none  absolute block p-6 w-auto m-0";
  let normalLabelClass = " z-1500 bg-white ";
  let floatingLabelClass = "z-2500  px-1 pt-3 pb-0 text-sm";
  let defaultInputClass = " m-0  px-6  py-4  h-20 w-full  transition   duration-300 ease-in-out overflow-y-auto block z-2000 leading-none relative outline-none bg-white border border-solid rounded-md  ";

  function addSelectedItem(value) {
    try {
      let count = alasql("VALUE OF SELECT  COUNT(title) FROM ? WHERE title LIKE ? ", [selectedItems, `%${value.title}%`]);

      if (count === 0) {
        dispatch("item-added", {
          _id: value._id,
          title: value.title
        });
        $$invalidate(1, selectedItems = [...selectedItems, value]);
      }

      blurInput();
    } catch (error) {
      console.log(`Adding selected option failed... Error: ${error}`);
    }
  }

  function removeChip(event) {
    try {
      const title = event.target.innerText;

      for (var index = 0; index < selectedItems.length; index++) {
        if (selectedItems[index].title === title) {
          dispatch("item-removed", {
            _id: selectedItems[index]._id,
            title: selectedItems[index].title
          });
          $$invalidate(1, selectedItems = [...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)]);
        }
      }
    } catch (error) {
      console.log(`Removing selected item failed... Error: ${error}`);
    }
  }

  function handleFocus(data) {
    try {
      let div = document.getElementById(data.id);
      div.focus();
      div.contentEditable = true;
      div.innerText.trim;
      $$invalidate(15, input = "");
      $$invalidate(12, active = true);
      $$invalidate(13, isShowing = elementExists("drop-down-wrapper") && filteredOptions.length > 0);
    } catch (error) {
      console.log(`Setting focus on input failed... Error: ${error}`);
    }
  }

  function inputHandler(event) {
    try {
      $$invalidate(12, active = true);
      const keyName = event.key;

      if (keyName === "Enter") {
        if (arrowUpDown) addSelectedItem(highligthedOption);else addSelectedItem(dropOptions[0]);
      } else if (keyName === "ArrowUp") {
        arrowUpDown = true;
        event.stopPropagation();
        event.preventDefault();
        let children = document.getElementById("drop-down-wrapper").children;

        for (let i = lastIndex - 1; i >= 0; i--) {
          highligthedOption = dropOptions[i];
          const child = children[i];
          const prevChild = i > 4 ? children[5] : children[i + 1];
          child.classList.add("bg-blue-200");
          prevChild.classList.remove("bg-blue-200");
          if (i > 0) lastIndex--;
          break;
        }
      } else if (keyName === "ArrowDown") {
        arrowUpDown = true;
        let children = document.getElementById("drop-down-wrapper").children;

        for (let i = lastIndex; i < children.length; i++) {
          if (i < children.length - 1) lastIndex++;
          const child = children[i];
          highligthedOption = dropOptions[i];
          const prevChild = children[i - 1];
          child.classList.add("bg-blue-200");
          prevChild.classList.remove("bg-blue-200");
          break;
        }
      } else if (keyName === "Escape") {
        blurInput();
      }
    } catch (error) {
      console.log(`Keydown Handler on input failed... Error: ${error}`);
    }
  }

  function elementExists(id) {
    try {
      let e = document.getElementById(id);
      return e !== null;
    } catch (err) {
      console.log(`elementExists failed... Error: ${error}`);
    }
  }

  function blurInput() {
    let div = document.getElementById(id);
    div.blur();
    div.contentEditable = false;
    $$invalidate(12, active = $$invalidate(14, hovering = arrowUpDown = false));
    highligthedOption = {};
  }

  const writable_props = ["options", "id", "name", "label", "placeholder", "selectedItems", "color", "inactiveColor", "wrapperClass", "labelClass", "inputClass", "error", "validators", "callback"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<ChipsInput> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("ChipsInput", $$slots, ['default']);

  function div0_input_handler() {
    input = this.innerHTML;
    ((($$invalidate(15, input), $$invalidate(12, active)), $$invalidate(1, selectedItems)), $$invalidate(0, placeholder)), $$invalidate(4, label);
  }

  const focus_handler = () => $$invalidate(12, active = true);

  const blur_handler = () => {
    if (!hovering && (!isShowing || input === "")) blurInput();
  };

  const keydown_handler = event => inputHandler(event);

  const input_handler = () => {
    if (callback !== null) callback();
  };

  const click_handler = item => {
    addSelectedItem({
      _id: item._id,
      title: item.title
    });
  };

  const mouseover_handler = () => $$invalidate(14, hovering = true);

  $$self.$set = $$props => {
    if ("options" in $$props) $$invalidate(28, options = $$props.options);
    if ("id" in $$props) $$invalidate(2, id = $$props.id);
    if ("name" in $$props) $$invalidate(3, name = $$props.name);
    if ("label" in $$props) $$invalidate(4, label = $$props.label);
    if ("placeholder" in $$props) $$invalidate(0, placeholder = $$props.placeholder);
    if ("selectedItems" in $$props) $$invalidate(1, selectedItems = $$props.selectedItems);
    if ("color" in $$props) $$invalidate(5, color = $$props.color);
    if ("inactiveColor" in $$props) $$invalidate(6, inactiveColor = $$props.inactiveColor);
    if ("wrapperClass" in $$props) $$invalidate(7, wrapperClass = $$props.wrapperClass);
    if ("labelClass" in $$props) $$invalidate(8, labelClass = $$props.labelClass);
    if ("inputClass" in $$props) $$invalidate(9, inputClass = $$props.inputClass);
    if ("error" in $$props) $$invalidate(10, error = $$props.error);
    if ("validators" in $$props) $$invalidate(29, validators = $$props.validators);
    if ("callback" in $$props) $$invalidate(11, callback = $$props.callback);
    if ("$$scope" in $$props) $$invalidate(38, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    Chip: _Chip.default,
    createEventDispatcher: _svelte.createEventDispatcher,
    dispatch,
    options,
    id,
    name,
    label,
    placeholder,
    selectedItems,
    color,
    inactiveColor,
    wrapperClass,
    labelClass,
    inputClass,
    error,
    validators,
    callback,
    active,
    isShowing,
    hovering,
    arrowUpDown,
    highligthedOption,
    input,
    lastIndex,
    tempHolder,
    filteredOptions,
    dropOptions,
    defaultLabelStyle,
    floatingState,
    defaultLabelClass,
    normalLabelClass,
    floatingLabelClass,
    defaultInputClass,
    addSelectedItem,
    removeChip,
    handleFocus,
    inputHandler,
    elementExists,
    blurInput
  });

  $$self.$inject_state = $$props => {
    if ("options" in $$props) $$invalidate(28, options = $$props.options);
    if ("id" in $$props) $$invalidate(2, id = $$props.id);
    if ("name" in $$props) $$invalidate(3, name = $$props.name);
    if ("label" in $$props) $$invalidate(4, label = $$props.label);
    if ("placeholder" in $$props) $$invalidate(0, placeholder = $$props.placeholder);
    if ("selectedItems" in $$props) $$invalidate(1, selectedItems = $$props.selectedItems);
    if ("color" in $$props) $$invalidate(5, color = $$props.color);
    if ("inactiveColor" in $$props) $$invalidate(6, inactiveColor = $$props.inactiveColor);
    if ("wrapperClass" in $$props) $$invalidate(7, wrapperClass = $$props.wrapperClass);
    if ("labelClass" in $$props) $$invalidate(8, labelClass = $$props.labelClass);
    if ("inputClass" in $$props) $$invalidate(9, inputClass = $$props.inputClass);
    if ("error" in $$props) $$invalidate(10, error = $$props.error);
    if ("validators" in $$props) $$invalidate(29, validators = $$props.validators);
    if ("callback" in $$props) $$invalidate(11, callback = $$props.callback);
    if ("active" in $$props) $$invalidate(12, active = $$props.active);
    if ("isShowing" in $$props) $$invalidate(13, isShowing = $$props.isShowing);
    if ("hovering" in $$props) $$invalidate(14, hovering = $$props.hovering);
    if ("arrowUpDown" in $$props) arrowUpDown = $$props.arrowUpDown;
    if ("highligthedOption" in $$props) highligthedOption = $$props.highligthedOption;
    if ("input" in $$props) $$invalidate(15, input = $$props.input);
    if ("lastIndex" in $$props) lastIndex = $$props.lastIndex;
    if ("filteredOptions" in $$props) $$invalidate(42, filteredOptions = $$props.filteredOptions);
    if ("dropOptions" in $$props) $$invalidate(16, dropOptions = $$props.dropOptions);
    if ("defaultLabelStyle" in $$props) $$invalidate(17, defaultLabelStyle = $$props.defaultLabelStyle);
    if ("floatingState" in $$props) $$invalidate(18, floatingState = $$props.floatingState);
    if ("defaultLabelClass" in $$props) $$invalidate(19, defaultLabelClass = $$props.defaultLabelClass);
    if ("normalLabelClass" in $$props) $$invalidate(20, normalLabelClass = $$props.normalLabelClass);
    if ("floatingLabelClass" in $$props) $$invalidate(21, floatingLabelClass = $$props.floatingLabelClass);
    if ("defaultInputClass" in $$props) $$invalidate(22, defaultInputClass = $$props.defaultInputClass);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] &
    /*active, label*/
    4112) {
      // Sets the placeholder
      $: {
        if (!active) $$invalidate(0, placeholder = label);else $$invalidate(0, placeholder = tempHolder);
      }
    }

    if ($$self.$$.dirty[0] &
    /*active, selectedItems, input, placeholder, label*/
    36883) {
      //Show the placeholder
      $: {
        if (!active && selectedItems.length < 1 && (input === "," || input === "")) {
          $$invalidate(15, input = placeholder);
        } else if (active && (input.includes(label) || input.includes(placeholder) || input.includes(tempHolder))) {
          $$invalidate(15, input = input.replace(label, ""));
          $$invalidate(15, input = input.replace(tempHolder, ""));
        }
      }
    }

    if ($$self.$$.dirty[0] &
    /*validators*/
    536870912) {
      $: {
        /*  run validators*/
        validators.forEach(v => {
          console.log(v);
        });
      }
    }

    if ($$self.$$.dirty[0] &
    /*active, options, selectedItems, input*/
    268472322 | $$self.$$.dirty[1] &
    /*filteredOptions*/
    2048) {
      //Fliter options for drop down
      $: {
        try {
          if (active) {
            $$invalidate(42, filteredOptions = []);
            options.forEach(option => {
              var count = alasql("VALUE OF SELECT COUNT(title) FROM ? WHERE title === ? ", [selectedItems, option.title]);
              if (count === 0) $$invalidate(42, filteredOptions = [...filteredOptions, option]);
            });
          }

          if (input === "") $$invalidate(16, dropOptions = filteredOptions);else $$invalidate(16, dropOptions = alasql("SELECT _id, title  FROM ? WHERE title LIKE ? ", [filteredOptions, `%${input}%`]));
        } catch (error) {
          console.log(`Filtering options failed... Error: ${error}`);
        }
      }
    }
  };

  return [placeholder, selectedItems, id, name, label, color, inactiveColor, wrapperClass, labelClass, inputClass, error, callback, active, isShowing, hovering, input, dropOptions, defaultLabelStyle, floatingState, defaultLabelClass, normalLabelClass, floatingLabelClass, defaultInputClass, addSelectedItem, removeChip, handleFocus, inputHandler, blurInput, options, validators, $$slots, div0_input_handler, focus_handler, blur_handler, keydown_handler, input_handler, click_handler, mouseover_handler, $$scope];
}

class ChipsInput extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      options: 28,
      id: 2,
      name: 3,
      label: 4,
      placeholder: 0,
      selectedItems: 1,
      color: 5,
      inactiveColor: 6,
      wrapperClass: 7,
      labelClass: 8,
      inputClass: 9,
      error: 10,
      validators: 29,
      callback: 11
    }, [-1, -1]);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "ChipsInput",
      options,
      id: create_fragment.name
    });
  }

  get options() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set options(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get id() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set id(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get name() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set name(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get label() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set label(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get placeholder() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set placeholder(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get selectedItems() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set selectedItems(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get color() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set color(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get inactiveColor() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set inactiveColor(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get wrapperClass() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set wrapperClass(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get labelClass() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set labelClass(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get inputClass() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set inputClass(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get error() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set error(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get validators() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set validators(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get callback() {
    throw new Error("<ChipsInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set callback(value) {
    throw new Error("<ChipsInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = ChipsInput;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","./Chip.svelte":"components/chip_input/Chip.svelte","svelte":"../node_modules/svelte/index.mjs"}],"components/chip_input/ChipInput.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svgs = require("../../assets/svgs");

var _Chip = _interopRequireDefault(require("./Chip.svelte"));

var _svelte = require("svelte");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/chip_input/ChipInput.svelte generated by Svelte v3.23.2 */
const {
  console: console_1
} = _internal.globals;
const file = "components/chip_input/ChipInput.svelte";

const get_endIcon_slot_changes = dirty => ({});

const get_endIcon_slot_context = ctx => ({});

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[44] = list[i];
  return child_ctx;
}

const get_startIcon_slot_changes = dirty => ({});

const get_startIcon_slot_context = ctx => ({}); // (68:2) {#if variant === 'normal'}


function create_if_block_4(ctx) {
  let label_1;
  let t;
  let label_1_class_value;
  const block = {
    c: function create() {
      label_1 = (0, _internal.element)("label");
      t = (0, _internal.text)(
      /*label*/
      ctx[3]);
      (0, _internal.attr_dev)(label_1, "for",
      /*id*/
      ctx[1]);
      (0, _internal.attr_dev)(label_1, "class", label_1_class_value = "pl-1 text-xs select-none text-" + (
      /*active*/
      ctx[29] ?
      /*colors*/
      ctx[11][1] :
      /*colors*/
      ctx[11][2]));
      (0, _internal.add_location)(label_1, file, 68, 4, 2068);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, label_1, anchor);
      (0, _internal.append_dev)(label_1, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*label*/
      8) (0, _internal.set_data_dev)(t,
      /*label*/
      ctx[3]);

      if (dirty[0] &
      /*id*/
      2) {
        (0, _internal.attr_dev)(label_1, "for",
        /*id*/
        ctx[1]);
      }

      if (dirty[0] &
      /*active, colors*/
      536872960 && label_1_class_value !== (label_1_class_value = "pl-1 text-xs select-none text-" + (
      /*active*/
      ctx[29] ?
      /*colors*/
      ctx[11][1] :
      /*colors*/
      ctx[11][2]))) {
        (0, _internal.attr_dev)(label_1, "class", label_1_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(label_1);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: "(68:2) {#if variant === 'normal'}",
    ctx
  });
  return block;
} // (80:4) {#if startIcon}


function create_if_block_3(ctx) {
  let span;
  let span_class_value;
  let current;
  let mounted;
  let dispose;
  const startIcon_slot_template =
  /*$$slots*/
  ctx[36].startIcon;
  const startIcon_slot = (0, _internal.create_slot)(startIcon_slot_template, ctx,
  /*$$scope*/
  ctx[43], get_startIcon_slot_context);
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      if (startIcon_slot) startIcon_slot.c();
      (0, _internal.attr_dev)(span, "class", span_class_value = "absolute select-none top-" +
      /*top*/
      ctx[32] + " left-1 " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]}` : `text-${
      /*colors*/
      ctx[11][2]}`) + "\n        " +
      /*iconsClass*/
      ctx[26] + "\n        " +
      /*leadingIconClass*/
      ctx[27]);
      (0, _internal.add_location)(span, file, 80, 6, 2423);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);

      if (startIcon_slot) {
        startIcon_slot.m(span, null);
      }

      current = true;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(span, "click",
        /*click_handler*/
        ctx[37], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (startIcon_slot) {
        if (startIcon_slot.p && dirty[1] &
        /*$$scope*/
        4096) {
          (0, _internal.update_slot)(startIcon_slot, startIcon_slot_template, ctx,
          /*$$scope*/
          ctx[43], dirty, get_startIcon_slot_changes, get_startIcon_slot_context);
        }
      }

      if (!current || dirty[0] &
      /*active, colors*/
      536872960 | dirty[1] &
      /*top*/
      2 && span_class_value !== (span_class_value = "absolute select-none top-" +
      /*top*/
      ctx[32] + " left-1 " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]}` : `text-${
      /*colors*/
      ctx[11][2]}`) + "\n        " +
      /*iconsClass*/
      ctx[26] + "\n        " +
      /*leadingIconClass*/
      ctx[27])) {
        (0, _internal.attr_dev)(span, "class", span_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(startIcon_slot, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(startIcon_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
      if (startIcon_slot) startIcon_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(80:4) {#if startIcon}",
    ctx
  });
  return block;
} // (95:4) {#if variant !== 'normal'}


function create_if_block_2(ctx) {
  let label_1;
  let t;
  let label_1_class_value;
  const block = {
    c: function create() {
      label_1 = (0, _internal.element)("label");
      t = (0, _internal.text)(
      /*label*/
      ctx[3]);
      (0, _internal.attr_dev)(label_1, "for",
      /*id*/
      ctx[1]);
      (0, _internal.attr_dev)(label_1, "class", label_1_class_value = " select-none leading-none absolute top-" +
      /*top*/
      ctx[32] + " text-sm " + (
      /*startIcon*/
      ctx[15] ? "left-8" : "left-1") + "\n        inline-block w-auto m-0 px-2 py-0 origin-center transition duration-300\n        bg-" +
      /*colors*/
      ctx[11][0] + " bg-transparent " + (
      /*float*/
      ctx[30] ? `transform translate-x-0 -translate-y-${
      /*variant*/
      ctx[14] === "outlined" ?
      /*top*/
      ctx[32] + 2 :
      /*top*/
      ctx[32] - 1} scale-90 ` : "") + "\n        " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]}` : `text-${
      /*colors*/
      ctx[11][2]}`) + "\n        " +
      /*labelClass*/
      ctx[24]);
      (0, _internal.add_location)(label_1, file, 95, 6, 2887);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, label_1, anchor);
      (0, _internal.append_dev)(label_1, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*label*/
      8) (0, _internal.set_data_dev)(t,
      /*label*/
      ctx[3]);

      if (dirty[0] &
      /*id*/
      2) {
        (0, _internal.attr_dev)(label_1, "for",
        /*id*/
        ctx[1]);
      }

      if (dirty[0] &
      /*startIcon, colors, float, variant, active*/
      1610663936 | dirty[1] &
      /*top*/
      2 && label_1_class_value !== (label_1_class_value = " select-none leading-none absolute top-" +
      /*top*/
      ctx[32] + " text-sm " + (
      /*startIcon*/
      ctx[15] ? "left-8" : "left-1") + "\n        inline-block w-auto m-0 px-2 py-0 origin-center transition duration-300\n        bg-" +
      /*colors*/
      ctx[11][0] + " bg-transparent " + (
      /*float*/
      ctx[30] ? `transform translate-x-0 -translate-y-${
      /*variant*/
      ctx[14] === "outlined" ?
      /*top*/
      ctx[32] + 2 :
      /*top*/
      ctx[32] - 1} scale-90 ` : "") + "\n        " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]}` : `text-${
      /*colors*/
      ctx[11][2]}`) + "\n        " +
      /*labelClass*/
      ctx[24])) {
        (0, _internal.attr_dev)(label_1, "class", label_1_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(label_1);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(95:4) {#if variant !== 'normal'}",
    ctx
  });
  return block;
} // (109:8) <Chip classNames="mr-2 mb-2">


function create_default_slot(ctx) {
  let t_value =
  /*i*/
  ctx[44] + "";
  let t;
  const block = {
    c: function create() {
      t = (0, _internal.text)(t_value);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*items*/
      8192 && t_value !== (t_value =
      /*i*/
      ctx[44] + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(t);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(109:8) <Chip classNames=\\\"mr-2 mb-2\\\">",
    ctx
  });
  return block;
} // (108:6) {#each items as i}


function create_each_block(ctx) {
  let chip;
  let current;
  chip = new _Chip.default({
    props: {
      classNames: "mr-2 mb-2",
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx
      }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      (0, _internal.create_component)(chip.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(chip, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      const chip_changes = {};

      if (dirty[0] &
      /*items*/
      8192 | dirty[1] &
      /*$$scope*/
      4096) {
        chip_changes.$$scope = {
          dirty,
          ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(chip, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(108:6) {#each items as i}",
    ctx
  });
  return block;
} // (144:4) {#if endIcon}


function create_if_block_1(ctx) {
  let span;
  let span_class_value;
  let current;
  let mounted;
  let dispose;
  const endIcon_slot_template =
  /*$$slots*/
  ctx[36].endIcon;
  const endIcon_slot = (0, _internal.create_slot)(endIcon_slot_template, ctx,
  /*$$scope*/
  ctx[43], get_endIcon_slot_context);
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      if (endIcon_slot) endIcon_slot.c();
      (0, _internal.attr_dev)(span, "class", span_class_value = "absolute select-none top-" +
      /*top*/
      ctx[32] + " right-2 " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]}` : `text-${
      /*colors*/
      ctx[11][2]}`) + "\n        " +
      /*iconsClass*/
      ctx[26] + "\n        " +
      /*trailingIconClass*/
      ctx[28]);
      (0, _internal.add_location)(span, file, 144, 6, 4431);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);

      if (endIcon_slot) {
        endIcon_slot.m(span, null);
      }

      current = true;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(span, "click",
        /*click_handler_1*/
        ctx[41], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (endIcon_slot) {
        if (endIcon_slot.p && dirty[1] &
        /*$$scope*/
        4096) {
          (0, _internal.update_slot)(endIcon_slot, endIcon_slot_template, ctx,
          /*$$scope*/
          ctx[43], dirty, get_endIcon_slot_changes, get_endIcon_slot_context);
        }
      }

      if (!current || dirty[0] &
      /*active, colors*/
      536872960 | dirty[1] &
      /*top*/
      2 && span_class_value !== (span_class_value = "absolute select-none top-" +
      /*top*/
      ctx[32] + " right-2 " + (
      /*active*/
      ctx[29] ? `text-${
      /*colors*/
      ctx[11][1]}` : `text-${
      /*colors*/
      ctx[11][2]}`) + "\n        " +
      /*iconsClass*/
      ctx[26] + "\n        " +
      /*trailingIconClass*/
      ctx[28])) {
        (0, _internal.attr_dev)(span, "class", span_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(endIcon_slot, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(endIcon_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
      if (endIcon_slot) endIcon_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(144:4) {#if endIcon}",
    ctx
  });
  return block;
} // (160:2) {#if hint !== ''}


function create_if_block(ctx) {
  let div;
  let p;
  let t;
  let div_class_value;
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      p = (0, _internal.element)("p");
      t = (0, _internal.text)(
      /*hint*/
      ctx[5]);
      (0, _internal.add_location)(p, file, 161, 6, 4963);
      (0, _internal.attr_dev)(div, "class", div_class_value = "block mx-3 py-1 text-xs select-none truncate " +
      /*hintClass*/
      ctx[25]);
      (0, _internal.add_location)(div, file, 160, 4, 4886);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      (0, _internal.append_dev)(div, p);
      (0, _internal.append_dev)(p, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*hint*/
      32) (0, _internal.set_data_dev)(t,
      /*hint*/
      ctx[5]);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(160:2) {#if hint !== ''}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div2;
  let t0;
  let div1;
  let t1;
  let t2;
  let div0;
  let t3;
  let input;
  let input_placeholder_value;
  let input_class_value;
  let t4;
  let div1_class_value;
  let div1_resize_listener;
  let t5;
  let div2_class_value;
  let current;
  let mounted;
  let dispose;
  let if_block0 =
  /*variant*/
  ctx[14] === "normal" && create_if_block_4(ctx);
  let if_block1 =
  /*startIcon*/
  ctx[15] && create_if_block_3(ctx);
  let if_block2 =
  /*variant*/
  ctx[14] !== "normal" && create_if_block_2(ctx);
  let each_value =
  /*items*/
  ctx[13];
  (0, _internal.validate_each_argument)(each_value);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const out = i => (0, _internal.transition_out)(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  let if_block3 =
  /*endIcon*/
  ctx[16] && create_if_block_1(ctx);
  let if_block4 =
  /*hint*/
  ctx[5] !== "" && create_if_block(ctx);
  const block = {
    c: function create() {
      div2 = (0, _internal.element)("div");
      if (if_block0) if_block0.c();
      t0 = (0, _internal.space)();
      div1 = (0, _internal.element)("div");
      if (if_block1) if_block1.c();
      t1 = (0, _internal.space)();
      if (if_block2) if_block2.c();
      t2 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      t3 = (0, _internal.space)();
      input = (0, _internal.element)("input");
      t4 = (0, _internal.space)();
      if (if_block3) if_block3.c();
      t5 = (0, _internal.space)();
      if (if_block4) if_block4.c();
      (0, _internal.attr_dev)(input, "id",
      /*id*/
      ctx[1]);
      (0, _internal.attr_dev)(input, "name",
      /*name*/
      ctx[2]);
      (0, _internal.attr_dev)(input, "min",
      /*min*/
      ctx[7]);
      (0, _internal.attr_dev)(input, "max",
      /*max*/
      ctx[8]);
      (0, _internal.attr_dev)(input, "step",
      /*step*/
      ctx[9]);
      (0, _internal.attr_dev)(input, "type",
      /*type*/
      ctx[6]);
      input.readOnly =
      /*readonly*/
      ctx[10];
      (0, _internal.attr_dev)(input, "autocomplete", "off");
      (0, _internal.attr_dev)(input, "placeholder", input_placeholder_value =
      /*variant*/
      ctx[14] === "normal" ?
      /*placeholder*/
      ctx[4] : "");
      (0, _internal.attr_dev)(input, "class", input_class_value = " block h-6 " + (
      /*startIcon*/
      ctx[15] ? "pl-10" : "px-4") + "\n        " + (
      /*endIcon*/
      ctx[16] ? "pr-10" : "px-4") + " m-0 w-auto leading-none transition\n        duration-300 ease-in-out bg-transparent outline-none border-none " +
      /*inputClass*/
      ctx[23]);
      (0, _internal.add_location)(input, file, 110, 6, 3525);
      (0, _internal.attr_dev)(div0, "class", "flex flex-wrap items-center mt-2 ml-2");
      (0, _internal.add_location)(div0, file, 106, 4, 3379);
      (0, _internal.attr_dev)(div1, "class", div1_class_value = "" + (
      /*variantStyle*/
      ctx[33] + " text-" +
      /*colors*/
      ctx[11][2] + "\n   " + (
      /*active*/
      ctx[29] ? `border-${
      /*colors*/
      ctx[11][1]}` :
      /*variant*/
      ctx[14] === "normal" ? ` border-transparent` : ` border-${
      /*colors*/
      ctx[11][2]}`)));
      (0, _internal.add_render_callback)(() =>
      /*div1_elementresize_handler*/
      ctx[42].call(div1));
      (0, _internal.add_location)(div1, file, 75, 2, 2212);
      (0, _internal.attr_dev)(div2, "class", div2_class_value = " " +
      /*width*/
      ctx[12] + " " +
      /*wrapperClass*/
      ctx[22]);
      (0, _internal.add_location)(div2, file, 66, 0, 1997);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div2, anchor);
      if (if_block0) if_block0.m(div2, null);
      (0, _internal.append_dev)(div2, t0);
      (0, _internal.append_dev)(div2, div1);
      if (if_block1) if_block1.m(div1, null);
      (0, _internal.append_dev)(div1, t1);
      if (if_block2) if_block2.m(div1, null);
      (0, _internal.append_dev)(div1, t2);
      (0, _internal.append_dev)(div1, div0);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }

      (0, _internal.append_dev)(div0, t3);
      (0, _internal.append_dev)(div0, input);
      (0, _internal.append_dev)(div1, t4);
      if (if_block3) if_block3.m(div1, null);
      div1_resize_listener = (0, _internal.add_resize_listener)(div1,
      /*div1_elementresize_handler*/
      ctx[42].bind(div1));
      (0, _internal.append_dev)(div2, t5);
      if (if_block4) if_block4.m(div2, null);
      current = true;

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(input, "blur",
        /*blur_handler*/
        ctx[38], false, false, false), (0, _internal.listen_dev)(input, "input",
        /*input_handler*/
        ctx[39], false, false, false), (0, _internal.listen_dev)(input, "focus",
        /*focus_handler*/
        ctx[40], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (
      /*variant*/
      ctx[14] === "normal") {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_4(ctx);
          if_block0.c();
          if_block0.m(div2, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*startIcon*/
      ctx[15]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty[0] &
          /*startIcon*/
          32768) {
            (0, _internal.transition_in)(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_3(ctx);
          if_block1.c();
          (0, _internal.transition_in)(if_block1, 1);
          if_block1.m(div1, t1);
        }
      } else if (if_block1) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        (0, _internal.check_outros)();
      }

      if (
      /*variant*/
      ctx[14] !== "normal") {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block_2(ctx);
          if_block2.c();
          if_block2.m(div1, t2);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }

      if (dirty[0] &
      /*items*/
      8192) {
        each_value =
        /*items*/
        ctx[13];
        (0, _internal.validate_each_argument)(each_value);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            (0, _internal.transition_in)(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            (0, _internal.transition_in)(each_blocks[i], 1);
            each_blocks[i].m(div0, t3);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        (0, _internal.check_outros)();
      }

      if (!current || dirty[0] &
      /*id*/
      2) {
        (0, _internal.attr_dev)(input, "id",
        /*id*/
        ctx[1]);
      }

      if (!current || dirty[0] &
      /*name*/
      4) {
        (0, _internal.attr_dev)(input, "name",
        /*name*/
        ctx[2]);
      }

      if (!current || dirty[0] &
      /*min*/
      128) {
        (0, _internal.attr_dev)(input, "min",
        /*min*/
        ctx[7]);
      }

      if (!current || dirty[0] &
      /*max*/
      256) {
        (0, _internal.attr_dev)(input, "max",
        /*max*/
        ctx[8]);
      }

      if (!current || dirty[0] &
      /*step*/
      512) {
        (0, _internal.attr_dev)(input, "step",
        /*step*/
        ctx[9]);
      }

      if (!current || dirty[0] &
      /*type*/
      64) {
        (0, _internal.attr_dev)(input, "type",
        /*type*/
        ctx[6]);
      }

      if (!current || dirty[0] &
      /*readonly*/
      1024) {
        (0, _internal.prop_dev)(input, "readOnly",
        /*readonly*/
        ctx[10]);
      }

      if (!current || dirty[0] &
      /*variant, placeholder*/
      16400 && input_placeholder_value !== (input_placeholder_value =
      /*variant*/
      ctx[14] === "normal" ?
      /*placeholder*/
      ctx[4] : "")) {
        (0, _internal.attr_dev)(input, "placeholder", input_placeholder_value);
      }

      if (!current || dirty[0] &
      /*startIcon, endIcon*/
      98304 && input_class_value !== (input_class_value = " block h-6 " + (
      /*startIcon*/
      ctx[15] ? "pl-10" : "px-4") + "\n        " + (
      /*endIcon*/
      ctx[16] ? "pr-10" : "px-4") + " m-0 w-auto leading-none transition\n        duration-300 ease-in-out bg-transparent outline-none border-none " +
      /*inputClass*/
      ctx[23])) {
        (0, _internal.attr_dev)(input, "class", input_class_value);
      }

      if (
      /*endIcon*/
      ctx[16]) {
        if (if_block3) {
          if_block3.p(ctx, dirty);

          if (dirty[0] &
          /*endIcon*/
          65536) {
            (0, _internal.transition_in)(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block_1(ctx);
          if_block3.c();
          (0, _internal.transition_in)(if_block3, 1);
          if_block3.m(div1, null);
        }
      } else if (if_block3) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        (0, _internal.check_outros)();
      }

      if (!current || dirty[0] &
      /*colors, active, variant*/
      536889344 | dirty[1] &
      /*variantStyle*/
      4 && div1_class_value !== (div1_class_value = "" + (
      /*variantStyle*/
      ctx[33] + " text-" +
      /*colors*/
      ctx[11][2] + "\n   " + (
      /*active*/
      ctx[29] ? `border-${
      /*colors*/
      ctx[11][1]}` :
      /*variant*/
      ctx[14] === "normal" ? ` border-transparent` : ` border-${
      /*colors*/
      ctx[11][2]}`)))) {
        (0, _internal.attr_dev)(div1, "class", div1_class_value);
      }

      if (
      /*hint*/
      ctx[5] !== "") {
        if (if_block4) {
          if_block4.p(ctx, dirty);
        } else {
          if_block4 = create_if_block(ctx);
          if_block4.c();
          if_block4.m(div2, null);
        }
      } else if (if_block4) {
        if_block4.d(1);
        if_block4 = null;
      }

      if (!current || dirty[0] &
      /*width*/
      4096 && div2_class_value !== (div2_class_value = " " +
      /*width*/
      ctx[12] + " " +
      /*wrapperClass*/
      ctx[22])) {
        (0, _internal.attr_dev)(div2, "class", div2_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block1);

      for (let i = 0; i < each_value.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      (0, _internal.transition_in)(if_block3);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block1);
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      (0, _internal.transition_out)(if_block3);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div2);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
      (0, _internal.destroy_each)(each_blocks, detaching);
      if (if_block3) if_block3.d();
      div1_resize_listener();
      if (if_block4) if_block4.d();
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  const dispatch = (0, _svelte.createEventDispatcher)();
  let active = false;
  let float = false;
  let {
    id = ""
  } = $$props;
  let {
    name = ""
  } = $$props;
  let {
    label = ""
  } = $$props;
  let {
    placeholder = ""
  } = $$props;
  let {
    value = ""
  } = $$props;
  let {
    hint = ""
  } = $$props;
  let {
    type = "text"
  } = $$props;
  let {
    min = 0
  } = $$props;
  let {
    max = 10000000
  } = $$props;
  let {
    step = 1
  } = $$props;
  let {
    readonly = false
  } = $$props;
  let {
    colors = ["comet", "primary", "cadetblue"]
  } = $$props; //bg, focus, blur

  let {
    width = "w-full"
  } = $$props;
  let {
    items = ["Item One"]
  } = $$props;
  let {
    variant = "outlined"
  } = $$props; //|"standard" | "normal"

  let {
    startIcon = false
  } = $$props;
  let {
    endIcon = false
  } = $$props;
  let {
    validators = []
  } = $$props;
  let {
    onInput = null
  } = $$props;
  let {
    onFocus = null
  } = $$props;
  let {
    onBlur = null
  } = $$props;
  let {
    onStartIconClicked = null
  } = $$props;
  let {
    onEndIconClicked = null
  } = $$props;
  const wrapperClass = "mb-5";
  const inputClass = ``;
  const labelClass = "";
  const hintClass = "text-red-600";
  const iconsClass = "";
  const leadingIconClass = active ? ` text-${colors[1]} ` : ` text-${colors[2]} `;
  const trailingIconClass = active ? ` text-${colors[1]} ` : ` text-${colors[2]} `;
  let h, top;
  let variantStyle;
  const writable_props = ["id", "name", "label", "placeholder", "value", "hint", "type", "min", "max", "step", "readonly", "colors", "width", "items", "variant", "startIcon", "endIcon", "validators", "onInput", "onFocus", "onBlur", "onStartIconClicked", "onEndIconClicked"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<ChipInput> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("ChipInput", $$slots, ['startIcon', 'endIcon']);

  const click_handler = () => {
    dispatch("iconClicked", {
      icon: "first"
    });
    if (onStartIconClicked) onStartIconClicked();
  };

  const blur_handler = () => {
    $$invalidate(29, active = false);
    $$invalidate(30, float = items !== []);
    dispatch("blur");
    if (onBlur) onBlur();
  };

  const input_handler = e => {
    $$invalidate(0, value = e.target.value);
    dispatch("input");
    if (onInput) onInput();
  };

  const focus_handler = () => {
    $$invalidate(29, active = true);
    $$invalidate(30, float = true);
    dispatch("focus");
    if (onFocus) onFocus();
  };

  const click_handler_1 = () => {
    dispatch("iconClicked", {
      icon: "last"
    });
    if (onEndIconClicked) onEndIconClicked();
  };

  function div1_elementresize_handler() {
    h = this.clientHeight;
    $$invalidate(31, h);
  }

  $$self.$set = $$props => {
    if ("id" in $$props) $$invalidate(1, id = $$props.id);
    if ("name" in $$props) $$invalidate(2, name = $$props.name);
    if ("label" in $$props) $$invalidate(3, label = $$props.label);
    if ("placeholder" in $$props) $$invalidate(4, placeholder = $$props.placeholder);
    if ("value" in $$props) $$invalidate(0, value = $$props.value);
    if ("hint" in $$props) $$invalidate(5, hint = $$props.hint);
    if ("type" in $$props) $$invalidate(6, type = $$props.type);
    if ("min" in $$props) $$invalidate(7, min = $$props.min);
    if ("max" in $$props) $$invalidate(8, max = $$props.max);
    if ("step" in $$props) $$invalidate(9, step = $$props.step);
    if ("readonly" in $$props) $$invalidate(10, readonly = $$props.readonly);
    if ("colors" in $$props) $$invalidate(11, colors = $$props.colors);
    if ("width" in $$props) $$invalidate(12, width = $$props.width);
    if ("items" in $$props) $$invalidate(13, items = $$props.items);
    if ("variant" in $$props) $$invalidate(14, variant = $$props.variant);
    if ("startIcon" in $$props) $$invalidate(15, startIcon = $$props.startIcon);
    if ("endIcon" in $$props) $$invalidate(16, endIcon = $$props.endIcon);
    if ("validators" in $$props) $$invalidate(35, validators = $$props.validators);
    if ("onInput" in $$props) $$invalidate(17, onInput = $$props.onInput);
    if ("onFocus" in $$props) $$invalidate(18, onFocus = $$props.onFocus);
    if ("onBlur" in $$props) $$invalidate(19, onBlur = $$props.onBlur);
    if ("onStartIconClicked" in $$props) $$invalidate(20, onStartIconClicked = $$props.onStartIconClicked);
    if ("onEndIconClicked" in $$props) $$invalidate(21, onEndIconClicked = $$props.onEndIconClicked);
    if ("$$scope" in $$props) $$invalidate(43, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    SVG: _svgs.SVG,
    Chip: _Chip.default,
    createEventDispatcher: _svelte.createEventDispatcher,
    onMount: _svelte.onMount,
    dispatch,
    active,
    float,
    id,
    name,
    label,
    placeholder,
    value,
    hint,
    type,
    min,
    max,
    step,
    readonly,
    colors,
    width,
    items,
    variant,
    startIcon,
    endIcon,
    validators,
    onInput,
    onFocus,
    onBlur,
    onStartIconClicked,
    onEndIconClicked,
    wrapperClass,
    inputClass,
    labelClass,
    hintClass,
    iconsClass,
    leadingIconClass,
    trailingIconClass,
    h,
    top,
    variantStyle
  });

  $$self.$inject_state = $$props => {
    if ("active" in $$props) $$invalidate(29, active = $$props.active);
    if ("float" in $$props) $$invalidate(30, float = $$props.float);
    if ("id" in $$props) $$invalidate(1, id = $$props.id);
    if ("name" in $$props) $$invalidate(2, name = $$props.name);
    if ("label" in $$props) $$invalidate(3, label = $$props.label);
    if ("placeholder" in $$props) $$invalidate(4, placeholder = $$props.placeholder);
    if ("value" in $$props) $$invalidate(0, value = $$props.value);
    if ("hint" in $$props) $$invalidate(5, hint = $$props.hint);
    if ("type" in $$props) $$invalidate(6, type = $$props.type);
    if ("min" in $$props) $$invalidate(7, min = $$props.min);
    if ("max" in $$props) $$invalidate(8, max = $$props.max);
    if ("step" in $$props) $$invalidate(9, step = $$props.step);
    if ("readonly" in $$props) $$invalidate(10, readonly = $$props.readonly);
    if ("colors" in $$props) $$invalidate(11, colors = $$props.colors);
    if ("width" in $$props) $$invalidate(12, width = $$props.width);
    if ("items" in $$props) $$invalidate(13, items = $$props.items);
    if ("variant" in $$props) $$invalidate(14, variant = $$props.variant);
    if ("startIcon" in $$props) $$invalidate(15, startIcon = $$props.startIcon);
    if ("endIcon" in $$props) $$invalidate(16, endIcon = $$props.endIcon);
    if ("validators" in $$props) $$invalidate(35, validators = $$props.validators);
    if ("onInput" in $$props) $$invalidate(17, onInput = $$props.onInput);
    if ("onFocus" in $$props) $$invalidate(18, onFocus = $$props.onFocus);
    if ("onBlur" in $$props) $$invalidate(19, onBlur = $$props.onBlur);
    if ("onStartIconClicked" in $$props) $$invalidate(20, onStartIconClicked = $$props.onStartIconClicked);
    if ("onEndIconClicked" in $$props) $$invalidate(21, onEndIconClicked = $$props.onEndIconClicked);
    if ("h" in $$props) $$invalidate(31, h = $$props.h);
    if ("top" in $$props) $$invalidate(32, top = $$props.top);
    if ("variantStyle" in $$props) $$invalidate(33, variantStyle = $$props.variantStyle);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty[1] &
    /*validators*/
    16) {
      $: {
        /*  run validators*/
        validators.forEach(v => {
          console.log(v);
        });
      }
    }

    if ($$self.$$.dirty[1] &
    /*h, top*/
    3) {
      $: {
        $$invalidate(32, top = Math.trunc(h / 8) - 2);
        console.log("height", h, top);
      }
    }

    if ($$self.$$.dirty[0] &
    /*variant, active, colors*/
    536889344 | $$self.$$.dirty[1] &
    /*h*/
    1) {
      $: {
        $$invalidate(33, variantStyle = variant === "outlined" ? `border-solid rounded ${active ? " border-2 " : " border "}` : variant === "standard" ? `border-t-0 border-l-0 border-r-0 border-b bg-${colors[0]} 
           ${active ? " border-b-2 " : " border-b "} ${h < 49 ? " pt-2 " : ""}` : `border-solid rounded bg-${colors[0]}  ${active ? " border-2 " : " border "}`);
      }
    }
  };

  return [value, id, name, label, placeholder, hint, type, min, max, step, readonly, colors, width, items, variant, startIcon, endIcon, onInput, onFocus, onBlur, onStartIconClicked, onEndIconClicked, wrapperClass, inputClass, labelClass, hintClass, iconsClass, leadingIconClass, trailingIconClass, active, float, h, top, variantStyle, dispatch, validators, $$slots, click_handler, blur_handler, input_handler, focus_handler, click_handler_1, div1_elementresize_handler, $$scope];
}

class ChipInput extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      id: 1,
      name: 2,
      label: 3,
      placeholder: 4,
      value: 0,
      hint: 5,
      type: 6,
      min: 7,
      max: 8,
      step: 9,
      readonly: 10,
      colors: 11,
      width: 12,
      items: 13,
      variant: 14,
      startIcon: 15,
      endIcon: 16,
      validators: 35,
      onInput: 17,
      onFocus: 18,
      onBlur: 19,
      onStartIconClicked: 20,
      onEndIconClicked: 21,
      wrapperClass: 22,
      inputClass: 23,
      labelClass: 24,
      hintClass: 25,
      iconsClass: 26,
      leadingIconClass: 27,
      trailingIconClass: 28
    }, [-1, -1]);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "ChipInput",
      options,
      id: create_fragment.name
    });
  }

  get id() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set id(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get name() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set name(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get label() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set label(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get placeholder() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set placeholder(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get value() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set value(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get hint() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set hint(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get type() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set type(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get min() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set min(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get max() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set max(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get step() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set step(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get readonly() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set readonly(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get colors() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set colors(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get width() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set width(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get items() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set items(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get variant() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set variant(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get startIcon() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set startIcon(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get endIcon() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set endIcon(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get validators() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set validators(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get onInput() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set onInput(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get onFocus() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set onFocus(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get onBlur() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set onBlur(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get onStartIconClicked() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set onStartIconClicked(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get onEndIconClicked() {
    throw new Error("<ChipInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set onEndIconClicked(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get wrapperClass() {
    return this.$$.ctx[22];
  }

  set wrapperClass(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get inputClass() {
    return this.$$.ctx[23];
  }

  set inputClass(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get labelClass() {
    return this.$$.ctx[24];
  }

  set labelClass(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get hintClass() {
    return this.$$.ctx[25];
  }

  set hintClass(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get iconsClass() {
    return this.$$.ctx[26];
  }

  set iconsClass(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get leadingIconClass() {
    return this.$$.ctx[27];
  }

  set leadingIconClass(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get trailingIconClass() {
    return this.$$.ctx[28];
  }

  set trailingIconClass(value) {
    throw new Error("<ChipInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = ChipInput;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","../../assets/svgs":"assets/svgs.ts","./Chip.svelte":"components/chip_input/Chip.svelte","svelte":"../node_modules/svelte/index.mjs"}],"components/chip_input/TestLabel.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

/* components/chip_input/TestLabel.svelte generated by Svelte v3.23.2 */
const {
  console: console_1
} = _internal.globals;
const file = "components/chip_input/TestLabel.svelte";

function create_fragment(ctx) {
  let div0;
  let label;
  let t0;
  let label_class_value;
  let t1;
  let input0;
  let input0_class_value;
  let div0_resize_listener;
  let t2;
  let div1;
  let input1;
  let t3;
  let t4;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div0 = (0, _internal.element)("div");
      label = (0, _internal.element)("label");
      t0 = (0, _internal.text)("Label");
      t1 = (0, _internal.space)();
      input0 = (0, _internal.element)("input");
      t2 = (0, _internal.space)();
      div1 = (0, _internal.element)("div");
      input1 = (0, _internal.element)("input");
      t3 = (0, _internal.space)();
      t4 = (0, _internal.text)(
      /*checked*/
      ctx[0]);
      (0, _internal.attr_dev)(label, "class", label_class_value = "absolute ml-2 transition-all duration-300 ease-linear transform " + (
      /*checked*/
      ctx[0] ? "-translate-y-3 scale-75  " : "translate-y-{h/4}"));
      (0, _internal.add_location)(label, file, 10, 2, 164);
      (0, _internal.attr_dev)(input0, "type", "text");
      (0, _internal.attr_dev)(input0, "class", input0_class_value = "" + (
      /*height*/
      ctx[2] + " overflow-y-auto"));
      (0, _internal.add_location)(input0, file, 11, 2, 319);
      (0, _internal.attr_dev)(div0, "class", "relative inline-block border");
      (0, _internal.add_render_callback)(() =>
      /*div0_elementresize_handler*/
      ctx[3].call(div0));
      (0, _internal.add_location)(div0, file, 9, 0, 94);
      (0, _internal.attr_dev)(input1, "type", "checkbox");
      (0, _internal.add_location)(input1, file, 16, 2, 404);
      (0, _internal.attr_dev)(div1, "class", "my-4");
      (0, _internal.add_location)(div1, file, 15, 0, 383);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div0, anchor);
      (0, _internal.append_dev)(div0, label);
      (0, _internal.append_dev)(label, t0);
      (0, _internal.append_dev)(div0, t1);
      (0, _internal.append_dev)(div0, input0);
      div0_resize_listener = (0, _internal.add_resize_listener)(div0,
      /*div0_elementresize_handler*/
      ctx[3].bind(div0));
      (0, _internal.insert_dev)(target, t2, anchor);
      (0, _internal.insert_dev)(target, div1, anchor);
      (0, _internal.append_dev)(div1, input1);
      input1.checked =
      /*checked*/
      ctx[0];
      (0, _internal.append_dev)(div1, t3);
      (0, _internal.append_dev)(div1, t4);

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(input1, "change",
        /*input1_change_handler*/
        ctx[4]);
        mounted = true;
      }
    },
    p: function update(ctx, [dirty]) {
      if (dirty &
      /*checked*/
      1 && label_class_value !== (label_class_value = "absolute ml-2 transition-all duration-300 ease-linear transform " + (
      /*checked*/
      ctx[0] ? "-translate-y-3 scale-75  " : "translate-y-{h/4}"))) {
        (0, _internal.attr_dev)(label, "class", label_class_value);
      }

      if (dirty &
      /*checked*/
      1) {
        input1.checked =
        /*checked*/
        ctx[0];
      }

      if (dirty &
      /*checked*/
      1) (0, _internal.set_data_dev)(t4,
      /*checked*/
      ctx[0]);
    },
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div0);
      div0_resize_listener();
      if (detaching) (0, _internal.detach_dev)(t2);
      if (detaching) (0, _internal.detach_dev)(div1);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let checked = false;
  let height = "h-10";
  let h;
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<TestLabel> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("TestLabel", $$slots, []);

  function div0_elementresize_handler() {
    h = this.clientHeight;
    $$invalidate(1, h);
  }

  function input1_change_handler() {
    checked = this.checked;
    $$invalidate(0, checked);
  }

  $$self.$capture_state = () => ({
    checked,
    height,
    h
  });

  $$self.$inject_state = $$props => {
    if ("checked" in $$props) $$invalidate(0, checked = $$props.checked);
    if ("height" in $$props) $$invalidate(2, height = $$props.height);
    if ("h" in $$props) $$invalidate(1, h = $$props.h);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*h*/
    2) {
      $: {
        console.log(h);
      }
    }
  };

  return [checked, h, height, div0_elementresize_handler, input1_change_handler];
}

class TestLabel extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "TestLabel",
      options,
      id: create_fragment.name
    });
  }

}

var _default = TestLabel;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs"}],"components/pages/FormOne.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = void 0;
let sections = [{
  title: 'Academic Information',
  // class: 'inline-block w-40p',
  rows: [{
    fields: [{
      id: 'appID',
      name: 'appID',
      label: 'Application ID',
      width: 'w-full md:w-45p'
    }, {
      id: 'examsNo',
      name: 'examsNo',
      label: 'Exams Number',
      width: 'w-full md:w-50p'
    }]
  }, {
    fields: [{
      id: 'programme',
      name: 'programme',
      label: 'Programme',
      width: 'w-full md:w-50p'
    }, {
      id: 'entryLevel',
      name: 'entryLevel',
      label: 'Entry Level',
      width: 'w-45p md:w-20p',
      type: "number",
      min: 100,
      max: 600,
      step: 100
    }, {
      id: 'currentLevel',
      name: 'currentLevel',
      label: 'Current Level',
      width: 'w-45p md:w-20p',
      type: "number",
      min: 100,
      max: 600,
      step: 100
    }]
  }, {
    fields: [{
      id: 'booksGiven',
      name: 'booksGiven',
      label: 'Books Given',
      width: 'w-100p'
    }]
  }]
}, {
  title: 'Personal Information',
  // class: 'inline-block w-40p',
  rows: [{
    fields: [{
      id: 'surname',
      name: 'surname',
      label: 'Surname',
      width: 'w-full md:w-45p'
    }, {
      id: 'othernames',
      name: 'othernames',
      label: 'Other Names',
      width: 'w-full md:w-50p'
    }]
  }, {
    fields: [{
      id: 'dob',
      name: 'dob',
      label: 'Date of birth',
      width: 'w-full md:w-25p',
      type: "date"
    }, {
      id: 'gender',
      name: 'gender',
      label: 'Gender',
      width: 'w-full md:w-25p'
    }, {
      id: 'qualification',
      name: 'qualification',
      label: 'Qualification',
      width: 'w-full md:w-40p'
    }]
  }]
}, {
  title: 'Contact',
  // class: 'inline-block w-40p',
  rows: [{
    fields: [{
      id: 'phoneNo',
      name: 'phoneNo',
      label: 'Phone Number',
      width: 'w-full md:w-30p'
    }, {
      id: 'email',
      name: 'email',
      label: 'Email',
      width: 'w-full md:w-30p'
    }, {
      id: 'address',
      name: 'address',
      label: 'Address',
      width: 'w-full md:w-30p'
    }]
  }]
}];
let formOptions = {
  id: 'Form1',
  sections: sections
};
exports.options = formOptions;
},{}],"components/pages/PageOne.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

var _main_store = require("../../main_store");

var _FormBuilder = _interopRequireDefault(require("../form_builder/FormBuilder.svelte"));

var _ToggleSwitch = _interopRequireDefault(require("../toggle_switch/ToggleSwitch.svelte"));

var _RadioButton = _interopRequireDefault(require("../radio_button/RadioButton.svelte"));

var _Chip = _interopRequireDefault(require("../chip_input/Chip.svelte"));

var _ChipsInput = _interopRequireDefault(require("../chip_input/ChipsInput.svelte"));

var _ChipInput = _interopRequireDefault(require("../chip_input/ChipInput.svelte"));

var _TestLabel = _interopRequireDefault(require("../chip_input/TestLabel.svelte"));

var _FormOne = require("./FormOne");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/pages/PageOne.svelte generated by Svelte v3.23.2 */
const {
  console: console_1
} = _internal.globals;
const file = "components/pages/PageOne.svelte"; // (43:6) <Chip>

function create_default_slot(ctx) {
  let t;
  const block = {
    c: function create() {
      t = (0, _internal.text)("Some Text");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(t);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(43:6) <Chip>",
    ctx
  });
  return block;
} // (23:6)    


function fallback_block(ctx) {
  let div0;
  let formbuilder;
  let updating_data;
  let t0;
  let div4;
  let t1;
  let input0;
  let t2;
  let label0;
  let t4;
  let input1;
  let t5;
  let label1;
  let t7;
  let input2;
  let t8;
  let label2;
  let t10;
  let div3;
  let div1;
  let toggleswitch;
  let t11;
  let radiobutton;
  let updating_value;
  let t12;
  let chip0;
  let t13;
  let chip1;
  let t14;
  let chipinput;
  let t15;
  let chipsinput;
  let t16;
  let div2;
  let testlabel;
  let current;
  let mounted;
  let dispose;

  function formbuilder_data_binding(value) {
    /*formbuilder_data_binding*/
    ctx[4].call(null, value);
  }

  let formbuilder_props = {
    options: _FormOne.options
  };

  if (
  /*data*/
  ctx[1] !== void 0) {
    formbuilder_props.data =
    /*data*/
    ctx[1];
  }

  formbuilder = new _FormBuilder.default({
    props: formbuilder_props,
    $$inline: true
  });

  _internal.binding_callbacks.push(() => (0, _internal.bind)(formbuilder, "data", formbuilder_data_binding));

  toggleswitch = new _ToggleSwitch.default({
    $$inline: true
  });
  toggleswitch.$on("click",
  /*click_handler*/
  ctx[9]);

  function radiobutton_value_binding(value) {
    /*radiobutton_value_binding*/
    ctx[10].call(null, value);
  }

  let radiobutton_props = {};

  if (
  /*value*/
  ctx[2] !== void 0) {
    radiobutton_props.value =
    /*value*/
    ctx[2];
  }

  radiobutton = new _RadioButton.default({
    props: radiobutton_props,
    $$inline: true
  });

  _internal.binding_callbacks.push(() => (0, _internal.bind)(radiobutton, "value", radiobutton_value_binding));

  radiobutton.$on("click",
  /*click_handler_1*/
  ctx[11]);
  chip0 = new _Chip.default({
    $$inline: true
  });
  chip1 = new _Chip.default({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx
      }
    },
    $$inline: true
  });
  chipinput = new _ChipInput.default({
    props: {
      id: "test",
      name: "label",
      label: "Chip Input"
    },
    $$inline: true
  });
  chipsinput = new _ChipsInput.default({
    props: {
      id: "tests",
      name: "label",
      label: "Chip Input"
    },
    $$inline: true
  });
  testlabel = new _TestLabel.default({
    $$inline: true
  });
  const block = {
    c: function create() {
      div0 = (0, _internal.element)("div");
      (0, _internal.create_component)(formbuilder.$$.fragment);
      t0 = (0, _internal.space)();
      div4 = (0, _internal.element)("div");
      t1 = (0, _internal.text)("I'm a big useles card just taking up space\n    ");
      input0 = (0, _internal.element)("input");
      t2 = (0, _internal.space)();
      label0 = (0, _internal.element)("label");
      label0.textContent = "static";
      t4 = (0, _internal.space)();
      input1 = (0, _internal.element)("input");
      t5 = (0, _internal.space)();
      label1 = (0, _internal.element)("label");
      label1.textContent = "sticky";
      t7 = (0, _internal.space)();
      input2 = (0, _internal.element)("input");
      t8 = (0, _internal.space)();
      label2 = (0, _internal.element)("label");
      label2.textContent = "float";
      t10 = (0, _internal.space)();
      div3 = (0, _internal.element)("div");
      div1 = (0, _internal.element)("div");
      (0, _internal.create_component)(toggleswitch.$$.fragment);
      t11 = (0, _internal.space)();
      (0, _internal.create_component)(radiobutton.$$.fragment);
      t12 = (0, _internal.space)();
      (0, _internal.create_component)(chip0.$$.fragment);
      t13 = (0, _internal.space)();
      (0, _internal.create_component)(chip1.$$.fragment);
      t14 = (0, _internal.space)();
      (0, _internal.create_component)(chipinput.$$.fragment);
      t15 = (0, _internal.space)();
      (0, _internal.create_component)(chipsinput.$$.fragment);
      t16 = (0, _internal.space)();
      div2 = (0, _internal.element)("div");
      (0, _internal.create_component)(testlabel.$$.fragment);
      (0, _internal.attr_dev)(div0, "class", "w-full px-6 py-4 rounded text-cadetblue bg-haiti ");
      (0, _internal.add_location)(div0, file, 24, 2, 785);
      (0, _internal.attr_dev)(input0, "type", "radio");
      input0.__value = "static";
      input0.value = input0.__value;
      (0, _internal.attr_dev)(input0, "id", "static");
      /*$$binding_groups*/

      ctx[6][0].push(input0);
      (0, _internal.add_location)(input0, file, 30, 4, 1042);
      (0, _internal.attr_dev)(label0, "for", "static");
      (0, _internal.add_location)(label0, file, 31, 4, 1120);
      (0, _internal.attr_dev)(input1, "type", "radio");
      input1.__value = "sticky";
      input1.value = input1.__value;
      (0, _internal.attr_dev)(input1, "id", "sticky");
      /*$$binding_groups*/

      ctx[6][0].push(input1);
      (0, _internal.add_location)(input1, file, 32, 4, 1159);
      (0, _internal.attr_dev)(label1, "for", "sticky");
      (0, _internal.add_location)(label1, file, 33, 4, 1237);
      (0, _internal.attr_dev)(input2, "type", "radio");
      input2.__value = "float";
      input2.value = input2.__value;
      (0, _internal.attr_dev)(input2, "id", "float");
      /*$$binding_groups*/

      ctx[6][0].push(input2);
      (0, _internal.add_location)(input2, file, 34, 4, 1276);
      (0, _internal.attr_dev)(label2, "for", "float");
      (0, _internal.add_location)(label2, file, 35, 4, 1352);
      (0, _internal.attr_dev)(div1, "class", "m-10 ");
      (0, _internal.add_location)(div1, file, 37, 6, 1419);
      (0, _internal.attr_dev)(div2, "class", "my-4");
      (0, _internal.add_location)(div2, file, 46, 6, 1795);
      (0, _internal.attr_dev)(div3, "class", "p-12 m-12");
      (0, _internal.add_location)(div3, file, 36, 4, 1389);
      (0, _internal.attr_dev)(div4, "class", "w-full my-2 text-black bg-white rounded-md h-205");
      (0, _internal.add_location)(div4, file, 28, 2, 928);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div0, anchor);
      (0, _internal.mount_component)(formbuilder, div0, null);
      (0, _internal.insert_dev)(target, t0, anchor);
      (0, _internal.insert_dev)(target, div4, anchor);
      (0, _internal.append_dev)(div4, t1);
      (0, _internal.append_dev)(div4, input0);
      input0.checked = input0.__value ===
      /*position*/
      ctx[0];
      (0, _internal.append_dev)(div4, t2);
      (0, _internal.append_dev)(div4, label0);
      (0, _internal.append_dev)(div4, t4);
      (0, _internal.append_dev)(div4, input1);
      input1.checked = input1.__value ===
      /*position*/
      ctx[0];
      (0, _internal.append_dev)(div4, t5);
      (0, _internal.append_dev)(div4, label1);
      (0, _internal.append_dev)(div4, t7);
      (0, _internal.append_dev)(div4, input2);
      input2.checked = input2.__value ===
      /*position*/
      ctx[0];
      (0, _internal.append_dev)(div4, t8);
      (0, _internal.append_dev)(div4, label2);
      (0, _internal.append_dev)(div4, t10);
      (0, _internal.append_dev)(div4, div3);
      (0, _internal.append_dev)(div3, div1);
      (0, _internal.mount_component)(toggleswitch, div1, null);
      (0, _internal.append_dev)(div1, t11);
      (0, _internal.mount_component)(radiobutton, div1, null);
      (0, _internal.append_dev)(div3, t12);
      (0, _internal.mount_component)(chip0, div3, null);
      (0, _internal.append_dev)(div3, t13);
      (0, _internal.mount_component)(chip1, div3, null);
      (0, _internal.append_dev)(div3, t14);
      (0, _internal.mount_component)(chipinput, div3, null);
      (0, _internal.append_dev)(div3, t15);
      (0, _internal.mount_component)(chipsinput, div3, null);
      (0, _internal.append_dev)(div3, t16);
      (0, _internal.append_dev)(div3, div2);
      (0, _internal.mount_component)(testlabel, div2, null);
      current = true;

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(input0, "change",
        /*input0_change_handler*/
        ctx[5]), (0, _internal.listen_dev)(input1, "change",
        /*input1_change_handler*/
        ctx[7]), (0, _internal.listen_dev)(input2, "change",
        /*input2_change_handler*/
        ctx[8])];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      const formbuilder_changes = {};

      if (!updating_data && dirty &
      /*data*/
      2) {
        updating_data = true;
        formbuilder_changes.data =
        /*data*/
        ctx[1];
        (0, _internal.add_flush_callback)(() => updating_data = false);
      }

      formbuilder.$set(formbuilder_changes);

      if (dirty &
      /*position*/
      1) {
        input0.checked = input0.__value ===
        /*position*/
        ctx[0];
      }

      if (dirty &
      /*position*/
      1) {
        input1.checked = input1.__value ===
        /*position*/
        ctx[0];
      }

      if (dirty &
      /*position*/
      1) {
        input2.checked = input2.__value ===
        /*position*/
        ctx[0];
      }

      const radiobutton_changes = {};

      if (!updating_value && dirty &
      /*value*/
      4) {
        updating_value = true;
        radiobutton_changes.value =
        /*value*/
        ctx[2];
        (0, _internal.add_flush_callback)(() => updating_value = false);
      }

      radiobutton.$set(radiobutton_changes);
      const chip1_changes = {};

      if (dirty &
      /*$$scope*/
      4096) {
        chip1_changes.$$scope = {
          dirty,
          ctx
        };
      }

      chip1.$set(chip1_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(formbuilder.$$.fragment, local);
      (0, _internal.transition_in)(toggleswitch.$$.fragment, local);
      (0, _internal.transition_in)(radiobutton.$$.fragment, local);
      (0, _internal.transition_in)(chip0.$$.fragment, local);
      (0, _internal.transition_in)(chip1.$$.fragment, local);
      (0, _internal.transition_in)(chipinput.$$.fragment, local);
      (0, _internal.transition_in)(chipsinput.$$.fragment, local);
      (0, _internal.transition_in)(testlabel.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(formbuilder.$$.fragment, local);
      (0, _internal.transition_out)(toggleswitch.$$.fragment, local);
      (0, _internal.transition_out)(radiobutton.$$.fragment, local);
      (0, _internal.transition_out)(chip0.$$.fragment, local);
      (0, _internal.transition_out)(chip1.$$.fragment, local);
      (0, _internal.transition_out)(chipinput.$$.fragment, local);
      (0, _internal.transition_out)(chipsinput.$$.fragment, local);
      (0, _internal.transition_out)(testlabel.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div0);
      (0, _internal.destroy_component)(formbuilder);
      if (detaching) (0, _internal.detach_dev)(t0);
      if (detaching) (0, _internal.detach_dev)(div4);
      /*$$binding_groups*/

      ctx[6][0].splice(
      /*$$binding_groups*/
      ctx[6][0].indexOf(input0), 1);
      /*$$binding_groups*/

      ctx[6][0].splice(
      /*$$binding_groups*/
      ctx[6][0].indexOf(input1), 1);
      /*$$binding_groups*/

      ctx[6][0].splice(
      /*$$binding_groups*/
      ctx[6][0].indexOf(input2), 1);
      (0, _internal.destroy_component)(toggleswitch);
      (0, _internal.destroy_component)(radiobutton);
      (0, _internal.destroy_component)(chip0);
      (0, _internal.destroy_component)(chip1);
      (0, _internal.destroy_component)(chipinput);
      (0, _internal.destroy_component)(chipsinput);
      (0, _internal.destroy_component)(testlabel);
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(23:6)    ",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let current;
  const default_slot_template =
  /*$$slots*/
  ctx[3].default;
  const default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[12], null);
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  const block = {
    c: function create() {
      if (default_slot_or_fallback) default_slot_or_fallback.c();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, [dirty]) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        4096) {
          (0, _internal.update_slot)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[12], dirty, null, null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && dirty &
        /*value, position, data*/
        7) {
          default_slot_or_fallback.p(ctx, dirty);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let dispatch = (0, _svelte.createEventDispatcher)();
  let position;
  let data;
  let value;
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<PageOne> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("PageOne", $$slots, ['default']);
  const $$binding_groups = [[]];

  function formbuilder_data_binding(value) {
    data = value;
    $$invalidate(1, data);
  }

  function input0_change_handler() {
    position = this.__value;
    $$invalidate(0, position);
  }

  function input1_change_handler() {
    position = this.__value;
    $$invalidate(0, position);
  }

  function input2_change_handler() {
    position = this.__value;
    $$invalidate(0, position);
  }

  const click_handler = e => console.log("toggle is clciked", e);

  function radiobutton_value_binding(value$1) {
    value = value$1;
    $$invalidate(2, value);
  }

  const click_handler_1 = e => console.log("toggle is clciked", e);

  $$self.$set = $$props => {
    if ("$$scope" in $$props) $$invalidate(12, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    createEventDispatcher: _svelte.createEventDispatcher,
    dispatch,
    APPBAR_POSITION: _main_store.APPBAR_POSITION,
    FormBuilder: _FormBuilder.default,
    ToggleSwitch: _ToggleSwitch.default,
    RadioButton: _RadioButton.default,
    Chip: _Chip.default,
    ChipsInput: _ChipsInput.default,
    ChipInput: _ChipInput.default,
    TestLabel: _TestLabel.default,
    options: _FormOne.options,
    position,
    data,
    value
  });

  $$self.$inject_state = $$props => {
    if ("dispatch" in $$props) dispatch = $$props.dispatch;
    if ("position" in $$props) $$invalidate(0, position = $$props.position);
    if ("data" in $$props) $$invalidate(1, data = $$props.data);
    if ("value" in $$props) $$invalidate(2, value = $$props.value);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*position*/
    1) {
      $: {
        _main_store.APPBAR_POSITION.set(position);
      }
    }

    if ($$self.$$.dirty &
    /*data, value*/
    6) {
      $: {
        console.log("form data", data, value);
      }
    }
  };

  return [position, data, value, $$slots, formbuilder_data_binding, input0_change_handler, $$binding_groups, input1_change_handler, input2_change_handler, click_handler, radiobutton_value_binding, click_handler_1, $$scope];
}

class PageOne extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "PageOne",
      options,
      id: create_fragment.name
    });
  }

}

var _default = PageOne;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","../../main_store":"main_store.ts","../form_builder/FormBuilder.svelte":"components/form_builder/FormBuilder.svelte","../toggle_switch/ToggleSwitch.svelte":"components/toggle_switch/ToggleSwitch.svelte","../radio_button/RadioButton.svelte":"components/radio_button/RadioButton.svelte","../chip_input/Chip.svelte":"components/chip_input/Chip.svelte","../chip_input/ChipsInput.svelte":"components/chip_input/ChipsInput.svelte","../chip_input/ChipInput.svelte":"components/chip_input/ChipInput.svelte","../chip_input/TestLabel.svelte":"components/chip_input/TestLabel.svelte","./FormOne":"components/pages/FormOne.ts"}],"components/pages/PageTwo.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

/* components/pages/PageTwo.svelte generated by Svelte v3.23.2 */
const file = "components/pages/PageTwo.svelte";

function create_fragment(ctx) {
  let p;
  const block = {
    c: function create() {
      p = (0, _internal.element)("p");
      p.textContent = "Welcome to Page 2";
      (0, _internal.add_location)(p, file, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, p, anchor);
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(p);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props) {
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PageTwo> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("PageTwo", $$slots, []);
  return [];
}

class PageTwo extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "PageTwo",
      options,
      id: create_fragment.name
    });
  }

}

var _default = PageTwo;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs"}],"components/side_nav/menu.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

const PageOne_svelte_1 = __importDefault(require("../pages/PageOne.svelte"));

const PageTwo_svelte_1 = __importDefault(require("../pages/PageTwo.svelte"));

const MenuList = [{
  group: "HOME",
  routes: [{
    path: "/",
    name: "Dashboard",
    icon: "activity",
    component: PageOne_svelte_1.default,
    title: "View statistics of attendance and overview , events, notifications and issues"
  }]
}, {
  group: "INVENTORY",
  routes: [{
    path: "/books",
    name: "Books",
    icon: "book",
    title: "View, add and record stock of books",
    params: [{
      param: '/:id/:new?',
      name: 'New Book,Edit Book,Book Info',
      component: PageTwo_svelte_1.default
    }],
    subRoutes: [{
      path: "/issueBooks",
      name: "Issue Books",
      icon: "circle",
      title: "Record books given to students"
    }, {
      path: "/newStock",
      name: "New Stock",
      icon: "circle",
      title: "Record books recieved"
    }]
  }]
}, {
  group: "ACADEMICS",
  routes: [{
    path: "/courses",
    name: "Courses",
    icon: "atom",
    title: "View, create, manage, assign and schedule courses",
    params: [{
      param: '/:id/:new?',
      name: 'New Course,Edit Course,Course Info',
      component: PageOne_svelte_1.default
    }]
  }, {
    path: "/programmes",
    name: "Programmes",
    icon: "certificate",
    title: "View, create and manage programmes",
    params: [{
      param: '/:id/:new?',
      name: 'New Programme,Edit Programme,Programme Info',
      component: PageOne_svelte_1.default
    }]
  }]
}, {
  group: "PEOPLE",
  routes: [{
    path: "/messages",
    name: "Messsages",
    icon: "message",
    title: "Communicate with people, resolve issues and complains, address sugggestions"
  }, {
    path: "/students",
    name: "Students",
    icon: "student",
    title: "View and manage students data",
    params: [{
      param: '/:id/:new?',
      name: 'Register Student,Edit Student,Student Profile',
      component: PageOne_svelte_1.default
    }]
  }, {
    path: "/teachers",
    name: "Lecturers",
    icon: "teacher",
    title: "View and manage teachers data",
    params: [{
      param: '/:id/:new?',
      name: 'New Lecturer,Edit Lecturer,Lecturer Profile',
      component: PageOne_svelte_1.default
    }],
    subRoutes: [{
      path: '/manage-schedule',
      name: 'Manage Schedule'
    }]
  }, {
    path: "/staff",
    name: "Staff",
    icon: "staff",
    title: "View and manage staff data",
    params: [{
      param: '/:id/:new?',
      name: 'New Lecturer,Edit Lecturer,Lecturer Profile',
      component: PageOne_svelte_1.default
    }]
  }]
}, {
  group: "SCHEDULE",
  routes: [{
    path: "/timetable",
    name: "Timetable",
    icon: "clock",
    title: "organise lecturers for the acadaemic year"
  }, {
    path: "/events",
    name: "Events",
    icon: "calendar",
    title: "Create and management events",
    params: [{
      param: '/:id/:new?',
      name: 'New Event,Edit Event,Event Details',
      component: PageOne_svelte_1.default
    }]
  }, {
    path: "/todos",
    name: "Todos",
    icon: "check_square",
    title: "Create reminders for important things to be done",
    params: [{
      param: '/:id/:new?',
      name: 'New Todo,Edit Todo,View Todos',
      component: PageOne_svelte_1.default
    }]
  }]
}, {
  group: "FINANCIAL",
  routes: [{
    path: "/fees",
    name: "Fees Records",
    icon: "circle",
    title: "Record installments of fee payment, search reciepts, generate reports"
  }, {
    path: "/transactions",
    name: "Transactions",
    icon: "circle",
    title: "Record expenses and revenue and generate reports"
  }]
}];
exports.Menu = MenuList;
},{"../pages/PageOne.svelte":"components/pages/PageOne.svelte","../pages/PageTwo.svelte":"components/pages/PageTwo.svelte"}],"components/side_nav/MenuList.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _menu = require("./menu.ts");

var _svgs = require("../../assets/svgs.ts");

var _main_store = require("../../main_store.ts");

var _MenuItem = _interopRequireDefault(require("./MenuItem.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/side_nav/MenuList.svelte generated by Svelte v3.23.2 */
const file = "components/side_nav/MenuList.svelte";

function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  child_ctx[9] = i;
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  child_ctx[6] = i;
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  child_ctx[3] = i;
  return child_ctx;
} // (12:6) {#if $MENU_WIDTH === '70'}


function create_if_block_2(ctx) {
  let span;
  let t_value =
  /*g*/
  ctx[1].group + "";
  let t;
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      t = (0, _internal.text)(t_value);
      (0, _internal.attr_dev)(span, "class", "block mt-8 mb-3 ml-6 text-xs font-medium leading-5 tracking-tight uppercase select-none group-name ");
      (0, _internal.add_location)(span, file, 12, 8, 429);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      (0, _internal.append_dev)(span, t);
    },
    p: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(12:6) {#if $MENU_WIDTH === '70'}",
    ctx
  });
  return block;
} // (24:10) {#if $MENU_WIDTH === '70' && r.subRoutes}


function create_if_block_1(ctx) {
  let each_1_anchor;
  let current;
  let each_value_2 =
  /*r*/
  ctx[4].subRoutes;
  (0, _internal.validate_each_argument)(each_value_2);
  let each_blocks = [];

  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }

  const out = i => (0, _internal.transition_out)(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      each_1_anchor = (0, _internal.empty)();
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }

      (0, _internal.insert_dev)(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*Menu*/
      0) {
        each_value_2 =
        /*r*/
        ctx[4].subRoutes;
        (0, _internal.validate_each_argument)(each_value_2);
        let i;

        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx, each_value_2, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            (0, _internal.transition_in)(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            (0, _internal.transition_in)(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value_2.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (let i = 0; i < each_value_2.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_each)(each_blocks, detaching);
      if (detaching) (0, _internal.detach_dev)(each_1_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(24:10) {#if $MENU_WIDTH === '70' && r.subRoutes}",
    ctx
  });
  return block;
} // (25:12) {#each r.subRoutes as s, j}


function create_each_block_2(ctx) {
  let menuitem;
  let current;
  menuitem = new _MenuItem.default({
    props: {
      type: "child",
      route:
      /*s*/
      ctx[7],
      path: `${
      /*r*/
      ctx[4].path}${
      /*s*/
      ctx[7].path}`
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      (0, _internal.create_component)(menuitem.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(menuitem, target, anchor);
      current = true;
    },
    p: _internal.noop,
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(menuitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(menuitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(menuitem, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block_2.name,
    type: "each",
    source: "(25:12) {#each r.subRoutes as s, j}",
    ctx
  });
  return block;
} // (20:8) <MenuItem           type="parent"           route="{r}" path="{r.path}"         >


function create_default_slot(ctx) {
  let if_block_anchor;
  let current;
  let if_block =
  /*$MENU_WIDTH*/
  ctx[0] === "70" &&
  /*r*/
  ctx[4].subRoutes && create_if_block_1(ctx);
  const block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (
      /*$MENU_WIDTH*/
      ctx[0] === "70" &&
      /*r*/
      ctx[4].subRoutes) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*$MENU_WIDTH*/
          1) {
            (0, _internal.transition_in)(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          (0, _internal.transition_in)(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block, 1, 1, () => {
          if_block = null;
        });
        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) (0, _internal.detach_dev)(if_block_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(20:8) <MenuItem           type=\\\"parent\\\"           route=\\\"{r}\\\" path=\\\"{r.path}\\\"         >",
    ctx
  });
  return block;
} // (19:6) {#each g.routes as r, i}


function create_each_block_1(ctx) {
  let menuitem;
  let current;
  menuitem = new _MenuItem.default({
    props: {
      type: "parent",
      route:
      /*r*/
      ctx[4],
      path:
      /*r*/
      ctx[4].path,
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx
      }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      (0, _internal.create_component)(menuitem.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(menuitem, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      const menuitem_changes = {};

      if (dirty &
      /*$$scope, $MENU_WIDTH*/
      1025) {
        menuitem_changes.$$scope = {
          dirty,
          ctx
        };
      }

      menuitem.$set(menuitem_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(menuitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(menuitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(menuitem, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(19:6) {#each g.routes as r, i}",
    ctx
  });
  return block;
} // (10:2) {#each Menu as g, h}


function create_each_block(ctx) {
  let div;
  let t0;
  let t1;
  let current;
  let if_block =
  /*$MENU_WIDTH*/
  ctx[0] === "70" && create_if_block_2(ctx);
  let each_value_1 =
  /*g*/
  ctx[1].routes;
  (0, _internal.validate_each_argument)(each_value_1);
  let each_blocks = [];

  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  const out = i => (0, _internal.transition_out)(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      if (if_block) if_block.c();
      t0 = (0, _internal.space)();

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      t1 = (0, _internal.space)();
      (0, _internal.attr_dev)(div, "class", "block select-none menu-group ");
      (0, _internal.add_location)(div, file, 10, 4, 344);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      if (if_block) if_block.m(div, null);
      (0, _internal.append_dev)(div, t0);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }

      (0, _internal.append_dev)(div, t1);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (
      /*$MENU_WIDTH*/
      ctx[0] === "70") {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block_2(ctx);
          if_block.c();
          if_block.m(div, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (dirty &
      /*Menu, $MENU_WIDTH*/
      1) {
        each_value_1 =
        /*g*/
        ctx[1].routes;
        (0, _internal.validate_each_argument)(each_value_1);
        let i;

        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx, each_value_1, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            (0, _internal.transition_in)(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            (0, _internal.transition_in)(each_blocks[i], 1);
            each_blocks[i].m(div, t1);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (let i = 0; i < each_value_1.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      if (if_block) if_block.d();
      (0, _internal.destroy_each)(each_blocks, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(10:2) {#each Menu as g, h}",
    ctx
  });
  return block;
} // (38:0) {#if $MENU_WIDTH === '70'}


function create_if_block(ctx) {
  let div2;
  let div0;
  let t0;
  let html_tag;
  let raw_value = (0, _svgs.SVG)("heart", "w-4 h-4 inline-flex") + "";
  let t1;
  let t2;
  let div1;
  let a;
  const block = {
    c: function create() {
      div2 = (0, _internal.element)("div");
      div0 = (0, _internal.element)("div");
      t0 = (0, _internal.text)("Made with\n      ");
      t1 = (0, _internal.text)("\n      by");
      t2 = (0, _internal.space)();
      div1 = (0, _internal.element)("div");
      a = (0, _internal.element)("a");
      a.textContent = `
        Parables Boltnoel © ${new Date().getFullYear()}`;
      html_tag = new _internal.HtmlTag(t1);
      (0, _internal.add_location)(div0, file, 41, 4, 1212);
      (0, _internal.attr_dev)(a, "href", "https://github.com/Parables");
      (0, _internal.attr_dev)(a, "class", "mx-2 no-underline ");
      (0, _internal.add_location)(a, file, 47, 6, 1320);
      (0, _internal.add_location)(div1, file, 46, 4, 1308);
      (0, _internal.attr_dev)(div2, "class", "flex flex-col items-center content-center pt-4 pb-8 mx-auto text-xs text-center menu-footer text-cadetblue");
      (0, _internal.add_location)(div2, file, 38, 2, 1080);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div2, anchor);
      (0, _internal.append_dev)(div2, div0);
      (0, _internal.append_dev)(div0, t0);
      html_tag.m(raw_value, div0);
      (0, _internal.append_dev)(div0, t1);
      (0, _internal.append_dev)(div2, t2);
      (0, _internal.append_dev)(div2, div1);
      (0, _internal.append_dev)(div1, a);
    },
    p: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div2);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(38:0) {#if $MENU_WIDTH === '70'}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div;
  let t;
  let if_block_anchor;
  let current;
  let each_value = _menu.Menu;
  (0, _internal.validate_each_argument)(each_value);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const out = i => (0, _internal.transition_out)(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  let if_block =
  /*$MENU_WIDTH*/
  ctx[0] === "70" && create_if_block(ctx);
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      t = (0, _internal.space)();
      if (if_block) if_block.c();
      if_block_anchor = (0, _internal.empty)();
      (0, _internal.attr_dev)(div, "class", "block overflow-y-auto select-none menu-body text-cadetblue ");
      (0, _internal.add_location)(div, file, 7, 0, 213);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }

      (0, _internal.insert_dev)(target, t, anchor);
      if (if_block) if_block.m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      if (dirty &
      /*Menu, $MENU_WIDTH*/
      1) {
        each_value = _menu.Menu;
        (0, _internal.validate_each_argument)(each_value);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            (0, _internal.transition_in)(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            (0, _internal.transition_in)(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        (0, _internal.check_outros)();
      }

      if (
      /*$MENU_WIDTH*/
      ctx[0] === "70") {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: function intro(local) {
      if (current) return;

      for (let i = 0; i < each_value.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      (0, _internal.destroy_each)(each_blocks, detaching);
      if (detaching) (0, _internal.detach_dev)(t);
      if (if_block) if_block.d(detaching);
      if (detaching) (0, _internal.detach_dev)(if_block_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let $MENU_WIDTH;
  (0, _internal.validate_store)(_main_store.MENU_WIDTH, "MENU_WIDTH");
  (0, _internal.component_subscribe)($$self, _main_store.MENU_WIDTH, $$value => $$invalidate(0, $MENU_WIDTH = $$value));
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<MenuList> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("MenuList", $$slots, []);

  $$self.$capture_state = () => ({
    Menu: _menu.Menu,
    SVG: _svgs.SVG,
    MENU_WIDTH: _main_store.MENU_WIDTH,
    ACTIVE_PATH: _main_store.ACTIVE_PATH,
    MenuItem: _MenuItem.default,
    $MENU_WIDTH
  });

  return [$MENU_WIDTH];
}

class MenuList extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "MenuList",
      options,
      id: create_fragment.name
    });
  }

}

var _default = MenuList;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","./menu.ts":"components/side_nav/menu.ts","../../assets/svgs.ts":"assets/svgs.ts","../../main_store.ts":"main_store.ts","./MenuItem.svelte":"components/side_nav/MenuItem.svelte"}],"components/side_nav/SideNav.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _AppBar = _interopRequireDefault(require("../app_bar/AppBar.svelte"));

var _Breadcrumb = _interopRequireDefault(require("../breadcrumb/Breadcrumb.svelte"));

var _MenuItem = _interopRequireDefault(require("./MenuItem.svelte"));

var _MenuHeader = _interopRequireDefault(require("./MenuHeader.svelte"));

var _MenuList = _interopRequireDefault(require("./MenuList.svelte"));

var _menu = require("./menu.ts");

var _svgs = require("../../assets/svgs.ts");

var _logo = require("../../assets/logo.ts");

var _main_store = require("../../main_store.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/side_nav/SideNav.svelte generated by Svelte v3.23.2 */
const file = "components/side_nav/SideNav.svelte";

const get_breadcrumb_slot_changes = dirty => ({});

const get_breadcrumb_slot_context = ctx => ({});

const get_app_bar_slot_changes = dirty => ({});

const get_app_bar_slot_context = ctx => ({});

const get_overlay_slot_changes = dirty => ({});

const get_overlay_slot_context = ctx => ({});

const get_menu_list_slot_changes = dirty => ({});

const get_menu_list_slot_context = ctx => ({}); // (49:25)      


function fallback_block_3(ctx) {
  let menuheader;
  let t;
  let menulist;
  let current;
  menuheader = new _MenuHeader.default({
    $$inline: true
  });
  menuheader.$on("toggle",
  /*toggle_handler*/
  ctx[10]);
  menulist = new _MenuList.default({
    $$inline: true
  });
  const block = {
    c: function create() {
      (0, _internal.create_component)(menuheader.$$.fragment);
      t = (0, _internal.space)();
      (0, _internal.create_component)(menulist.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(menuheader, target, anchor);
      (0, _internal.insert_dev)(target, t, anchor);
      (0, _internal.mount_component)(menulist, target, anchor);
      current = true;
    },
    p: _internal.noop,
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(menuheader.$$.fragment, local);
      (0, _internal.transition_in)(menulist.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(menuheader.$$.fragment, local);
      (0, _internal.transition_out)(menulist.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(menuheader, detaching);
      if (detaching) (0, _internal.detach_dev)(t);
      (0, _internal.destroy_component)(menulist, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block_3.name,
    type: "fallback",
    source: "(49:25)      ",
    ctx
  });
  return block;
} // (54:21)    


function fallback_block_2(ctx) {
  let div;
  let div_class_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      (0, _internal.attr_dev)(div, "class", div_class_value = "fixed inset-0 z-20 bg-black lg:bg-opacity-0 bg-opacity-25\n    cursor-pointer overlay " + (
      /*open*/
      ctx[0] ? "block" : "hidden") + " lg:" + (
      /*$MINI_MENU*/
      ctx[7] &&
      /*hovering*/
      ctx[1] ? "block" : "hidden") + "\n    w-full max-h-full transition-all duration-300 ease-in-out");
      (0, _internal.add_location)(div, file, 54, 2, 1556);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(div, "click",
        /*click_handler*/
        ctx[12], false, false, false), (0, _internal.listen_dev)(div, "mousemove",
        /*mousemove_handler*/
        ctx[13], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*open, $MINI_MENU, hovering*/
      131 && div_class_value !== (div_class_value = "fixed inset-0 z-20 bg-black lg:bg-opacity-0 bg-opacity-25\n    cursor-pointer overlay " + (
      /*open*/
      ctx[0] ? "block" : "hidden") + " lg:" + (
      /*$MINI_MENU*/
      ctx[7] &&
      /*hovering*/
      ctx[1] ? "block" : "hidden") + "\n    w-full max-h-full transition-all duration-300 ease-in-out")) {
        (0, _internal.attr_dev)(div, "class", div_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block_2.name,
    type: "fallback",
    source: "(54:21)    ",
    ctx
  });
  return block;
} // (80:25)        


function fallback_block_1(ctx) {
  let appbar;
  let current;
  appbar = new _AppBar.default({
    $$inline: true
  });
  appbar.$on("toggle",
  /*toggle_handler_1*/
  ctx[14]);
  const block = {
    c: function create() {
      (0, _internal.create_component)(appbar.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(appbar, target, anchor);
      current = true;
    },
    p: _internal.noop,
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(appbar.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(appbar.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(appbar, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block_1.name,
    type: "fallback",
    source: "(80:25)        ",
    ctx
  });
  return block;
} // (88:28)        


function fallback_block(ctx) {
  let breadcrumb;
  let current;
  breadcrumb = new _Breadcrumb.default({
    $$inline: true
  });
  const block = {
    c: function create() {
      (0, _internal.create_component)(breadcrumb.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(breadcrumb, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(breadcrumb.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(breadcrumb.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(breadcrumb, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(88:28)        ",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div0;
  let div0_class_value;
  let t0;
  let t1;
  let div3;
  let div1;
  let div1_class_value;
  let div1_resize_listener;
  let t2;
  let div2;
  let t3;
  let div2_class_value;
  let div3_class_value;
  let current;
  let mounted;
  let dispose;
  const menu_list_slot_template =
  /*$$slots*/
  ctx[9]["menu-list"];
  const menu_list_slot = (0, _internal.create_slot)(menu_list_slot_template, ctx,
  /*$$scope*/
  ctx[8], get_menu_list_slot_context);
  const menu_list_slot_or_fallback = menu_list_slot || fallback_block_3(ctx);
  const overlay_slot_template =
  /*$$slots*/
  ctx[9].overlay;
  const overlay_slot = (0, _internal.create_slot)(overlay_slot_template, ctx,
  /*$$scope*/
  ctx[8], get_overlay_slot_context);
  const overlay_slot_or_fallback = overlay_slot || fallback_block_2(ctx);
  const app_bar_slot_template =
  /*$$slots*/
  ctx[9]["app-bar"];
  const app_bar_slot = (0, _internal.create_slot)(app_bar_slot_template, ctx,
  /*$$scope*/
  ctx[8], get_app_bar_slot_context);
  const app_bar_slot_or_fallback = app_bar_slot || fallback_block_1(ctx);
  const breadcrumb_slot_template =
  /*$$slots*/
  ctx[9].breadcrumb;
  const breadcrumb_slot = (0, _internal.create_slot)(breadcrumb_slot_template, ctx,
  /*$$scope*/
  ctx[8], get_breadcrumb_slot_context);
  const breadcrumb_slot_or_fallback = breadcrumb_slot || fallback_block(ctx);
  const default_slot_template =
  /*$$slots*/
  ctx[9].default;
  const default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[8], null);
  const block = {
    c: function create() {
      div0 = (0, _internal.element)("div");
      if (menu_list_slot_or_fallback) menu_list_slot_or_fallback.c();
      t0 = (0, _internal.space)();
      if (overlay_slot_or_fallback) overlay_slot_or_fallback.c();
      t1 = (0, _internal.space)();
      div3 = (0, _internal.element)("div");
      div1 = (0, _internal.element)("div");
      if (app_bar_slot_or_fallback) app_bar_slot_or_fallback.c();
      t2 = (0, _internal.space)();
      div2 = (0, _internal.element)("div");
      if (breadcrumb_slot_or_fallback) breadcrumb_slot_or_fallback.c();
      t3 = (0, _internal.space)();
      if (default_slot) default_slot.c();
      (0, _internal.attr_dev)(div0, "class", div0_class_value = "side-menu bg-haiti h-full flex flex-col w-" +
      /*$MENU_WIDTH*/
      ctx[6] + " fixed z-30 " + (
      /*open*/
      ctx[0] ? "block shadow-2xl" : "hidden lg:flex") + "\n  transition-all duration-300 ease-in-out ");
      (0, _internal.add_location)(div0, file, 40, 0, 1149);
      (0, _internal.attr_dev)(div1, "class", div1_class_value = "" + (
      /*classNames*/
      ctx[3] + " transition-all duration-300 ease-in-out z-10 "));
      (0, _internal.add_render_callback)(() =>
      /*div1_elementresize_handler*/
      ctx[15].call(div1));
      (0, _internal.add_location)(div1, file, 75, 2, 2177);
      (0, _internal.attr_dev)(div2, "class", div2_class_value = "z-0 px-4 " +
      /*marginTop*/
      ctx[4] + " transition-all duration-300 ease-in-out lg:px-6 ");
      (0, _internal.add_location)(div2, file, 84, 2, 2392);
      (0, _internal.attr_dev)(div3, "class", div3_class_value = " relative flex flex-col main-content lg:ml-" +
      /*$MARGIN_LEFT*/
      ctx[5] + "\n  transition-all duration-300 ease-in-out");
      (0, _internal.add_location)(div3, file, 71, 0, 2058);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div0, anchor);

      if (menu_list_slot_or_fallback) {
        menu_list_slot_or_fallback.m(div0, null);
      }

      (0, _internal.insert_dev)(target, t0, anchor);

      if (overlay_slot_or_fallback) {
        overlay_slot_or_fallback.m(target, anchor);
      }

      (0, _internal.insert_dev)(target, t1, anchor);
      (0, _internal.insert_dev)(target, div3, anchor);
      (0, _internal.append_dev)(div3, div1);

      if (app_bar_slot_or_fallback) {
        app_bar_slot_or_fallback.m(div1, null);
      }

      div1_resize_listener = (0, _internal.add_resize_listener)(div1,
      /*div1_elementresize_handler*/
      ctx[15].bind(div1));
      (0, _internal.append_dev)(div3, t2);
      (0, _internal.append_dev)(div3, div2);

      if (breadcrumb_slot_or_fallback) {
        breadcrumb_slot_or_fallback.m(div2, null);
      }

      (0, _internal.append_dev)(div2, t3);

      if (default_slot) {
        default_slot.m(div2, null);
      }

      current = true;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(div0, "mouseover",
        /*mouseover_handler*/
        ctx[11], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, [dirty]) {
      if (menu_list_slot) {
        if (menu_list_slot.p && dirty &
        /*$$scope*/
        256) {
          (0, _internal.update_slot)(menu_list_slot, menu_list_slot_template, ctx,
          /*$$scope*/
          ctx[8], dirty, get_menu_list_slot_changes, get_menu_list_slot_context);
        }
      } else {
        if (menu_list_slot_or_fallback && menu_list_slot_or_fallback.p && dirty &
        /*open*/
        1) {
          menu_list_slot_or_fallback.p(ctx, dirty);
        }
      }

      if (!current || dirty &
      /*$MENU_WIDTH, open*/
      65 && div0_class_value !== (div0_class_value = "side-menu bg-haiti h-full flex flex-col w-" +
      /*$MENU_WIDTH*/
      ctx[6] + " fixed z-30 " + (
      /*open*/
      ctx[0] ? "block shadow-2xl" : "hidden lg:flex") + "\n  transition-all duration-300 ease-in-out ")) {
        (0, _internal.attr_dev)(div0, "class", div0_class_value);
      }

      if (overlay_slot) {
        if (overlay_slot.p && dirty &
        /*$$scope*/
        256) {
          (0, _internal.update_slot)(overlay_slot, overlay_slot_template, ctx,
          /*$$scope*/
          ctx[8], dirty, get_overlay_slot_changes, get_overlay_slot_context);
        }
      } else {
        if (overlay_slot_or_fallback && overlay_slot_or_fallback.p && dirty &
        /*open, $MINI_MENU, hovering*/
        131) {
          overlay_slot_or_fallback.p(ctx, dirty);
        }
      }

      if (app_bar_slot) {
        if (app_bar_slot.p && dirty &
        /*$$scope*/
        256) {
          (0, _internal.update_slot)(app_bar_slot, app_bar_slot_template, ctx,
          /*$$scope*/
          ctx[8], dirty, get_app_bar_slot_changes, get_app_bar_slot_context);
        }
      } else {
        if (app_bar_slot_or_fallback && app_bar_slot_or_fallback.p && dirty &
        /*open*/
        1) {
          app_bar_slot_or_fallback.p(ctx, dirty);
        }
      }

      if (!current || dirty &
      /*classNames*/
      8 && div1_class_value !== (div1_class_value = "" + (
      /*classNames*/
      ctx[3] + " transition-all duration-300 ease-in-out z-10 "))) {
        (0, _internal.attr_dev)(div1, "class", div1_class_value);
      }

      if (breadcrumb_slot) {
        if (breadcrumb_slot.p && dirty &
        /*$$scope*/
        256) {
          (0, _internal.update_slot)(breadcrumb_slot, breadcrumb_slot_template, ctx,
          /*$$scope*/
          ctx[8], dirty, get_breadcrumb_slot_changes, get_breadcrumb_slot_context);
        }
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        256) {
          (0, _internal.update_slot)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[8], dirty, null, null);
        }
      }

      if (!current || dirty &
      /*marginTop*/
      16 && div2_class_value !== (div2_class_value = "z-0 px-4 " +
      /*marginTop*/
      ctx[4] + " transition-all duration-300 ease-in-out lg:px-6 ")) {
        (0, _internal.attr_dev)(div2, "class", div2_class_value);
      }

      if (!current || dirty &
      /*$MARGIN_LEFT*/
      32 && div3_class_value !== (div3_class_value = " relative flex flex-col main-content lg:ml-" +
      /*$MARGIN_LEFT*/
      ctx[5] + "\n  transition-all duration-300 ease-in-out")) {
        (0, _internal.attr_dev)(div3, "class", div3_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(menu_list_slot_or_fallback, local);
      (0, _internal.transition_in)(overlay_slot_or_fallback, local);
      (0, _internal.transition_in)(app_bar_slot_or_fallback, local);
      (0, _internal.transition_in)(breadcrumb_slot_or_fallback, local);
      (0, _internal.transition_in)(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(menu_list_slot_or_fallback, local);
      (0, _internal.transition_out)(overlay_slot_or_fallback, local);
      (0, _internal.transition_out)(app_bar_slot_or_fallback, local);
      (0, _internal.transition_out)(breadcrumb_slot_or_fallback, local);
      (0, _internal.transition_out)(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div0);
      if (menu_list_slot_or_fallback) menu_list_slot_or_fallback.d(detaching);
      if (detaching) (0, _internal.detach_dev)(t0);
      if (overlay_slot_or_fallback) overlay_slot_or_fallback.d(detaching);
      if (detaching) (0, _internal.detach_dev)(t1);
      if (detaching) (0, _internal.detach_dev)(div3);
      if (app_bar_slot_or_fallback) app_bar_slot_or_fallback.d(detaching);
      div1_resize_listener();
      if (breadcrumb_slot_or_fallback) breadcrumb_slot_or_fallback.d(detaching);
      if (default_slot) default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let $APPBAR_POSITION;
  let $MARGIN_LEFT;
  let $MENU_WIDTH;
  let $MINI_MENU;
  (0, _internal.validate_store)(_main_store.APPBAR_POSITION, "APPBAR_POSITION");
  (0, _internal.component_subscribe)($$self, _main_store.APPBAR_POSITION, $$value => $$invalidate(16, $APPBAR_POSITION = $$value));
  (0, _internal.validate_store)(_main_store.MARGIN_LEFT, "MARGIN_LEFT");
  (0, _internal.component_subscribe)($$self, _main_store.MARGIN_LEFT, $$value => $$invalidate(5, $MARGIN_LEFT = $$value));
  (0, _internal.validate_store)(_main_store.MENU_WIDTH, "MENU_WIDTH");
  (0, _internal.component_subscribe)($$self, _main_store.MENU_WIDTH, $$value => $$invalidate(6, $MENU_WIDTH = $$value));
  (0, _internal.validate_store)(_main_store.MINI_MENU, "MINI_MENU");
  (0, _internal.component_subscribe)($$self, _main_store.MINI_MENU, $$value => $$invalidate(7, $MINI_MENU = $$value));
  let {
    open = true
  } = $$props;
  let hovering = false;
  let height;
  let classNames;
  let marginTop;
  const writable_props = ["open"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SideNav> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("SideNav", $$slots, ['menu-list', 'overlay', 'app-bar', 'breadcrumb', 'default']);

  const toggle_handler = e => $$invalidate(0, open = e.detail);

  const mouseover_handler = e => {
    $$invalidate(1, hovering = true);
    if ($MINI_MENU) _main_store.MENU_WIDTH.set("70");
  };

  const click_handler = () => {
    $$invalidate(0, open = !open);
    $$invalidate(1, hovering = false);
    if ($MINI_MENU) _main_store.MENU_WIDTH.set("20");
  };

  const mousemove_handler = () => {
    $$invalidate(0, open = !open);
    $$invalidate(1, hovering = false);
    if ($MINI_MENU) _main_store.MENU_WIDTH.set("20");
  };

  const toggle_handler_1 = () => $$invalidate(0, open = !open);

  function div1_elementresize_handler() {
    height = this.clientHeight;
    $$invalidate(2, height);
  }

  $$self.$set = $$props => {
    if ("open" in $$props) $$invalidate(0, open = $$props.open);
    if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    AppBar: _AppBar.default,
    Breadcrumb: _Breadcrumb.default,
    MenuItem: _MenuItem.default,
    MenuHeader: _MenuHeader.default,
    MenuList: _MenuList.default,
    Menu: _menu.Menu,
    SVG: _svgs.SVG,
    logo: _logo.logo,
    APP_WIDTH: _main_store.APP_WIDTH,
    APPBAR_POSITION: _main_store.APPBAR_POSITION,
    MENU_WIDTH: _main_store.MENU_WIDTH,
    MARGIN_LEFT: _main_store.MARGIN_LEFT,
    MINI_MENU: _main_store.MINI_MENU,
    open,
    hovering,
    height,
    classNames,
    marginTop,
    $APPBAR_POSITION,
    $MARGIN_LEFT,
    $MENU_WIDTH,
    $MINI_MENU
  });

  $$self.$inject_state = $$props => {
    if ("open" in $$props) $$invalidate(0, open = $$props.open);
    if ("hovering" in $$props) $$invalidate(1, hovering = $$props.hovering);
    if ("height" in $$props) $$invalidate(2, height = $$props.height);
    if ("classNames" in $$props) $$invalidate(3, classNames = $$props.classNames);
    if ("marginTop" in $$props) $$invalidate(4, marginTop = $$props.marginTop);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*$APPBAR_POSITION, $MARGIN_LEFT*/
    65568) {
      $: {
        $$invalidate(3, classNames = $APPBAR_POSITION === "static" ? "px-3 lg:px-5 relative" : $APPBAR_POSITION === "sticky" ? `fixed block inset-x-0 lg:ml-${$MARGIN_LEFT} shadow-haiti bg-haiti px-2 lg:px-2 ` : `fixed block inset-x-0  lg:ml-${$MARGIN_LEFT}  shadow-haiti  lg:left-5 bg-haiti  mx-3 lg:mx-5 mt-3 rounded-md`);
      }
    }

    if ($$self.$$.dirty &
    /*$APPBAR_POSITION, height*/
    65540) {
      $: {
        $$invalidate(4, marginTop = $APPBAR_POSITION === "static" ? "" : $APPBAR_POSITION === "sticky" ? `mt-${height / 4}` : `mt-${height / 4 + 3}`);
      }
    }
  };

  return [open, hovering, height, classNames, marginTop, $MARGIN_LEFT, $MENU_WIDTH, $MINI_MENU, $$scope, $$slots, toggle_handler, mouseover_handler, click_handler, mousemove_handler, toggle_handler_1, div1_elementresize_handler];
}

class SideNav extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      open: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "SideNav",
      options,
      id: create_fragment.name
    });
  }

  get open() {
    throw new Error("<SideNav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set open(value) {
    throw new Error("<SideNav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = SideNav;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","../app_bar/AppBar.svelte":"components/app_bar/AppBar.svelte","../breadcrumb/Breadcrumb.svelte":"components/breadcrumb/Breadcrumb.svelte","./MenuItem.svelte":"components/side_nav/MenuItem.svelte","./MenuHeader.svelte":"components/side_nav/MenuHeader.svelte","./MenuList.svelte":"components/side_nav/MenuList.svelte","./menu.ts":"components/side_nav/menu.ts","../../assets/svgs.ts":"assets/svgs.ts","../../assets/logo.ts":"assets/logo.ts","../../main_store.ts":"main_store.ts"}],"routes.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoutes = void 0;

const menu_1 = require("./components/side_nav/menu");

const PageOne_svelte_1 = __importDefault(require("./components/pages/PageOne.svelte"));

const main_store_1 = require("./main_store");

let routeList = {};
let crumbList = {};

function getRoutes() {
  for (let g = 0; g < menu_1.Menu.length; g++) {
    /*   let group = `/${Menu[g].group}`;
      if (group ==='/HOME') group= group.replace('/HOME', '') */
    if (menu_1.Menu[g].routes) extractRoutes(menu_1.Menu[g].routes);
  }

  main_store_1.CRUMBS.set(crumbList);
  return routeList;
}

exports.getRoutes = getRoutes;

function extractRoutes(routes, prefix = '', crumbs = '') {
  for (let r = 0; r < routes.length; r++) {
    let route = `${prefix}${routes[r].path}`;
    let crumb = `${crumbs}/${routes[r].name}`;
    routeList[`${route}`] = routes[r].component ? routes[r].component : PageOne_svelte_1.default;
    crumbList[`${route}`] = crumb;
    if (routes[r].params) extractParams(routes[r].params, route, crumb);
    if (routes[r].subRoutes) extractRoutes(routes[r].subRoutes, route, crumb);
  }
}

function extractParams(params, prefix = '', crumbs = '') {
  for (let p = 0; p < params.length; p++) {
    let param = `${prefix}${params[p].param}`;
    let crumb = `${crumbs}/${params[p].name}`;
    routeList[`${param}`] = params[p].component ? params[p].component : PageOne_svelte_1.default;
    crumbList[`${prefix}/params`] = crumb;
  }
}
},{"./components/side_nav/menu":"components/side_nav/menu.ts","./components/pages/PageOne.svelte":"components/pages/PageOne.svelte","./main_store":"main_store.ts"}],"index.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _main_store = require("./main_store.ts");

var _SideNav = _interopRequireDefault(require("./components/side_nav/SideNav.svelte"));

var _svelteSpaRouter = _interopRequireWildcard(require("svelte-spa-router"));

var _routes = require("./routes.ts");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* index.svelte generated by Svelte v3.23.2 */
const {
  console: console_1
} = _internal.globals;
const file = "index.svelte"; // (26:0) <SideNav>

function create_default_slot(ctx) {
  let router;
  let current;
  router = new _svelteSpaRouter.default({
    props: {
      routes: (0, _routes.getRoutes)()
    },
    $$inline: true
  });
  router.$on("conditionsFailed",
  /*conditionsFailed*/
  ctx[1]);
  router.$on("routeLoaded",
  /*routeLoaded*/
  ctx[2]);
  router.$on("routeEvent", routeEvent);
  const block = {
    c: function create() {
      (0, _internal.create_component)(router.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(router, target, anchor);
      current = true;
    },
    p: _internal.noop,
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(router.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(router.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(router, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(26:0) <SideNav>",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let sidenav;
  let current;
  let mounted;
  let dispose;
  (0, _internal.add_render_callback)(
  /*onwindowresize*/
  ctx[3]);
  sidenav = new _SideNav.default({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx
      }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      (0, _internal.create_component)(sidenav.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(sidenav, target, anchor);
      current = true;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(window, "resize",
        /*onwindowresize*/
        ctx[3]);
        mounted = true;
      }
    },
    p: function update(ctx, [dirty]) {
      const sidenav_changes = {};

      if (dirty &
      /*$$scope*/
      16) {
        sidenav_changes.$$scope = {
          dirty,
          ctx
        };
      }

      sidenav.$set(sidenav_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(sidenav.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(sidenav.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(sidenav, detaching);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function routeEvent(event) {
  console.info("Caught event routeEvent", event.detail);
}

function instance($$self, $$props, $$invalidate) {
  let $APP_WIDTH;
  (0, _internal.validate_store)(_main_store.APP_WIDTH, "APP_WIDTH");
  (0, _internal.component_subscribe)($$self, _main_store.APP_WIDTH, $$value => $$invalidate(0, $APP_WIDTH = $$value));
  (0, _routes.getRoutes)();

  function conditionsFailed(event) {
    console.error("Caught event conditionsFailed", event.detail); // Replace the route

    (0, _svelteSpaRouter.replace)("/");
  } // Handles the "routeLoaded" event dispatched by the router after a route has been successfully loaded


  function routeLoaded(event) {
    console.info("Caught event routeLoaded", event.detail);

    _main_store.ACTIVE_PATH.set(event.detail.location);
  }

  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Index> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("Index", $$slots, []);

  function onwindowresize() {
    _main_store.APP_WIDTH.set($APP_WIDTH = window.outerWidth);
  }

  $$self.$capture_state = () => ({
    APP_WIDTH: _main_store.APP_WIDTH,
    CRUMBS: _main_store.CRUMBS,
    ACTIVE_PATH: _main_store.ACTIVE_PATH,
    SideNav: _SideNav.default,
    Router: _svelteSpaRouter.default,
    location: _svelteSpaRouter.location,
    push: _svelteSpaRouter.push,
    pop: _svelteSpaRouter.pop,
    replace: _svelteSpaRouter.replace,
    getRoutes: _routes.getRoutes,
    conditionsFailed,
    routeLoaded,
    routeEvent,
    $APP_WIDTH
  });

  return [$APP_WIDTH, conditionsFailed, routeLoaded, onwindowresize];
}

class Index extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Index",
      options,
      id: create_fragment.name
    });
  }

}

var _default = Index;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","./main_store.ts":"main_store.ts","./components/side_nav/SideNav.svelte":"components/side_nav/SideNav.svelte","svelte-spa-router":"../node_modules/svelte-spa-router/Router.svelte","./routes.ts":"routes.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const index_svelte_1 = __importDefault(require("./index.svelte"));

const app = new index_svelte_1.default({
  target: document.body
});
exports.default = app;
},{"./index.svelte":"index.svelte"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35491" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map