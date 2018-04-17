(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("main", [], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["main"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Joi = __webpack_require__(2);
	var $ = __webpack_require__(3);

	var JoiAny = Joi.any();

	var jlanguage = {
	    root: 'value',
	    key: '{{key}} ',
	    messages: {
	        wrapArrays: true
	    },
	    any: {
	        unknown: 'is not allowed',
	        invalid: 'contains an invalid value',
	        // empty: 'is not allowed to be empty',
	        empty: '不能为空',
	        required: '必填',
	        allowOnly: 'must be one of {{valids}}',
	        default: 'threw an error when running default method'
	    },
	    alternatives: {
	        base: 'not matching any of the allowed alternatives'
	    },
	    array: {
	        base: 'must be an array',
	        includes: 'at position {{pos}} does not match any of the allowed types',
	        includesSingle: 'single value of "{{!key}}" does not match any of the allowed types',
	        includesOne: 'at position {{pos}} fails because {{reason}}',
	        includesOneSingle: 'single value of "{{!key}}" fails because {{reason}}',
	        includesRequiredUnknowns: 'does not contain {{unknownMisses}} required value(s)',
	        includesRequiredKnowns: 'does not contain {{knownMisses}}',
	        includesRequiredBoth: 'does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)',
	        excludes: 'at position {{pos}} contains an excluded value',
	        excludesSingle: 'single value of "{{!key}}" contains an excluded value',
	        min: 'must contain at least {{limit}} items',
	        max: 'must contain less than or equal to {{limit}} items',
	        length: 'must contain {{limit}} items',
	        ordered: 'at position {{pos}} fails because {{reason}}',
	        orderedLength: 'at position {{pos}} fails because array must contain at most {{limit}} items',
	        sparse: 'must not be a sparse array',
	        unique: 'position {{pos}} contains a duplicate value'
	    },
	    boolean: {
	        base: 'must be a boolean'
	    },
	    binary: {
	        base: 'must be a buffer or a string',
	        min: 'must be at least {{limit}} bytes',
	        max: 'must be less than or equal to {{limit}} bytes',
	        length: 'must be {{limit}} bytes'
	    },
	    date: {
	        base: 'must be a number of milliseconds or valid date string',
	        min: 'must be larger than or equal to "{{limit}}"',
	        max: 'must be less than or equal to "{{limit}}"',
	        isoDate: 'must be a valid ISO 8601 date',
	        timestamp: {
	            javascript: 'must be a valid timestamp or number of milliseconds',
	            unix: 'must be a valid timestamp or number of seconds'
	        },
	        ref: 'references "{{ref}}" which is not a date'
	    },
	    function: {
	        base: 'must be a Function',
	        arity: 'must have an arity of {{n}}',
	        minArity: 'must have an arity greater or equal to {{n}}',
	        maxArity: 'must have an arity lesser or equal to {{n}}'
	    },
	    object: {
	        base: 'must be an object',
	        child: 'child "{{!key}}" fails because {{reason}}',
	        min: 'must have at least {{limit}} children',
	        max: 'must have less than or equal to {{limit}} children',
	        length: 'must have {{limit}} children',
	        allowUnknown: 'is not allowed',
	        with: 'missing required peer "{{peer}}"',
	        without: 'conflict with forbidden peer "{{peer}}"',
	        missing: 'must contain at least one of {{peers}}',
	        xor: 'contains a conflict between exclusive peers {{peers}}',
	        or: 'must contain at least one of {{peers}}',
	        and: 'contains {{present}} without its required peers {{missing}}',
	        nand: '!!"{{main}}" must not exist simultaneously with {{peers}}',
	        assert: '!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}',
	        rename: {
	            multiple: 'cannot rename child "{{from}}" because multiple renames are disabled and another key was already renamed to "{{to}}"',
	            override: 'cannot rename child "{{from}}" because override is disabled and target "{{to}}" exists'
	        },
	        type: 'must be an instance of "{{type}}"'
	    },
	    number: {
	        base: '必须是数字',
	        min: '长度至少为{{limit}}',
	        max: '长度最多为{{limit}}',
	        less: '不能大于{{limit}}',
	        greater: '不能小于{{limit}}',
	        float: 'must be a float or double',
	        integer: 'must be an integer',
	        negative: 'must be a negative number',
	        positive: 'must be a positive number',
	        precision: 'must have no more than {{limit}} decimal places',
	        ref: 'references "{{ref}}" which is not a number',
	        multiple: 'must be a multiple of {{multiple}}'
	    },
	    string: {
	        base: 'must be a string',
	        min: '长度至少为{{limit}}个字符',
	        max: '长度不能超过{{limit}}个字符',
	        length: '长度必须为{{limit}}个字符',
	        alphanum: '必须是字母或数字',
	        token: '必须是字母、数字、下划线',
	        regex: {
	            base: ' ',
	            name: 'with value "{{!value}}" fails to match the {{name}} pattern'
	        },
	        email: '邮箱格式不正确',
	        uri: 'must be a valid uri',
	        uriCustomScheme: 'must be a valid uri with a scheme matching the {{scheme}} pattern',
	        isoDate: 'must be a valid ISO 8601 date',
	        guid: 'must be a valid GUID',
	        hex: 'must only contain hexadecimal characters',
	        hostname: 'must be a valid hostname',
	        lowercase: 'must only contain lowercase characters',
	        uppercase: 'must only contain uppercase characters',
	        trim: 'must not have leading or trailing whitespace',
	        creditCard: 'must be a credit card',
	        ref: 'references "{{ref}}" which is not a number',
	        ip: 'must be a valid ip address with a {{cidr}} CIDR',
	        ipVersion: 'must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR'
	    }
	};

	JoiAny.constructor.prototype.zh_cn = function () {
	    return this.options({
	        language: jlanguage,
	        stripUnknown: true
	    });
	};

	// const schema = Joi.object().keys({
	//   username: Joi.string().alphanum().min(3).max(30).required(),
	//   password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
	//   access_token: [Joi.string(), Joi.number()],
	//   birthyear: Joi.number().integer().min(1900).max(2013),
	//   email: Joi.string().email()
	// }).with('username', 'birthyear').without('password', 'access_token');

	// Joi.validate({ username: 'abc', birthyear: 1994 }, schema, function (err, value) {
	//   console.log('err', err);
	//   console.log('value', value);

	//   const appDiv = document.querySelector('#app');
	//   const html = `<pre><code>err: ${JSON.stringify(err, null, 2)}\n\nvalue: ${JSON.stringify(value, null, 2)}</code></pre>`;
	//   appDiv.innerHTML = html;

	// });  // err === null -> valid

	var schema = Joi.object({
	    username: Joi.string().empty(''),
	    phone: Joi.string().min(4).example('abcd')
	});

	$('#submit').on('click', function () {
	    Joi.validate({ username: $('input[name=name]').val(), phone: $('input[name=phone]').val() }, schema, {
	        language: jlanguage
	    }, function (err, value) {
	        $('.a').html(err);
	        console.log(value);
	    });
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define("Joi", [], factory);
		else if(typeof exports === 'object')
			exports["Joi"] = factory();
		else
			root["Joi"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var Joi = __webpack_require__(1);

		module.exports = Joi;

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Hoek = __webpack_require__(2);
		var Any = __webpack_require__(11);
		var Cast = __webpack_require__(16);
		var Errors = __webpack_require__(13);
		var Lazy = __webpack_require__(29);
		var Ref = __webpack_require__(12);

		// Declare internals

		var internals = {
		    alternatives: __webpack_require__(25),
		    array: __webpack_require__(30),
		    boolean: __webpack_require__(24),
		    binary: __webpack_require__(31),
		    date: __webpack_require__(17),
		    number: __webpack_require__(23),
		    object: __webpack_require__(26),
		    string: __webpack_require__(18)
		};

		internals.root = function () {

		    var any = new Any();

		    var root = any.clone();
		    root.any = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.any() does not allow arguments.');

		        return any;
		    };

		    root.alternatives = root.alt = function () {

		        return arguments.length ? internals.alternatives.try.apply(internals.alternatives, arguments) : internals.alternatives;
		    };

		    root.array = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.array() does not allow arguments.');

		        return internals.array;
		    };

		    root.boolean = root.bool = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.boolean() does not allow arguments.');

		        return internals.boolean;
		    };

		    root.binary = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.binary() does not allow arguments.');

		        return internals.binary;
		    };

		    root.date = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.date() does not allow arguments.');

		        return internals.date;
		    };

		    root.func = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.func() does not allow arguments.');

		        return internals.object._func();
		    };

		    root.number = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.number() does not allow arguments.');

		        return internals.number;
		    };

		    root.object = function () {

		        return arguments.length ? internals.object.keys.apply(internals.object, arguments) : internals.object;
		    };

		    root.string = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.string() does not allow arguments.');

		        return internals.string;
		    };

		    root.ref = function () {

		        return Ref.create.apply(null, arguments);
		    };

		    root.isRef = function (ref) {

		        return Ref.isRef(ref);
		    };

		    root.validate = function (value /*, [schema], [options], callback */) {

		        var last = arguments[arguments.length - 1];
		        var callback = typeof last === 'function' ? last : null;

		        var count = arguments.length - (callback ? 1 : 0);
		        if (count === 1) {
		            return any.validate(value, callback);
		        }

		        var options = count === 3 ? arguments[2] : {};
		        var schema = root.compile(arguments[1]);

		        return schema._validateWithOptions(value, options, callback);
		    };

		    root.describe = function () {

		        var schema = arguments.length ? root.compile(arguments[0]) : any;
		        return schema.describe();
		    };

		    root.compile = function (schema) {

		        try {
		            return Cast.schema(schema);
		        } catch (err) {
		            if (err.hasOwnProperty('path')) {
		                err.message = err.message + '(' + err.path + ')';
		            }
		            throw err;
		        }
		    };

		    root.assert = function (value, schema, message) {

		        root.attempt(value, schema, message);
		    };

		    root.attempt = function (value, schema, message) {

		        var result = root.validate(value, schema);
		        var error = result.error;
		        if (error) {
		            if (!message) {
		                if (typeof error.annotate === 'function') {
		                    error.message = error.annotate();
		                }
		                throw error;
		            }

		            if (!(message instanceof Error)) {
		                if (typeof error.annotate === 'function') {
		                    error.message = message + ' ' + error.annotate();
		                }
		                throw error;
		            }

		            throw message;
		        }

		        return result.value;
		    };

		    root.reach = function (schema, path) {

		        Hoek.assert(schema && schema instanceof Any, 'you must provide a joi schema');
		        Hoek.assert(typeof path === 'string', 'path must be a string');

		        if (path === '') {
		            return schema;
		        }

		        var parts = path.split('.');
		        var children = schema._inner.children;
		        if (!children) {
		            return;
		        }

		        var key = parts[0];
		        for (var i = 0; i < children.length; ++i) {
		            var child = children[i];
		            if (child.key === key) {
		                return this.reach(child.schema, path.substr(key.length + 1));
		            }
		        }
		    };

		    root.lazy = function (fn) {

		        return Lazy.set(fn);
		    };

		    root.extend = function () {
		        var _this = this;

		        var extensions = Hoek.flatten(Array.prototype.slice.call(arguments));
		        Hoek.assert(extensions.length > 0, 'You need to provide at least one extension');

		        this.assert(extensions, root.extensionsSchema);

		        var joi = Object.create(this.any());
		        _extends(joi, this);

		        var _loop = function _loop(i) {
		            var extension = extensions[i];

		            if (typeof extension === 'function') {
		                extension = extension(joi);
		            }

		            _this.assert(extension, root.extensionSchema);

		            var base = (extension.base || _this.any()).clone(); // Cloning because we're going to override language afterwards
		            var ctor = base.constructor;
		            var type = function (_ctor) {
		                _inherits(type, _ctor);

		                // eslint-disable-line no-loop-func

		                function type() {
		                    _classCallCheck(this, type);

		                    var _this2 = _possibleConstructorReturn(this, _ctor.call(this));

		                    if (extension.base) {
		                        _extends(_this2, base);
		                    }

		                    _this2._type = extension.name;

		                    if (extension.language) {
		                        _this2._settings = _this2._settings || { language: {} };
		                        _this2._settings.language = Hoek.applyToDefaults(_this2._settings.language, _defineProperty({}, extension.name, extension.language));
		                    }
		                    return _this2;
		                }

		                return type;
		            }(ctor);

		            if (extension.coerce) {
		                type.prototype._coerce = function (value, state, options) {

		                    if (ctor.prototype._coerce) {
		                        var baseRet = ctor.prototype._coerce.call(this, value, state, options);

		                        if (baseRet.errors) {
		                            return baseRet;
		                        }

		                        value = baseRet.value;
		                    }

		                    var ret = extension.coerce.call(this, value, state, options);
		                    if (ret instanceof Errors.Err) {
		                        return { value: value, errors: ret };
		                    }

		                    return { value: ret };
		                };
		            }
		            if (extension.pre) {
		                type.prototype._base = function (value, state, options) {

		                    if (ctor.prototype._base) {
		                        var baseRet = ctor.prototype._base.call(this, value, state, options);

		                        if (baseRet.errors) {
		                            return baseRet;
		                        }

		                        value = baseRet.value;
		                    }

		                    var ret = extension.pre.call(this, value, state, options);
		                    if (ret instanceof Errors.Err) {
		                        return { value: value, errors: ret };
		                    }

		                    return { value: ret };
		                };
		            }

		            if (extension.rules) {
		                var _loop2 = function _loop2(j) {
		                    var rule = extension.rules[j];
		                    var ruleArgs = rule.params ? rule.params instanceof Any ? rule.params._inner.children.map(function (k) {
		                        return k.key;
		                    }) : Object.keys(rule.params) : [];
		                    var validateArgs = rule.params ? Cast.schema(rule.params) : null;

		                    type.prototype[rule.name] = function () {
		                        // eslint-disable-line no-loop-func

		                        if (arguments.length > ruleArgs.length) {
		                            throw new Error('Unexpected number of arguments');
		                        }

		                        var args = Array.prototype.slice.call(arguments);
		                        var hasRef = false;
		                        var arg = {};

		                        for (var k = 0; k < ruleArgs.length; ++k) {
		                            arg[ruleArgs[k]] = args[k];
		                            if (!hasRef && Ref.isRef(args[k])) {
		                                hasRef = true;
		                            }
		                        }

		                        if (validateArgs) {
		                            arg = joi.attempt(arg, validateArgs);
		                        }

		                        var schema = void 0;
		                        if (rule.validate) {
		                            var validate = function validate(value, state, options) {

		                                return rule.validate.call(this, arg, value, state, options);
		                            };

		                            schema = this._test(rule.name, arg, validate, {
		                                description: rule.description,
		                                hasRef: hasRef
		                            });
		                        } else {
		                            schema = this.clone();
		                        }

		                        if (rule.setup) {
		                            var newSchema = rule.setup.call(schema, arg);
		                            if (newSchema !== undefined) {
		                                Hoek.assert(newSchema instanceof Any, 'Setup of extension Joi.' + this._type + '().' + rule.name + '() must return undefined or a Joi object');
		                                schema = newSchema;
		                            }
		                        }

		                        return schema;
		                    };
		                };

		                for (var j = 0; j < extension.rules.length; ++j) {
		                    _loop2(j);
		                }
		            }

		            if (extension.describe) {
		                type.prototype.describe = function () {

		                    var description = ctor.prototype.describe.call(this);
		                    return extension.describe.call(this, description);
		                };
		            }

		            var instance = new type();
		            joi[extension.name] = function () {

		                return instance;
		            };
		        };

		        for (var i = 0; i < extensions.length; ++i) {
		            _loop(i);
		        }

		        return joi;
		    };

		    root.extensionSchema = internals.object.keys({
		        base: internals.object.type(Any, 'Joi object'),
		        name: internals.string.required(),
		        coerce: internals.object._func().arity(3),
		        pre: internals.object._func().arity(3),
		        language: internals.object,
		        describe: internals.object._func().arity(1),
		        rules: internals.array.items(internals.object.keys({
		            name: internals.string.required(),
		            setup: internals.object._func().arity(1),
		            validate: internals.object._func().arity(4),
		            params: [internals.object.pattern(/.*/, internals.object.type(Any, 'Joi object')), internals.object.type(internals.object.constructor, 'Joi object')],
		            description: [internals.string, internals.object._func().arity(1)]
		        }).or('setup', 'validate'))
		    }).strict();

		    root.extensionsSchema = internals.array.items([internals.object, internals.object._func().arity(1)]).strict();

		    root.version = __webpack_require__(32).version;

		    return root;
		};

		module.exports = internals.root();

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer, process) {'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var Crypto = __webpack_require__(5);
		var Path = __webpack_require__(6);
		var Util = __webpack_require__(7);
		var Escape = __webpack_require__(10);

		// Declare internals

		var internals = {};

		// Clone object or array

		exports.clone = function (obj, seen) {

		    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {

		        return obj;
		    }

		    seen = seen || new Map();

		    var lookup = seen.get(obj);
		    if (lookup) {
		        return lookup;
		    }

		    var newObj = void 0;
		    var cloneDeep = false;

		    if (!Array.isArray(obj)) {
		        if (Buffer.isBuffer(obj)) {
		            newObj = new Buffer(obj);
		        } else if (obj instanceof Date) {
		            newObj = new Date(obj.getTime());
		        } else if (obj instanceof RegExp) {
		            newObj = new RegExp(obj);
		        } else {
		            var proto = Object.getPrototypeOf(obj);
		            if (proto && proto.isImmutable) {

		                newObj = obj;
		            } else {
		                newObj = Object.create(proto);
		                cloneDeep = true;
		            }
		        }
		    } else {
		        newObj = [];
		        cloneDeep = true;
		    }

		    seen.set(obj, newObj);

		    if (cloneDeep) {
		        var keys = Object.getOwnPropertyNames(obj);
		        for (var i = 0; i < keys.length; ++i) {
		            var key = keys[i];
		            var descriptor = Object.getOwnPropertyDescriptor(obj, key);
		            if (descriptor && (descriptor.get || descriptor.set)) {

		                Object.defineProperty(newObj, key, descriptor);
		            } else {
		                newObj[key] = exports.clone(obj[key], seen);
		            }
		        }
		    }

		    return newObj;
		};

		// Merge all the properties of source into target, source wins in conflict, and by default null and undefined from source are applied

		/*eslint-disable */
		exports.merge = function (target, source, isNullOverride /* = true */, isMergeArrays /* = true */) {
		    /*eslint-enable */

		    exports.assert(target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object', 'Invalid target value: must be an object');
		    exports.assert(source === null || source === undefined || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object', 'Invalid source value: must be null, undefined, or an object');

		    if (!source) {
		        return target;
		    }

		    if (Array.isArray(source)) {
		        exports.assert(Array.isArray(target), 'Cannot merge array onto an object');
		        if (isMergeArrays === false) {
		            // isMergeArrays defaults to true
		            target.length = 0; // Must not change target assignment
		        }

		        for (var i = 0; i < source.length; ++i) {
		            target.push(exports.clone(source[i]));
		        }

		        return target;
		    }

		    var keys = Object.keys(source);
		    for (var _i = 0; _i < keys.length; ++_i) {
		        var key = keys[_i];
		        var value = source[key];
		        if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {

		            if (!target[key] || _typeof(target[key]) !== 'object' || Array.isArray(target[key]) !== Array.isArray(value) || value instanceof Date || Buffer.isBuffer(value) || value instanceof RegExp) {

		                target[key] = exports.clone(value);
		            } else {
		                exports.merge(target[key], value, isNullOverride, isMergeArrays);
		            }
		        } else {
		            if (value !== null && value !== undefined) {
		                // Explicit to preserve empty strings

		                target[key] = value;
		            } else if (isNullOverride !== false) {
		                // Defaults to true
		                target[key] = value;
		            }
		        }
		    }

		    return target;
		};

		// Apply options to a copy of the defaults

		exports.applyToDefaults = function (defaults, options, isNullOverride) {

		    exports.assert(defaults && (typeof defaults === 'undefined' ? 'undefined' : _typeof(defaults)) === 'object', 'Invalid defaults value: must be an object');
		    exports.assert(!options || options === true || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options value: must be true, falsy or an object');

		    if (!options) {
		        // If no options, return null
		        return null;
		    }

		    var copy = exports.clone(defaults);

		    if (options === true) {
		        // If options is set to true, use defaults
		        return copy;
		    }

		    return exports.merge(copy, options, isNullOverride === true, false);
		};

		// Clone an object except for the listed keys which are shallow copied

		exports.cloneWithShallow = function (source, keys) {

		    if (!source || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) !== 'object') {

		        return source;
		    }

		    var storage = internals.store(source, keys); // Move shallow copy items to storage
		    var copy = exports.clone(source); // Deep copy the rest
		    internals.restore(copy, source, storage); // Shallow copy the stored items and restore
		    return copy;
		};

		internals.store = function (source, keys) {

		    var storage = {};
		    for (var i = 0; i < keys.length; ++i) {
		        var key = keys[i];
		        var value = exports.reach(source, key);
		        if (value !== undefined) {
		            storage[key] = value;
		            internals.reachSet(source, key, undefined);
		        }
		    }

		    return storage;
		};

		internals.restore = function (copy, source, storage) {

		    var keys = Object.keys(storage);
		    for (var i = 0; i < keys.length; ++i) {
		        var key = keys[i];
		        internals.reachSet(copy, key, storage[key]);
		        internals.reachSet(source, key, storage[key]);
		    }
		};

		internals.reachSet = function (obj, key, value) {

		    var path = key.split('.');
		    var ref = obj;
		    for (var i = 0; i < path.length; ++i) {
		        var segment = path[i];
		        if (i + 1 === path.length) {
		            ref[segment] = value;
		        }

		        ref = ref[segment];
		    }
		};

		// Apply options to defaults except for the listed keys which are shallow copied from option without merging

		exports.applyToDefaultsWithShallow = function (defaults, options, keys) {

		    exports.assert(defaults && (typeof defaults === 'undefined' ? 'undefined' : _typeof(defaults)) === 'object', 'Invalid defaults value: must be an object');
		    exports.assert(!options || options === true || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options value: must be true, falsy or an object');
		    exports.assert(keys && Array.isArray(keys), 'Invalid keys');

		    if (!options) {
		        // If no options, return null
		        return null;
		    }

		    var copy = exports.cloneWithShallow(defaults, keys);

		    if (options === true) {
		        // If options is set to true, use defaults
		        return copy;
		    }

		    var storage = internals.store(options, keys); // Move shallow copy items to storage
		    exports.merge(copy, options, false, false); // Deep copy the rest
		    internals.restore(copy, options, storage); // Shallow copy the stored items and restore
		    return copy;
		};

		// Deep object or array comparison

		exports.deepEqual = function (obj, ref, options, seen) {

		    options = options || { prototype: true };

		    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);

		    if (type !== (typeof ref === 'undefined' ? 'undefined' : _typeof(ref))) {
		        return false;
		    }

		    if (type !== 'object' || obj === null || ref === null) {

		        if (obj === ref) {
		            // Copied from Deep-eql, copyright(c) 2013 Jake Luer, jake@alogicalparadox.com, MIT Licensed, https://github.com/chaijs/deep-eql
		            return obj !== 0 || 1 / obj === 1 / ref; // -0 / +0
		        }

		        return obj !== obj && ref !== ref; // NaN
		    }

		    seen = seen || [];
		    if (seen.indexOf(obj) !== -1) {
		        return true; // If previous comparison failed, it would have stopped execution
		    }

		    seen.push(obj);

		    if (Array.isArray(obj)) {
		        if (!Array.isArray(ref)) {
		            return false;
		        }

		        if (!options.part && obj.length !== ref.length) {
		            return false;
		        }

		        for (var i = 0; i < obj.length; ++i) {
		            if (options.part) {
		                var found = false;
		                for (var j = 0; j < ref.length; ++j) {
		                    if (exports.deepEqual(obj[i], ref[j], options)) {
		                        found = true;
		                        break;
		                    }
		                }

		                return found;
		            }

		            if (!exports.deepEqual(obj[i], ref[i], options)) {
		                return false;
		            }
		        }

		        return true;
		    }

		    if (Buffer.isBuffer(obj)) {
		        if (!Buffer.isBuffer(ref)) {
		            return false;
		        }

		        if (obj.length !== ref.length) {
		            return false;
		        }

		        for (var _i2 = 0; _i2 < obj.length; ++_i2) {
		            if (obj[_i2] !== ref[_i2]) {
		                return false;
		            }
		        }

		        return true;
		    }

		    if (obj instanceof Date) {
		        return ref instanceof Date && obj.getTime() === ref.getTime();
		    }

		    if (obj instanceof RegExp) {
		        return ref instanceof RegExp && obj.toString() === ref.toString();
		    }

		    if (options.prototype) {
		        if (Object.getPrototypeOf(obj) !== Object.getPrototypeOf(ref)) {
		            return false;
		        }
		    }

		    var keys = Object.getOwnPropertyNames(obj);

		    if (!options.part && keys.length !== Object.getOwnPropertyNames(ref).length) {
		        return false;
		    }

		    for (var _i3 = 0; _i3 < keys.length; ++_i3) {
		        var key = keys[_i3];
		        var descriptor = Object.getOwnPropertyDescriptor(obj, key);
		        if (descriptor.get) {
		            if (!exports.deepEqual(descriptor, Object.getOwnPropertyDescriptor(ref, key), options, seen)) {
		                return false;
		            }
		        } else if (!exports.deepEqual(obj[key], ref[key], options, seen)) {
		            return false;
		        }
		    }

		    return true;
		};

		// Remove duplicate items from array

		exports.unique = function (array, key) {

		    var result = void 0;
		    if (key) {
		        (function () {
		            result = [];
		            var index = new Set();
		            array.forEach(function (item) {

		                var identifier = item[key];
		                if (!index.has(identifier)) {
		                    index.add(identifier);
		                    result.push(item);
		                }
		            });
		        })();
		    } else {
		        result = Array.from(new Set(array));
		    }

		    return result;
		};

		// Convert array into object

		exports.mapToObject = function (array, key) {

		    if (!array) {
		        return null;
		    }

		    var obj = {};
		    for (var i = 0; i < array.length; ++i) {
		        if (key) {
		            if (array[i][key]) {
		                obj[array[i][key]] = true;
		            }
		        } else {
		            obj[array[i]] = true;
		        }
		    }

		    return obj;
		};

		// Find the common unique items in two arrays

		exports.intersect = function (array1, array2, justFirst) {

		    if (!array1 || !array2) {
		        return [];
		    }

		    var common = [];
		    var hash = Array.isArray(array1) ? exports.mapToObject(array1) : array1;
		    var found = {};
		    for (var i = 0; i < array2.length; ++i) {
		        if (hash[array2[i]] && !found[array2[i]]) {
		            if (justFirst) {
		                return array2[i];
		            }

		            common.push(array2[i]);
		            found[array2[i]] = true;
		        }
		    }

		    return justFirst ? null : common;
		};

		// Test if the reference contains the values

		exports.contain = function (ref, values, options) {

		    /*
		        string -> string(s)
		        array -> item(s)
		        object -> key(s)
		        object -> object (key:value)
		    */

		    var valuePairs = null;
		    if ((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' && (typeof values === 'undefined' ? 'undefined' : _typeof(values)) === 'object' && !Array.isArray(ref) && !Array.isArray(values)) {

		        valuePairs = values;
		        values = Object.keys(values);
		    } else {
		        values = [].concat(values);
		    }

		    options = options || {}; // deep, once, only, part

		    exports.assert(arguments.length >= 2, 'Insufficient arguments');
		    exports.assert(typeof ref === 'string' || (typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object', 'Reference must be string or an object');
		    exports.assert(values.length, 'Values array cannot be empty');

		    var compare = void 0;
		    var compareFlags = void 0;
		    if (options.deep) {
		        compare = exports.deepEqual;

		        var hasOnly = options.hasOwnProperty('only');
		        var hasPart = options.hasOwnProperty('part');

		        compareFlags = {
		            prototype: hasOnly ? options.only : hasPart ? !options.part : false,
		            part: hasOnly ? !options.only : hasPart ? options.part : true
		        };
		    } else {
		        compare = function compare(a, b) {
		            return a === b;
		        };
		    }

		    var misses = false;
		    var matches = new Array(values.length);
		    for (var i = 0; i < matches.length; ++i) {
		        matches[i] = 0;
		    }

		    if (typeof ref === 'string') {
		        var pattern = '(';
		        for (var _i4 = 0; _i4 < values.length; ++_i4) {
		            var value = values[_i4];
		            exports.assert(typeof value === 'string', 'Cannot compare string reference to non-string value');
		            pattern += (_i4 ? '|' : '') + exports.escapeRegex(value);
		        }

		        var regex = new RegExp(pattern + ')', 'g');
		        var leftovers = ref.replace(regex, function ($0, $1) {

		            var index = values.indexOf($1);
		            ++matches[index];
		            return ''; // Remove from string
		        });

		        misses = !!leftovers;
		    } else if (Array.isArray(ref)) {
		        for (var _i5 = 0; _i5 < ref.length; ++_i5) {
		            var matched = false;
		            for (var j = 0; j < values.length && matched === false; ++j) {
		                matched = compare(values[j], ref[_i5], compareFlags) && j;
		            }

		            if (matched !== false) {
		                ++matches[matched];
		            } else {
		                misses = true;
		            }
		        }
		    } else {
		        var keys = Object.getOwnPropertyNames(ref);
		        for (var _i6 = 0; _i6 < keys.length; ++_i6) {
		            var key = keys[_i6];
		            var pos = values.indexOf(key);
		            if (pos !== -1) {
		                if (valuePairs && !compare(valuePairs[key], ref[key], compareFlags)) {

		                    return false;
		                }

		                ++matches[pos];
		            } else {
		                misses = true;
		            }
		        }
		    }

		    var result = false;
		    for (var _i7 = 0; _i7 < matches.length; ++_i7) {
		        result = result || !!matches[_i7];
		        if (options.once && matches[_i7] > 1 || !options.part && !matches[_i7]) {

		            return false;
		        }
		    }

		    if (options.only && misses) {

		        return false;
		    }

		    return result;
		};

		// Flatten array

		exports.flatten = function (array, target) {

		    var result = target || [];

		    for (var i = 0; i < array.length; ++i) {
		        if (Array.isArray(array[i])) {
		            exports.flatten(array[i], result);
		        } else {
		            result.push(array[i]);
		        }
		    }

		    return result;
		};

		// Convert an object key chain string ('a.b.c') to reference (object[a][b][c])

		exports.reach = function (obj, chain, options) {

		    if (chain === false || chain === null || typeof chain === 'undefined') {

		        return obj;
		    }

		    options = options || {};
		    if (typeof options === 'string') {
		        options = { separator: options };
		    }

		    var path = chain.split(options.separator || '.');
		    var ref = obj;
		    for (var i = 0; i < path.length; ++i) {
		        var key = path[i];
		        if (key[0] === '-' && Array.isArray(ref)) {
		            key = key.slice(1, key.length);
		            key = ref.length - key;
		        }

		        if (!ref || !(((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' || typeof ref === 'function') && key in ref) || (typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) !== 'object' && options.functions === false) {
		            // Only object and function can have properties

		            exports.assert(!options.strict || i + 1 === path.length, 'Missing segment', key, 'in reach path ', chain);
		            exports.assert((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' || options.functions === true || typeof ref !== 'function', 'Invalid segment', key, 'in reach path ', chain);
		            ref = options.default;
		            break;
		        }

		        ref = ref[key];
		    }

		    return ref;
		};

		exports.reachTemplate = function (obj, template, options) {

		    return template.replace(/{([^}]+)}/g, function ($0, chain) {

		        var value = exports.reach(obj, chain, options);
		        return value === undefined || value === null ? '' : value;
		    });
		};

		exports.formatStack = function (stack) {

		    var trace = [];
		    for (var i = 0; i < stack.length; ++i) {
		        var item = stack[i];
		        trace.push([item.getFileName(), item.getLineNumber(), item.getColumnNumber(), item.getFunctionName(), item.isConstructor()]);
		    }

		    return trace;
		};

		exports.formatTrace = function (trace) {

		    var display = [];

		    for (var i = 0; i < trace.length; ++i) {
		        var row = trace[i];
		        display.push((row[4] ? 'new ' : '') + row[3] + ' (' + row[0] + ':' + row[1] + ':' + row[2] + ')');
		    }

		    return display;
		};

		exports.callStack = function (slice) {

		    // http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi

		    var v8 = Error.prepareStackTrace;
		    Error.prepareStackTrace = function (_, stack) {

		        return stack;
		    };

		    var capture = {};
		    Error.captureStackTrace(capture, this); // arguments.callee is not supported in strict mode so we use this and slice the trace of this off the result
		    var stack = capture.stack;

		    Error.prepareStackTrace = v8;

		    var trace = exports.formatStack(stack);

		    return trace.slice(1 + slice);
		};

		exports.displayStack = function (slice) {

		    var trace = exports.callStack(slice === undefined ? 1 : slice + 1);

		    return exports.formatTrace(trace);
		};

		exports.abortThrow = false;

		exports.abort = function (message, hideStack) {

		    if (process.env.NODE_ENV === 'test' || exports.abortThrow === true) {
		        throw new Error(message || 'Unknown error');
		    }

		    var stack = '';
		    if (!hideStack) {
		        stack = exports.displayStack(1).join('\n\t');
		    }
		    console.log('ABORT: ' + message + '\n\t' + stack);
		    process.exit(1);
		};

		exports.assert = function (condition /*, msg1, msg2, msg3 */) {

		    if (condition) {
		        return;
		    }

		    if (arguments.length === 2 && arguments[1] instanceof Error) {
		        throw arguments[1];
		    }

		    var msgs = [];
		    for (var i = 1; i < arguments.length; ++i) {
		        if (arguments[i] !== '') {
		            msgs.push(arguments[i]); // Avoids Array.slice arguments leak, allowing for V8 optimizations
		        }
		    }

		    msgs = msgs.map(function (msg) {

		        return typeof msg === 'string' ? msg : msg instanceof Error ? msg.message : exports.stringify(msg);
		    });

		    throw new Error(msgs.join(' ') || 'Unknown error');
		};

		exports.Timer = function () {

		    this.ts = 0;
		    this.reset();
		};

		exports.Timer.prototype.reset = function () {

		    this.ts = Date.now();
		};

		exports.Timer.prototype.elapsed = function () {

		    return Date.now() - this.ts;
		};

		exports.Bench = function () {

		    this.ts = 0;
		    this.reset();
		};

		exports.Bench.prototype.reset = function () {

		    this.ts = exports.Bench.now();
		};

		exports.Bench.prototype.elapsed = function () {

		    return exports.Bench.now() - this.ts;
		};

		exports.Bench.now = function () {

		    var ts = process.hrtime();
		    return ts[0] * 1e3 + ts[1] / 1e6;
		};

		// Escape string for Regex construction

		exports.escapeRegex = function (string) {

		    // Escape ^$.*+-?=!:|\/()[]{},
		    return string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
		};

		// Base64url (RFC 4648) encode

		exports.base64urlEncode = function (value, encoding) {

		    exports.assert(typeof value === 'string' || Buffer.isBuffer(value), 'value must be string or buffer');
		    var buf = Buffer.isBuffer(value) ? value : new Buffer(value, encoding || 'binary');
		    return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
		};

		// Base64url (RFC 4648) decode

		exports.base64urlDecode = function (value, encoding) {

		    if (typeof value !== 'string') {

		        return new Error('Value not a string');
		    }

		    if (!/^[\w\-]*$/.test(value)) {

		        return new Error('Invalid character');
		    }

		    var buf = new Buffer(value, 'base64');
		    return encoding === 'buffer' ? buf : buf.toString(encoding || 'binary');
		};

		// Escape attribute value for use in HTTP header

		exports.escapeHeaderAttribute = function (attribute) {

		    // Allowed value characters: !#$%&'()*+,-./:;<=>?@[]^_`{|}~ and space, a-z, A-Z, 0-9, \, "

		    exports.assert(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(attribute), 'Bad attribute value (' + attribute + ')');

		    return attribute.replace(/\\/g, '\\\\').replace(/\"/g, '\\"'); // Escape quotes and slash
		};

		exports.escapeHtml = function (string) {

		    return Escape.escapeHtml(string);
		};

		exports.escapeJavaScript = function (string) {

		    return Escape.escapeJavaScript(string);
		};

		exports.nextTick = function (callback) {

		    return function () {

		        var args = arguments;
		        process.nextTick(function () {

		            callback.apply(null, args);
		        });
		    };
		};

		exports.once = function (method) {

		    if (method._hoekOnce) {
		        return method;
		    }

		    var once = false;
		    var wrapped = function wrapped() {

		        if (!once) {
		            once = true;
		            method.apply(null, arguments);
		        }
		    };

		    wrapped._hoekOnce = true;

		    return wrapped;
		};

		exports.isInteger = Number.isSafeInteger;

		exports.ignore = function () {};

		exports.inherits = Util.inherits;

		exports.format = Util.format;

		exports.transform = function (source, transform, options) {

		    exports.assert(source === null || source === undefined || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object' || Array.isArray(source), 'Invalid source object: must be null, undefined, an object, or an array');
		    var separator = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options !== null ? options.separator || '.' : '.';

		    if (Array.isArray(source)) {
		        var results = [];
		        for (var i = 0; i < source.length; ++i) {
		            results.push(exports.transform(source[i], transform, options));
		        }
		        return results;
		    }

		    var result = {};
		    var keys = Object.keys(transform);

		    for (var _i8 = 0; _i8 < keys.length; ++_i8) {
		        var key = keys[_i8];
		        var path = key.split(separator);
		        var sourcePath = transform[key];

		        exports.assert(typeof sourcePath === 'string', 'All mappings must be "." delineated strings');

		        var segment = void 0;
		        var res = result;

		        while (path.length > 1) {
		            segment = path.shift();
		            if (!res[segment]) {
		                res[segment] = {};
		            }
		            res = res[segment];
		        }
		        segment = path.shift();
		        res[segment] = exports.reach(source, sourcePath, options);
		    }

		    return result;
		};

		exports.uniqueFilename = function (path, extension) {

		    if (extension) {
		        extension = extension[0] !== '.' ? '.' + extension : extension;
		    } else {
		        extension = '';
		    }

		    path = Path.resolve(path);
		    var name = [Date.now(), process.pid, Crypto.randomBytes(8).toString('hex')].join('-') + extension;
		    return Path.join(path, name);
		};

		exports.stringify = function () {

		    try {
		        return JSON.stringify.apply(null, arguments);
		    } catch (err) {
		        return '[Cannot display object: ' + err.message + ']';
		    }
		};

		exports.shallow = function (source) {

		    var target = {};
		    var keys = Object.keys(source);
		    for (var i = 0; i < keys.length; ++i) {
		        var key = keys[i];
		        target[key] = source[key];
		    }

		    return target;
		};
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer, __webpack_require__(4)))

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		function Buffer() {
			throw new Error("Buffer is not included.");
		}
		Buffer.isBuffer = function() {
		  return false;
		};

		exports.INSPECT_MAX_BYTES = 50;
		exports.SlowBuffer = Buffer;
		exports.Buffer = Buffer;


	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		// shim for using process in browser
		var process = module.exports = {};

		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.

		var cachedSetTimeout;
		var cachedClearTimeout;

		function defaultSetTimout() {
		    throw new Error('setTimeout has not been defined');
		}
		function defaultClearTimeout () {
		    throw new Error('clearTimeout has not been defined');
		}
		(function () {
		    try {
		        if (typeof setTimeout === 'function') {
		            cachedSetTimeout = setTimeout;
		        } else {
		            cachedSetTimeout = defaultSetTimout;
		        }
		    } catch (e) {
		        cachedSetTimeout = defaultSetTimout;
		    }
		    try {
		        if (typeof clearTimeout === 'function') {
		            cachedClearTimeout = clearTimeout;
		        } else {
		            cachedClearTimeout = defaultClearTimeout;
		        }
		    } catch (e) {
		        cachedClearTimeout = defaultClearTimeout;
		    }
		} ())
		function runTimeout(fun) {
		    if (cachedSetTimeout === setTimeout) {
		        //normal enviroments in sane situations
		        return setTimeout(fun, 0);
		    }
		    // if setTimeout wasn't available but was latter defined
		    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
		        cachedSetTimeout = setTimeout;
		        return setTimeout(fun, 0);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedSetTimeout(fun, 0);
		    } catch(e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
		            return cachedSetTimeout.call(null, fun, 0);
		        } catch(e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
		            return cachedSetTimeout.call(this, fun, 0);
		        }
		    }


		}
		function runClearTimeout(marker) {
		    if (cachedClearTimeout === clearTimeout) {
		        //normal enviroments in sane situations
		        return clearTimeout(marker);
		    }
		    // if clearTimeout wasn't available but was latter defined
		    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
		        cachedClearTimeout = clearTimeout;
		        return clearTimeout(marker);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedClearTimeout(marker);
		    } catch (e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
		            return cachedClearTimeout.call(null, marker);
		        } catch (e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
		            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
		            return cachedClearTimeout.call(this, marker);
		        }
		    }



		}
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;

		function cleanUpNextTick() {
		    if (!draining || !currentQueue) {
		        return;
		    }
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}

		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = runTimeout(cleanUpNextTick);
		    draining = true;

		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    runClearTimeout(timeout);
		}

		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        runTimeout(drainQueue);
		    }
		};

		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};

		function noop() {}

		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;

		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};

		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };


	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		// resolves . and .. elements in a path array with directory names there
		// must be no slashes, empty elements, or device names (c:\) in the array
		// (so also no leading and trailing slashes - it does not distinguish
		// relative and absolute paths)
		function normalizeArray(parts, allowAboveRoot) {
		  // if the path tries to go above the root, `up` ends up > 0
		  var up = 0;
		  for (var i = parts.length - 1; i >= 0; i--) {
		    var last = parts[i];
		    if (last === '.') {
		      parts.splice(i, 1);
		    } else if (last === '..') {
		      parts.splice(i, 1);
		      up++;
		    } else if (up) {
		      parts.splice(i, 1);
		      up--;
		    }
		  }

		  // if the path is allowed to go above the root, restore leading ..s
		  if (allowAboveRoot) {
		    for (; up--; up) {
		      parts.unshift('..');
		    }
		  }

		  return parts;
		}

		// Split a filename into [root, dir, basename, ext], unix version
		// 'root' is just a slash, or nothing.
		var splitPathRe =
		    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
		var splitPath = function(filename) {
		  return splitPathRe.exec(filename).slice(1);
		};

		// path.resolve([from ...], to)
		// posix version
		exports.resolve = function() {
		  var resolvedPath = '',
		      resolvedAbsolute = false;

		  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
		    var path = (i >= 0) ? arguments[i] : process.cwd();

		    // Skip empty and invalid entries
		    if (typeof path !== 'string') {
		      throw new TypeError('Arguments to path.resolve must be strings');
		    } else if (!path) {
		      continue;
		    }

		    resolvedPath = path + '/' + resolvedPath;
		    resolvedAbsolute = path.charAt(0) === '/';
		  }

		  // At this point the path should be resolved to a full absolute path, but
		  // handle relative paths to be safe (might happen when process.cwd() fails)

		  // Normalize the path
		  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
		    return !!p;
		  }), !resolvedAbsolute).join('/');

		  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
		};

		// path.normalize(path)
		// posix version
		exports.normalize = function(path) {
		  var isAbsolute = exports.isAbsolute(path),
		      trailingSlash = substr(path, -1) === '/';

		  // Normalize the path
		  path = normalizeArray(filter(path.split('/'), function(p) {
		    return !!p;
		  }), !isAbsolute).join('/');

		  if (!path && !isAbsolute) {
		    path = '.';
		  }
		  if (path && trailingSlash) {
		    path += '/';
		  }

		  return (isAbsolute ? '/' : '') + path;
		};

		// posix version
		exports.isAbsolute = function(path) {
		  return path.charAt(0) === '/';
		};

		// posix version
		exports.join = function() {
		  var paths = Array.prototype.slice.call(arguments, 0);
		  return exports.normalize(filter(paths, function(p, index) {
		    if (typeof p !== 'string') {
		      throw new TypeError('Arguments to path.join must be strings');
		    }
		    return p;
		  }).join('/'));
		};


		// path.relative(from, to)
		// posix version
		exports.relative = function(from, to) {
		  from = exports.resolve(from).substr(1);
		  to = exports.resolve(to).substr(1);

		  function trim(arr) {
		    var start = 0;
		    for (; start < arr.length; start++) {
		      if (arr[start] !== '') break;
		    }

		    var end = arr.length - 1;
		    for (; end >= 0; end--) {
		      if (arr[end] !== '') break;
		    }

		    if (start > end) return [];
		    return arr.slice(start, end - start + 1);
		  }

		  var fromParts = trim(from.split('/'));
		  var toParts = trim(to.split('/'));

		  var length = Math.min(fromParts.length, toParts.length);
		  var samePartsLength = length;
		  for (var i = 0; i < length; i++) {
		    if (fromParts[i] !== toParts[i]) {
		      samePartsLength = i;
		      break;
		    }
		  }

		  var outputParts = [];
		  for (var i = samePartsLength; i < fromParts.length; i++) {
		    outputParts.push('..');
		  }

		  outputParts = outputParts.concat(toParts.slice(samePartsLength));

		  return outputParts.join('/');
		};

		exports.sep = '/';
		exports.delimiter = ':';

		exports.dirname = function(path) {
		  var result = splitPath(path),
		      root = result[0],
		      dir = result[1];

		  if (!root && !dir) {
		    // No dirname whatsoever
		    return '.';
		  }

		  if (dir) {
		    // It has a dirname, strip trailing slash
		    dir = dir.substr(0, dir.length - 1);
		  }

		  return root + dir;
		};


		exports.basename = function(path, ext) {
		  var f = splitPath(path)[2];
		  // TODO: make this comparison case-insensitive on windows?
		  if (ext && f.substr(-1 * ext.length) === ext) {
		    f = f.substr(0, f.length - ext.length);
		  }
		  return f;
		};


		exports.extname = function(path) {
		  return splitPath(path)[3];
		};

		function filter (xs, f) {
		    if (xs.filter) return xs.filter(f);
		    var res = [];
		    for (var i = 0; i < xs.length; i++) {
		        if (f(xs[i], i, xs)) res.push(xs[i]);
		    }
		    return res;
		}

		// String.prototype.substr - negative index don't work in IE8
		var substr = 'ab'.substr(-1) === 'b'
		    ? function (str, start, len) { return str.substr(start, len) }
		    : function (str, start, len) {
		        if (start < 0) start = str.length + start;
		        return str.substr(start, len);
		    }
		;

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		var formatRegExp = /%[sdj%]/g;
		exports.format = function(f) {
		  if (!isString(f)) {
		    var objects = [];
		    for (var i = 0; i < arguments.length; i++) {
		      objects.push(inspect(arguments[i]));
		    }
		    return objects.join(' ');
		  }

		  var i = 1;
		  var args = arguments;
		  var len = args.length;
		  var str = String(f).replace(formatRegExp, function(x) {
		    if (x === '%%') return '%';
		    if (i >= len) return x;
		    switch (x) {
		      case '%s': return String(args[i++]);
		      case '%d': return Number(args[i++]);
		      case '%j':
		        try {
		          return JSON.stringify(args[i++]);
		        } catch (_) {
		          return '[Circular]';
		        }
		      default:
		        return x;
		    }
		  });
		  for (var x = args[i]; i < len; x = args[++i]) {
		    if (isNull(x) || !isObject(x)) {
		      str += ' ' + x;
		    } else {
		      str += ' ' + inspect(x);
		    }
		  }
		  return str;
		};


		// Mark that a method should not be used.
		// Returns a modified function which warns once by default.
		// If --no-deprecation is set, then it is a no-op.
		exports.deprecate = function(fn, msg) {
		  // Allow for deprecating things in the process of starting up.
		  if (isUndefined(global.process)) {
		    return function() {
		      return exports.deprecate(fn, msg).apply(this, arguments);
		    };
		  }

		  if (process.noDeprecation === true) {
		    return fn;
		  }

		  var warned = false;
		  function deprecated() {
		    if (!warned) {
		      if (process.throwDeprecation) {
		        throw new Error(msg);
		      } else if (process.traceDeprecation) {
		        console.trace(msg);
		      } else {
		        console.error(msg);
		      }
		      warned = true;
		    }
		    return fn.apply(this, arguments);
		  }

		  return deprecated;
		};


		var debugs = {};
		var debugEnviron;
		exports.debuglog = function(set) {
		  if (isUndefined(debugEnviron))
		    debugEnviron = process.env.NODE_DEBUG || '';
		  set = set.toUpperCase();
		  if (!debugs[set]) {
		    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
		      var pid = process.pid;
		      debugs[set] = function() {
		        var msg = exports.format.apply(exports, arguments);
		        console.error('%s %d: %s', set, pid, msg);
		      };
		    } else {
		      debugs[set] = function() {};
		    }
		  }
		  return debugs[set];
		};


		/**
		 * Echos the value of a value. Trys to print the value out
		 * in the best way possible given the different types.
		 *
		 * @param {Object} obj The object to print out.
		 * @param {Object} opts Optional options object that alters the output.
		 */
		/* legacy: obj, showHidden, depth, colors*/
		function inspect(obj, opts) {
		  // default options
		  var ctx = {
		    seen: [],
		    stylize: stylizeNoColor
		  };
		  // legacy...
		  if (arguments.length >= 3) ctx.depth = arguments[2];
		  if (arguments.length >= 4) ctx.colors = arguments[3];
		  if (isBoolean(opts)) {
		    // legacy...
		    ctx.showHidden = opts;
		  } else if (opts) {
		    // got an "options" object
		    exports._extend(ctx, opts);
		  }
		  // set default options
		  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
		  if (isUndefined(ctx.depth)) ctx.depth = 2;
		  if (isUndefined(ctx.colors)) ctx.colors = false;
		  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
		  if (ctx.colors) ctx.stylize = stylizeWithColor;
		  return formatValue(ctx, obj, ctx.depth);
		}
		exports.inspect = inspect;


		// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
		inspect.colors = {
		  'bold' : [1, 22],
		  'italic' : [3, 23],
		  'underline' : [4, 24],
		  'inverse' : [7, 27],
		  'white' : [37, 39],
		  'grey' : [90, 39],
		  'black' : [30, 39],
		  'blue' : [34, 39],
		  'cyan' : [36, 39],
		  'green' : [32, 39],
		  'magenta' : [35, 39],
		  'red' : [31, 39],
		  'yellow' : [33, 39]
		};

		// Don't use 'blue' not visible on cmd.exe
		inspect.styles = {
		  'special': 'cyan',
		  'number': 'yellow',
		  'boolean': 'yellow',
		  'undefined': 'grey',
		  'null': 'bold',
		  'string': 'green',
		  'date': 'magenta',
		  // "name": intentionally not styling
		  'regexp': 'red'
		};


		function stylizeWithColor(str, styleType) {
		  var style = inspect.styles[styleType];

		  if (style) {
		    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
		           '\u001b[' + inspect.colors[style][1] + 'm';
		  } else {
		    return str;
		  }
		}


		function stylizeNoColor(str, styleType) {
		  return str;
		}


		function arrayToHash(array) {
		  var hash = {};

		  array.forEach(function(val, idx) {
		    hash[val] = true;
		  });

		  return hash;
		}


		function formatValue(ctx, value, recurseTimes) {
		  // Provide a hook for user-specified inspect functions.
		  // Check that value is an object with an inspect function on it
		  if (ctx.customInspect &&
		      value &&
		      isFunction(value.inspect) &&
		      // Filter out the util module, it's inspect function is special
		      value.inspect !== exports.inspect &&
		      // Also filter out any prototype objects using the circular check.
		      !(value.constructor && value.constructor.prototype === value)) {
		    var ret = value.inspect(recurseTimes, ctx);
		    if (!isString(ret)) {
		      ret = formatValue(ctx, ret, recurseTimes);
		    }
		    return ret;
		  }

		  // Primitive types cannot have properties
		  var primitive = formatPrimitive(ctx, value);
		  if (primitive) {
		    return primitive;
		  }

		  // Look up the keys of the object.
		  var keys = Object.keys(value);
		  var visibleKeys = arrayToHash(keys);

		  if (ctx.showHidden) {
		    keys = Object.getOwnPropertyNames(value);
		  }

		  // IE doesn't make error fields non-enumerable
		  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
		  if (isError(value)
		      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
		    return formatError(value);
		  }

		  // Some type of object without properties can be shortcutted.
		  if (keys.length === 0) {
		    if (isFunction(value)) {
		      var name = value.name ? ': ' + value.name : '';
		      return ctx.stylize('[Function' + name + ']', 'special');
		    }
		    if (isRegExp(value)) {
		      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
		    }
		    if (isDate(value)) {
		      return ctx.stylize(Date.prototype.toString.call(value), 'date');
		    }
		    if (isError(value)) {
		      return formatError(value);
		    }
		  }

		  var base = '', array = false, braces = ['{', '}'];

		  // Make Array say that they are Array
		  if (isArray(value)) {
		    array = true;
		    braces = ['[', ']'];
		  }

		  // Make functions say that they are functions
		  if (isFunction(value)) {
		    var n = value.name ? ': ' + value.name : '';
		    base = ' [Function' + n + ']';
		  }

		  // Make RegExps say that they are RegExps
		  if (isRegExp(value)) {
		    base = ' ' + RegExp.prototype.toString.call(value);
		  }

		  // Make dates with properties first say the date
		  if (isDate(value)) {
		    base = ' ' + Date.prototype.toUTCString.call(value);
		  }

		  // Make error with message first say the error
		  if (isError(value)) {
		    base = ' ' + formatError(value);
		  }

		  if (keys.length === 0 && (!array || value.length == 0)) {
		    return braces[0] + base + braces[1];
		  }

		  if (recurseTimes < 0) {
		    if (isRegExp(value)) {
		      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
		    } else {
		      return ctx.stylize('[Object]', 'special');
		    }
		  }

		  ctx.seen.push(value);

		  var output;
		  if (array) {
		    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
		  } else {
		    output = keys.map(function(key) {
		      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
		    });
		  }

		  ctx.seen.pop();

		  return reduceToSingleString(output, base, braces);
		}


		function formatPrimitive(ctx, value) {
		  if (isUndefined(value))
		    return ctx.stylize('undefined', 'undefined');
		  if (isString(value)) {
		    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
		                                             .replace(/'/g, "\\'")
		                                             .replace(/\\"/g, '"') + '\'';
		    return ctx.stylize(simple, 'string');
		  }
		  if (isNumber(value))
		    return ctx.stylize('' + value, 'number');
		  if (isBoolean(value))
		    return ctx.stylize('' + value, 'boolean');
		  // For some reason typeof null is "object", so special case here.
		  if (isNull(value))
		    return ctx.stylize('null', 'null');
		}


		function formatError(value) {
		  return '[' + Error.prototype.toString.call(value) + ']';
		}


		function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
		  var output = [];
		  for (var i = 0, l = value.length; i < l; ++i) {
		    if (hasOwnProperty(value, String(i))) {
		      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
		          String(i), true));
		    } else {
		      output.push('');
		    }
		  }
		  keys.forEach(function(key) {
		    if (!key.match(/^\d+$/)) {
		      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
		          key, true));
		    }
		  });
		  return output;
		}


		function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
		  var name, str, desc;
		  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
		  if (desc.get) {
		    if (desc.set) {
		      str = ctx.stylize('[Getter/Setter]', 'special');
		    } else {
		      str = ctx.stylize('[Getter]', 'special');
		    }
		  } else {
		    if (desc.set) {
		      str = ctx.stylize('[Setter]', 'special');
		    }
		  }
		  if (!hasOwnProperty(visibleKeys, key)) {
		    name = '[' + key + ']';
		  }
		  if (!str) {
		    if (ctx.seen.indexOf(desc.value) < 0) {
		      if (isNull(recurseTimes)) {
		        str = formatValue(ctx, desc.value, null);
		      } else {
		        str = formatValue(ctx, desc.value, recurseTimes - 1);
		      }
		      if (str.indexOf('\n') > -1) {
		        if (array) {
		          str = str.split('\n').map(function(line) {
		            return '  ' + line;
		          }).join('\n').substr(2);
		        } else {
		          str = '\n' + str.split('\n').map(function(line) {
		            return '   ' + line;
		          }).join('\n');
		        }
		      }
		    } else {
		      str = ctx.stylize('[Circular]', 'special');
		    }
		  }
		  if (isUndefined(name)) {
		    if (array && key.match(/^\d+$/)) {
		      return str;
		    }
		    name = JSON.stringify('' + key);
		    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
		      name = name.substr(1, name.length - 2);
		      name = ctx.stylize(name, 'name');
		    } else {
		      name = name.replace(/'/g, "\\'")
		                 .replace(/\\"/g, '"')
		                 .replace(/(^"|"$)/g, "'");
		      name = ctx.stylize(name, 'string');
		    }
		  }

		  return name + ': ' + str;
		}


		function reduceToSingleString(output, base, braces) {
		  var numLinesEst = 0;
		  var length = output.reduce(function(prev, cur) {
		    numLinesEst++;
		    if (cur.indexOf('\n') >= 0) numLinesEst++;
		    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
		  }, 0);

		  if (length > 60) {
		    return braces[0] +
		           (base === '' ? '' : base + '\n ') +
		           ' ' +
		           output.join(',\n  ') +
		           ' ' +
		           braces[1];
		  }

		  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
		}


		// NOTE: These type checking functions intentionally don't use `instanceof`
		// because it is fragile and can be easily faked with `Object.create()`.
		function isArray(ar) {
		  return Array.isArray(ar);
		}
		exports.isArray = isArray;

		function isBoolean(arg) {
		  return typeof arg === 'boolean';
		}
		exports.isBoolean = isBoolean;

		function isNull(arg) {
		  return arg === null;
		}
		exports.isNull = isNull;

		function isNullOrUndefined(arg) {
		  return arg == null;
		}
		exports.isNullOrUndefined = isNullOrUndefined;

		function isNumber(arg) {
		  return typeof arg === 'number';
		}
		exports.isNumber = isNumber;

		function isString(arg) {
		  return typeof arg === 'string';
		}
		exports.isString = isString;

		function isSymbol(arg) {
		  return typeof arg === 'symbol';
		}
		exports.isSymbol = isSymbol;

		function isUndefined(arg) {
		  return arg === void 0;
		}
		exports.isUndefined = isUndefined;

		function isRegExp(re) {
		  return isObject(re) && objectToString(re) === '[object RegExp]';
		}
		exports.isRegExp = isRegExp;

		function isObject(arg) {
		  return typeof arg === 'object' && arg !== null;
		}
		exports.isObject = isObject;

		function isDate(d) {
		  return isObject(d) && objectToString(d) === '[object Date]';
		}
		exports.isDate = isDate;

		function isError(e) {
		  return isObject(e) &&
		      (objectToString(e) === '[object Error]' || e instanceof Error);
		}
		exports.isError = isError;

		function isFunction(arg) {
		  return typeof arg === 'function';
		}
		exports.isFunction = isFunction;

		function isPrimitive(arg) {
		  return arg === null ||
		         typeof arg === 'boolean' ||
		         typeof arg === 'number' ||
		         typeof arg === 'string' ||
		         typeof arg === 'symbol' ||  // ES6 symbol
		         typeof arg === 'undefined';
		}
		exports.isPrimitive = isPrimitive;

		exports.isBuffer = __webpack_require__(8);

		function objectToString(o) {
		  return Object.prototype.toString.call(o);
		}


		function pad(n) {
		  return n < 10 ? '0' + n.toString(10) : n.toString(10);
		}


		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
		              'Oct', 'Nov', 'Dec'];

		// 26 Feb 16:19:34
		function timestamp() {
		  var d = new Date();
		  var time = [pad(d.getHours()),
		              pad(d.getMinutes()),
		              pad(d.getSeconds())].join(':');
		  return [d.getDate(), months[d.getMonth()], time].join(' ');
		}


		// log is just a thin wrapper to console.log that prepends a timestamp
		exports.log = function() {
		  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
		};


		/**
		 * Inherit the prototype methods from one constructor into another.
		 *
		 * The Function.prototype.inherits from lang.js rewritten as a standalone
		 * function (not on Function.prototype). NOTE: If this file is to be loaded
		 * during bootstrapping this function needs to be rewritten using some native
		 * functions as prototype setup using normal JavaScript does not work as
		 * expected during bootstrapping (see mirror.js in r114903).
		 *
		 * @param {function} ctor Constructor function which needs to inherit the
		 *     prototype.
		 * @param {function} superCtor Constructor function to inherit prototype from.
		 */
		exports.inherits = __webpack_require__(9);

		exports._extend = function(origin, add) {
		  // Don't do anything if add isn't an object
		  if (!add || !isObject(add)) return origin;

		  var keys = Object.keys(add);
		  var i = keys.length;
		  while (i--) {
		    origin[keys[i]] = add[keys[i]];
		  }
		  return origin;
		};

		function hasOwnProperty(obj, prop) {
		  return Object.prototype.hasOwnProperty.call(obj, prop);
		}

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		module.exports = function isBuffer(arg) {
		  return arg && typeof arg === 'object'
		    && typeof arg.copy === 'function'
		    && typeof arg.fill === 'function'
		    && typeof arg.readUInt8 === 'function';
		}

	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		if (typeof Object.create === 'function') {
		  // implementation from standard node.js 'util' module
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor
		    ctor.prototype = Object.create(superCtor.prototype, {
		      constructor: {
		        value: ctor,
		        enumerable: false,
		        writable: true,
		        configurable: true
		      }
		    });
		  };
		} else {
		  // old school shim for old browsers
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor
		    var TempCtor = function () {}
		    TempCtor.prototype = superCtor.prototype
		    ctor.prototype = new TempCtor()
		    ctor.prototype.constructor = ctor
		  }
		}


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

		// Declare internals

		var internals = {};

		exports.escapeJavaScript = function (input) {

		    if (!input) {
		        return '';
		    }

		    var escaped = '';

		    for (var i = 0; i < input.length; ++i) {

		        var charCode = input.charCodeAt(i);

		        if (internals.isSafe(charCode)) {
		            escaped += input[i];
		        } else {
		            escaped += internals.escapeJavaScriptChar(charCode);
		        }
		    }

		    return escaped;
		};

		exports.escapeHtml = function (input) {

		    if (!input) {
		        return '';
		    }

		    var escaped = '';

		    for (var i = 0; i < input.length; ++i) {

		        var charCode = input.charCodeAt(i);

		        if (internals.isSafe(charCode)) {
		            escaped += input[i];
		        } else {
		            escaped += internals.escapeHtmlChar(charCode);
		        }
		    }

		    return escaped;
		};

		internals.escapeJavaScriptChar = function (charCode) {

		    if (charCode >= 256) {
		        return '\\u' + internals.padLeft('' + charCode, 4);
		    }

		    var hexValue = new Buffer(String.fromCharCode(charCode), 'ascii').toString('hex');
		    return '\\x' + internals.padLeft(hexValue, 2);
		};

		internals.escapeHtmlChar = function (charCode) {

		    var namedEscape = internals.namedHtml[charCode];
		    if (typeof namedEscape !== 'undefined') {
		        return namedEscape;
		    }

		    if (charCode >= 256) {
		        return '&#' + charCode + ';';
		    }

		    var hexValue = new Buffer(String.fromCharCode(charCode), 'ascii').toString('hex');
		    return '&#x' + internals.padLeft(hexValue, 2) + ';';
		};

		internals.padLeft = function (str, len) {

		    while (str.length < len) {
		        str = '0' + str;
		    }

		    return str;
		};

		internals.isSafe = function (charCode) {

		    return typeof internals.safeCharCodes[charCode] !== 'undefined';
		};

		internals.namedHtml = {
		    '38': '&amp;',
		    '60': '&lt;',
		    '62': '&gt;',
		    '34': '&quot;',
		    '160': '&nbsp;',
		    '162': '&cent;',
		    '163': '&pound;',
		    '164': '&curren;',
		    '169': '&copy;',
		    '174': '&reg;'
		};

		internals.safeCharCodes = function () {

		    var safe = {};

		    for (var i = 32; i < 123; ++i) {

		        if (i >= 97 || // a-z
		        i >= 65 && i <= 90 || // A-Z
		        i >= 48 && i <= 57 || // 0-9
		        i === 32 || // space
		        i === 46 || // .
		        i === 44 || // ,
		        i === 45 || // -
		        i === 58 || // :
		        i === 95) {
		            // _

		            safe[i] = null;
		        }
		    }

		    return safe;
		}();
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Hoek = __webpack_require__(2);
		var Ref = __webpack_require__(12);
		var Errors = __webpack_require__(13);
		var Alternatives = null; // Delay-loaded to prevent circular dependencies
		var Cast = null;

		// Declare internals

		var internals = {
		    Set: __webpack_require__(15)
		};

		internals.defaults = {
		    abortEarly: true,
		    convert: true,
		    allowUnknown: false,
		    skipFunctions: false,
		    stripUnknown: false,
		    language: {},
		    presence: 'optional',
		    strip: false,
		    noDefaults: false

		    // context: null
		};

		module.exports = internals.Any = function () {
		    function _class() {
		        _classCallCheck(this, _class);

		        Cast = Cast || __webpack_require__(16);

		        this.isJoi = true;
		        this._type = 'any';
		        this._settings = null;
		        this._valids = new internals.Set();
		        this._invalids = new internals.Set();
		        this._tests = [];
		        this._refs = [];
		        this._flags = {
		            /*
		             presence: 'optional',                   // optional, required, forbidden, ignore
		             allowOnly: false,
		             allowUnknown: undefined,
		             default: undefined,
		             forbidden: false,
		             encoding: undefined,
		             insensitive: false,
		             trim: false,
		             case: undefined,                        // upper, lower
		             empty: undefined,
		             func: false,
		             raw: false
		             */
		        };

		        this._description = null;
		        this._unit = null;
		        this._notes = [];
		        this._tags = [];
		        this._examples = [];
		        this._meta = [];

		        this._inner = {}; // Hash of arrays of immutable objects
		    }

		    _class.prototype.createError = function createError(type, context, state, options) {

		        return Errors.create(type, context, state, options, this._flags);
		    };

		    _class.prototype.createOverrideError = function createOverrideError(type, context, state, options, message, template) {

		        return Errors.create(type, context, state, options, this._flags, message, template);
		    };

		    _class.prototype.checkOptions = function checkOptions(options) {

		        var Schemas = __webpack_require__(28);
		        var result = Schemas.options.validate(options);
		        if (result.error) {
		            throw new Error(result.error.details[0].message);
		        }
		    };

		    _class.prototype.clone = function clone() {

		        var obj = Object.create(Object.getPrototypeOf(this));

		        obj.isJoi = true;
		        obj._type = this._type;
		        obj._settings = internals.concatSettings(this._settings);
		        obj._baseType = this._baseType;
		        obj._valids = Hoek.clone(this._valids);
		        obj._invalids = Hoek.clone(this._invalids);
		        obj._tests = this._tests.slice();
		        obj._refs = this._refs.slice();
		        obj._flags = Hoek.clone(this._flags);

		        obj._description = this._description;
		        obj._unit = this._unit;
		        obj._notes = this._notes.slice();
		        obj._tags = this._tags.slice();
		        obj._examples = this._examples.slice();
		        obj._meta = this._meta.slice();

		        obj._inner = {};
		        var inners = Object.keys(this._inner);
		        for (var i = 0; i < inners.length; ++i) {
		            var key = inners[i];
		            obj._inner[key] = this._inner[key] ? this._inner[key].slice() : null;
		        }

		        return obj;
		    };

		    _class.prototype.concat = function concat(schema) {

		        Hoek.assert(schema instanceof internals.Any, 'Invalid schema object');
		        Hoek.assert(this._type === 'any' || schema._type === 'any' || schema._type === this._type, 'Cannot merge type', this._type, 'with another type:', schema._type);

		        var obj = this.clone();

		        if (this._type === 'any' && schema._type !== 'any') {

		            // Reset values as if we were "this"
		            var tmpObj = schema.clone();
		            var keysToRestore = ['_settings', '_valids', '_invalids', '_tests', '_refs', '_flags', '_description', '_unit', '_notes', '_tags', '_examples', '_meta', '_inner'];

		            for (var i = 0; i < keysToRestore.length; ++i) {
		                tmpObj[keysToRestore[i]] = obj[keysToRestore[i]];
		            }

		            obj = tmpObj;
		        }

		        obj._settings = obj._settings ? internals.concatSettings(obj._settings, schema._settings) : schema._settings;
		        obj._valids.merge(schema._valids, schema._invalids);
		        obj._invalids.merge(schema._invalids, schema._valids);
		        obj._tests = obj._tests.concat(schema._tests);
		        obj._refs = obj._refs.concat(schema._refs);
		        Hoek.merge(obj._flags, schema._flags);

		        obj._description = schema._description || obj._description;
		        obj._unit = schema._unit || obj._unit;
		        obj._notes = obj._notes.concat(schema._notes);
		        obj._tags = obj._tags.concat(schema._tags);
		        obj._examples = obj._examples.concat(schema._examples);
		        obj._meta = obj._meta.concat(schema._meta);

		        var inners = Object.keys(schema._inner);
		        var isObject = obj._type === 'object';
		        for (var _i = 0; _i < inners.length; ++_i) {
		            var key = inners[_i];
		            var source = schema._inner[key];
		            if (source) {
		                var target = obj._inner[key];
		                if (target) {
		                    if (isObject && key === 'children') {
		                        var keys = {};

		                        for (var j = 0; j < target.length; ++j) {
		                            keys[target[j].key] = j;
		                        }

		                        for (var _j = 0; _j < source.length; ++_j) {
		                            var sourceKey = source[_j].key;
		                            if (keys[sourceKey] >= 0) {
		                                target[keys[sourceKey]] = {
		                                    key: sourceKey,
		                                    schema: target[keys[sourceKey]].schema.concat(source[_j].schema)
		                                };
		                            } else {
		                                target.push(source[_j]);
		                            }
		                        }
		                    } else {
		                        obj._inner[key] = obj._inner[key].concat(source);
		                    }
		                } else {
		                    obj._inner[key] = source.slice();
		                }
		            }
		        }

		        return obj;
		    };

		    _class.prototype._test = function _test(name, arg, func, options) {

		        var obj = this.clone();
		        obj._tests.push({ func: func, name: name, arg: arg, options: options });
		        return obj;
		    };

		    _class.prototype.options = function options(_options) {

		        Hoek.assert(!_options.context, 'Cannot override context');
		        this.checkOptions(_options);

		        var obj = this.clone();
		        obj._settings = internals.concatSettings(obj._settings, _options);
		        return obj;
		    };

		    _class.prototype.strict = function strict(isStrict) {

		        var obj = this.clone();
		        obj._settings = obj._settings || {};
		        obj._settings.convert = isStrict === undefined ? false : !isStrict;
		        return obj;
		    };

		    _class.prototype.raw = function raw(isRaw) {

		        var value = isRaw === undefined ? true : isRaw;

		        if (this._flags.raw === value) {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.raw = value;
		        return obj;
		    };

		    _class.prototype.error = function error(err) {

		        Hoek.assert(err && (err instanceof Error || typeof err === 'function'), 'Must provide a valid Error object or a function');

		        var obj = this.clone();
		        obj._flags.error = err;
		        return obj;
		    };

		    _class.prototype.allow = function allow() {

		        var obj = this.clone();
		        var values = Hoek.flatten(Array.prototype.slice.call(arguments));
		        for (var i = 0; i < values.length; ++i) {
		            var value = values[i];

		            Hoek.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
		            obj._invalids.remove(value);
		            obj._valids.add(value, obj._refs);
		        }
		        return obj;
		    };

		    _class.prototype.valid = function valid() {

		        var obj = this.allow.apply(this, arguments);
		        obj._flags.allowOnly = true;
		        return obj;
		    };

		    _class.prototype.invalid = function invalid(value) {

		        var obj = this.clone();
		        var values = Hoek.flatten(Array.prototype.slice.call(arguments));
		        for (var i = 0; i < values.length; ++i) {
		            value = values[i];

		            Hoek.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
		            obj._valids.remove(value);
		            obj._invalids.add(value, this._refs);
		        }

		        return obj;
		    };

		    _class.prototype.required = function required() {

		        if (this._flags.presence === 'required') {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.presence = 'required';
		        return obj;
		    };

		    _class.prototype.optional = function optional() {

		        if (this._flags.presence === 'optional') {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.presence = 'optional';
		        return obj;
		    };

		    _class.prototype.forbidden = function forbidden() {

		        if (this._flags.presence === 'forbidden') {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.presence = 'forbidden';
		        return obj;
		    };

		    _class.prototype.strip = function strip() {

		        if (this._flags.strip) {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.strip = true;
		        return obj;
		    };

		    _class.prototype.applyFunctionToChildren = function applyFunctionToChildren(children, fn, args, root) {

		        children = [].concat(children);

		        if (children.length !== 1 || children[0] !== '') {
		            root = root ? root + '.' : '';

		            var extraChildren = (children[0] === '' ? children.slice(1) : children).map(function (child) {

		                return root + child;
		            });

		            throw new Error('unknown key(s) ' + extraChildren.join(', '));
		        }

		        return this[fn].apply(this, args);
		    };

		    _class.prototype.default = function _default(value, description) {

		        if (typeof value === 'function' && !Ref.isRef(value)) {

		            if (!value.description && description) {

		                value.description = description;
		            }

		            if (!this._flags.func) {
		                Hoek.assert(typeof value.description === 'string' && value.description.length > 0, 'description must be provided when default value is a function');
		            }
		        }

		        var obj = this.clone();
		        obj._flags.default = value;
		        Ref.push(obj._refs, value);
		        return obj;
		    };

		    _class.prototype.empty = function empty(schema) {

		        var obj = this.clone();
		        obj._flags.empty = schema === undefined ? undefined : Cast.schema(schema);
		        return obj;
		    };

		    _class.prototype.when = function when(ref, options) {

		        Hoek.assert(options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options');
		        Hoek.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');

		        var then = options.hasOwnProperty('then') ? this.concat(Cast.schema(options.then)) : undefined;
		        var otherwise = options.hasOwnProperty('otherwise') ? this.concat(Cast.schema(options.otherwise)) : undefined;

		        Alternatives = Alternatives || __webpack_require__(25);
		        var obj = Alternatives.when(ref, { is: options.is, then: then, otherwise: otherwise });
		        obj._flags.presence = 'ignore';
		        obj._baseType = this;

		        return obj;
		    };

		    _class.prototype.description = function description(desc) {

		        Hoek.assert(desc && typeof desc === 'string', 'Description must be a non-empty string');

		        var obj = this.clone();
		        obj._description = desc;
		        return obj;
		    };

		    _class.prototype.notes = function notes(_notes) {

		        Hoek.assert(_notes && (typeof _notes === 'string' || Array.isArray(_notes)), 'Notes must be a non-empty string or array');

		        var obj = this.clone();
		        obj._notes = obj._notes.concat(_notes);
		        return obj;
		    };

		    _class.prototype.tags = function tags(_tags) {

		        Hoek.assert(_tags && (typeof _tags === 'string' || Array.isArray(_tags)), 'Tags must be a non-empty string or array');

		        var obj = this.clone();
		        obj._tags = obj._tags.concat(_tags);
		        return obj;
		    };

		    _class.prototype.meta = function meta(_meta) {

		        Hoek.assert(_meta !== undefined, 'Meta cannot be undefined');

		        var obj = this.clone();
		        obj._meta = obj._meta.concat(_meta);
		        return obj;
		    };

		    _class.prototype.example = function example(value) {

		        Hoek.assert(arguments.length, 'Missing example');
		        var result = this._validate(value, null, internals.defaults);
		        Hoek.assert(!result.errors, 'Bad example:', result.errors && Errors.process(result.errors, value));

		        var obj = this.clone();
		        obj._examples.push(value);
		        return obj;
		    };

		    _class.prototype.unit = function unit(name) {

		        Hoek.assert(name && typeof name === 'string', 'Unit name must be a non-empty string');

		        var obj = this.clone();
		        obj._unit = name;
		        return obj;
		    };

		    _class.prototype._prepareEmptyValue = function _prepareEmptyValue(value) {

		        if (typeof value === 'string' && this._flags.trim) {
		            return value.trim();
		        }

		        return value;
		    };

		    _class.prototype._validate = function _validate(value, state, options, reference) {
		        var _this = this;

		        var originalValue = value;

		        // Setup state and settings

		        state = state || { key: '', path: '', parent: null, reference: reference };

		        if (this._settings) {
		            options = internals.concatSettings(options, this._settings);
		        }

		        var errors = [];
		        var finish = function finish() {

		            var finalValue = void 0;

		            if (value !== undefined) {
		                finalValue = _this._flags.raw ? originalValue : value;
		            } else if (options.noDefaults) {
		                finalValue = value;
		            } else if (Ref.isRef(_this._flags.default)) {
		                finalValue = _this._flags.default(state.parent, options);
		            } else if (typeof _this._flags.default === 'function' && !(_this._flags.func && !_this._flags.default.description)) {

		                var args = void 0;

		                if (state.parent !== null && _this._flags.default.length > 0) {

		                    args = [Hoek.clone(state.parent), options];
		                }

		                var defaultValue = internals._try(_this._flags.default, args);
		                finalValue = defaultValue.value;
		                if (defaultValue.error) {
		                    errors.push(_this.createError('any.default', defaultValue.error, state, options));
		                }
		            } else {
		                finalValue = Hoek.clone(_this._flags.default);
		            }

		            if (errors.length && typeof _this._flags.error === 'function') {
		                var change = _this._flags.error.call(_this, errors);

		                if (typeof change === 'string') {
		                    errors = [_this.createOverrideError('override', { reason: errors }, state, options, change)];
		                } else {
		                    errors = [].concat(change).map(function (err) {

		                        return err instanceof Error ? err : _this.createOverrideError(err.type || 'override', err.context, state, options, err.message, err.template);
		                    });
		                }
		            }

		            return {
		                value: _this._flags.strip ? undefined : finalValue,
		                finalValue: finalValue,
		                errors: errors.length ? errors : null
		            };
		        };

		        if (this._coerce) {
		            var coerced = this._coerce.call(this, value, state, options);
		            if (coerced.errors) {
		                value = coerced.value;
		                errors = errors.concat(coerced.errors);
		                return finish(); // Coerced error always aborts early
		            }

		            value = coerced.value;
		        }

		        if (this._flags.empty && !this._flags.empty._validate(this._prepareEmptyValue(value), null, internals.defaults).errors) {
		            value = undefined;
		        }

		        // Check presence requirements

		        var presence = this._flags.presence || options.presence;
		        if (presence === 'optional') {
		            if (value === undefined) {
		                var isDeepDefault = this._flags.hasOwnProperty('default') && this._flags.default === undefined;
		                if (isDeepDefault && this._type === 'object') {
		                    value = {};
		                } else {
		                    return finish();
		                }
		            }
		        } else if (presence === 'required' && value === undefined) {

		            errors.push(this.createError('any.required', null, state, options));
		            return finish();
		        } else if (presence === 'forbidden') {
		            if (value === undefined) {
		                return finish();
		            }

		            errors.push(this.createError('any.unknown', null, state, options));
		            return finish();
		        }

		        // Check allowed and denied values using the original value

		        if (this._valids.has(value, state, options, this._flags.insensitive)) {
		            return finish();
		        }

		        if (this._invalids.has(value, state, options, this._flags.insensitive)) {
		            errors.push(this.createError(value === '' ? 'any.empty' : 'any.invalid', null, state, options));
		            if (options.abortEarly || value === undefined) {
		                // No reason to keep validating missing value

		                return finish();
		            }
		        }

		        // Convert value and validate type

		        if (this._base) {
		            var base = this._base.call(this, value, state, options);
		            if (base.errors) {
		                value = base.value;
		                errors = errors.concat(base.errors);
		                return finish(); // Base error always aborts early
		            }

		            if (base.value !== value) {
		                value = base.value;

		                // Check allowed and denied values using the converted value

		                if (this._valids.has(value, state, options, this._flags.insensitive)) {
		                    return finish();
		                }

		                if (this._invalids.has(value, state, options, this._flags.insensitive)) {
		                    errors.push(this.createError(value === '' ? 'any.empty' : 'any.invalid', null, state, options));
		                    if (options.abortEarly) {
		                        return finish();
		                    }
		                }
		            }
		        }

		        // Required values did not match

		        if (this._flags.allowOnly) {
		            errors.push(this.createError('any.allowOnly', { valids: this._valids.values({ stripUndefined: true }) }, state, options));
		            if (options.abortEarly) {
		                return finish();
		            }
		        }

		        // Helper.validate tests

		        for (var i = 0; i < this._tests.length; ++i) {
		            var test = this._tests[i];
		            var ret = test.func.call(this, value, state, options);
		            if (ret instanceof Errors.Err) {
		                errors.push(ret);
		                if (options.abortEarly) {
		                    return finish();
		                }
		            } else {
		                value = ret;
		            }
		        }

		        return finish();
		    };

		    _class.prototype._validateWithOptions = function _validateWithOptions(value, options, callback) {

		        if (options) {
		            this.checkOptions(options);
		        }

		        var settings = internals.concatSettings(internals.defaults, options);
		        var result = this._validate(value, null, settings);
		        var errors = Errors.process(result.errors, value);

		        if (callback) {
		            return callback(errors, result.value);
		        }

		        return { error: errors, value: result.value };
		    };

		    _class.prototype.validate = function validate(value, options, callback) {

		        if (typeof options === 'function') {
		            return this._validateWithOptions(value, null, options);
		        }

		        return this._validateWithOptions(value, options, callback);
		    };

		    _class.prototype.describe = function describe() {
		        var _this2 = this;

		        var description = {
		            type: this._type
		        };

		        var flags = Object.keys(this._flags);
		        if (flags.length) {
		            if (['empty', 'default', 'lazy', 'label'].some(function (flag) {
		                return _this2._flags.hasOwnProperty(flag);
		            })) {
		                description.flags = {};
		                for (var i = 0; i < flags.length; ++i) {
		                    var flag = flags[i];
		                    if (flag === 'empty') {
		                        description.flags[flag] = this._flags[flag].describe();
		                    } else if (flag === 'default') {
		                        if (Ref.isRef(this._flags[flag])) {
		                            description.flags[flag] = this._flags[flag].toString();
		                        } else if (typeof this._flags[flag] === 'function') {
		                            description.flags[flag] = this._flags[flag].description;
		                        } else {
		                            description.flags[flag] = this._flags[flag];
		                        }
		                    } else if (flag === 'lazy' || flag === 'label') {
		                        // We don't want it in the description
		                    } else {
		                        description.flags[flag] = this._flags[flag];
		                    }
		                }
		            } else {
		                description.flags = this._flags;
		            }
		        }

		        if (this._settings) {
		            description.options = Hoek.clone(this._settings);
		        }

		        if (this._baseType) {
		            description.base = this._baseType.describe();
		        }

		        if (this._description) {
		            description.description = this._description;
		        }

		        if (this._notes.length) {
		            description.notes = this._notes;
		        }

		        if (this._tags.length) {
		            description.tags = this._tags;
		        }

		        if (this._meta.length) {
		            description.meta = this._meta;
		        }

		        if (this._examples.length) {
		            description.examples = this._examples;
		        }

		        if (this._unit) {
		            description.unit = this._unit;
		        }

		        var valids = this._valids.values();
		        if (valids.length) {
		            description.valids = valids.map(function (v) {

		                return Ref.isRef(v) ? v.toString() : v;
		            });
		        }

		        var invalids = this._invalids.values();
		        if (invalids.length) {
		            description.invalids = invalids.map(function (v) {

		                return Ref.isRef(v) ? v.toString() : v;
		            });
		        }

		        description.rules = [];

		        for (var _i2 = 0; _i2 < this._tests.length; ++_i2) {
		            var validator = this._tests[_i2];
		            var item = { name: validator.name };

		            if (validator.arg !== void 0) {
		                item.arg = Ref.isRef(validator.arg) ? validator.arg.toString() : validator.arg;
		            }

		            var options = validator.options;
		            if (options) {
		                if (options.hasRef) {
		                    item.arg = {};
		                    var keys = Object.keys(validator.arg);
		                    for (var j = 0; j < keys.length; ++j) {
		                        var key = keys[j];
		                        var value = validator.arg[key];
		                        item.arg[key] = Ref.isRef(value) ? value.toString() : value;
		                    }
		                }

		                if (typeof options.description === 'string') {
		                    item.description = options.description;
		                } else if (typeof options.description === 'function') {
		                    item.description = options.description(item.arg);
		                }
		            }

		            description.rules.push(item);
		        }

		        if (!description.rules.length) {
		            delete description.rules;
		        }

		        var label = this._getLabel();
		        if (label) {
		            description.label = label;
		        }

		        return description;
		    };

		    _class.prototype.label = function label(name) {

		        Hoek.assert(name && typeof name === 'string', 'Label name must be a non-empty string');

		        var obj = this.clone();
		        obj._flags.label = name;
		        return obj;
		    };

		    _class.prototype._getLabel = function _getLabel(def) {

		        return this._flags.label || def;
		    };

		    return _class;
		}();

		internals.Any.prototype.isImmutable = true; // Prevents Hoek from deep cloning schema objects

		// Aliases

		internals.Any.prototype.only = internals.Any.prototype.equal = internals.Any.prototype.valid;
		internals.Any.prototype.disallow = internals.Any.prototype.not = internals.Any.prototype.invalid;
		internals.Any.prototype.exist = internals.Any.prototype.required;

		internals._try = function (fn, args) {

		    var err = void 0;
		    var result = void 0;

		    try {
		        result = fn.apply(null, args);
		    } catch (e) {
		        err = e;
		    }

		    return {
		        value: result,
		        error: err
		    };
		};

		internals.concatSettings = function (target, source) {

		    // Used to avoid cloning context

		    if (!target && !source) {

		        return null;
		    }

		    var obj = {};

		    if (target) {
		        _extends(obj, target);
		    }

		    if (source) {
		        var sKeys = Object.keys(source);
		        for (var i = 0; i < sKeys.length; ++i) {
		            var key = sKeys[i];
		            if (key !== 'language' || !obj.hasOwnProperty(key)) {

		                obj[key] = source[key];
		            } else {
		                obj[key] = Hoek.applyToDefaults(obj[key], source[key]);
		            }
		        }
		    }

		    return obj;
		};

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {};

		exports.create = function (key, options) {

		    Hoek.assert(typeof key === 'string', 'Invalid reference key:', key);

		    var settings = Hoek.clone(options); // options can be reused and modified

		    var ref = function ref(value, validationOptions) {

		        return Hoek.reach(ref.isContext ? validationOptions.context : value, ref.key, settings);
		    };

		    ref.isContext = key[0] === (settings && settings.contextPrefix || '$');
		    ref.key = ref.isContext ? key.slice(1) : key;
		    ref.path = ref.key.split(settings && settings.separator || '.');
		    ref.depth = ref.path.length;
		    ref.root = ref.path[0];
		    ref.isJoi = true;

		    ref.toString = function () {

		        return (ref.isContext ? 'context:' : 'ref:') + ref.key;
		    };

		    return ref;
		};

		exports.isRef = function (ref) {

		    return typeof ref === 'function' && ref.isJoi;
		};

		exports.push = function (array, ref) {

		    if (exports.isRef(ref) && !ref.isContext) {

		        array.push(ref.root);
		    }
		};

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Hoek = __webpack_require__(2);
		var Language = __webpack_require__(14);

		// Declare internals

		var internals = {
		    annotations: Symbol('joi-annotations')
		};

		internals.stringify = function (value, wrapArrays) {

		    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

		    if (value === null) {
		        return 'null';
		    }

		    if (type === 'string') {
		        return value;
		    }

		    if (value instanceof exports.Err || type === 'function') {
		        return value.toString();
		    }

		    if (type === 'object') {
		        if (Array.isArray(value)) {
		            var partial = '';

		            for (var i = 0; i < value.length; ++i) {
		                partial = partial + (partial.length ? ', ' : '') + internals.stringify(value[i], wrapArrays);
		            }

		            return wrapArrays ? '[' + partial + ']' : partial;
		        }

		        return value.toString();
		    }

		    return JSON.stringify(value);
		};

		exports.Err = function () {
		    function _class(type, context, state, options, flags, message, template) {
		        _classCallCheck(this, _class);

		        this.isJoi = true;
		        this.type = type;
		        this.context = context || {};
		        this.context.key = state.key;
		        this.path = state.path;
		        this.options = options;
		        this.flags = flags;
		        this.message = message;
		        this.template = template;
		    }

		    _class.prototype.toString = function toString() {
		        var _this = this;

		        if (this.message) {
		            return this.message;
		        }

		        var format = void 0;

		        if (this.template) {
		            format = this.template;
		        }

		        var localized = this.options.language;

		        if (this.flags.label) {
		            this.context.key = this.flags.label;
		        } else if (this.context.key === '' || this.context.key === null) {
		            this.context.key = localized.root || Language.errors.root;
		        }

		        format = format || Hoek.reach(localized, this.type) || Hoek.reach(Language.errors, this.type);

		        var wrapArrays = Hoek.reach(localized, 'messages.wrapArrays');
		        if (typeof wrapArrays !== 'boolean') {
		            wrapArrays = Language.errors.messages.wrapArrays;
		        }

		        if (format === null) {
		            var childrenString = internals.stringify(this.context.reason, wrapArrays);
		            if (wrapArrays) {
		                return childrenString.slice(1, -1);
		            }
		            return childrenString;
		        }

		        var hasKey = /\{\{\!?key\}\}/.test(format);
		        var skipKey = format.length > 2 && format[0] === '!' && format[1] === '!';

		        if (skipKey) {
		            format = format.slice(2);
		        }

		        if (!hasKey && !skipKey) {
		            format = (Hoek.reach(localized, 'key') || Hoek.reach(Language.errors, 'key')) + format;
		        }

		        return format.replace(/\{\{(\!?)([^}]+)\}\}/g, function ($0, isSecure, name) {

		            var value = Hoek.reach(_this.context, name);
		            var normalized = internals.stringify(value, wrapArrays);
		            return isSecure ? Hoek.escapeHtml(normalized) : normalized;
		        });
		    };

		    return _class;
		}();

		exports.create = function (type, context, state, options, flags, message, template) {

		    return new exports.Err(type, context, state, options, flags, message, template);
		};

		exports.process = function (errors, object) {

		    if (!errors || !errors.length) {
		        return null;
		    }

		    // Construct error

		    var message = '';
		    var details = [];

		    var processErrors = function processErrors(localErrors, parent) {

		        for (var i = 0; i < localErrors.length; ++i) {
		            var item = localErrors[i];

		            if (item instanceof Error) {
		                return item;
		            }

		            if (item.flags.error && typeof item.flags.error !== 'function') {
		                return item.flags.error;
		            }

		            var itemMessage = void 0;
		            if (parent === undefined) {
		                itemMessage = item.toString();
		                message = message + (message ? '. ' : '') + itemMessage;
		            }

		            // Do not push intermediate errors, we're only interested in leafs

		            if (item.context.reason && item.context.reason.length) {
		                var _override = processErrors(item.context.reason, item.path);
		                if (_override) {
		                    return _override;
		                }
		            } else {
		                details.push({
		                    message: itemMessage || item.toString(),
		                    path: internals.getPath(item),
		                    type: item.type,
		                    context: item.context
		                });
		            }
		        }
		    };

		    var override = processErrors(errors);
		    if (override) {
		        return override;
		    }

		    var error = new Error(message);
		    error.isJoi = true;
		    error.name = 'ValidationError';
		    error.details = details;
		    error._object = object;
		    error.annotate = internals.annotate;
		    return error;
		};

		internals.getPath = function (item) {

		    return item.path || item.context.key;
		};

		// Inspired by json-stringify-safe
		internals.safeStringify = function (obj, spaces) {

		    return JSON.stringify(obj, internals.serializer(), spaces);
		};

		internals.serializer = function () {

		    var keys = [];
		    var stack = [];

		    var cycleReplacer = function cycleReplacer(key, value) {

		        if (stack[0] === value) {
		            return '[Circular ~]';
		        }

		        return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
		    };

		    return function (key, value) {

		        if (stack.length > 0) {
		            var thisPos = stack.indexOf(this);
		            if (~thisPos) {
		                stack.length = thisPos + 1;
		                keys.length = thisPos + 1;
		                keys[thisPos] = key;
		            } else {
		                stack.push(this);
		                keys.push(key);
		            }

		            if (~stack.indexOf(value)) {
		                value = cycleReplacer.call(this, key, value);
		            }
		        } else {
		            stack.push(value);
		        }

		        if (value) {
		            var annotations = value[internals.annotations];
		            if (annotations) {
		                if (Array.isArray(value)) {
		                    var annotated = [];

		                    for (var i = 0; i < value.length; ++i) {
		                        if (annotations.errors[i]) {
		                            annotated.push('_$idx$_' + annotations.errors[i].sort().join(', ') + '_$end$_');
		                        }
		                        annotated.push(value[i]);
		                    }

		                    value = annotated;
		                } else {
		                    var errorKeys = Object.keys(annotations.errors);
		                    for (var _i = 0; _i < errorKeys.length; ++_i) {
		                        var errorKey = errorKeys[_i];
		                        value[errorKey + '_$key$_' + annotations.errors[errorKey].sort().join(', ') + '_$end$_'] = value[errorKey];
		                        value[errorKey] = undefined;
		                    }

		                    var missingKeys = Object.keys(annotations.missing);
		                    for (var _i2 = 0; _i2 < missingKeys.length; ++_i2) {
		                        var missingKey = missingKeys[_i2];
		                        value['_$miss$_' + missingKey + '|' + annotations.missing[missingKey] + '_$end$_'] = '__missing__';
		                    }
		                }

		                return value;
		            }
		        }

		        if (value === Infinity || value === -Infinity || Number.isNaN(value) || typeof value === 'function' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol') {
		            return '[' + value.toString() + ']';
		        }

		        return value;
		    };
		};

		internals.annotate = function (stripColorCodes) {

		    var redFgEscape = stripColorCodes ? '' : '\x1B[31m';
		    var redBgEscape = stripColorCodes ? '' : '\x1B[41m';
		    var endColor = stripColorCodes ? '' : '\x1B[0m';

		    if (_typeof(this._object) !== 'object') {
		        return this.details[0].message;
		    }

		    var obj = Hoek.clone(this._object || {});

		    for (var i = this.details.length - 1; i >= 0; --i) {
		        // Reverse order to process deepest child first
		        var pos = i + 1;
		        var error = this.details[i];
		        var path = error.path.split('.');
		        var ref = obj;
		        for (var j = 0;; ++j) {
		            var seg = path[j];

		            if (ref.isImmutable) {
		                ref = ref.clone(); // joi schemas are not cloned by hoek, we have to take this extra step
		            }

		            if (j + 1 < path.length && ref[seg] && typeof ref[seg] !== 'string') {

		                ref = ref[seg];
		            } else {
		                var refAnnotations = ref[internals.annotations] = ref[internals.annotations] || { errors: {}, missing: {} };
		                var value = ref[seg];

		                if (value !== undefined) {
		                    refAnnotations.errors[seg] = refAnnotations.errors[seg] || [];
		                    refAnnotations.errors[seg].push(pos);
		                } else {
		                    refAnnotations.missing[seg] = pos;
		                }

		                break;
		            }
		        }
		    }

		    var replacers = {
		        key: /_\$key\$_([, \d]+)_\$end\$_\"/g,
		        missing: /\"_\$miss\$_([^\|]+)\|(\d+)_\$end\$_\"\: \"__missing__\"/g,
		        arrayIndex: /\s*\"_\$idx\$_([, \d]+)_\$end\$_\",?\n(.*)/g,
		        specials: /"\[(NaN|Symbol.*|-?Infinity|function.*|\(.*)\]"/g
		    };

		    var message = internals.safeStringify(obj, 2).replace(replacers.key, function ($0, $1) {
		        return '" ' + redFgEscape + '[' + $1 + ']' + endColor;
		    }).replace(replacers.missing, function ($0, $1, $2) {
		        return redBgEscape + '"' + $1 + '"' + endColor + redFgEscape + ' [' + $2 + ']: -- missing --' + endColor;
		    }).replace(replacers.arrayIndex, function ($0, $1, $2) {
		        return '\n' + $2 + ' ' + redFgEscape + '[' + $1 + ']' + endColor;
		    }).replace(replacers.specials, function ($0, $1) {
		        return $1;
		    });

		    message = message + '\n' + redFgEscape;

		    for (var _i3 = 0; _i3 < this.details.length; ++_i3) {
		        var _pos = _i3 + 1;
		        message = message + '\n[' + _pos + '] ' + this.details[_i3].message;
		    }

		    message = message + endColor;

		    return message;
		};

	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		'use strict';

		// Load modules


		// Declare internals

		var internals = {};

		exports.errors = {
		    root: 'value',
		    key: '"{{!key}}" ',
		    messages: {
		        wrapArrays: true
		    },
		    any: {
		        unknown: 'is not allowed',
		        invalid: 'contains an invalid value',
		        empty: 'is not allowed to be empty',
		        required: 'is required',
		        allowOnly: 'must be one of {{valids}}',
		        default: 'threw an error when running default method'
		    },
		    alternatives: {
		        base: 'not matching any of the allowed alternatives',
		        child: null
		    },
		    array: {
		        base: 'must be an array',
		        includes: 'at position {{pos}} does not match any of the allowed types',
		        includesSingle: 'single value of "{{!key}}" does not match any of the allowed types',
		        includesOne: 'at position {{pos}} fails because {{reason}}',
		        includesOneSingle: 'single value of "{{!key}}" fails because {{reason}}',
		        includesRequiredUnknowns: 'does not contain {{unknownMisses}} required value(s)',
		        includesRequiredKnowns: 'does not contain {{knownMisses}}',
		        includesRequiredBoth: 'does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)',
		        excludes: 'at position {{pos}} contains an excluded value',
		        excludesSingle: 'single value of "{{!key}}" contains an excluded value',
		        min: 'must contain at least {{limit}} items',
		        max: 'must contain less than or equal to {{limit}} items',
		        length: 'must contain {{limit}} items',
		        ordered: 'at position {{pos}} fails because {{reason}}',
		        orderedLength: 'at position {{pos}} fails because array must contain at most {{limit}} items',
		        ref: 'references "{{ref}}" which is not a positive integer',
		        sparse: 'must not be a sparse array',
		        unique: 'position {{pos}} contains a duplicate value'
		    },
		    boolean: {
		        base: 'must be a boolean'
		    },
		    binary: {
		        base: 'must be a buffer or a string',
		        min: 'must be at least {{limit}} bytes',
		        max: 'must be less than or equal to {{limit}} bytes',
		        length: 'must be {{limit}} bytes'
		    },
		    date: {
		        base: 'must be a number of milliseconds or valid date string',
		        format: 'must be a string with one of the following formats {{format}}',
		        strict: 'must be a valid date',
		        min: 'must be larger than or equal to "{{limit}}"',
		        max: 'must be less than or equal to "{{limit}}"',
		        isoDate: 'must be a valid ISO 8601 date',
		        timestamp: {
		            javascript: 'must be a valid timestamp or number of milliseconds',
		            unix: 'must be a valid timestamp or number of seconds'
		        },
		        ref: 'references "{{ref}}" which is not a date'
		    },
		    function: {
		        base: 'must be a Function',
		        arity: 'must have an arity of {{n}}',
		        minArity: 'must have an arity greater or equal to {{n}}',
		        maxArity: 'must have an arity lesser or equal to {{n}}',
		        ref: 'must be a Joi reference'
		    },
		    lazy: {
		        base: '!!schema error: lazy schema must be set',
		        schema: '!!schema error: lazy schema function must return a schema'
		    },
		    object: {
		        base: 'must be an object',
		        child: '!!child "{{!child}}" fails because {{reason}}',
		        min: 'must have at least {{limit}} children',
		        max: 'must have less than or equal to {{limit}} children',
		        length: 'must have {{limit}} children',
		        allowUnknown: '!!"{{!child}}" is not allowed',
		        with: '!!"{{mainWithLabel}}" missing required peer "{{peerWithLabel}}"',
		        without: '!!"{{mainWithLabel}}" conflict with forbidden peer "{{peerWithLabel}}"',
		        missing: 'must contain at least one of {{peersWithLabels}}',
		        xor: 'contains a conflict between exclusive peers {{peersWithLabels}}',
		        or: 'must contain at least one of {{peersWithLabels}}',
		        and: 'contains {{presentWithLabels}} without its required peers {{missingWithLabels}}',
		        nand: '!!"{{mainWithLabel}}" must not exist simultaneously with {{peersWithLabels}}',
		        assert: '!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}',
		        rename: {
		            multiple: 'cannot rename child "{{from}}" because multiple renames are disabled and another key was already renamed to "{{to}}"',
		            override: 'cannot rename child "{{from}}" because override is disabled and target "{{to}}" exists'
		        },
		        type: 'must be an instance of "{{type}}"',
		        schema: 'must be a Joi instance'
		    },
		    number: {
		        base: 'must be a number',
		        min: 'must be larger than or equal to {{limit}}',
		        max: 'must be less than or equal to {{limit}}',
		        less: 'must be less than {{limit}}',
		        greater: 'must be greater than {{limit}}',
		        float: 'must be a float or double',
		        integer: 'must be an integer',
		        negative: 'must be a negative number',
		        positive: 'must be a positive number',
		        precision: 'must have no more than {{limit}} decimal places',
		        ref: 'references "{{ref}}" which is not a number',
		        multiple: 'must be a multiple of {{multiple}}'
		    },
		    string: {
		        base: 'must be a string',
		        min: 'length must be at least {{limit}} characters long',
		        max: 'length must be less than or equal to {{limit}} characters long',
		        length: 'length must be {{limit}} characters long',
		        alphanum: 'must only contain alpha-numeric characters',
		        token: 'must only contain alpha-numeric and underscore characters',
		        regex: {
		            base: 'with value "{{!value}}" fails to match the required pattern: {{pattern}}',
		            name: 'with value "{{!value}}" fails to match the {{name}} pattern',
		            invert: {
		                base: 'with value "{{!value}}" matches the inverted pattern: {{pattern}}',
		                name: 'with value "{{!value}}" matches the inverted {{name}} pattern'
		            }
		        },
		        email: 'must be a valid email',
		        uri: 'must be a valid uri',
		        uriRelativeOnly: 'must be a valid relative uri',
		        uriCustomScheme: 'must be a valid uri with a scheme matching the {{scheme}} pattern',
		        isoDate: 'must be a valid ISO 8601 date',
		        guid: 'must be a valid GUID',
		        hex: 'must only contain hexadecimal characters',
		        base64: 'must be a valid base64 string',
		        hostname: 'must be a valid hostname',
		        lowercase: 'must only contain lowercase characters',
		        uppercase: 'must only contain uppercase characters',
		        trim: 'must not have leading or trailing whitespace',
		        creditCard: 'must be a credit card',
		        ref: 'references "{{ref}}" which is not a number',
		        ip: 'must be a valid ip address with a {{cidr}} CIDR',
		        ipVersion: 'must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR'
		    }
		};

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Ref = __webpack_require__(12);

		module.exports = function () {
		    function Set() {
		        _classCallCheck(this, Set);

		        this._set = [];
		    }

		    Set.prototype.add = function add(value, refs) {

		        if (!Ref.isRef(value) && this.has(value, null, null, false)) {

		            return;
		        }

		        if (refs !== undefined) {
		            // If it's a merge, we don't have any refs
		            Ref.push(refs, value);
		        }

		        this._set.push(value);
		        return this;
		    };

		    Set.prototype.merge = function merge(add, remove) {

		        for (var i = 0; i < add._set.length; ++i) {
		            this.add(add._set[i]);
		        }

		        for (var _i = 0; _i < remove._set.length; ++_i) {
		            this.remove(remove._set[_i]);
		        }

		        return this;
		    };

		    Set.prototype.remove = function remove(value) {

		        this._set = this._set.filter(function (item) {
		            return value !== item;
		        });
		        return this;
		    };

		    Set.prototype.has = function has(value, state, options, insensitive) {

		        for (var i = 0; i < this._set.length; ++i) {
		            var items = this._set[i];

		            if (state && Ref.isRef(items)) {
		                // Only resolve references if there is a state, otherwise it's a merge
		                items = items(state.reference || state.parent, options);
		            }

		            if (!Array.isArray(items)) {
		                items = [items];
		            }

		            for (var j = 0; j < items.length; ++j) {
		                var item = items[j];
		                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== (typeof item === 'undefined' ? 'undefined' : _typeof(item))) {
		                    continue;
		                }

		                if (value === item || value instanceof Date && item instanceof Date && value.getTime() === item.getTime() || insensitive && typeof value === 'string' && value.toLowerCase() === item.toLowerCase() || Buffer.isBuffer(value) && Buffer.isBuffer(item) && value.length === item.length && value.toString('binary') === item.toString('binary')) {

		                    return true;
		                }
		            }
		        }

		        return false;
		    };

		    Set.prototype.values = function values(options) {

		        if (options && options.stripUndefined) {
		            var values = [];

		            for (var i = 0; i < this._set.length; ++i) {
		                var item = this._set[i];
		                if (item !== undefined) {
		                    values.push(item);
		                }
		            }

		            return values;
		        }

		        return this._set.slice();
		    };

		    Set.prototype.slice = function slice() {

		        var newSet = new Set();
		        newSet._set = this._set.slice();

		        return newSet;
		    };

		    Set.prototype.concat = function concat(source) {

		        var newSet = new Set();
		        newSet._set = this._set.concat(source._set);

		        return newSet;
		    };

		    return Set;
		}();
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var Hoek = __webpack_require__(2);
		var Ref = __webpack_require__(12);

		// Type modules are delay-loaded to prevent circular dependencies


		// Declare internals

		var internals = {
		    any: null,
		    date: __webpack_require__(17),
		    string: __webpack_require__(18),
		    number: __webpack_require__(23),
		    boolean: __webpack_require__(24),
		    alt: null,
		    object: null
		};

		exports.schema = function (config) {

		    internals.any = internals.any || new (__webpack_require__(11))();
		    internals.alt = internals.alt || __webpack_require__(25);
		    internals.object = internals.object || __webpack_require__(26);

		    if (config !== undefined && config !== null && (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {

		        if (config.isJoi) {
		            return config;
		        }

		        if (Array.isArray(config)) {
		            return internals.alt.try(config);
		        }

		        if (config instanceof RegExp) {
		            return internals.string.regex(config);
		        }

		        if (config instanceof Date) {
		            return internals.date.valid(config);
		        }

		        return internals.object.keys(config);
		    }

		    if (typeof config === 'string') {
		        return internals.string.valid(config);
		    }

		    if (typeof config === 'number') {
		        return internals.number.valid(config);
		    }

		    if (typeof config === 'boolean') {
		        return internals.boolean.valid(config);
		    }

		    if (Ref.isRef(config)) {
		        return internals.any.valid(config);
		    }

		    Hoek.assert(config === null, 'Invalid schema content:', config);

		    return internals.any.valid(null);
		};

		exports.ref = function (id) {

		    return Ref.isRef(id) ? id : Ref.create(id);
		};

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Any = __webpack_require__(11);
		var Ref = __webpack_require__(12);
		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {};

		internals.isoDate = /^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/;
		internals.invalidDate = new Date('');
		internals.isIsoDate = function () {

		    var isoString = internals.isoDate.toString();

		    return function (date) {

		        return date && date.toString() === isoString;
		    };
		}();

		internals.Date = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'date';
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var result = {
		            value: options.convert && internals.Date.toDate(value, this._flags.format, this._flags.timestamp, this._flags.multiplier) || value
		        };

		        if (result.value instanceof Date && !isNaN(result.value.getTime())) {
		            result.errors = null;
		        } else if (!options.convert) {
		            result.errors = this.createError('date.strict', null, state, options);
		        } else {
		            var type = void 0;
		            if (internals.isIsoDate(this._flags.format)) {
		                type = 'isoDate';
		            } else if (this._flags.timestamp) {
		                type = 'timestamp.' + this._flags.timestamp;
		            } else {
		                type = 'base';
		            }

		            result.errors = this.createError('date.' + type, null, state, options);
		        }

		        return result;
		    };

		    _class.toDate = function toDate(value, format, timestamp, multiplier) {

		        if (value instanceof Date) {
		            return value;
		        }

		        if (typeof value === 'string' || typeof value === 'number' && !isNaN(value) && isFinite(value)) {

		            if (typeof value === 'string' && /^[+-]?\d+(\.\d+)?$/.test(value)) {

		                value = parseFloat(value);
		            }

		            var date = void 0;
		            if (format && internals.isIsoDate(format)) {
		                date = format.test(value) ? new Date(value) : internals.invalidDate;
		            } else if (timestamp && multiplier) {
		                date = new Date(value * multiplier);
		            } else {
		                date = new Date(value);
		            }

		            if (!isNaN(date.getTime())) {
		                return date;
		            }
		        }

		        return null;
		    };

		    _class.prototype.iso = function iso() {

		        if (this._flags.format === internals.isoDate) {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.format = internals.isoDate;
		        return obj;
		    };

		    _class.prototype.timestamp = function timestamp(type) {

		        type = type || 'javascript';

		        var allowed = ['javascript', 'unix'];
		        Hoek.assert(allowed.indexOf(type) !== -1, '"type" must be one of "' + allowed.join('", "') + '"');

		        if (this._flags.timestamp === type) {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.timestamp = type;
		        obj._flags.multiplier = type === 'unix' ? 1000 : 1;
		        return obj;
		    };

		    _class.prototype._isIsoDate = function _isIsoDate(value) {

		        return internals.isoDate.test(value);
		    };

		    return _class;
		}(Any);

		internals.compare = function (type, compare) {

		    return function (date) {

		        var isNow = date === 'now';
		        var isRef = Ref.isRef(date);

		        if (!isNow && !isRef) {
		            date = internals.Date.toDate(date);
		        }

		        Hoek.assert(date, 'Invalid date format');

		        return this._test(type, date, function (value, state, options) {

		            var compareTo = void 0;
		            if (isNow) {
		                compareTo = Date.now();
		            } else if (isRef) {
		                compareTo = internals.Date.toDate(date(state.reference || state.parent, options));

		                if (!compareTo) {
		                    return this.createError('date.ref', { ref: date.key }, state, options);
		                }

		                compareTo = compareTo.getTime();
		            } else {
		                compareTo = date.getTime();
		            }

		            if (compare(value.getTime(), compareTo)) {
		                return value;
		            }

		            return this.createError('date.' + type, { limit: new Date(compareTo) }, state, options);
		        });
		    };
		};
		internals.Date.prototype.min = internals.compare('min', function (value, date) {
		    return value >= date;
		});
		internals.Date.prototype.max = internals.compare('max', function (value, date) {
		    return value <= date;
		});

		module.exports = new internals.Date();

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Net = __webpack_require__(5);
		var Hoek = __webpack_require__(2);
		var Isemail = void 0; // Loaded on demand
		var Any = __webpack_require__(11);
		var Ref = __webpack_require__(12);
		var JoiDate = __webpack_require__(17);
		var Uri = __webpack_require__(19);
		var Ip = __webpack_require__(21);

		// Declare internals

		var internals = {
		    uriRegex: Uri.createUriRegex(),
		    ipRegex: Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], 'optional'),
		    guidBrackets: {
		        '{': '}', '[': ']', '(': ')', '': ''
		    },
		    guidVersions: {
		        uuidv1: '1',
		        uuidv2: '2',
		        uuidv3: '3',
		        uuidv4: '4',
		        uuidv5: '5'
		    }
		};

		internals.String = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'string';
		        _this._invalids.add('');
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        if (typeof value === 'string' && options.convert) {

		            if (this._flags.case) {
		                value = this._flags.case === 'upper' ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
		            }

		            if (this._flags.trim) {
		                value = value.trim();
		            }

		            if (this._inner.replacements) {

		                for (var i = 0; i < this._inner.replacements.length; ++i) {
		                    var replacement = this._inner.replacements[i];
		                    value = value.replace(replacement.pattern, replacement.replacement);
		                }
		            }

		            if (this._flags.truncate) {
		                for (var _i = 0; _i < this._tests.length; ++_i) {
		                    var test = this._tests[_i];
		                    if (test.name === 'max') {
		                        value = value.slice(0, test.arg);
		                        break;
		                    }
		                }
		            }
		        }

		        return {
		            value: value,
		            errors: typeof value === 'string' ? null : this.createError('string.base', { value: value }, state, options)
		        };
		    };

		    _class.prototype.insensitive = function insensitive() {

		        if (this._flags.insensitive) {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.insensitive = true;
		        return obj;
		    };

		    _class.prototype.creditCard = function creditCard() {

		        return this._test('creditCard', undefined, function (value, state, options) {

		            var i = value.length;
		            var sum = 0;
		            var mul = 1;

		            while (i--) {
		                var char = value.charAt(i) * mul;
		                sum = sum + (char - (char > 9) * 9);
		                mul = mul ^ 3;
		            }

		            var check = sum % 10 === 0 && sum > 0;
		            return check ? value : this.createError('string.creditCard', { value: value }, state, options);
		        });
		    };

		    _class.prototype.regex = function regex(pattern, patternOptions) {

		        Hoek.assert(pattern instanceof RegExp, 'pattern must be a RegExp');

		        var patternObject = {
		            pattern: new RegExp(pattern.source, pattern.ignoreCase ? 'i' : undefined) // Future version should break this and forbid unsupported regex flags
		        };

		        if (typeof patternOptions === 'string') {
		            patternObject.name = patternOptions;
		        } else if ((typeof patternOptions === 'undefined' ? 'undefined' : _typeof(patternOptions)) === 'object') {
		            patternObject.invert = !!patternOptions.invert;

		            if (patternOptions.name) {
		                patternObject.name = patternOptions.name;
		            }
		        }

		        var errorCode = ['string.regex', patternObject.invert ? '.invert' : '', patternObject.name ? '.name' : '.base'].join('');

		        return this._test('regex', patternObject, function (value, state, options) {

		            var patternMatch = patternObject.pattern.test(value);

		            if (patternMatch ^ patternObject.invert) {
		                return value;
		            }

		            return this.createError(errorCode, { name: patternObject.name, pattern: patternObject.pattern, value: value }, state, options);
		        });
		    };

		    _class.prototype.alphanum = function alphanum() {

		        return this._test('alphanum', undefined, function (value, state, options) {

		            if (/^[a-zA-Z0-9]+$/.test(value)) {
		                return value;
		            }

		            return this.createError('string.alphanum', { value: value }, state, options);
		        });
		    };

		    _class.prototype.token = function token() {

		        return this._test('token', undefined, function (value, state, options) {

		            if (/^\w+$/.test(value)) {
		                return value;
		            }

		            return this.createError('string.token', { value: value }, state, options);
		        });
		    };

		    _class.prototype.email = function email(isEmailOptions) {

		        if (isEmailOptions) {
		            Hoek.assert((typeof isEmailOptions === 'undefined' ? 'undefined' : _typeof(isEmailOptions)) === 'object', 'email options must be an object');
		            Hoek.assert(typeof isEmailOptions.checkDNS === 'undefined', 'checkDNS option is not supported');
		            Hoek.assert(typeof isEmailOptions.tldWhitelist === 'undefined' || _typeof(isEmailOptions.tldWhitelist) === 'object', 'tldWhitelist must be an array or object');
		            Hoek.assert(typeof isEmailOptions.minDomainAtoms === 'undefined' || Number.isSafeInteger(isEmailOptions.minDomainAtoms) && isEmailOptions.minDomainAtoms > 0, 'minDomainAtoms must be a positive integer');
		            Hoek.assert(typeof isEmailOptions.errorLevel === 'undefined' || typeof isEmailOptions.errorLevel === 'boolean' || Number.isSafeInteger(isEmailOptions.errorLevel) && isEmailOptions.errorLevel >= 0, 'errorLevel must be a non-negative integer or boolean');
		        }

		        return this._test('email', isEmailOptions, function (value, state, options) {

		            Isemail = Isemail || __webpack_require__(22);

		            try {
		                var result = Isemail.validate(value, isEmailOptions);
		                if (result === true || result === 0) {
		                    return value;
		                }
		            } catch (e) {}

		            return this.createError('string.email', { value: value }, state, options);
		        });
		    };

		    _class.prototype.ip = function ip(ipOptions) {

		        var regex = internals.ipRegex;
		        ipOptions = ipOptions || {};
		        Hoek.assert((typeof ipOptions === 'undefined' ? 'undefined' : _typeof(ipOptions)) === 'object', 'options must be an object');

		        if (ipOptions.cidr) {
		            Hoek.assert(typeof ipOptions.cidr === 'string', 'cidr must be a string');
		            ipOptions.cidr = ipOptions.cidr.toLowerCase();

		            Hoek.assert(ipOptions.cidr in Ip.cidrs, 'cidr must be one of ' + Object.keys(Ip.cidrs).join(', '));

		            // If we only received a `cidr` setting, create a regex for it. But we don't need to create one if `cidr` is "optional" since that is the default
		            if (!ipOptions.version && ipOptions.cidr !== 'optional') {
		                regex = Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], ipOptions.cidr);
		            }
		        } else {

		            // Set our default cidr strategy
		            ipOptions.cidr = 'optional';
		        }

		        var versions = void 0;
		        if (ipOptions.version) {
		            if (!Array.isArray(ipOptions.version)) {
		                ipOptions.version = [ipOptions.version];
		            }

		            Hoek.assert(ipOptions.version.length >= 1, 'version must have at least 1 version specified');

		            versions = [];
		            for (var i = 0; i < ipOptions.version.length; ++i) {
		                var version = ipOptions.version[i];
		                Hoek.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
		                version = version.toLowerCase();
		                Hoek.assert(Ip.versions[version], 'version at position ' + i + ' must be one of ' + Object.keys(Ip.versions).join(', '));
		                versions.push(version);
		            }

		            // Make sure we have a set of versions
		            versions = Hoek.unique(versions);

		            regex = Ip.createIpRegex(versions, ipOptions.cidr);
		        }

		        return this._test('ip', ipOptions, function (value, state, options) {

		            if (regex.test(value)) {
		                return value;
		            }

		            if (versions) {
		                return this.createError('string.ipVersion', { value: value, cidr: ipOptions.cidr, version: versions }, state, options);
		            }

		            return this.createError('string.ip', { value: value, cidr: ipOptions.cidr }, state, options);
		        });
		    };

		    _class.prototype.uri = function uri(uriOptions) {

		        var customScheme = '';
		        var allowRelative = false;
		        var relativeOnly = false;
		        var regex = internals.uriRegex;

		        if (uriOptions) {
		            Hoek.assert((typeof uriOptions === 'undefined' ? 'undefined' : _typeof(uriOptions)) === 'object', 'options must be an object');

		            if (uriOptions.scheme) {
		                Hoek.assert(uriOptions.scheme instanceof RegExp || typeof uriOptions.scheme === 'string' || Array.isArray(uriOptions.scheme), 'scheme must be a RegExp, String, or Array');

		                if (!Array.isArray(uriOptions.scheme)) {
		                    uriOptions.scheme = [uriOptions.scheme];
		                }

		                Hoek.assert(uriOptions.scheme.length >= 1, 'scheme must have at least 1 scheme specified');

		                // Flatten the array into a string to be used to match the schemes.
		                for (var i = 0; i < uriOptions.scheme.length; ++i) {
		                    var scheme = uriOptions.scheme[i];
		                    Hoek.assert(scheme instanceof RegExp || typeof scheme === 'string', 'scheme at position ' + i + ' must be a RegExp or String');

		                    // Add OR separators if a value already exists
		                    customScheme = customScheme + (customScheme ? '|' : '');

		                    // If someone wants to match HTTP or HTTPS for example then we need to support both RegExp and String so we don't escape their pattern unknowingly.
		                    if (scheme instanceof RegExp) {
		                        customScheme = customScheme + scheme.source;
		                    } else {
		                        Hoek.assert(/[a-zA-Z][a-zA-Z0-9+-\.]*/.test(scheme), 'scheme at position ' + i + ' must be a valid scheme');
		                        customScheme = customScheme + Hoek.escapeRegex(scheme);
		                    }
		                }
		            }

		            if (uriOptions.allowRelative) {
		                allowRelative = true;
		            }

		            if (uriOptions.relativeOnly) {
		                relativeOnly = true;
		            }
		        }

		        if (customScheme || allowRelative || relativeOnly) {
		            regex = Uri.createUriRegex(customScheme, allowRelative, relativeOnly);
		        }

		        return this._test('uri', uriOptions, function (value, state, options) {

		            if (regex.test(value)) {
		                return value;
		            }

		            if (relativeOnly) {
		                return this.createError('string.uriRelativeOnly', { value: value }, state, options);
		            }

		            if (customScheme) {
		                return this.createError('string.uriCustomScheme', { scheme: customScheme, value: value }, state, options);
		            }

		            return this.createError('string.uri', { value: value }, state, options);
		        });
		    };

		    _class.prototype.isoDate = function isoDate() {

		        return this._test('isoDate', undefined, function (value, state, options) {

		            if (JoiDate._isIsoDate(value)) {
		                return value;
		            }

		            return this.createError('string.isoDate', { value: value }, state, options);
		        });
		    };

		    _class.prototype.guid = function guid(guidOptions) {

		        var versionNumbers = '';

		        if (guidOptions && guidOptions.version) {
		            if (!Array.isArray(guidOptions.version)) {
		                guidOptions.version = [guidOptions.version];
		            }

		            Hoek.assert(guidOptions.version.length >= 1, 'version must have at least 1 valid version specified');
		            var versions = new Set();

		            for (var i = 0; i < guidOptions.version.length; ++i) {
		                var version = guidOptions.version[i];
		                Hoek.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
		                version = version.toLowerCase();
		                var versionNumber = internals.guidVersions[version];
		                Hoek.assert(versionNumber, 'version at position ' + i + ' must be one of ' + Object.keys(internals.guidVersions).join(', '));
		                Hoek.assert(!versions.has(versionNumber), 'version at position ' + i + ' must not be a duplicate.');

		                versionNumbers += versionNumber;
		                versions.add(versionNumber);
		            }
		        }

		        var guidRegex = new RegExp('^([\\[{\\(]?)[0-9A-F]{8}([:-]?)[0-9A-F]{4}\\2?[' + (versionNumbers || '0-9A-F') + '][0-9A-F]{3}\\2?[' + (versionNumbers ? '89AB' : '0-9A-F') + '][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$', 'i');

		        return this._test('guid', guidOptions, function (value, state, options) {

		            var results = guidRegex.exec(value);

		            if (!results) {
		                return this.createError('string.guid', { value: value }, state, options);
		            }

		            // Matching braces
		            if (internals.guidBrackets[results[1]] !== results[results.length - 1]) {
		                return this.createError('string.guid', { value: value }, state, options);
		            }

		            return value;
		        });
		    };

		    _class.prototype.hex = function hex() {

		        var regex = /^[a-f0-9]+$/i;

		        return this._test('hex', regex, function (value, state, options) {

		            if (regex.test(value)) {
		                return value;
		            }

		            return this.createError('string.hex', { value: value }, state, options);
		        });
		    };

		    _class.prototype.base64 = function base64(base64Options) {

		        base64Options = base64Options || {};

		        // Validation.
		        Hoek.assert((typeof base64Options === 'undefined' ? 'undefined' : _typeof(base64Options)) === 'object', 'base64 options must be an object');
		        Hoek.assert(typeof base64Options.paddingRequired === 'undefined' || typeof base64Options.paddingRequired === 'boolean', 'paddingRequired must be boolean');

		        // Determine if padding is required.
		        var paddingRequired = base64Options.paddingRequired === false ? base64Options.paddingRequired : base64Options.paddingRequired || true;

		        // Set validation based on preference.
		        var regex = paddingRequired ?
		        // Padding is required.
		        /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/
		        // Padding is optional.
		        : /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/;

		        return this._test('base64', regex, function (value, state, options) {

		            if (regex.test(value)) {
		                return value;
		            }

		            return this.createError('string.base64', { value: value }, state, options);
		        });
		    };

		    _class.prototype.hostname = function hostname() {

		        var regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

		        return this._test('hostname', undefined, function (value, state, options) {

		            if (value.length <= 255 && regex.test(value) || Net.isIPv6(value)) {

		                return value;
		            }

		            return this.createError('string.hostname', { value: value }, state, options);
		        });
		    };

		    _class.prototype.lowercase = function lowercase() {

		        var obj = this._test('lowercase', undefined, function (value, state, options) {

		            if (options.convert || value === value.toLocaleLowerCase()) {

		                return value;
		            }

		            return this.createError('string.lowercase', { value: value }, state, options);
		        });

		        obj._flags.case = 'lower';
		        return obj;
		    };

		    _class.prototype.uppercase = function uppercase() {

		        var obj = this._test('uppercase', undefined, function (value, state, options) {

		            if (options.convert || value === value.toLocaleUpperCase()) {

		                return value;
		            }

		            return this.createError('string.uppercase', { value: value }, state, options);
		        });

		        obj._flags.case = 'upper';
		        return obj;
		    };

		    _class.prototype.trim = function trim() {

		        var obj = this._test('trim', undefined, function (value, state, options) {

		            if (options.convert || value === value.trim()) {

		                return value;
		            }

		            return this.createError('string.trim', { value: value }, state, options);
		        });

		        obj._flags.trim = true;
		        return obj;
		    };

		    _class.prototype.replace = function replace(pattern, replacement) {

		        if (typeof pattern === 'string') {
		            pattern = new RegExp(Hoek.escapeRegex(pattern), 'g');
		        }

		        Hoek.assert(pattern instanceof RegExp, 'pattern must be a RegExp');
		        Hoek.assert(typeof replacement === 'string', 'replacement must be a String');

		        // This can not be considere a test like trim, we can't "reject"
		        // anything from this rule, so just clone the current object
		        var obj = this.clone();

		        if (!obj._inner.replacements) {
		            obj._inner.replacements = [];
		        }

		        obj._inner.replacements.push({
		            pattern: pattern,
		            replacement: replacement
		        });

		        return obj;
		    };

		    _class.prototype.truncate = function truncate(enabled) {

		        var value = enabled === undefined ? true : !!enabled;

		        if (this._flags.truncate === value) {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.truncate = value;
		        return obj;
		    };

		    return _class;
		}(Any);

		internals.compare = function (type, compare) {

		    return function (limit, encoding) {

		        var isRef = Ref.isRef(limit);

		        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');
		        Hoek.assert(!encoding || Buffer.isEncoding(encoding), 'Invalid encoding:', encoding);

		        return this._test(type, limit, function (value, state, options) {

		            var compareTo = void 0;
		            if (isRef) {
		                compareTo = limit(state.reference || state.parent, options);

		                if (!Number.isSafeInteger(compareTo)) {
		                    return this.createError('string.ref', { ref: limit.key }, state, options);
		                }
		            } else {
		                compareTo = limit;
		            }

		            if (compare(value, compareTo, encoding)) {
		                return value;
		            }

		            return this.createError('string.' + type, { limit: compareTo, value: value, encoding: encoding }, state, options);
		        });
		    };
		};

		internals.String.prototype.min = internals.compare('min', function (value, limit, encoding) {

		    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
		    return length >= limit;
		});

		internals.String.prototype.max = internals.compare('max', function (value, limit, encoding) {

		    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
		    return length <= limit;
		});

		internals.String.prototype.length = internals.compare('length', function (value, limit, encoding) {

		    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
		    return length === limit;
		});

		// Aliases

		internals.String.prototype.uuid = internals.String.prototype.guid;

		module.exports = new internals.String();
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load Modules

		var RFC3986 = __webpack_require__(20);

		// Declare internals

		var internals = {
		    Uri: {
		        createUriRegex: function createUriRegex(optionalScheme, allowRelative, relativeOnly) {

		            var scheme = RFC3986.scheme;
		            var prefix = void 0;

		            if (relativeOnly) {
		                prefix = '(?:' + RFC3986.relativeRef + ')';
		            } else {
		                // If we were passed a scheme, use it instead of the generic one
		                if (optionalScheme) {

		                    // Have to put this in a non-capturing group to handle the OR statements
		                    scheme = '(?:' + optionalScheme + ')';
		                }

		                var withScheme = '(?:' + scheme + ':' + RFC3986.hierPart + ')';

		                prefix = allowRelative ? '(?:' + withScheme + '|' + RFC3986.relativeRef + ')' : withScheme;
		            }

		            /**
		             * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
		             *
		             * OR
		             *
		             * relative-ref = relative-part [ "?" query ] [ "#" fragment ]
		             */
		            return new RegExp('^' + prefix + '(?:\\?' + RFC3986.query + ')?' + '(?:#' + RFC3986.fragment + ')?$');
		        }
		    }
		};

		module.exports = internals.Uri;

	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		'use strict';

		// Load modules


		// Delcare internals

		var internals = {
		  rfc3986: {}
		};

		internals.generate = function () {

		  /**
		   * elements separated by forward slash ("/") are alternatives.
		   */
		  var or = '|';

		  /**
		   * DIGIT = %x30-39 ; 0-9
		   */
		  var digit = '0-9';
		  var digitOnly = '[' + digit + ']';

		  /**
		   * ALPHA = %x41-5A / %x61-7A   ; A-Z / a-z
		   */
		  var alpha = 'a-zA-Z';
		  var alphaOnly = '[' + alpha + ']';

		  /**
		   * cidr       = DIGIT                ; 0-9
		   *            / %x31-32 DIGIT         ; 10-29
		   *            / "3" %x30-32           ; 30-32
		   */
		  internals.rfc3986.cidr = digitOnly + or + '[1-2]' + digitOnly + or + '3' + '[0-2]';

		  /**
		   * HEXDIG = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
		   */
		  var hexDigit = digit + 'A-Fa-f';
		  var hexDigitOnly = '[' + hexDigit + ']';

		  /**
		   * unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"
		   */
		  var unreserved = alpha + digit + '-\\._~';

		  /**
		   * sub-delims = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="
		   */
		  var subDelims = '!\\$&\'\\(\\)\\*\\+,;=';

		  /**
		   * pct-encoded = "%" HEXDIG HEXDIG
		   */
		  var pctEncoded = '%' + hexDigit;

		  /**
		   * pchar = unreserved / pct-encoded / sub-delims / ":" / "@"
		   */
		  var pchar = unreserved + pctEncoded + subDelims + ':@';
		  var pcharOnly = '[' + pchar + ']';

		  /**
		   * Rule to support zero-padded addresses.
		   */
		  var zeroPad = '0?';

		  /**
		   * dec-octet   = DIGIT                 ; 0-9
		   *            / %x31-39 DIGIT         ; 10-99
		   *            / "1" 2DIGIT            ; 100-199
		   *            / "2" %x30-34 DIGIT     ; 200-249
		   *            / "25" %x30-35          ; 250-255
		   */
		  var decOctect = '(?:' + zeroPad + zeroPad + digitOnly + or + zeroPad + '[1-9]' + digitOnly + or + '1' + digitOnly + digitOnly + or + '2' + '[0-4]' + digitOnly + or + '25' + '[0-5])';

		  /**
		   * IPv4address = dec-octet "." dec-octet "." dec-octet "." dec-octet
		   */
		  internals.rfc3986.IPv4address = '(?:' + decOctect + '\\.){3}' + decOctect;

		  /**
		   * h16 = 1*4HEXDIG ; 16 bits of address represented in hexadecimal
		   * ls32 = ( h16 ":" h16 ) / IPv4address ; least-significant 32 bits of address
		   * IPv6address =                            6( h16 ":" ) ls32
		   *             /                       "::" 5( h16 ":" ) ls32
		   *             / [               h16 ] "::" 4( h16 ":" ) ls32
		   *             / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
		   *             / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
		   *             / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
		   *             / [ *4( h16 ":" ) h16 ] "::"              ls32
		   *             / [ *5( h16 ":" ) h16 ] "::"              h16
		   *             / [ *6( h16 ":" ) h16 ] "::"
		   */
		  var h16 = hexDigitOnly + '{1,4}';
		  var ls32 = '(?:' + h16 + ':' + h16 + '|' + internals.rfc3986.IPv4address + ')';
		  var IPv6SixHex = '(?:' + h16 + ':){6}' + ls32;
		  var IPv6FiveHex = '::(?:' + h16 + ':){5}' + ls32;
		  var IPv6FourHex = '(?:' + h16 + ')?::(?:' + h16 + ':){4}' + ls32;
		  var IPv6ThreeHex = '(?:(?:' + h16 + ':){0,1}' + h16 + ')?::(?:' + h16 + ':){3}' + ls32;
		  var IPv6TwoHex = '(?:(?:' + h16 + ':){0,2}' + h16 + ')?::(?:' + h16 + ':){2}' + ls32;
		  var IPv6OneHex = '(?:(?:' + h16 + ':){0,3}' + h16 + ')?::' + h16 + ':' + ls32;
		  var IPv6NoneHex = '(?:(?:' + h16 + ':){0,4}' + h16 + ')?::' + ls32;
		  var IPv6NoneHex2 = '(?:(?:' + h16 + ':){0,5}' + h16 + ')?::' + h16;
		  var IPv6NoneHex3 = '(?:(?:' + h16 + ':){0,6}' + h16 + ')?::';
		  internals.rfc3986.IPv6address = '(?:' + IPv6SixHex + or + IPv6FiveHex + or + IPv6FourHex + or + IPv6ThreeHex + or + IPv6TwoHex + or + IPv6OneHex + or + IPv6NoneHex + or + IPv6NoneHex2 + or + IPv6NoneHex3 + ')';

		  /**
		   * IPvFuture = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
		   */
		  internals.rfc3986.IPvFuture = 'v' + hexDigitOnly + '+\\.[' + unreserved + subDelims + ':]+';

		  /**
		   * scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
		   */
		  internals.rfc3986.scheme = alphaOnly + '[' + alpha + digit + '+-\\.]*';

		  /**
		   * userinfo = *( unreserved / pct-encoded / sub-delims / ":" )
		   */
		  var userinfo = '[' + unreserved + pctEncoded + subDelims + ':]*';

		  /**
		   * IP-literal = "[" ( IPv6address / IPvFuture  ) "]"
		   */
		  var IPLiteral = '\\[(?:' + internals.rfc3986.IPv6address + or + internals.rfc3986.IPvFuture + ')\\]';

		  /**
		   * reg-name = *( unreserved / pct-encoded / sub-delims )
		   */
		  var regName = '[' + unreserved + pctEncoded + subDelims + ']{0,255}';

		  /**
		   * host = IP-literal / IPv4address / reg-name
		   */
		  var host = '(?:' + IPLiteral + or + internals.rfc3986.IPv4address + or + regName + ')';

		  /**
		   * port = *DIGIT
		   */
		  var port = digitOnly + '*';

		  /**
		   * authority   = [ userinfo "@" ] host [ ":" port ]
		   */
		  var authority = '(?:' + userinfo + '@)?' + host + '(?::' + port + ')?';

		  /**
		   * segment       = *pchar
		   * segment-nz    = 1*pchar
		   * path          = path-abempty    ; begins with "/" or is empty
		   *               / path-absolute   ; begins with "/" but not "//"
		   *               / path-noscheme   ; begins with a non-colon segment
		   *               / path-rootless   ; begins with a segment
		   *               / path-empty      ; zero characters
		   * path-abempty  = *( "/" segment )
		   * path-absolute = "/" [ segment-nz *( "/" segment ) ]
		   * path-rootless = segment-nz *( "/" segment )
		   */
		  var segment = pcharOnly + '*';
		  var segmentNz = pcharOnly + '+';
		  var segmentNzNc = '[' + unreserved + pctEncoded + subDelims + '@' + ']+';
		  var pathEmpty = '';
		  var pathAbEmpty = '(?:\\/' + segment + ')*';
		  var pathAbsolute = '\\/(?:' + segmentNz + pathAbEmpty + ')?';
		  var pathRootless = segmentNz + pathAbEmpty;
		  var pathNoScheme = segmentNzNc + pathAbEmpty;

		  /**
		   * hier-part = "//" authority path
		   */
		  internals.rfc3986.hierPart = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + or + pathAbsolute + or + pathRootless + ')';

		  /**
		   * relative-part = "//" authority path-abempty
		   *                 / path-absolute
		   *                 / path-noscheme
		   *                 / path-empty
		   */
		  internals.rfc3986.relativeRef = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + or + pathAbsolute + or + pathNoScheme + or + pathEmpty + ')';

		  /**
		   * query = *( pchar / "/" / "?" )
		   */
		  internals.rfc3986.query = '[' + pchar + '\\/\\?]*(?=#|$)'; //Finish matching either at the fragment part or end of the line.

		  /**
		   * fragment = *( pchar / "/" / "?" )
		   */
		  internals.rfc3986.fragment = '[' + pchar + '\\/\\?]*';
		};

		internals.generate();

		module.exports = internals.rfc3986;

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var RFC3986 = __webpack_require__(20);

		// Declare internals

		var internals = {
		    Ip: {
		        cidrs: {
		            required: '\\/(?:' + RFC3986.cidr + ')',
		            optional: '(?:\\/(?:' + RFC3986.cidr + '))?',
		            forbidden: ''
		        },
		        versions: {
		            ipv4: RFC3986.IPv4address,
		            ipv6: RFC3986.IPv6address,
		            ipvfuture: RFC3986.IPvFuture
		        }
		    }
		};

		internals.Ip.createIpRegex = function (versions, cidr) {

		    var regex = void 0;
		    for (var i = 0; i < versions.length; ++i) {
		        var version = versions[i];
		        if (!regex) {
		            regex = '^(?:' + internals.Ip.versions[version];
		        }
		        regex = regex + '|' + internals.Ip.versions[version];
		    }

		    return new RegExp(regex + ')' + internals.Ip.cidrs[cidr] + '$');
		};

		module.exports = internals.Ip;

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var Dns = __webpack_require__(5);

		// Declare internals

		var internals = {
		    hasOwn: Object.prototype.hasOwnProperty,
		    indexOf: Array.prototype.indexOf,
		    defaultThreshold: 16,
		    maxIPv6Groups: 8,

		    categories: {
		        valid: 1,
		        dnsWarn: 7,
		        rfc5321: 15,
		        cfws: 31,
		        deprecated: 63,
		        rfc5322: 127,
		        error: 255
		    },

		    diagnoses: {

		        // Address is valid

		        valid: 0,

		        // Address is valid, but the DNS check failed

		        dnsWarnNoMXRecord: 5,
		        dnsWarnNoRecord: 6,

		        // Address is valid for SMTP but has unusual elements

		        rfc5321TLD: 9,
		        rfc5321TLDNumeric: 10,
		        rfc5321QuotedString: 11,
		        rfc5321AddressLiteral: 12,

		        // Address is valid for message, but must be modified for envelope

		        cfwsComment: 17,
		        cfwsFWS: 18,

		        // Address contains deprecated elements, but may still be valid in some contexts

		        deprecatedLocalPart: 33,
		        deprecatedFWS: 34,
		        deprecatedQTEXT: 35,
		        deprecatedQP: 36,
		        deprecatedComment: 37,
		        deprecatedCTEXT: 38,
		        deprecatedIPv6: 39,
		        deprecatedCFWSNearAt: 49,

		        // Address is only valid according to broad definition in RFC 5322, but is otherwise invalid

		        rfc5322Domain: 65,
		        rfc5322TooLong: 66,
		        rfc5322LocalTooLong: 67,
		        rfc5322DomainTooLong: 68,
		        rfc5322LabelTooLong: 69,
		        rfc5322DomainLiteral: 70,
		        rfc5322DomainLiteralOBSDText: 71,
		        rfc5322IPv6GroupCount: 72,
		        rfc5322IPv62x2xColon: 73,
		        rfc5322IPv6BadCharacter: 74,
		        rfc5322IPv6MaxGroups: 75,
		        rfc5322IPv6ColonStart: 76,
		        rfc5322IPv6ColonEnd: 77,

		        // Address is invalid for any purpose

		        errExpectingDTEXT: 129,
		        errNoLocalPart: 130,
		        errNoDomain: 131,
		        errConsecutiveDots: 132,
		        errATEXTAfterCFWS: 133,
		        errATEXTAfterQS: 134,
		        errATEXTAfterDomainLiteral: 135,
		        errExpectingQPair: 136,
		        errExpectingATEXT: 137,
		        errExpectingQTEXT: 138,
		        errExpectingCTEXT: 139,
		        errBackslashEnd: 140,
		        errDotStart: 141,
		        errDotEnd: 142,
		        errDomainHyphenStart: 143,
		        errDomainHyphenEnd: 144,
		        errUnclosedQuotedString: 145,
		        errUnclosedComment: 146,
		        errUnclosedDomainLiteral: 147,
		        errFWSCRLFx2: 148,
		        errFWSCRLFEnd: 149,
		        errCRNoLF: 150,
		        errUnknownTLD: 160,
		        errDomainTooShort: 161
		    },

		    components: {
		        localpart: 0,
		        domain: 1,
		        literal: 2,
		        contextComment: 3,
		        contextFWS: 4,
		        contextQuotedString: 5,
		        contextQuotedPair: 6
		    }
		};

		// $lab:coverage:off$
		internals.defer = typeof process !== 'undefined' && process && typeof process.nextTick === 'function' ? process.nextTick.bind(process) : function (callback) {

		    return setTimeout(callback, 0);
		};
		// $lab:coverage:on$


		internals.specials = function () {

		    var specials = '()<>[]:;@\\,."'; // US-ASCII visible characters not valid for atext (http://tools.ietf.org/html/rfc5322#section-3.2.3)
		    var lookup = new Array(0x100);
		    for (var i = 0xff; i >= 0; --i) {
		        lookup[i] = false;
		    }

		    for (var _i = 0; _i < specials.length; ++_i) {
		        lookup[specials.charCodeAt(_i)] = true;
		    }

		    return function (code) {

		        return lookup[code];
		    };
		}();

		internals.regex = {
		    ipV4: /\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
		    ipV6: /^[a-fA-F\d]{0,4}$/
		};

		internals.checkIpV6 = function (items) {

		    return items.every(function (value) {
		        return internals.regex.ipV6.test(value);
		    });
		};

		internals.validDomain = function (tldAtom, options) {

		    if (options.tldBlacklist) {
		        if (Array.isArray(options.tldBlacklist)) {
		            return internals.indexOf.call(options.tldBlacklist, tldAtom) === -1;
		        }

		        return !internals.hasOwn.call(options.tldBlacklist, tldAtom);
		    }

		    if (Array.isArray(options.tldWhitelist)) {
		        return internals.indexOf.call(options.tldWhitelist, tldAtom) !== -1;
		    }

		    return internals.hasOwn.call(options.tldWhitelist, tldAtom);
		};

		/**
		 * Check that an email address conforms to RFCs 5321, 5322 and others
		 *
		 * We distinguish clearly between a Mailbox as defined by RFC 5321 and an
		 * addr-spec as defined by RFC 5322. Depending on the context, either can be
		 * regarded as a valid email address. The RFC 5321 Mailbox specification is
		 * more restrictive (comments, white space and obsolete forms are not allowed).
		 *
		 * @param {string} email The email address to check. See README for specifics.
		 * @param {Object} options The (optional) options:
		 *   {boolean} checkDNS If true then will check DNS for MX records. If
		 *     true this call to isEmail _will_ be asynchronous.
		 *   {*} errorLevel Determines the boundary between valid and invalid
		 *     addresses.
		 *   {*} tldBlacklist The set of domains to consider invalid.
		 *   {*} tldWhitelist The set of domains to consider valid.
		 *   {*} minDomainAtoms The minimum number of domain atoms which must be present
		 *     for the address to be valid.
		 * @param {function(number|boolean)} callback The (optional) callback handler.
		 * @return {*}
		 */

		exports.validate = internals.validate = function (email, options, callback) {

		    options = options || {};

		    if (typeof options === 'function') {
		        callback = options;
		        options = {};
		    }

		    if (typeof callback !== 'function') {
		        if (options.checkDNS) {
		            throw new TypeError('expected callback function for checkDNS option');
		        }

		        callback = null;
		    }

		    var diagnose = void 0;
		    var threshold = void 0;

		    if (typeof options.errorLevel === 'number') {
		        diagnose = true;
		        threshold = options.errorLevel;
		    } else {
		        diagnose = !!options.errorLevel;
		        threshold = internals.diagnoses.valid;
		    }

		    if (options.tldWhitelist) {
		        if (typeof options.tldWhitelist === 'string') {
		            options.tldWhitelist = [options.tldWhitelist];
		        } else if (_typeof(options.tldWhitelist) !== 'object') {
		            throw new TypeError('expected array or object tldWhitelist');
		        }
		    }

		    if (options.tldBlacklist) {
		        if (typeof options.tldBlacklist === 'string') {
		            options.tldBlacklist = [options.tldBlacklist];
		        } else if (_typeof(options.tldBlacklist) !== 'object') {
		            throw new TypeError('expected array or object tldBlacklist');
		        }
		    }

		    if (options.minDomainAtoms && (options.minDomainAtoms !== (+options.minDomainAtoms | 0) || options.minDomainAtoms < 0)) {
		        throw new TypeError('expected positive integer minDomainAtoms');
		    }

		    var maxResult = internals.diagnoses.valid;
		    var updateResult = function updateResult(value) {

		        if (value > maxResult) {
		            maxResult = value;
		        }
		    };

		    var context = {
		        now: internals.components.localpart,
		        prev: internals.components.localpart,
		        stack: [internals.components.localpart]
		    };

		    var prevToken = '';

		    var parseData = {
		        local: '',
		        domain: ''
		    };
		    var atomData = {
		        locals: [''],
		        domains: ['']
		    };

		    var elementCount = 0;
		    var elementLength = 0;
		    var crlfCount = 0;
		    var charCode = void 0;

		    var hyphenFlag = false;
		    var assertEnd = false;

		    var emailLength = email.length;

		    var token = void 0; // Token is used outside the loop, must declare similarly
		    for (var i = 0; i < emailLength; ++i) {
		        token = email[i];

		        switch (context.now) {
		            // Local-part
		            case internals.components.localpart:
		                // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                //   local-part      =   dot-atom / quoted-string / obs-local-part
		                //
		                //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
		                //
		                //   dot-atom-text   =   1*atext *("." 1*atext)
		                //
		                //   quoted-string   =   [CFWS]
		                //                       DQUOTE *([FWS] qcontent) [FWS] DQUOTE
		                //                       [CFWS]
		                //
		                //   obs-local-part  =   word *("." word)
		                //
		                //   word            =   atom / quoted-string
		                //
		                //   atom            =   [CFWS] 1*atext [CFWS]
		                switch (token) {
		                    // Comment
		                    case '(':
		                        if (elementLength === 0) {
		                            // Comments are OK at the beginning of an element
		                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsComment : internals.diagnoses.deprecatedComment);
		                        } else {
		                            updateResult(internals.diagnoses.cfwsComment);
		                            // Cannot start a comment in an element, should be end
		                            assertEnd = true;
		                        }

		                        context.stack.push(context.now);
		                        context.now = internals.components.contextComment;
		                        break;

		                    // Next dot-atom element
		                    case '.':
		                        if (elementLength === 0) {
		                            // Another dot, already?
		                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
		                        } else {
		                            // The entire local-part can be a quoted string for RFC 5321; if one atom is quoted it's an RFC 5322 obsolete form
		                            if (assertEnd) {
		                                updateResult(internals.diagnoses.deprecatedLocalPart);
		                            }

		                            // CFWS & quoted strings are OK again now we're at the beginning of an element (although they are obsolete forms)
		                            assertEnd = false;
		                            elementLength = 0;
		                            ++elementCount;
		                            parseData.local += token;
		                            atomData.locals[elementCount] = '';
		                        }

		                        break;

		                    // Quoted string
		                    case '"':
		                        if (elementLength === 0) {
		                            // The entire local-part can be a quoted string for RFC 5321; if one atom is quoted it's an RFC 5322 obsolete form
		                            updateResult(elementCount === 0 ? internals.diagnoses.rfc5321QuotedString : internals.diagnoses.deprecatedLocalPart);

		                            parseData.local += token;
		                            atomData.locals[elementCount] += token;
		                            ++elementLength;

		                            // Quoted string must be the entire element
		                            assertEnd = true;
		                            context.stack.push(context.now);
		                            context.now = internals.components.contextQuotedString;
		                        } else {
		                            updateResult(internals.diagnoses.errExpectingATEXT);
		                        }

		                        break;

		                    // Folding white space
		                    case '\r':
		                        if (emailLength === ++i || email[i] !== '\n') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errCRNoLF);
		                            break;
		                        }

		                    // Fallthrough

		                    case ' ':
		                    case '\t':
		                        if (elementLength === 0) {
		                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsFWS : internals.diagnoses.deprecatedFWS);
		                        } else {
		                            // We can't start FWS in the middle of an element, better be end
		                            assertEnd = true;
		                        }

		                        context.stack.push(context.now);
		                        context.now = internals.components.contextFWS;
		                        prevToken = token;
		                        break;

		                    case '@':
		                        // At this point we should have a valid local-part
		                        // $lab:coverage:off$
		                        if (context.stack.length !== 1) {
		                            throw new Error('unexpected item on context stack');
		                        }
		                        // $lab:coverage:on$

		                        if (parseData.local.length === 0) {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errNoLocalPart);
		                        } else if (elementLength === 0) {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errDotEnd);
		                        }
		                        // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.1 the maximum total length of a user name or other local-part is 64
		                        //    octets
		                        else if (parseData.local.length > 64) {
		                                updateResult(internals.diagnoses.rfc5322LocalTooLong);
		                            }
		                            // http://tools.ietf.org/html/rfc5322#section-3.4.1 comments and folding white space SHOULD NOT be used around "@" in the
		                            //    addr-spec
		                            //
		                            // http://tools.ietf.org/html/rfc2119
		                            // 4. SHOULD NOT this phrase, or the phrase "NOT RECOMMENDED" mean that there may exist valid reasons in particular
		                            //    circumstances when the particular behavior is acceptable or even useful, but the full implications should be understood
		                            //    and the case carefully weighed before implementing any behavior described with this label.
		                            else if (context.prev === internals.components.contextComment || context.prev === internals.components.contextFWS) {
		                                    updateResult(internals.diagnoses.deprecatedCFWSNearAt);
		                                }

		                        // Clear everything down for the domain parsing
		                        context.now = internals.components.domain;
		                        context.stack[0] = internals.components.domain;
		                        elementCount = 0;
		                        elementLength = 0;
		                        assertEnd = false; // CFWS can only appear at the end of the element
		                        break;

		                    // ATEXT
		                    default:
		                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
		                        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
		                        //            "!" / "#" /     ;  characters not including
		                        //            "$" / "%" /     ;  specials.  Used for atoms.
		                        //            "&" / "'" /
		                        //            "*" / "+" /
		                        //            "-" / "/" /
		                        //            "=" / "?" /
		                        //            "^" / "_" /
		                        //            "`" / "{" /
		                        //            "|" / "}" /
		                        //            "~"
		                        if (assertEnd) {
		                            // We have encountered atext where it is no longer valid
		                            switch (context.prev) {
		                                case internals.components.contextComment:
		                                case internals.components.contextFWS:
		                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
		                                    break;

		                                case internals.components.contextQuotedString:
		                                    updateResult(internals.diagnoses.errATEXTAfterQS);
		                                    break;

		                                // $lab:coverage:off$
		                                default:
		                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
		                                // $lab:coverage:on$
		                            }
		                        } else {
		                            context.prev = context.now;
		                            charCode = token.charCodeAt(0);

		                            // Especially if charCode == 10
		                            if (charCode < 33 || charCode > 126 || internals.specials(charCode)) {

		                                // Fatal error
		                                updateResult(internals.diagnoses.errExpectingATEXT);
		                            }

		                            parseData.local += token;
		                            atomData.locals[elementCount] += token;
		                            ++elementLength;
		                        }
		                }

		                break;

		            case internals.components.domain:
		                // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                //   domain          =   dot-atom / domain-literal / obs-domain
		                //
		                //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
		                //
		                //   dot-atom-text   =   1*atext *("." 1*atext)
		                //
		                //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
		                //
		                //   dtext           =   %d33-90 /          ; Printable US-ASCII
		                //                       %d94-126 /         ;  characters not including
		                //                       obs-dtext          ;  "[", "]", or "\"
		                //
		                //   obs-domain      =   atom *("." atom)
		                //
		                //   atom            =   [CFWS] 1*atext [CFWS]

		                // http://tools.ietf.org/html/rfc5321#section-4.1.2
		                //   Mailbox        = Local-part "@" ( Domain / address-literal )
		                //
		                //   Domain         = sub-domain *("." sub-domain)
		                //
		                //   address-literal  = "[" ( IPv4-address-literal /
		                //                    IPv6-address-literal /
		                //                    General-address-literal ) "]"
		                //                    ; See Section 4.1.3

		                // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                //      Note: A liberal syntax for the domain portion of addr-spec is
		                //      given here.  However, the domain portion contains addressing
		                //      information specified by and used in other protocols (e.g.,
		                //      [RFC1034], [RFC1035], [RFC1123], [RFC5321]).  It is therefore
		                //      incumbent upon implementations to conform to the syntax of
		                //      addresses for the context in which they are used.
		                //
		                // is_email() author's note: it's not clear how to interpret this in
		                // he context of a general email address validator. The conclusion I
		                // have reached is this: "addressing information" must comply with
		                // RFC 5321 (and in turn RFC 1035), anything that is "semantically
		                // invisible" must comply only with RFC 5322.
		                switch (token) {
		                    // Comment
		                    case '(':
		                        if (elementLength === 0) {
		                            // Comments at the start of the domain are deprecated in the text, comments at the start of a subdomain are obs-domain
		                            // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedComment);
		                        } else {
		                            // We can't start a comment mid-element, better be at the end
		                            assertEnd = true;
		                            updateResult(internals.diagnoses.cfwsComment);
		                        }

		                        context.stack.push(context.now);
		                        context.now = internals.components.contextComment;
		                        break;

		                    // Next dot-atom element
		                    case '.':
		                        if (elementLength === 0) {
		                            // Another dot, already? Fatal error.
		                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
		                        } else if (hyphenFlag) {
		                            // Previous subdomain ended in a hyphen. Fatal error.
		                            updateResult(internals.diagnoses.errDomainHyphenEnd);
		                        } else if (elementLength > 63) {
		                            // Nowhere in RFC 5321 does it say explicitly that the domain part of a Mailbox must be a valid domain according to the
		                            // DNS standards set out in RFC 1035, but this *is* implied in several places. For instance, wherever the idea of host
		                            // routing is discussed the RFC says that the domain must be looked up in the DNS. This would be nonsense unless the
		                            // domain was designed to be a valid DNS domain. Hence we must conclude that the RFC 1035 restriction on label length
		                            // also applies to RFC 5321 domains.
		                            //
		                            // http://tools.ietf.org/html/rfc1035#section-2.3.4
		                            // labels          63 octets or less

		                            updateResult(internals.diagnoses.rfc5322LabelTooLong);
		                        }

		                        // CFWS is OK again now we're at the beginning of an element (although
		                        // it may be obsolete CFWS)
		                        assertEnd = false;
		                        elementLength = 0;
		                        ++elementCount;
		                        atomData.domains[elementCount] = '';
		                        parseData.domain += token;

		                        break;

		                    // Domain literal
		                    case '[':
		                        if (parseData.domain.length === 0) {
		                            // Domain literal must be the only component
		                            assertEnd = true;
		                            ++elementLength;
		                            context.stack.push(context.now);
		                            context.now = internals.components.literal;
		                            parseData.domain += token;
		                            atomData.domains[elementCount] += token;
		                            parseData.literal = '';
		                        } else {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errExpectingATEXT);
		                        }

		                        break;

		                    // Folding white space
		                    case '\r':
		                        if (emailLength === ++i || email[i] !== '\n') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errCRNoLF);
		                            break;
		                        }

		                    // Fallthrough

		                    case ' ':
		                    case '\t':
		                        if (elementLength === 0) {
		                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedFWS);
		                        } else {
		                            // We can't start FWS in the middle of an element, so this better be the end
		                            updateResult(internals.diagnoses.cfwsFWS);
		                            assertEnd = true;
		                        }

		                        context.stack.push(context.now);
		                        context.now = internals.components.contextFWS;
		                        prevToken = token;
		                        break;

		                    // This must be ATEXT
		                    default:
		                        // RFC 5322 allows any atext...
		                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
		                        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
		                        //            "!" / "#" /     ;  characters not including
		                        //            "$" / "%" /     ;  specials.  Used for atoms.
		                        //            "&" / "'" /
		                        //            "*" / "+" /
		                        //            "-" / "/" /
		                        //            "=" / "?" /
		                        //            "^" / "_" /
		                        //            "`" / "{" /
		                        //            "|" / "}" /
		                        //            "~"

		                        // But RFC 5321 only allows letter-digit-hyphen to comply with DNS rules
		                        //   (RFCs 1034 & 1123)
		                        // http://tools.ietf.org/html/rfc5321#section-4.1.2
		                        //   sub-domain     = Let-dig [Ldh-str]
		                        //
		                        //   Let-dig        = ALPHA / DIGIT
		                        //
		                        //   Ldh-str        = *( ALPHA / DIGIT / "-" ) Let-dig
		                        //
		                        if (assertEnd) {
		                            // We have encountered ATEXT where it is no longer valid
		                            switch (context.prev) {
		                                case internals.components.contextComment:
		                                case internals.components.contextFWS:
		                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
		                                    break;

		                                case internals.components.literal:
		                                    updateResult(internals.diagnoses.errATEXTAfterDomainLiteral);
		                                    break;

		                                // $lab:coverage:off$
		                                default:
		                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
		                                // $lab:coverage:on$
		                            }
		                        }

		                        charCode = token.charCodeAt(0);
		                        // Assume this token isn't a hyphen unless we discover it is
		                        hyphenFlag = false;

		                        if (charCode < 33 || charCode > 126 || internals.specials(charCode)) {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errExpectingATEXT);
		                        } else if (token === '-') {
		                            if (elementLength === 0) {
		                                // Hyphens cannot be at the beginning of a subdomain, fatal error
		                                updateResult(internals.diagnoses.errDomainHyphenStart);
		                            }

		                            hyphenFlag = true;
		                        }
		                        // Check if it's a neither a number nor a latin letter
		                        else if (charCode < 48 || charCode > 122 || charCode > 57 && charCode < 65 || charCode > 90 && charCode < 97) {
		                                // This is not an RFC 5321 subdomain, but still OK by RFC 5322
		                                updateResult(internals.diagnoses.rfc5322Domain);
		                            }

		                        parseData.domain += token;
		                        atomData.domains[elementCount] += token;
		                        ++elementLength;
		                }

		                break;

		            // Domain literal
		            case internals.components.literal:
		                // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
		                //
		                //   dtext           =   %d33-90 /          ; Printable US-ASCII
		                //                       %d94-126 /         ;  characters not including
		                //                       obs-dtext          ;  "[", "]", or "\"
		                //
		                //   obs-dtext       =   obs-NO-WS-CTL / quoted-pair
		                switch (token) {
		                    // End of domain literal
		                    case ']':
		                        if (maxResult < internals.categories.deprecated) {
		                            // Could be a valid RFC 5321 address literal, so let's check

		                            // http://tools.ietf.org/html/rfc5321#section-4.1.2
		                            //   address-literal  = "[" ( IPv4-address-literal /
		                            //                    IPv6-address-literal /
		                            //                    General-address-literal ) "]"
		                            //                    ; See Section 4.1.3
		                            //
		                            // http://tools.ietf.org/html/rfc5321#section-4.1.3
		                            //   IPv4-address-literal  = Snum 3("."  Snum)
		                            //
		                            //   IPv6-address-literal  = "IPv6:" IPv6-addr
		                            //
		                            //   General-address-literal  = Standardized-tag ":" 1*dcontent
		                            //
		                            //   Standardized-tag  = Ldh-str
		                            //                     ; Standardized-tag MUST be specified in a
		                            //                     ; Standards-Track RFC and registered with IANA
		                            //
		                            //   dcontent      = %d33-90 / ; Printable US-ASCII
		                            //                 %d94-126 ; excl. "[", "\", "]"
		                            //
		                            //   Snum          = 1*3DIGIT
		                            //                 ; representing a decimal integer
		                            //                 ; value in the range 0 through 255
		                            //
		                            //   IPv6-addr     = IPv6-full / IPv6-comp / IPv6v4-full / IPv6v4-comp
		                            //
		                            //   IPv6-hex      = 1*4HEXDIG
		                            //
		                            //   IPv6-full     = IPv6-hex 7(":" IPv6-hex)
		                            //
		                            //   IPv6-comp     = [IPv6-hex *5(":" IPv6-hex)] "::"
		                            //                 [IPv6-hex *5(":" IPv6-hex)]
		                            //                 ; The "::" represents at least 2 16-bit groups of
		                            //                 ; zeros.  No more than 6 groups in addition to the
		                            //                 ; "::" may be present.
		                            //
		                            //   IPv6v4-full   = IPv6-hex 5(":" IPv6-hex) ":" IPv4-address-literal
		                            //
		                            //   IPv6v4-comp   = [IPv6-hex *3(":" IPv6-hex)] "::"
		                            //                 [IPv6-hex *3(":" IPv6-hex) ":"]
		                            //                 IPv4-address-literal
		                            //                 ; The "::" represents at least 2 16-bit groups of
		                            //                 ; zeros.  No more than 4 groups in addition to the
		                            //                 ; "::" and IPv4-address-literal may be present.

		                            var index = -1;
		                            var addressLiteral = parseData.literal;
		                            var matchesIP = internals.regex.ipV4.exec(addressLiteral);

		                            // Maybe extract IPv4 part from the end of the address-literal
		                            if (matchesIP) {
		                                index = matchesIP.index;
		                                if (index !== 0) {
		                                    // Convert IPv4 part to IPv6 format for futher testing
		                                    addressLiteral = addressLiteral.slice(0, index) + '0:0';
		                                }
		                            }

		                            if (index === 0) {
		                                // Nothing there except a valid IPv4 address, so...
		                                updateResult(internals.diagnoses.rfc5321AddressLiteral);
		                            } else if (addressLiteral.slice(0, 5).toLowerCase() !== 'ipv6:') {
		                                updateResult(internals.diagnoses.rfc5322DomainLiteral);
		                            } else {
		                                var match = addressLiteral.slice(5);
		                                var maxGroups = internals.maxIPv6Groups;
		                                var groups = match.split(':');
		                                index = match.indexOf('::');

		                                if (!~index) {
		                                    // Need exactly the right number of groups
		                                    if (groups.length !== maxGroups) {
		                                        updateResult(internals.diagnoses.rfc5322IPv6GroupCount);
		                                    }
		                                } else if (index !== match.lastIndexOf('::')) {
		                                    updateResult(internals.diagnoses.rfc5322IPv62x2xColon);
		                                } else {
		                                    if (index === 0 || index === match.length - 2) {
		                                        // RFC 4291 allows :: at the start or end of an address with 7 other groups in addition
		                                        ++maxGroups;
		                                    }

		                                    if (groups.length > maxGroups) {
		                                        updateResult(internals.diagnoses.rfc5322IPv6MaxGroups);
		                                    } else if (groups.length === maxGroups) {
		                                        // Eliding a single "::"
		                                        updateResult(internals.diagnoses.deprecatedIPv6);
		                                    }
		                                }

		                                // IPv6 testing strategy
		                                if (match[0] === ':' && match[1] !== ':') {
		                                    updateResult(internals.diagnoses.rfc5322IPv6ColonStart);
		                                } else if (match[match.length - 1] === ':' && match[match.length - 2] !== ':') {
		                                    updateResult(internals.diagnoses.rfc5322IPv6ColonEnd);
		                                } else if (internals.checkIpV6(groups)) {
		                                    updateResult(internals.diagnoses.rfc5321AddressLiteral);
		                                } else {
		                                    updateResult(internals.diagnoses.rfc5322IPv6BadCharacter);
		                                }
		                            }
		                        } else {
		                            updateResult(internals.diagnoses.rfc5322DomainLiteral);
		                        }

		                        parseData.domain += token;
		                        atomData.domains[elementCount] += token;
		                        ++elementLength;
		                        context.prev = context.now;
		                        context.now = context.stack.pop();
		                        break;

		                    case '\\':
		                        updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
		                        context.stack.push(context.now);
		                        context.now = internals.components.contextQuotedPair;
		                        break;

		                    // Folding white space
		                    case '\r':
		                        if (emailLength === ++i || email[i] !== '\n') {
		                            updateResult(internals.diagnoses.errCRNoLF);
		                            break;
		                        }

		                    // Fallthrough

		                    case ' ':
		                    case '\t':
		                        updateResult(internals.diagnoses.cfwsFWS);

		                        context.stack.push(context.now);
		                        context.now = internals.components.contextFWS;
		                        prevToken = token;
		                        break;

		                    // DTEXT
		                    default:
		                        // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                        //   dtext         =   %d33-90 /  ; Printable US-ASCII
		                        //                     %d94-126 / ;  characters not including
		                        //                     obs-dtext  ;  "[", "]", or "\"
		                        //
		                        //   obs-dtext     =   obs-NO-WS-CTL / quoted-pair
		                        //
		                        //   obs-NO-WS-CTL =   %d1-8 /    ; US-ASCII control
		                        //                     %d11 /     ;  characters that do not
		                        //                     %d12 /     ;  include the carriage
		                        //                     %d14-31 /  ;  return, line feed, and
		                        //                     %d127      ;  white space characters
		                        charCode = token.charCodeAt(0);

		                        // '\r', '\n', ' ', and '\t' have already been parsed above
		                        if (charCode > 127 || charCode === 0 || token === '[') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errExpectingDTEXT);
		                            break;
		                        } else if (charCode < 33 || charCode === 127) {
		                            updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
		                        }

		                        parseData.literal += token;
		                        parseData.domain += token;
		                        atomData.domains[elementCount] += token;
		                        ++elementLength;
		                }

		                break;

		            // Quoted string
		            case internals.components.contextQuotedString:
		                // http://tools.ietf.org/html/rfc5322#section-3.2.4
		                //   quoted-string = [CFWS]
		                //                   DQUOTE *([FWS] qcontent) [FWS] DQUOTE
		                //                   [CFWS]
		                //
		                //   qcontent      = qtext / quoted-pair
		                switch (token) {
		                    // Quoted pair
		                    case '\\':
		                        context.stack.push(context.now);
		                        context.now = internals.components.contextQuotedPair;
		                        break;

		                    // Folding white space. Spaces are allowed as regular characters inside a quoted string - it's only FWS if we include '\t' or '\r\n'
		                    case '\r':
		                        if (emailLength === ++i || email[i] !== '\n') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errCRNoLF);
		                            break;
		                        }

		                    // Fallthrough

		                    case '\t':
		                        // http://tools.ietf.org/html/rfc5322#section-3.2.2
		                        //   Runs of FWS, comment, or CFWS that occur between lexical tokens in
		                        //   a structured header field are semantically interpreted as a single
		                        //   space character.

		                        // http://tools.ietf.org/html/rfc5322#section-3.2.4
		                        //   the CRLF in any FWS/CFWS that appears within the quoted-string [is]
		                        //   semantically "invisible" and therefore not part of the
		                        //   quoted-string

		                        parseData.local += ' ';
		                        atomData.locals[elementCount] += ' ';
		                        ++elementLength;

		                        updateResult(internals.diagnoses.cfwsFWS);
		                        context.stack.push(context.now);
		                        context.now = internals.components.contextFWS;
		                        prevToken = token;
		                        break;

		                    // End of quoted string
		                    case '"':
		                        parseData.local += token;
		                        atomData.locals[elementCount] += token;
		                        ++elementLength;
		                        context.prev = context.now;
		                        context.now = context.stack.pop();
		                        break;

		                    // QTEXT
		                    default:
		                        // http://tools.ietf.org/html/rfc5322#section-3.2.4
		                        //   qtext          =   %d33 /             ; Printable US-ASCII
		                        //                      %d35-91 /          ;  characters not including
		                        //                      %d93-126 /         ;  "\" or the quote character
		                        //                      obs-qtext
		                        //
		                        //   obs-qtext      =   obs-NO-WS-CTL
		                        //
		                        //   obs-NO-WS-CTL  =   %d1-8 /            ; US-ASCII control
		                        //                      %d11 /             ;  characters that do not
		                        //                      %d12 /             ;  include the carriage
		                        //                      %d14-31 /          ;  return, line feed, and
		                        //                      %d127              ;  white space characters
		                        charCode = token.charCodeAt(0);

		                        if (charCode > 127 || charCode === 0 || charCode === 10) {
		                            updateResult(internals.diagnoses.errExpectingQTEXT);
		                        } else if (charCode < 32 || charCode === 127) {
		                            updateResult(internals.diagnoses.deprecatedQTEXT);
		                        }

		                        parseData.local += token;
		                        atomData.locals[elementCount] += token;
		                        ++elementLength;
		                }

		                // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                //   If the string can be represented as a dot-atom (that is, it contains
		                //   no characters other than atext characters or "." surrounded by atext
		                //   characters), then the dot-atom form SHOULD be used and the quoted-
		                //   string form SHOULD NOT be used.

		                break;
		            // Quoted pair
		            case internals.components.contextQuotedPair:
		                // http://tools.ietf.org/html/rfc5322#section-3.2.1
		                //   quoted-pair     =   ("\" (VCHAR / WSP)) / obs-qp
		                //
		                //   VCHAR           =  %d33-126   ; visible (printing) characters
		                //   WSP             =  SP / HTAB  ; white space
		                //
		                //   obs-qp          =   "\" (%d0 / obs-NO-WS-CTL / LF / CR)
		                //
		                //   obs-NO-WS-CTL   =   %d1-8 /   ; US-ASCII control
		                //                       %d11 /    ;  characters that do not
		                //                       %d12 /    ;  include the carriage
		                //                       %d14-31 / ;  return, line feed, and
		                //                       %d127     ;  white space characters
		                //
		                // i.e. obs-qp       =  "\" (%d0-8, %d10-31 / %d127)
		                charCode = token.charCodeAt(0);

		                if (charCode > 127) {
		                    // Fatal error
		                    updateResult(internals.diagnoses.errExpectingQPair);
		                } else if (charCode < 31 && charCode !== 9 || charCode === 127) {
		                    // ' ' and '\t' are allowed
		                    updateResult(internals.diagnoses.deprecatedQP);
		                }

		                // At this point we know where this qpair occurred so we could check to see if the character actually needed to be quoted at all.
		                // http://tools.ietf.org/html/rfc5321#section-4.1.2
		                //   the sending system SHOULD transmit the form that uses the minimum quoting possible.

		                context.prev = context.now;
		                // End of qpair
		                context.now = context.stack.pop();
		                token = '\\' + token;

		                switch (context.now) {
		                    case internals.components.contextComment:
		                        break;

		                    case internals.components.contextQuotedString:
		                        parseData.local += token;
		                        atomData.locals[elementCount] += token;

		                        // The maximum sizes specified by RFC 5321 are octet counts, so we must include the backslash
		                        elementLength += 2;
		                        break;

		                    case internals.components.literal:
		                        parseData.domain += token;
		                        atomData.domains[elementCount] += token;

		                        // The maximum sizes specified by RFC 5321 are octet counts, so we must include the backslash
		                        elementLength += 2;
		                        break;

		                    // $lab:coverage:off$
		                    default:
		                        throw new Error('quoted pair logic invoked in an invalid context: ' + context.now);
		                    // $lab:coverage:on$
		                }
		                break;

		            // Comment
		            case internals.components.contextComment:
		                // http://tools.ietf.org/html/rfc5322#section-3.2.2
		                //   comment  = "(" *([FWS] ccontent) [FWS] ")"
		                //
		                //   ccontent = ctext / quoted-pair / comment
		                switch (token) {
		                    // Nested comment
		                    case '(':
		                        // Nested comments are ok
		                        context.stack.push(context.now);
		                        context.now = internals.components.contextComment;
		                        break;

		                    // End of comment
		                    case ')':
		                        context.prev = context.now;
		                        context.now = context.stack.pop();
		                        break;

		                    // Quoted pair
		                    case '\\':
		                        context.stack.push(context.now);
		                        context.now = internals.components.contextQuotedPair;
		                        break;

		                    // Folding white space
		                    case '\r':
		                        if (emailLength === ++i || email[i] !== '\n') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errCRNoLF);
		                            break;
		                        }

		                    // Fallthrough

		                    case ' ':
		                    case '\t':
		                        updateResult(internals.diagnoses.cfwsFWS);

		                        context.stack.push(context.now);
		                        context.now = internals.components.contextFWS;
		                        prevToken = token;
		                        break;

		                    // CTEXT
		                    default:
		                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
		                        //   ctext         = %d33-39 /  ; Printable US-ASCII
		                        //                   %d42-91 /  ;  characters not including
		                        //                   %d93-126 / ;  "(", ")", or "\"
		                        //                   obs-ctext
		                        //
		                        //   obs-ctext     = obs-NO-WS-CTL
		                        //
		                        //   obs-NO-WS-CTL = %d1-8 /    ; US-ASCII control
		                        //                   %d11 /     ;  characters that do not
		                        //                   %d12 /     ;  include the carriage
		                        //                   %d14-31 /  ;  return, line feed, and
		                        //                   %d127      ;  white space characters
		                        charCode = token.charCodeAt(0);

		                        if (charCode > 127 || charCode === 0 || charCode === 10) {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errExpectingCTEXT);
		                            break;
		                        } else if (charCode < 32 || charCode === 127) {
		                            updateResult(internals.diagnoses.deprecatedCTEXT);
		                        }
		                }

		                break;

		            // Folding white space
		            case internals.components.contextFWS:
		                // http://tools.ietf.org/html/rfc5322#section-3.2.2
		                //   FWS     =   ([*WSP CRLF] 1*WSP) /  obs-FWS
		                //                                   ; Folding white space

		                // But note the erratum:
		                // http://www.rfc-editor.org/errata_search.php?rfc=5322&eid=1908:
		                //   In the obsolete syntax, any amount of folding white space MAY be
		                //   inserted where the obs-FWS rule is allowed.  This creates the
		                //   possibility of having two consecutive "folds" in a line, and
		                //   therefore the possibility that a line which makes up a folded header
		                //   field could be composed entirely of white space.
		                //
		                //   obs-FWS =   1*([CRLF] WSP)

		                if (prevToken === '\r') {
		                    if (token === '\r') {
		                        // Fatal error
		                        updateResult(internals.diagnoses.errFWSCRLFx2);
		                        break;
		                    }

		                    if (++crlfCount > 1) {
		                        // Multiple folds => obsolete FWS
		                        updateResult(internals.diagnoses.deprecatedFWS);
		                    } else {
		                        crlfCount = 1;
		                    }
		                }

		                switch (token) {
		                    case '\r':
		                        if (emailLength === ++i || email[i] !== '\n') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errCRNoLF);
		                        }

		                        break;

		                    case ' ':
		                    case '\t':
		                        break;

		                    default:
		                        if (prevToken === '\r') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errFWSCRLFEnd);
		                        }

		                        crlfCount = 0;

		                        // End of FWS
		                        context.prev = context.now;
		                        context.now = context.stack.pop();

		                        // Look at this token again in the parent context
		                        --i;
		                }

		                prevToken = token;
		                break;

		            // Unexpected context
		            // $lab:coverage:off$
		            default:
		                throw new Error('unknown context: ' + context.now);
		            // $lab:coverage:on$
		        } // Primary state machine

		        if (maxResult > internals.categories.rfc5322) {
		            // Fatal error, no point continuing
		            break;
		        }
		    } // Token loop

		    // Check for errors
		    if (maxResult < internals.categories.rfc5322) {
		        // Fatal errors
		        if (context.now === internals.components.contextQuotedString) {
		            updateResult(internals.diagnoses.errUnclosedQuotedString);
		        } else if (context.now === internals.components.contextQuotedPair) {
		            updateResult(internals.diagnoses.errBackslashEnd);
		        } else if (context.now === internals.components.contextComment) {
		            updateResult(internals.diagnoses.errUnclosedComment);
		        } else if (context.now === internals.components.literal) {
		            updateResult(internals.diagnoses.errUnclosedDomainLiteral);
		        } else if (token === '\r') {
		            updateResult(internals.diagnoses.errFWSCRLFEnd);
		        } else if (parseData.domain.length === 0) {
		            updateResult(internals.diagnoses.errNoDomain);
		        } else if (elementLength === 0) {
		            updateResult(internals.diagnoses.errDotEnd);
		        } else if (hyphenFlag) {
		            updateResult(internals.diagnoses.errDomainHyphenEnd);
		        }

		        // Other errors
		        else if (parseData.domain.length > 255) {
		                // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.2
		                //   The maximum total length of a domain name or number is 255 octets.
		                updateResult(internals.diagnoses.rfc5322DomainTooLong);
		            } else if (parseData.local.length + parseData.domain.length + /* '@' */1 > 254) {
		                // http://tools.ietf.org/html/rfc5321#section-4.1.2
		                //   Forward-path   = Path
		                //
		                //   Path           = "<" [ A-d-l ":" ] Mailbox ">"
		                //
		                // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.3
		                //   The maximum total length of a reverse-path or forward-path is 256 octets (including the punctuation and element separators).
		                //
		                // Thus, even without (obsolete) routing information, the Mailbox can only be 254 characters long. This is confirmed by this verified
		                // erratum to RFC 3696:
		                //
		                // http://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690
		                //   However, there is a restriction in RFC 2821 on the length of an address in MAIL and RCPT commands of 254 characters.  Since
		                //   addresses that do not fit in those fields are not normally useful, the upper limit on address lengths should normally be considered
		                //   to be 254.
		                updateResult(internals.diagnoses.rfc5322TooLong);
		            } else if (elementLength > 63) {
		                // http://tools.ietf.org/html/rfc1035#section-2.3.4
		                // labels   63 octets or less
		                updateResult(internals.diagnoses.rfc5322LabelTooLong);
		            } else if (options.minDomainAtoms && atomData.domains.length < options.minDomainAtoms) {
		                updateResult(internals.diagnoses.errDomainTooShort);
		            } else if (options.tldWhitelist || options.tldBlacklist) {
		                var tldAtom = atomData.domains[elementCount];

		                if (!internals.validDomain(tldAtom, options)) {
		                    updateResult(internals.diagnoses.errUnknownTLD);
		                }
		            }
		    } // Check for errors

		    var dnsPositive = false;
		    var finishImmediately = false;

		    var finish = function finish() {

		        if (!dnsPositive && maxResult < internals.categories.dnsWarn) {
		            // Per RFC 5321, domain atoms are limited to letter-digit-hyphen, so we only need to check code <= 57 to check for a digit
		            var code = atomData.domains[elementCount].charCodeAt(0);
		            if (code <= 57) {
		                updateResult(internals.diagnoses.rfc5321TLDNumeric);
		            } else if (elementCount === 0) {
		                updateResult(internals.diagnoses.rfc5321TLD);
		            }
		        }

		        if (maxResult < threshold) {
		            maxResult = internals.diagnoses.valid;
		        }

		        var finishResult = diagnose ? maxResult : maxResult < internals.defaultThreshold;

		        if (callback) {
		            if (finishImmediately) {
		                callback(finishResult);
		            } else {
		                internals.defer(callback.bind(null, finishResult));
		            }
		        }

		        return finishResult;
		    }; // Finish

		    if (options.checkDNS && maxResult < internals.categories.dnsWarn) {
		        (function () {
		            // http://tools.ietf.org/html/rfc5321#section-2.3.5
		            //   Names that can be resolved to MX RRs or address (i.e., A or AAAA) RRs (as discussed in Section 5) are permitted, as are CNAME RRs whose
		            //   targets can be resolved, in turn, to MX or address RRs.
		            //
		            // http://tools.ietf.org/html/rfc5321#section-5.1
		            //   The lookup first attempts to locate an MX record associated with the name.  If a CNAME record is found, the resulting name is processed
		            //   as if it were the initial name. ... If an empty list of MXs is returned, the address is treated as if it was associated with an implicit
		            //   MX RR, with a preference of 0, pointing to that host.
		            //
		            // isEmail() author's note: We will regard the existence of a CNAME to be sufficient evidence of the domain's existence. For performance
		            // reasons we will not repeat the DNS lookup for the CNAME's target, but we will raise a warning because we didn't immediately find an MX
		            // record.
		            if (elementCount === 0) {
		                // Checking TLD DNS only works if you explicitly check from the root
		                parseData.domain += '.';
		            }

		            var dnsDomain = parseData.domain;
		            Dns.resolveMx(dnsDomain, function (err, mxRecords) {

		                // If we have a fatal error, then we must assume that there are no records
		                if (err && err.code !== Dns.NODATA) {
		                    updateResult(internals.diagnoses.dnsWarnNoRecord);
		                    return finish();
		                }

		                if (mxRecords && mxRecords.length) {
		                    dnsPositive = true;
		                    return finish();
		                }

		                var count = 3;
		                var done = false;
		                updateResult(internals.diagnoses.dnsWarnNoMXRecord);

		                var handleRecords = function handleRecords(ignoreError, records) {

		                    if (done) {
		                        return;
		                    }

		                    --count;

		                    if (records && records.length) {
		                        done = true;
		                        return finish();
		                    }

		                    if (count === 0) {
		                        // No usable records for the domain can be found
		                        updateResult(internals.diagnoses.dnsWarnNoRecord);
		                        done = true;
		                        finish();
		                    }
		                };

		                Dns.resolveCname(dnsDomain, handleRecords);
		                Dns.resolve4(dnsDomain, handleRecords);
		                Dns.resolve6(dnsDomain, handleRecords);
		            });

		            finishImmediately = true;
		        })();
		    } else {
		        var result = finish();
		        finishImmediately = true;
		        return result;
		    } // CheckDNS
		};

		exports.diagnoses = internals.validate.diagnoses = function () {

		    var diag = {};
		    var keys = Object.keys(internals.diagnoses);
		    for (var i = 0; i < keys.length; ++i) {
		        var key = keys[i];
		        diag[key] = internals.diagnoses[key];
		    }

		    return diag;
		}();
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Any = __webpack_require__(11);
		var Ref = __webpack_require__(12);
		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {
		    precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/
		};

		internals.Number = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'number';
		        _this._invalids.add(Infinity);
		        _this._invalids.add(-Infinity);
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var result = {
		            errors: null,
		            value: value
		        };

		        if (typeof value === 'string' && options.convert) {

		            var number = parseFloat(value);
		            result.value = isNaN(number) || !isFinite(value) ? NaN : number;
		        }

		        var isNumber = typeof result.value === 'number' && !isNaN(result.value);

		        if (options.convert && 'precision' in this._flags && isNumber) {

		            // This is conceptually equivalent to using toFixed but it should be much faster
		            var precision = Math.pow(10, this._flags.precision);
		            result.value = Math.round(result.value * precision) / precision;
		        }

		        result.errors = isNumber ? null : this.createError('number.base', null, state, options);
		        return result;
		    };

		    _class.prototype.multiple = function multiple(base) {

		        var isRef = Ref.isRef(base);

		        if (!isRef) {
		            Hoek.assert(typeof base === 'number' && isFinite(base), 'multiple must be a number');
		            Hoek.assert(base > 0, 'multiple must be greater than 0');
		        }

		        return this._test('multiple', base, function (value, state, options) {

		            var divisor = isRef ? base(state.reference || state.parent, options) : base;

		            if (isRef && (typeof divisor !== 'number' || !isFinite(divisor))) {
		                return this.createError('number.ref', { ref: base.key }, state, options);
		            }

		            if (value % divisor === 0) {
		                return value;
		            }

		            return this.createError('number.multiple', { multiple: base, value: value }, state, options);
		        });
		    };

		    _class.prototype.integer = function integer() {

		        return this._test('integer', undefined, function (value, state, options) {

		            return Number.isSafeInteger(value) ? value : this.createError('number.integer', { value: value }, state, options);
		        });
		    };

		    _class.prototype.negative = function negative() {

		        return this._test('negative', undefined, function (value, state, options) {

		            if (value < 0) {
		                return value;
		            }

		            return this.createError('number.negative', { value: value }, state, options);
		        });
		    };

		    _class.prototype.positive = function positive() {

		        return this._test('positive', undefined, function (value, state, options) {

		            if (value > 0) {
		                return value;
		            }

		            return this.createError('number.positive', { value: value }, state, options);
		        });
		    };

		    _class.prototype.precision = function precision(limit) {

		        Hoek.assert(Number.isSafeInteger(limit), 'limit must be an integer');
		        Hoek.assert(!('precision' in this._flags), 'precision already set');

		        var obj = this._test('precision', limit, function (value, state, options) {

		            var places = value.toString().match(internals.precisionRx);
		            var decimals = Math.max((places[1] ? places[1].length : 0) - (places[2] ? parseInt(places[2], 10) : 0), 0);
		            if (decimals <= limit) {
		                return value;
		            }

		            return this.createError('number.precision', { limit: limit, value: value }, state, options);
		        });

		        obj._flags.precision = limit;
		        return obj;
		    };

		    return _class;
		}(Any);

		internals.compare = function (type, compare) {

		    return function (limit) {

		        var isRef = Ref.isRef(limit);
		        var isNumber = typeof limit === 'number' && !isNaN(limit);

		        Hoek.assert(isNumber || isRef, 'limit must be a number or reference');

		        return this._test(type, limit, function (value, state, options) {

		            var compareTo = void 0;
		            if (isRef) {
		                compareTo = limit(state.reference || state.parent, options);

		                if (!(typeof compareTo === 'number' && !isNaN(compareTo))) {
		                    return this.createError('number.ref', { ref: limit.key }, state, options);
		                }
		            } else {
		                compareTo = limit;
		            }

		            if (compare(value, compareTo)) {
		                return value;
		            }

		            return this.createError('number.' + type, { limit: compareTo, value: value }, state, options);
		        });
		    };
		};

		internals.Number.prototype.min = internals.compare('min', function (value, limit) {
		    return value >= limit;
		});
		internals.Number.prototype.max = internals.compare('max', function (value, limit) {
		    return value <= limit;
		});
		internals.Number.prototype.greater = internals.compare('greater', function (value, limit) {
		    return value > limit;
		});
		internals.Number.prototype.less = internals.compare('less', function (value, limit) {
		    return value < limit;
		});

		module.exports = new internals.Number();

	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Any = __webpack_require__(11);
		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {
		    Set: __webpack_require__(15)
		};

		internals.Boolean = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'boolean';
		        _this._flags.insensitive = true;
		        _this._inner.truthySet = new internals.Set();
		        _this._inner.falsySet = new internals.Set();
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var result = {
		            value: value
		        };

		        if (typeof value === 'string' && options.convert) {

		            var normalized = this._flags.insensitive ? value.toLowerCase() : value;
		            result.value = normalized === 'true' ? true : normalized === 'false' ? false : value;
		        }

		        if (typeof result.value !== 'boolean') {
		            result.value = this._inner.truthySet.has(value, null, null, this._flags.insensitive) ? true : this._inner.falsySet.has(value, null, null, this._flags.insensitive) ? false : value;
		        }

		        result.errors = typeof result.value === 'boolean' ? null : this.createError('boolean.base', null, state, options);
		        return result;
		    };

		    _class.prototype.truthy = function truthy() {

		        var obj = this.clone();
		        var values = Hoek.flatten(Array.prototype.slice.call(arguments));
		        for (var i = 0; i < values.length; ++i) {
		            var value = values[i];

		            Hoek.assert(value !== undefined, 'Cannot call truthy with undefined');
		            obj._inner.truthySet.add(value);
		        }
		        return obj;
		    };

		    _class.prototype.falsy = function falsy() {

		        var obj = this.clone();
		        var values = Hoek.flatten(Array.prototype.slice.call(arguments));
		        for (var i = 0; i < values.length; ++i) {
		            var value = values[i];

		            Hoek.assert(value !== undefined, 'Cannot call falsy with undefined');
		            obj._inner.falsySet.add(value);
		        }
		        return obj;
		    };

		    _class.prototype.insensitive = function insensitive(enabled) {

		        var insensitive = enabled === undefined ? true : !!enabled;

		        if (this._flags.insensitive === insensitive) {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.insensitive = insensitive;
		        return obj;
		    };

		    _class.prototype.describe = function describe() {

		        var description = Any.prototype.describe.call(this);
		        description.truthy = [true].concat(this._inner.truthySet.values());
		        description.falsy = [false].concat(this._inner.falsySet.values());
		        return description;
		    };

		    return _class;
		}(Any);

		module.exports = new internals.Boolean();

	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Hoek = __webpack_require__(2);
		var Any = __webpack_require__(11);
		var Cast = __webpack_require__(16);
		var Ref = __webpack_require__(12);

		// Declare internals

		var internals = {};

		internals.Alternatives = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'alternatives';
		        _this._invalids.remove(null);
		        _this._inner.matches = [];
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var errors = [];
		        var il = this._inner.matches.length;
		        var baseType = this._baseType;

		        for (var i = 0; i < il; ++i) {
		            var item = this._inner.matches[i];
		            var schema = item.schema;
		            if (!schema) {
		                var failed = item.is._validate(item.ref(state.reference || state.parent, options), null, options, state.parent).errors;

		                if (failed) {
		                    if (item.otherwise) {
		                        return item.otherwise._validate(value, state, options);
		                    }
		                } else if (item.then) {
		                    return item.then._validate(value, state, options);
		                }

		                if (i === il - 1 && baseType) {
		                    return baseType._validate(value, state, options);
		                }

		                continue;
		            }

		            var result = schema._validate(value, state, options);
		            if (!result.errors) {
		                // Found a valid match
		                return result;
		            }

		            errors = errors.concat(result.errors);
		        }

		        if (errors.length) {
		            return { errors: this.createError('alternatives.child', { reason: errors }, state, options) };
		        }

		        return { errors: this.createError('alternatives.base', null, state, options) };
		    };

		    _class.prototype.try = function _try() /* schemas */{

		        var schemas = Hoek.flatten(Array.prototype.slice.call(arguments));
		        Hoek.assert(schemas.length, 'Cannot add other alternatives without at least one schema');

		        var obj = this.clone();

		        for (var i = 0; i < schemas.length; ++i) {
		            var cast = Cast.schema(schemas[i]);
		            if (cast._refs.length) {
		                obj._refs = obj._refs.concat(cast._refs);
		            }
		            obj._inner.matches.push({ schema: cast });
		        }

		        return obj;
		    };

		    _class.prototype.when = function when(ref, options) {

		        Hoek.assert(Ref.isRef(ref) || typeof ref === 'string', 'Invalid reference:', ref);
		        Hoek.assert(options, 'Missing options');
		        Hoek.assert((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options');
		        Hoek.assert(options.hasOwnProperty('is'), 'Missing "is" directive');
		        Hoek.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');

		        var obj = this.clone();
		        var is = Cast.schema(options.is);

		        if (options.is === null || !(Ref.isRef(options.is) || options.is instanceof Any)) {

		            // Only apply required if this wasn't already a schema or a ref, we'll suppose people know what they're doing
		            is = is.required();
		        }

		        var item = {
		            ref: Cast.ref(ref),
		            is: is,
		            then: options.then !== undefined ? Cast.schema(options.then) : undefined,
		            otherwise: options.otherwise !== undefined ? Cast.schema(options.otherwise) : undefined
		        };

		        if (obj._baseType) {

		            item.then = item.then && obj._baseType.concat(item.then);
		            item.otherwise = item.otherwise && obj._baseType.concat(item.otherwise);
		        }

		        Ref.push(obj._refs, item.ref);
		        obj._refs = obj._refs.concat(item.is._refs);

		        if (item.then && item.then._refs) {
		            obj._refs = obj._refs.concat(item.then._refs);
		        }

		        if (item.otherwise && item.otherwise._refs) {
		            obj._refs = obj._refs.concat(item.otherwise._refs);
		        }

		        obj._inner.matches.push(item);

		        return obj;
		    };

		    _class.prototype.describe = function describe() {

		        var description = Any.prototype.describe.call(this);
		        var alternatives = [];
		        for (var i = 0; i < this._inner.matches.length; ++i) {
		            var item = this._inner.matches[i];
		            if (item.schema) {

		                // try()

		                alternatives.push(item.schema.describe());
		            } else {

		                // when()

		                var when = {
		                    ref: item.ref.toString(),
		                    is: item.is.describe()
		                };

		                if (item.then) {
		                    when.then = item.then.describe();
		                }

		                if (item.otherwise) {
		                    when.otherwise = item.otherwise.describe();
		                }

		                alternatives.push(when);
		            }
		        }

		        description.alternatives = alternatives;
		        return description;
		    };

		    return _class;
		}(Any);

		module.exports = new internals.Alternatives();

	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Hoek = __webpack_require__(2);
		var Topo = __webpack_require__(27);
		var Any = __webpack_require__(11);
		var Errors = __webpack_require__(13);
		var Cast = __webpack_require__(16);
		var Ref = __webpack_require__(12);

		// Declare internals

		var internals = {};

		internals.Object = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'object';
		        _this._inner.children = null;
		        _this._inner.renames = [];
		        _this._inner.dependencies = [];
		        _this._inner.patterns = [];
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var target = value;
		        var errors = [];
		        var finish = function finish() {

		            return {
		                value: target,
		                errors: errors.length ? errors : null
		            };
		        };

		        if (typeof value === 'string' && options.convert) {

		            value = internals.safeParse(value);
		        }

		        var type = this._flags.func ? 'function' : 'object';
		        if (!value || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== type || Array.isArray(value)) {

		            errors.push(this.createError(type + '.base', null, state, options));
		            return finish();
		        }

		        // Skip if there are no other rules to test

		        if (!this._inner.renames.length && !this._inner.dependencies.length && !this._inner.children && // null allows any keys
		        !this._inner.patterns.length) {

		            target = value;
		            return finish();
		        }

		        // Ensure target is a local copy (parsed) or shallow copy

		        if (target === value) {
		            if (type === 'object') {
		                target = Object.create(Object.getPrototypeOf(value));
		            } else {
		                target = function target() {

		                    return value.apply(this, arguments);
		                };

		                target.prototype = Hoek.clone(value.prototype);
		            }

		            var valueKeys = Object.keys(value);
		            for (var i = 0; i < valueKeys.length; ++i) {
		                target[valueKeys[i]] = value[valueKeys[i]];
		            }
		        } else {
		            target = value;
		        }

		        // Rename keys

		        var renamed = {};
		        for (var _i = 0; _i < this._inner.renames.length; ++_i) {
		            var rename = this._inner.renames[_i];

		            if (rename.options.ignoreUndefined && target[rename.from] === undefined) {
		                continue;
		            }

		            if (!rename.options.multiple && renamed[rename.to]) {

		                errors.push(this.createError('object.rename.multiple', { from: rename.from, to: rename.to }, state, options));
		                if (options.abortEarly) {
		                    return finish();
		                }
		            }

		            if (Object.prototype.hasOwnProperty.call(target, rename.to) && !rename.options.override && !renamed[rename.to]) {

		                errors.push(this.createError('object.rename.override', { from: rename.from, to: rename.to }, state, options));
		                if (options.abortEarly) {
		                    return finish();
		                }
		            }

		            if (target[rename.from] === undefined) {
		                delete target[rename.to];
		            } else {
		                target[rename.to] = target[rename.from];
		            }

		            renamed[rename.to] = true;

		            if (!rename.options.alias) {
		                delete target[rename.from];
		            }
		        }

		        // Validate schema

		        if (!this._inner.children && // null allows any keys
		        !this._inner.patterns.length && !this._inner.dependencies.length) {

		            return finish();
		        }

		        var unprocessed = Hoek.mapToObject(Object.keys(target));

		        if (this._inner.children) {
		            var stripProps = [];

		            for (var _i2 = 0; _i2 < this._inner.children.length; ++_i2) {
		                var child = this._inner.children[_i2];
		                var key = child.key;
		                var item = target[key];

		                delete unprocessed[key];

		                var localState = { key: key, path: (state.path || '') + (state.path && key ? '.' : '') + key, parent: target, reference: state.reference };
		                var result = child.schema._validate(item, localState, options);
		                if (result.errors) {
		                    errors.push(this.createError('object.child', { key: key, child: child.schema._getLabel(key), reason: result.errors }, localState, options));

		                    if (options.abortEarly) {
		                        return finish();
		                    }
		                } else {
		                    if (child.schema._flags.strip || result.value === undefined && result.value !== item) {
		                        stripProps.push(key);
		                        target[key] = result.finalValue;
		                    } else if (result.value !== undefined) {
		                        target[key] = result.value;
		                    }
		                }
		            }

		            for (var _i3 = 0; _i3 < stripProps.length; ++_i3) {
		                delete target[stripProps[_i3]];
		            }
		        }

		        // Unknown keys

		        var unprocessedKeys = Object.keys(unprocessed);
		        if (unprocessedKeys.length && this._inner.patterns.length) {

		            for (var _i4 = 0; _i4 < unprocessedKeys.length; ++_i4) {
		                var _key = unprocessedKeys[_i4];
		                var _localState = { key: _key, path: (state.path ? state.path + '.' : '') + _key, parent: target, reference: state.reference };
		                var _item = target[_key];

		                for (var j = 0; j < this._inner.patterns.length; ++j) {
		                    var pattern = this._inner.patterns[j];

		                    if (pattern.regex.test(_key)) {
		                        delete unprocessed[_key];

		                        var _result = pattern.rule._validate(_item, _localState, options);
		                        if (_result.errors) {
		                            errors.push(this.createError('object.child', { key: _key, child: pattern.rule._getLabel(_key), reason: _result.errors }, _localState, options));

		                            if (options.abortEarly) {
		                                return finish();
		                            }
		                        }

		                        if (_result.value !== undefined) {
		                            target[_key] = _result.value;
		                        }
		                    }
		                }
		            }

		            unprocessedKeys = Object.keys(unprocessed);
		        }

		        if ((this._inner.children || this._inner.patterns.length) && unprocessedKeys.length) {
		            if (options.stripUnknown && this._flags.allowUnknown !== true || options.skipFunctions) {

		                var stripUnknown = options.stripUnknown ? options.stripUnknown === true ? true : !!options.stripUnknown.objects : false;

		                for (var _i5 = 0; _i5 < unprocessedKeys.length; ++_i5) {
		                    var _key2 = unprocessedKeys[_i5];

		                    if (stripUnknown) {
		                        delete target[_key2];
		                        delete unprocessed[_key2];
		                    } else if (typeof target[_key2] === 'function') {
		                        delete unprocessed[_key2];
		                    }
		                }

		                unprocessedKeys = Object.keys(unprocessed);
		            }

		            if (unprocessedKeys.length && (this._flags.allowUnknown !== undefined ? !this._flags.allowUnknown : !options.allowUnknown)) {

		                for (var _i6 = 0; _i6 < unprocessedKeys.length; ++_i6) {
		                    var unprocessedKey = unprocessedKeys[_i6];
		                    errors.push(this.createError('object.allowUnknown', { child: unprocessedKey }, { key: unprocessedKey, path: state.path + (state.path ? '.' : '') + unprocessedKey }, options));
		                }
		            }
		        }

		        // Validate dependencies

		        for (var _i7 = 0; _i7 < this._inner.dependencies.length; ++_i7) {
		            var dep = this._inner.dependencies[_i7];
		            var err = internals[dep.type].call(this, dep.key !== null && target[dep.key], dep.peers, target, { key: dep.key, path: (state.path || '') + (dep.key ? '.' + dep.key : '') }, options);
		            if (err instanceof Errors.Err) {
		                errors.push(err);
		                if (options.abortEarly) {
		                    return finish();
		                }
		            }
		        }

		        return finish();
		    };

		    _class.prototype._func = function _func() {

		        var obj = this.clone();
		        obj._flags.func = true;
		        return obj;
		    };

		    _class.prototype.keys = function keys(schema) {

		        Hoek.assert(schema === null || schema === undefined || (typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object', 'Object schema must be a valid object');
		        Hoek.assert(!schema || !(schema instanceof Any), 'Object schema cannot be a joi schema');

		        var obj = this.clone();

		        if (!schema) {
		            obj._inner.children = null;
		            return obj;
		        }

		        var children = Object.keys(schema);

		        if (!children.length) {
		            obj._inner.children = [];
		            return obj;
		        }

		        var topo = new Topo();
		        if (obj._inner.children) {
		            for (var i = 0; i < obj._inner.children.length; ++i) {
		                var child = obj._inner.children[i];

		                // Only add the key if we are not going to replace it later
		                if (children.indexOf(child.key) === -1) {
		                    topo.add(child, { after: child._refs, group: child.key });
		                }
		            }
		        }

		        for (var _i8 = 0; _i8 < children.length; ++_i8) {
		            var key = children[_i8];
		            var _child = schema[key];
		            try {
		                var cast = Cast.schema(_child);
		                topo.add({ key: key, schema: cast }, { after: cast._refs, group: key });
		            } catch (castErr) {
		                if (castErr.hasOwnProperty('path')) {
		                    castErr.path = key + '.' + castErr.path;
		                } else {
		                    castErr.path = key;
		                }
		                throw castErr;
		            }
		        }

		        obj._inner.children = topo.nodes;

		        return obj;
		    };

		    _class.prototype.unknown = function unknown(allow) {

		        var value = allow !== false;

		        if (this._flags.allowUnknown === value) {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.allowUnknown = value;
		        return obj;
		    };

		    _class.prototype.length = function length(limit) {

		        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('length', limit, function (value, state, options) {

		            if (Object.keys(value).length === limit) {
		                return value;
		            }

		            return this.createError('object.length', { limit: limit }, state, options);
		        });
		    };

		    _class.prototype.arity = function arity(n) {

		        Hoek.assert(Number.isSafeInteger(n) && n >= 0, 'n must be a positive integer');

		        return this._test('arity', n, function (value, state, options) {

		            if (value.length === n) {
		                return value;
		            }

		            return this.createError('function.arity', { n: n }, state, options);
		        });
		    };

		    _class.prototype.minArity = function minArity(n) {

		        Hoek.assert(Number.isSafeInteger(n) && n > 0, 'n must be a strict positive integer');

		        return this._test('minArity', n, function (value, state, options) {

		            if (value.length >= n) {
		                return value;
		            }

		            return this.createError('function.minArity', { n: n }, state, options);
		        });
		    };

		    _class.prototype.maxArity = function maxArity(n) {

		        Hoek.assert(Number.isSafeInteger(n) && n >= 0, 'n must be a positive integer');

		        return this._test('maxArity', n, function (value, state, options) {

		            if (value.length <= n) {
		                return value;
		            }

		            return this.createError('function.maxArity', { n: n }, state, options);
		        });
		    };

		    _class.prototype.min = function min(limit) {

		        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('min', limit, function (value, state, options) {

		            if (Object.keys(value).length >= limit) {
		                return value;
		            }

		            return this.createError('object.min', { limit: limit }, state, options);
		        });
		    };

		    _class.prototype.max = function max(limit) {

		        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('max', limit, function (value, state, options) {

		            if (Object.keys(value).length <= limit) {
		                return value;
		            }

		            return this.createError('object.max', { limit: limit }, state, options);
		        });
		    };

		    _class.prototype.pattern = function pattern(_pattern, schema) {

		        Hoek.assert(_pattern instanceof RegExp, 'Invalid regular expression');
		        Hoek.assert(schema !== undefined, 'Invalid rule');

		        _pattern = new RegExp(_pattern.source, _pattern.ignoreCase ? 'i' : undefined); // Future version should break this and forbid unsupported regex flags

		        try {
		            schema = Cast.schema(schema);
		        } catch (castErr) {
		            if (castErr.hasOwnProperty('path')) {
		                castErr.message = castErr.message + '(' + castErr.path + ')';
		            }

		            throw castErr;
		        }

		        var obj = this.clone();
		        obj._inner.patterns.push({ regex: _pattern, rule: schema });
		        return obj;
		    };

		    _class.prototype.schema = function schema() {

		        return this._test('schema', null, function (value, state, options) {

		            if (value instanceof Any) {
		                return value;
		            }

		            return this.createError('object.schema', null, state, options);
		        });
		    };

		    _class.prototype.with = function _with(key, peers) {

		        return this._dependency('with', key, peers);
		    };

		    _class.prototype.without = function without(key, peers) {

		        return this._dependency('without', key, peers);
		    };

		    _class.prototype.xor = function xor() {

		        var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this._dependency('xor', null, peers);
		    };

		    _class.prototype.or = function or() {

		        var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this._dependency('or', null, peers);
		    };

		    _class.prototype.and = function and() {

		        var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this._dependency('and', null, peers);
		    };

		    _class.prototype.nand = function nand() {

		        var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this._dependency('nand', null, peers);
		    };

		    _class.prototype.requiredKeys = function requiredKeys(children) {

		        children = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this.applyFunctionToChildren(children, 'required');
		    };

		    _class.prototype.optionalKeys = function optionalKeys(children) {

		        children = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this.applyFunctionToChildren(children, 'optional');
		    };

		    _class.prototype.forbiddenKeys = function forbiddenKeys(children) {

		        children = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this.applyFunctionToChildren(children, 'forbidden');
		    };

		    _class.prototype.rename = function rename(from, to, options) {

		        Hoek.assert(typeof from === 'string', 'Rename missing the from argument');
		        Hoek.assert(typeof to === 'string', 'Rename missing the to argument');
		        Hoek.assert(to !== from, 'Cannot rename key to same name:', from);

		        for (var i = 0; i < this._inner.renames.length; ++i) {
		            Hoek.assert(this._inner.renames[i].from !== from, 'Cannot rename the same key multiple times');
		        }

		        var obj = this.clone();

		        obj._inner.renames.push({
		            from: from,
		            to: to,
		            options: Hoek.applyToDefaults(internals.renameDefaults, options || {})
		        });

		        return obj;
		    };

		    _class.prototype.applyFunctionToChildren = function applyFunctionToChildren(children, fn, args, root) {

		        children = [].concat(children);
		        Hoek.assert(children.length > 0, 'expected at least one children');

		        var groupedChildren = internals.groupChildren(children);
		        var obj = void 0;

		        if ('' in groupedChildren) {
		            obj = this[fn].apply(this, args);
		            delete groupedChildren[''];
		        } else {
		            obj = this.clone();
		        }

		        if (obj._inner.children) {
		            root = root ? root + '.' : '';

		            for (var i = 0; i < obj._inner.children.length; ++i) {
		                var child = obj._inner.children[i];
		                var group = groupedChildren[child.key];

		                if (group) {
		                    obj._inner.children[i] = {
		                        key: child.key,
		                        _refs: child._refs,
		                        schema: child.schema.applyFunctionToChildren(group, fn, args, root + child.key)
		                    };

		                    delete groupedChildren[child.key];
		                }
		            }
		        }

		        var remaining = Object.keys(groupedChildren);
		        Hoek.assert(remaining.length === 0, 'unknown key(s)', remaining.join(', '));

		        return obj;
		    };

		    _class.prototype._dependency = function _dependency(type, key, peers) {

		        peers = [].concat(peers);
		        for (var i = 0; i < peers.length; ++i) {
		            Hoek.assert(typeof peers[i] === 'string', type, 'peers must be a string or array of strings');
		        }

		        var obj = this.clone();
		        obj._inner.dependencies.push({ type: type, key: key, peers: peers });
		        return obj;
		    };

		    _class.prototype.describe = function describe(shallow) {

		        var description = Any.prototype.describe.call(this);

		        if (description.rules) {
		            for (var i = 0; i < description.rules.length; ++i) {
		                var rule = description.rules[i];
		                // Coverage off for future-proof descriptions, only object().assert() is use right now
		                if ( /* $lab:coverage:off$ */rule.arg && _typeof(rule.arg) === 'object' && rule.arg.schema && rule.arg.ref /* $lab:coverage:on$ */) {
		                        rule.arg = {
		                            schema: rule.arg.schema.describe(),
		                            ref: rule.arg.ref.toString()
		                        };
		                    }
		            }
		        }

		        if (this._inner.children && !shallow) {

		            description.children = {};
		            for (var _i9 = 0; _i9 < this._inner.children.length; ++_i9) {
		                var child = this._inner.children[_i9];
		                description.children[child.key] = child.schema.describe();
		            }
		        }

		        if (this._inner.dependencies.length) {
		            description.dependencies = Hoek.clone(this._inner.dependencies);
		        }

		        if (this._inner.patterns.length) {
		            description.patterns = [];

		            for (var _i10 = 0; _i10 < this._inner.patterns.length; ++_i10) {
		                var pattern = this._inner.patterns[_i10];
		                description.patterns.push({ regex: pattern.regex.toString(), rule: pattern.rule.describe() });
		            }
		        }

		        if (this._inner.renames.length > 0) {
		            description.renames = Hoek.clone(this._inner.renames);
		        }

		        return description;
		    };

		    _class.prototype.assert = function assert(ref, schema, message) {

		        ref = Cast.ref(ref);
		        Hoek.assert(ref.isContext || ref.depth > 1, 'Cannot use assertions for root level references - use direct key rules instead');
		        message = message || 'pass the assertion test';

		        try {
		            schema = Cast.schema(schema);
		        } catch (castErr) {
		            if (castErr.hasOwnProperty('path')) {
		                castErr.message = castErr.message + '(' + castErr.path + ')';
		            }

		            throw castErr;
		        }

		        var key = ref.path[ref.path.length - 1];
		        var path = ref.path.join('.');

		        return this._test('assert', { schema: schema, ref: ref }, function (value, state, options) {

		            var result = schema._validate(ref(value), null, options, value);
		            if (!result.errors) {
		                return value;
		            }

		            var localState = Hoek.merge({}, state);
		            localState.key = key;
		            localState.path = path;
		            return this.createError('object.assert', { ref: localState.path, message: message }, localState, options);
		        });
		    };

		    _class.prototype.type = function type(constructor, name) {

		        Hoek.assert(typeof constructor === 'function', 'type must be a constructor function');
		        var typeData = {
		            name: name || constructor.name,
		            ctor: constructor
		        };

		        return this._test('type', typeData, function (value, state, options) {

		            if (value instanceof constructor) {
		                return value;
		            }

		            return this.createError('object.type', { type: typeData.name }, state, options);
		        });
		    };

		    _class.prototype.ref = function ref() {

		        return this._test('ref', null, function (value, state, options) {

		            if (Ref.isRef(value)) {
		                return value;
		            }

		            return this.createError('function.ref', null, state, options);
		        });
		    };

		    return _class;
		}(Any);

		internals.safeParse = function (value) {

		    try {
		        return JSON.parse(value);
		    } catch (parseErr) {}

		    return value;
		};

		internals.renameDefaults = {
		    alias: false, // Keep old value in place
		    multiple: false, // Allow renaming multiple keys into the same target
		    override: false // Overrides an existing key
		};

		internals.groupChildren = function (children) {

		    children.sort();

		    var grouped = {};

		    for (var i = 0; i < children.length; ++i) {
		        var child = children[i];
		        Hoek.assert(typeof child === 'string', 'children must be strings');
		        var group = child.split('.')[0];
		        var childGroup = grouped[group] = grouped[group] || [];
		        childGroup.push(child.substring(group.length + 1));
		    }

		    return grouped;
		};

		internals.keysToLabels = function (schema, keys) {

		    var children = schema._inner.children;

		    if (!children) {
		        return keys;
		    }

		    var findLabel = function findLabel(key) {

		        var matchingChild = children.find(function (child) {
		            return child.key === key;
		        });
		        return matchingChild ? matchingChild.schema._getLabel(key) : key;
		    };

		    if (Array.isArray(keys)) {
		        return keys.map(findLabel);
		    }

		    return findLabel(keys);
		};

		internals.with = function (value, peers, parent, state, options) {

		    if (value === undefined) {
		        return value;
		    }

		    for (var i = 0; i < peers.length; ++i) {
		        var peer = peers[i];
		        if (!Object.prototype.hasOwnProperty.call(parent, peer) || parent[peer] === undefined) {

		            return this.createError('object.with', {
		                main: state.key,
		                mainWithLabel: internals.keysToLabels(this, state.key),
		                peer: peer,
		                peerWithLabel: internals.keysToLabels(this, peer)
		            }, state, options);
		        }
		    }

		    return value;
		};

		internals.without = function (value, peers, parent, state, options) {

		    if (value === undefined) {
		        return value;
		    }

		    for (var i = 0; i < peers.length; ++i) {
		        var peer = peers[i];
		        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {

		            return this.createError('object.without', {
		                main: state.key,
		                mainWithLabel: internals.keysToLabels(this, state.key),
		                peer: peer,
		                peerWithLabel: internals.keysToLabels(this, peer)
		            }, state, options);
		        }
		    }

		    return value;
		};

		internals.xor = function (value, peers, parent, state, options) {

		    var present = [];
		    for (var i = 0; i < peers.length; ++i) {
		        var peer = peers[i];
		        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {

		            present.push(peer);
		        }
		    }

		    if (present.length === 1) {
		        return value;
		    }

		    var context = { peers: peers, peersWithLabels: internals.keysToLabels(this, peers) };

		    if (present.length === 0) {
		        return this.createError('object.missing', context, state, options);
		    }

		    return this.createError('object.xor', context, state, options);
		};

		internals.or = function (value, peers, parent, state, options) {

		    for (var i = 0; i < peers.length; ++i) {
		        var peer = peers[i];
		        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {
		            return value;
		        }
		    }

		    return this.createError('object.missing', {
		        peers: peers,
		        peersWithLabels: internals.keysToLabels(this, peers)
		    }, state, options);
		};

		internals.and = function (value, peers, parent, state, options) {

		    var missing = [];
		    var present = [];
		    var count = peers.length;
		    for (var i = 0; i < count; ++i) {
		        var peer = peers[i];
		        if (!Object.prototype.hasOwnProperty.call(parent, peer) || parent[peer] === undefined) {

		            missing.push(peer);
		        } else {
		            present.push(peer);
		        }
		    }

		    var aon = missing.length === count || present.length === count;

		    if (!aon) {

		        return this.createError('object.and', {
		            present: present,
		            presentWithLabels: internals.keysToLabels(this, present),
		            missing: missing,
		            missingWithLabels: internals.keysToLabels(this, missing)
		        }, state, options);
		    }
		};

		internals.nand = function (value, peers, parent, state, options) {

		    var present = [];
		    for (var i = 0; i < peers.length; ++i) {
		        var peer = peers[i];
		        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {

		            present.push(peer);
		        }
		    }

		    var values = Hoek.clone(peers);
		    var main = values.splice(0, 1)[0];
		    var allPresent = present.length === peers.length;
		    return allPresent ? this.createError('object.nand', {
		        main: main,
		        mainWithLabel: internals.keysToLabels(this, main),
		        peers: values,
		        peersWithLabels: internals.keysToLabels(this, values)
		    }, state, options) : null;
		};

		module.exports = new internals.Object();

	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {};

		exports = module.exports = internals.Topo = function () {

		    this._items = [];
		    this.nodes = [];
		};

		internals.Topo.prototype.add = function (nodes, options) {
		    var _this = this;

		    options = options || {};

		    // Validate rules

		    var before = [].concat(options.before || []);
		    var after = [].concat(options.after || []);
		    var group = options.group || '?';
		    var sort = options.sort || 0; // Used for merging only

		    Hoek.assert(before.indexOf(group) === -1, 'Item cannot come before itself:', group);
		    Hoek.assert(before.indexOf('?') === -1, 'Item cannot come before unassociated items');
		    Hoek.assert(after.indexOf(group) === -1, 'Item cannot come after itself:', group);
		    Hoek.assert(after.indexOf('?') === -1, 'Item cannot come after unassociated items');

		    [].concat(nodes).forEach(function (node, i) {

		        var item = {
		            seq: _this._items.length,
		            sort: sort,
		            before: before,
		            after: after,
		            group: group,
		            node: node
		        };

		        _this._items.push(item);
		    });

		    // Insert event

		    var error = this._sort();
		    Hoek.assert(!error, 'item', group !== '?' ? 'added into group ' + group : '', 'created a dependencies error');

		    return this.nodes;
		};

		internals.Topo.prototype.merge = function (others) {

		    others = [].concat(others);
		    for (var i = 0; i < others.length; ++i) {
		        var other = others[i];
		        if (other) {
		            for (var j = 0; j < other._items.length; ++j) {
		                var item = Hoek.shallow(other._items[j]);
		                this._items.push(item);
		            }
		        }
		    }

		    // Sort items

		    this._items.sort(internals.mergeSort);
		    for (var _i = 0; _i < this._items.length; ++_i) {
		        this._items[_i].seq = _i;
		    }

		    var error = this._sort();
		    Hoek.assert(!error, 'merge created a dependencies error');

		    return this.nodes;
		};

		internals.mergeSort = function (a, b) {

		    return a.sort === b.sort ? 0 : a.sort < b.sort ? -1 : 1;
		};

		internals.Topo.prototype._sort = function () {

		    // Construct graph

		    var graph = {};
		    var graphAfters = Object.create(null); // A prototype can bungle lookups w/ false positives
		    var groups = Object.create(null);

		    for (var i = 0; i < this._items.length; ++i) {
		        var item = this._items[i];
		        var seq = item.seq; // Unique across all items
		        var group = item.group;

		        // Determine Groups

		        groups[group] = groups[group] || [];
		        groups[group].push(seq);

		        // Build intermediary graph using 'before'

		        graph[seq] = item.before;

		        // Build second intermediary graph with 'after'

		        var after = item.after;
		        for (var j = 0; j < after.length; ++j) {
		            graphAfters[after[j]] = (graphAfters[after[j]] || []).concat(seq);
		        }
		    }

		    // Expand intermediary graph

		    var graphNodes = Object.keys(graph);
		    for (var _i2 = 0; _i2 < graphNodes.length; ++_i2) {
		        var node = graphNodes[_i2];
		        var expandedGroups = [];

		        var graphNodeItems = Object.keys(graph[node]);
		        for (var _j = 0; _j < graphNodeItems.length; ++_j) {
		            var _group = graph[node][graphNodeItems[_j]];
		            groups[_group] = groups[_group] || [];

		            for (var k = 0; k < groups[_group].length; ++k) {
		                expandedGroups.push(groups[_group][k]);
		            }
		        }
		        graph[node] = expandedGroups;
		    }

		    // Merge intermediary graph using graphAfters into final graph

		    var afterNodes = Object.keys(graphAfters);
		    for (var _i3 = 0; _i3 < afterNodes.length; ++_i3) {
		        var _group2 = afterNodes[_i3];

		        if (groups[_group2]) {
		            for (var _j2 = 0; _j2 < groups[_group2].length; ++_j2) {
		                var _node = groups[_group2][_j2];
		                graph[_node] = graph[_node].concat(graphAfters[_group2]);
		            }
		        }
		    }

		    // Compile ancestors

		    var children = void 0;
		    var ancestors = {};
		    graphNodes = Object.keys(graph);
		    for (var _i4 = 0; _i4 < graphNodes.length; ++_i4) {
		        var _node2 = graphNodes[_i4];
		        children = graph[_node2];

		        for (var _j3 = 0; _j3 < children.length; ++_j3) {
		            ancestors[children[_j3]] = (ancestors[children[_j3]] || []).concat(_node2);
		        }
		    }

		    // Topo sort

		    var visited = {};
		    var sorted = [];

		    for (var _i5 = 0; _i5 < this._items.length; ++_i5) {
		        var next = _i5;

		        if (ancestors[_i5]) {
		            next = null;
		            for (var _j4 = 0; _j4 < this._items.length; ++_j4) {
		                if (visited[_j4] === true) {
		                    continue;
		                }

		                if (!ancestors[_j4]) {
		                    ancestors[_j4] = [];
		                }

		                var shouldSeeCount = ancestors[_j4].length;
		                var seenCount = 0;
		                for (var _k = 0; _k < shouldSeeCount; ++_k) {
		                    if (sorted.indexOf(ancestors[_j4][_k]) >= 0) {
		                        ++seenCount;
		                    }
		                }

		                if (seenCount === shouldSeeCount) {
		                    next = _j4;
		                    break;
		                }
		            }
		        }

		        if (next !== null) {
		            next = next.toString(); // Normalize to string TODO: replace with seq
		            visited[next] = true;
		            sorted.push(next);
		        }
		    }

		    if (sorted.length !== this._items.length) {
		        return new Error('Invalid dependencies');
		    }

		    var seqIndex = {};
		    for (var _i6 = 0; _i6 < this._items.length; ++_i6) {
		        var _item = this._items[_i6];
		        seqIndex[_item.seq] = _item;
		    }

		    var sortedNodes = [];
		    this._items = sorted.map(function (value) {

		        var sortedItem = seqIndex[value];
		        sortedNodes.push(sortedItem.node);
		        return sortedItem;
		    });

		    this.nodes = sortedNodes;
		};

	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var Joi = __webpack_require__(1);

		// Declare internals

		var internals = {};

		exports.options = Joi.object({
		    abortEarly: Joi.boolean(),
		    convert: Joi.boolean(),
		    allowUnknown: Joi.boolean(),
		    skipFunctions: Joi.boolean(),
		    stripUnknown: [Joi.boolean(), Joi.object({ arrays: Joi.boolean(), objects: Joi.boolean() }).or('arrays', 'objects')],
		    language: Joi.object(),
		    presence: Joi.string().only('required', 'optional', 'forbidden', 'ignore'),
		    raw: Joi.boolean(),
		    context: Joi.object(),
		    strip: Joi.boolean(),
		    noDefaults: Joi.boolean()
		}).strict();

	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Any = __webpack_require__(11);
		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {};

		internals.Lazy = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'lazy';
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var result = { value: value };
		        var lazy = this._flags.lazy;

		        if (!lazy) {
		            result.errors = this.createError('lazy.base', null, state, options);
		            return result;
		        }

		        var schema = lazy();

		        if (!(schema instanceof Any)) {
		            result.errors = this.createError('lazy.schema', null, state, options);
		            return result;
		        }

		        return schema._validate(value, state, options);
		    };

		    _class.prototype.set = function set(fn) {

		        Hoek.assert(typeof fn === 'function', 'You must provide a function as first argument');

		        var obj = this.clone();
		        obj._flags.lazy = fn;
		        return obj;
		    };

		    return _class;
		}(Any);

		module.exports = new internals.Lazy();

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Any = __webpack_require__(11);
		var Cast = __webpack_require__(16);
		var Ref = __webpack_require__(12);
		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {};

		internals.fastSplice = function (arr, i) {

		    var pos = i;
		    while (pos < arr.length) {
		        arr[pos++] = arr[pos];
		    }

		    --arr.length;
		};

		internals.Array = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'array';
		        _this._inner.items = [];
		        _this._inner.ordereds = [];
		        _this._inner.inclusions = [];
		        _this._inner.exclusions = [];
		        _this._inner.requireds = [];
		        _this._flags.sparse = false;
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var result = {
		            value: value
		        };

		        if (typeof value === 'string' && options.convert) {

		            internals.safeParse(value, result);
		        }

		        var isArray = Array.isArray(result.value);
		        var wasArray = isArray;
		        if (options.convert && this._flags.single && !isArray) {
		            result.value = [result.value];
		            isArray = true;
		        }

		        if (!isArray) {
		            result.errors = this.createError('array.base', null, state, options);
		            return result;
		        }

		        if (this._inner.inclusions.length || this._inner.exclusions.length || this._inner.requireds.length || this._inner.ordereds.length || !this._flags.sparse) {

		            // Clone the array so that we don't modify the original
		            if (wasArray) {
		                result.value = result.value.slice(0);
		            }

		            result.errors = this._checkItems.call(this, result.value, wasArray, state, options);

		            if (result.errors && wasArray && options.convert && this._flags.single) {

		                // Attempt a 2nd pass by putting the array inside one.
		                var previousErrors = result.errors;

		                result.value = [result.value];
		                result.errors = this._checkItems.call(this, result.value, wasArray, state, options);

		                if (result.errors) {

		                    // Restore previous errors and value since this didn't validate either.
		                    result.errors = previousErrors;
		                    result.value = result.value[0];
		                }
		            }
		        }

		        return result;
		    };

		    _class.prototype._checkItems = function _checkItems(items, wasArray, state, options) {

		        var errors = [];
		        var errored = void 0;

		        var requireds = this._inner.requireds.slice();
		        var ordereds = this._inner.ordereds.slice();
		        var inclusions = this._inner.inclusions.concat(requireds);

		        var il = items.length;
		        for (var i = 0; i < il; ++i) {
		            errored = false;
		            var item = items[i];
		            var isValid = false;
		            var key = wasArray ? i : state.key;
		            var path = wasArray ? (state.path ? state.path + '.' : '') + i : state.path;
		            var localState = { key: key, path: path, parent: state.parent, reference: state.reference };
		            var res = void 0;

		            // Sparse

		            if (!this._flags.sparse && item === undefined) {
		                errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

		                if (options.abortEarly) {
		                    return errors;
		                }

		                continue;
		            }

		            // Exclusions

		            for (var j = 0; j < this._inner.exclusions.length; ++j) {
		                res = this._inner.exclusions[j]._validate(item, localState, {}); // Not passing options to use defaults

		                if (!res.errors) {
		                    errors.push(this.createError(wasArray ? 'array.excludes' : 'array.excludesSingle', { pos: i, value: item }, { key: state.key, path: localState.path }, options));
		                    errored = true;

		                    if (options.abortEarly) {
		                        return errors;
		                    }

		                    break;
		                }
		            }

		            if (errored) {
		                continue;
		            }

		            // Ordered
		            if (this._inner.ordereds.length) {
		                if (ordereds.length > 0) {
		                    var ordered = ordereds.shift();
		                    res = ordered._validate(item, localState, options);
		                    if (!res.errors) {
		                        if (ordered._flags.strip) {
		                            internals.fastSplice(items, i);
		                            --i;
		                            --il;
		                        } else if (!this._flags.sparse && res.value === undefined) {
		                            errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

		                            if (options.abortEarly) {
		                                return errors;
		                            }

		                            continue;
		                        } else {
		                            items[i] = res.value;
		                        }
		                    } else {
		                        errors.push(this.createError('array.ordered', { pos: i, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
		                        if (options.abortEarly) {
		                            return errors;
		                        }
		                    }
		                    continue;
		                } else if (!this._inner.items.length) {
		                    errors.push(this.createError('array.orderedLength', { pos: i, limit: this._inner.ordereds.length }, { key: state.key, path: localState.path }, options));
		                    if (options.abortEarly) {
		                        return errors;
		                    }
		                    continue;
		                }
		            }

		            // Requireds

		            var requiredChecks = [];
		            var jl = requireds.length;
		            for (var _j = 0; _j < jl; ++_j) {
		                res = requiredChecks[_j] = requireds[_j]._validate(item, localState, options);
		                if (!res.errors) {
		                    items[i] = res.value;
		                    isValid = true;
		                    internals.fastSplice(requireds, _j);
		                    --_j;
		                    --jl;

		                    if (!this._flags.sparse && res.value === undefined) {
		                        errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

		                        if (options.abortEarly) {
		                            return errors;
		                        }
		                    }

		                    break;
		                }
		            }

		            if (isValid) {
		                continue;
		            }

		            // Inclusions

		            var stripUnknown = options.stripUnknown ? options.stripUnknown === true ? true : !!options.stripUnknown.arrays : false;

		            jl = inclusions.length;
		            for (var _j2 = 0; _j2 < jl; ++_j2) {
		                var inclusion = inclusions[_j2];

		                // Avoid re-running requireds that already didn't match in the previous loop
		                var previousCheck = requireds.indexOf(inclusion);
		                if (previousCheck !== -1) {
		                    res = requiredChecks[previousCheck];
		                } else {
		                    res = inclusion._validate(item, localState, options);

		                    if (!res.errors) {
		                        if (inclusion._flags.strip) {
		                            internals.fastSplice(items, i);
		                            --i;
		                            --il;
		                        } else if (!this._flags.sparse && res.value === undefined) {
		                            errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));
		                            errored = true;
		                        } else {
		                            items[i] = res.value;
		                        }
		                        isValid = true;
		                        break;
		                    }
		                }

		                // Return the actual error if only one inclusion defined
		                if (jl === 1) {
		                    if (stripUnknown) {
		                        internals.fastSplice(items, i);
		                        --i;
		                        --il;
		                        isValid = true;
		                        break;
		                    }

		                    errors.push(this.createError(wasArray ? 'array.includesOne' : 'array.includesOneSingle', { pos: i, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
		                    errored = true;

		                    if (options.abortEarly) {
		                        return errors;
		                    }

		                    break;
		                }
		            }

		            if (errored) {
		                continue;
		            }

		            if (this._inner.inclusions.length && !isValid) {
		                if (stripUnknown) {
		                    internals.fastSplice(items, i);
		                    --i;
		                    --il;
		                    continue;
		                }

		                errors.push(this.createError(wasArray ? 'array.includes' : 'array.includesSingle', { pos: i, value: item }, { key: state.key, path: localState.path }, options));

		                if (options.abortEarly) {
		                    return errors;
		                }
		            }
		        }

		        if (requireds.length) {
		            this._fillMissedErrors.call(this, errors, requireds, state, options);
		        }

		        if (ordereds.length) {
		            this._fillOrderedErrors.call(this, errors, ordereds, state, options);
		        }

		        return errors.length ? errors : null;
		    };

		    _class.prototype.describe = function describe() {

		        var description = Any.prototype.describe.call(this);

		        if (this._inner.ordereds.length) {
		            description.orderedItems = [];

		            for (var i = 0; i < this._inner.ordereds.length; ++i) {
		                description.orderedItems.push(this._inner.ordereds[i].describe());
		            }
		        }

		        if (this._inner.items.length) {
		            description.items = [];

		            for (var _i = 0; _i < this._inner.items.length; ++_i) {
		                description.items.push(this._inner.items[_i].describe());
		            }
		        }

		        return description;
		    };

		    _class.prototype.items = function items() {

		        var obj = this.clone();

		        Hoek.flatten(Array.prototype.slice.call(arguments)).forEach(function (type, index) {

		            try {
		                type = Cast.schema(type);
		            } catch (castErr) {
		                if (castErr.hasOwnProperty('path')) {
		                    castErr.path = index + '.' + castErr.path;
		                } else {
		                    castErr.path = index;
		                }
		                castErr.message = castErr.message + '(' + castErr.path + ')';
		                throw castErr;
		            }

		            obj._inner.items.push(type);

		            if (type._flags.presence === 'required') {
		                obj._inner.requireds.push(type);
		            } else if (type._flags.presence === 'forbidden') {
		                obj._inner.exclusions.push(type.optional());
		            } else {
		                obj._inner.inclusions.push(type);
		            }
		        });

		        return obj;
		    };

		    _class.prototype.ordered = function ordered() {

		        var obj = this.clone();

		        Hoek.flatten(Array.prototype.slice.call(arguments)).forEach(function (type, index) {

		            try {
		                type = Cast.schema(type);
		            } catch (castErr) {
		                if (castErr.hasOwnProperty('path')) {
		                    castErr.path = index + '.' + castErr.path;
		                } else {
		                    castErr.path = index;
		                }
		                castErr.message = castErr.message + '(' + castErr.path + ')';
		                throw castErr;
		            }
		            obj._inner.ordereds.push(type);
		        });

		        return obj;
		    };

		    _class.prototype.min = function min(limit) {

		        var isRef = Ref.isRef(limit);

		        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');

		        return this._test('min', limit, function (value, state, options) {

		            var compareTo = void 0;
		            if (isRef) {
		                compareTo = limit(state.reference || state.parent, options);

		                if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
		                    return this.createError('array.ref', { ref: limit.key }, state, options);
		                }
		            } else {
		                compareTo = limit;
		            }

		            if (value.length >= compareTo) {
		                return value;
		            }

		            return this.createError('array.min', { limit: limit, value: value }, state, options);
		        });
		    };

		    _class.prototype.max = function max(limit) {

		        var isRef = Ref.isRef(limit);

		        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');

		        return this._test('max', limit, function (value, state, options) {

		            var compareTo = void 0;
		            if (isRef) {
		                compareTo = limit(state.reference || state.parent, options);

		                if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
		                    return this.createError('array.ref', { ref: limit.key }, state, options);
		                }
		            } else {
		                compareTo = limit;
		            }

		            if (value.length <= compareTo) {
		                return value;
		            }

		            return this.createError('array.max', { limit: limit, value: value }, state, options);
		        });
		    };

		    _class.prototype.length = function length(limit) {

		        var isRef = Ref.isRef(limit);

		        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');

		        return this._test('length', limit, function (value, state, options) {

		            var compareTo = void 0;
		            if (isRef) {
		                compareTo = limit(state.reference || state.parent, options);

		                if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
		                    return this.createError('array.ref', { ref: limit.key }, state, options);
		                }
		            } else {
		                compareTo = limit;
		            }

		            if (value.length === compareTo) {
		                return value;
		            }

		            return this.createError('array.length', { limit: limit, value: value }, state, options);
		        });
		    };

		    _class.prototype.unique = function unique(comparator) {

		        Hoek.assert(comparator === undefined || typeof comparator === 'function' || typeof comparator === 'string', 'comparator must be a function or a string');

		        var settings = {};

		        if (typeof comparator === 'string') {
		            settings.path = comparator;
		        } else if (typeof comparator === 'function') {
		            settings.comparator = comparator;
		        }

		        return this._test('unique', settings, function (value, state, options) {

		            var found = {
		                string: {},
		                number: {},
		                undefined: {},
		                boolean: {},
		                object: new Map(),
		                function: new Map(),
		                custom: new Map()
		            };

		            var compare = settings.comparator || Hoek.deepEqual;

		            for (var i = 0; i < value.length; ++i) {
		                var item = settings.path ? Hoek.reach(value[i], settings.path) : value[i];
		                var records = settings.comparator ? found.custom : found[typeof item === 'undefined' ? 'undefined' : _typeof(item)];

		                // All available types are supported, so it's not possible to reach 100% coverage without ignoring this line.
		                // I still want to keep the test for future js versions with new types (eg. Symbol).
		                if ( /* $lab:coverage:off$ */records /* $lab:coverage:on$ */) {
		                        if (records instanceof Map) {
		                            var entries = records.entries();
		                            var current = void 0;
		                            while (!(current = entries.next()).done) {
		                                if (compare(current.value[0], item)) {
		                                    var localState = {
		                                        key: state.key,
		                                        path: (state.path ? state.path + '.' : '') + i,
		                                        parent: state.parent,
		                                        reference: state.reference
		                                    };

		                                    var context = {
		                                        pos: i,
		                                        value: value[i],
		                                        dupePos: current.value[1],
		                                        dupeValue: value[current.value[1]]
		                                    };

		                                    if (settings.path) {
		                                        context.path = settings.path;
		                                    }

		                                    return this.createError('array.unique', context, localState, options);
		                                }
		                            }

		                            records.set(item, i);
		                        } else {
		                            if (records[item] !== undefined) {
		                                var _localState = {
		                                    key: state.key,
		                                    path: (state.path ? state.path + '.' : '') + i,
		                                    parent: state.parent,
		                                    reference: state.reference
		                                };

		                                var _context = {
		                                    pos: i,
		                                    value: value[i],
		                                    dupePos: records[item],
		                                    dupeValue: value[records[item]]
		                                };

		                                if (settings.path) {
		                                    _context.path = settings.path;
		                                }

		                                return this.createError('array.unique', _context, _localState, options);
		                            }

		                            records[item] = i;
		                        }
		                    }
		            }

		            return value;
		        });
		    };

		    _class.prototype.sparse = function sparse(enabled) {

		        var value = enabled === undefined ? true : !!enabled;

		        if (this._flags.sparse === value) {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.sparse = value;
		        return obj;
		    };

		    _class.prototype.single = function single(enabled) {

		        var value = enabled === undefined ? true : !!enabled;

		        if (this._flags.single === value) {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.single = value;
		        return obj;
		    };

		    _class.prototype._fillMissedErrors = function _fillMissedErrors(errors, requireds, state, options) {

		        var knownMisses = [];
		        var unknownMisses = 0;
		        for (var i = 0; i < requireds.length; ++i) {
		            var label = requireds[i]._getLabel();
		            if (label) {
		                knownMisses.push(label);
		            } else {
		                ++unknownMisses;
		            }
		        }

		        if (knownMisses.length) {
		            if (unknownMisses) {
		                errors.push(this.createError('array.includesRequiredBoth', { knownMisses: knownMisses, unknownMisses: unknownMisses }, { key: state.key, path: state.path }, options));
		            } else {
		                errors.push(this.createError('array.includesRequiredKnowns', { knownMisses: knownMisses }, { key: state.key, path: state.path }, options));
		            }
		        } else {
		            errors.push(this.createError('array.includesRequiredUnknowns', { unknownMisses: unknownMisses }, { key: state.key, path: state.path }, options));
		        }
		    };

		    _class.prototype._fillOrderedErrors = function _fillOrderedErrors(errors, ordereds, state, options) {

		        var requiredOrdereds = [];

		        for (var i = 0; i < ordereds.length; ++i) {
		            var presence = Hoek.reach(ordereds[i], '_flags.presence');
		            if (presence === 'required') {
		                requiredOrdereds.push(ordereds[i]);
		            }
		        }

		        if (requiredOrdereds.length) {
		            this._fillMissedErrors.call(this, errors, requiredOrdereds, state, options);
		        }
		    };

		    return _class;
		}(Any);

		internals.safeParse = function (value, result) {

		    try {
		        var converted = JSON.parse(value);
		        if (Array.isArray(converted)) {
		            result.value = converted;
		        }
		    } catch (e) {}
		};

		module.exports = new internals.Array();

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

		// Load modules

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Any = __webpack_require__(11);
		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {};

		internals.Binary = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'binary';
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var result = {
		            value: value
		        };

		        if (typeof value === 'string' && options.convert) {

		            try {
		                result.value = new Buffer(value, this._flags.encoding);
		            } catch (e) {}
		        }

		        result.errors = Buffer.isBuffer(result.value) ? null : this.createError('binary.base', null, state, options);
		        return result;
		    };

		    _class.prototype.encoding = function encoding(_encoding) {

		        Hoek.assert(Buffer.isEncoding(_encoding), 'Invalid encoding:', _encoding);

		        if (this._flags.encoding === _encoding) {
		            return this;
		        }

		        var obj = this.clone();
		        obj._flags.encoding = _encoding;
		        return obj;
		    };

		    _class.prototype.min = function min(limit) {

		        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('min', limit, function (value, state, options) {

		            if (value.length >= limit) {
		                return value;
		            }

		            return this.createError('binary.min', { limit: limit, value: value }, state, options);
		        });
		    };

		    _class.prototype.max = function max(limit) {

		        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('max', limit, function (value, state, options) {

		            if (value.length <= limit) {
		                return value;
		            }

		            return this.createError('binary.max', { limit: limit, value: value }, state, options);
		        });
		    };

		    _class.prototype.length = function length(limit) {

		        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('length', limit, function (value, state, options) {

		            if (value.length === limit) {
		                return value;
		            }

		            return this.createError('binary.length', { limit: limit, value: value }, state, options);
		        });
		    };

		    return _class;
		}(Any);

		module.exports = new internals.Binary();
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

	/***/ },
	/* 32 */
	/***/ function(module, exports) {

		module.exports = {
			"_args": [
				[
					{
						"raw": "joi@10.6.0",
						"scope": null,
						"escapedName": "joi",
						"name": "joi",
						"rawSpec": "10.6.0",
						"spec": "10.6.0",
						"type": "version"
					},
					"/Users/jeff/projects/joi-browser"
				]
			],
			"_from": "joi@10.6.0",
			"_id": "joi@10.6.0",
			"_inCache": true,
			"_location": "/joi",
			"_nodeVersion": "6.11.0",
			"_npmOperationalInternal": {
				"host": "s3://npm-registry-packages",
				"tmp": "tmp/joi-10.6.0.tgz_1497548465053_0.7665833418723196"
			},
			"_npmUser": {
				"name": "marsup",
				"email": "nicolas@morel.io"
			},
			"_npmVersion": "5.0.3",
			"_phantomChildren": {},
			"_requested": {
				"raw": "joi@10.6.0",
				"scope": null,
				"escapedName": "joi",
				"name": "joi",
				"rawSpec": "10.6.0",
				"spec": "10.6.0",
				"type": "version"
			},
			"_requiredBy": [
				"#DEV:/"
			],
			"_resolved": "https://registry.npmjs.org/joi/-/joi-10.6.0.tgz",
			"_shasum": "52587f02d52b8b75cdb0c74f0b164a191a0e1fc2",
			"_shrinkwrap": null,
			"_spec": "joi@10.6.0",
			"_where": "/Users/jeff/projects/joi-browser",
			"bugs": {
				"url": "https://github.com/hapijs/joi/issues"
			},
			"dependencies": {
				"hoek": "4.x.x",
				"isemail": "2.x.x",
				"items": "2.x.x",
				"topo": "2.x.x"
			},
			"description": "Object schema validation",
			"devDependencies": {
				"code": "4.x.x",
				"hapitoc": "1.x.x",
				"lab": "13.x.x"
			},
			"directories": {},
			"dist": {
				"integrity": "sha512-hBF3LcqyAid+9X/pwg+eXjD2QBZI5eXnBFJYaAkH4SK3mp9QSRiiQnDYlmlz5pccMvnLcJRS4whhDOTCkmsAdQ==",
				"shasum": "52587f02d52b8b75cdb0c74f0b164a191a0e1fc2",
				"tarball": "https://registry.npmjs.org/joi/-/joi-10.6.0.tgz"
			},
			"engines": {
				"node": ">=4.0.0"
			},
			"gitHead": "069bb6c04063cba202544dacf9da3bbe21fa3074",
			"homepage": "https://github.com/hapijs/joi",
			"keywords": [
				"hapi",
				"schema",
				"validation"
			],
			"license": "BSD-3-Clause",
			"main": "lib/index.js",
			"maintainers": [
				{
					"name": "hueniverse",
					"email": "eran@hammer.io"
				},
				{
					"name": "marsup",
					"email": "nicolas@morel.io"
				},
				{
					"name": "nlf",
					"email": "quitlahok@gmail.com"
				},
				{
					"name": "wyatt",
					"email": "wpreul@gmail.com"
				}
			],
			"name": "joi",
			"optionalDependencies": {},
			"readme": "ERROR: No README data found!",
			"repository": {
				"type": "git",
				"url": "git://github.com/hapijs/joi.git"
			},
			"scripts": {
				"test": "lab -t 100 -a code -L",
				"test-cov-html": "lab -r html -o coverage.html -a code",
				"test-debug": "lab -a code",
				"toc": "hapitoc",
				"version": "npm run toc && git add API.md README.md"
			},
			"version": "10.6.0"
		};

	/***/ }
	/******/ ])
	});
	;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.3.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2018-01-20T17:24Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};

	var isFunction = function isFunction( obj ) {

	      // Support: Chrome <=57, Firefox <=52
	      // In some browsers, typeof returns "function" for HTML <object> elements
	      // (i.e., `typeof document.createElement( "object" ) === "function"`).
	      // We don't want to classify *any* DOM node as a function.
	      return typeof obj === "function" && typeof obj.nodeType !== "number";
	  };


	var isWindow = function isWindow( obj ) {
			return obj != null && obj === obj.window;
		};




		var preservedScriptAttributes = {
			type: true,
			src: true,
			noModule: true
		};

		function DOMEval( code, doc, node ) {
			doc = doc || document;

			var i,
				script = doc.createElement( "script" );

			script.text = code;
			if ( node ) {
				for ( i in preservedScriptAttributes ) {
					if ( node[ i ] ) {
						script[ i ] = node[ i ];
					}
				}
			}
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.3.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && Array.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = toType( obj );

		if ( isFunction( obj ) || isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;



	function nodeName( elem, name ) {

	  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

	};
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Filtered directly for both simple and complex selectors
		return jQuery.filter( qualifier, elements, not );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
	        if ( nodeName( elem, "iframe" ) ) {
	            return elem.contentDocument;
	        }

	        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
	        // Treat the template element as a regular one in browsers that
	        // don't support it.
	        if ( nodeName( elem, "template" ) ) {
	            elem = elem.content || elem;
	        }

	        return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && toType( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject, noValue ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[ 3 - i ][ 3 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock,

						// progress_handlers.lock
						tuples[ 0 ][ 3 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
					!remaining );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( toType( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};


	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g;

	// Used by camelCase as callback to replace()
	function fcamelCase( all, letter ) {
		return letter.toUpperCase();
	}

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (#9572)
	function camelCase( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	}
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( camelCase );
				} else {
					key = camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted, scale,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			while ( maxIterations-- ) {

				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style( elem, prop, initialInUnit + unit );
				if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;

			}

			initialInUnit = initialInUnit * 2;
			jQuery.style( elem, prop, initialInUnit + unit );

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( toType( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || Date.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
			elem.type = elem.type.slice( 5 );
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			valueIsFunction = isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( valueIsFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( valueIsFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
				"margin-top:1px;padding:0;border:0";
			div.style.cssText =
				"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
				"margin:auto;border:1px;padding:1px;" +
				"width:60%;top:1%";
			documentElement.appendChild( container ).appendChild( div );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			div.style.position = "absolute";
			scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		function roundPixelMeasures( measure ) {
			return Math.round( parseFloat( measure ) );
		}

		var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
			reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		jQuery.extend( support, {
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function() {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function() {
				computeStyleTests();
				return scrollboxSizeVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,

			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rcustomProp = /^--/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName( name ) {
		var ret = jQuery.cssProps[ name ];
		if ( !ret ) {
			ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
		}
		return ret;
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
		var i = dimension === "width" ? 1 : 0,
			extra = 0,
			delta = 0;

		// Adjustment may not be necessary
		if ( box === ( isBorderBox ? "border" : "content" ) ) {
			return 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin
			if ( box === "margin" ) {
				delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
			}

			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if ( !isBorderBox ) {

				// Add padding
				delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// For "border" or "margin", add border
				if ( box !== "padding" ) {
					delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

				// But still keep track of it otherwise
				} else {
					extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}

			// If we get here with a border-box (content + padding + border), we're seeking "content" or
			// "padding" or "margin"
			} else {

				// For "content", subtract padding
				if ( box === "content" ) {
					delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// For "content" or "padding", subtract border
				if ( box !== "margin" ) {
					delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		// Account for positive content-box scroll gutter when requested by providing computedVal
		if ( !isBorderBox && computedVal >= 0 ) {

			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max( 0, Math.ceil(
				elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
				computedVal -
				delta -
				extra -
				0.5
			) );
		}

		return delta;
	}

	function getWidthOrHeight( elem, dimension, extra ) {

		// Start with computed style
		var styles = getStyles( elem ),
			val = curCSS( elem, dimension, styles ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
			valueIsBorderBox = isBorderBox;

		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = valueIsBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ dimension ] );

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		if ( val === "auto" ||
			!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

			val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

			// offsetWidth/offsetHeight provide border-box values
			valueIsBorderBox = true;
		}

		// Normalize "" and auto
		val = parseFloat( val ) || 0;

		// Adjust for the element's box model
		return ( val +
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles,

				// Provide the current computed size to request scroll gutter calculation (gh-3589)
				val
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name );

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}

			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, dimension ) {
		jQuery.cssHooks[ dimension ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, dimension, extra );
							} ) :
							getWidthOrHeight( elem, dimension, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = getStyles( elem ),
					isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra && boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					);

				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if ( isBorderBox && support.scrollboxSize() === styles.position ) {
					subtract -= Math.ceil(
						elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
						parseFloat( styles[ dimension ] ) -
						boxModelAdjustment( elem, dimension, "border", false, styles ) -
						0.5
					);
				}

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ dimension ] = value;
					value = jQuery.css( elem, dimension );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( prefix !== "margin" ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = Date.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						result.stop.bind( result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation;
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction( easing ) && easing
		};

		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = Date.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function() {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	function classesToArray( value ) {
		if ( Array.isArray( value ) ) {
			return value;
		}
		if ( typeof value === "string" ) {
			return value.match( rnothtmlwhite ) || [];
		}
		return [];
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value,
				isValidValue = type === "string" || Array.isArray( value );

			if ( typeof stateVal === "boolean" && isValidValue ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( isValidValue ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = classesToArray( value );

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, valueIsFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			valueIsFunction = isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( valueIsFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	support.focusin = "onfocusin" in window;


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		stopPropagationCallback = function( e ) {
			e.stopPropagation();
		};

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = lastElement = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
				lastElement = cur;
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;

						if ( event.isPropagationStopped() ) {
							lastElement.addEventListener( type, stopPropagationCallback );
						}

						elem[ type ]();

						if ( event.isPropagationStopped() ) {
							lastElement.removeEventListener( type, stopPropagationCallback );
						}

						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = Date.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( Array.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && toType( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 15
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available and should be processed, append data to url
				if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var htmlIsFunction = isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.ontimeout =
										xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {

		// offset() relates an element's border box to the document origin
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var rect, win,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},

		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset, doc,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();

			} else {
				offset = this.offset();

				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while ( offsetParent &&
					( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) {

					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery( offsetParent ).offset();
					parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
					parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
				}
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {

				// Coalesce documents and windows
				var win;
				if ( isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	};

	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;

	jQuery.now = Date.now;

	jQuery.isNumeric = function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	};




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;
	} );


/***/ })
/******/ ])
});
;