(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Booking.js still needs access to jquery, so make sure its available
require('jquery')
// Pull in the module, ES2015 imports also works:
// import TimekitBooking from 'timekit-booking'
var TimekitBooking = require('timekit-booking')
// Booking.js is now available as local var TimekitBooking instead of global window.timekitBooking
var widget = new TimekitBooking();
console.log(widget);
},{"jquery":2,"timekit-booking":3}],2:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
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



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

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
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
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

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

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

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
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

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
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
	},

	now: Date.now,

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
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
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



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
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

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
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
							if ( jQuery.isFunction( this[ match ] ) ) {
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
		} else if ( jQuery.isFunction( selector ) ) {
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
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

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
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
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
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
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
									if ( jQuery.isFunction( then ) ) {

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
								jQuery.isFunction( onProgress ) ?
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
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
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

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
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
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

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
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
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
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
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
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

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
								name = jQuery.camelCase( name.slice( 5 ) );
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
	var adjusted,
		scale = 1,
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

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
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

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



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
			if ( jQuery.type( elem ) === "object" ) {

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

			get: jQuery.isFunction( hook ) ?
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
	this.timeStamp = src && src.timeStamp || jQuery.now();

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

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
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
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
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

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
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
var rmargin = ( /^margin/ );

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



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
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

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
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
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

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

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
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
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
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
			origName = jQuery.camelCase( name ),
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

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
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
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
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

	if ( !rmargin.test( prefix ) ) {
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
	return ( fxNow = jQuery.now() );
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

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
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
		name = jQuery.camelCase( index );
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
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
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
		if ( jQuery.isFunction( props ) ) {
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
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
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
		if ( jQuery.isFunction( opt.old ) ) {
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

	fxNow = jQuery.now();

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
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

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

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

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
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

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
		var hooks, ret, isFunction,
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

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
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


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

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
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

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
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
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




support.focusin = "onfocusin" in window;


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

var nonce = jQuery.now();

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

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

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
			var value = jQuery.isFunction( valueOrFunction ) ?
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

		if ( jQuery.isFunction( func ) ) {

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

			// Support: IE <=8 - 11, Edge 12 - 13
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

			// If data is available, append data to url
			if ( s.data ) {
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
		if ( jQuery.isFunction( data ) ) {
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
			if ( jQuery.isFunction( html ) ) {
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
		if ( jQuery.isFunction( html ) ) {
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
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
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
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

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
				errorCallback = xhr.onerror = callback( "error" );

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
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
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
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
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
	if ( jQuery.isFunction( params ) ) {

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

		if ( jQuery.isFunction( options ) ) {

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
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
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

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
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
			if ( jQuery.isWindow( elem ) ) {
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

				if ( jQuery.isWindow( elem ) ) {

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

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
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

},{}],3:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?exports.TimekitBooking=t(require("jquery")):e.TimekitBooking=t(e.jQuery)}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(){var e,t,i,u,d,h=a.newInstance(),f={},p=function(t){var n=t.targetEl||f.targetEl||c.primary.targetEl;if(e=r(n),0===e.length)throw R("No target DOM element was found ("+n+")");e.addClass("bookingjs"),e.children(":not(script)").remove()},g=function(){h.configure(f.timekitConfig)},m=function(){h.setUser(f.email,f.apiToken)},v=function(){var e={};f.timekitFindTime.calendar_ids||f.timekitFindTime.user_ids||(e.emails=[f.email]),r.extend(e,f.timekitFindTime),l.doCallback("findTimeStarted",f,e),h.findTime(e).then(function(e){l.doCallback("findTimeSuccessful",f,e),z(),e.data.length>0&&E(e.data)}).catch(function(e){l.doCallback("findTimeFailed",f,e),z(),R(["An error with Timekit FindTime occured",e])})},b=function(){var e={url:"/findtime/team",method:"post",data:f.timekitFindTimeTeam};r.each(f.timekitFindTimeTeam.users,function(e,t){r.extend(t,f.timekitFindTime),t.calendar_ids||t.user_ids||(t.emails=[t._email])}),l.doCallback("findTimeTeamStarted",f,e),h.makeRequest(e).then(function(e){l.doCallback("findTimeTeamSuccessful",f,e),z(),e.data.length>0&&E(e.data)}).catch(function(e){l.doCallback("findTimeTeamFailed",f,e),z(),R(["An error with Timekit FindTimeTeam occured",e])})},y=function(){l.doCallback("GetBookingSlotsStarted",f);var e={url:"/bookings/groups",method:"get"};f.widgetId&&(e.params={search:"widget.id:"+f.widgetId}),h.makeRequest(e).then(function(e){var t=e.data.map(function(e){return{title:e.attributes.event_info.what,start:e.attributes.event_info.start,end:e.attributes.event_info.end,booking:e}});l.doCallback("getBookingSlotsSuccessful",f,e),z(),t.length>0&&E(t)}).catch(function(e){l.doCallback("getBookingSlotsFailed",f,e),z(),R(["An error with Timekit GetBookings occured",e])})},w=function(){M(),t.fullCalendar("removeEventSources"),"group_customer"===f.bookingGraph||"group_customer_payment"===f.bookingGraph?y():f.timekitFindTimeTeam?b():v()},k=function(e){t.fullCalendar("gotoDate",e);var n=s(e).format("H");S(n)},S=function(e){if("agendaWeek"===t.fullCalendar("getView").name){var n=t.fullCalendar("option","slotDuration"),i=30;n&&(i=n.slice(3,5));var o=t.find(".fc-slats .fc-minor"),a=r(o[0]).height()*(60/i),l=0;if(f.fullCalendar.minTime){var c=s(f.fullCalendar.minTime,"HH:mm:ss").format("H");l=a*c}var u=a*e-l,d=t.find(".fc-scroller"),h=d.height(),p=d.scrollTop(),g=d.find(".fc-time-grid").height();u>p&&u<p+h||(u>g-h&&(u=g-h),d.animate({scrollTop:u}))}},A=function(){var t=s().utcOffset()/60,i=n(61),a=n(11),c=r(a.render({timezoneIcon:i,loadingText:f.localization.strings.timezoneHelperLoading,loading:!0}));e.addClass("has-timezonehelper"),e.append(c);var u={email:f.email};l.doCallback("getUserTimezoneStarted",f,u),h.getUserTimezone(u).then(function(e){l.doCallback("getUserTimezoneSuccessful",f,e);var a=e.data.utc_offset,s=t-a,u=Math.abs(t-a),d=s>0?"ahead of":"behind",h=n(11),p=r(h.render({timezoneIcon:i,timezoneDifference:0!==u,timezoneDifferent:o.sprintf(f.localization.strings.timezoneHelperDifferent,u,d,f.name),timezoneSame:o.sprintf(f.localization.strings.timezoneHelperSame,f.name)}));c.replaceWith(p)}).catch(function(e){l.doCallback("getUserTimezoneFailed",f,e),l.logError(["An error with Timekit getUserTimezone occured",e])})},x=function(){var n=D(f.fullCalendar.defaultView),i={height:n.height,eventClick:T,windowResize:function(){var e=D();t.fullCalendar("changeView",e.view),t.fullCalendar("option","height",e.height)}};r.extend(!0,i,f.fullCalendar),i.defaultView=n.view,t=r('<div class="bookingjs-calendar empty-calendar">'),e.append(t),t.fullCalendar(i),l.doCallback("fullCalendarInitialized",f)},T=function(e){f.disableConfirmPage?(r(".fc-event-clicked").removeClass("fc-event-clicked"),r(this).addClass("fc-event-clicked"),l.doCallback("clickTimeslot",f,e)):H(e)},D=function(n){n=n||t.fullCalendar("getView").name;var i=f.fullCalendar.defaultView,r=430;return e.width()<480?(r=390,e.addClass("is-small"),f.avatar&&(r-=15),"agendaWeek"!==n&&"basicDay"!==n||(i="basicDay")):e.removeClass("is-small"),f.bookingFields.comment.enabled&&(r+=100),f.bookingFields.phone.enabled&&(r+=64),f.bookingFields.voip.enabled&&(r+=64),f.bookingFields.location.enabled&&(r+=64),f.localization.showTimezoneHelper||(r+=33),{height:r,view:i}},E=function(e){var n=s(e[0].start),i=s(e[0].end),r=i.diff(n,"minutes");r<=90&&t.fullCalendar("option","slotDuration","00:15:00"),t.fullCalendar("addEventSource",{events:e}),t.removeClass("empty-calendar"),f.goToFirstEvent&&k(e[0].start)},_=function(){var t=n(49),i=r(t.render({image:f.avatar}));e.addClass("has-avatar"),e.append(i)},C=function(){var t=n(50),i=r(t.render({name:f.name}));e.addClass("has-displayname"),e.append(i)},M=function(){l.doCallback("showLoadingScreen",f);var t=n(47);u=r(t.render({loadingIcon:n(12)})),e.append(u)},z=function(){l.doCallback("hideLoadingScreen",f),u.removeClass("show"),setTimeout(function(){u.remove()},500)},R=function(t){if(d)return t;if(l.doCallback("errorTriggered",t),l.logError(t),!e)return t;var i=t,o=null;l.isArray(t)&&(i=t[0],o=t[1].data?JSON.stringify(t[1].data.errors||t[1].data.error||t[1].data):JSON.stringify(t[1]));var a=n(46);return d=r(a.render({errorWarningIcon:n(59),message:i,context:o})),e.append(d),t},H=function(t){l.doCallback("showBookingPage",f,t);var a=n(44),c=n(45),u=f.localization.bookingDateFormat||s.localeData().longDateFormat("LL"),d=f.localization.bookingTimeFormat||s.localeData().longDateFormat("LT");i=r(c.render({chosenDate:s(t.start).format(u),chosenTime:s(t.start).format(d)+" - "+s(t.end).format(d),closeIcon:n(57),checkmarkIcon:n(56),loadingIcon:n(12),errorIcon:n(58),submitText:f.localization.strings.submitText,successMessageTitle:f.localization.strings.successMessageTitle,successMessageBody:o.sprintf(f.localization.strings.successMessageBody,'<span class="booked-email"></span>'),fields:f.bookingFields},{formFields:a}));var h=i.children(".bookingjs-form");i.children(".bookingjs-bookpage-close").click(function(e){e.preventDefault();var t=r(h).hasClass("success");t&&w(),L()}),t.users&&l.logDebug(["Available users for chosen timeslot:",t.users],f),h.find(".bookingjs-form-input").on("input",function(){var e=r(this).closest(".bookingjs-form-field");this.value?e.addClass("bookingjs-form-field--dirty"):e.removeClass("bookingjs-form-field--dirty")}),h.submit(function(e){P(this,e,t)}),f.showCredits&&I(i),r(document).on("keyup",function(e){27===e.keyCode&&L()}),e.append(i),setTimeout(function(){i.addClass("show")},100)},L=function(){l.doCallback("closeBookingPage",f),i.removeClass("show"),setTimeout(function(){i.remove()},200),r(document).off("keyup")},P=function(e,t,n){t.preventDefault();var i=r(e);if(i.hasClass("success"))return w(),void L();if(i.hasClass("loading")||i.hasClass("error")||!t.target.checkValidity()){var o=i.find(".bookingjs-form-button");return o.addClass("button-shake"),void setTimeout(function(){o.removeClass("button-shake")},500)}var a={};r.each(i.serializeArray(),function(e,t){a[t.name]=t.value}),i.addClass("loading"),l.doCallback("submitBookingForm",f,a),O(a,n).then(function(e){i.find(".booked-email").html(a.email),i.removeClass("loading").addClass("success")}).catch(function(e){j(i)})},j=function(e){var t=e.find(".bookingjs-form-button");t.addClass("button-shake"),setTimeout(function(){t.removeClass("button-shake")},500),e.removeClass("loading").addClass("error"),setTimeout(function(){e.removeClass("error")},2e3)},O=function(e,t){var n={event:{start:t.start.format(),end:t.end.format(),what:f.name+" x "+e.name,where:"TBD",description:"",calendar_id:f.calendar,participants:[e.email]},customer:{name:e.name,email:e.email,timezone:s.tz.guess()}};if(f.bookingFields.location.enabled&&(n.event.where=e.location),f.bookingFields.comment.enabled&&(n.event.description+=f.bookingFields.comment.placeholder+": "+e.comment+"\n"),f.bookingFields.phone.enabled&&(n.customer.phone=e.phone,n.event.description+=f.bookingFields.phone.placeholder+": "+e.phone+"\n"),f.bookingFields.voip.enabled&&(n.customer.voip=e.voip,n.event.description+=f.bookingFields.voip.placeholder+": "+e.voip+"\n"),r.extend(!0,n,f.timekitCreateBooking),"group_customer"!==f.bookingGraph&&"group_customer_payment"!==f.bookingGraph||(delete n.event,n.related={owner_booking_id:t.booking.id}),t.users){var i=t.users[0],o=r.grep(f.timekitFindTimeTeam.users,function(e){return i.email===e._email});if(o.length<1||!o[0]._calendar)throw R(["Encountered an error when picking designated team user to receive booking",i,f.timekitFindTimeTeam.users]);h=h.asUser(i.email,i.token),n.event.calendar_id=o[0]._calendar,l.logDebug(["Creating booking for user:",i],f)}!t.users&&f.widgetId&&(n.widget_id=f.widgetId),l.doCallback("createBookingStarted",f,n);var a={"Timekit-OutputTimestampFormat":"Y-m-d "+f.localization.emailTimeFormat+" (P e)"},c=h.include("attributes","event","user").headers(a).createBooking(n);return c.then(function(e){l.doCallback("createBookingSuccessful",f,e)}).catch(function(e){l.doCallback("createBookingFailed",f,e),R(["An error with Timekit CreateBooking occured",e])}),c},I=function(e){var t="widget",i=window.location.hostname.replace(/\./g,"-");f.widgetId&&(t="embedded-widget"),f.widgetSlug&&(t="hosted-widget");var o=n(48),a=n(60),s=r(o.render({timekitLogo:a,campaignName:t,campaignSource:i}));e.append(s)},N=function(e){return r.extend(!0,{},c.primary,e)},F=function(e,t,n){var i=c.presets[t][n];return i?r.extend(!0,{},i,e):e},B=function(e){if(void 0===e||"object"!=typeof e||r.isEmptyObject(e))throw R("No configuration was supplied or found. Please supply a config object upon library initialization");var t=N(e);if(e.app&&(t.timekitConfig.app=e.app),t=F(t,"timeDateFormat",t.localization.timeDateFormat),t=F(t,"bookingGraph",t.bookingGraph),t=F(t,"availabilityView",t.availabilityView),!t.app&&!t.timekitConfig.app)throw R('A required config setting ("app") was missing');if(!t.email)throw R('A required config setting ("email") was missing');if(!t.apiToken)throw R('A required config setting ("apiToken") was missing');if(!t.calendar&&"group_customer"!==t.bookingGraph&&"group_customer_payment"!==t.bookingGraph&&!t.timekitFindTimeTeam)throw R('A required config setting ("calendar") was missing');return f=t,l.logDebug(["Final config:",f],f),l.logDebug(["Version:",Y()],f),f},G=function(){return f},Y=function(){return"1.18.1"},W=function(){return l.doCallback("renderStarted",f),g(),m(),x(),w(),f.localization.showTimezoneHelper&&A(),f.avatar&&_(),f.name&&C(),l.doCallback("renderCompleted",f),this},q=function(e){l.logDebug(["Supplied config:",e],e);try{if(p(e||{}),!e||!e.widgetId&&!e.widgetSlug||e.disableRemoteLoad)return U(e)}catch(e){return this}return V(e).then(function(t){var n=t.data.config;t.data.id&&(n.widgetId=t.data.id);var i=r.extend(!0,{},n,e);l.logDebug(["Remote config:",n],i),U(i)}).catch(function(){R("The widget could not be found, please double-check your widgetId/widgetSlug")}),this},V=function(e){if(f=N(e),g(),e.widgetId)return h.getEmbedWidget({id:e.widgetId});if(e.widgetSlug)return h.getHostedWidget({slug:e.widgetSlug});throw R("No widget configuration, widgetSlug or widgetId found")},U=function(e){return B(e),W()},Z=function(){return p({}),f={},this},X=function(){if(void 0!==t.fullCalendar)return t.fullCalendar.apply(t,arguments)};return{setConfig:B,getConfig:G,getVersion:Y,render:W,init:q,destroy:Z,timekitCreateBooking:O,fullCalendar:X,timekitSdk:h}}/*!
	 * Booking.js
	 * http://timekit.io
	 *
	 * Copyright 2015 Timekit, Inc.
	 * Booking.js is freely distributable under the MIT license.
	 *
	 */
var r=n(14),o=n(51),a=n(62);window.fullcalendar=n(38);var s=window.moment=n(5);n(42),n(52);var l=n(65),c=n(64);n(53),n(55),n(54);var u=window.timekitBookingConfig;window&&u&&u.autoload!==!1?r(window).load(function(){var t=new i;t.init(u),e.exports=t}):e.exports=i},function(e,t){"use strict";function n(e){return"[object Array]"===w.call(e)}function i(e){return"[object ArrayBuffer]"===w.call(e)}function r(e){return"undefined"!=typeof FormData&&e instanceof FormData}function o(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function s(e){return"number"==typeof e}function l(e){return"undefined"==typeof e}function c(e){return null!==e&&"object"==typeof e}function u(e){return"[object Date]"===w.call(e)}function d(e){return"[object File]"===w.call(e)}function h(e){return"[object Blob]"===w.call(e)}function f(e){return"[object Function]"===w.call(e)}function p(e){return c(e)&&f(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function m(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function b(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else for(var o in e)e.hasOwnProperty(o)&&t.call(null,e[o],o,e)}function y(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=y(t[n],e):t[n]=e}for(var t={},n=0,i=arguments.length;n<i;n++)b(arguments[n],e);return t}var w=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:i,isFormData:r,isArrayBufferView:o,isString:a,isNumber:s,isObject:c,isUndefined:l,isDate:u,isFile:d,isBlob:h,isFunction:f,isStream:p,isURLSearchParams:g,isStandardBrowserEnv:v,forEach:b,merge:y,trim:m}},function(e,t,n){var i=n(39);i.Template=n(40).Template,i.template=i.Template,e.exports=i},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){e.exports=n(37).Promise},function(e,t,n){(function(e){!function(t,n){e.exports=n()}(this,function(){"use strict";function t(){return ki.apply(null,arguments)}function i(e){ki=e}function r(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function o(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function a(e){var t;for(t in e)return!1;return!0}function s(e){return void 0===e}function l(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function c(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function u(e,t){var n,i=[];for(n=0;n<e.length;++n)i.push(t(e[n],n));return i}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function h(e,t){for(var n in t)d(t,n)&&(e[n]=t[n]);return d(t,"toString")&&(e.toString=t.toString),d(t,"valueOf")&&(e.valueOf=t.valueOf),e}function f(e,t,n,i){return wt(e,t,n,i,!0).utc()}function p(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function g(e){return null==e._pf&&(e._pf=p()),e._pf}function m(e){if(null==e._isValid){var t=g(e),n=Ai.call(t.parsedDateParts,function(e){return null!=e}),i=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(i=i&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return i;e._isValid=i}return e._isValid}function v(e){var t=f(NaN);return null!=e?h(g(t),e):g(t).userInvalidated=!0,t}function b(e,t){var n,i,r;if(s(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),s(t._i)||(e._i=t._i),s(t._f)||(e._f=t._f),s(t._l)||(e._l=t._l),s(t._strict)||(e._strict=t._strict),s(t._tzm)||(e._tzm=t._tzm),s(t._isUTC)||(e._isUTC=t._isUTC),s(t._offset)||(e._offset=t._offset),s(t._pf)||(e._pf=g(t)),s(t._locale)||(e._locale=t._locale),xi.length>0)for(n=0;n<xi.length;n++)i=xi[n],r=t[i],s(r)||(e[i]=r);return e}function y(e){b(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Ti===!1&&(Ti=!0,t.updateOffset(this),Ti=!1)}function w(e){return e instanceof y||null!=e&&null!=e._isAMomentObject}function k(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function S(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=k(t)),n}function A(e,t,n){var i,r=Math.min(e.length,t.length),o=Math.abs(e.length-t.length),a=0;for(i=0;i<r;i++)(n&&e[i]!==t[i]||!n&&S(e[i])!==S(t[i]))&&a++;return a+o}function x(e){t.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function T(e,n){var i=!0;return h(function(){if(null!=t.deprecationHandler&&t.deprecationHandler(null,e),i){for(var r,o=[],a=0;a<arguments.length;a++){if(r="","object"==typeof arguments[a]){r+="\n["+a+"] ";for(var s in arguments[0])r+=s+": "+arguments[0][s]+", ";r=r.slice(0,-2)}else r=arguments[a];o.push(r)}x(e+"\nArguments: "+Array.prototype.slice.call(o).join("")+"\n"+(new Error).stack),i=!1}return n.apply(this,arguments)},n)}function D(e,n){null!=t.deprecationHandler&&t.deprecationHandler(e,n),Di[e]||(x(n),Di[e]=!0)}function E(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function _(e){var t,n;for(n in e)t=e[n],E(t)?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function C(e,t){var n,i=h({},e);for(n in t)d(t,n)&&(o(e[n])&&o(t[n])?(i[n]={},h(i[n],e[n]),h(i[n],t[n])):null!=t[n]?i[n]=t[n]:delete i[n]);for(n in e)d(e,n)&&!d(t,n)&&o(e[n])&&(i[n]=h({},i[n]));return i}function M(e){null!=e&&this.set(e)}function z(e,t,n){var i=this._calendar[e]||this._calendar.sameElse;return E(i)?i.call(t,n):i}function R(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function H(){return this._invalidDate}function L(e){return this._ordinal.replace("%d",e)}function P(e,t,n,i){var r=this._relativeTime[n];return E(r)?r(e,t,n,i):r.replace(/%d/i,e)}function j(e,t){var n=this._relativeTime[e>0?"future":"past"];return E(n)?n(t):n.replace(/%s/i,t)}function O(e,t){var n=e.toLowerCase();ji[n]=ji[n+"s"]=ji[t]=e}function I(e){return"string"==typeof e?ji[e]||ji[e.toLowerCase()]:void 0}function N(e){var t,n,i={};for(n in e)d(e,n)&&(t=I(n),t&&(i[t]=e[n]));return i}function F(e,t){Oi[e]=t}function B(e){var t=[];for(var n in e)t.push({unit:n,priority:Oi[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}function G(e,n){return function(i){return null!=i?(W(this,e,i),t.updateOffset(this,n),this):Y(this,e)}}function Y(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function W(e,t,n){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+t](n)}function q(e){return e=I(e),E(this[e])?this[e]():this}function V(e,t){if("object"==typeof e){e=N(e);for(var n=B(e),i=0;i<n.length;i++)this[n[i].unit](e[n[i].unit])}else if(e=I(e),E(this[e]))return this[e](t);return this}function U(e,t,n){var i=""+Math.abs(e),r=t-i.length,o=e>=0;return(o?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+i}function Z(e,t,n,i){var r=i;"string"==typeof i&&(r=function(){return this[i]()}),e&&(Bi[e]=r),t&&(Bi[t[0]]=function(){return U(r.apply(this,arguments),t[1],t[2])}),n&&(Bi[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),e)})}function X(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function K(e){var t,n,i=e.match(Ii);for(t=0,n=i.length;t<n;t++)Bi[i[t]]?i[t]=Bi[i[t]]:i[t]=X(i[t]);return function(t){var r,o="";for(r=0;r<n;r++)o+=E(i[r])?i[r].call(t,e):i[r];return o}}function J(e,t){return e.isValid()?(t=$(t,e.localeData()),Fi[t]=Fi[t]||K(t),Fi[t](e)):e.localeData().invalidDate()}function $(e,t){function n(e){return t.longDateFormat(e)||e}var i=5;for(Ni.lastIndex=0;i>=0&&Ni.test(e);)e=e.replace(Ni,n),Ni.lastIndex=0,i-=1;return e}function Q(e,t,n){or[e]=E(t)?t:function(e,i){return e&&n?n:t}}function ee(e,t){return d(or,e)?or[e](t._strict,t._locale):new RegExp(te(e))}function te(e){return ne(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,i,r){return t||n||i||r}))}function ne(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ie(e,t){var n,i=t;for("string"==typeof e&&(e=[e]),l(t)&&(i=function(e,n){n[t]=S(e)}),n=0;n<e.length;n++)ar[e[n]]=i}function re(e,t){ie(e,function(e,n,i,r){i._w=i._w||{},t(e,i._w,i,r)})}function oe(e,t,n){null!=t&&d(ar,e)&&ar[e](t,n._a,n,e)}function ae(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function se(e,t){return e?r(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||vr).test(t)?"format":"standalone"][e.month()]:r(this._months)?this._months:this._months.standalone}function le(e,t){return e?r(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[vr.test(t)?"format":"standalone"][e.month()]:r(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ce(e,t,n){var i,r,o,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)o=f([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(o,"").toLocaleLowerCase();return n?"MMM"===t?(r=mr.call(this._shortMonthsParse,a),r!==-1?r:null):(r=mr.call(this._longMonthsParse,a),r!==-1?r:null):"MMM"===t?(r=mr.call(this._shortMonthsParse,a),r!==-1?r:(r=mr.call(this._longMonthsParse,a),r!==-1?r:null)):(r=mr.call(this._longMonthsParse,a),r!==-1?r:(r=mr.call(this._shortMonthsParse,a),r!==-1?r:null))}function ue(e,t,n){var i,r,o;if(this._monthsParseExact)return ce.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(r=f([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(o="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[i]=new RegExp(o.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[i].test(e))return i;if(n&&"MMM"===t&&this._shortMonthsParse[i].test(e))return i;if(!n&&this._monthsParse[i].test(e))return i}}function de(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=S(t);else if(t=e.localeData().monthsParse(t),!l(t))return e;return n=Math.min(e.date(),ae(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function he(e){return null!=e?(de(this,e),t.updateOffset(this,!0),this):Y(this,"Month")}function fe(){return ae(this.year(),this.month())}function pe(e){return this._monthsParseExact?(d(this,"_monthsRegex")||me.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=wr),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ge(e){return this._monthsParseExact?(d(this,"_monthsRegex")||me.call(this),e?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=kr),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function me(){function e(e,t){return t.length-e.length}var t,n,i=[],r=[],o=[];for(t=0;t<12;t++)n=f([2e3,t]),i.push(this.monthsShort(n,"")),r.push(this.months(n,"")),o.push(this.months(n,"")),o.push(this.monthsShort(n,""));for(i.sort(e),r.sort(e),o.sort(e),t=0;t<12;t++)i[t]=ne(i[t]),r[t]=ne(r[t]);for(t=0;t<24;t++)o[t]=ne(o[t]);this._monthsRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function ve(e){return be(e)?366:365}function be(e){return e%4===0&&e%100!==0||e%400===0}function ye(){return be(this.year())}function we(e,t,n,i,r,o,a){var s=new Date(e,t,n,i,r,o,a);return e<100&&e>=0&&isFinite(s.getFullYear())&&s.setFullYear(e),s}function ke(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Se(e,t,n){var i=7+t-n,r=(7+ke(e,0,i).getUTCDay()-t)%7;return-r+i-1}function Ae(e,t,n,i,r){var o,a,s=(7+n-i)%7,l=Se(e,i,r),c=1+7*(t-1)+s+l;return c<=0?(o=e-1,a=ve(o)+c):c>ve(e)?(o=e+1,a=c-ve(e)):(o=e,a=c),{year:o,dayOfYear:a}}function xe(e,t,n){var i,r,o=Se(e.year(),t,n),a=Math.floor((e.dayOfYear()-o-1)/7)+1;return a<1?(r=e.year()-1,i=a+Te(r,t,n)):a>Te(e.year(),t,n)?(i=a-Te(e.year(),t,n),r=e.year()+1):(r=e.year(),i=a),{week:i,year:r}}function Te(e,t,n){var i=Se(e,t,n),r=Se(e+1,t,n);return(ve(e)-i+r)/7}function De(e){return xe(e,this._week.dow,this._week.doy).week}function Ee(){return this._week.dow}function _e(){return this._week.doy}function Ce(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function Me(e){var t=xe(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function ze(e,t){return"string"!=typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function Re(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function He(e,t){return e?r(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:r(this._weekdays)?this._weekdays:this._weekdays.standalone}function Le(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Pe(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin}function je(e,t,n){var i,r,o,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)o=f([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(o,"").toLocaleLowerCase();return n?"dddd"===t?(r=mr.call(this._weekdaysParse,a),r!==-1?r:null):"ddd"===t?(r=mr.call(this._shortWeekdaysParse,a),r!==-1?r:null):(r=mr.call(this._minWeekdaysParse,a),r!==-1?r:null):"dddd"===t?(r=mr.call(this._weekdaysParse,a),r!==-1?r:(r=mr.call(this._shortWeekdaysParse,a),r!==-1?r:(r=mr.call(this._minWeekdaysParse,a),r!==-1?r:null))):"ddd"===t?(r=mr.call(this._shortWeekdaysParse,a),r!==-1?r:(r=mr.call(this._weekdaysParse,a),r!==-1?r:(r=mr.call(this._minWeekdaysParse,a),r!==-1?r:null))):(r=mr.call(this._minWeekdaysParse,a),r!==-1?r:(r=mr.call(this._weekdaysParse,a),r!==-1?r:(r=mr.call(this._shortWeekdaysParse,a),r!==-1?r:null)))}function Oe(e,t,n){var i,r,o;if(this._weekdaysParseExact)return je.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(r=f([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(r,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(r,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(r,"").replace(".",".?")+"$","i")),this._weekdaysParse[i]||(o="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[i]=new RegExp(o.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[i].test(e))return i;if(n&&"ddd"===t&&this._shortWeekdaysParse[i].test(e))return i;if(n&&"dd"===t&&this._minWeekdaysParse[i].test(e))return i;if(!n&&this._weekdaysParse[i].test(e))return i}}function Ie(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=ze(e,this.localeData()),this.add(e-t,"d")):t}function Ne(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function Fe(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=Re(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function Be(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||We.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=Er),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ge(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||We.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=_r),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ye(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||We.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Cr),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function We(){function e(e,t){return t.length-e.length}var t,n,i,r,o,a=[],s=[],l=[],c=[];for(t=0;t<7;t++)n=f([2e3,1]).day(t),i=this.weekdaysMin(n,""),r=this.weekdaysShort(n,""),o=this.weekdays(n,""),a.push(i),s.push(r),l.push(o),c.push(i),c.push(r),c.push(o);for(a.sort(e),s.sort(e),l.sort(e),c.sort(e),t=0;t<7;t++)s[t]=ne(s[t]),l[t]=ne(l[t]),c[t]=ne(c[t]);this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function qe(){return this.hours()%12||12}function Ve(){return this.hours()||24}function Ue(e,t){Z(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Ze(e,t){return t._meridiemParse}function Xe(e){return"p"===(e+"").toLowerCase().charAt(0)}function Ke(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}function Je(e){return e?e.toLowerCase().replace("_","-"):e}function $e(e){for(var t,n,i,r,o=0;o<e.length;){for(r=Je(e[o]).split("-"),t=r.length,n=Je(e[o+1]),n=n?n.split("-"):null;t>0;){if(i=Qe(r.slice(0,t).join("-")))return i;if(n&&n.length>=t&&A(r,n,!0)>=t-1)break;t--}o++}return null}function Qe(t){var i=null;if(!Lr[t]&&"undefined"!=typeof e&&e&&e.exports)try{i=Mr._abbr,n(43)("./"+t),et(i)}catch(e){}return Lr[t]}function et(e,t){var n;return e&&(n=s(t)?it(e):tt(e,t),n&&(Mr=n)),Mr._abbr}function tt(e,t){if(null!==t){var n=Hr;if(t.abbr=e,null!=Lr[e])D("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Lr[e]._config;else if(null!=t.parentLocale){if(null==Lr[t.parentLocale])return Pr[t.parentLocale]||(Pr[t.parentLocale]=[]),Pr[t.parentLocale].push({name:e,config:t}),null;n=Lr[t.parentLocale]._config}return Lr[e]=new M(C(n,t)),Pr[e]&&Pr[e].forEach(function(e){tt(e.name,e.config)}),et(e),Lr[e]}return delete Lr[e],null}function nt(e,t){if(null!=t){var n,i=Hr;null!=Lr[e]&&(i=Lr[e]._config),t=C(i,t),n=new M(t),n.parentLocale=Lr[e],Lr[e]=n,et(e)}else null!=Lr[e]&&(null!=Lr[e].parentLocale?Lr[e]=Lr[e].parentLocale:null!=Lr[e]&&delete Lr[e]);return Lr[e]}function it(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Mr;if(!r(e)){if(t=Qe(e))return t;e=[e]}return $e(e)}function rt(){return Ci(Lr)}function ot(e){var t,n=e._a;return n&&g(e).overflow===-2&&(t=n[lr]<0||n[lr]>11?lr:n[cr]<1||n[cr]>ae(n[sr],n[lr])?cr:n[ur]<0||n[ur]>24||24===n[ur]&&(0!==n[dr]||0!==n[hr]||0!==n[fr])?ur:n[dr]<0||n[dr]>59?dr:n[hr]<0||n[hr]>59?hr:n[fr]<0||n[fr]>999?fr:-1,g(e)._overflowDayOfYear&&(t<sr||t>cr)&&(t=cr),g(e)._overflowWeeks&&t===-1&&(t=pr),g(e)._overflowWeekday&&t===-1&&(t=gr),g(e).overflow=t),e}function at(e){var t,n,i,r,o,a,s=e._i,l=jr.exec(s)||Or.exec(s);if(l){for(g(e).iso=!0,t=0,n=Nr.length;t<n;t++)if(Nr[t][1].exec(l[1])){r=Nr[t][0],i=Nr[t][2]!==!1;break}if(null==r)return void(e._isValid=!1);if(l[3]){for(t=0,n=Fr.length;t<n;t++)if(Fr[t][1].exec(l[3])){o=(l[2]||" ")+Fr[t][0];break}if(null==o)return void(e._isValid=!1)}if(!i&&null!=o)return void(e._isValid=!1);if(l[4]){if(!Ir.exec(l[4]))return void(e._isValid=!1);a="Z"}e._f=r+(o||"")+(a||""),ft(e)}else e._isValid=!1}function st(e){var t,n,i,r,o,a,s,l,c={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},u="YXWVUTSRQPONZABCDEFGHIKLM";if(t=e._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),n=Gr.exec(t)){if(i=n[1]?"ddd"+(5===n[1].length?", ":" "):"",r="D MMM "+(n[2].length>10?"YYYY ":"YY "),o="HH:mm"+(n[4]?":ss":""),n[1]){var d=new Date(n[2]),h=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d.getDay()];if(n[1].substr(0,3)!==h)return g(e).weekdayMismatch=!0,void(e._isValid=!1)}switch(n[5].length){case 2:0===l?s=" +0000":(l=u.indexOf(n[5][1].toUpperCase())-12,s=(l<0?" -":" +")+(""+l).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:s=c[n[5]];break;default:s=c[" GMT"]}n[5]=s,e._i=n.splice(1).join(""),a=" ZZ",e._f=i+r+o+a,ft(e),g(e).rfc2822=!0}else e._isValid=!1}function lt(e){var n=Br.exec(e._i);return null!==n?void(e._d=new Date(+n[1])):(at(e),void(e._isValid===!1&&(delete e._isValid,st(e),e._isValid===!1&&(delete e._isValid,t.createFromInputFallback(e)))))}function ct(e,t,n){return null!=e?e:null!=t?t:n}function ut(e){var n=new Date(t.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function dt(e){var t,n,i,r,o=[];if(!e._d){for(i=ut(e),e._w&&null==e._a[cr]&&null==e._a[lr]&&ht(e),null!=e._dayOfYear&&(r=ct(e._a[sr],i[sr]),(e._dayOfYear>ve(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=ke(r,0,e._dayOfYear),e._a[lr]=n.getUTCMonth(),e._a[cr]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=i[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ur]&&0===e._a[dr]&&0===e._a[hr]&&0===e._a[fr]&&(e._nextDay=!0,e._a[ur]=0),e._d=(e._useUTC?ke:we).apply(null,o),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ur]=24)}}function ht(e){var t,n,i,r,o,a,s,l;if(t=e._w,null!=t.GG||null!=t.W||null!=t.E)o=1,a=4,n=ct(t.GG,e._a[sr],xe(kt(),1,4).year),i=ct(t.W,1),r=ct(t.E,1),(r<1||r>7)&&(l=!0);else{o=e._locale._week.dow,a=e._locale._week.doy;var c=xe(kt(),o,a);n=ct(t.gg,e._a[sr],c.year),i=ct(t.w,c.week),null!=t.d?(r=t.d,(r<0||r>6)&&(l=!0)):null!=t.e?(r=t.e+o,(t.e<0||t.e>6)&&(l=!0)):r=o}i<1||i>Te(n,o,a)?g(e)._overflowWeeks=!0:null!=l?g(e)._overflowWeekday=!0:(s=Ae(n,i,r,o,a),e._a[sr]=s.year,e._dayOfYear=s.dayOfYear)}function ft(e){if(e._f===t.ISO_8601)return void at(e);if(e._f===t.RFC_2822)return void st(e);e._a=[],g(e).empty=!0;var n,i,r,o,a,s=""+e._i,l=s.length,c=0;for(r=$(e._f,e._locale).match(Ii)||[],n=0;n<r.length;n++)o=r[n],i=(s.match(ee(o,e))||[])[0],i&&(a=s.substr(0,s.indexOf(i)),a.length>0&&g(e).unusedInput.push(a),s=s.slice(s.indexOf(i)+i.length),c+=i.length),Bi[o]?(i?g(e).empty=!1:g(e).unusedTokens.push(o),oe(o,i,e)):e._strict&&!i&&g(e).unusedTokens.push(o);g(e).charsLeftOver=l-c,s.length>0&&g(e).unusedInput.push(s),e._a[ur]<=12&&g(e).bigHour===!0&&e._a[ur]>0&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ur]=pt(e._locale,e._a[ur],e._meridiem),dt(e),ot(e)}function pt(e,t,n){var i;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?(i=e.isPM(n),i&&t<12&&(t+=12),i||12!==t||(t=0),t):t}function gt(e){var t,n,i,r,o;if(0===e._f.length)return g(e).invalidFormat=!0,void(e._d=new Date(NaN));for(r=0;r<e._f.length;r++)o=0,t=b({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[r],ft(t),m(t)&&(o+=g(t).charsLeftOver,o+=10*g(t).unusedTokens.length,g(t).score=o,(null==i||o<i)&&(i=o,n=t));h(e,n||t)}function mt(e){if(!e._d){var t=N(e._i);e._a=u([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),dt(e)}}function vt(e){var t=new y(ot(bt(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function bt(e){var t=e._i,n=e._f;return e._locale=e._locale||it(e._l),null===t||void 0===n&&""===t?v({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),w(t)?new y(ot(t)):(c(t)?e._d=t:r(n)?gt(e):n?ft(e):yt(e),m(e)||(e._d=null),e))}function yt(e){var n=e._i;s(n)?e._d=new Date(t.now()):c(n)?e._d=new Date(n.valueOf()):"string"==typeof n?lt(e):r(n)?(e._a=u(n.slice(0),function(e){return parseInt(e,10)}),dt(e)):o(n)?mt(e):l(n)?e._d=new Date(n):t.createFromInputFallback(e)}function wt(e,t,n,i,s){var l={};return n!==!0&&n!==!1||(i=n,n=void 0),(o(e)&&a(e)||r(e)&&0===e.length)&&(e=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=s,l._l=n,l._i=e,l._f=t,l._strict=i,vt(l)}function kt(e,t,n,i){return wt(e,t,n,i,!1)}function St(e,t){var n,i;if(1===t.length&&r(t[0])&&(t=t[0]),!t.length)return kt();for(n=t[0],i=1;i<t.length;++i)t[i].isValid()&&!t[i][e](n)||(n=t[i]);return n}function At(){var e=[].slice.call(arguments,0);return St("isBefore",e)}function xt(){var e=[].slice.call(arguments,0);return St("isAfter",e)}function Tt(e){for(var t in e)if(Vr.indexOf(t)===-1||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,i=0;i<Vr.length;++i)if(e[Vr[i]]){if(n)return!1;parseFloat(e[Vr[i]])!==S(e[Vr[i]])&&(n=!0)}return!0}function Dt(){return this._isValid}function Et(){return Vt(NaN)}function _t(e){var t=N(e),n=t.year||0,i=t.quarter||0,r=t.month||0,o=t.week||0,a=t.day||0,s=t.hour||0,l=t.minute||0,c=t.second||0,u=t.millisecond||0;this._isValid=Tt(t),this._milliseconds=+u+1e3*c+6e4*l+1e3*s*60*60,this._days=+a+7*o,this._months=+r+3*i+12*n,this._data={},this._locale=it(),this._bubble()}function Ct(e){return e instanceof _t}function Mt(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function zt(e,t){Z(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+U(~~(e/60),2)+t+U(~~e%60,2)})}function Rt(e,t){var n=(t||"").match(e);if(null===n)return null;var i=n[n.length-1]||[],r=(i+"").match(Ur)||["-",0,0],o=+(60*r[1])+S(r[2]);return 0===o?0:"+"===r[0]?o:-o}function Ht(e,n){var i,r;return n._isUTC?(i=n.clone(),r=(w(e)||c(e)?e.valueOf():kt(e).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+r),t.updateOffset(i,!1),i):kt(e).local()}function Lt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Pt(e,n,i){var r,o=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(e=Rt(nr,e),null===e)return this}else Math.abs(e)<16&&!i&&(e*=60);return!this._isUTC&&n&&(r=Lt(this)),this._offset=e,this._isUTC=!0,null!=r&&this.add(r,"m"),o!==e&&(!n||this._changeInProgress?Jt(this,Vt(e-o,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?o:Lt(this)}function jt(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Ot(e){return this.utcOffset(0,e)}function It(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Lt(this),"m")),this}function Nt(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Rt(tr,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Ft(e){return!!this.isValid()&&(e=e?kt(e).utcOffset():0,(this.utcOffset()-e)%60===0)}function Bt(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Gt(){if(!s(this._isDSTShifted))return this._isDSTShifted;var e={};if(b(e,this),e=bt(e),e._a){var t=e._isUTC?f(e._a):kt(e._a);this._isDSTShifted=this.isValid()&&A(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Yt(){return!!this.isValid()&&!this._isUTC}function Wt(){return!!this.isValid()&&this._isUTC}function qt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Vt(e,t){var n,i,r,o=e,a=null;return Ct(e)?o={ms:e._milliseconds,d:e._days,M:e._months}:l(e)?(o={},t?o[t]=e:o.milliseconds=e):(a=Zr.exec(e))?(n="-"===a[1]?-1:1,o={y:0,d:S(a[cr])*n,h:S(a[ur])*n,m:S(a[dr])*n,s:S(a[hr])*n,ms:S(Mt(1e3*a[fr]))*n}):(a=Xr.exec(e))?(n="-"===a[1]?-1:1,o={y:Ut(a[2],n),M:Ut(a[3],n),w:Ut(a[4],n),d:Ut(a[5],n),h:Ut(a[6],n),m:Ut(a[7],n),s:Ut(a[8],n)}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(r=Xt(kt(o.from),kt(o.to)),o={},o.ms=r.milliseconds,o.M=r.months),i=new _t(o),Ct(e)&&d(e,"_locale")&&(i._locale=e._locale),i}function Ut(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Zt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Xt(e,t){var n;return e.isValid()&&t.isValid()?(t=Ht(t,e),e.isBefore(t)?n=Zt(e,t):(n=Zt(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Kt(e,t){return function(n,i){var r,o;return null===i||isNaN(+i)||(D(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=n,n=i,i=o),n="string"==typeof n?+n:n,r=Vt(n,i),Jt(this,r,e),this}}function Jt(e,n,i,r){var o=n._milliseconds,a=Mt(n._days),s=Mt(n._months);e.isValid()&&(r=null==r||r,o&&e._d.setTime(e._d.valueOf()+o*i),a&&W(e,"Date",Y(e,"Date")+a*i),s&&de(e,Y(e,"Month")+s*i),r&&t.updateOffset(e,a||s))}function $t(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Qt(e,n){var i=e||kt(),r=Ht(i,this).startOf("day"),o=t.calendarFormat(this,r)||"sameElse",a=n&&(E(n[o])?n[o].call(this,i):n[o]);return this.format(a||this.localeData().calendar(o,this,kt(i)))}function en(){return new y(this)}function tn(e,t){var n=w(e)?e:kt(e);return!(!this.isValid()||!n.isValid())&&(t=I(s(t)?"millisecond":t),"millisecond"===t?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())}function nn(e,t){var n=w(e)?e:kt(e);return!(!this.isValid()||!n.isValid())&&(t=I(s(t)?"millisecond":t),"millisecond"===t?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())}function rn(e,t,n,i){return i=i||"()",("("===i[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===i[1]?this.isBefore(t,n):!this.isAfter(t,n))}function on(e,t){var n,i=w(e)?e:kt(e);return!(!this.isValid()||!i.isValid())&&(t=I(t||"millisecond"),"millisecond"===t?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))}function an(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function sn(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function ln(e,t,n){var i,r,o,a;return this.isValid()?(i=Ht(e,this),i.isValid()?(r=6e4*(i.utcOffset()-this.utcOffset()),t=I(t),"year"===t||"month"===t||"quarter"===t?(a=cn(this,i),"quarter"===t?a/=3:"year"===t&&(a/=12)):(o=this-i,a="second"===t?o/1e3:"minute"===t?o/6e4:"hour"===t?o/36e5:"day"===t?(o-r)/864e5:"week"===t?(o-r)/6048e5:o),n?a:k(a)):NaN):NaN}function cn(e,t){var n,i,r=12*(t.year()-e.year())+(t.month()-e.month()),o=e.clone().add(r,"months");return t-o<0?(n=e.clone().add(r-1,"months"),
i=(t-o)/(o-n)):(n=e.clone().add(r+1,"months"),i=(t-o)/(n-o)),-(r+i)||0}function un(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function dn(){if(!this.isValid())return null;var e=this.clone().utc();return e.year()<0||e.year()>9999?J(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):E(Date.prototype.toISOString)?this.toDate().toISOString():J(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function hn(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",o=t+'[")]';return this.format(n+i+r+o)}function fn(e){e||(e=this.isUtc()?t.defaultFormatUtc:t.defaultFormat);var n=J(this,e);return this.localeData().postformat(n)}function pn(e,t){return this.isValid()&&(w(e)&&e.isValid()||kt(e).isValid())?Vt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function gn(e){return this.from(kt(),e)}function mn(e,t){return this.isValid()&&(w(e)&&e.isValid()||kt(e).isValid())?Vt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function vn(e){return this.to(kt(),e)}function bn(e){var t;return void 0===e?this._locale._abbr:(t=it(e),null!=t&&(this._locale=t),this)}function yn(){return this._locale}function wn(e){switch(e=I(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function kn(e){return e=I(e),void 0===e||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))}function Sn(){return this._d.valueOf()-6e4*(this._offset||0)}function An(){return Math.floor(this.valueOf()/1e3)}function xn(){return new Date(this.valueOf())}function Tn(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Dn(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function En(){return this.isValid()?this.toISOString():null}function _n(){return m(this)}function Cn(){return h({},g(this))}function Mn(){return g(this).overflow}function zn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Rn(e,t){Z(0,[e,e.length],0,t)}function Hn(e){return On.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Ln(e){return On.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Pn(){return Te(this.year(),1,4)}function jn(){var e=this.localeData()._week;return Te(this.year(),e.dow,e.doy)}function On(e,t,n,i,r){var o;return null==e?xe(this,i,r).year:(o=Te(e,i,r),t>o&&(t=o),In.call(this,e,t,n,i,r))}function In(e,t,n,i,r){var o=Ae(e,t,n,i,r),a=ke(o.year,0,o.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}function Nn(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}function Fn(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}function Bn(e,t){t[fr]=S(1e3*("0."+e))}function Gn(){return this._isUTC?"UTC":""}function Yn(){return this._isUTC?"Coordinated Universal Time":""}function Wn(e){return kt(1e3*e)}function qn(){return kt.apply(null,arguments).parseZone()}function Vn(e){return e}function Un(e,t,n,i){var r=it(),o=f().set(i,t);return r[n](o,e)}function Zn(e,t,n){if(l(e)&&(t=e,e=void 0),e=e||"",null!=t)return Un(e,t,n,"month");var i,r=[];for(i=0;i<12;i++)r[i]=Un(e,i,n,"month");return r}function Xn(e,t,n,i){"boolean"==typeof e?(l(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,l(t)&&(n=t,t=void 0),t=t||"");var r=it(),o=e?r._week.dow:0;if(null!=n)return Un(t,(n+o)%7,i,"day");var a,s=[];for(a=0;a<7;a++)s[a]=Un(t,(a+o)%7,i,"day");return s}function Kn(e,t){return Zn(e,t,"months")}function Jn(e,t){return Zn(e,t,"monthsShort")}function $n(e,t,n){return Xn(e,t,n,"weekdays")}function Qn(e,t,n){return Xn(e,t,n,"weekdaysShort")}function ei(e,t,n){return Xn(e,t,n,"weekdaysMin")}function ti(){var e=this._data;return this._milliseconds=ao(this._milliseconds),this._days=ao(this._days),this._months=ao(this._months),e.milliseconds=ao(e.milliseconds),e.seconds=ao(e.seconds),e.minutes=ao(e.minutes),e.hours=ao(e.hours),e.months=ao(e.months),e.years=ao(e.years),this}function ni(e,t,n,i){var r=Vt(t,n);return e._milliseconds+=i*r._milliseconds,e._days+=i*r._days,e._months+=i*r._months,e._bubble()}function ii(e,t){return ni(this,e,t,1)}function ri(e,t){return ni(this,e,t,-1)}function oi(e){return e<0?Math.floor(e):Math.ceil(e)}function ai(){var e,t,n,i,r,o=this._milliseconds,a=this._days,s=this._months,l=this._data;return o>=0&&a>=0&&s>=0||o<=0&&a<=0&&s<=0||(o+=864e5*oi(li(s)+a),a=0,s=0),l.milliseconds=o%1e3,e=k(o/1e3),l.seconds=e%60,t=k(e/60),l.minutes=t%60,n=k(t/60),l.hours=n%24,a+=k(n/24),r=k(si(a)),s+=r,a-=oi(li(r)),i=k(s/12),s%=12,l.days=a,l.months=s,l.years=i,this}function si(e){return 4800*e/146097}function li(e){return 146097*e/4800}function ci(e){if(!this.isValid())return NaN;var t,n,i=this._milliseconds;if(e=I(e),"month"===e||"year"===e)return t=this._days+i/864e5,n=this._months+si(t),"month"===e?n:n/12;switch(t=this._days+Math.round(li(this._months)),e){case"week":return t/7+i/6048e5;case"day":return t+i/864e5;case"hour":return 24*t+i/36e5;case"minute":return 1440*t+i/6e4;case"second":return 86400*t+i/1e3;case"millisecond":return Math.floor(864e5*t)+i;default:throw new Error("Unknown unit "+e)}}function ui(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*S(this._months/12):NaN}function di(e){return function(){return this.as(e)}}function hi(e){return e=I(e),this.isValid()?this[e+"s"]():NaN}function fi(e){return function(){return this.isValid()?this._data[e]:NaN}}function pi(){return k(this.days()/7)}function gi(e,t,n,i,r){return r.relativeTime(t||1,!!n,e,i)}function mi(e,t,n){var i=Vt(e).abs(),r=Ao(i.as("s")),o=Ao(i.as("m")),a=Ao(i.as("h")),s=Ao(i.as("d")),l=Ao(i.as("M")),c=Ao(i.as("y")),u=r<=xo.ss&&["s",r]||r<xo.s&&["ss",r]||o<=1&&["m"]||o<xo.m&&["mm",o]||a<=1&&["h"]||a<xo.h&&["hh",a]||s<=1&&["d"]||s<xo.d&&["dd",s]||l<=1&&["M"]||l<xo.M&&["MM",l]||c<=1&&["y"]||["yy",c];return u[2]=t,u[3]=+e>0,u[4]=n,gi.apply(null,u)}function vi(e){return void 0===e?Ao:"function"==typeof e&&(Ao=e,!0)}function bi(e,t){return void 0!==xo[e]&&(void 0===t?xo[e]:(xo[e]=t,"s"===e&&(xo.ss=t-1),!0))}function yi(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),n=mi(this,!e,t);return e&&(n=t.pastFuture(+this,n)),t.postformat(n)}function wi(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,i=To(this._milliseconds)/1e3,r=To(this._days),o=To(this._months);e=k(i/60),t=k(e/60),i%=60,e%=60,n=k(o/12),o%=12;var a=n,s=o,l=r,c=t,u=e,d=i,h=this.asSeconds();return h?(h<0?"-":"")+"P"+(a?a+"Y":"")+(s?s+"M":"")+(l?l+"D":"")+(c||u||d?"T":"")+(c?c+"H":"")+(u?u+"M":"")+(d?d+"S":""):"P0D"}var ki,Si;Si=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,i=0;i<n;i++)if(i in t&&e.call(this,t[i],i,t))return!0;return!1};var Ai=Si,xi=t.momentProperties=[],Ti=!1,Di={};t.suppressDeprecationWarnings=!1,t.deprecationHandler=null;var Ei;Ei=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)d(e,t)&&n.push(t);return n};var _i,Ci=Ei,Mi={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},zi={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ri="Invalid date",Hi="%d",Li=/\d{1,2}/,Pi={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ji={},Oi={},Ii=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ni=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Fi={},Bi={},Gi=/\d/,Yi=/\d\d/,Wi=/\d{3}/,qi=/\d{4}/,Vi=/[+-]?\d{6}/,Ui=/\d\d?/,Zi=/\d\d\d\d?/,Xi=/\d\d\d\d\d\d?/,Ki=/\d{1,3}/,Ji=/\d{1,4}/,$i=/[+-]?\d{1,6}/,Qi=/\d+/,er=/[+-]?\d+/,tr=/Z|[+-]\d\d:?\d\d/gi,nr=/Z|[+-]\d\d(?::?\d\d)?/gi,ir=/[+-]?\d+(\.\d{1,3})?/,rr=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,or={},ar={},sr=0,lr=1,cr=2,ur=3,dr=4,hr=5,fr=6,pr=7,gr=8;_i=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};var mr=_i;Z("M",["MM",2],"Mo",function(){return this.month()+1}),Z("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),Z("MMMM",0,0,function(e){return this.localeData().months(this,e)}),O("month","M"),F("month",8),Q("M",Ui),Q("MM",Ui,Yi),Q("MMM",function(e,t){return t.monthsShortRegex(e)}),Q("MMMM",function(e,t){return t.monthsRegex(e)}),ie(["M","MM"],function(e,t){t[lr]=S(e)-1}),ie(["MMM","MMMM"],function(e,t,n,i){var r=n._locale.monthsParse(e,i,n._strict);null!=r?t[lr]=r:g(n).invalidMonth=e});var vr=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,br="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),yr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),wr=rr,kr=rr;Z("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),Z(0,["YY",2],0,function(){return this.year()%100}),Z(0,["YYYY",4],0,"year"),Z(0,["YYYYY",5],0,"year"),Z(0,["YYYYYY",6,!0],0,"year"),O("year","y"),F("year",1),Q("Y",er),Q("YY",Ui,Yi),Q("YYYY",Ji,qi),Q("YYYYY",$i,Vi),Q("YYYYYY",$i,Vi),ie(["YYYYY","YYYYYY"],sr),ie("YYYY",function(e,n){n[sr]=2===e.length?t.parseTwoDigitYear(e):S(e)}),ie("YY",function(e,n){n[sr]=t.parseTwoDigitYear(e)}),ie("Y",function(e,t){t[sr]=parseInt(e,10)}),t.parseTwoDigitYear=function(e){return S(e)+(S(e)>68?1900:2e3)};var Sr=G("FullYear",!0);Z("w",["ww",2],"wo","week"),Z("W",["WW",2],"Wo","isoWeek"),O("week","w"),O("isoWeek","W"),F("week",5),F("isoWeek",5),Q("w",Ui),Q("ww",Ui,Yi),Q("W",Ui),Q("WW",Ui,Yi),re(["w","ww","W","WW"],function(e,t,n,i){t[i.substr(0,1)]=S(e)});var Ar={dow:0,doy:6};Z("d",0,"do","day"),Z("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),Z("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),Z("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),Z("e",0,0,"weekday"),Z("E",0,0,"isoWeekday"),O("day","d"),O("weekday","e"),O("isoWeekday","E"),F("day",11),F("weekday",11),F("isoWeekday",11),Q("d",Ui),Q("e",Ui),Q("E",Ui),Q("dd",function(e,t){return t.weekdaysMinRegex(e)}),Q("ddd",function(e,t){return t.weekdaysShortRegex(e)}),Q("dddd",function(e,t){return t.weekdaysRegex(e)}),re(["dd","ddd","dddd"],function(e,t,n,i){var r=n._locale.weekdaysParse(e,i,n._strict);null!=r?t.d=r:g(n).invalidWeekday=e}),re(["d","e","E"],function(e,t,n,i){t[i]=S(e)});var xr="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Tr="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Dr="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Er=rr,_r=rr,Cr=rr;Z("H",["HH",2],0,"hour"),Z("h",["hh",2],0,qe),Z("k",["kk",2],0,Ve),Z("hmm",0,0,function(){return""+qe.apply(this)+U(this.minutes(),2)}),Z("hmmss",0,0,function(){return""+qe.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),Z("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),Z("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Ue("a",!0),Ue("A",!1),O("hour","h"),F("hour",13),Q("a",Ze),Q("A",Ze),Q("H",Ui),Q("h",Ui),Q("k",Ui),Q("HH",Ui,Yi),Q("hh",Ui,Yi),Q("kk",Ui,Yi),Q("hmm",Zi),Q("hmmss",Xi),Q("Hmm",Zi),Q("Hmmss",Xi),ie(["H","HH"],ur),ie(["k","kk"],function(e,t,n){var i=S(e);t[ur]=24===i?0:i}),ie(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ie(["h","hh"],function(e,t,n){t[ur]=S(e),g(n).bigHour=!0}),ie("hmm",function(e,t,n){var i=e.length-2;t[ur]=S(e.substr(0,i)),t[dr]=S(e.substr(i)),g(n).bigHour=!0}),ie("hmmss",function(e,t,n){var i=e.length-4,r=e.length-2;t[ur]=S(e.substr(0,i)),t[dr]=S(e.substr(i,2)),t[hr]=S(e.substr(r)),g(n).bigHour=!0}),ie("Hmm",function(e,t,n){var i=e.length-2;t[ur]=S(e.substr(0,i)),t[dr]=S(e.substr(i))}),ie("Hmmss",function(e,t,n){var i=e.length-4,r=e.length-2;t[ur]=S(e.substr(0,i)),t[dr]=S(e.substr(i,2)),t[hr]=S(e.substr(r))});var Mr,zr=/[ap]\.?m?\.?/i,Rr=G("Hours",!0),Hr={calendar:Mi,longDateFormat:zi,invalidDate:Ri,ordinal:Hi,dayOfMonthOrdinalParse:Li,relativeTime:Pi,months:br,monthsShort:yr,week:Ar,weekdays:xr,weekdaysMin:Dr,weekdaysShort:Tr,meridiemParse:zr},Lr={},Pr={},jr=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Or=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ir=/Z|[+-]\d\d(?::?\d\d)?/,Nr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Fr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Br=/^\/?Date\((\-?\d+)/i,Gr=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;t.createFromInputFallback=T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),t.ISO_8601=function(){},t.RFC_2822=function(){};var Yr=T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=kt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:v()}),Wr=T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=kt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:v()}),qr=function(){return Date.now?Date.now():+new Date},Vr=["year","quarter","month","week","day","hour","minute","second","millisecond"];zt("Z",":"),zt("ZZ",""),Q("Z",nr),Q("ZZ",nr),ie(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Rt(nr,e)});var Ur=/([\+\-]|\d\d)/gi;t.updateOffset=function(){};var Zr=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Xr=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Vt.fn=_t.prototype,Vt.invalid=Et;var Kr=Kt(1,"add"),Jr=Kt(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",t.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var $r=T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});Z(0,["gg",2],0,function(){return this.weekYear()%100}),Z(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Rn("gggg","weekYear"),Rn("ggggg","weekYear"),Rn("GGGG","isoWeekYear"),Rn("GGGGG","isoWeekYear"),O("weekYear","gg"),O("isoWeekYear","GG"),F("weekYear",1),F("isoWeekYear",1),Q("G",er),Q("g",er),Q("GG",Ui,Yi),Q("gg",Ui,Yi),Q("GGGG",Ji,qi),Q("gggg",Ji,qi),Q("GGGGG",$i,Vi),Q("ggggg",$i,Vi),re(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,i){t[i.substr(0,2)]=S(e)}),re(["gg","GG"],function(e,n,i,r){n[r]=t.parseTwoDigitYear(e)}),Z("Q",0,"Qo","quarter"),O("quarter","Q"),F("quarter",7),Q("Q",Gi),ie("Q",function(e,t){t[lr]=3*(S(e)-1)}),Z("D",["DD",2],"Do","date"),O("date","D"),F("date",9),Q("D",Ui),Q("DD",Ui,Yi),Q("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ie(["D","DD"],cr),ie("Do",function(e,t){t[cr]=S(e.match(Ui)[0],10)});var Qr=G("Date",!0);Z("DDD",["DDDD",3],"DDDo","dayOfYear"),O("dayOfYear","DDD"),F("dayOfYear",4),Q("DDD",Ki),Q("DDDD",Wi),ie(["DDD","DDDD"],function(e,t,n){n._dayOfYear=S(e)}),Z("m",["mm",2],0,"minute"),O("minute","m"),F("minute",14),Q("m",Ui),Q("mm",Ui,Yi),ie(["m","mm"],dr);var eo=G("Minutes",!1);Z("s",["ss",2],0,"second"),O("second","s"),F("second",15),Q("s",Ui),Q("ss",Ui,Yi),ie(["s","ss"],hr);var to=G("Seconds",!1);Z("S",0,0,function(){return~~(this.millisecond()/100)}),Z(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),Z(0,["SSS",3],0,"millisecond"),Z(0,["SSSS",4],0,function(){return 10*this.millisecond()}),Z(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),Z(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),Z(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),Z(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),Z(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),O("millisecond","ms"),F("millisecond",16),Q("S",Ki,Gi),Q("SS",Ki,Yi),Q("SSS",Ki,Wi);var no;for(no="SSSS";no.length<=9;no+="S")Q(no,Qi);for(no="S";no.length<=9;no+="S")ie(no,Bn);var io=G("Milliseconds",!1);Z("z",0,0,"zoneAbbr"),Z("zz",0,0,"zoneName");var ro=y.prototype;ro.add=Kr,ro.calendar=Qt,ro.clone=en,ro.diff=ln,ro.endOf=kn,ro.format=fn,ro.from=pn,ro.fromNow=gn,ro.to=mn,ro.toNow=vn,ro.get=q,ro.invalidAt=Mn,ro.isAfter=tn,ro.isBefore=nn,ro.isBetween=rn,ro.isSame=on,ro.isSameOrAfter=an,ro.isSameOrBefore=sn,ro.isValid=_n,ro.lang=$r,ro.locale=bn,ro.localeData=yn,ro.max=Wr,ro.min=Yr,ro.parsingFlags=Cn,ro.set=V,ro.startOf=wn,ro.subtract=Jr,ro.toArray=Tn,ro.toObject=Dn,ro.toDate=xn,ro.toISOString=dn,ro.inspect=hn,ro.toJSON=En,ro.toString=un,ro.unix=An,ro.valueOf=Sn,ro.creationData=zn,ro.year=Sr,ro.isLeapYear=ye,ro.weekYear=Hn,ro.isoWeekYear=Ln,ro.quarter=ro.quarters=Nn,ro.month=he,ro.daysInMonth=fe,ro.week=ro.weeks=Ce,ro.isoWeek=ro.isoWeeks=Me,ro.weeksInYear=jn,ro.isoWeeksInYear=Pn,ro.date=Qr,ro.day=ro.days=Ie,ro.weekday=Ne,ro.isoWeekday=Fe,ro.dayOfYear=Fn,ro.hour=ro.hours=Rr,ro.minute=ro.minutes=eo,ro.second=ro.seconds=to,ro.millisecond=ro.milliseconds=io,ro.utcOffset=Pt,ro.utc=Ot,ro.local=It,ro.parseZone=Nt,ro.hasAlignedHourOffset=Ft,ro.isDST=Bt,ro.isLocal=Yt,ro.isUtcOffset=Wt,ro.isUtc=qt,ro.isUTC=qt,ro.zoneAbbr=Gn,ro.zoneName=Yn,ro.dates=T("dates accessor is deprecated. Use date instead.",Qr),ro.months=T("months accessor is deprecated. Use month instead",he),ro.years=T("years accessor is deprecated. Use year instead",Sr),ro.zone=T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",jt),ro.isDSTShifted=T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Gt);var oo=M.prototype;oo.calendar=z,oo.longDateFormat=R,oo.invalidDate=H,oo.ordinal=L,oo.preparse=Vn,oo.postformat=Vn,oo.relativeTime=P,oo.pastFuture=j,oo.set=_,oo.months=se,oo.monthsShort=le,oo.monthsParse=ue,oo.monthsRegex=ge,oo.monthsShortRegex=pe,oo.week=De,oo.firstDayOfYear=_e,oo.firstDayOfWeek=Ee,oo.weekdays=He,oo.weekdaysMin=Pe,oo.weekdaysShort=Le,oo.weekdaysParse=Oe,oo.weekdaysRegex=Be,oo.weekdaysShortRegex=Ge,oo.weekdaysMinRegex=Ye,oo.isPM=Xe,oo.meridiem=Ke,et("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1===S(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),t.lang=T("moment.lang is deprecated. Use moment.locale instead.",et),t.langData=T("moment.langData is deprecated. Use moment.localeData instead.",it);var ao=Math.abs,so=di("ms"),lo=di("s"),co=di("m"),uo=di("h"),ho=di("d"),fo=di("w"),po=di("M"),go=di("y"),mo=fi("milliseconds"),vo=fi("seconds"),bo=fi("minutes"),yo=fi("hours"),wo=fi("days"),ko=fi("months"),So=fi("years"),Ao=Math.round,xo={ss:44,s:45,m:45,h:22,d:26,M:11},To=Math.abs,Do=_t.prototype;return Do.isValid=Dt,Do.abs=ti,Do.add=ii,Do.subtract=ri,Do.as=ci,Do.asMilliseconds=so,Do.asSeconds=lo,Do.asMinutes=co,Do.asHours=uo,Do.asDays=ho,Do.asWeeks=fo,Do.asMonths=po,Do.asYears=go,Do.valueOf=ui,Do._bubble=ai,Do.get=hi,Do.milliseconds=mo,Do.seconds=vo,Do.minutes=bo,Do.hours=yo,Do.days=wo,Do.weeks=pi,Do.months=ko,Do.years=So,Do.humanize=yi,Do.toISOString=wi,Do.toString=wi,Do.toJSON=wi,Do.locale=bn,Do.localeData=yn,Do.toIsoString=T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",wi),Do.lang=$r,Z("X",0,0,"unix"),Z("x",0,0,"valueOf"),Q("x",er),Q("X",ir),ie("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ie("x",function(e,t,n){n._d=new Date(S(e))}),t.version="2.18.1",i(kt),t.fn=ro,t.min=At,t.max=xt,t.now=qr,t.utc=f,t.unix=Wn,t.months=Kn,t.isDate=c,t.locale=et,t.invalid=v,t.duration=Vt,t.isMoment=w,t.weekdays=$n,t.parseZone=qn,t.localeData=it,t.isDuration=Ct,t.monthsShort=Jn,t.weekdaysMin=ei,t.defineLocale=tt,t.updateLocale=nt,t.locales=rt,t.weekdaysShort=Qn,t.normalizeUnits=I,t.relativeTimeRounding=vi,t.relativeTimeThreshold=bi,t.calendarFormat=$t,t.prototype=ro,t})}).call(t,n(13)(e))},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=f[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(c(i.parts[o],t))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(c(i.parts[o],t));f[i.id]={id:i.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],o=r[0],a=r[1],s=r[2],l=r[3],c={css:a,media:s,sourceMap:l};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function o(e,t){var n=m(),i=y[y.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function c(e,t){var n,i,r;if(t.singleton){var o=b++;n=v||(v=s(t)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),i=h.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),i=d.bind(null,n),r=function(){a(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}function u(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function d(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function h(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var f={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=p(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),m=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,b=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return i(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],l=f[s.id];l.refs--,o.push(l)}if(e){var c=r(e);i(c,t)}for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete f[l.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function o(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){g&&f&&(g=!1,f.length?p=f.concat(p):m=-1,p.length&&s())}function s(){if(!g){var e=r(a);g=!0;for(var t=p.length;t;){for(f=p,p=[];++m<t;)f&&f[m].run();m=-1,t=p.length}f=null,g=!1,o(e)}}function l(e,t){this.fun=e,this.array=t}function c(){}var u,d,h=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}}();var f,p=[],g=!1,m=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new l(e,t)),1!==p.length||g||r(s)},l.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=c,h.addListener=c,h.once=c,h.off=c,h.removeListener=c,h.removeAllListeners=c,h.emit=c,h.prependListener=c,h.prependOnceListener=c,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(e,t,n){(function(t){"use strict";var i=n(1),r=n(22),o=n(28),a=n(9),s=n(26),l="undefined"!=typeof window&&window.btoa||n(21),c=n(29);e.exports=function(e,u,d){var h=d.data,f=d.headers;i.isFormData(h)&&delete f["Content-Type"];var p=new XMLHttpRequest,g="onreadystatechange",m=!1;if("test"===t.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||s(d.url)||(p=new window.XDomainRequest,g="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),d.auth){var v=d.auth.username||"",b=d.auth.password||"";f.Authorization="Basic "+l(v+":"+b)}if(p.open(d.method.toUpperCase(),r(d.url,d.params,d.paramsSerializer),!0),p.timeout=d.timeout,p[g]=function(){if(p&&(4===p.readyState||m)&&0!==p.status){var t="getAllResponseHeaders"in p?o(p.getAllResponseHeaders()):null,n=d.responseType&&"text"!==d.responseType?p.response:p.responseText,i={data:a(n,t,d.transformResponse),status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:t,config:d,request:p};c(e,u,i),p=null}},p.onerror=function(){u(new Error("Network Error")),p=null},p.ontimeout=function(){var e=new Error("timeout of "+d.timeout+"ms exceeded");e.timeout=d.timeout,e.code="ECONNABORTED",u(e),p=null},i.isStandardBrowserEnv()){var y=n(24),w=d.withCredentials||s(d.url)?y.read(d.xsrfCookieName):void 0;w&&(f[d.xsrfHeaderName]=w)}if("setRequestHeader"in p&&i.forEach(f,function(e,t){"undefined"==typeof h&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)}),d.withCredentials&&(p.withCredentials=!0),d.responseType)try{p.responseType=d.responseType}catch(e){if("json"!==p.responseType)throw e}d.progress&&("post"===d.method||"put"===d.method?p.upload.addEventListener("progress",d.progress):"get"===d.method&&p.addEventListener("progress",d.progress)),void 0===h&&(h=null),p.send(h)}}).call(t,n(7))},function(e,t,n){"use strict";var i=n(1);e.exports=function(e,t,n){return i.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){!function(e,t){t(n(5))}(this,function(e){"use strict";var t=e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}});return t})},function(e,t,n){var i=n(2);e.exports=function(){var e=new i.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b('<div class="bookingjs-timezonehelper">'),i.b("\n"),i.b("\n"+n),i.b("  "),i.b(i.t(i.f("timezoneIcon",e,t,0))),i.b("\n"),i.b("\n"+n),i.s(i.f("loading",e,t,1),e,t,0,79,117,"{{ }}")&&(i.rs(e,t,function(e,t,i){i.b("    <span>"),i.b(i.v(i.f("loadingText",e,t,0))),i.b("</span>"),i.b("\n"+n)}),e.pop()),i.b("\n"+n),i.s(i.f("loading",e,t,1),e,t,1,0,0,"")||(i.s(i.f("timezoneDifference",e,t,1),e,t,0,179,227,"{{ }}")&&(i.rs(e,t,function(e,t,i){i.b("      <span>"),i.b(i.v(i.f("timezoneDifferent",e,t,0))),i.b("</span>"),i.b("\n"+n)}),e.pop()),i.b("\n"+n),i.s(i.f("timezoneDifference",e,t,1),e,t,1,0,0,"")||(i.b("      <span>"),i.b(i.v(i.f("timezoneSame",e,t,0))),i.b("</span>"),i.b("\n"+n))),i.b("\n"+n),i.b("</div>"),i.b("\n"),i.fl()},partials:{},subs:{}},'<div class="bookingjs-timezonehelper">\n\n  {{& timezoneIcon }}\n\n  {{# loading }}\n    <span>{{ loadingText }}</span>\n  {{/ loading }}\n\n  {{^ loading }}\n    {{# timezoneDifference }}\n      <span>{{ timezoneDifferent }}</span>\n    {{/ timezoneDifference }}\n\n    {{^ timezoneDifference }}\n      <span>{{ timezoneSame }}</span>\n    {{/ timezoneDifference }}\n  {{/ loading }}\n\n</div>\n',i);return e}()},function(e,t){e.exports='<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 38 38" xml:space="preserve"><path fill="#fff" d="M38,19 C38,8.50658975 29.4934102,0 19,0 C8.50658975,0 0,8.50658975 0,19 L5,19 C5,11.2680135 11.2680135,5 19,5 C26.7319865,5 33,11.2680135 33,19 L38,19 Z" id="Oval-1" sketch:type="MSShapeGroup"></path></path></svg>'},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(t,n){t.exports=e},function(e,t,n){e.exports=n(16)},function(e,t,n){(function(t){"use strict";function i(e){this.defaults=o.merge({},e),this.interceptors={request:new s,response:new s}}var r=n(19),o=n(1),a=n(18),s=n(17),l=n(25),c=n(23),u=n(20),d=n(9);i.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),e=o.merge(r,this.defaults,{method:"get"},e),e.baseURL&&!l(e.url)&&(e.url=c(e.baseURL,e.url)),e.withCredentials=e.withCredentials||this.defaults.withCredentials,e.data=d(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),
o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var n=[a,void 0],i=t.resolve(e);for(this.interceptors.request.forEach(function(e){n.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){n.push(e.fulfilled,e.rejected)});n.length;)i=i.then(n.shift(),n.shift());return i};var h=new i(r),f=e.exports=u(i.prototype.request,h);f.request=u(i.prototype.request,h),f.Axios=i,f.defaults=h.defaults,f.interceptors=h.interceptors,f.create=function(e){return new i(e)},f.all=function(e){return t.all(e)},f.spread=n(30),o.forEach(["delete","get","head"],function(e){i.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))},f[e]=u(i.prototype[e],h)}),o.forEach(["post","put","patch"],function(e){i.prototype[e]=function(t,n,i){return this.request(o.merge(i||{},{method:e,url:t,data:n}))},f[e]=u(i.prototype[e],h)})}).call(t,n(4))},function(e,t,n){"use strict";function i(){this.handlers=[]}var r=n(1);i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=i},function(e,t,n){(function(t,i){"use strict";e.exports=function(e){return new t(function(t,r){try{var o;"function"==typeof e.adapter?o=e.adapter:"undefined"!=typeof XMLHttpRequest?o=n(8):"undefined"!=typeof i&&(o=n(8)),"function"==typeof o&&o(t,r,e)}catch(e){r(e)}})}}).call(t,n(4),n(7))},function(e,t,n){"use strict";function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var r=n(1),o=n(27),a=/^\)\]\}',?\n/,s={"Content-Type":"application/x-www-form-urlencoded"};e.exports={transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(a,"");try{e=JSON.parse(e)}catch(e){}}return e}],headers:{common:{Accept:"application/json, text/plain, */*"},patch:r.merge(s),post:r.merge(s),put:r.merge(s)},timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}}},function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function i(e){for(var t,i,o=String(e),a="",s=0,l=r;o.charAt(0|s)||(l="=",s%1);a+=l.charAt(63&t>>8-s%1*8)){if(i=o.charCodeAt(s+=.75),i>255)throw new n;t=t<<8|i}return a}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=i},function(e,t,n){"use strict";function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=n(1);e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(r.isArray(e)&&(t+="[]"),r.isArray(e)||(e=[e]),r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))}))}),o=a.join("&")}return o&&(e+=(e.indexOf("?")===-1?"?":"&")+o),e}},function(e,t){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},function(e,t,n){"use strict";var i=n(1);e.exports=i.isStandardBrowserEnv()?function(){return{write:function(e,t,n,r,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),i.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),i.isString(r)&&s.push("path="+r),i.isString(o)&&s.push("domain="+o),a===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";var i=n(1);e.exports=i.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return t=e(window.location.href),function(n){var r=i.isString(n)?e(n):n;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var i=n(1);e.exports=function(e,t){i.forEach(e,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])})}},function(e,t,n){"use strict";var i=n(1);e.exports=function(e){var t,n,r,o={};return e?(i.forEach(e.split("\n"),function(e){r=e.indexOf(":"),t=i.trim(e.substr(0,r)).toLowerCase(),n=i.trim(e.substr(r+1)),t&&(o[t]=o[t]?o[t]+", "+n:n)}),o):o}},function(e,t){"use strict";e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(n):e(n)}},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){var i;(function(e,r){!function(o){var a="object"==typeof t&&t,s=("object"==typeof e&&e&&e.exports==a&&e,"object"==typeof r&&r);s.global!==s&&s.window!==s||(o=s);var l=function(e){this.message=e};l.prototype=new Error,l.prototype.name="InvalidCharacterError";var c=function(e){throw new l(e)},u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=/[\t\n\f\r ]/g,h=function(e){e=String(e).replace(d,"");var t=e.length;t%4==0&&(e=e.replace(/==?$/,""),t=e.length),(t%4==1||/[^+a-zA-Z0-9\/]/.test(e))&&c("Invalid character: the string to be decoded is not correctly encoded.");for(var n,i,r=0,o="",a=-1;++a<t;)i=u.indexOf(e.charAt(a)),n=r%4?64*n+i:i,r++%4&&(o+=String.fromCharCode(255&n>>(-2*r&6)));return o},f=function(e){e=String(e),/[^\0-\xFF]/.test(e)&&c("The string to be encoded contains characters outside of the Latin1 range.");for(var t,n,i,r,o=e.length%3,a="",s=-1,l=e.length-o;++s<l;)t=e.charCodeAt(s)<<16,n=e.charCodeAt(++s)<<8,i=e.charCodeAt(++s),r=t+n+i,a+=u.charAt(r>>18&63)+u.charAt(r>>12&63)+u.charAt(r>>6&63)+u.charAt(63&r);return 2==o?(t=e.charCodeAt(s)<<8,n=e.charCodeAt(++s),r=t+n,a+=u.charAt(r>>10)+u.charAt(r>>4&63)+u.charAt(r<<2&63)+"="):1==o&&(r=e.charCodeAt(s),a+=u.charAt(r>>2)+u.charAt(r<<4&63)+"=="),a},p={encode:f,decode:h,version:"0.1.0"};i=function(){return p}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))}(this)}).call(t,n(13)(e),function(){return this}())},function(e,t){!function(e){"use strict";e.console||(e.console={});for(var t,n,i=e.console,r=function(){},o=["memory"],a="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");t=o.pop();)i[t]||(i[t]={});for(;n=a.pop();)"function"!=typeof i[n]&&(i[n]=r)}("undefined"==typeof window?this:window)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,'/*!\n * FullCalendar v3.4.0 Stylesheet\n * Docs & License: https://fullcalendar.io/\n * (c) 2017 Adam Shaw\n */.fc{direction:ltr;text-align:left}.fc-rtl{text-align:right}body .fc{font-size:1em}.fc-unthemed .fc-content,.fc-unthemed .fc-divider,.fc-unthemed .fc-list-heading td,.fc-unthemed .fc-list-view,.fc-unthemed .fc-popover,.fc-unthemed .fc-row,.fc-unthemed tbody,.fc-unthemed td,.fc-unthemed th,.fc-unthemed thead{border-color:#ddd}.fc-unthemed .fc-popover{background-color:#fff}.fc-unthemed .fc-divider,.fc-unthemed .fc-list-heading td,.fc-unthemed .fc-popover .fc-header{background:#eee}.fc-unthemed .fc-popover .fc-header .fc-close{color:#666}.fc-unthemed td.fc-today{background:#fcf8e3}.fc-highlight{background:#bce8f1;opacity:.3}.fc-bgevent{background:#8fdf82;opacity:.3}.fc-nonbusiness{background:#d7d7d7}.fc-unthemed .fc-disabled-day{background:#d7d7d7;opacity:.3}.ui-widget .fc-disabled-day{background-image:none}.fc-icon{display:inline-block;height:1em;line-height:1em;font-size:1em;text-align:center;overflow:hidden;font-family:Courier New,Courier,monospace;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fc-icon:after{position:relative}.fc-icon-left-single-arrow:after{content:"\\2039";font-weight:700;font-size:200%;top:-7%}.fc-icon-right-single-arrow:after{content:"\\203A";font-weight:700;font-size:200%;top:-7%}.fc-icon-left-double-arrow:after{content:"\\AB";font-size:160%;top:-7%}.fc-icon-right-double-arrow:after{content:"\\BB";font-size:160%;top:-7%}.fc-icon-left-triangle:after{content:"\\25C4";font-size:125%;top:3%}.fc-icon-right-triangle:after{content:"\\25BA";font-size:125%;top:3%}.fc-icon-down-triangle:after{content:"\\25BC";font-size:125%;top:2%}.fc-icon-x:after{content:"\\D7";font-size:200%;top:6%}.fc button{box-sizing:border-box;margin:0;height:2.1em;padding:0 .6em;font-size:1em;white-space:nowrap;cursor:pointer}.fc button::-moz-focus-inner{margin:0;padding:0}.fc-state-default{border:1px solid}.fc-state-default.fc-corner-left{border-top-left-radius:4px;border-bottom-left-radius:4px}.fc-state-default.fc-corner-right{border-top-right-radius:4px;border-bottom-right-radius:4px}.fc button .fc-icon{position:relative;top:-.05em;margin:0 .2em;vertical-align:middle}.fc-state-default{background-color:#f5f5f5;background-image:linear-gradient(180deg,#fff,#e6e6e6);background-repeat:repeat-x;border-color:#e6e6e6 #e6e6e6 #bfbfbf;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);color:#333;text-shadow:0 1px 1px hsla(0,0%,100%,.75);box-shadow:inset 0 1px 0 hsla(0,0%,100%,.2),0 1px 2px rgba(0,0,0,.05)}.fc-state-active,.fc-state-disabled,.fc-state-down,.fc-state-hover{color:#333;background-color:#e6e6e6}.fc-state-hover{color:#333;text-decoration:none;background-position:0 -15px;transition:background-position .1s linear}.fc-state-active,.fc-state-down{background-color:#ccc;background-image:none;box-shadow:inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)}.fc-state-disabled{cursor:default;background-image:none;opacity:.65;box-shadow:none}.fc-button-group{display:inline-block}.fc .fc-button-group>*{float:left;margin:0 0 0 -1px}.fc .fc-button-group>:first-child{margin-left:0}.fc-popover{position:absolute;box-shadow:0 2px 6px rgba(0,0,0,.15)}.fc-popover .fc-header{padding:2px 4px}.fc-popover .fc-header .fc-title{margin:0 2px}.fc-popover .fc-header .fc-close{cursor:pointer}.fc-ltr .fc-popover .fc-header .fc-title,.fc-rtl .fc-popover .fc-header .fc-close{float:left}.fc-ltr .fc-popover .fc-header .fc-close,.fc-rtl .fc-popover .fc-header .fc-title{float:right}.fc-unthemed .fc-popover{border-width:1px;border-style:solid}.fc-unthemed .fc-popover .fc-header .fc-close{font-size:.9em;margin-top:2px}.fc-popover>.ui-widget-header+.ui-widget-content{border-top:0}.fc-divider{border-style:solid;border-width:1px}hr.fc-divider{height:0;margin:0;padding:0 0 2px;border-width:1px 0}.fc-clear{clear:both}.fc-bg,.fc-bgevent-skeleton,.fc-helper-skeleton,.fc-highlight-skeleton{position:absolute;top:0;left:0;right:0}.fc-bg{bottom:0}.fc-bg table{height:100%}.fc table{width:100%;box-sizing:border-box;table-layout:fixed;border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{border-style:solid;border-width:1px;padding:0;vertical-align:top}.fc td.fc-today{border-style:double}a[data-goto]{cursor:pointer}a[data-goto]:hover{text-decoration:underline}.fc .fc-row{border-style:solid;border-width:0}.fc-row table{border-left:0 hidden transparent;border-right:0 hidden transparent;border-bottom:0 hidden transparent}.fc-row:first-child table{border-top:0 hidden transparent}.fc-row{position:relative}.fc-row .fc-bg{z-index:1}.fc-row .fc-bgevent-skeleton,.fc-row .fc-highlight-skeleton{bottom:0}.fc-row .fc-bgevent-skeleton table,.fc-row .fc-highlight-skeleton table{height:100%}.fc-row .fc-bgevent-skeleton td,.fc-row .fc-highlight-skeleton td{border-color:transparent}.fc-row .fc-bgevent-skeleton{z-index:2}.fc-row .fc-highlight-skeleton{z-index:3}.fc-row .fc-content-skeleton{position:relative;z-index:4;padding-bottom:2px}.fc-row .fc-helper-skeleton{z-index:5}.fc-row .fc-content-skeleton td,.fc-row .fc-helper-skeleton td{background:none;border-color:transparent;border-bottom:0}.fc-row .fc-content-skeleton tbody td,.fc-row .fc-helper-skeleton tbody td{border-top:0}.fc-scroller{-webkit-overflow-scrolling:touch}.fc-scroller>.fc-day-grid,.fc-scroller>.fc-time-grid{position:relative;width:100%}.fc-event{position:relative;display:block;font-size:.85em;line-height:1.3;border-radius:3px;border:1px solid #3a87ad;font-weight:400}.fc-event,.fc-event-dot{background-color:#3a87ad}.fc-event,.fc-event:hover,.ui-widget .fc-event{color:#fff;text-decoration:none}.fc-event.fc-draggable,.fc-event[href]{cursor:pointer}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc-event .fc-bg{z-index:1;background:#fff;opacity:.25}.fc-event .fc-content{position:relative;z-index:2}.fc-event .fc-resizer{position:absolute;z-index:4;display:none}.fc-event.fc-allow-mouse-resize .fc-resizer,.fc-event.fc-selected .fc-resizer{display:block}.fc-event.fc-selected .fc-resizer:before{content:"";position:absolute;z-index:9999;top:50%;left:50%;width:40px;height:40px;margin-left:-20px;margin-top:-20px}.fc-event.fc-selected{z-index:9999!important;box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event.fc-selected.fc-dragging{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-h-event.fc-selected:before{content:"";position:absolute;z-index:3;top:-10px;bottom:-10px;left:0;right:0}.fc-ltr .fc-h-event.fc-not-start,.fc-rtl .fc-h-event.fc-not-end{margin-left:0;border-left-width:0;padding-left:1px;border-top-left-radius:0;border-bottom-left-radius:0}.fc-ltr .fc-h-event.fc-not-end,.fc-rtl .fc-h-event.fc-not-start{margin-right:0;border-right-width:0;padding-right:1px;border-top-right-radius:0;border-bottom-right-radius:0}.fc-ltr .fc-h-event .fc-start-resizer,.fc-rtl .fc-h-event .fc-end-resizer{cursor:w-resize;left:-1px}.fc-ltr .fc-h-event .fc-end-resizer,.fc-rtl .fc-h-event .fc-start-resizer{cursor:e-resize;right:-1px}.fc-h-event.fc-allow-mouse-resize .fc-resizer{width:7px;top:-1px;bottom:-1px}.fc-h-event.fc-selected .fc-resizer{border-radius:4px;border-width:1px;width:6px;height:6px;border-style:solid;border-color:inherit;background:#fff;top:50%;margin-top:-4px}.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,.fc-rtl .fc-h-event.fc-selected .fc-end-resizer{margin-left:-4px}.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,.fc-rtl .fc-h-event.fc-selected .fc-start-resizer{margin-right:-4px}.fc-day-grid-event{margin:1px 2px 0;padding:0 1px}tr:first-child>td>.fc-day-grid-event{margin-top:2px}.fc-day-grid-event.fc-selected:after{content:"";position:absolute;z-index:1;top:-1px;right:-1px;bottom:-1px;left:-1px;background:#000;opacity:.25}.fc-day-grid-event .fc-content{white-space:nowrap;overflow:hidden}.fc-day-grid-event .fc-time{font-weight:700}.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer{margin-left:-2px}.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer{margin-right:-2px}a.fc-more{margin:1px 3px;font-size:.85em;cursor:pointer;text-decoration:none}a.fc-more:hover{text-decoration:underline}.fc-limited{display:none}.fc-day-grid .fc-row{z-index:1}.fc-more-popover{z-index:2;width:220px}.fc-more-popover .fc-event-container{padding:10px}.fc-now-indicator{position:absolute;border:0 solid red}.fc-unselectable{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fc-toolbar{text-align:center}.fc-toolbar.fc-header-toolbar{margin-bottom:1em}.fc-toolbar.fc-footer-toolbar{margin-top:1em}.fc-toolbar .fc-left{float:left}.fc-toolbar .fc-right{float:right}.fc-toolbar .fc-center{display:inline-block}.fc .fc-toolbar>*>*{float:left;margin-left:.75em}.fc .fc-toolbar>*>:first-child{margin-left:0}.fc-toolbar h2{margin:0}.fc-toolbar button{position:relative}.fc-toolbar .fc-state-hover,.fc-toolbar .ui-state-hover{z-index:2}.fc-toolbar .fc-state-down{z-index:3}.fc-toolbar .fc-state-active,.fc-toolbar .ui-state-active{z-index:4}.fc-toolbar button:focus{z-index:5}.fc-view-container *,.fc-view-container :after,.fc-view-container :before{box-sizing:content-box}.fc-view,.fc-view>table{position:relative;z-index:1}.fc-basicDay-view .fc-content-skeleton,.fc-basicWeek-view .fc-content-skeleton{padding-bottom:1em}.fc-basic-view .fc-body .fc-row{min-height:4em}.fc-row.fc-rigid{overflow:hidden}.fc-row.fc-rigid .fc-content-skeleton{position:absolute;top:0;left:0;right:0}.fc-day-top.fc-other-month{opacity:.3}.fc-basic-view .fc-day-number,.fc-basic-view .fc-week-number{padding:2px}.fc-basic-view th.fc-day-number,.fc-basic-view th.fc-week-number{padding:0 2px}.fc-ltr .fc-basic-view .fc-day-top .fc-day-number{float:right}.fc-rtl .fc-basic-view .fc-day-top .fc-day-number{float:left}.fc-ltr .fc-basic-view .fc-day-top .fc-week-number{float:left;border-radius:0 0 3px 0}.fc-rtl .fc-basic-view .fc-day-top .fc-week-number{float:right;border-radius:0 0 0 3px}.fc-basic-view .fc-day-top .fc-week-number{min-width:1.5em;text-align:center;background-color:#f2f2f2;color:gray}.fc-basic-view td.fc-week-number{text-align:center}.fc-basic-view td.fc-week-number>*{display:inline-block;min-width:1.25em}.fc-agenda-view .fc-day-grid{position:relative;z-index:2}.fc-agenda-view .fc-day-grid .fc-row{min-height:3em}.fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton{padding-bottom:1em}.fc .fc-axis{vertical-align:middle;padding:0 4px;white-space:nowrap}.fc-ltr .fc-axis{text-align:right}.fc-rtl .fc-axis{text-align:left}.ui-widget td.fc-axis{font-weight:400}.fc-time-grid,.fc-time-grid-container{position:relative;z-index:1}.fc-time-grid{min-height:100%}.fc-time-grid table{border:0 hidden transparent}.fc-time-grid>.fc-bg{z-index:1}.fc-time-grid .fc-slats,.fc-time-grid>hr{position:relative;z-index:2}.fc-time-grid .fc-content-col{position:relative}.fc-time-grid .fc-content-skeleton{position:absolute;z-index:3;top:0;left:0;right:0}.fc-time-grid .fc-business-container{position:relative;z-index:1}.fc-time-grid .fc-bgevent-container{position:relative;z-index:2}.fc-time-grid .fc-highlight-container{z-index:3}.fc-time-grid .fc-event-container{position:relative;z-index:4}.fc-time-grid .fc-now-indicator-line{z-index:5}.fc-time-grid .fc-helper-container{position:relative;z-index:6}.fc-time-grid .fc-slats td{height:1.5em;border-bottom:0}.fc-time-grid .fc-slats .fc-minor td{border-top-style:dotted}.fc-time-grid .fc-slats .ui-widget-content{background:none}.fc-time-grid .fc-highlight-container{position:relative}.fc-time-grid .fc-highlight{position:absolute;left:0;right:0}.fc-ltr .fc-time-grid .fc-event-container{margin:0 2.5% 0 2px}.fc-rtl .fc-time-grid .fc-event-container{margin:0 2px 0 2.5%}.fc-time-grid .fc-bgevent,.fc-time-grid .fc-event{position:absolute;z-index:1}.fc-time-grid .fc-bgevent{left:0;right:0}.fc-v-event.fc-not-start{border-top-width:0;padding-top:1px;border-top-left-radius:0;border-top-right-radius:0}.fc-v-event.fc-not-end{border-bottom-width:0;padding-bottom:1px;border-bottom-left-radius:0;border-bottom-right-radius:0}.fc-time-grid-event{overflow:hidden}.fc-time-grid-event.fc-selected{overflow:visible}.fc-time-grid-event.fc-selected .fc-bg{display:none}.fc-time-grid-event .fc-content{overflow:hidden}.fc-time-grid-event .fc-time,.fc-time-grid-event .fc-title{padding:0 1px}.fc-time-grid-event .fc-time{font-size:.85em;white-space:nowrap}.fc-time-grid-event.fc-short .fc-content{white-space:nowrap}.fc-time-grid-event.fc-short .fc-time,.fc-time-grid-event.fc-short .fc-title{display:inline-block;vertical-align:top}.fc-time-grid-event.fc-short .fc-time span{display:none}.fc-time-grid-event.fc-short .fc-time:before{content:attr(data-start)}.fc-time-grid-event.fc-short .fc-time:after{content:"\\A0-\\A0"}.fc-time-grid-event.fc-short .fc-title{font-size:.85em;padding:0}.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer{left:0;right:0;bottom:0;height:8px;overflow:hidden;line-height:8px;font-size:11px;font-family:monospace;text-align:center;cursor:s-resize}.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer:after{content:"="}.fc-time-grid-event.fc-selected .fc-resizer{border-radius:5px;border-width:1px;width:8px;height:8px;border-style:solid;border-color:inherit;background:#fff;left:50%;margin-left:-5px;bottom:-5px}.fc-time-grid .fc-now-indicator-line{border-top-width:1px;left:0;right:0}.fc-time-grid .fc-now-indicator-arrow{margin-top:-5px}.fc-ltr .fc-time-grid .fc-now-indicator-arrow{left:0;border-width:5px 0 5px 6px;border-top-color:transparent;border-bottom-color:transparent}.fc-rtl .fc-time-grid .fc-now-indicator-arrow{right:0;border-width:5px 6px 5px 0;border-top-color:transparent;border-bottom-color:transparent}.fc-event-dot{display:inline-block;width:10px;height:10px;border-radius:5px}.fc-rtl .fc-list-view{direction:rtl}.fc-list-view{border-width:1px;border-style:solid}.fc .fc-list-table{table-layout:auto}.fc-list-table td{border-width:1px 0 0;padding:8px 14px}.fc-list-table tr:first-child td{border-top-width:0}.fc-list-heading{border-bottom-width:1px}.fc-list-heading td{font-weight:700}.fc-ltr .fc-list-heading-main{float:left}.fc-ltr .fc-list-heading-alt,.fc-rtl .fc-list-heading-main{float:right}.fc-rtl .fc-list-heading-alt{float:left}.fc-list-item.fc-has-url{cursor:pointer}.fc-list-item:hover td{background-color:#f5f5f5}.fc-list-item-marker,.fc-list-item-time{white-space:nowrap;width:1px}.fc-ltr .fc-list-item-marker{padding-right:0}.fc-rtl .fc-list-item-marker{padding-left:0}.fc-list-item-title a{text-decoration:none;color:inherit}.fc-list-item-title a[href]:hover{text-decoration:underline}.fc-list-empty-wrap2{position:absolute;top:0;left:0;right:0;bottom:0}.fc-list-empty-wrap1{width:100%;height:100%;display:table}.fc-list-empty{display:table-cell;vertical-align:middle;text-align:center}.fc-unthemed .fc-list-empty{background-color:#eee}',""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,'.fc-view-container{background-color:#fbfbfb;color:#333}.fc-row.fc-widget-header{border-bottom:1px solid #ececec}.fc-row.fc-widget-header .fc-day-header{font-size:12px;font-weight:600;color:#acacac}.fc-axis{color:#acacac;font-size:.9em}.fc-state-default{text-shadow:none;box-shadow:none;background-image:none;background-color:#fff;border-color:#fff}.fc-button{text-transform:uppercase;font-weight:600;font-size:1.1em;border:0;outline:none}.fc-button:active,.fc-button:focus,.fc-button:hover,.fc-button:visited{outline:none;border:0;background-color:transparent}.fc-content-skeleton{border-top:1px solid #ddd}.fc .fc-toolbar{padding:0;margin-bottom:0;border-bottom:1px solid #ececec;min-height:48px}.fc .fc-toolbar>*>button{padding:15px 17px;height:auto;outline:0;margin-left:0;transition:opacity .2s ease;opacity:.3}.fc .fc-toolbar>*>button:hover{opacity:1}.fc .fc-toolbar>*>button.fc-state-disabled{transition:opacity 0s;opacity:0}.fc .fc-toolbar>*>button.fc-prev-button{padding-right:8px}.fc .fc-toolbar>*>button.fc-next-button{padding-left:8px}.fc .fc-toolbar>*>button .fc-icon{font-size:1.1em}.fc .fc-toolbar>.fc-right>button.fc-today-button{padding:15px 5px}.fc .fc-toolbar>.fc-right h2{font-size:13px;padding:15px 0 15px 20px;color:#333;font-weight:600}.fc-unthemed td.fc-today{background:#fff}.fc-body>tr>.fc-widget-content,.fc-head>tr>.fc-widget-header{border:0!important}.fc th{border-color:#fff;padding:5px}.fc-unthemed .fc-divider,.fc-unthemed .fc-popover .fc-header{background-color:transparent}.empty-calendar .fc-event{opacity:0}.fc-event{transition:color .2s ease,border-color .2s ease,opacity .6s ease,box-shadow .2s ease;border:none;border-left:2px solid #939393;padding:3px;background-color:#fff;border-radius:3px;color:#333;margin:1px 0;box-shadow:0 1px 2px rgba(0,0,0,.07);cursor:pointer;margin-bottom:2px;opacity:1}.fc-event-clicked,.fc-event:hover{box-shadow:0 2px 4px rgba(0,0,0,.12);border-left:3px solid #2e5bec;color:#2e5bec;font-weight:600;padding-left:2px}.fc-event .fc-content{-webkit-transform:translateX(0);transform:translateX(0);transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}.fc-event:hover .fc-content{-webkit-transform:translateX(2px);transform:translateX(2px)}.fc-event .fc-bg{opacity:0}.fc-day-grid-event{padding:13px 15px;margin:1px 0 3px}.fc-day-grid-event-clicked,.fc-day-grid-event:hover{padding-left:14px}.fc-day-grid-event .fc-time,.fc-day-grid-event .fc-title{font-size:12px;font-weight:500}.fc-day-grid-event .fc-title{padding:0 5px 5px}.fc-day-grid-event-clicked .fc-time,.fc-day-grid-event-clicked .fc-title,.fc-day-grid-event:hover .fc-time,.fc-day-grid-event:hover .fc-title{font-weight:600}.fc-time-grid .fc-slats .fc-minor td{border-top-style:none}.fc-time-grid .fc-slats td{border-top-color:#fbfbfb}.fc-time-grid .fc-slats td.fc-axis{border-top-color:#ececec}.fc-time-grid-event.fc-short .fc-content{font-size:.7em;line-height:.2em}.fc-time-grid-event.fc-short .fc-time:after{content:""}.fc-time-grid-event .fc-time{font-size:1.1em;padding:5px}.fc-time-grid-event .fc-title{padding:0 5px 5px;font-weight:700}.fc-unthemed .fc-divider,.fc-unthemed .fc-popover,.fc-unthemed .fc-row,.fc-unthemed tbody,.fc-unthemed td,.fc-unthemed th,.fc-unthemed thead{border-color:#ececec}.fc-agendaMonthly-view .fc-event{color:#fff}.fc-now-indicator{border-color:rgba(255,0,0,.5)}.fc-unthemed .fc-basic-view .fc-scroller{padding:5px 15px}.fc-unthemed .fc-basic-view .fc-content-skeleton{border-top:0}.fc-unthemed .fc-list-view .fc-scroller{padding:0 15px}.fc-list-view{border-width:0}.fc-list-table{width:80%;max-width:400px;margin:0 auto}.fc-unthemed .fc-list-heading td{background:transparent;border-color:transparent;font-size:1.3em;line-height:1em;padding:20px 19px 15px;font-weight:500;color:#2e5bec}.fc-unthemed .fc-list-heading td .fc-list-heading-alt{color:#acacac}.is-small .fc-unthemed .fc-list-heading td{font-size:1.1em}.fc-list-item{display:block;transition:color .2s ease,border-color .2s ease,opacity .6s ease,box-shadow .2s ease;border:none;border-left:2px solid #939393;padding:3px;background-color:#fff;border-radius:3px;color:#333;margin:1px 0;box-shadow:0 1px 2px rgba(0,0,0,.07);cursor:pointer;margin-bottom:3px;font-weight:500;font-size:12px}.fc-list-item:hover{box-shadow:0 2px 4px rgba(0,0,0,.12);border-left:3px solid #2e5bec;color:#2e5bec;font-weight:600;padding-left:2px}.fc-list-item td{background:transparent;border-color:transparent;-webkit-transform:translateX(0);transform:translateX(0);transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}.fc-list-item:hover td{background:transparent;-webkit-transform:translateX(2px);transform:translateX(2px)}.fc-list-item .fc-list-item-marker{display:none}.fc-list-item .fc-list-item-time{padding-right:0;min-width:110px}.fc-list-item .fc-list-item-title a{font-weight:600}.fc-unthemed .fc-list-empty{background-color:transparent}',""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);",""]),t.push([e.id,"/*!\n * Booking.js\n * http://timekit.io\n * (c) 2015 Timekit Inc.\n */.bookingjs{position:relative;font-family:Open Sans,Helvetica,Tahoma,Arial,sans-serif;font-size:13px;border-radius:4px;background-color:#fff;box-shadow:0 3px 40px 0 rgba(0,0,0,.15);margin:20px auto;z-index:10;opacity:1;color:#333;border-top:1px solid #ececec;min-height:200px}.bookingjs.has-avatar{margin-top:60px}.is-small.has-avatar.has-displayname .bookingjs-calendar .fc-toolbar{padding-bottom:24px}.is-small .bookingjs-calendar .fc-toolbar>.fc-right>button.fc-today-button{position:absolute;left:15px}.is-small.has-avatar .bookingjs-calendar .fc-toolbar .fc-right h2{display:none}.bookingjs-timezonehelper{color:#aeaeae;text-align:center;padding:7px 10px;background-color:#fbfbfb;border-top:1px solid #ececec;min-height:15px;z-index:20;border-radius:0 0 4px 4px}.bookingjs-timezoneicon{width:10px;margin-right:5px}.bookingjs-avatar{position:absolute;top:-50px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:150px;border:3px solid #fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.13);overflow:hidden;z-index:40;background-color:#fff}.is-small .bookingjs-avatar{top:-40px}.bookingjs-avatar img{max-width:100%;vertical-align:middle;display:inline-block;width:80px;height:80px}.is-small .bookingjs-avatar img{width:70px;height:70px}.bookingjs-displayname{position:absolute;top:0;left:0;padding:15px 20px;color:#333;font-weight:600}.is-small.has-avatar .bookingjs-displayname{top:44px;padding:0 20px;text-align:center;left:0;right:0;box-sizing:border-box}.bookingjs-bookpage{position:absolute;height:100%;width:100%;top:0;left:0;background-color:#fbfbfb;z-index:30;opacity:0;transition:opacity .2s ease;border-radius:4px}.bookingjs-bookpage.show{opacity:1}.bookingjs-bookpage-close{position:absolute;top:0;right:0;padding:18px;transition:opacity .2s ease;opacity:.3}.bookingjs-bookpage-close:hover{opacity:1}.bookingjs-bookpage-date,.bookingjs-bookpage h2{text-align:center;font-size:34px;font-weight:400;margin-top:70px;margin-bottom:10px}.is-small .bookingjs-bookpage-date,.is-small .bookingjs-bookpage h2{font-size:27px;margin-top:60px}.bookingjs-bookpage-time,.bookingjs-bookpage h3{text-align:center;font-size:17px;font-weight:400;margin-bottom:50px;margin-top:10px}.is-small .bookingjs-bookpage-time,.is-small .bookingjs-bookpage h3{font-size:15px;margin-bottom:35px}.bookingjs-closeicon{height:15px;width:15px}.bookingjs-form{width:350px;position:relative;margin:0 auto;text-align:center}.is-small .bookingjs-form{width:90%}.bookingjs-form-box{position:relative;box-shadow:0 1px 3px 0 rgba(0,0,0,.1);overflow:hidden;background-color:#fff;line-height:0}.bookingjs-form-success-message{position:absolute;top:-999px;left:0;right:0;padding:30px;z-index:10;background-color:#fff;opacity:0;transition:opacity .3s ease;line-height:normal}.is-small .bookingjs-form-success-message{padding:22px 10px}.bookingjs-form-success-message .title{font-size:20px;display:block;margin-bottom:25px}.bookingjs-form-success-message .body{display:block}.bookingjs-form-success-message .body .booked-email{color:#aeaeae}.bookingjs-form.success .bookingjs-form-success-message{opacity:1;top:0;bottom:0}.bookingjs-form-field{position:relative}.bookingjs-form-field--dirty .bookingjs-form-label{opacity:1;top:20px;font-size:11px;color:#2e5bec}.bookingjs-form-field--dirty .bookingjs-form-input{padding:25px 25px 5px}.bookingjs-form-field--dirty .bookingjs-form-input--textarea{padding:30px 25px 10px}.bookingjs-form-label{position:absolute;top:30px;left:25px;color:#333;opacity:0;font-size:12px;transition:opacity .2s ease,font-size .2s ease,color .2s ease,top .2s ease}.bookingjs-form-input,.bookingjs-form input,.bookingjs-form input:invalid textarea,.bookingjs-form textarea:invalid{transition:box-shadow .2s ease;width:100%;padding:15px 25px;margin:0;border:0 solid #ececec;font-size:1em;box-shadow:inset 0 0 1px 1px hsla(0,0%,100%,0);text-align:left;box-sizing:border-box;line-height:1.5em;font-family:Open Sans,Helvetica,Tahoma,Arial,sans-serif;color:#333;overflow:auto;border-bottom:1px solid #ececec}.bookingjs-form-input:focus,.bookingjs-form input:focus,.bookingjs-form input:invalid textarea:focus,.bookingjs-form textarea:invalid:focus{outline:0;box-shadow:inset 0 0 1px 1px #2e5bec}.bookingjs-form-input.hidden,.bookingjs-form input.hidden,.bookingjs-form input:invalid textarea.hidden,.bookingjs-form textarea:invalid.hidden{display:none}.bookingjs-form-input:-moz-read-only,.bookingjs-form input:-moz-read-only,.bookingjs-form input:invalid textarea:-moz-read-only,.bookingjs-form textarea:invalid:-moz-read-only{cursor:not-allowed;font-style:italic}.bookingjs-form-input:read-only,.bookingjs-form input:invalid textarea:read-only,.bookingjs-form input:read-only,.bookingjs-form textarea:invalid:read-only{cursor:not-allowed;font-style:italic}.bookingjs-form-input:-moz-read-only:focus,.bookingjs-form input:-moz-read-only:focus,.bookingjs-form input:invalid textarea:-moz-read-only:focus,.bookingjs-form textarea:invalid:-moz-read-only:focus{box-shadow:inset 0 0 1px 1px #d8d8d8}.bookingjs-form-input:read-only:focus,.bookingjs-form input:invalid textarea:read-only:focus,.bookingjs-form input:read-only:focus,.bookingjs-form textarea:invalid:read-only:focus{box-shadow:inset 0 0 1px 1px #d8d8d8}.bookingjs-form-input--textarea{padding:15px 25px 25px;overflow:auto}.bookingjs-form-button{position:relative;transition:background-color .2s,max-width .3s;display:inline-block;padding:13px 25px;background-color:#2e5bec;text-transform:uppercase;box-shadow:0 1px 3px 0 rgba(0,0,0,.15);color:#fff;border:0;border-radius:3px;font-size:1.1em;font-weight:600;margin-top:30px;cursor:pointer;height:44px;outline:0;text-align:center;max-width:200px}.bookingjs-form-button .error-text,.bookingjs-form-button .loading-text,.bookingjs-form-button .success-text{transition:opacity .3s ease;position:absolute;top:13px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);opacity:0}.bookingjs-form-button .inactive-text{white-space:nowrap;opacity:1}.bookingjs-form-button .loading-text svg{height:19px;width:19px;-webkit-animation:spin .6s infinite linear;animation:spin .6s infinite linear}.bookingjs-form-button .error-text svg{height:15px;width:15px;margin-top:2px}.bookingjs-form-button .success-text svg{height:15px;margin-top:2px;-webkit-transform:scale(0);transform:scale(0);transition:-webkit-transform .6s ease;transition:transform .6s ease;transition:transform .6s ease,-webkit-transform .6s ease}.bookingjs-form-button:focus,.bookingjs-form-button:hover{background-color:#1341d4}.bookingjs-form-button.button-shake{-webkit-animation:shake .5s 1 ease;animation:shake .5s 1 ease}.bookingjs-form.loading .bookingjs-form-button,.bookingjs-form.loading .bookingjs-form-button:hover{max-width:80px;background-color:#b1b1b1;cursor:not-allowed}.bookingjs-form.loading .bookingjs-form-button .inactive-text,.bookingjs-form.loading .bookingjs-form-button:hover .inactive-text{opacity:0}.bookingjs-form.loading .bookingjs-form-button .loading-text,.bookingjs-form.loading .bookingjs-form-button:hover .loading-text{opacity:1}.bookingjs-form.error .bookingjs-form-button,.bookingjs-form.error .bookingjs-form-button:hover{max-width:80px;background-color:#d83b46;cursor:not-allowed}.bookingjs-form.error .bookingjs-form-button .inactive-text,.bookingjs-form.error .bookingjs-form-button:hover .inactive-text{opacity:0}.bookingjs-form.error .bookingjs-form-button .error-text,.bookingjs-form.error .bookingjs-form-button:hover .error-text{opacity:1}.bookingjs-form.success .bookingjs-form-button,.bookingjs-form.success .bookingjs-form-button:hover{max-width:80px;background-color:#5baf56;cursor:pointer}.bookingjs-form.success .bookingjs-form-button .inactive-text,.bookingjs-form.success .bookingjs-form-button:hover .inactive-text{opacity:0}.bookingjs-form.success .bookingjs-form-button .success-text,.bookingjs-form.success .bookingjs-form-button:hover .success-text{opacity:1}.bookingjs-form.success .bookingjs-form-button .success-text svg,.bookingjs-form.success .bookingjs-form-button:hover .success-text svg{-webkit-transform:scale(1);transform:scale(1)}.bookingjs-poweredby{position:absolute;bottom:0;left:0;right:0;text-align:center;padding:7px 10px}.bookingjs-poweredby a{transition:color .2s ease;color:#aeaeae;text-decoration:none}.bookingjs-poweredby a svg path{transition:fill .2s ease;fill:#aeaeae}.bookingjs-poweredby a:hover{color:#333}.bookingjs-poweredby a:hover svg path{fill:#333}.bookingjs-timekitlogo{width:15px;height:15px;margin-right:5px;vertical-align:sub}.bookingjs-loading{position:absolute;height:100%;width:100%;top:0;left:0;background-color:#fbfbfb;z-index:30;opacity:0;transition:opacity .5s ease;border-radius:4px}.bookingjs-loading.show{opacity:1}.bookingjs-loading-icon{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.bookingjs-loading-icon svg{height:30px;width:30px;-webkit-animation:spin .6s infinite linear;animation:spin .6s infinite linear}.bookingjs-loading-icon svg path{fill:#2e5bec}.bookingjs-error{position:absolute;height:100%;width:100%;top:0;left:0;background-color:#fbfbfb;z-index:31;opacity:0;transition:opacity .5s ease;border-radius:4px}.bookingjs-error.show{opacity:1}.bookingjs-error-inner{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);text-align:center;overflow:scroll;max-height:100%;padding:30px;box-sizing:border-box;width:100%}.bookingjs-error-icon svg{height:30px;width:30px}.bookingjs-error-icon svg g{fill:#d83b46}.bookingjs-error-heading{color:#d83b46;font-size:15px;margin:15px 0}.bookingjs-error-text{font-size:12px;color:#aeaeae;word-break:break-word;overflow:scroll}.bookingjs-error-text-context,.bookingjs-error-text-messag{display:block}",""]);
},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes shake{0%{-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-transform:translateX(5px);transform:translateX(5px)}50%{-webkit-transform:translateX(-5px);transform:translateX(-5px)}75%{-webkit-transform:translateX(5px);transform:translateX(5px)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes shake{0%{-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-transform:translateX(5px);transform:translateX(5px)}50%{-webkit-transform:translateX(-5px);transform:translateX(-5px)}75%{-webkit-transform:translateX(5px);transform:translateX(5px)}to{-webkit-transform:translateX(0);transform:translateX(0)}}",""])},function(e,t,n){(function(t,i,r){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   3.3.1
	 */
!function(t,n){e.exports=n()}(this,function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function i(e){return"function"==typeof e}function o(e){X=e}function a(e){K=e}function s(){return function(){return t.nextTick(h)}}function l(){return function(){Z(h)}}function c(){var e=0,t=new Q(h),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function u(){var e=new MessageChannel;return e.port1.onmessage=h,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(h,1)}}function h(){for(var e=0;e<U;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}U=0}function f(){try{var e=n(66);return Z=e.runOnLoop||e.runOnContext,l()}catch(e){return d()}}function p(e,t){var n=arguments,i=this,r=new this.constructor(m);void 0===r[re]&&P(r);var o=i._state;return o?!function(){var e=n[o-1];K(function(){return R(o,r,e,i._result)})}():_(i,r,e,t),r}function g(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(m);return x(n,e),n}function m(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function b(){return new TypeError("A promises callback cannot return that same promise.")}function y(e){try{return e.then}catch(e){return le.error=e,le}}function w(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function k(e,t,n){K(function(e){var i=!1,r=w(n,t,function(n){i||(i=!0,t!==n?x(e,n):D(e,n))},function(t){i||(i=!0,E(e,t))},"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,E(e,r))},e)}function S(e,t){t._state===ae?D(e,t._result):t._state===se?E(e,t._result):_(t,void 0,function(t){return x(e,t)},function(t){return E(e,t)})}function A(e,t,n){t.constructor===e.constructor&&n===p&&t.constructor.resolve===g?S(e,t):n===le?E(e,le.error):void 0===n?D(e,t):i(n)?k(e,t,n):D(e,t)}function x(t,n){t===n?E(t,v()):e(n)?A(t,n,y(n)):D(t,n)}function T(e){e._onerror&&e._onerror(e._result),C(e)}function D(e,t){e._state===oe&&(e._result=t,e._state=ae,0!==e._subscribers.length&&K(C,e))}function E(e,t){e._state===oe&&(e._state=se,e._result=t,K(T,e))}function _(e,t,n,i){var r=e._subscribers,o=r.length;e._onerror=null,r[o]=t,r[o+ae]=n,r[o+se]=i,0===o&&e._state&&K(C,e)}function C(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,o=e._result,a=0;a<t.length;a+=3)i=t[a],r=t[a+n],i?R(n,i,r,o):r(o);e._subscribers.length=0}}function M(){this.error=null}function z(e,t){try{return e(t)}catch(e){return ce.error=e,ce}}function R(e,t,n,r){var o=i(n),a=void 0,s=void 0,l=void 0,c=void 0;if(o){if(a=z(n,r),a===ce?(c=!0,s=a.error,a=null):l=!0,t===a)return void E(t,b())}else a=r,l=!0;t._state!==oe||(o&&l?x(t,a):c?E(t,s):e===ae?D(t,a):e===se&&E(t,a))}function H(e,t){try{t(function(t){x(e,t)},function(t){E(e,t)})}catch(t){E(e,t)}}function L(){return ue++}function P(e){e[re]=ue++,e._state=void 0,e._result=void 0,e._subscribers=[]}function j(e,t){this._instanceConstructor=e,this.promise=new e(m),this.promise[re]||P(this.promise),V(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?D(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&D(this.promise,this._result))):E(this.promise,O())}function O(){return new Error("Array Methods must be provided an Array")}function I(e){return new j(this,e).promise}function N(e){var t=this;return new t(V(e)?function(n,i){for(var r=e.length,o=0;o<r;o++)t.resolve(e[o]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function F(e){var t=this,n=new t(m);return E(n,e),n}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function G(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function Y(e){this[re]=L(),this._result=this._state=void 0,this._subscribers=[],m!==e&&("function"!=typeof e&&B(),this instanceof Y?H(this,e):G())}function W(){var e=void 0;if("undefined"!=typeof r)e=r;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=Y}var q=void 0;q=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var V=q,U=0,Z=void 0,X=void 0,K=function(e,t){ne[U]=e,ne[U+1]=t,U+=2,2===U&&(X?X(h):ie())},J="undefined"!=typeof window?window:void 0,$=J||{},Q=$.MutationObserver||$.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),ie=void 0;ie=ee?s():Q?c():te?u():void 0===J?f():d();var re=Math.random().toString(36).substring(16),oe=void 0,ae=1,se=2,le=new M,ce=new M,ue=0;return j.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===oe&&n<e;n++)this._eachEntry(t[n],n)},j.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===g){var r=y(e);if(r===p&&e._state!==oe)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===Y){var o=new n(m);A(o,e,r),this._willSettleAt(o,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},j.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===oe&&(this._remaining--,e===se?E(i,n):this._result[t]=n),0===this._remaining&&D(i,this._result)},j.prototype._willSettleAt=function(e,t){var n=this;_(e,void 0,function(e){return n._settledAt(ae,t,e)},function(e){return n._settledAt(se,t,e)})},Y.all=I,Y.race=N,Y.resolve=g,Y.reject=F,Y._setScheduler=o,Y._setAsap=a,Y._asap=K,Y.prototype={constructor:Y,then:p,catch:function(e){return this.then(null,e)}},W(),Y.polyfill=W,Y.Promise=Y,Y})}).call(t,n(7),n(4),function(){return this}())},function(e,t,n){var i,r,o;/*!
	 * FullCalendar v3.4.0
	 * Docs & License: https://fullcalendar.io/
	 * (c) 2017 Adam Shaw
	 */
!function(a){r=[n(14),n(5)],i=a,o="function"==typeof i?i.apply(t,r):i,!(void 0!==o&&(e.exports=o))}(function(e,t){function n(e){return ie(e,Ke)}function i(e,t){t.left&&e.css({"border-left-width":1,"margin-left":t.left-1}),t.right&&e.css({"border-right-width":1,"margin-right":t.right-1})}function r(e){e.css({"margin-left":"","margin-right":"","border-left-width":"","border-right-width":""})}function o(){e("body").addClass("fc-not-allowed")}function a(){e("body").removeClass("fc-not-allowed")}function s(t,n,i){var r=Math.floor(n/t.length),o=Math.floor(n-r*(t.length-1)),a=[],s=[],c=[],u=0;l(t),t.each(function(n,i){var l=n===t.length-1?o:r,d=e(i).outerHeight(!0);d<l?(a.push(i),s.push(d),c.push(e(i).height())):u+=d}),i&&(n-=u,r=Math.floor(n/a.length),o=Math.floor(n-r*(a.length-1))),e(a).each(function(t,n){var i=t===a.length-1?o:r,l=s[t],u=c[t],d=i-(l-u);l<i&&e(n).height(d)})}function l(e){e.height("")}function c(t){var n=0;return t.find("> *").each(function(t,i){var r=e(i).outerWidth();r>n&&(n=r)}),n++,t.width(n),n}function u(e,t){var n,i=e.add(t);return i.css({position:"relative",left:-1}),n=e.outerHeight()-t.outerHeight(),i.css({position:"",left:""}),n}function d(t){var n=t.css("position"),i=t.parents().filter(function(){var t=e(this);return/(auto|scroll)/.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==n&&i.length?i:e(t[0].ownerDocument||document)}function h(e,t){var n=e.offset(),i=n.left-(t?t.left:0),r=n.top-(t?t.top:0);return{left:i,right:i+e.outerWidth(),top:r,bottom:r+e.outerHeight()}}function f(e,t){var n=e.offset(),i=g(e),r=n.left+y(e,"border-left-width")+i.left-(t?t.left:0),o=n.top+y(e,"border-top-width")+i.top-(t?t.top:0);return{left:r,right:r+e[0].clientWidth,top:o,bottom:o+e[0].clientHeight}}function p(e,t){var n=e.offset(),i=n.left+y(e,"border-left-width")+y(e,"padding-left")-(t?t.left:0),r=n.top+y(e,"border-top-width")+y(e,"padding-top")-(t?t.top:0);return{left:i,right:i+e.width(),top:r,bottom:r+e.height()}}function g(e){var t,n=e[0].offsetWidth-e[0].clientWidth,i=e[0].offsetHeight-e[0].clientHeight;return n=m(n),i=m(i),t={left:0,right:0,top:0,bottom:i},v()&&"rtl"==e.css("direction")?t.left=n:t.right=n,t}function m(e){return e=Math.max(0,e),e=Math.round(e)}function v(){return null===Je&&(Je=b()),Je}function b(){var t=e("<div><div/></div>").css({position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}).appendTo("body"),n=t.children(),i=n.offset().left>t.offset().left;return t.remove(),i}function y(e,t){return parseFloat(e.css(t))||0}function w(e){return 1==e.which&&!e.ctrlKey}function k(e){var t=e.originalEvent.touches;return t&&t.length?t[0].pageX:e.pageX}function S(e){var t=e.originalEvent.touches;return t&&t.length?t[0].pageY:e.pageY}function A(e){return/^touch/.test(e.type)}function x(e){e.addClass("fc-unselectable").on("selectstart",D)}function T(e){e.removeClass("fc-unselectable").off("selectstart",D)}function D(e){e.preventDefault()}function E(e,t){var n={left:Math.max(e.left,t.left),right:Math.min(e.right,t.right),top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)};return n.left<n.right&&n.top<n.bottom&&n}function _(e,t){return{left:Math.min(Math.max(e.left,t.left),t.right),top:Math.min(Math.max(e.top,t.top),t.bottom)}}function C(e){return{left:(e.left+e.right)/2,top:(e.top+e.bottom)/2}}function M(e,t){return{left:e.left-t.left,top:e.top-t.top}}function z(t){var n,i,r=[],o=[];for("string"==typeof t?o=t.split(/\s*,\s*/):"function"==typeof t?o=[t]:e.isArray(t)&&(o=t),n=0;n<o.length;n++)i=o[n],"string"==typeof i?r.push("-"==i.charAt(0)?{field:i.substring(1),order:-1}:{field:i,order:1}):"function"==typeof i&&r.push({func:i});return r}function R(e,t,n){var i,r;for(i=0;i<n.length;i++)if(r=H(e,t,n[i]))return r;return 0}function H(e,t,n){return n.func?n.func(e,t):L(e[n.field],t[n.field])*(n.order||1)}function L(t,n){return t||n?null==n?-1:null==t?1:"string"===e.type(t)||"string"===e.type(n)?String(t).localeCompare(String(n)):t-n:0}function P(e,t){var n,i,r,o,a=e.start,s=e.end,l=t.start,c=t.end;if(s>l&&a<c)return a>=l?(n=a.clone(),r=!0):(n=l.clone(),r=!1),s<=c?(i=s.clone(),o=!0):(i=c.clone(),o=!1),{start:n,end:i,isStart:r,isEnd:o}}function j(e,n){return t.duration({days:e.clone().stripTime().diff(n.clone().stripTime(),"days"),ms:e.time()-n.time()})}function O(e,n){return t.duration({days:e.clone().stripTime().diff(n.clone().stripTime(),"days")})}function I(e,n,i){return t.duration(Math.round(e.diff(n,i,!0)),i)}function N(e,t){var n,i,r;for(n=0;n<Qe.length&&(i=Qe[n],r=B(i,e,t),!(r>=1&&me(r)));n++);return i}function F(e,t){var n=N(e);return"week"===n&&"object"==typeof t&&t.days&&(n="day"),n}function B(e,n,i){return null!=i?i.diff(n,e,!0):t.isDuration(n)?n.as(e):n.end.diff(n.start,e,!0)}function G(e,t,n){var i;return ee(n)?(t-e)/n:(i=n.asMonths(),Math.abs(i)>=1&&me(i)?t.diff(e,"months",!0)/i:t.diff(e,"days",!0)/n.asDays())}function Y(e,t){var n,i;return ee(e)||ee(t)?e/t:(n=e.asMonths(),i=t.asMonths(),Math.abs(n)>=1&&me(n)&&Math.abs(i)>=1&&me(i)?n/i:e.asDays()/t.asDays())}function W(e,n){var i;return ee(e)?t.duration(e*n):(i=e.asMonths(),Math.abs(i)>=1&&me(i)?t.duration({months:i*n}):t.duration({days:e.asDays()*n}))}function q(e){return{start:e.start.clone(),end:e.end.clone()}}function V(e,t){return e=q(e),t.start&&(e.start=U(e.start,t)),t.end&&(e.end=$(e.end,t.end)),e}function U(e,t){return e=e.clone(),t.start&&(e=Q(e,t.start)),t.end&&e>=t.end&&(e=t.end.clone().subtract(1)),e}function Z(e,t){return(!t.start||e>=t.start)&&(!t.end||e<t.end)}function X(e,t){return(!t.start||e.end>=t.start)&&(!t.end||e.start<t.end)}function K(e,t){return(!t.start||e.start>=t.start)&&(!t.end||e.end<=t.end)}function J(e,t){return(e.start&&t.start&&e.start.isSame(t.start)||!e.start&&!t.start)&&(e.end&&t.end&&e.end.isSame(t.end)||!e.end&&!t.end)}function $(e,t){return(e.isBefore(t)?e:t).clone()}function Q(e,t){return(e.isAfter(t)?e:t).clone()}function ee(e){return Boolean(e.hours()||e.minutes()||e.seconds()||e.milliseconds())}function te(e){return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}function ne(e){return/^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(e)}function ie(e,t){var n,i,r,o,a,s,l={};if(t)for(n=0;n<t.length;n++){for(i=t[n],r=[],o=e.length-1;o>=0;o--)if(a=e[o][i],"object"==typeof a)r.unshift(a);else if(void 0!==a){l[i]=a;break}r.length&&(l[i]=ie(r))}for(n=e.length-1;n>=0;n--){s=e[n];for(i in s)i in l||(l[i]=s[i])}return l}function re(e){var t=function(){};return t.prototype=e,new t}function oe(e,t){for(var n in e)ae(e,n)&&(t[n]=e[n])}function ae(e,t){return et.call(e,t)}function se(t){return/undefined|null|boolean|number|string/.test(e.type(t))}function le(t,n,i){if(e.isFunction(t)&&(t=[t]),t){var r,o;for(r=0;r<t.length;r++)o=t[r].apply(n,i)||o;return o}}function ce(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]}function ue(e){return(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function de(e){return e.replace(/&.*?;/g,"")}function he(t){var n=[];return e.each(t,function(e,t){null!=t&&n.push(e+":"+t)}),n.join(";")}function fe(t){var n=[];return e.each(t,function(e,t){null!=t&&n.push(e+'="'+ue(t)+'"')}),n.join(" ")}function pe(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ge(e,t){return e-t}function me(e){return e%1===0}function ve(e,t){var n=e[t];return function(){return n.apply(e,arguments)}}function be(e,t,n){var i,r,o,a,s,l=function(){var c=+new Date-a;c<t?i=setTimeout(l,t-c):(i=null,n||(s=e.apply(o,r),o=r=null))};return function(){o=this,r=arguments,a=+new Date;var c=n&&!i;return i||(i=setTimeout(l,t)),c&&(s=e.apply(o,r),o=r=null),s}}function ye(n,i,r){var o,a,s,l,c=n[0],u=1==n.length&&"string"==typeof c;return t.isMoment(c)||te(c)||void 0===c?l=t.apply(null,n):(o=!1,a=!1,u?tt.test(c)?(c+="-01",n=[c],o=!0,a=!0):(s=nt.exec(c))&&(o=!s[5],a=!0):e.isArray(c)&&(a=!0),l=i||o?t.utc.apply(t,n):t.apply(null,n),o?(l._ambigTime=!0,l._ambigZone=!0):r&&(a?l._ambigZone=!0:u&&l.utcOffset(c))),l._fullCalendar=!0,l}function we(e){return"en"!==e.locale()?e.clone().locale("en"):e}function ke(){}function Se(e,t){var n;return ae(t,"constructor")&&(n=t.constructor),"function"!=typeof n&&(n=t.constructor=function(){e.apply(this,arguments)}),n.prototype=re(e.prototype),oe(t,n.prototype),oe(e,n),n}function Ae(e,t){oe(t,e.prototype)}function xe(e,t){e.then=function(n){return"function"==typeof n&&n(t),e}}function Te(e){e.then=function(t,n){return"function"==typeof n&&n(),e}}function De(e,t){return!e&&!t||!(!e||!t)&&(e.component===t.component&&Ee(e,t)&&Ee(t,e))}function Ee(e,t){for(var n in e)if(!/^(component|left|right|top|bottom)$/.test(n)&&e[n]!==t[n])return!1;return!0}function _e(e){return{start:e.start.clone(),end:e.end?e.end.clone():null,allDay:e.allDay}}function Ce(e){var t=ze(e);return"background"===t||"inverse-background"===t}function Me(e){return"inverse-background"===ze(e)}function ze(e){return ce((e.source||{}).rendering,e.rendering)}function Re(e){var t,n,i={};for(t=0;t<e.length;t++)n=e[t],(i[n._id]||(i[n._id]=[])).push(n);return i}function He(e,t){return e.start-t.start}function Le(n){var i,r,o,a,s=Ze.dataAttrPrefix;return s&&(s+="-"),i=n.data(s+"event")||null,i&&(i="object"==typeof i?e.extend({},i):{},r=i.start,null==r&&(r=i.time),o=i.duration,a=i.stick,delete i.start,delete i.time,delete i.duration,delete i.stick),null==r&&(r=n.data(s+"start")),null==r&&(r=n.data(s+"time")),null==o&&(o=n.data(s+"duration")),null==a&&(a=n.data(s+"stick")),r=null!=r?t.duration(r):null,o=null!=o?t.duration(o):null,a=Boolean(a),{eventProps:i,startTime:r,duration:o,stick:a}}function Pe(e,t){var n,i;for(n=0;n<t.length;n++)if(i=t[n],i.leftCol<=e.rightCol&&i.rightCol>=e.leftCol)return!0;return!1}function je(e,t){return e.leftCol-t.leftCol}function Oe(e){var t,n,i,r=[];for(t=0;t<e.length;t++){for(n=e[t],i=0;i<r.length&&Fe(n,r[i]).length;i++);n.level=i,(r[i]||(r[i]=[])).push(n)}return r}function Ie(e){var t,n,i,r,o;for(t=0;t<e.length;t++)for(n=e[t],i=0;i<n.length;i++)for(r=n[i],r.forwardSegs=[],o=t+1;o<e.length;o++)Fe(r,e[o],r.forwardSegs)}function Ne(e){var t,n,i=e.forwardSegs,r=0;if(void 0===e.forwardPressure){for(t=0;t<i.length;t++)n=i[t],Ne(n),r=Math.max(r,1+n.forwardPressure);e.forwardPressure=r}}function Fe(e,t,n){n=n||[];for(var i=0;i<t.length;i++)Be(e,t[i])&&n.push(t[i]);return n}function Be(e,t){return e.bottom>t.top&&e.top<t.bottom}function Ge(e){this.items=e||[]}function Ye(t,n){function i(e){n=e}function r(){var i=n.layout;g=t.opt("theme")?"ui":"fc",i?(p?p.empty():p=this.el=e("<div class='fc-toolbar "+n.extraClasses+"'/>"),p.append(a("left")).append(a("right")).append(a("center")).append('<div class="fc-clear"/>')):o()}function o(){p&&(p.remove(),p=f.el=null)}function a(i){var r=e('<div class="fc-'+i+'"/>'),o=n.layout[i],a=t.opt("customButtons")||{},s=t.opt("buttonText")||{};return o&&e.each(o.split(" "),function(n){var i,o=e(),l=!0;e.each(this.split(","),function(n,i){var r,c,u,d,h,f,p,v,b,y;"title"==i?(o=o.add(e("<h2>&nbsp;</h2>")),l=!1):((r=a[i])?(u=function(e){r.click&&r.click.call(y[0],e)},d="",h=r.text):(c=t.getViewSpec(i))?(u=function(){t.changeView(i)},m.push(i),d=c.buttonTextOverride,h=c.buttonTextDefault):t[i]&&(u=function(){t[i]()},d=(t.overrides.buttonText||{})[i],h=s[i]),u&&(f=r?r.themeIcon:t.opt("themeButtonIcons")[i],p=r?r.icon:t.opt("buttonIcons")[i],v=d?ue(d):f&&t.opt("theme")?"<span class='ui-icon ui-icon-"+f+"'></span>":p&&!t.opt("theme")?"<span class='fc-icon fc-icon-"+p+"'></span>":ue(h),b=["fc-"+i+"-button",g+"-button",g+"-state-default"],y=e('<button type="button" class="'+b.join(" ")+'">'+v+"</button>").click(function(e){y.hasClass(g+"-state-disabled")||(u(e),(y.hasClass(g+"-state-active")||y.hasClass(g+"-state-disabled"))&&y.removeClass(g+"-state-hover"))}).mousedown(function(){y.not("."+g+"-state-active").not("."+g+"-state-disabled").addClass(g+"-state-down")}).mouseup(function(){y.removeClass(g+"-state-down")}).hover(function(){y.not("."+g+"-state-active").not("."+g+"-state-disabled").addClass(g+"-state-hover")},function(){y.removeClass(g+"-state-hover").removeClass(g+"-state-down")}),o=o.add(y)))}),l&&o.first().addClass(g+"-corner-left").end().last().addClass(g+"-corner-right").end(),o.length>1?(i=e("<div/>"),l&&i.addClass("fc-button-group"),i.append(o),r.append(i)):r.append(o)}),r}function s(e){p&&p.find("h2").text(e)}function l(e){p&&p.find(".fc-"+e+"-button").addClass(g+"-state-active")}function c(e){p&&p.find(".fc-"+e+"-button").removeClass(g+"-state-active")}function u(e){p&&p.find(".fc-"+e+"-button").prop("disabled",!0).addClass(g+"-state-disabled")}function d(e){p&&p.find(".fc-"+e+"-button").prop("disabled",!1).removeClass(g+"-state-disabled")}function h(){return m}var f=this;f.setToolbarOptions=i,f.render=r,f.removeElement=o,f.updateTitle=s,f.activateButton=l,f.deactivateButton=c,f.disableButton=u,f.enableButton=d,f.getViewsWithButtons=h,f.el=null;var p,g,m=[]}function We(t){e.each(zt,function(e,n){null==t[e]&&(t[e]=n(t))})}function qe(e){return t.localeData(e)||t.localeData("en")}function Ve(){function n(e,t){return!q.opt("lazyFetching")||o(e,t)?a(e,t):ut.resolve(Z)}function i(){Z=r($),q.trigger("eventsReset",Z)}function r(e){var t,n,i=[];for(t=0;t<e.length;t++)n=e[t],n.start.clone().stripZone()<U&&q.getEventEnd(n).stripZone()>V&&i.push(n);return i}function o(e,t){return!V||e<V||t>U}function a(e,t){return V=e,U=t,s()}function s(){return c(K,"reset")}function l(e){return c(k(e))}function c(e,t){var n,i;for("reset"===t?$=[]:"add"!==t&&($=T($,e)),n=0;n<e.length;n++)i=e[n],"pending"!==i._status&&J++,i._fetchId=(i._fetchId||0)+1,i._status="pending";for(n=0;n<e.length;n++)i=e[n],u(i,i._fetchId);return J?ut.construct(function(e){q.one("eventsReceived",e)}):ut.resolve(Z)}function u(t,n){f(t,function(i){var r,o,a,s=e.isArray(t.events);if(n===t._fetchId&&"rejected"!==t._status){if(t._status="resolved",i)for(r=0;r<i.length;r++)o=i[r],a=s?o:P(o,t),a&&$.push.apply($,G(a));h()}})}function d(e){var t="pending"===e._status;e._status="rejected",t&&h()}function h(){J--,J||(i($),q.trigger("eventsReceived",Z))}function f(t,n){var i,r,o=Ze.sourceFetchers;for(i=0;i<o.length;i++){if(r=o[i].call(q,t,V.clone(),U.clone(),q.opt("timezone"),n),r===!0)return;if("object"==typeof r)return void f(r,n)}var a=t.events;if(a)e.isFunction(a)?(q.pushLoading(),a.call(q,V.clone(),U.clone(),q.opt("timezone"),function(e){n(e),q.popLoading()})):e.isArray(a)?n(a):n();else{var s=t.url;if(s){var l,c=t.success,u=t.error,d=t.complete;l=e.isFunction(t.data)?t.data():t.data;var h=e.extend({},l||{}),p=ce(t.startParam,q.opt("startParam")),g=ce(t.endParam,q.opt("endParam")),m=ce(t.timezoneParam,q.opt("timezoneParam"));p&&(h[p]=V.format()),g&&(h[g]=U.format()),q.opt("timezone")&&"local"!=q.opt("timezone")&&(h[m]=q.opt("timezone")),q.pushLoading(),e.ajax(e.extend({},Rt,t,{data:h,success:function(t){t=t||[];var i=le(c,this,arguments);e.isArray(i)&&(t=i),n(t)},error:function(){le(u,this,arguments),n()},complete:function(){le(d,this,arguments),q.popLoading()}}))}else n()}}function p(e){var t=g(e);t&&(K.push(t),c([t],"add"))}function g(t){var n,i,r=Ze.sourceNormalizers;if(e.isFunction(t)||e.isArray(t)?n={events:t}:"string"==typeof t?n={url:t}:"object"==typeof t&&(n=e.extend({},t)),n){for(n.className?"string"==typeof n.className&&(n.className=n.className.split(/\s+/)):n.className=[],e.isArray(n.events)&&(n.origArray=n.events,n.events=e.map(n.events,function(e){return P(e,n)})),i=0;i<r.length;i++)r[i].call(q,n);return n}}function m(e){b(S(e))}function v(e){null==e?b(K,!0):b(k(e))}function b(t,n){var r;for(r=0;r<t.length;r++)d(t[r]);n?(K=[],$=[]):(K=e.grep(K,function(e){for(r=0;r<t.length;r++)if(e===t[r])return!1;return!0}),$=T($,t)),i()}function y(){return K.slice(1)}function w(t){return e.grep(K,function(e){return e.id&&e.id===t})[0]}function k(t){t?e.isArray(t)||(t=[t]):t=[];var n,i=[];for(n=0;n<t.length;n++)i.push.apply(i,S(t[n]));return i}function S(t){var n,i;for(n=0;n<K.length;n++)if(i=K[n],i===t)return[i];return i=w(t),i?[i]:e.grep(K,function(e){return A(t,e)})}function A(e,t){return e&&t&&x(e)==x(t)}function x(e){return("object"==typeof e?e.origArray||e.googleCalendarId||e.url||e.events:null)||e}function T(t,n){return e.grep(t,function(e){for(var t=0;t<n.length;t++)if(e.source===n[t])return!1;return!0})}function D(e){E([e])}function E(e){var t,n;for(t=0;t<e.length;t++)n=e[t],n.start=q.moment(n.start),n.end?n.end=q.moment(n.end):n.end=null,Y(n,_(n));i()}function _(t){var n={};return e.each(t,function(e,t){C(e)&&void 0!==t&&se(t)&&(n[e]=t)}),n}function C(e){return!/^_|^(id|allDay|start|end)$/.test(e)}function M(e,t){return z([e],t)}function z(e,t){var n,r,o,a,s,l=[];for(o=0;o<e.length;o++)if(r=P(e[o])){for(n=G(r),a=0;a<n.length;a++)s=n[a],s.source||(t&&(X.events.push(s),s.source=X),$.push(s));l=l.concat(n)}return l.length&&i(),l}function R(t){var n,r;for(null==t?t=function(){return!0}:e.isFunction(t)||(n=t+"",t=function(e){return e._id==n}),$=e.grep($,t,!0),r=0;r<K.length;r++)e.isArray(K[r].events)&&(K[r].events=e.grep(K[r].events,t,!0));i()}function H(t){return e.isFunction(t)?e.grep($,t):null!=t?(t+="",e.grep($,function(e){return e._id==t})):$}function L(e){e.start=q.moment(e.start),e.end&&(e.end=q.moment(e.end)),Ue(e)}function P(n,i){var r,o,a,s=q.opt("eventDataTransform"),l={};if(s&&(n=s(n)),i&&i.eventDataTransform&&(n=i.eventDataTransform(n)),e.extend(l,n),i&&(l.source=i),l._id=n._id||(void 0===n.id?"_fc"+Ht++:n.id+""),n.className?"string"==typeof n.className?l.className=n.className.split(/\s+/):l.className=n.className:l.className=[],r=n.start||n.date,o=n.end,ne(r)&&(r=t.duration(r)),ne(o)&&(o=t.duration(o)),n.dow||t.isDuration(r)||t.isDuration(o))l.start=r?t.duration(r):null,l.end=o?t.duration(o):null,l._recurring=!0;else{if(r&&(r=q.moment(r),!r.isValid()))return!1;o&&(o=q.moment(o),o.isValid()||(o=null)),a=n.allDay,void 0===a&&(a=ce(i?i.allDayDefault:void 0,q.opt("allDayDefault"))),N(r,o,a,l)}return q.normalizeEvent(l),l}function N(e,t,n,i){i.start=e,i.end=t,i.allDay=n,F(i),Ue(i)}function F(e){B(e),e.end&&!e.end.isAfter(e.start)&&(e.end=null),e.end||(q.opt("forceEventDuration")?e.end=q.getDefaultEventEnd(e.allDay,e.start):e.end=null)}function B(e){null==e.allDay&&(e.allDay=!(e.start.hasTime()||e.end&&e.end.hasTime())),e.allDay?(e.start.stripTime(),e.end&&e.end.stripTime()):(e.start.hasTime()||(e.start=q.applyTimezone(e.start.time(0))),e.end&&!e.end.hasTime()&&(e.end=q.applyTimezone(e.end.time(0))))}function G(t,n,i){var r,o,a,s,l,c,u,d,h,f=[];if(n=n||V,i=i||U,t)if(t._recurring){if(o=t.dow)for(r={},a=0;a<o.length;a++)r[o[a]]=!0;for(s=n.clone().stripTime();s.isBefore(i);)r&&!r[s.day()]||(l=t.start,c=t.end,u=s.clone(),d=null,l&&(u=u.time(l)),c&&(d=s.clone().time(c)),h=e.extend({},t),N(u,d,!l&&!c,h),f.push(h)),s.add(1,"days")}else f.push(t);return f}function Y(t,n,i){function r(e,t){return i?I(e,t,i):n.allDay?O(e,t):j(e,t)}var o,a,s,l,c,u,d={};return n=n||{},n.start||(n.start=t.start.clone()),void 0===n.end&&(n.end=t.end?t.end.clone():null),null==n.allDay&&(n.allDay=t.allDay),F(n),o={start:t._start.clone(),end:t._end?t._end.clone():q.getDefaultEventEnd(t._allDay,t._start),allDay:n.allDay},F(o),a=null!==t._end&&null===n.end,s=r(n.start,o.start),n.end?(l=r(n.end,o.end),c=l.subtract(s)):c=null,e.each(n,function(e,t){C(e)&&void 0!==t&&(d[e]=t)}),u=W(H(t._id),a,n.allDay,s,c,d),{dateDelta:s,durationDelta:c,undo:u}}function W(t,n,i,r,o,a){var s=q.getIsAmbigTimezone(),l=[];return r&&!r.valueOf()&&(r=null),o&&!o.valueOf()&&(o=null),e.each(t,function(t,c){var u,d;u={start:c.start.clone(),end:c.end?c.end.clone():null,allDay:c.allDay},e.each(a,function(e){u[e]=c[e]}),d={start:c._start,end:c._end,allDay:i},F(d),n?d.end=null:o&&!d.end&&(d.end=q.getDefaultEventEnd(d.allDay,d.start)),r&&(d.start.add(r),d.end&&d.end.add(r)),o&&d.end.add(o),s&&!d.allDay&&(r||o)&&(d.start.stripZone(),d.end&&d.end.stripZone()),e.extend(c,a,d),Ue(c),l.push(function(){e.extend(c,u),Ue(c)})}),function(){for(var e=0;e<l.length;e++)l[e]()}}var q=this;q.requestEvents=n,q.reportEventChange=i,q.isFetchNeeded=o,q.fetchEvents=a,q.fetchEventSources=c,q.refetchEvents=s,q.refetchEventSources=l,q.getEventSources=y,q.getEventSourceById=w,q.addEventSource=p,q.removeEventSource=m,q.removeEventSources=v,q.updateEvent=D,q.updateEvents=E,q.renderEvent=M,q.renderEvents=z,q.removeEvents=R,q.clientEvents=H,q.mutateEvent=Y,q.normalizeEventDates=F,q.normalizeEventTimes=B;var V,U,Z,X={events:[]},K=[X],J=0,$=[];e.each((q.opt("events")?[q.opt("events")]:[]).concat(q.opt("eventSources")||[]),function(e,t){var n=g(t);n&&K.push(n)}),q.getEventCache=function(){return $},q.rezoneArrayEventSources=function(){var t,n,i;for(t=0;t<K.length;t++)if(n=K[t].events,e.isArray(n))for(i=0;i<n.length;i++)L(n[i])},q.buildEventFromInput=P,q.expandEvent=G}function Ue(e){e._allDay=e.allDay,e._start=e.start.clone(),e._end=e.end?e.end.clone():null}var Ze=e.fullCalendar={version:"3.4.0",internalApiVersion:9},Xe=Ze.views={};e.fn.fullCalendar=function(t){var n=Array.prototype.slice.call(arguments,1),i=this;return this.each(function(r,o){var a,s=e(o),l=s.data("fullCalendar");"string"==typeof t?l&&e.isFunction(l[t])&&(a=l[t].apply(l,n),r||(i=a),"destroy"===t&&s.removeData("fullCalendar")):l||(l=new Et(s,t),s.data("fullCalendar",l),l.render())}),i};var Ke=["header","footer","buttonText","buttonIcons","themeButtonIcons"];Ze.intersectRanges=P,Ze.applyAll=le,Ze.debounce=be,Ze.isInt=me,Ze.htmlEscape=ue,Ze.cssToStr=he,Ze.proxy=ve,Ze.capitaliseFirstLetter=pe,Ze.getOuterRect=h,Ze.getClientRect=f,Ze.getContentRect=p,Ze.getScrollbarWidths=g;var Je=null;Ze.preventDefault=D,Ze.intersectRects=E,Ze.parseFieldSpecs=z,Ze.compareByFieldSpecs=R,Ze.compareByFieldSpec=H,Ze.flexibleCompare=L,Ze.computeGreatestUnit=N,Ze.divideRangeByDuration=G,Ze.divideDurationByDuration=Y,Ze.multiplyDuration=W,Ze.durationHasTime=ee;var $e=["sun","mon","tue","wed","thu","fri","sat"],Qe=["year","month","week","day","hour","minute","second","millisecond"];Ze.log=function(){var e=window.console;if(e&&e.log)return e.log.apply(e,arguments)},Ze.warn=function(){var e=window.console;return e&&e.warn?e.warn.apply(e,arguments):Ze.log.apply(Ze,arguments)};var et={}.hasOwnProperty;Ze.createObject=re;var tt=/^\s*\d{4}-\d\d$/,nt=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,it=t.fn,rt=e.extend({},it),ot=t.momentProperties;ot.push("_fullCalendar"),ot.push("_ambigTime"),ot.push("_ambigZone"),Ze.moment=function(){return ye(arguments)},Ze.moment.utc=function(){var e=ye(arguments,!0);return e.hasTime()&&e.utc(),e},Ze.moment.parseZone=function(){return ye(arguments,!0,!0)},it.week=it.weeks=function(e){var t=this._locale._fullCalendar_weekCalc;return null==e&&"function"==typeof t?t(this):"ISO"===t?rt.isoWeek.apply(this,arguments):rt.week.apply(this,arguments)},it.time=function(e){if(!this._fullCalendar)return rt.time.apply(this,arguments);if(null==e)return t.duration({hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()});this._ambigTime=!1,t.isDuration(e)||t.isMoment(e)||(e=t.duration(e));var n=0;return t.isDuration(e)&&(n=24*Math.floor(e.asDays())),this.hours(n+e.hours()).minutes(e.minutes()).seconds(e.seconds()).milliseconds(e.milliseconds())},it.stripTime=function(){return this._ambigTime||(this.utc(!0),this.set({hours:0,minutes:0,seconds:0,ms:0}),this._ambigTime=!0,this._ambigZone=!0),this},it.hasTime=function(){return!this._ambigTime},it.stripZone=function(){var e;return this._ambigZone||(e=this._ambigTime,this.utc(!0),this._ambigTime=e||!1,this._ambigZone=!0),this},it.hasZone=function(){return!this._ambigZone},it.local=function(e){return rt.local.call(this,this._ambigZone||e),this._ambigTime=!1,this._ambigZone=!1,this},it.utc=function(e){return rt.utc.call(this,e),this._ambigTime=!1,this._ambigZone=!1,this},it.utcOffset=function(e){return null!=e&&(this._ambigTime=!1,this._ambigZone=!1),rt.utcOffset.apply(this,arguments)},it.format=function(){return this._fullCalendar&&arguments[0]?at(this,arguments[0]):this._ambigTime?lt(we(this),"YYYY-MM-DD"):this._ambigZone?lt(we(this),"YYYY-MM-DD[T]HH:mm:ss"):this._fullCalendar?lt(we(this)):rt.format.apply(this,arguments)},it.toISOString=function(){return this._ambigTime?lt(we(this),"YYYY-MM-DD"):this._ambigZone?lt(we(this),"YYYY-MM-DD[T]HH:mm:ss"):this._fullCalendar?rt.toISOString.apply(we(this),arguments):rt.toISOString.apply(this,arguments)},function(){function e(e,t){return u(r(t).fakeFormatString,e)}function t(e,t){return rt.format.call(e,t)}function n(e,t,n,o,a){var s;return e=Ze.moment.parseZone(e),t=Ze.moment.parseZone(t),s=e.localeData(),n=s.longDateFormat(n)||n,i(r(n),e,t,o||" - ",a)}function i(e,t,n,i,r){var o,a,s,l=e.sameUnits,c=t.clone().stripZone(),u=n.clone().stripZone(),f=d(e.fakeFormatString,t),p=d(e.fakeFormatString,n),g="",m="",v="",b="",y="";for(o=0;o<l.length&&(!l[o]||c.isSame(u,l[o]));o++)g+=f[o];for(a=l.length-1;a>o&&(!l[a]||c.isSame(u,l[a]))&&(a-1!==o||"."!==f[a]);a--)m=f[a]+m;for(s=o;s<=a;s++)v+=f[s],b+=p[s];return(v||b)&&(y=r?b+i+v:v+i+b),h(g+y+m)}function r(e){return w[e]||(w[e]=o(e))}function o(e){var t=a(e);return{fakeFormatString:l(t),sameUnits:c(t)}}function a(e){for(var t,n=[],i=/\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;t=i.exec(e);)t[1]?n.push.apply(n,s(t[1])):t[2]?n.push({maybe:a(t[2])}):t[3]?n.push({token:t[3]}):t[5]&&n.push.apply(n,s(t[5]));return n}function s(e){return". "===e?["."," "]:[e]}function l(e){var t,n,i=[];for(t=0;t<e.length;t++)n=e[t],"string"==typeof n?i.push("["+n+"]"):n.token?n.token in b?i.push(g+"["+n.token+"]"):i.push(n.token):n.maybe&&i.push(m+l(n.maybe)+m);return i.join(p)}function c(e){var t,n,i,r=[];for(t=0;t<e.length;t++)n=e[t],n.token?(i=y[n.token.charAt(0)],r.push(i?i.unit:"second")):n.maybe?r.push.apply(r,c(n.maybe)):r.push(null);return r}function u(e,t){return h(d(e,t).join(""))}function d(e,n){var i,r,o=[],a=t(n,e),s=a.split(p);for(i=0;i<s.length;i++)r=s[i],r.charAt(0)===g?o.push(b[r.substring(1)](n)):o.push(r);return o}function h(e){return e.replace(v,function(e,t){return t.match(/[1-9]/)?t:""})}function f(e){var t,n,i,r,o=a(e);for(t=0;t<o.length;t++)n=o[t],n.token&&(i=y[n.token.charAt(0)],i&&(!r||i.value>r.value)&&(r=i));return r?r.unit:null}Ze.formatDate=e,Ze.formatRange=n,Ze.oldMomentFormat=t,Ze.queryMostGranularFormatUnit=f;var p="\v",g="",m="",v=new RegExp(m+"([^"+m+"]*)"+m,"g"),b={t:function(e){return t(e,"a").charAt(0)},T:function(e){return t(e,"A").charAt(0)}},y={Y:{value:1,unit:"year"},M:{value:2,unit:"month"},W:{value:3,unit:"week"},w:{value:3,unit:"week"},D:{value:4,unit:"day"},d:{value:4,unit:"day"}},w={}}();var at=Ze.formatDate,st=Ze.formatRange,lt=Ze.oldMomentFormat;Ze.Class=ke,ke.extend=function(){var e,t,n=arguments.length;for(e=0;e<n;e++)t=arguments[e],e<n-1&&Ae(this,t);return Se(this,t||{})},ke.mixin=function(e){Ae(this,e)};var ct=ke.extend(ft,pt,{_props:null,_watchers:null,_globalWatchArgs:null,constructor:function(){this._watchers={},this._props={},this.applyGlobalWatchers()},applyGlobalWatchers:function(){var e,t=this._globalWatchArgs||[];for(e=0;e<t.length;e++)this.watch.apply(this,t[e])},has:function(e){return e in this._props},get:function(e){return void 0===e?this._props:this._props[e]},set:function(e,t){var n;"string"==typeof e?(n={},n[e]=void 0===t?null:t):n=e,this.setProps(n)},reset:function(e){var t,n=this._props,i={};for(t in n)i[t]=void 0;for(t in e)i[t]=e[t];this.setProps(i)},unset:function(e){var t,n,i={};for(t="string"==typeof e?[e]:e,n=0;n<t.length;n++)i[t[n]]=void 0;this.setProps(i)},setProps:function(e){var t,n,i={},r=0;for(t in e)n=e[t],"object"!=typeof n&&n===this._props[t]||(i[t]=n,r++);if(r){this.trigger("before:batchChange",i);for(t in i)n=i[t],this.trigger("before:change",t,n),this.trigger("before:change:"+t,n);for(t in i)n=i[t],void 0===n?delete this._props[t]:this._props[t]=n,this.trigger("change:"+t,n),this.trigger("change",t,n);this.trigger("batchChange",i)}},watch:function(e,t,n,i){var r=this;this.unwatch(e),this._watchers[e]=this._watchDeps(t,function(t){var i=n.call(r,t);i&&i.then?(r.unset(e),i.then(function(t){r.set(e,t)})):r.set(e,i)},function(){r.unset(e),i&&i.call(r)})},unwatch:function(e){var t=this._watchers[e];t&&(delete this._watchers[e],t.teardown())},_watchDeps:function(e,t,n){function i(e,t,i){s++,1===s&&c===l&&(h=!0,n(),h=!1)}function r(e,n,i){void 0===n?(i||void 0===u[e]||c--,delete u[e]):(i||void 0!==u[e]||c++,u[e]=n),s--,s||c===l&&(h||t(u))}function o(e,t){a.on(e,t),d.push([e,t])}var a=this,s=0,l=e.length,c=0,u={},d=[],h=!1;return e.forEach(function(e){var t=!1;"?"===e.charAt(0)&&(e=e.substring(1),t=!0),o("before:change:"+e,function(n){i(e,n,t)}),o("change:"+e,function(n){r(e,n,t)})}),e.forEach(function(e){var t=!1;"?"===e.charAt(0)&&(e=e.substring(1),t=!0),a.has(e)?(u[e]=a.get(e),c++):t&&c++}),c===l&&t(u),{teardown:function(){for(var e=0;e<d.length;e++)a.off(d[e][0],d[e][1]);d=null,c===l&&n()},flash:function(){c===l&&(n(),t(u))}}},flash:function(e){var t=this._watchers[e];t&&t.flash()}});ct.watch=function(){var e=this.prototype;e._globalWatchArgs||(e._globalWatchArgs=[]),e._globalWatchArgs.push(arguments)},Ze.Model=ct;var ut={construct:function(t){var n=e.Deferred(),i=n.promise();return"function"==typeof t&&t(function(e){n.resolve(e),xe(i,e)},function(){n.reject(),Te(i)}),i},resolve:function(t){var n=e.Deferred().resolve(t),i=n.promise();return xe(i,t),i},reject:function(){var t=e.Deferred().reject(),n=t.promise();return Te(n),n}};Ze.Promise=ut;var dt=ke.extend(ft,{q:null,isPaused:!1,isRunning:!1,constructor:function(){this.q=[]},queue:function(){this.q.push.apply(this.q,arguments),this.tryStart()},pause:function(){this.isPaused=!0},resume:function(){this.isPaused=!1,this.tryStart()},tryStart:function(){!this.isRunning&&this.canRunNext()&&(this.isRunning=!0,this.trigger("start"),this.runNext())},canRunNext:function(){return!this.isPaused&&this.q.length},runNext:function(){this.runTask(this.q.shift())},runTask:function(e){this.runTaskFunc(e)},runTaskFunc:function(e){function t(){n.canRunNext()?n.runNext():(n.isRunning=!1,n.trigger("stop"))}var n=this,i=e();i&&i.then?i.then(t):t()}});Ze.TaskQueue=dt;var ht=dt.extend({waitsByNamespace:null,waitNamespace:null,waitId:null,constructor:function(e){dt.call(this),this.waitsByNamespace=e||{}},queue:function(e,t,n){var i,r={func:e,namespace:t,type:n};t&&(i=this.waitsByNamespace[t]),this.waitNamespace&&(t===this.waitNamespace&&null!=i?this.delayWait(i):(this.clearWait(),this.tryStart())),this.compoundTask(r)&&(this.waitNamespace||null==i?this.tryStart():this.startWait(t,i))},startWait:function(e,t){this.waitNamespace=e,this.spawnWait(t)},delayWait:function(e){clearTimeout(this.waitId),this.spawnWait(e)},spawnWait:function(e){var t=this;this.waitId=setTimeout(function(){t.waitNamespace=null,t.tryStart()},e)},clearWait:function(){this.waitNamespace&&(clearTimeout(this.waitId),this.waitId=null,this.waitNamespace=null)},canRunNext:function(){if(!dt.prototype.canRunNext.apply(this,arguments))return!1;if(this.waitNamespace){for(var e=this.q,t=0;t<e.length;t++)if(e[t].namespace!==this.waitNamespace)return!0;return!1}return!0},runTask:function(e){this.runTaskFunc(e.func)},compoundTask:function(e){var t,n,i=this.q,r=!0;if(e.namespace&&("destroy"===e.type||"init"===e.type)){for(t=i.length-1;t>=0;t--)n=i[t],n.namespace!==e.namespace||"add"!==n.type&&"remove"!==n.type||i.splice(t,1);"destroy"===e.type?i.length&&(n=i[i.length-1],n.namespace===e.namespace&&("init"===n.type?(r=!1,i.pop()):"destroy"===n.type&&(r=!1))):"init"===e.type&&i.length&&(n=i[i.length-1],n.namespace===e.namespace&&"init"===n.type&&i.pop())}return r&&i.push(e),r}});Ze.RenderQueue=ht;var ft=Ze.EmitterMixin={on:function(t,n){return e(this).on(t,this._prepareIntercept(n)),this},one:function(t,n){return e(this).one(t,this._prepareIntercept(n)),this},_prepareIntercept:function(t){var n=function(e,n){return t.apply(n.context||this,n.args||[])};return t.guid||(t.guid=e.guid++),n.guid=t.guid,n},off:function(t,n){return e(this).off(t,n),this},trigger:function(t){
var n=Array.prototype.slice.call(arguments,1);return e(this).triggerHandler(t,{args:n}),this},triggerWith:function(t,n,i){return e(this).triggerHandler(t,{context:n,args:i}),this}},pt=Ze.ListenerMixin=function(){var t=0,n={listenerId:null,listenTo:function(t,n,i){if("object"==typeof n)for(var r in n)n.hasOwnProperty(r)&&this.listenTo(t,r,n[r]);else"string"==typeof n&&t.on(n+"."+this.getListenerNamespace(),e.proxy(i,this))},stopListeningTo:function(e,t){e.off((t||"")+"."+this.getListenerNamespace())},getListenerNamespace:function(){return null==this.listenerId&&(this.listenerId=t++),"_listener"+this.listenerId}};return n}(),gt=ke.extend(pt,{isHidden:!0,options:null,el:null,margin:10,constructor:function(e){this.options=e||{}},show:function(){this.isHidden&&(this.el||this.render(),this.el.show(),this.position(),this.isHidden=!1,this.trigger("show"))},hide:function(){this.isHidden||(this.el.hide(),this.isHidden=!0,this.trigger("hide"))},render:function(){var t=this,n=this.options;this.el=e('<div class="fc-popover"/>').addClass(n.className||"").css({top:0,left:0}).append(n.content).appendTo(n.parentEl),this.el.on("click",".fc-close",function(){t.hide()}),n.autoHide&&this.listenTo(e(document),"mousedown",this.documentMousedown)},documentMousedown:function(t){this.el&&!e(t.target).closest(this.el).length&&this.hide()},removeElement:function(){this.hide(),this.el&&(this.el.remove(),this.el=null),this.stopListeningTo(e(document),"mousedown")},position:function(){var t,n,i,r,o,a=this.options,s=this.el.offsetParent().offset(),l=this.el.outerWidth(),c=this.el.outerHeight(),u=e(window),h=d(this.el);r=a.top||0,o=void 0!==a.left?a.left:void 0!==a.right?a.right-l:0,h.is(window)||h.is(document)?(h=u,t=0,n=0):(i=h.offset(),t=i.top,n=i.left),t+=u.scrollTop(),n+=u.scrollLeft(),a.viewportConstrain!==!1&&(r=Math.min(r,t+h.outerHeight()-c-this.margin),r=Math.max(r,t+this.margin),o=Math.min(o,n+h.outerWidth()-l-this.margin),o=Math.max(o,n+this.margin)),this.el.css({top:r-s.top,left:o-s.left})},trigger:function(e){this.options[e]&&this.options[e].apply(this,Array.prototype.slice.call(arguments,1))}}),mt=Ze.CoordCache=ke.extend({els:null,forcedOffsetParentEl:null,origin:null,boundingRect:null,isHorizontal:!1,isVertical:!1,lefts:null,rights:null,tops:null,bottoms:null,constructor:function(t){this.els=e(t.els),this.isHorizontal=t.isHorizontal,this.isVertical=t.isVertical,this.forcedOffsetParentEl=t.offsetParent?e(t.offsetParent):null},build:function(){var e=this.forcedOffsetParentEl;!e&&this.els.length>0&&(e=this.els.eq(0).offsetParent()),this.origin=e?e.offset():null,this.boundingRect=this.queryBoundingRect(),this.isHorizontal&&this.buildElHorizontals(),this.isVertical&&this.buildElVerticals()},clear:function(){this.origin=null,this.boundingRect=null,this.lefts=null,this.rights=null,this.tops=null,this.bottoms=null},ensureBuilt:function(){this.origin||this.build()},buildElHorizontals:function(){var t=[],n=[];this.els.each(function(i,r){var o=e(r),a=o.offset().left,s=o.outerWidth();t.push(a),n.push(a+s)}),this.lefts=t,this.rights=n},buildElVerticals:function(){var t=[],n=[];this.els.each(function(i,r){var o=e(r),a=o.offset().top,s=o.outerHeight();t.push(a),n.push(a+s)}),this.tops=t,this.bottoms=n},getHorizontalIndex:function(e){this.ensureBuilt();var t,n=this.lefts,i=this.rights,r=n.length;for(t=0;t<r;t++)if(e>=n[t]&&e<i[t])return t},getVerticalIndex:function(e){this.ensureBuilt();var t,n=this.tops,i=this.bottoms,r=n.length;for(t=0;t<r;t++)if(e>=n[t]&&e<i[t])return t},getLeftOffset:function(e){return this.ensureBuilt(),this.lefts[e]},getLeftPosition:function(e){return this.ensureBuilt(),this.lefts[e]-this.origin.left},getRightOffset:function(e){return this.ensureBuilt(),this.rights[e]},getRightPosition:function(e){return this.ensureBuilt(),this.rights[e]-this.origin.left},getWidth:function(e){return this.ensureBuilt(),this.rights[e]-this.lefts[e]},getTopOffset:function(e){return this.ensureBuilt(),this.tops[e]},getTopPosition:function(e){return this.ensureBuilt(),this.tops[e]-this.origin.top},getBottomOffset:function(e){return this.ensureBuilt(),this.bottoms[e]},getBottomPosition:function(e){return this.ensureBuilt(),this.bottoms[e]-this.origin.top},getHeight:function(e){return this.ensureBuilt(),this.bottoms[e]-this.tops[e]},queryBoundingRect:function(){var e;return this.els.length>0&&(e=d(this.els.eq(0)),!e.is(document))?f(e):null},isPointInBounds:function(e,t){return this.isLeftInBounds(e)&&this.isTopInBounds(t)},isLeftInBounds:function(e){return!this.boundingRect||e>=this.boundingRect.left&&e<this.boundingRect.right},isTopInBounds:function(e){return!this.boundingRect||e>=this.boundingRect.top&&e<this.boundingRect.bottom}}),vt=Ze.DragListener=ke.extend(pt,{options:null,subjectEl:null,originX:null,originY:null,scrollEl:null,isInteracting:!1,isDistanceSurpassed:!1,isDelayEnded:!1,isDragging:!1,isTouch:!1,isGeneric:!1,delay:null,delayTimeoutId:null,minDistance:null,shouldCancelTouchScroll:!0,scrollAlwaysKills:!1,constructor:function(e){this.options=e||{}},startInteraction:function(t,n){if("mousedown"===t.type){if(yt.get().shouldIgnoreMouse())return;if(!w(t))return;t.preventDefault()}this.isInteracting||(n=n||{},this.delay=ce(n.delay,this.options.delay,0),this.minDistance=ce(n.distance,this.options.distance,0),this.subjectEl=this.options.subjectEl,x(e("body")),this.isInteracting=!0,this.isTouch=A(t),this.isGeneric="dragstart"===t.type,this.isDelayEnded=!1,this.isDistanceSurpassed=!1,this.originX=k(t),this.originY=S(t),this.scrollEl=d(e(t.target)),this.bindHandlers(),this.initAutoScroll(),this.handleInteractionStart(t),this.startDelay(t),this.minDistance||this.handleDistanceSurpassed(t))},handleInteractionStart:function(e){this.trigger("interactionStart",e)},endInteraction:function(t,n){this.isInteracting&&(this.endDrag(t),this.delayTimeoutId&&(clearTimeout(this.delayTimeoutId),this.delayTimeoutId=null),this.destroyAutoScroll(),this.unbindHandlers(),this.isInteracting=!1,this.handleInteractionEnd(t,n),T(e("body")))},handleInteractionEnd:function(e,t){this.trigger("interactionEnd",e,t||!1)},bindHandlers:function(){var t=yt.get();this.isGeneric?this.listenTo(e(document),{drag:this.handleMove,dragstop:this.endInteraction}):this.isTouch?this.listenTo(t,{touchmove:this.handleTouchMove,touchend:this.endInteraction,scroll:this.handleTouchScroll}):this.listenTo(t,{mousemove:this.handleMouseMove,mouseup:this.endInteraction}),this.listenTo(t,{selectstart:D,contextmenu:D})},unbindHandlers:function(){this.stopListeningTo(yt.get()),this.stopListeningTo(e(document))},startDrag:function(e,t){this.startInteraction(e,t),this.isDragging||(this.isDragging=!0,this.handleDragStart(e))},handleDragStart:function(e){this.trigger("dragStart",e)},handleMove:function(e){var t,n=k(e)-this.originX,i=S(e)-this.originY,r=this.minDistance;this.isDistanceSurpassed||(t=n*n+i*i,t>=r*r&&this.handleDistanceSurpassed(e)),this.isDragging&&this.handleDrag(n,i,e)},handleDrag:function(e,t,n){this.trigger("drag",e,t,n),this.updateAutoScroll(n)},endDrag:function(e){this.isDragging&&(this.isDragging=!1,this.handleDragEnd(e))},handleDragEnd:function(e){this.trigger("dragEnd",e)},startDelay:function(e){var t=this;this.delay?this.delayTimeoutId=setTimeout(function(){t.handleDelayEnd(e)},this.delay):this.handleDelayEnd(e)},handleDelayEnd:function(e){this.isDelayEnded=!0,this.isDistanceSurpassed&&this.startDrag(e)},handleDistanceSurpassed:function(e){this.isDistanceSurpassed=!0,this.isDelayEnded&&this.startDrag(e)},handleTouchMove:function(e){this.isDragging&&this.shouldCancelTouchScroll&&e.preventDefault(),this.handleMove(e)},handleMouseMove:function(e){this.handleMove(e)},handleTouchScroll:function(e){this.isDragging&&!this.scrollAlwaysKills||this.endInteraction(e,!0)},trigger:function(e){this.options[e]&&this.options[e].apply(this,Array.prototype.slice.call(arguments,1)),this["_"+e]&&this["_"+e].apply(this,Array.prototype.slice.call(arguments,1))}});vt.mixin({isAutoScroll:!1,scrollBounds:null,scrollTopVel:null,scrollLeftVel:null,scrollIntervalId:null,scrollSensitivity:30,scrollSpeed:200,scrollIntervalMs:50,initAutoScroll:function(){var e=this.scrollEl;this.isAutoScroll=this.options.scroll&&e&&!e.is(window)&&!e.is(document),this.isAutoScroll&&this.listenTo(e,"scroll",be(this.handleDebouncedScroll,100))},destroyAutoScroll:function(){this.endAutoScroll(),this.isAutoScroll&&this.stopListeningTo(this.scrollEl,"scroll")},computeScrollBounds:function(){this.isAutoScroll&&(this.scrollBounds=h(this.scrollEl))},updateAutoScroll:function(e){var t,n,i,r,o=this.scrollSensitivity,a=this.scrollBounds,s=0,l=0;a&&(t=(o-(S(e)-a.top))/o,n=(o-(a.bottom-S(e)))/o,i=(o-(k(e)-a.left))/o,r=(o-(a.right-k(e)))/o,t>=0&&t<=1?s=t*this.scrollSpeed*-1:n>=0&&n<=1&&(s=n*this.scrollSpeed),i>=0&&i<=1?l=i*this.scrollSpeed*-1:r>=0&&r<=1&&(l=r*this.scrollSpeed)),this.setScrollVel(s,l)},setScrollVel:function(e,t){this.scrollTopVel=e,this.scrollLeftVel=t,this.constrainScrollVel(),!this.scrollTopVel&&!this.scrollLeftVel||this.scrollIntervalId||(this.scrollIntervalId=setInterval(ve(this,"scrollIntervalFunc"),this.scrollIntervalMs))},constrainScrollVel:function(){var e=this.scrollEl;this.scrollTopVel<0?e.scrollTop()<=0&&(this.scrollTopVel=0):this.scrollTopVel>0&&e.scrollTop()+e[0].clientHeight>=e[0].scrollHeight&&(this.scrollTopVel=0),this.scrollLeftVel<0?e.scrollLeft()<=0&&(this.scrollLeftVel=0):this.scrollLeftVel>0&&e.scrollLeft()+e[0].clientWidth>=e[0].scrollWidth&&(this.scrollLeftVel=0)},scrollIntervalFunc:function(){var e=this.scrollEl,t=this.scrollIntervalMs/1e3;this.scrollTopVel&&e.scrollTop(e.scrollTop()+this.scrollTopVel*t),this.scrollLeftVel&&e.scrollLeft(e.scrollLeft()+this.scrollLeftVel*t),this.constrainScrollVel(),this.scrollTopVel||this.scrollLeftVel||this.endAutoScroll()},endAutoScroll:function(){this.scrollIntervalId&&(clearInterval(this.scrollIntervalId),this.scrollIntervalId=null,this.handleScrollEnd())},handleDebouncedScroll:function(){this.scrollIntervalId||this.handleScrollEnd()},handleScrollEnd:function(){}});var bt=vt.extend({component:null,origHit:null,hit:null,coordAdjust:null,constructor:function(e,t){vt.call(this,t),this.component=e},handleInteractionStart:function(e){var t,n,i,r=this.subjectEl;this.component.hitsNeeded(),this.computeScrollBounds(),e?(n={left:k(e),top:S(e)},i=n,r&&(t=h(r),i=_(i,t)),this.origHit=this.queryHit(i.left,i.top),r&&this.options.subjectCenter&&(this.origHit&&(t=E(this.origHit,t)||t),i=C(t)),this.coordAdjust=M(i,n)):(this.origHit=null,this.coordAdjust=null),vt.prototype.handleInteractionStart.apply(this,arguments)},handleDragStart:function(e){var t;vt.prototype.handleDragStart.apply(this,arguments),t=this.queryHit(k(e),S(e)),t&&this.handleHitOver(t)},handleDrag:function(e,t,n){var i;vt.prototype.handleDrag.apply(this,arguments),i=this.queryHit(k(n),S(n)),De(i,this.hit)||(this.hit&&this.handleHitOut(),i&&this.handleHitOver(i))},handleDragEnd:function(){this.handleHitDone(),vt.prototype.handleDragEnd.apply(this,arguments)},handleHitOver:function(e){var t=De(e,this.origHit);this.hit=e,this.trigger("hitOver",this.hit,t,this.origHit)},handleHitOut:function(){this.hit&&(this.trigger("hitOut",this.hit),this.handleHitDone(),this.hit=null)},handleHitDone:function(){this.hit&&this.trigger("hitDone",this.hit)},handleInteractionEnd:function(){vt.prototype.handleInteractionEnd.apply(this,arguments),this.origHit=null,this.hit=null,this.component.hitsNotNeeded()},handleScrollEnd:function(){vt.prototype.handleScrollEnd.apply(this,arguments),this.isDragging&&(this.component.releaseHits(),this.component.prepareHits())},queryHit:function(e,t){return this.coordAdjust&&(e+=this.coordAdjust.left,t+=this.coordAdjust.top),this.component.queryHit(e,t)}});Ze.touchMouseIgnoreWait=500;var yt=ke.extend(pt,ft,{isTouching:!1,mouseIgnoreDepth:0,handleScrollProxy:null,bind:function(){var t=this;this.listenTo(e(document),{touchstart:this.handleTouchStart,touchcancel:this.handleTouchCancel,touchend:this.handleTouchEnd,mousedown:this.handleMouseDown,mousemove:this.handleMouseMove,mouseup:this.handleMouseUp,click:this.handleClick,selectstart:this.handleSelectStart,contextmenu:this.handleContextMenu}),window.addEventListener("touchmove",this.handleTouchMoveProxy=function(n){t.handleTouchMove(e.Event(n))},{passive:!1}),window.addEventListener("scroll",this.handleScrollProxy=function(n){t.handleScroll(e.Event(n))},!0)},unbind:function(){this.stopListeningTo(e(document)),window.removeEventListener("touchmove",this.handleTouchMoveProxy),window.removeEventListener("scroll",this.handleScrollProxy,!0)},handleTouchStart:function(e){this.stopTouch(e,!0),this.isTouching=!0,this.trigger("touchstart",e)},handleTouchMove:function(e){this.isTouching&&this.trigger("touchmove",e)},handleTouchCancel:function(e){this.isTouching&&(this.trigger("touchcancel",e),this.stopTouch(e))},handleTouchEnd:function(e){this.stopTouch(e)},handleMouseDown:function(e){this.shouldIgnoreMouse()||this.trigger("mousedown",e)},handleMouseMove:function(e){this.shouldIgnoreMouse()||this.trigger("mousemove",e)},handleMouseUp:function(e){this.shouldIgnoreMouse()||this.trigger("mouseup",e)},handleClick:function(e){this.shouldIgnoreMouse()||this.trigger("click",e)},handleSelectStart:function(e){this.trigger("selectstart",e)},handleContextMenu:function(e){this.trigger("contextmenu",e)},handleScroll:function(e){this.trigger("scroll",e)},stopTouch:function(e,t){this.isTouching&&(this.isTouching=!1,this.trigger("touchend",e),t||this.startTouchMouseIgnore())},startTouchMouseIgnore:function(){var e=this,t=Ze.touchMouseIgnoreWait;t&&(this.mouseIgnoreDepth++,setTimeout(function(){e.mouseIgnoreDepth--},t))},shouldIgnoreMouse:function(){return this.isTouching||Boolean(this.mouseIgnoreDepth)}});!function(){var e=null,t=0;yt.get=function(){return e||(e=new yt,e.bind()),e},yt.needed=function(){yt.get(),t++},yt.unneeded=function(){t--,t||(e.unbind(),e=null)}}();var wt=ke.extend(pt,{options:null,sourceEl:null,el:null,parentEl:null,top0:null,left0:null,y0:null,x0:null,topDelta:null,leftDelta:null,isFollowing:!1,isHidden:!1,isAnimating:!1,constructor:function(t,n){this.options=n=n||{},this.sourceEl=t,this.parentEl=n.parentEl?e(n.parentEl):t.parent()},start:function(t){this.isFollowing||(this.isFollowing=!0,this.y0=S(t),this.x0=k(t),this.topDelta=0,this.leftDelta=0,this.isHidden||this.updatePosition(),A(t)?this.listenTo(e(document),"touchmove",this.handleMove):this.listenTo(e(document),"mousemove",this.handleMove))},stop:function(t,n){function i(){r.isAnimating=!1,r.removeElement(),r.top0=r.left0=null,n&&n()}var r=this,o=this.options.revertDuration;this.isFollowing&&!this.isAnimating&&(this.isFollowing=!1,this.stopListeningTo(e(document)),t&&o&&!this.isHidden?(this.isAnimating=!0,this.el.animate({top:this.top0,left:this.left0},{duration:o,complete:i})):i())},getEl:function(){var e=this.el;return e||(e=this.el=this.sourceEl.clone().addClass(this.options.additionalClass||"").css({position:"absolute",visibility:"",display:this.isHidden?"none":"",margin:0,right:"auto",bottom:"auto",width:this.sourceEl.width(),height:this.sourceEl.height(),opacity:this.options.opacity||"",zIndex:this.options.zIndex}),e.addClass("fc-unselectable"),e.appendTo(this.parentEl)),e},removeElement:function(){this.el&&(this.el.remove(),this.el=null)},updatePosition:function(){var e,t;this.getEl(),null===this.top0&&(e=this.sourceEl.offset(),t=this.el.offsetParent().offset(),this.top0=e.top-t.top,this.left0=e.left-t.left),this.el.css({top:this.top0+this.topDelta,left:this.left0+this.leftDelta})},handleMove:function(e){this.topDelta=S(e)-this.y0,this.leftDelta=k(e)-this.x0,this.isHidden||this.updatePosition()},hide:function(){this.isHidden||(this.isHidden=!0,this.el&&this.el.hide())},show:function(){this.isHidden&&(this.isHidden=!1,this.updatePosition(),this.getEl().show())}}),kt=Ze.Grid=ke.extend(pt,{hasDayInteractions:!0,view:null,isRTL:null,start:null,end:null,el:null,elsByFill:null,eventTimeFormat:null,displayEventTime:null,displayEventEnd:null,minResizeDuration:null,largeUnit:null,dayClickListener:null,daySelectListener:null,segDragListener:null,segResizeListener:null,externalDragListener:null,constructor:function(e){this.view=e,this.isRTL=e.opt("isRTL"),this.elsByFill={},this.dayClickListener=this.buildDayClickListener(),this.daySelectListener=this.buildDaySelectListener()},computeEventTimeFormat:function(){return this.view.opt("smallTimeFormat")},computeDisplayEventTime:function(){return!0},computeDisplayEventEnd:function(){return!0},setRange:function(e){this.start=e.start.clone(),this.end=e.end.clone(),this.rangeUpdated(),this.processRangeOptions()},rangeUpdated:function(){},processRangeOptions:function(){var e,t,n=this.view;this.eventTimeFormat=n.opt("eventTimeFormat")||n.opt("timeFormat")||this.computeEventTimeFormat(),e=n.opt("displayEventTime"),null==e&&(e=this.computeDisplayEventTime()),t=n.opt("displayEventEnd"),null==t&&(t=this.computeDisplayEventEnd()),this.displayEventTime=e,this.displayEventEnd=t},spanToSegs:function(e){},diffDates:function(e,t){return this.largeUnit?I(e,t,this.largeUnit):j(e,t)},hitsNeededDepth:0,hitsNeeded:function(){this.hitsNeededDepth++||this.prepareHits()},hitsNotNeeded:function(){this.hitsNeededDepth&&!--this.hitsNeededDepth&&this.releaseHits()},prepareHits:function(){},releaseHits:function(){},queryHit:function(e,t){},getSafeHitSpan:function(e){var t=this.getHitSpan(e);return K(t,this.view.activeRange)?t:null},getHitSpan:function(e){},getHitEl:function(e){},setElement:function(e){this.el=e,this.hasDayInteractions&&(x(e),this.bindDayHandler("touchstart",this.dayTouchStart),this.bindDayHandler("mousedown",this.dayMousedown)),this.bindSegHandlers(),this.bindGlobalHandlers()},bindDayHandler:function(t,n){var i=this;this.el.on(t,function(t){if(!e(t.target).is(i.segSelector+","+i.segSelector+" *,.fc-more,a[data-goto]"))return n.call(i,t)})},removeElement:function(){this.unbindGlobalHandlers(),this.clearDragListeners(),this.el.remove()},renderSkeleton:function(){},renderDates:function(){},unrenderDates:function(){},bindGlobalHandlers:function(){this.listenTo(e(document),{dragstart:this.externalDragStart,sortstart:this.externalDragStart})},unbindGlobalHandlers:function(){this.stopListeningTo(e(document))},dayMousedown:function(e){var t=this.view;yt.get().shouldIgnoreMouse()||(this.dayClickListener.startInteraction(e),t.opt("selectable")&&this.daySelectListener.startInteraction(e,{distance:t.opt("selectMinDistance")}))},dayTouchStart:function(e){var t,n=this.view;n.isSelected||n.selectedEvent||(t=n.opt("selectLongPressDelay"),null==t&&(t=n.opt("longPressDelay")),this.dayClickListener.startInteraction(e),n.opt("selectable")&&this.daySelectListener.startInteraction(e,{delay:t}))},buildDayClickListener:function(){var e,t=this,n=this.view,i=new bt(this,{scroll:n.opt("dragScroll"),interactionStart:function(){e=i.origHit},hitOver:function(t,n,i){n||(e=null)},hitOut:function(){e=null},interactionEnd:function(i,r){var o;!r&&e&&(o=t.getSafeHitSpan(e),o&&n.triggerDayClick(o,t.getHitEl(e),i))}});return i.shouldCancelTouchScroll=!1,i.scrollAlwaysKills=!0,i},buildDaySelectListener:function(){var e,t=this,n=this.view,i=new bt(this,{scroll:n.opt("dragScroll"),interactionStart:function(){e=null},dragStart:function(){n.unselect()},hitOver:function(n,i,r){var a,s;r&&(a=t.getSafeHitSpan(r),s=t.getSafeHitSpan(n),e=a&&s?t.computeSelection(a,s):null,e?t.renderSelection(e):e===!1&&o())},hitOut:function(){e=null,t.unrenderSelection()},hitDone:function(){a()},interactionEnd:function(t,i){!i&&e&&n.reportSelection(e,t)}});return i},clearDragListeners:function(){this.dayClickListener.endInteraction(),this.daySelectListener.endInteraction(),this.segDragListener&&this.segDragListener.endInteraction(),this.segResizeListener&&this.segResizeListener.endInteraction(),this.externalDragListener&&this.externalDragListener.endInteraction()},renderEventLocationHelper:function(e,t){var n=this.fabricateHelperEvent(e,t);return this.renderHelper(n,t)},fabricateHelperEvent:function(e,t){var n=t?re(t.event):{};return n.start=e.start.clone(),n.end=e.end?e.end.clone():null,n.allDay=null,this.view.calendar.normalizeEventDates(n),n.className=(n.className||[]).concat("fc-helper"),t||(n.editable=!1),n},renderHelper:function(e,t){},unrenderHelper:function(){},renderSelection:function(e){this.renderHighlight(e)},unrenderSelection:function(){this.unrenderHighlight()},computeSelection:function(e,t){var n=this.computeSelectionSpan(e,t);return!(n&&!this.view.calendar.isSelectionSpanAllowed(n))&&n},computeSelectionSpan:function(e,t){var n=[e.start,e.end,t.start,t.end];return n.sort(ge),{start:n[0].clone(),end:n[3].clone()}},renderHighlight:function(e){this.renderFill("highlight",this.spanToSegs(e))},unrenderHighlight:function(){this.unrenderFill("highlight")},highlightSegClasses:function(){return["fc-highlight"]},renderBusinessHours:function(){},unrenderBusinessHours:function(){},getNowIndicatorUnit:function(){},renderNowIndicator:function(e){},unrenderNowIndicator:function(){},renderFill:function(e,t){},unrenderFill:function(e){var t=this.elsByFill[e];t&&(t.remove(),delete this.elsByFill[e])},renderFillSegEls:function(t,n){var i,r=this,o=this[t+"SegEl"],a="",s=[];if(n.length){for(i=0;i<n.length;i++)a+=this.fillSegHtml(t,n[i]);e(a).each(function(t,i){var a=n[t],l=e(i);o&&(l=o.call(r,a,l)),l&&(l=e(l),l.is(r.fillSegTag)&&(a.el=l,s.push(a)))})}return s},fillSegTag:"div",fillSegHtml:function(e,t){var n=this[e+"SegClasses"],i=this[e+"SegCss"],r=n?n.call(this,t):[],o=he(i?i.call(this,t):{});return"<"+this.fillSegTag+(r.length?' class="'+r.join(" ")+'"':"")+(o?' style="'+o+'"':"")+" />"},getDayClasses:function(e,t){var n,i=this.view,r=[];return Z(e,i.activeRange)?(r.push("fc-"+$e[e.day()]),1==i.currentRangeAs("months")&&e.month()!=i.currentRange.start.month()&&r.push("fc-other-month"),n=i.calendar.getNow(),e.isSame(n,"day")?(r.push("fc-today"),t!==!0&&r.push(i.highlightStateClass)):e<n?r.push("fc-past"):r.push("fc-future")):r.push("fc-disabled-day"),r}});kt.mixin({segSelector:".fc-event-container > *",mousedOverSeg:null,isDraggingSeg:!1,isResizingSeg:!1,isDraggingExternal:!1,segs:null,renderEvents:function(e){var t,n=[],i=[];for(t=0;t<e.length;t++)(Ce(e[t])?n:i).push(e[t]);this.segs=[].concat(this.renderBgEvents(n),this.renderFgEvents(i))},renderBgEvents:function(e){var t=this.eventsToSegs(e);return this.renderBgSegs(t)||t},renderFgEvents:function(e){var t=this.eventsToSegs(e);return this.renderFgSegs(t)||t},unrenderEvents:function(){this.handleSegMouseout(),this.clearDragListeners(),this.unrenderFgSegs(),this.unrenderBgSegs(),this.segs=null},getEventSegs:function(){return this.segs||[]},renderFgSegs:function(e){},unrenderFgSegs:function(){},renderFgSegEls:function(t,n){var i,r=this.view,o="",a=[];if(t.length){for(i=0;i<t.length;i++)o+=this.fgSegHtml(t[i],n);e(o).each(function(n,i){var o=t[n],s=r.resolveEventEl(o.event,e(i));s&&(s.data("fc-seg",o),o.el=s,a.push(o))})}return a},fgSegHtml:function(e,t){},renderBgSegs:function(e){return this.renderFill("bgEvent",e)},unrenderBgSegs:function(){this.unrenderFill("bgEvent")},bgEventSegEl:function(e,t){return this.view.resolveEventEl(e.event,t)},bgEventSegClasses:function(e){var t=e.event,n=t.source||{};return["fc-bgevent"].concat(t.className,n.className||[])},bgEventSegCss:function(e){return{"background-color":this.getSegSkinCss(e)["background-color"]}},businessHoursSegClasses:function(e){return["fc-nonbusiness","fc-bgevent"]},buildBusinessHourSegs:function(e,t){return this.eventsToSegs(this.buildBusinessHourEvents(e,t))},buildBusinessHourEvents:function(t,n){var i,r=this.view.calendar;return null==n&&(n=r.opt("businessHours")),i=r.computeBusinessHourEvents(t,n),!i.length&&n&&(i=[e.extend({},Lt,{start:this.view.activeRange.end,end:this.view.activeRange.end,dow:null})]),i},bindSegHandlers:function(){this.bindSegHandlersToEl(this.el)},bindSegHandlersToEl:function(e){this.bindSegHandlerToEl(e,"touchstart",this.handleSegTouchStart),this.bindSegHandlerToEl(e,"mouseenter",this.handleSegMouseover),this.bindSegHandlerToEl(e,"mouseleave",this.handleSegMouseout),this.bindSegHandlerToEl(e,"mousedown",this.handleSegMousedown),this.bindSegHandlerToEl(e,"click",this.handleSegClick)},bindSegHandlerToEl:function(t,n,i){var r=this;t.on(n,this.segSelector,function(t){var n=e(this).data("fc-seg");if(n&&!r.isDraggingSeg&&!r.isResizingSeg)return i.call(r,n,t)})},handleSegClick:function(e,t){var n=this.view.publiclyTrigger("eventClick",e.el[0],e.event,t);n===!1&&t.preventDefault()},handleSegMouseover:function(e,t){yt.get().shouldIgnoreMouse()||this.mousedOverSeg||(this.mousedOverSeg=e,this.view.isEventResizable(e.event)&&e.el.addClass("fc-allow-mouse-resize"),this.view.publiclyTrigger("eventMouseover",e.el[0],e.event,t))},handleSegMouseout:function(e,t){t=t||{},this.mousedOverSeg&&(e=e||this.mousedOverSeg,this.mousedOverSeg=null,this.view.isEventResizable(e.event)&&e.el.removeClass("fc-allow-mouse-resize"),this.view.publiclyTrigger("eventMouseout",e.el[0],e.event,t))},handleSegMousedown:function(e,t){var n=this.startSegResize(e,t,{distance:5});!n&&this.view.isEventDraggable(e.event)&&this.buildSegDragListener(e).startInteraction(t,{distance:5})},handleSegTouchStart:function(e,t){var n,i,r=this.view,o=e.event,a=r.isEventSelected(o),s=r.isEventDraggable(o),l=r.isEventResizable(o),c=!1;a&&l&&(c=this.startSegResize(e,t)),c||!s&&!l||(i=r.opt("eventLongPressDelay"),null==i&&(i=r.opt("longPressDelay")),n=s?this.buildSegDragListener(e):this.buildSegSelectListener(e),n.startInteraction(t,{delay:a?0:i}))},startSegResize:function(t,n,i){return!!e(n.target).is(".fc-resizer")&&(this.buildSegResizeListener(t,e(n.target).is(".fc-start-resizer")).startInteraction(n,i),!0)},buildSegDragListener:function(e){var t,n,i,r=this,s=this.view,l=e.el,c=e.event;if(this.segDragListener)return this.segDragListener;var u=this.segDragListener=new bt(s,{scroll:s.opt("dragScroll"),subjectEl:l,subjectCenter:!0,interactionStart:function(i){e.component=r,t=!1,n=new wt(e.el,{additionalClass:"fc-dragging",parentEl:s.el,opacity:u.isTouch?null:s.opt("dragOpacity"),revertDuration:s.opt("dragRevertDuration"),zIndex:2}),n.hide(),n.start(i)},dragStart:function(n){u.isTouch&&!s.isEventSelected(c)&&s.selectEvent(c),t=!0,r.handleSegMouseout(e,n),r.segDragStart(e,n),s.hideEvent(c)},hitOver:function(t,a,l){var d,h,f,p=!0;e.hit&&(l=e.hit),d=l.component.getSafeHitSpan(l),h=t.component.getSafeHitSpan(t),d&&h?(i=r.computeEventDrop(d,h,c),p=i&&r.isEventLocationAllowed(i,c)):p=!1,p||(i=null,o()),i&&(f=s.renderDrag(i,e))?(f.addClass("fc-dragging"),u.isTouch||r.applyDragOpacity(f),n.hide()):n.show(),a&&(i=null)},hitOut:function(){s.unrenderDrag(),n.show(),i=null},hitDone:function(){a()},interactionEnd:function(o){delete e.component,n.stop(!i,function(){t&&(s.unrenderDrag(),r.segDragStop(e,o)),i?s.reportSegDrop(e,i,r.largeUnit,l,o):s.showEvent(c)}),r.segDragListener=null}});return u},buildSegSelectListener:function(e){var t=this,n=this.view,i=e.event;if(this.segDragListener)return this.segDragListener;var r=this.segDragListener=new vt({dragStart:function(e){r.isTouch&&!n.isEventSelected(i)&&n.selectEvent(i)},interactionEnd:function(e){t.segDragListener=null}});return r},segDragStart:function(e,t){this.isDraggingSeg=!0,this.view.publiclyTrigger("eventDragStart",e.el[0],e.event,t,{})},segDragStop:function(e,t){this.isDraggingSeg=!1,this.view.publiclyTrigger("eventDragStop",e.el[0],e.event,t,{})},computeEventDrop:function(e,t,n){var i,r,o=this.view.calendar,a=e.start,s=t.start;return a.hasTime()===s.hasTime()?(i=this.diffDates(s,a),n.allDay&&ee(i)?(r={start:n.start.clone(),end:o.getEventEnd(n),allDay:!1},o.normalizeEventTimes(r)):r=_e(n),r.start.add(i),r.end&&r.end.add(i)):r={start:s.clone(),end:null,allDay:!s.hasTime()},r},applyDragOpacity:function(e){var t=this.view.opt("dragOpacity");null!=t&&e.css("opacity",t)},externalDragStart:function(t,n){var i,r,o=this.view;o.opt("droppable")&&(i=e((n?n.item:null)||t.target),r=o.opt("dropAccept"),(e.isFunction(r)?r.call(i[0],i):i.is(r))&&(this.isDraggingExternal||this.listenToExternalDrag(i,t,n)))},listenToExternalDrag:function(e,t,n){var i,r=this,s=this.view,l=Le(e),c=r.externalDragListener=new bt(this,{interactionStart:function(){r.isDraggingExternal=!0},hitOver:function(e){var t=!0,n=e.component.getSafeHitSpan(e);n?(i=r.computeExternalDrop(n,l),t=i&&r.isExternalLocationAllowed(i,l.eventProps)):t=!1,t||(i=null,o()),i&&r.renderDrag(i)},hitOut:function(){i=null},hitDone:function(){a(),r.unrenderDrag()},interactionEnd:function(t){i&&s.reportExternalDrop(l,i,e,t,n),r.isDraggingExternal=!1,r.externalDragListener=null}});c.startDrag(t)},computeExternalDrop:function(e,t){var n=this.view.calendar,i={start:n.applyTimezone(e.start),end:null};return t.startTime&&!i.start.hasTime()&&i.start.time(t.startTime),t.duration&&(i.end=i.start.clone().add(t.duration)),i},renderDrag:function(e,t){},unrenderDrag:function(){},buildSegResizeListener:function(e,t){var n,i,r=this,s=this.view,l=s.calendar,c=e.el,u=e.event,d=l.getEventEnd(u),h=this.segResizeListener=new bt(this,{scroll:s.opt("dragScroll"),subjectEl:c,interactionStart:function(){n=!1},dragStart:function(t){n=!0,r.handleSegMouseout(e,t),r.segResizeStart(e,t)},hitOver:function(n,a,l){var c=!0,h=r.getSafeHitSpan(l),f=r.getSafeHitSpan(n);h&&f?(i=t?r.computeEventStartResize(h,f,u):r.computeEventEndResize(h,f,u),c=i&&r.isEventLocationAllowed(i,u)):c=!1,c?i.start.isSame(u.start.clone().stripZone())&&i.end.isSame(d.clone().stripZone())&&(i=null):(i=null,o()),i&&(s.hideEvent(u),r.renderEventResize(i,e))},hitOut:function(){i=null,s.showEvent(u)},hitDone:function(){r.unrenderEventResize(),a()},interactionEnd:function(t){n&&r.segResizeStop(e,t),i?s.reportSegResize(e,i,r.largeUnit,c,t):s.showEvent(u),r.segResizeListener=null}});return h},segResizeStart:function(e,t){this.isResizingSeg=!0,this.view.publiclyTrigger("eventResizeStart",e.el[0],e.event,t,{})},segResizeStop:function(e,t){this.isResizingSeg=!1,this.view.publiclyTrigger("eventResizeStop",e.el[0],e.event,t,{})},computeEventStartResize:function(e,t,n){return this.computeEventResize("start",e,t,n)},computeEventEndResize:function(e,t,n){return this.computeEventResize("end",e,t,n)},computeEventResize:function(e,t,n,i){var r,o,a=this.view.calendar,s=this.diffDates(n[e],t[e]);return r={start:i.start.clone(),end:a.getEventEnd(i),allDay:i.allDay},r.allDay&&ee(s)&&(r.allDay=!1,a.normalizeEventTimes(r)),r[e].add(s),r.start.isBefore(r.end)||(o=this.minResizeDuration||(i.allDay?a.defaultAllDayEventDuration:a.defaultTimedEventDuration),"start"==e?r.start=r.end.clone().subtract(o):r.end=r.start.clone().add(o)),r},renderEventResize:function(e,t){},unrenderEventResize:function(){},getEventTimeText:function(e,t,n){return null==t&&(t=this.eventTimeFormat),null==n&&(n=this.displayEventEnd),this.displayEventTime&&e.start.hasTime()?n&&e.end?this.view.formatRange(e,t):e.start.format(t):""},getSegClasses:function(e,t,n){var i=this.view,r=["fc-event",e.isStart?"fc-start":"fc-not-start",e.isEnd?"fc-end":"fc-not-end"].concat(this.getSegCustomClasses(e));return t&&r.push("fc-draggable"),n&&r.push("fc-resizable"),i.isEventSelected(e.event)&&r.push("fc-selected"),r},getSegCustomClasses:function(e){var t=e.event;return[].concat(t.className,t.source?t.source.className:[])},getSegSkinCss:function(e){return{"background-color":this.getSegBackgroundColor(e),"border-color":this.getSegBorderColor(e),color:this.getSegTextColor(e)}},getSegBackgroundColor:function(e){return e.event.backgroundColor||e.event.color||this.getSegDefaultBackgroundColor(e)},getSegDefaultBackgroundColor:function(e){var t=e.event.source||{};return t.backgroundColor||t.color||this.view.opt("eventBackgroundColor")||this.view.opt("eventColor")},getSegBorderColor:function(e){return e.event.borderColor||e.event.color||this.getSegDefaultBorderColor(e)},getSegDefaultBorderColor:function(e){var t=e.event.source||{};return t.borderColor||t.color||this.view.opt("eventBorderColor")||this.view.opt("eventColor")},getSegTextColor:function(e){return e.event.textColor||this.getSegDefaultTextColor(e)},
getSegDefaultTextColor:function(e){var t=e.event.source||{};return t.textColor||this.view.opt("eventTextColor")},isEventLocationAllowed:function(e,t){if(this.isEventLocationInRange(e)){var n,i=this.view.calendar,r=this.eventToSpans(e);if(r.length){for(n=0;n<r.length;n++)if(!i.isEventSpanAllowed(r[n],t))return!1;return!0}}return!1},isExternalLocationAllowed:function(e,t){if(this.isEventLocationInRange(e)){var n,i=this.view.calendar,r=this.eventToSpans(e);if(r.length){for(n=0;n<r.length;n++)if(!i.isExternalSpanAllowed(r[n],e,t))return!1;return!0}}return!1},isEventLocationInRange:function(e){return K(this.eventToRawRange(e),this.view.validRange)},eventToSegs:function(e){return this.eventsToSegs([e])},eventToSpans:function(e){var t=this.eventToRange(e);return t?this.eventRangeToSpans(t,e):[]},eventsToSegs:function(t,n){var i=this,r=Re(t),o=[];return e.each(r,function(e,t){var r,a,s=[],l=[];for(a=0;a<t.length;a++)r=i.eventToRange(t[a]),r&&(l.push(r),s.push(t[a]));if(Me(t[0]))for(l=i.invertRanges(l),a=0;a<l.length;a++)o.push.apply(o,i.eventRangeToSegs(l[a],t[0],n));else for(a=0;a<l.length;a++)o.push.apply(o,i.eventRangeToSegs(l[a],s[a],n))}),o},eventToRange:function(e){return this.refineRawEventRange(this.eventToRawRange(e))},refineRawEventRange:function(e){var t=this.view,n=t.calendar,i=P(e,t.activeRange);if(i)return n.localizeMoment(i.start),n.localizeMoment(i.end),i},eventToRawRange:function(e){var t=this.view.calendar,n=e.start.clone().stripZone(),i=(e.end?e.end.clone():t.getDefaultEventEnd(null!=e.allDay?e.allDay:!e.start.hasTime(),e.start)).stripZone();return{start:n,end:i}},eventRangeToSegs:function(e,t,n){var i,r=this.eventRangeToSpans(e,t),o=[];for(i=0;i<r.length;i++)o.push.apply(o,this.eventSpanToSegs(r[i],t,n));return o},eventRangeToSpans:function(t,n){return[e.extend({},t)]},eventSpanToSegs:function(e,t,n){var i,r,o=n?n(e):this.spanToSegs(e);for(i=0;i<o.length;i++)r=o[i],e.isStart||(r.isStart=!1),e.isEnd||(r.isEnd=!1),r.event=t,r.eventStartMS=+e.start,r.eventDurationMS=e.end-e.start;return o},invertRanges:function(e){var t,n,i=this.view,r=i.activeRange.start.clone(),o=i.activeRange.end.clone(),a=[],s=r;for(e.sort(He),t=0;t<e.length;t++)n=e[t],n.start>s&&a.push({start:s,end:n.start}),n.end>s&&(s=n.end);return s<o&&a.push({start:s,end:o}),a},sortEventSegs:function(e){e.sort(ve(this,"compareEventSegs"))},compareEventSegs:function(e,t){return e.eventStartMS-t.eventStartMS||t.eventDurationMS-e.eventDurationMS||t.event.allDay-e.event.allDay||R(e.event,t.event,this.view.eventOrderSpecs)}}),Ze.pluckEventDateProps=_e,Ze.isBgEvent=Ce,Ze.dataAttrPrefix="";var St=Ze.DayTableMixin={breakOnWeeks:!1,dayDates:null,dayIndices:null,daysPerRow:null,rowCnt:null,colCnt:null,colHeadFormat:null,updateDayTable:function(){for(var e,t,n,i=this.view,r=this.start.clone(),o=-1,a=[],s=[];r.isBefore(this.end);)i.isHiddenDay(r)?a.push(o+.5):(o++,a.push(o),s.push(r.clone())),r.add(1,"days");if(this.breakOnWeeks){for(t=s[0].day(),e=1;e<s.length&&s[e].day()!=t;e++);n=Math.ceil(s.length/e)}else n=1,e=s.length;this.dayDates=s,this.dayIndices=a,this.daysPerRow=e,this.rowCnt=n,this.updateDayTableCols()},updateDayTableCols:function(){this.colCnt=this.computeColCnt(),this.colHeadFormat=this.view.opt("columnFormat")||this.computeColHeadFormat()},computeColCnt:function(){return this.daysPerRow},getCellDate:function(e,t){return this.dayDates[this.getCellDayIndex(e,t)].clone()},getCellRange:function(e,t){var n=this.getCellDate(e,t),i=n.clone().add(1,"days");return{start:n,end:i}},getCellDayIndex:function(e,t){return e*this.daysPerRow+this.getColDayIndex(t)},getColDayIndex:function(e){return this.isRTL?this.colCnt-1-e:e},getDateDayIndex:function(e){var t=this.dayIndices,n=e.diff(this.start,"days");return n<0?t[0]-1:n>=t.length?t[t.length-1]+1:t[n]},computeColHeadFormat:function(){return this.rowCnt>1||this.colCnt>10?"ddd":this.colCnt>1?this.view.opt("dayOfMonthFormat"):"dddd"},sliceRangeByRow:function(e){var t,n,i,r,o,a=this.daysPerRow,s=this.view.computeDayRange(e),l=this.getDateDayIndex(s.start),c=this.getDateDayIndex(s.end.clone().subtract(1,"days")),u=[];for(t=0;t<this.rowCnt;t++)n=t*a,i=n+a-1,r=Math.max(l,n),o=Math.min(c,i),r=Math.ceil(r),o=Math.floor(o),r<=o&&u.push({row:t,firstRowDayIndex:r-n,lastRowDayIndex:o-n,isStart:r===l,isEnd:o===c});return u},sliceRangeByDay:function(e){var t,n,i,r,o,a,s=this.daysPerRow,l=this.view.computeDayRange(e),c=this.getDateDayIndex(l.start),u=this.getDateDayIndex(l.end.clone().subtract(1,"days")),d=[];for(t=0;t<this.rowCnt;t++)for(n=t*s,i=n+s-1,r=n;r<=i;r++)o=Math.max(c,r),a=Math.min(u,r),o=Math.ceil(o),a=Math.floor(a),o<=a&&d.push({row:t,firstRowDayIndex:o-n,lastRowDayIndex:a-n,isStart:o===c,isEnd:a===u});return d},renderHeadHtml:function(){var e=this.view;return'<div class="fc-row '+e.widgetHeaderClass+'"><table><thead>'+this.renderHeadTrHtml()+"</thead></table></div>"},renderHeadIntroHtml:function(){return this.renderIntroHtml()},renderHeadTrHtml:function(){return"<tr>"+(this.isRTL?"":this.renderHeadIntroHtml())+this.renderHeadDateCellsHtml()+(this.isRTL?this.renderHeadIntroHtml():"")+"</tr>"},renderHeadDateCellsHtml:function(){var e,t,n=[];for(e=0;e<this.colCnt;e++)t=this.getCellDate(0,e),n.push(this.renderHeadDateCellHtml(t));return n.join("")},renderHeadDateCellHtml:function(e,t,n){var i=this.view,r=Z(e,i.activeRange),o=["fc-day-header",i.widgetHeaderClass],a=ue(e.format(this.colHeadFormat));return 1===this.rowCnt?o=o.concat(this.getDayClasses(e,!0)):o.push("fc-"+$e[e.day()]),'<th class="'+o.join(" ")+'"'+(1===(r&&this.rowCnt)?' data-date="'+e.format("YYYY-MM-DD")+'"':"")+(t>1?' colspan="'+t+'"':"")+(n?" "+n:"")+">"+(r?i.buildGotoAnchorHtml({date:e,forceOff:this.rowCnt>1||1===this.colCnt},a):a)+"</th>"},renderBgTrHtml:function(e){return"<tr>"+(this.isRTL?"":this.renderBgIntroHtml(e))+this.renderBgCellsHtml(e)+(this.isRTL?this.renderBgIntroHtml(e):"")+"</tr>"},renderBgIntroHtml:function(e){return this.renderIntroHtml()},renderBgCellsHtml:function(e){var t,n,i=[];for(t=0;t<this.colCnt;t++)n=this.getCellDate(e,t),i.push(this.renderBgCellHtml(n));return i.join("")},renderBgCellHtml:function(e,t){var n=this.view,i=Z(e,n.activeRange),r=this.getDayClasses(e);return r.unshift("fc-day",n.widgetContentClass),'<td class="'+r.join(" ")+'"'+(i?' data-date="'+e.format("YYYY-MM-DD")+'"':"")+(t?" "+t:"")+"></td>"},renderIntroHtml:function(){},bookendCells:function(e){var t=this.renderIntroHtml();t&&(this.isRTL?e.append(t):e.prepend(t))}},At=Ze.DayGrid=kt.extend(St,{numbersVisible:!1,bottomCoordPadding:0,rowEls:null,cellEls:null,helperEls:null,rowCoordCache:null,colCoordCache:null,renderDates:function(e){var t,n,i=this.view,r=this.rowCnt,o=this.colCnt,a="";for(t=0;t<r;t++)a+=this.renderDayRowHtml(t,e);for(this.el.html(a),this.rowEls=this.el.find(".fc-row"),this.cellEls=this.el.find(".fc-day, .fc-disabled-day"),this.rowCoordCache=new mt({els:this.rowEls,isVertical:!0}),this.colCoordCache=new mt({els:this.cellEls.slice(0,this.colCnt),isHorizontal:!0}),t=0;t<r;t++)for(n=0;n<o;n++)i.publiclyTrigger("dayRender",null,this.getCellDate(t,n),this.getCellEl(t,n))},unrenderDates:function(){this.removeSegPopover()},renderBusinessHours:function(){var e=this.buildBusinessHourSegs(!0);this.renderFill("businessHours",e,"bgevent")},unrenderBusinessHours:function(){this.unrenderFill("businessHours")},renderDayRowHtml:function(e,t){var n=this.view,i=["fc-row","fc-week",n.widgetContentClass];return t&&i.push("fc-rigid"),'<div class="'+i.join(" ")+'"><div class="fc-bg"><table>'+this.renderBgTrHtml(e)+'</table></div><div class="fc-content-skeleton"><table>'+(this.numbersVisible?"<thead>"+this.renderNumberTrHtml(e)+"</thead>":"")+"</table></div></div>"},renderNumberTrHtml:function(e){return"<tr>"+(this.isRTL?"":this.renderNumberIntroHtml(e))+this.renderNumberCellsHtml(e)+(this.isRTL?this.renderNumberIntroHtml(e):"")+"</tr>"},renderNumberIntroHtml:function(e){return this.renderIntroHtml()},renderNumberCellsHtml:function(e){var t,n,i=[];for(t=0;t<this.colCnt;t++)n=this.getCellDate(e,t),i.push(this.renderNumberCellHtml(n));return i.join("")},renderNumberCellHtml:function(e){var t,n,i=this.view,r="",o=Z(e,i.activeRange),a=i.dayNumbersVisible&&o;return a||i.cellWeekNumbersVisible?(t=this.getDayClasses(e),t.unshift("fc-day-top"),i.cellWeekNumbersVisible&&(n="ISO"===e._locale._fullCalendar_weekCalc?1:e._locale.firstDayOfWeek()),r+='<td class="'+t.join(" ")+'"'+(o?' data-date="'+e.format()+'"':"")+">",i.cellWeekNumbersVisible&&e.day()==n&&(r+=i.buildGotoAnchorHtml({date:e,type:"week"},{class:"fc-week-number"},e.format("w"))),a&&(r+=i.buildGotoAnchorHtml(e,{class:"fc-day-number"},e.date())),r+="</td>"):"<td/>"},computeEventTimeFormat:function(){return this.view.opt("extraSmallTimeFormat")},computeDisplayEventEnd:function(){return 1==this.colCnt},rangeUpdated:function(){this.updateDayTable()},spanToSegs:function(e){var t,n,i=this.sliceRangeByRow(e);for(t=0;t<i.length;t++)n=i[t],this.isRTL?(n.leftCol=this.daysPerRow-1-n.lastRowDayIndex,n.rightCol=this.daysPerRow-1-n.firstRowDayIndex):(n.leftCol=n.firstRowDayIndex,n.rightCol=n.lastRowDayIndex);return i},prepareHits:function(){this.colCoordCache.build(),this.rowCoordCache.build(),this.rowCoordCache.bottoms[this.rowCnt-1]+=this.bottomCoordPadding},releaseHits:function(){this.colCoordCache.clear(),this.rowCoordCache.clear()},queryHit:function(e,t){if(this.colCoordCache.isLeftInBounds(e)&&this.rowCoordCache.isTopInBounds(t)){var n=this.colCoordCache.getHorizontalIndex(e),i=this.rowCoordCache.getVerticalIndex(t);if(null!=i&&null!=n)return this.getCellHit(i,n)}},getHitSpan:function(e){return this.getCellRange(e.row,e.col)},getHitEl:function(e){return this.getCellEl(e.row,e.col)},getCellHit:function(e,t){return{row:e,col:t,component:this,left:this.colCoordCache.getLeftOffset(t),right:this.colCoordCache.getRightOffset(t),top:this.rowCoordCache.getTopOffset(e),bottom:this.rowCoordCache.getBottomOffset(e)}},getCellEl:function(e,t){return this.cellEls.eq(e*this.colCnt+t)},renderDrag:function(e,t){var n,i=this.eventToSpans(e);for(n=0;n<i.length;n++)this.renderHighlight(i[n]);if(t&&t.component!==this)return this.renderEventLocationHelper(e,t)},unrenderDrag:function(){this.unrenderHighlight(),this.unrenderHelper()},renderEventResize:function(e,t){var n,i=this.eventToSpans(e);for(n=0;n<i.length;n++)this.renderHighlight(i[n]);return this.renderEventLocationHelper(e,t)},unrenderEventResize:function(){this.unrenderHighlight(),this.unrenderHelper()},renderHelper:function(t,n){var i,r=[],o=this.eventToSegs(t);return o=this.renderFgSegEls(o),i=this.renderSegRows(o),this.rowEls.each(function(t,o){var a,s=e(o),l=e('<div class="fc-helper-skeleton"><table/></div>');a=n&&n.row===t?n.el.position().top:s.find(".fc-content-skeleton tbody").position().top,l.css("top",a).find("table").append(i[t].tbodyEl),s.append(l),r.push(l[0])}),this.helperEls=e(r)},unrenderHelper:function(){this.helperEls&&(this.helperEls.remove(),this.helperEls=null)},fillSegTag:"td",renderFill:function(t,n,i){var r,o,a,s=[];for(n=this.renderFillSegEls(t,n),r=0;r<n.length;r++)o=n[r],a=this.renderFillRow(t,o,i),this.rowEls.eq(o.row).append(a),s.push(a[0]);return this.elsByFill[t]=e(s),n},renderFillRow:function(t,n,i){var r,o,a=this.colCnt,s=n.leftCol,l=n.rightCol+1;return i=i||t.toLowerCase(),r=e('<div class="fc-'+i+'-skeleton"><table><tr/></table></div>'),o=r.find("tr"),s>0&&o.append('<td colspan="'+s+'"/>'),o.append(n.el.attr("colspan",l-s)),l<a&&o.append('<td colspan="'+(a-l)+'"/>'),this.bookendCells(o),r}});At.mixin({rowStructs:null,unrenderEvents:function(){this.removeSegPopover(),kt.prototype.unrenderEvents.apply(this,arguments)},getEventSegs:function(){return kt.prototype.getEventSegs.call(this).concat(this.popoverSegs||[])},renderBgSegs:function(t){var n=e.grep(t,function(e){return e.event.allDay});return kt.prototype.renderBgSegs.call(this,n)},renderFgSegs:function(t){var n;return t=this.renderFgSegEls(t),n=this.rowStructs=this.renderSegRows(t),this.rowEls.each(function(t,i){e(i).find(".fc-content-skeleton > table").append(n[t].tbodyEl)}),t},unrenderFgSegs:function(){for(var e,t=this.rowStructs||[];e=t.pop();)e.tbodyEl.remove();this.rowStructs=null},renderSegRows:function(e){var t,n,i=[];for(t=this.groupSegRows(e),n=0;n<t.length;n++)i.push(this.renderSegRow(n,t[n]));return i},fgSegHtml:function(e,t){var n,i,r=this.view,o=e.event,a=r.isEventDraggable(o),s=!t&&o.allDay&&e.isStart&&r.isEventResizableFromStart(o),l=!t&&o.allDay&&e.isEnd&&r.isEventResizableFromEnd(o),c=this.getSegClasses(e,a,s||l),u=he(this.getSegSkinCss(e)),d="";return c.unshift("fc-day-grid-event","fc-h-event"),e.isStart&&(n=this.getEventTimeText(o),n&&(d='<span class="fc-time">'+ue(n)+"</span>")),i='<span class="fc-title">'+(ue(o.title||"")||"&nbsp;")+"</span>",'<a class="'+c.join(" ")+'"'+(o.url?' href="'+ue(o.url)+'"':"")+(u?' style="'+u+'"':"")+'><div class="fc-content">'+(this.isRTL?i+" "+d:d+" "+i)+"</div>"+(s?'<div class="fc-resizer fc-start-resizer" />':"")+(l?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},renderSegRow:function(t,n){function i(t){for(;a<t;)u=(v[r-1]||[])[a],u?u.attr("rowspan",parseInt(u.attr("rowspan")||1,10)+1):(u=e("<td/>"),s.append(u)),m[r][a]=u,v[r][a]=u,a++}var r,o,a,s,l,c,u,d=this.colCnt,h=this.buildSegLevels(n),f=Math.max(1,h.length),p=e("<tbody/>"),g=[],m=[],v=[];for(r=0;r<f;r++){if(o=h[r],a=0,s=e("<tr/>"),g.push([]),m.push([]),v.push([]),o)for(l=0;l<o.length;l++){for(c=o[l],i(c.leftCol),u=e('<td class="fc-event-container"/>').append(c.el),c.leftCol!=c.rightCol?u.attr("colspan",c.rightCol-c.leftCol+1):v[r][a]=u;a<=c.rightCol;)m[r][a]=u,g[r][a]=c,a++;s.append(u)}i(d),this.bookendCells(s),p.append(s)}return{row:t,tbodyEl:p,cellMatrix:m,segMatrix:g,segLevels:h,segs:n}},buildSegLevels:function(e){var t,n,i,r=[];for(this.sortEventSegs(e),t=0;t<e.length;t++){for(n=e[t],i=0;i<r.length&&Pe(n,r[i]);i++);n.level=i,(r[i]||(r[i]=[])).push(n)}for(i=0;i<r.length;i++)r[i].sort(je);return r},groupSegRows:function(e){var t,n=[];for(t=0;t<this.rowCnt;t++)n.push([]);for(t=0;t<e.length;t++)n[e[t].row].push(e[t]);return n}}),At.mixin({segPopover:null,popoverSegs:null,removeSegPopover:function(){this.segPopover&&this.segPopover.hide()},limitRows:function(e){var t,n,i=this.rowStructs||[];for(t=0;t<i.length;t++)this.unlimitRow(t),n=!!e&&("number"==typeof e?e:this.computeRowLevelLimit(t)),n!==!1&&this.limitRow(t,n)},computeRowLevelLimit:function(t){function n(t,n){o=Math.max(o,e(n).outerHeight())}var i,r,o,a=this.rowEls.eq(t),s=a.height(),l=this.rowStructs[t].tbodyEl.children();for(i=0;i<l.length;i++)if(r=l.eq(i).removeClass("fc-limited"),o=0,r.find("> td > :first-child").each(n),r.position().top+o>s)return i;return!1},limitRow:function(t,n){function i(i){for(;S<i;)c=y.getCellSegs(t,S,n),c.length&&(h=o[n-1][S],b=y.renderMoreLink(t,S,c),v=e("<div/>").append(b),h.append(v),k.push(v[0])),S++}var r,o,a,s,l,c,u,d,h,f,p,g,m,v,b,y=this,w=this.rowStructs[t],k=[],S=0;if(n&&n<w.segLevels.length){for(r=w.segLevels[n-1],o=w.cellMatrix,a=w.tbodyEl.children().slice(n).addClass("fc-limited").get(),s=0;s<r.length;s++){for(l=r[s],i(l.leftCol),d=[],u=0;S<=l.rightCol;)c=this.getCellSegs(t,S,n),d.push(c),u+=c.length,S++;if(u){for(h=o[n-1][l.leftCol],f=h.attr("rowspan")||1,p=[],g=0;g<d.length;g++)m=e('<td class="fc-more-cell"/>').attr("rowspan",f),c=d[g],b=this.renderMoreLink(t,l.leftCol+g,[l].concat(c)),v=e("<div/>").append(b),m.append(v),p.push(m[0]),k.push(m[0]);h.addClass("fc-limited").after(e(p)),a.push(h[0])}}i(this.colCnt),w.moreEls=e(k),w.limitedEls=e(a)}},unlimitRow:function(e){var t=this.rowStructs[e];t.moreEls&&(t.moreEls.remove(),t.moreEls=null),t.limitedEls&&(t.limitedEls.removeClass("fc-limited"),t.limitedEls=null)},renderMoreLink:function(t,n,i){var r=this,o=this.view;return e('<a class="fc-more"/>').text(this.getMoreLinkText(i.length)).on("click",function(a){var s=o.opt("eventLimitClick"),l=r.getCellDate(t,n),c=e(this),u=r.getCellEl(t,n),d=r.getCellSegs(t,n),h=r.resliceDaySegs(d,l),f=r.resliceDaySegs(i,l);"function"==typeof s&&(s=o.publiclyTrigger("eventLimitClick",null,{date:l,dayEl:u,moreEl:c,segs:h,hiddenSegs:f},a)),"popover"===s?r.showSegPopover(t,n,c,h):"string"==typeof s&&o.calendar.zoomTo(l,s)})},showSegPopover:function(e,t,n,i){var r,o,a=this,s=this.view,l=n.parent();r=1==this.rowCnt?s.el:this.rowEls.eq(e),o={className:"fc-more-popover",content:this.renderSegPopoverContent(e,t,i),parentEl:this.view.el,top:r.offset().top,autoHide:!0,viewportConstrain:s.opt("popoverViewportConstrain"),hide:function(){if(a.popoverSegs)for(var e,t=0;t<a.popoverSegs.length;++t)e=a.popoverSegs[t],s.publiclyTrigger("eventDestroy",e.event,e.event,e.el);a.segPopover.removeElement(),a.segPopover=null,a.popoverSegs=null}},this.isRTL?o.right=l.offset().left+l.outerWidth()+1:o.left=l.offset().left-1,this.segPopover=new gt(o),this.segPopover.show(),this.bindSegHandlersToEl(this.segPopover.el)},renderSegPopoverContent:function(t,n,i){var r,o=this.view,a=o.opt("theme"),s=this.getCellDate(t,n).format(o.opt("dayPopoverFormat")),l=e('<div class="fc-header '+o.widgetHeaderClass+'"><span class="fc-close '+(a?"ui-icon ui-icon-closethick":"fc-icon fc-icon-x")+'"></span><span class="fc-title">'+ue(s)+'</span><div class="fc-clear"/></div><div class="fc-body '+o.widgetContentClass+'"><div class="fc-event-container"></div></div>'),c=l.find(".fc-event-container");for(i=this.renderFgSegEls(i,!0),this.popoverSegs=i,r=0;r<i.length;r++)this.hitsNeeded(),i[r].hit=this.getCellHit(t,n),this.hitsNotNeeded(),c.append(i[r].el);return l},resliceDaySegs:function(t,n){var i=e.map(t,function(e){return e.event}),r=n.clone(),o=r.clone().add(1,"days"),a={start:r,end:o};return t=this.eventsToSegs(i,function(e){var t=P(e,a);return t?[t]:[]}),this.sortEventSegs(t),t},getMoreLinkText:function(e){var t=this.view.opt("eventLimitText");return"function"==typeof t?t(e):"+"+e+" "+t},getCellSegs:function(e,t,n){for(var i,r=this.rowStructs[e].segMatrix,o=n||0,a=[];o<r.length;)i=r[o][t],i&&a.push(i),o++;return a}});var xt=Ze.TimeGrid=kt.extend(St,{slotDuration:null,snapDuration:null,snapsPerSlot:null,labelFormat:null,labelInterval:null,colEls:null,slatContainerEl:null,slatEls:null,nowIndicatorEls:null,colCoordCache:null,slatCoordCache:null,constructor:function(){kt.apply(this,arguments),this.processOptions()},renderDates:function(){this.el.html(this.renderHtml()),this.colEls=this.el.find(".fc-day, .fc-disabled-day"),this.slatContainerEl=this.el.find(".fc-slats"),this.slatEls=this.slatContainerEl.find("tr"),this.colCoordCache=new mt({els:this.colEls,isHorizontal:!0}),this.slatCoordCache=new mt({els:this.slatEls,isVertical:!0}),this.renderContentSkeleton()},renderHtml:function(){return'<div class="fc-bg"><table>'+this.renderBgTrHtml(0)+'</table></div><div class="fc-slats"><table>'+this.renderSlatRowHtml()+"</table></div>"},renderSlatRowHtml:function(){for(var e,n,i,r=this.view,o=this.isRTL,a="",s=t.duration(+this.view.minTime);s<this.view.maxTime;)e=this.start.clone().time(s),n=me(Y(s,this.labelInterval)),i='<td class="fc-axis fc-time '+r.widgetContentClass+'" '+r.axisStyleAttr()+">"+(n?"<span>"+ue(e.format(this.labelFormat))+"</span>":"")+"</td>",a+='<tr data-time="'+e.format("HH:mm:ss")+'"'+(n?"":' class="fc-minor"')+">"+(o?"":i)+'<td class="'+r.widgetContentClass+'"/>'+(o?i:"")+"</tr>",s.add(this.slotDuration);return a},processOptions:function(){var n,i=this.view,r=i.opt("slotDuration"),o=i.opt("snapDuration");r=t.duration(r),o=o?t.duration(o):r,this.slotDuration=r,this.snapDuration=o,this.snapsPerSlot=r/o,this.minResizeDuration=o,n=i.opt("slotLabelFormat"),e.isArray(n)&&(n=n[n.length-1]),this.labelFormat=n||i.opt("smallTimeFormat"),n=i.opt("slotLabelInterval"),this.labelInterval=n?t.duration(n):this.computeLabelInterval(r)},computeLabelInterval:function(e){var n,i,r;for(n=Gt.length-1;n>=0;n--)if(i=t.duration(Gt[n]),r=Y(i,e),me(r)&&r>1)return i;return t.duration(e)},computeEventTimeFormat:function(){return this.view.opt("noMeridiemTimeFormat")},computeDisplayEventEnd:function(){return!0},prepareHits:function(){this.colCoordCache.build(),this.slatCoordCache.build()},releaseHits:function(){this.colCoordCache.clear()},queryHit:function(e,t){var n=this.snapsPerSlot,i=this.colCoordCache,r=this.slatCoordCache;if(i.isLeftInBounds(e)&&r.isTopInBounds(t)){var o=i.getHorizontalIndex(e),a=r.getVerticalIndex(t);if(null!=o&&null!=a){var s=r.getTopOffset(a),l=r.getHeight(a),c=(t-s)/l,u=Math.floor(c*n),d=a*n+u,h=s+u/n*l,f=s+(u+1)/n*l;return{col:o,snap:d,component:this,left:i.getLeftOffset(o),right:i.getRightOffset(o),top:h,bottom:f}}}},getHitSpan:function(e){var t,n=this.getCellDate(0,e.col),i=this.computeSnapTime(e.snap);return n.time(i),t=n.clone().add(this.snapDuration),{start:n,end:t}},getHitEl:function(e){return this.colEls.eq(e.col)},rangeUpdated:function(){this.updateDayTable()},computeSnapTime:function(e){return t.duration(this.view.minTime+this.snapDuration*e)},spanToSegs:function(e){var t,n=this.sliceRangeByTimes(e);for(t=0;t<n.length;t++)this.isRTL?n[t].col=this.daysPerRow-1-n[t].dayIndex:n[t].col=n[t].dayIndex;return n},sliceRangeByTimes:function(e){var t,n,i,r,o=[];for(n=0;n<this.daysPerRow;n++)i=this.dayDates[n].clone().time(0),r={start:i.clone().add(this.view.minTime),end:i.clone().add(this.view.maxTime)},t=P(e,r),t&&(t.dayIndex=n,o.push(t));return o},updateSize:function(e){this.slatCoordCache.build(),e&&this.updateSegVerticals([].concat(this.fgSegs||[],this.bgSegs||[],this.businessSegs||[]))},getTotalSlatHeight:function(){return this.slatContainerEl.outerHeight()},computeDateTop:function(e,n){return this.computeTimeTop(t.duration(e-n.clone().stripTime()))},computeTimeTop:function(e){var t,n,i=this.slatEls.length,r=(e-this.view.minTime)/this.slotDuration;return r=Math.max(0,r),r=Math.min(i,r),t=Math.floor(r),t=Math.min(t,i-1),n=r-t,this.slatCoordCache.getTopPosition(t)+this.slatCoordCache.getHeight(t)*n},renderDrag:function(e,t){var n,i;if(t)return this.renderEventLocationHelper(e,t);for(n=this.eventToSpans(e),i=0;i<n.length;i++)this.renderHighlight(n[i])},unrenderDrag:function(){this.unrenderHelper(),this.unrenderHighlight()},renderEventResize:function(e,t){return this.renderEventLocationHelper(e,t)},unrenderEventResize:function(){this.unrenderHelper()},renderHelper:function(e,t){return this.renderHelperSegs(this.eventToSegs(e),t)},unrenderHelper:function(){this.unrenderHelperSegs()},renderBusinessHours:function(){this.renderBusinessSegs(this.buildBusinessHourSegs())},unrenderBusinessHours:function(){this.unrenderBusinessSegs()},getNowIndicatorUnit:function(){return"minute"},renderNowIndicator:function(t){var n,i=this.spanToSegs({start:t,end:t}),r=this.computeDateTop(t,t),o=[];for(n=0;n<i.length;n++)o.push(e('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top",r).appendTo(this.colContainerEls.eq(i[n].col))[0]);i.length>0&&o.push(e('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top",r).appendTo(this.el.find(".fc-content-skeleton"))[0]),this.nowIndicatorEls=e(o)},unrenderNowIndicator:function(){this.nowIndicatorEls&&(this.nowIndicatorEls.remove(),this.nowIndicatorEls=null)},renderSelection:function(e){this.view.opt("selectHelper")?this.renderEventLocationHelper(e):this.renderHighlight(e)},unrenderSelection:function(){this.unrenderHelper(),this.unrenderHighlight()},renderHighlight:function(e){this.renderHighlightSegs(this.spanToSegs(e))},unrenderHighlight:function(){this.unrenderHighlightSegs()}});xt.mixin({colContainerEls:null,fgContainerEls:null,bgContainerEls:null,helperContainerEls:null,highlightContainerEls:null,businessContainerEls:null,fgSegs:null,bgSegs:null,helperSegs:null,highlightSegs:null,businessSegs:null,renderContentSkeleton:function(){var t,n,i="";for(t=0;t<this.colCnt;t++)i+='<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';n=e('<div class="fc-content-skeleton"><table><tr>'+i+"</tr></table></div>"),this.colContainerEls=n.find(".fc-content-col"),this.helperContainerEls=n.find(".fc-helper-container"),this.fgContainerEls=n.find(".fc-event-container:not(.fc-helper-container)"),this.bgContainerEls=n.find(".fc-bgevent-container"),this.highlightContainerEls=n.find(".fc-highlight-container"),this.businessContainerEls=n.find(".fc-business-container"),this.bookendCells(n.find("tr")),this.el.append(n)},renderFgSegs:function(e){return e=this.renderFgSegsIntoContainers(e,this.fgContainerEls),this.fgSegs=e,e},unrenderFgSegs:function(){this.unrenderNamedSegs("fgSegs")},renderHelperSegs:function(t,n){var i,r,o,a=[];for(t=this.renderFgSegsIntoContainers(t,this.helperContainerEls),i=0;i<t.length;i++)r=t[i],n&&n.col===r.col&&(o=n.el,r.el.css({left:o.css("left"),right:o.css("right"),"margin-left":o.css("margin-left"),"margin-right":o.css("margin-right")})),a.push(r.el[0]);return this.helperSegs=t,e(a)},unrenderHelperSegs:function(){this.unrenderNamedSegs("helperSegs")},renderBgSegs:function(e){return e=this.renderFillSegEls("bgEvent",e),this.updateSegVerticals(e),this.attachSegsByCol(this.groupSegsByCol(e),this.bgContainerEls),this.bgSegs=e,e},unrenderBgSegs:function(){this.unrenderNamedSegs("bgSegs")},renderHighlightSegs:function(e){e=this.renderFillSegEls("highlight",e),this.updateSegVerticals(e),this.attachSegsByCol(this.groupSegsByCol(e),this.highlightContainerEls),this.highlightSegs=e},unrenderHighlightSegs:function(){this.unrenderNamedSegs("highlightSegs")},renderBusinessSegs:function(e){e=this.renderFillSegEls("businessHours",e),this.updateSegVerticals(e),this.attachSegsByCol(this.groupSegsByCol(e),this.businessContainerEls),this.businessSegs=e},unrenderBusinessSegs:function(){this.unrenderNamedSegs("businessSegs")},groupSegsByCol:function(e){var t,n=[];for(t=0;t<this.colCnt;t++)n.push([]);for(t=0;t<e.length;t++)n[e[t].col].push(e[t]);return n},attachSegsByCol:function(e,t){var n,i,r;for(n=0;n<this.colCnt;n++)for(i=e[n],r=0;r<i.length;r++)t.eq(n).append(i[r].el)},unrenderNamedSegs:function(e){var t,n=this[e];if(n){for(t=0;t<n.length;t++)n[t].el.remove();this[e]=null}},renderFgSegsIntoContainers:function(e,t){var n,i;for(e=this.renderFgSegEls(e),n=this.groupSegsByCol(e),i=0;i<this.colCnt;i++)this.updateFgSegCoords(n[i]);return this.attachSegsByCol(n,t),e},fgSegHtml:function(e,t){var n,i,r,o=this.view,a=e.event,s=o.isEventDraggable(a),l=!t&&e.isStart&&o.isEventResizableFromStart(a),c=!t&&e.isEnd&&o.isEventResizableFromEnd(a),u=this.getSegClasses(e,s,l||c),d=he(this.getSegSkinCss(e));return u.unshift("fc-time-grid-event","fc-v-event"),o.isMultiDayEvent(a)?(e.isStart||e.isEnd)&&(n=this.getEventTimeText(e),i=this.getEventTimeText(e,"LT"),r=this.getEventTimeText(e,null,!1)):(n=this.getEventTimeText(a),i=this.getEventTimeText(a,"LT"),r=this.getEventTimeText(a,null,!1)),'<a class="'+u.join(" ")+'"'+(a.url?' href="'+ue(a.url)+'"':"")+(d?' style="'+d+'"':"")+'><div class="fc-content">'+(n?'<div class="fc-time" data-start="'+ue(r)+'" data-full="'+ue(i)+'"><span>'+ue(n)+"</span></div>":"")+(a.title?'<div class="fc-title">'+ue(a.title)+"</div>":"")+'</div><div class="fc-bg"/>'+(c?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},updateSegVerticals:function(e){this.computeSegVerticals(e),this.assignSegVerticals(e)},computeSegVerticals:function(e){var t,n,i;for(t=0;t<e.length;t++)n=e[t],i=this.dayDates[n.dayIndex],n.top=this.computeDateTop(n.start,i),n.bottom=this.computeDateTop(n.end,i)},assignSegVerticals:function(e){var t,n;for(t=0;t<e.length;t++)n=e[t],n.el.css(this.generateSegVerticalCss(n))},generateSegVerticalCss:function(e){return{top:e.top,bottom:-e.bottom}},updateFgSegCoords:function(e){this.computeSegVerticals(e),this.computeFgSegHorizontals(e),this.assignSegVerticals(e),this.assignFgSegHorizontals(e)},computeFgSegHorizontals:function(e){var t,n,i;if(this.sortEventSegs(e),t=Oe(e),Ie(t),n=t[0]){for(i=0;i<n.length;i++)Ne(n[i]);for(i=0;i<n.length;i++)this.computeFgSegForwardBack(n[i],0,0)}},computeFgSegForwardBack:function(e,t,n){var i,r=e.forwardSegs;if(void 0===e.forwardCoord)for(r.length?(this.sortForwardSegs(r),this.computeFgSegForwardBack(r[0],t+1,n),e.forwardCoord=r[0].backwardCoord):e.forwardCoord=1,e.backwardCoord=e.forwardCoord-(e.forwardCoord-n)/(t+1),i=0;i<r.length;i++)this.computeFgSegForwardBack(r[i],0,e.forwardCoord)},sortForwardSegs:function(e){e.sort(ve(this,"compareForwardSegs"))},compareForwardSegs:function(e,t){return t.forwardPressure-e.forwardPressure||(e.backwardCoord||0)-(t.backwardCoord||0)||this.compareEventSegs(e,t)},assignFgSegHorizontals:function(e){var t,n;for(t=0;t<e.length;t++)n=e[t],n.el.css(this.generateFgSegHorizontalCss(n)),n.bottom-n.top<30&&n.el.addClass("fc-short")},generateFgSegHorizontalCss:function(e){var t,n,i=this.view.opt("slotEventOverlap"),r=e.backwardCoord,o=e.forwardCoord,a=this.generateSegVerticalCss(e);return i&&(o=Math.min(1,r+2*(o-r))),this.isRTL?(t=1-o,n=r):(t=r,n=1-o),a.zIndex=e.level+1,a.left=100*t+"%",a.right=100*n+"%",i&&e.forwardPressure&&(a[this.isRTL?"marginLeft":"marginRight"]=20),a}});var Tt=Ze.View=ct.extend({type:null,name:null,title:null,calendar:null,viewSpec:null,options:null,el:null,renderQueue:null,batchRenderDepth:0,isDatesRendered:!1,isEventsRendered:!1,isBaseRendered:!1,queuedScroll:null,isRTL:!1,isSelected:!1,selectedEvent:null,eventOrderSpecs:null,widgetHeaderClass:null,widgetContentClass:null,highlightStateClass:null,nextDayThreshold:null,isHiddenDayHash:null,isNowIndicatorRendered:null,initialNowDate:null,initialNowQueriedMs:null,nowIndicatorTimeoutID:null,nowIndicatorIntervalID:null,constructor:function(e,n){ct.prototype.constructor.call(this),this.calendar=e,this.viewSpec=n,this.type=n.type,this.options=n.options,this.name=this.type,this.nextDayThreshold=t.duration(this.opt("nextDayThreshold")),this.initThemingProps(),this.initHiddenDays(),this.isRTL=this.opt("isRTL"),this.eventOrderSpecs=z(this.opt("eventOrder")),this.renderQueue=this.buildRenderQueue(),this.initAutoBatchRender(),this.initialize()},buildRenderQueue:function(){var e=this,t=new ht({event:this.opt("eventRenderWait")});return t.on("start",function(){e.freezeHeight(),e.addScroll(e.queryScroll())}),t.on("stop",function(){e.thawHeight(),e.popScroll()}),t},initAutoBatchRender:function(){var e=this;this.on("before:change",function(){e.startBatchRender()}),this.on("change",function(){e.stopBatchRender()})},startBatchRender:function(){this.batchRenderDepth++||this.renderQueue.pause()},stopBatchRender:function(){--this.batchRenderDepth||this.renderQueue.resume()},initialize:function(){},opt:function(e){return this.options[e]},publiclyTrigger:function(e,t){var n=this.calendar;return n.publiclyTrigger.apply(n,[e,t||this].concat(Array.prototype.slice.call(arguments,2),[this]))},updateTitle:function(){this.title=this.computeTitle(),this.calendar.setToolbarsTitle(this.title)},computeTitle:function(){var e;return e=/^(year|month)$/.test(this.currentRangeUnit)?this.currentRange:this.activeRange,this.formatRange({start:this.calendar.applyTimezone(e.start),end:this.calendar.applyTimezone(e.end)},this.opt("titleFormat")||this.computeTitleFormat(),this.opt("titleRangeSeparator"))},computeTitleFormat:function(){return"year"==this.currentRangeUnit?"YYYY":"month"==this.currentRangeUnit?this.opt("monthYearFormat"):this.currentRangeAs("days")>1?"ll":"LL"},formatRange:function(e,t,n){var i=e.end;return i.hasTime()||(i=i.clone().subtract(1)),st(e.start,i,t,n,this.opt("isRTL"))},getAllDayHtml:function(){return this.opt("allDayHtml")||ue(this.opt("allDayText"))},buildGotoAnchorHtml:function(t,n,i){var r,o,a,s;return e.isPlainObject(t)?(r=t.date,o=t.type,a=t.forceOff):r=t,r=Ze.moment(r),s={date:r.format("YYYY-MM-DD"),type:o||"day"},"string"==typeof n&&(i=n,n=null),n=n?" "+fe(n):"",i=i||"",!a&&this.opt("navLinks")?"<a"+n+' data-goto="'+ue(JSON.stringify(s))+'">'+i+"</a>":"<span"+n+">"+i+"</span>"},setElement:function(e){this.el=e,this.bindGlobalHandlers(),this.bindBaseRenderHandlers(),this.renderSkeleton()},removeElement:function(){this.unsetDate(),this.unrenderSkeleton(),
this.unbindGlobalHandlers(),this.unbindBaseRenderHandlers(),this.el.remove()},renderSkeleton:function(){},unrenderSkeleton:function(){},setDate:function(e){var t=this.get("dateProfile"),n=this.buildDateProfile(e,null,!0);return t&&J(t.activeRange,n.activeRange)||this.set("dateProfile",n),n.date},unsetDate:function(){this.unset("dateProfile")},requestDateRender:function(e){var t=this;this.renderQueue.queue(function(){t.executeDateRender(e)},"date","init")},requestDateUnrender:function(){var e=this;this.renderQueue.queue(function(){e.executeDateUnrender()},"date","destroy")},fetchInitialEvents:function(e){return this.calendar.requestEvents(e.activeRange.start,e.activeRange.end)},bindEventChanges:function(){this.listenTo(this.calendar,"eventsReset",this.resetEvents)},unbindEventChanges:function(){this.stopListeningTo(this.calendar,"eventsReset")},setEvents:function(e){this.set("currentEvents",e),this.set("hasEvents",!0)},unsetEvents:function(){this.unset("currentEvents"),this.unset("hasEvents")},resetEvents:function(e){this.startBatchRender(),this.unsetEvents(),this.setEvents(e),this.stopBatchRender()},requestEventsRender:function(e){var t=this;this.renderQueue.queue(function(){t.executeEventsRender(e)},"event","init")},requestEventsUnrender:function(){var e=this;this.renderQueue.queue(function(){e.executeEventsUnrender()},"event","destroy")},executeDateRender:function(e,t){this.setDateProfileForRendering(e),this.updateTitle(),this.calendar.updateToolbarButtons(),this.render&&this.render(),this.renderDates(),this.updateSize(),this.renderBusinessHours(),this.startNowIndicator(),t||this.addScroll(this.computeInitialDateScroll()),this.isDatesRendered=!0,this.trigger("datesRendered")},executeDateUnrender:function(){this.unselect(),this.stopNowIndicator(),this.trigger("before:datesUnrendered"),this.unrenderBusinessHours(),this.unrenderDates(),this.destroy&&this.destroy(),this.isDatesRendered=!1},renderDates:function(){},unrenderDates:function(){},bindBaseRenderHandlers:function(){var e=this;this.on("datesRendered.baseHandler",function(){e.onBaseRender()}),this.on("before:datesUnrendered.baseHandler",function(){e.onBeforeBaseUnrender()})},unbindBaseRenderHandlers:function(){this.off(".baseHandler")},onBaseRender:function(){this.applyScreenState(),this.publiclyTrigger("viewRender",this,this,this.el)},onBeforeBaseUnrender:function(){this.applyScreenState(),this.publiclyTrigger("viewDestroy",this,this,this.el)},bindGlobalHandlers:function(){this.listenTo(yt.get(),{touchstart:this.processUnselect,mousedown:this.handleDocumentMousedown})},unbindGlobalHandlers:function(){this.stopListeningTo(yt.get())},initThemingProps:function(){var e=this.opt("theme")?"ui":"fc";this.widgetHeaderClass=e+"-widget-header",this.widgetContentClass=e+"-widget-content",this.highlightStateClass=e+"-state-highlight"},renderBusinessHours:function(){},unrenderBusinessHours:function(){},startNowIndicator:function(){var e,n,i,r=this;this.opt("nowIndicator")&&(e=this.getNowIndicatorUnit(),e&&(n=ve(this,"updateNowIndicator"),this.initialNowDate=this.calendar.getNow(),this.initialNowQueriedMs=+new Date,this.renderNowIndicator(this.initialNowDate),this.isNowIndicatorRendered=!0,i=this.initialNowDate.clone().startOf(e).add(1,e)-this.initialNowDate,this.nowIndicatorTimeoutID=setTimeout(function(){r.nowIndicatorTimeoutID=null,n(),i=+t.duration(1,e),i=Math.max(100,i),r.nowIndicatorIntervalID=setInterval(n,i)},i)))},updateNowIndicator:function(){this.isNowIndicatorRendered&&(this.unrenderNowIndicator(),this.renderNowIndicator(this.initialNowDate.clone().add(new Date-this.initialNowQueriedMs)))},stopNowIndicator:function(){this.isNowIndicatorRendered&&(this.nowIndicatorTimeoutID&&(clearTimeout(this.nowIndicatorTimeoutID),this.nowIndicatorTimeoutID=null),this.nowIndicatorIntervalID&&(clearTimeout(this.nowIndicatorIntervalID),this.nowIndicatorIntervalID=null),this.unrenderNowIndicator(),this.isNowIndicatorRendered=!1)},getNowIndicatorUnit:function(){},renderNowIndicator:function(e){},unrenderNowIndicator:function(){},updateSize:function(e){var t;e&&(t=this.queryScroll()),this.updateHeight(e),this.updateWidth(e),this.updateNowIndicator(),e&&this.applyScroll(t)},updateWidth:function(e){},updateHeight:function(e){var t=this.calendar;this.setHeight(t.getSuggestedViewHeight(),t.isHeightAuto())},setHeight:function(e,t){},addForcedScroll:function(t){this.addScroll(e.extend(t,{isForced:!0}))},addScroll:function(t){var n=this.queuedScroll||(this.queuedScroll={});n.isForced||e.extend(n,t)},popScroll:function(){this.applyQueuedScroll(),this.queuedScroll=null},applyQueuedScroll:function(){this.queuedScroll&&this.applyScroll(this.queuedScroll)},queryScroll:function(){var t={};return this.isDatesRendered&&e.extend(t,this.queryDateScroll()),t},applyScroll:function(e){this.isDatesRendered&&this.applyDateScroll(e)},computeInitialDateScroll:function(){return{}},queryDateScroll:function(){return{}},applyDateScroll:function(e){},freezeHeight:function(){this.calendar.freezeContentHeight()},thawHeight:function(){this.calendar.thawContentHeight()},executeEventsRender:function(e){this.renderEvents(e),this.isEventsRendered=!0,this.onEventsRender()},executeEventsUnrender:function(){this.onBeforeEventsUnrender(),this.destroyEvents&&this.destroyEvents(),this.unrenderEvents(),this.isEventsRendered=!1},onEventsRender:function(){this.applyScreenState(),this.renderedEventSegEach(function(e){this.publiclyTrigger("eventAfterRender",e.event,e.event,e.el)}),this.publiclyTrigger("eventAfterAllRender")},onBeforeEventsUnrender:function(){this.applyScreenState(),this.renderedEventSegEach(function(e){this.publiclyTrigger("eventDestroy",e.event,e.event,e.el)})},applyScreenState:function(){this.thawHeight(),this.freezeHeight(),this.applyQueuedScroll()},renderEvents:function(e){},unrenderEvents:function(){},resolveEventEl:function(t,n){var i=this.publiclyTrigger("eventRender",t,t,n);return i===!1?n=null:i&&i!==!0&&(n=e(i)),n},showEvent:function(e){this.renderedEventSegEach(function(e){e.el.css("visibility","")},e)},hideEvent:function(e){this.renderedEventSegEach(function(e){e.el.css("visibility","hidden")},e)},renderedEventSegEach:function(e,t){var n,i=this.getEventSegs();for(n=0;n<i.length;n++)t&&i[n].event._id!==t._id||i[n].el&&e.call(this,i[n])},getEventSegs:function(){return[]},isEventDraggable:function(e){return this.isEventStartEditable(e)},isEventStartEditable:function(e){return ce(e.startEditable,(e.source||{}).startEditable,this.opt("eventStartEditable"),this.isEventGenerallyEditable(e))},isEventGenerallyEditable:function(e){return ce(e.editable,(e.source||{}).editable,this.opt("editable"))},reportSegDrop:function(e,t,n,i,r){var o=this.calendar,a=o.mutateSeg(e,t,n),s=function(){a.undo(),o.reportEventChange()};this.triggerEventDrop(e.event,a.dateDelta,s,i,r),o.reportEventChange()},triggerEventDrop:function(e,t,n,i,r){this.publiclyTrigger("eventDrop",i[0],e,t,n,r,{})},reportExternalDrop:function(t,n,i,r,o){var a,s,l=t.eventProps;l&&(a=e.extend({},l,n),s=this.calendar.renderEvent(a,t.stick)[0]),this.triggerExternalDrop(s,n,i,r,o)},triggerExternalDrop:function(e,t,n,i,r){this.publiclyTrigger("drop",n[0],t.start,i,r),e&&this.publiclyTrigger("eventReceive",null,e)},renderDrag:function(e,t){},unrenderDrag:function(){},isEventResizableFromStart:function(e){return this.opt("eventResizableFromStart")&&this.isEventResizable(e)},isEventResizableFromEnd:function(e){return this.isEventResizable(e)},isEventResizable:function(e){var t=e.source||{};return ce(e.durationEditable,t.durationEditable,this.opt("eventDurationEditable"),e.editable,t.editable,this.opt("editable"))},reportSegResize:function(e,t,n,i,r){var o=this.calendar,a=o.mutateSeg(e,t,n),s=function(){a.undo(),o.reportEventChange()};this.triggerEventResize(e.event,a.durationDelta,s,i,r),o.reportEventChange()},triggerEventResize:function(e,t,n,i,r){this.publiclyTrigger("eventResize",i[0],e,t,n,r,{})},select:function(e,t){this.unselect(t),this.renderSelection(e),this.reportSelection(e,t)},renderSelection:function(e){},reportSelection:function(e,t){this.isSelected=!0,this.triggerSelect(e,t)},triggerSelect:function(e,t){this.publiclyTrigger("select",null,this.calendar.applyTimezone(e.start),this.calendar.applyTimezone(e.end),t)},unselect:function(e){this.isSelected&&(this.isSelected=!1,this.destroySelection&&this.destroySelection(),this.unrenderSelection(),this.publiclyTrigger("unselect",null,e))},unrenderSelection:function(){},selectEvent:function(e){this.selectedEvent&&this.selectedEvent===e||(this.unselectEvent(),this.renderedEventSegEach(function(e){e.el.addClass("fc-selected")},e),this.selectedEvent=e)},unselectEvent:function(){this.selectedEvent&&(this.renderedEventSegEach(function(e){e.el.removeClass("fc-selected")},this.selectedEvent),this.selectedEvent=null)},isEventSelected:function(e){return this.selectedEvent&&this.selectedEvent._id===e._id},handleDocumentMousedown:function(e){w(e)&&this.processUnselect(e)},processUnselect:function(e){this.processRangeUnselect(e),this.processEventUnselect(e)},processRangeUnselect:function(t){var n;this.isSelected&&this.opt("unselectAuto")&&(n=this.opt("unselectCancel"),n&&e(t.target).closest(n).length||this.unselect(t))},processEventUnselect:function(t){this.selectedEvent&&(e(t.target).closest(".fc-selected").length||this.unselectEvent())},triggerDayClick:function(e,t,n){this.publiclyTrigger("dayClick",t,this.calendar.applyTimezone(e.start),n)},computeDayRange:function(e){var t,n=e.start.clone().stripTime(),i=e.end,r=null;return i&&(r=i.clone().stripTime(),t=+i.time(),t&&t>=this.nextDayThreshold&&r.add(1,"days")),(!i||r<=n)&&(r=n.clone().add(1,"days")),{start:n,end:r}},isMultiDayEvent:function(e){var t=this.computeDayRange(e);return t.end.diff(t.start,"days")>1}});Tt.watch("displayingDates",["dateProfile"],function(e){this.requestDateRender(e.dateProfile)},function(){this.requestDateUnrender()}),Tt.watch("initialEvents",["dateProfile"],function(e){return this.fetchInitialEvents(e.dateProfile)}),Tt.watch("bindingEvents",["initialEvents"],function(e){this.setEvents(e.initialEvents),this.bindEventChanges()},function(){this.unbindEventChanges(),this.unsetEvents()}),Tt.watch("displayingEvents",["displayingDates","hasEvents"],function(){this.requestEventsRender(this.get("currentEvents"))},function(){this.requestEventsUnrender()}),Tt.mixin({currentRange:null,currentRangeUnit:null,renderRange:null,activeRange:null,validRange:null,dateIncrement:null,minTime:null,maxTime:null,usesMinMaxTime:!1,start:null,end:null,intervalStart:null,intervalEnd:null,setDateProfileForRendering:function(e){this.currentRange=e.currentRange,this.currentRangeUnit=e.currentRangeUnit,this.renderRange=e.renderRange,this.activeRange=e.activeRange,this.validRange=e.validRange,this.dateIncrement=e.dateIncrement,this.minTime=e.minTime,this.maxTime=e.maxTime,this.start=e.activeRange.start,this.end=e.activeRange.end,this.intervalStart=e.currentRange.start,this.intervalEnd=e.currentRange.end},buildPrevDateProfile:function(e){var t=e.clone().startOf(this.currentRangeUnit).subtract(this.dateIncrement);return this.buildDateProfile(t,-1)},buildNextDateProfile:function(e){var t=e.clone().startOf(this.currentRangeUnit).add(this.dateIncrement);return this.buildDateProfile(t,1)},buildDateProfile:function(e,n,i){var r,o,a,s,l=this.buildValidRange(),c=null,u=null;return i&&(e=U(e,l)),r=this.buildCurrentRangeInfo(e,n),o=this.buildRenderRange(r.range,r.unit),a=q(o),this.opt("showNonCurrentDates")||(a=V(a,r.range)),c=t.duration(this.opt("minTime")),u=t.duration(this.opt("maxTime")),this.adjustActiveRange(a,c,u),a=V(a,l),e=U(e,a),s=X(r.range,l),{validRange:l,currentRange:r.range,currentRangeUnit:r.unit,activeRange:a,renderRange:o,minTime:c,maxTime:u,isValid:s,date:e,dateIncrement:this.buildDateIncrement(r.duration)}},buildValidRange:function(){return this.getRangeOption("validRange",this.calendar.getNow())||{}},buildCurrentRangeInfo:function(e,t){var n,i=null,r=null,o=null;return this.viewSpec.duration?(i=this.viewSpec.duration,r=this.viewSpec.durationUnit,o=this.buildRangeFromDuration(e,t,i,r)):(n=this.opt("dayCount"))?(r="day",o=this.buildRangeFromDayCount(e,t,n)):(o=this.buildCustomVisibleRange(e))?r=N(o.start,o.end):(i=this.getFallbackDuration(),r=N(i),o=this.buildRangeFromDuration(e,t,i,r)),this.normalizeCurrentRange(o,r),{duration:i,unit:r,range:o}},getFallbackDuration:function(){return t.duration({days:1})},normalizeCurrentRange:function(e,t){/^(year|month|week|day)$/.test(t)?(e.start.stripTime(),e.end.stripTime()):(e.start.hasTime()||e.start.time(0),e.end.hasTime()||e.end.time(0))},adjustActiveRange:function(e,t,n){var i=!1;this.usesMinMaxTime&&(t<0&&(e.start.time(0).add(t),i=!0),n>864e5&&(e.end.time(n-864e5),i=!0),i&&(e.start.hasTime()||e.start.time(0),e.end.hasTime()||e.end.time(0)))},buildRangeFromDuration:function(e,n,i,r){var o,a,s,l=this.opt("dateAlignment"),c=e.clone();return i.as("days")<=1&&this.isHiddenDay(c)&&(c=this.skipHiddenDays(c,n),c.startOf("day")),l||(a=this.opt("dateIncrement"),a?(s=t.duration(a),l=s<i?F(s,a):r):l=r),c.startOf(l),o=c.clone().add(i),{start:c,end:o}},buildRangeFromDayCount:function(e,t,n){var i,r=this.opt("dateAlignment"),o=0,a=e.clone();r&&a.startOf(r),a.startOf("day"),a=this.skipHiddenDays(a,t),i=a.clone();do i.add(1,"day"),this.isHiddenDay(i)||o++;while(o<n);return{start:a,end:i}},buildCustomVisibleRange:function(e){var t=this.getRangeOption("visibleRange",this.calendar.moment(e));return!t||t.start&&t.end?t:null},buildRenderRange:function(e,t){return this.trimHiddenDays(e)},buildDateIncrement:function(e){var n,i=this.opt("dateIncrement");return i?t.duration(i):(n=this.opt("dateAlignment"))?t.duration(1,n):e?e:t.duration({days:1})},trimHiddenDays:function(e){return{start:this.skipHiddenDays(e.start),end:this.skipHiddenDays(e.end,-1,!0)}},currentRangeAs:function(e){var t=this.currentRange;return t.end.diff(t.start,e,!0)},getRangeOption:function(e){var t=this.opt(e);if("function"==typeof t&&(t=t.apply(null,Array.prototype.slice.call(arguments,1))),t)return this.calendar.parseRange(t)},initHiddenDays:function(){var t,n=this.opt("hiddenDays")||[],i=[],r=0;for(this.opt("weekends")===!1&&n.push(0,6),t=0;t<7;t++)(i[t]=e.inArray(t,n)!==-1)||r++;if(!r)throw"invalid hiddenDays";this.isHiddenDayHash=i},isHiddenDay:function(e){return t.isMoment(e)&&(e=e.day()),this.isHiddenDayHash[e]},skipHiddenDays:function(e,t,n){var i=e.clone();for(t=t||1;this.isHiddenDayHash[(i.day()+(n?t:0)+7)%7];)i.add(t,"days");return i}});var Dt=Ze.Scroller=ke.extend({el:null,scrollEl:null,overflowX:null,overflowY:null,constructor:function(e){e=e||{},this.overflowX=e.overflowX||e.overflow||"auto",this.overflowY=e.overflowY||e.overflow||"auto"},render:function(){this.el=this.renderEl(),this.applyOverflow()},renderEl:function(){return this.scrollEl=e('<div class="fc-scroller"></div>')},clear:function(){this.setHeight("auto"),this.applyOverflow()},destroy:function(){this.el.remove()},applyOverflow:function(){this.scrollEl.css({"overflow-x":this.overflowX,"overflow-y":this.overflowY})},lockOverflow:function(e){var t=this.overflowX,n=this.overflowY;e=e||this.getScrollbarWidths(),"auto"===t&&(t=e.top||e.bottom||this.scrollEl[0].scrollWidth-1>this.scrollEl[0].clientWidth?"scroll":"hidden"),"auto"===n&&(n=e.left||e.right||this.scrollEl[0].scrollHeight-1>this.scrollEl[0].clientHeight?"scroll":"hidden"),this.scrollEl.css({"overflow-x":t,"overflow-y":n})},setHeight:function(e){this.scrollEl.height(e)},getScrollTop:function(){return this.scrollEl.scrollTop()},setScrollTop:function(e){this.scrollEl.scrollTop(e)},getClientWidth:function(){return this.scrollEl[0].clientWidth},getClientHeight:function(){return this.scrollEl[0].clientHeight},getScrollbarWidths:function(){return g(this.scrollEl)}});Ge.prototype.proxyCall=function(e){var t=Array.prototype.slice.call(arguments,1),n=[];return this.items.forEach(function(i){n.push(i[e].apply(i,t))}),n};var Et=Ze.Calendar=ke.extend(ft,{view:null,viewsByType:null,currentDate:null,loadingLevel:0,constructor:function(e,t){yt.needed(),this.el=e,this.viewsByType={},this.viewSpecCache={},this.initOptionsInternals(t),this.initMomentInternals(),this.initCurrentDate(),Ve.call(this),this.initialize()},initialize:function(){},getCalendar:function(){return this},getView:function(){return this.view},publiclyTrigger:function(e,t){var n=Array.prototype.slice.call(arguments,2),i=this.opt(e);if(t=t||this.el[0],this.triggerWith(e,t,n),i)return i.apply(t,n)},instantiateView:function(e){var t=this.getViewSpec(e);return new t.class(this,t)},isValidViewType:function(e){return Boolean(this.getViewSpec(e))},changeView:function(e,t){t&&(t.start&&t.end?this.recordOptionOverrides({visibleRange:t}):this.currentDate=this.moment(t).stripZone()),this.renderView(e)},zoomTo:function(e,t){var n;t=t||"day",n=this.getViewSpec(t)||this.getUnitViewSpec(t),this.currentDate=e.clone(),this.renderView(n?n.type:null)},initCurrentDate:function(){var e=this.opt("defaultDate");null!=e?this.currentDate=this.moment(e).stripZone():this.currentDate=this.getNow()},prev:function(){var e=this.view.buildPrevDateProfile(this.currentDate);e.isValid&&(this.currentDate=e.date,this.renderView())},next:function(){var e=this.view.buildNextDateProfile(this.currentDate);e.isValid&&(this.currentDate=e.date,this.renderView())},prevYear:function(){this.currentDate.add(-1,"years"),this.renderView()},nextYear:function(){this.currentDate.add(1,"years"),this.renderView()},today:function(){this.currentDate=this.getNow(),this.renderView()},gotoDate:function(e){this.currentDate=this.moment(e).stripZone(),this.renderView()},incrementDate:function(e){this.currentDate.add(t.duration(e)),this.renderView()},getDate:function(){return this.applyTimezone(this.currentDate)},pushLoading:function(){this.loadingLevel++||this.publiclyTrigger("loading",null,!0,this.view)},popLoading:function(){--this.loadingLevel||this.publiclyTrigger("loading",null,!1,this.view)},select:function(e,t){this.view.select(this.buildSelectSpan.apply(this,arguments))},unselect:function(){this.view&&this.view.unselect()},buildSelectSpan:function(e,t){var n,i=this.moment(e).stripZone();return n=t?this.moment(t).stripZone():i.hasTime()?i.clone().add(this.defaultTimedEventDuration):i.clone().add(this.defaultAllDayEventDuration),{start:i,end:n}},parseRange:function(e){var t=null,n=null;return e.start&&(t=this.moment(e.start).stripZone()),e.end&&(n=this.moment(e.end).stripZone()),t||n?t&&n&&n.isBefore(t)?null:{start:t,end:n}:null},rerenderEvents:function(){this.elementVisible()&&this.reportEventChange()}});Et.mixin({dirDefaults:null,localeDefaults:null,overrides:null,dynamicOverrides:null,optionsModel:null,initOptionsInternals:function(t){this.overrides=e.extend({},t),this.dynamicOverrides={},this.optionsModel=new ct,this.populateOptionsHash()},option:function(e,t){var n;if("string"==typeof e){if(void 0===t)return this.optionsModel.get(e);n={},n[e]=t,this.setOptions(n)}else"object"==typeof e&&this.setOptions(e)},opt:function(e){return this.optionsModel.get(e)},setOptions:function(e){var t,n=0;this.recordOptionOverrides(e);for(t in e)n++;if(1===n){if("height"===t||"contentHeight"===t||"aspectRatio"===t)return void this.updateSize(!0);if("defaultDate"===t)return;if("businessHours"===t)return void(this.view&&(this.view.unrenderBusinessHours(),this.view.renderBusinessHours()));if("timezone"===t)return this.rezoneArrayEventSources(),void this.refetchEvents()}this.renderHeader(),this.renderFooter(),this.viewsByType={},this.reinitView()},populateOptionsHash:function(){var e,t,i,r,o;e=ce(this.dynamicOverrides.locale,this.overrides.locale),t=_t[e],t||(e=Et.defaults.locale,t=_t[e]||{}),i=ce(this.dynamicOverrides.isRTL,this.overrides.isRTL,t.isRTL,Et.defaults.isRTL),r=i?Et.rtlDefaults:{},this.dirDefaults=r,this.localeDefaults=t,o=n([Et.defaults,r,t,this.overrides,this.dynamicOverrides]),We(o),this.optionsModel.reset(o)},recordOptionOverrides:function(e){var t;for(t in e)this.dynamicOverrides[t]=e[t];this.viewSpecCache={},this.populateOptionsHash()}}),Et.mixin({defaultAllDayEventDuration:null,defaultTimedEventDuration:null,localeData:null,initMomentInternals:function(){var e=this;this.defaultAllDayEventDuration=t.duration(this.opt("defaultAllDayEventDuration")),this.defaultTimedEventDuration=t.duration(this.opt("defaultTimedEventDuration")),this.optionsModel.watch("buildingMomentLocale",["?locale","?monthNames","?monthNamesShort","?dayNames","?dayNamesShort","?firstDay","?weekNumberCalculation"],function(t){var n,i=t.weekNumberCalculation,r=t.firstDay;"iso"===i&&(i="ISO");var o=re(qe(t.locale));t.monthNames&&(o._months=t.monthNames),t.monthNamesShort&&(o._monthsShort=t.monthNamesShort),t.dayNames&&(o._weekdays=t.dayNames),t.dayNamesShort&&(o._weekdaysShort=t.dayNamesShort),null==r&&"ISO"===i&&(r=1),null!=r&&(n=re(o._week),n.dow=r,o._week=n),"ISO"!==i&&"local"!==i&&"function"!=typeof i||(o._fullCalendar_weekCalc=i),e.localeData=o,e.currentDate&&e.localizeMoment(e.currentDate)})},moment:function(){var e;return"local"===this.opt("timezone")?(e=Ze.moment.apply(null,arguments),e.hasTime()&&e.local()):e="UTC"===this.opt("timezone")?Ze.moment.utc.apply(null,arguments):Ze.moment.parseZone.apply(null,arguments),this.localizeMoment(e),e},localizeMoment:function(e){e._locale=this.localeData},getIsAmbigTimezone:function(){return"local"!==this.opt("timezone")&&"UTC"!==this.opt("timezone")},applyTimezone:function(e){if(!e.hasTime())return e.clone();var t,n=this.moment(e.toArray()),i=e.time()-n.time();return i&&(t=n.clone().add(i),e.time()-t.time()===0&&(n=t)),n},getNow:function(){var e=this.opt("now");return"function"==typeof e&&(e=e()),this.moment(e).stripZone()},humanizeDuration:function(e){return e.locale(this.opt("locale")).humanize()},getEventEnd:function(e){return e.end?e.end.clone():this.getDefaultEventEnd(e.allDay,e.start)},getDefaultEventEnd:function(e,t){var n=t.clone();return e?n.stripTime().add(this.defaultAllDayEventDuration):n.add(this.defaultTimedEventDuration),this.getIsAmbigTimezone()&&n.stripZone(),n}}),Et.mixin({viewSpecCache:null,getViewSpec:function(e){var t=this.viewSpecCache;return t[e]||(t[e]=this.buildViewSpec(e))},getUnitViewSpec:function(t){var n,i,r;if(e.inArray(t,Qe)!=-1)for(n=this.header.getViewsWithButtons(),e.each(Ze.views,function(e){n.push(e)}),i=0;i<n.length;i++)if(r=this.getViewSpec(n[i]),r&&r.singleUnit==t)return r},buildViewSpec:function(e){for(var i,r,o,a,s,l=this.overrides.views||{},c=[],u=[],d=[],h=e;h;)i=Xe[h],r=l[h],h=null,"function"==typeof i&&(i={class:i}),i&&(c.unshift(i),u.unshift(i.defaults||{}),o=o||i.duration,h=h||i.type),r&&(d.unshift(r),o=o||r.duration,h=h||r.type);return i=ie(c),i.type=e,!!i.class&&(o=o||this.dynamicOverrides.duration||this.overrides.duration,o&&(a=t.duration(o),a.valueOf()&&(s=F(a,o),i.duration=a,i.durationUnit=s,1===a.as(s)&&(i.singleUnit=s,d.unshift(l[s]||{})))),i.defaults=n(u),i.overrides=n(d),this.buildViewSpecOptions(i),this.buildViewSpecButtonText(i,e),i)},buildViewSpecOptions:function(e){e.options=n([Et.defaults,e.defaults,this.dirDefaults,this.localeDefaults,this.overrides,e.overrides,this.dynamicOverrides]),We(e.options)},buildViewSpecButtonText:function(e,t){function n(n){var i=n.buttonText||{};return i[t]||(e.buttonTextKey?i[e.buttonTextKey]:null)||(e.singleUnit?i[e.singleUnit]:null)}e.buttonTextOverride=n(this.dynamicOverrides)||n(this.overrides)||e.overrides.buttonText,e.buttonTextDefault=n(this.localeDefaults)||n(this.dirDefaults)||e.defaults.buttonText||n(Et.defaults)||(e.duration?this.humanizeDuration(e.duration):null)||t}}),Et.mixin({el:null,contentEl:null,suggestedViewHeight:null,windowResizeProxy:null,ignoreWindowResize:0,render:function(){this.contentEl?this.elementVisible()&&(this.calcSize(),this.renderView()):this.initialRender()},initialRender:function(){var t=this,n=this.el;n.addClass("fc"),n.on("click.fc","a[data-goto]",function(n){var i=e(this),r=i.data("goto"),o=t.moment(r.date),a=r.type,s=t.view.opt("navLink"+pe(a)+"Click");"function"==typeof s?s(o,n):("string"==typeof s&&(a=s),t.zoomTo(o,a))}),this.optionsModel.watch("applyingThemeClasses",["?theme"],function(e){n.toggleClass("ui-widget",e.theme),n.toggleClass("fc-unthemed",!e.theme)}),this.optionsModel.watch("applyingDirClasses",["?isRTL","?locale"],function(e){n.toggleClass("fc-ltr",!e.isRTL),n.toggleClass("fc-rtl",e.isRTL)}),this.contentEl=e("<div class='fc-view-container'/>").prependTo(n),this.initToolbars(),this.renderHeader(),this.renderFooter(),this.renderView(this.opt("defaultView")),this.opt("handleWindowResize")&&e(window).resize(this.windowResizeProxy=be(this.windowResize.bind(this),this.opt("windowResizeDelay")))},destroy:function(){this.view&&this.view.removeElement(),this.toolbarsManager.proxyCall("removeElement"),this.contentEl.remove(),this.el.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"),this.el.off(".fc"),this.windowResizeProxy&&(e(window).unbind("resize",this.windowResizeProxy),this.windowResizeProxy=null),yt.unneeded()},elementVisible:function(){return this.el.is(":visible")},renderView:function(t,n){this.ignoreWindowResize++;var i=this.view&&t&&this.view.type!==t;i&&(this.freezeContentHeight(),this.clearView()),!this.view&&t&&(this.view=this.viewsByType[t]||(this.viewsByType[t]=this.instantiateView(t)),this.view.setElement(e("<div class='fc-view fc-"+t+"-view' />").appendTo(this.contentEl)),this.toolbarsManager.proxyCall("activateButton",t)),this.view&&(n&&this.view.addForcedScroll(n),this.elementVisible()&&(this.currentDate=this.view.setDate(this.currentDate))),i&&this.thawContentHeight(),this.ignoreWindowResize--},clearView:function(){this.toolbarsManager.proxyCall("deactivateButton",this.view.type),this.view.removeElement(),this.view=null},reinitView:function(){this.ignoreWindowResize++,this.freezeContentHeight();var e=this.view.type,t=this.view.queryScroll();this.clearView(),this.calcSize(),this.renderView(e,t),this.thawContentHeight(),this.ignoreWindowResize--},getSuggestedViewHeight:function(){return null===this.suggestedViewHeight&&this.calcSize(),this.suggestedViewHeight},isHeightAuto:function(){return"auto"===this.opt("contentHeight")||"auto"===this.opt("height")},updateSize:function(e){if(this.elementVisible())return e&&this._calcSize(),this.ignoreWindowResize++,this.view.updateSize(!0),this.ignoreWindowResize--,!0},calcSize:function(){this.elementVisible()&&this._calcSize()},_calcSize:function(){var e=this.opt("contentHeight"),t=this.opt("height");"number"==typeof e?this.suggestedViewHeight=e:"function"==typeof e?this.suggestedViewHeight=e():"number"==typeof t?this.suggestedViewHeight=t-this.queryToolbarsHeight():"function"==typeof t?this.suggestedViewHeight=t()-this.queryToolbarsHeight():"parent"===t?this.suggestedViewHeight=this.el.parent().height()-this.queryToolbarsHeight():this.suggestedViewHeight=Math.round(this.contentEl.width()/Math.max(this.opt("aspectRatio"),.5))},windowResize:function(e){!this.ignoreWindowResize&&e.target===window&&this.view.renderRange&&this.updateSize(!0)&&this.view.publiclyTrigger("windowResize",this.el[0])},freezeContentHeight:function(){this.contentEl.css({width:"100%",height:this.contentEl.height(),overflow:"hidden"})},thawContentHeight:function(){this.contentEl.css({width:"",height:"",overflow:""})}}),Et.mixin({header:null,footer:null,toolbarsManager:null,initToolbars:function(){this.header=new Ye(this,this.computeHeaderOptions()),this.footer=new Ye(this,this.computeFooterOptions()),this.toolbarsManager=new Ge([this.header,this.footer])},computeHeaderOptions:function(){return{extraClasses:"fc-header-toolbar",layout:this.opt("header")}},computeFooterOptions:function(){return{extraClasses:"fc-footer-toolbar",layout:this.opt("footer")}},renderHeader:function(){var e=this.header;e.setToolbarOptions(this.computeHeaderOptions()),e.render(),e.el&&this.el.prepend(e.el)},renderFooter:function(){var e=this.footer;e.setToolbarOptions(this.computeFooterOptions()),e.render(),e.el&&this.el.append(e.el)},setToolbarsTitle:function(e){this.toolbarsManager.proxyCall("updateTitle",e)},updateToolbarButtons:function(){var e=this.getNow(),t=this.view,n=t.buildDateProfile(e),i=t.buildPrevDateProfile(this.currentDate),r=t.buildNextDateProfile(this.currentDate);this.toolbarsManager.proxyCall(n.isValid&&!Z(e,t.currentRange)?"enableButton":"disableButton","today"),this.toolbarsManager.proxyCall(i.isValid?"enableButton":"disableButton","prev"),this.toolbarsManager.proxyCall(r.isValid?"enableButton":"disableButton","next")},queryToolbarsHeight:function(){return this.toolbarsManager.items.reduce(function(e,t){var n=t.el?t.el.outerHeight(!0):0;return e+n},0)}}),Et.defaults={titleRangeSeparator:" – ",monthYearFormat:"MMMM YYYY",defaultTimedEventDuration:"02:00:00",defaultAllDayEventDuration:{days:1},forceEventDuration:!1,nextDayThreshold:"09:00:00",defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberTitle:"W",weekNumberCalculation:"local",scrollTime:"06:00:00",minTime:"00:00:00",maxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timezoneParam:"timezone",timezone:!1,isRTL:!1,buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day"},buttonIcons:{prev:"left-single-arrow",next:"right-single-arrow",prevYear:"left-double-arrow",nextYear:"right-double-arrow"},allDayText:"all-day",theme:!1,themeButtonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e",prevYear:"seek-prev",nextYear:"seek-next"},dragOpacity:.75,dragRevertDuration:500,dragScroll:!0,unselectAuto:!0,dropAccept:"*",eventOrder:"title",eventLimit:!1,eventLimitText:"more",eventLimitClick:"popover",dayPopoverFormat:"LL",handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3},Et.englishDefaults={dayPopoverFormat:"dddd, MMMM D"},Et.rtlDefaults={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"right-single-arrow",next:"left-single-arrow",prevYear:"right-double-arrow",nextYear:"left-double-arrow"},themeButtonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w",nextYear:"seek-prev",prevYear:"seek-next"}};var _t=Ze.locales={};Ze.datepickerLocale=function(t,n,i){var r=_t[t]||(_t[t]={});r.isRTL=i.isRTL,r.weekNumberTitle=i.weekHeader,e.each(Ct,function(e,t){r[e]=t(i)}),e.datepicker&&(e.datepicker.regional[n]=e.datepicker.regional[t]=i,e.datepicker.regional.en=e.datepicker.regional[""],e.datepicker.setDefaults(i))},Ze.locale=function(t,i){var r,o;r=_t[t]||(_t[t]={}),i&&(r=_t[t]=n([r,i])),o=qe(t),e.each(Mt,function(e,t){null==r[e]&&(r[e]=t(o,r))}),Et.defaults.locale=t};var Ct={buttonText:function(e){return{prev:de(e.prevText),next:de(e.nextText),today:de(e.currentText)}},monthYearFormat:function(e){return e.showMonthAfterYear?"YYYY["+e.yearSuffix+"] MMMM":"MMMM YYYY["+e.yearSuffix+"]"}},Mt={dayOfMonthFormat:function(e,t){var n=e.longDateFormat("l");return n=n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g,""),t.isRTL?n+=" ddd":n="ddd "+n,n},mediumTimeFormat:function(e){return e.longDateFormat("LT").replace(/\s*a$/i,"a")},smallTimeFormat:function(e){return e.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"a")},extraSmallTimeFormat:function(e){return e.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"t")},hourFormat:function(e){return e.longDateFormat("LT").replace(":mm","").replace(/(\Wmm)$/,"").replace(/\s*a$/i,"a")},noMeridiemTimeFormat:function(e){return e.longDateFormat("LT").replace(/\s*a$/i,"")}},zt={smallDayDateFormat:function(e){return e.isRTL?"D dd":"dd D"},weekFormat:function(e){return e.isRTL?"w[ "+e.weekNumberTitle+"]":"["+e.weekNumberTitle+" ]w"},smallWeekFormat:function(e){return e.isRTL?"w["+e.weekNumberTitle+"]":"["+e.weekNumberTitle+"]w"}};Ze.locale("en",Et.englishDefaults),Ze.sourceNormalizers=[],Ze.sourceFetchers=[];var Rt={dataType:"json",cache:!1},Ht=1;Et.prototype.mutateSeg=function(e,t){return this.mutateEvent(e.event,t)},Et.prototype.normalizeEvent=function(e){},Et.prototype.spanContainsSpan=function(e,t){
var n=e.start.clone().stripZone(),i=this.getEventEnd(e).stripZone();return t.start>=n&&t.end<=i},Et.prototype.getPeerEvents=function(e,t){var n,i,r=this.getEventCache(),o=[];for(n=0;n<r.length;n++)i=r[n],t&&t._id===i._id||o.push(i);return o},Et.prototype.isEventSpanAllowed=function(e,t){var n=t.source||{},i=this.opt("eventAllow"),r=ce(t.constraint,n.constraint,this.opt("eventConstraint")),o=ce(t.overlap,n.overlap,this.opt("eventOverlap"));return this.isSpanAllowed(e,r,o,t)&&(!i||i(e,t)!==!1)},Et.prototype.isExternalSpanAllowed=function(t,n,i){var r,o;return i&&(r=e.extend({},i,n),o=this.expandEvent(this.buildEventFromInput(r))[0]),o?this.isEventSpanAllowed(t,o):this.isSelectionSpanAllowed(t)},Et.prototype.isSelectionSpanAllowed=function(e){var t=this.opt("selectAllow");return this.isSpanAllowed(e,this.opt("selectConstraint"),this.opt("selectOverlap"))&&(!t||t(e)!==!1)},Et.prototype.isSpanAllowed=function(e,t,n,i){var r,o,a,s,l,c;if(null!=t&&(r=this.constraintToEvents(t))){for(o=!1,s=0;s<r.length;s++)if(this.spanContainsSpan(r[s],e)){o=!0;break}if(!o)return!1}for(a=this.getPeerEvents(e,i),s=0;s<a.length;s++)if(l=a[s],this.eventIntersectsRange(l,e)){if(n===!1)return!1;if("function"==typeof n&&!n(l,i))return!1;if(i){if(c=ce(l.overlap,(l.source||{}).overlap),c===!1)return!1;if("function"==typeof c&&!c(i,l))return!1}}return!0},Et.prototype.constraintToEvents=function(e){return"businessHours"===e?this.getCurrentBusinessHourEvents():"object"==typeof e?null!=e.start?this.expandEvent(this.buildEventFromInput(e)):null:this.clientEvents(e)},Et.prototype.eventIntersectsRange=function(e,t){var n=e.start.clone().stripZone(),i=this.getEventEnd(e).stripZone();return t.start<i&&t.end>n};var Lt={id:"_fcBusinessHours",start:"09:00",end:"17:00",dow:[1,2,3,4,5],rendering:"inverse-background"};Et.prototype.getCurrentBusinessHourEvents=function(e){return this.computeBusinessHourEvents(e,this.opt("businessHours"))},Et.prototype.computeBusinessHourEvents=function(t,n){return n===!0?this.expandBusinessHourEvents(t,[{}]):e.isPlainObject(n)?this.expandBusinessHourEvents(t,[n]):e.isArray(n)?this.expandBusinessHourEvents(t,n,!0):[]},Et.prototype.expandBusinessHourEvents=function(t,n,i){var r,o,a=this.getView(),s=[];for(r=0;r<n.length;r++)o=n[r],i&&!o.dow||(o=e.extend({},Lt,o),t&&(o.start=null,o.end=null),s.push.apply(s,this.expandEvent(this.buildEventFromInput(o),a.activeRange.start,a.activeRange.end)));return s};var Pt=Ze.BasicView=Tt.extend({scroller:null,dayGridClass:At,dayGrid:null,dayNumbersVisible:!1,colWeekNumbersVisible:!1,cellWeekNumbersVisible:!1,weekNumberWidth:null,headContainerEl:null,headRowEl:null,initialize:function(){this.dayGrid=this.instantiateDayGrid(),this.scroller=new Dt({overflowX:"hidden",overflowY:"auto"})},instantiateDayGrid:function(){var e=this.dayGridClass.extend(jt);return new e(this)},buildRenderRange:function(e,t){var n=Tt.prototype.buildRenderRange.apply(this,arguments);return/^(year|month)$/.test(t)&&(n.start.startOf("week"),n.end.weekday()&&n.end.add(1,"week").startOf("week")),this.trimHiddenDays(n)},renderDates:function(){this.dayGrid.breakOnWeeks=/year|month|week/.test(this.currentRangeUnit),this.dayGrid.setRange(this.renderRange),this.dayNumbersVisible=this.dayGrid.rowCnt>1,this.opt("weekNumbers")&&(this.opt("weekNumbersWithinDays")?(this.cellWeekNumbersVisible=!0,this.colWeekNumbersVisible=!1):(this.cellWeekNumbersVisible=!1,this.colWeekNumbersVisible=!0)),this.dayGrid.numbersVisible=this.dayNumbersVisible||this.cellWeekNumbersVisible||this.colWeekNumbersVisible,this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()),this.renderHead(),this.scroller.render();var t=this.scroller.el.addClass("fc-day-grid-container"),n=e('<div class="fc-day-grid" />').appendTo(t);this.el.find(".fc-body > tr > td").append(t),this.dayGrid.setElement(n),this.dayGrid.renderDates(this.hasRigidRows())},renderHead:function(){this.headContainerEl=this.el.find(".fc-head-container").html(this.dayGrid.renderHeadHtml()),this.headRowEl=this.headContainerEl.find(".fc-row")},unrenderDates:function(){this.dayGrid.unrenderDates(),this.dayGrid.removeElement(),this.scroller.destroy()},renderBusinessHours:function(){this.dayGrid.renderBusinessHours()},unrenderBusinessHours:function(){this.dayGrid.unrenderBusinessHours()},renderSkeletonHtml:function(){return'<table><thead class="fc-head"><tr><td class="fc-head-container '+this.widgetHeaderClass+'"></td></tr></thead><tbody class="fc-body"><tr><td class="'+this.widgetContentClass+'"></td></tr></tbody></table>'},weekNumberStyleAttr:function(){return null!==this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},hasRigidRows:function(){var e=this.opt("eventLimit");return e&&"number"!=typeof e},updateWidth:function(){this.colWeekNumbersVisible&&(this.weekNumberWidth=c(this.el.find(".fc-week-number")))},setHeight:function(e,t){var n,o,a=this.opt("eventLimit");this.scroller.clear(),r(this.headRowEl),this.dayGrid.removeSegPopover(),a&&"number"==typeof a&&this.dayGrid.limitRows(a),n=this.computeScrollerHeight(e),this.setGridHeight(n,t),a&&"number"!=typeof a&&this.dayGrid.limitRows(a),t||(this.scroller.setHeight(n),o=this.scroller.getScrollbarWidths(),(o.left||o.right)&&(i(this.headRowEl,o),n=this.computeScrollerHeight(e),this.scroller.setHeight(n)),this.scroller.lockOverflow(o))},computeScrollerHeight:function(e){return e-u(this.el,this.scroller.el)},setGridHeight:function(e,t){t?l(this.dayGrid.rowEls):s(this.dayGrid.rowEls,e,!0)},computeInitialDateScroll:function(){return{top:0}},queryDateScroll:function(){return{top:this.scroller.getScrollTop()}},applyDateScroll:function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},hitsNeeded:function(){this.dayGrid.hitsNeeded()},hitsNotNeeded:function(){this.dayGrid.hitsNotNeeded()},prepareHits:function(){this.dayGrid.prepareHits()},releaseHits:function(){this.dayGrid.releaseHits()},queryHit:function(e,t){return this.dayGrid.queryHit(e,t)},getHitSpan:function(e){return this.dayGrid.getHitSpan(e)},getHitEl:function(e){return this.dayGrid.getHitEl(e)},renderEvents:function(e){this.dayGrid.renderEvents(e),this.updateHeight()},getEventSegs:function(){return this.dayGrid.getEventSegs()},unrenderEvents:function(){this.dayGrid.unrenderEvents()},renderDrag:function(e,t){return this.dayGrid.renderDrag(e,t)},unrenderDrag:function(){this.dayGrid.unrenderDrag()},renderSelection:function(e){this.dayGrid.renderSelection(e)},unrenderSelection:function(){this.dayGrid.unrenderSelection()}}),jt={renderHeadIntroHtml:function(){var e=this.view;return e.colWeekNumbersVisible?'<th class="fc-week-number '+e.widgetHeaderClass+'" '+e.weekNumberStyleAttr()+"><span>"+ue(e.opt("weekNumberTitle"))+"</span></th>":""},renderNumberIntroHtml:function(e){var t=this.view,n=this.getCellDate(e,0);return t.colWeekNumbersVisible?'<td class="fc-week-number" '+t.weekNumberStyleAttr()+">"+t.buildGotoAnchorHtml({date:n,type:"week",forceOff:1===this.colCnt},n.format("w"))+"</td>":""},renderBgIntroHtml:function(){var e=this.view;return e.colWeekNumbersVisible?'<td class="fc-week-number '+e.widgetContentClass+'" '+e.weekNumberStyleAttr()+"></td>":""},renderIntroHtml:function(){var e=this.view;return e.colWeekNumbersVisible?'<td class="fc-week-number" '+e.weekNumberStyleAttr()+"></td>":""}},Ot=Ze.MonthView=Pt.extend({buildRenderRange:function(){var e,t=Pt.prototype.buildRenderRange.apply(this,arguments);return this.isFixedWeeks()&&(e=Math.ceil(t.end.diff(t.start,"weeks",!0)),t.end.add(6-e,"weeks")),t},setGridHeight:function(e,t){t&&(e*=this.rowCnt/6),s(this.dayGrid.rowEls,e,!t)},isFixedWeeks:function(){return this.opt("fixedWeekCount")}});Xe.basic={class:Pt},Xe.basicDay={type:"basic",duration:{days:1}},Xe.basicWeek={type:"basic",duration:{weeks:1}},Xe.month={class:Ot,duration:{months:1},defaults:{fixedWeekCount:!0}};var It=Ze.AgendaView=Tt.extend({scroller:null,timeGridClass:xt,timeGrid:null,dayGridClass:At,dayGrid:null,axisWidth:null,headContainerEl:null,noScrollRowEls:null,bottomRuleEl:null,usesMinMaxTime:!0,initialize:function(){this.timeGrid=this.instantiateTimeGrid(),this.opt("allDaySlot")&&(this.dayGrid=this.instantiateDayGrid()),this.scroller=new Dt({overflowX:"hidden",overflowY:"auto"})},instantiateTimeGrid:function(){var e=this.timeGridClass.extend(Nt);return new e(this)},instantiateDayGrid:function(){var e=this.dayGridClass.extend(Ft);return new e(this)},renderDates:function(){this.timeGrid.setRange(this.renderRange),this.dayGrid&&this.dayGrid.setRange(this.renderRange),this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()),this.renderHead(),this.scroller.render();var t=this.scroller.el.addClass("fc-time-grid-container"),n=e('<div class="fc-time-grid" />').appendTo(t);this.el.find(".fc-body > tr > td").append(t),this.timeGrid.setElement(n),this.timeGrid.renderDates(),this.bottomRuleEl=e('<hr class="fc-divider '+this.widgetHeaderClass+'"/>').appendTo(this.timeGrid.el),this.dayGrid&&(this.dayGrid.setElement(this.el.find(".fc-day-grid")),this.dayGrid.renderDates(),this.dayGrid.bottomCoordPadding=this.dayGrid.el.next("hr").outerHeight()),this.noScrollRowEls=this.el.find(".fc-row:not(.fc-scroller *)")},renderHead:function(){this.headContainerEl=this.el.find(".fc-head-container").html(this.timeGrid.renderHeadHtml())},unrenderDates:function(){this.timeGrid.unrenderDates(),this.timeGrid.removeElement(),this.dayGrid&&(this.dayGrid.unrenderDates(),this.dayGrid.removeElement()),this.scroller.destroy()},renderSkeletonHtml:function(){return'<table><thead class="fc-head"><tr><td class="fc-head-container '+this.widgetHeaderClass+'"></td></tr></thead><tbody class="fc-body"><tr><td class="'+this.widgetContentClass+'">'+(this.dayGrid?'<div class="fc-day-grid"/><hr class="fc-divider '+this.widgetHeaderClass+'"/>':"")+"</td></tr></tbody></table>"},axisStyleAttr:function(){return null!==this.axisWidth?'style="width:'+this.axisWidth+'px"':""},renderBusinessHours:function(){this.timeGrid.renderBusinessHours(),this.dayGrid&&this.dayGrid.renderBusinessHours()},unrenderBusinessHours:function(){this.timeGrid.unrenderBusinessHours(),this.dayGrid&&this.dayGrid.unrenderBusinessHours()},getNowIndicatorUnit:function(){return this.timeGrid.getNowIndicatorUnit()},renderNowIndicator:function(e){this.timeGrid.renderNowIndicator(e)},unrenderNowIndicator:function(){this.timeGrid.unrenderNowIndicator()},updateSize:function(e){this.timeGrid.updateSize(e),Tt.prototype.updateSize.call(this,e)},updateWidth:function(){this.axisWidth=c(this.el.find(".fc-axis"))},setHeight:function(e,t){var n,o,a;this.bottomRuleEl.hide(),this.scroller.clear(),r(this.noScrollRowEls),this.dayGrid&&(this.dayGrid.removeSegPopover(),n=this.opt("eventLimit"),n&&"number"!=typeof n&&(n=Bt),n&&this.dayGrid.limitRows(n)),t||(o=this.computeScrollerHeight(e),this.scroller.setHeight(o),a=this.scroller.getScrollbarWidths(),(a.left||a.right)&&(i(this.noScrollRowEls,a),o=this.computeScrollerHeight(e),this.scroller.setHeight(o)),this.scroller.lockOverflow(a),this.timeGrid.getTotalSlatHeight()<o&&this.bottomRuleEl.show())},computeScrollerHeight:function(e){return e-u(this.el,this.scroller.el)},computeInitialDateScroll:function(){var e=t.duration(this.opt("scrollTime")),n=this.timeGrid.computeTimeTop(e);return n=Math.ceil(n),n&&n++,{top:n}},queryDateScroll:function(){return{top:this.scroller.getScrollTop()}},applyDateScroll:function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},hitsNeeded:function(){this.timeGrid.hitsNeeded(),this.dayGrid&&this.dayGrid.hitsNeeded()},hitsNotNeeded:function(){this.timeGrid.hitsNotNeeded(),this.dayGrid&&this.dayGrid.hitsNotNeeded()},prepareHits:function(){this.timeGrid.prepareHits(),this.dayGrid&&this.dayGrid.prepareHits()},releaseHits:function(){this.timeGrid.releaseHits(),this.dayGrid&&this.dayGrid.releaseHits()},queryHit:function(e,t){var n=this.timeGrid.queryHit(e,t);return!n&&this.dayGrid&&(n=this.dayGrid.queryHit(e,t)),n},getHitSpan:function(e){return e.component.getHitSpan(e)},getHitEl:function(e){return e.component.getHitEl(e)},renderEvents:function(e){var t,n,i=[],r=[],o=[];for(n=0;n<e.length;n++)e[n].allDay?i.push(e[n]):r.push(e[n]);t=this.timeGrid.renderEvents(r),this.dayGrid&&(o=this.dayGrid.renderEvents(i)),this.updateHeight()},getEventSegs:function(){return this.timeGrid.getEventSegs().concat(this.dayGrid?this.dayGrid.getEventSegs():[])},unrenderEvents:function(){this.timeGrid.unrenderEvents(),this.dayGrid&&this.dayGrid.unrenderEvents()},renderDrag:function(e,t){return e.start.hasTime()?this.timeGrid.renderDrag(e,t):this.dayGrid?this.dayGrid.renderDrag(e,t):void 0},unrenderDrag:function(){this.timeGrid.unrenderDrag(),this.dayGrid&&this.dayGrid.unrenderDrag()},renderSelection:function(e){e.start.hasTime()||e.end.hasTime()?this.timeGrid.renderSelection(e):this.dayGrid&&this.dayGrid.renderSelection(e)},unrenderSelection:function(){this.timeGrid.unrenderSelection(),this.dayGrid&&this.dayGrid.unrenderSelection()}}),Nt={renderHeadIntroHtml:function(){var e,t=this.view;return t.opt("weekNumbers")?(e=this.start.format(t.opt("smallWeekFormat")),'<th class="fc-axis fc-week-number '+t.widgetHeaderClass+'" '+t.axisStyleAttr()+">"+t.buildGotoAnchorHtml({date:this.start,type:"week",forceOff:this.colCnt>1},ue(e))+"</th>"):'<th class="fc-axis '+t.widgetHeaderClass+'" '+t.axisStyleAttr()+"></th>"},renderBgIntroHtml:function(){var e=this.view;return'<td class="fc-axis '+e.widgetContentClass+'" '+e.axisStyleAttr()+"></td>"},renderIntroHtml:function(){var e=this.view;return'<td class="fc-axis" '+e.axisStyleAttr()+"></td>"}},Ft={renderBgIntroHtml:function(){var e=this.view;return'<td class="fc-axis '+e.widgetContentClass+'" '+e.axisStyleAttr()+"><span>"+e.getAllDayHtml()+"</span></td>"},renderIntroHtml:function(){var e=this.view;return'<td class="fc-axis" '+e.axisStyleAttr()+"></td>"}},Bt=5,Gt=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}];Xe.agenda={class:It,defaults:{allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0}},Xe.agendaDay={type:"agenda",duration:{days:1}},Xe.agendaWeek={type:"agenda",duration:{weeks:1}};var Yt=Tt.extend({grid:null,scroller:null,initialize:function(){this.grid=new Wt(this),this.scroller=new Dt({overflowX:"hidden",overflowY:"auto"})},renderSkeleton:function(){this.el.addClass("fc-list-view "+this.widgetContentClass),this.scroller.render(),this.scroller.el.appendTo(this.el),this.grid.setElement(this.scroller.scrollEl)},unrenderSkeleton:function(){this.scroller.destroy()},setHeight:function(e,t){this.scroller.setHeight(this.computeScrollerHeight(e))},computeScrollerHeight:function(e){return e-u(this.el,this.scroller.el)},renderDates:function(){this.grid.setRange(this.renderRange)},renderEvents:function(e){this.grid.renderEvents(e)},unrenderEvents:function(){this.grid.unrenderEvents()},isEventResizable:function(e){return!1},isEventDraggable:function(e){return!1}}),Wt=kt.extend({segSelector:".fc-list-item",hasDayInteractions:!1,spanToSegs:function(e){for(var t,n=this.view,i=n.renderRange.start.clone().time(0),r=0,o=[];i<n.renderRange.end;)if(t=P(e,{start:i,end:i.clone().add(1,"day")}),t&&(t.dayIndex=r,o.push(t)),i.add(1,"day"),r++,t&&!t.isEnd&&e.end.hasTime()&&e.end<i.clone().add(this.view.nextDayThreshold)){t.end=e.end.clone(),t.isEnd=!0;break}return o},computeEventTimeFormat:function(){return this.view.opt("mediumTimeFormat")},handleSegClick:function(t,n){var i;kt.prototype.handleSegClick.apply(this,arguments),e(n.target).closest("a[href]").length||(i=t.event.url,i&&!n.isDefaultPrevented()&&(window.location.href=i))},renderFgSegs:function(e){return e=this.renderFgSegEls(e),e.length?this.renderSegList(e):this.renderEmptyMessage(),e},renderEmptyMessage:function(){this.el.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">'+ue(this.view.opt("noEventsMessage"))+"</div></div></div>")},renderSegList:function(t){var n,i,r,o=this.groupSegsByDay(t),a=e('<table class="fc-list-table"><tbody/></table>'),s=a.find("tbody");for(n=0;n<o.length;n++)if(i=o[n])for(s.append(this.dayHeaderHtml(this.view.renderRange.start.clone().add(n,"days"))),this.sortEventSegs(i),r=0;r<i.length;r++)s.append(i[r].el);this.el.empty().append(a)},groupSegsByDay:function(e){var t,n,i=[];for(t=0;t<e.length;t++)n=e[t],(i[n.dayIndex]||(i[n.dayIndex]=[])).push(n);return i},dayHeaderHtml:function(e){var t=this.view,n=t.opt("listDayFormat"),i=t.opt("listDayAltFormat");return'<tr class="fc-list-heading" data-date="'+e.format("YYYY-MM-DD")+'"><td class="'+t.widgetHeaderClass+'" colspan="3">'+(n?t.buildGotoAnchorHtml(e,{class:"fc-list-heading-main"},ue(e.format(n))):"")+(i?t.buildGotoAnchorHtml(e,{class:"fc-list-heading-alt"},ue(e.format(i))):"")+"</td></tr>"},fgSegHtml:function(e){var t,n=this.view,i=["fc-list-item"].concat(this.getSegCustomClasses(e)),r=this.getSegBackgroundColor(e),o=e.event,a=o.url;return t=o.allDay?n.getAllDayHtml():n.isMultiDayEvent(o)?e.isStart||e.isEnd?ue(this.getEventTimeText(e)):n.getAllDayHtml():ue(this.getEventTimeText(o)),a&&i.push("fc-has-url"),'<tr class="'+i.join(" ")+'">'+(this.displayEventTime?'<td class="fc-list-item-time '+n.widgetContentClass+'">'+(t||"")+"</td>":"")+'<td class="fc-list-item-marker '+n.widgetContentClass+'"><span class="fc-event-dot"'+(r?' style="background-color:'+r+'"':"")+'></span></td><td class="fc-list-item-title '+n.widgetContentClass+'"><a'+(a?' href="'+ue(a)+'"':"")+">"+ue(e.event.title||"")+"</a></td></tr>"}});return Xe.list={class:Yt,buttonTextKey:"list",defaults:{buttonText:"list",listDayFormat:"LL",noEventsMessage:"No events to display"}},Xe.listDay={type:"list",duration:{days:1},defaults:{listDayFormat:"dddd"}},Xe.listWeek={type:"list",duration:{weeks:1},defaults:{listDayFormat:"dddd",listDayAltFormat:"LL"}},Xe.listMonth={type:"list",duration:{month:1},defaults:{listDayAltFormat:"dddd"}},Xe.listYear={type:"list",duration:{year:1},defaults:{listDayAltFormat:"dddd"}},Ze})},function(e,t,n){!function(e){function t(e){"}"===e.n.substr(e.n.length-1)&&(e.n=e.n.substring(0,e.n.length-1))}function n(e){return e.trim?e.trim():e.replace(/^\s*|\s*$/g,"")}function i(e,t,n){if(t.charAt(n)!=e.charAt(0))return!1;for(var i=1,r=e.length;i<r;i++)if(t.charAt(n+i)!=e.charAt(i))return!1;return!0}function r(t,n,i,s){var l=[],c=null,u=null,d=null;for(u=i[i.length-1];t.length>0;){if(d=t.shift(),u&&"<"==u.tag&&!(d.tag in k))throw new Error("Illegal content in < super tag.");if(e.tags[d.tag]<=e.tags.$||o(d,s))i.push(d),d.nodes=r(t,d.tag,i,s);else{if("/"==d.tag){if(0===i.length)throw new Error("Closing tag without opener: /"+d.n);if(c=i.pop(),d.n!=c.n&&!a(d.n,c.n,s))throw new Error("Nesting error: "+c.n+" vs. "+d.n);return c.end=d.i,l}"\n"==d.tag&&(d.last=0==t.length||"\n"==t[0].tag)}l.push(d)}if(i.length>0)throw new Error("missing closing tag: "+i.pop().n);return l}function o(e,t){for(var n=0,i=t.length;n<i;n++)if(t[n].o==e.n)return e.tag="#",!0}function a(e,t,n){for(var i=0,r=n.length;i<r;i++)if(n[i].c==e&&n[i].o==t)return!0}function s(e){var t=[];for(var n in e)t.push('"'+c(n)+'": function(c,p,t,i) {'+e[n]+"}");return"{ "+t.join(",")+" }"}function l(e){var t=[];for(var n in e.partials)t.push('"'+c(n)+'":{name:"'+c(e.partials[n].name)+'", '+l(e.partials[n])+"}");return"partials: {"+t.join(",")+"}, subs: "+s(e.subs)}function c(e){return e.replace(b,"\\\\").replace(g,'\\"').replace(m,"\\n").replace(v,"\\r").replace(y,"\\u2028").replace(w,"\\u2029")}function u(e){return~e.indexOf(".")?"d":"f"}function d(e,t){var n="<"+(t.prefix||""),i=n+e.n+S++;return t.partials[i]={name:e.n,partials:{}},t.code+='t.b(t.rp("'+c(i)+'",c,p,"'+(e.indent||"")+'"));',i}function h(e,t){t.code+="t.b(t.t(t."+u(e.n)+'("'+c(e.n)+'",c,p,0)));'}function f(e){return"t.b("+e+");"}var p=/\S/,g=/\"/g,m=/\n/g,v=/\r/g,b=/\\/g,y=/\u2028/,w=/\u2029/;e.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},e.scan=function(r,o){function a(){b.length>0&&(y.push({tag:"_t",text:new String(b)}),b="")}function s(){for(var t=!0,n=S;n<y.length;n++)if(t=e.tags[y[n].tag]<e.tags._v||"_t"==y[n].tag&&null===y[n].text.match(p),!t)return!1;return t}function l(e,t){if(a(),e&&s())for(var n,i=S;i<y.length;i++)y[i].text&&((n=y[i+1])&&">"==n.tag&&(n.indent=y[i].text.toString()),y.splice(i,1));else t||y.push({tag:"\n"});w=!1,S=y.length}function c(e,t){var i="="+x,r=e.indexOf(i,t),o=n(e.substring(e.indexOf("=",t)+1,r)).split(" ");return A=o[0],x=o[o.length-1],r+i.length-1}var u=r.length,d=0,h=1,f=2,g=d,m=null,v=null,b="",y=[],w=!1,k=0,S=0,A="{{",x="}}";for(o&&(o=o.split(" "),A=o[0],x=o[1]),k=0;k<u;k++)g==d?i(A,r,k)?(--k,a(),g=h):"\n"==r.charAt(k)?l(w):b+=r.charAt(k):g==h?(k+=A.length-1,v=e.tags[r.charAt(k+1)],m=v?r.charAt(k+1):"_v","="==m?(k=c(r,k),g=d):(v&&k++,g=f),w=k):i(x,r,k)?(y.push({tag:m,n:n(b),otag:A,ctag:x,i:"/"==m?w-A.length:k+x.length}),b="",k+=x.length-1,g=d,"{"==m&&("}}"==x?k++:t(y[y.length-1]))):b+=r.charAt(k);return l(w,!0),y};var k={_t:!0,"\n":!0,$:!0,"/":!0};e.stringify=function(t,n,i){return"{code: function (c,p,i) { "+e.wrapMain(t.code)+" },"+l(t)+"}"};var S=0;e.generate=function(t,n,i){S=0;var r={code:"",subs:{},partials:{}};return e.walk(t,r),i.asString?this.stringify(r,n,i):this.makeTemplate(r,n,i)},e.wrapMain=function(e){return'var t=this;t.b(i=i||"");'+e+"return t.fl();"},e.template=e.Template,e.makeTemplate=function(e,t,n){var i=this.makePartials(e);return i.code=new Function("c","p","i",this.wrapMain(e.code)),new this.template(i,t,this,n)},e.makePartials=function(e){var t,n={subs:{},partials:e.partials,name:e.name};for(t in n.partials)n.partials[t]=this.makePartials(n.partials[t]);for(t in e.subs)n.subs[t]=new Function("c","p","t","i",e.subs[t]);return n},e.codegen={"#":function(t,n){n.code+="if(t.s(t."+u(t.n)+'("'+c(t.n)+'",c,p,1),c,p,0,'+t.i+","+t.end+',"'+t.otag+" "+t.ctag+'")){t.rs(c,p,function(c,p,t){',e.walk(t.nodes,n),n.code+="});c.pop();}"},"^":function(t,n){n.code+="if(!t.s(t."+u(t.n)+'("'+c(t.n)+'",c,p,1),c,p,1,0,0,"")){',e.walk(t.nodes,n),n.code+="};"},">":d,"<":function(t,n){var i={partials:{},code:"",subs:{},inPartial:!0};e.walk(t.nodes,i);var r=n.partials[d(t,n)];r.subs=i.subs,r.partials=i.partials},$:function(t,n){var i={subs:{},code:"",partials:n.partials,prefix:t.n};e.walk(t.nodes,i),n.subs[t.n]=i.code,n.inPartial||(n.code+='t.sub("'+c(t.n)+'",c,p,i);')},"\n":function(e,t){t.code+=f('"\\n"'+(e.last?"":" + i"))},_v:function(e,t){t.code+="t.b(t.v(t."+u(e.n)+'("'+c(e.n)+'",c,p,0)));'},_t:function(e,t){t.code+=f('"'+c(e.text)+'"')},"{":h,"&":h},e.walk=function(t,n){for(var i,r=0,o=t.length;r<o;r++)i=e.codegen[t[r].tag],i&&i(t[r],n);return n},e.parse=function(e,t,n){return n=n||{},r(e,"",[],n.sectionTags||[])},e.cache={},e.cacheKey=function(e,t){return[e,!!t.asString,!!t.disableLambda,t.delimiters,!!t.modelGet].join("||")},e.compile=function(t,n){n=n||{};var i=e.cacheKey(t,n),r=this.cache[i];if(r){var o=r.partials;for(var a in o)delete o[a].instance;return r}return r=this.generate(this.parse(this.scan(t,n.delimiters),t,n),t,n),this.cache[i]=r}}(t)},function(e,t,n){!function(e){function t(e,t,n){var i;return t&&"object"==typeof t&&(void 0!==t[e]?i=t[e]:n&&t.get&&"function"==typeof t.get&&(i=t.get(e))),i}function n(e,t,n,i,r,o){function a(){}function s(){}a.prototype=e,s.prototype=e.subs;var l,c=new a;c.subs=new s,c.subsText={},c.buf="",i=i||{},c.stackSubs=i,c.subsText=o;for(l in t)i[l]||(i[l]=t[l]);for(l in i)c.subs[l]=i[l];r=r||{},c.stackPartials=r;for(l in n)r[l]||(r[l]=n[l]);for(l in r)c.partials[l]=r[l];return c}function i(e){return String(null===e||void 0===e?"":e)}function r(e){return e=i(e),u.test(e)?e.replace(o,"&amp;").replace(a,"&lt;").replace(s,"&gt;").replace(l,"&#39;").replace(c,"&quot;"):e}e.Template=function(e,t,n,i){e=e||{},this.r=e.code||this.r,this.c=n,this.options=i||{},this.text=t||"",this.partials=e.partials||{},this.subs=e.subs||{},this.buf=""},e.Template.prototype={r:function(e,t,n){return""},v:r,t:i,render:function(e,t,n){return this.ri([e],t||{},n)},ri:function(e,t,n){return this.r(e,t,n)},ep:function(e,t){var i=this.partials[e],r=t[i.name];if(i.instance&&i.base==r)return i.instance;if("string"==typeof r){if(!this.c)throw new Error("No compiler available.");r=this.c.compile(r,this.options)}if(!r)return null;if(this.partials[e].base=r,i.subs){t.stackText||(t.stackText={});for(key in i.subs)t.stackText[key]||(t.stackText[key]=void 0!==this.activeSub&&t.stackText[this.activeSub]?t.stackText[this.activeSub]:this.text);r=n(r,i.subs,i.partials,this.stackSubs,this.stackPartials,t.stackText)}return this.partials[e].instance=r,r},rp:function(e,t,n,i){var r=this.ep(e,n);return r?r.ri(t,n,i):""},rs:function(e,t,n){var i=e[e.length-1];if(!d(i))return void n(e,t,this);for(var r=0;r<i.length;r++)e.push(i[r]),n(e,t,this),e.pop()},s:function(e,t,n,i,r,o,a){var s;return(!d(e)||0!==e.length)&&("function"==typeof e&&(e=this.ms(e,t,n,i,r,o,a)),s=!!e,!i&&s&&t&&t.push("object"==typeof e?e:t[t.length-1]),s)},d:function(e,n,i,r){var o,a=e.split("."),s=this.f(a[0],n,i,r),l=this.options.modelGet,c=null;if("."===e&&d(n[n.length-2]))s=n[n.length-1];else for(var u=1;u<a.length;u++)o=t(a[u],s,l),void 0!==o?(c=s,s=o):s="";return!(r&&!s)&&(r||"function"!=typeof s||(n.push(c),s=this.mv(s,n,i),n.pop()),s)},f:function(e,n,i,r){for(var o=!1,a=null,s=!1,l=this.options.modelGet,c=n.length-1;c>=0;c--)if(a=n[c],o=t(e,a,l),void 0!==o){s=!0;break}return s?(r||"function"!=typeof o||(o=this.mv(o,n,i)),o):!r&&""},ls:function(e,t,n,r,o){var a=this.options.delimiters;return this.options.delimiters=o,this.b(this.ct(i(e.call(t,r)),t,n)),this.options.delimiters=a,!1},ct:function(e,t,n){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(e,this.options).render(t,n)},b:function(e){this.buf+=e},fl:function(){var e=this.buf;return this.buf="",e},ms:function(e,t,n,i,r,o,a){var s,l=t[t.length-1],c=e.call(l);return"function"==typeof c?!!i||(s=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(c,l,n,s.substring(r,o),a)):c},mv:function(e,t,n){var r=t[t.length-1],o=e.call(r);return"function"==typeof o?this.ct(i(o.call(r)),r,n):o},sub:function(e,t,n,i){var r=this.subs[e];r&&(this.activeSub=e,r(t,n,this,i),this.activeSub=!1)}};var o=/&/g,a=/</g,s=/>/g,l=/\'/g,c=/\"/g,u=/[&<>\"\']/,d=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}}(t)},function(e,t,n){var i,r;!function(o){var a=function(e,t,n,i){if(!h(t)||p(t)||g(t)||m(t))return t;var r,o=0,s=0;if(f(t))for(r=[],s=t.length;o<s;o++)r.push(a(e,t[o],n,i));else{r={};for(var l in t)t.hasOwnProperty(l)&&(r[e(l,n,i)]=a(e,t[l],n,i))}return r},s=function(e,t,n){"undefined"==typeof t&&(t="_");var i=/([a-z])([A-Z0-9])/g;return n&&(i=/([a-z])([A-Z])/g),e.replace(i,"$1"+t+"$2")},l=function(e){return v(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))},c=function(e){var t=l(e);return t.substr(0,1).toUpperCase()+t.substr(1)},u=function(e,t,n){return s(e,t,n).toLowerCase()},d=Object.prototype.toString,h=function(e){return e===Object(e)},f=function(e){return"[object Array]"==d.call(e)},p=function(e){return"[object Date]"==d.call(e)},g=function(e){return"[object RegExp]"==d.call(e)},m=function(e){return"[object Boolean]"==d.call(e)},v=function(e){return e-=0,e===e},b={camelize:l,decamelize:u,pascalize:c,depascalize:u,camelizeKeys:function(e){return a(l,e)},decamelizeKeys:function(e,t,n){return a(u,e,t,n)},pascalizeKeys:function(e){return a(c,e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};i=b,r="function"==typeof i?i.call(t,n,t,e):i,!(void 0!==r&&(e.exports=r))}(this)},function(e,t,n){var i,r,o;//! moment-timezone.js
//! version : 0.5.13
//! Copyright (c) JS Foundation and other contributors
//! license : MIT
//! github.com/moment/moment-timezone
!function(a,s){"use strict";r=[n(5)],i=s,o="function"==typeof i?i.apply(t,r):i,!(void 0!==o&&(e.exports=o))}(this,function(e){"use strict";function t(e){return e>96?e-87:e>64?e-29:e-48}function n(e){var n,i=0,r=e.split("."),o=r[0],a=r[1]||"",s=1,l=0,c=1;for(45===e.charCodeAt(0)&&(i=1,c=-1),i;i<o.length;i++)n=t(o.charCodeAt(i)),l=60*l+n;for(i=0;i<a.length;i++)s/=60,n=t(a.charCodeAt(i)),l+=n*s;return l*c}function i(e){for(var t=0;t<e.length;t++)e[t]=n(e[t])}function r(e,t){for(var n=0;n<t;n++)e[n]=Math.round((e[n-1]||0)+6e4*e[n]);e[t-1]=1/0}function o(e,t){var n,i=[];for(n=0;n<t.length;n++)i[n]=e[t[n]];return i}function a(e){var t=e.split("|"),n=t[2].split(" "),a=t[3].split(""),s=t[4].split(" ");return i(n),i(a),i(s),r(s,a.length),{name:t[0],abbrs:o(t[1].split(" "),a),offsets:o(n,a),untils:s,population:0|t[5]}}function s(e){e&&this._set(a(e))}function l(e){var t=e.toTimeString(),n=t.match(/\([a-z ]+\)/i);n&&n[0]?(n=n[0].match(/[A-Z]/g),n=n?n.join(""):void 0):(n=t.match(/[A-Z]{3,5}/g),n=n?n[0]:void 0),"GMT"===n&&(n=void 0),this.at=+e,this.abbr=n,this.offset=e.getTimezoneOffset()}function c(e){this.zone=e,this.offsetScore=0,this.abbrScore=0}function u(e,t){for(var n,i;i=6e4*((t.at-e.at)/12e4|0);)n=new l(new Date(e.at+i)),n.offset===e.offset?e=n:t=n;return e}function d(){var e,t,n,i=(new Date).getFullYear()-2,r=new l(new Date(i,0,1)),o=[r];for(n=1;n<48;n++)t=new l(new Date(i,n,1)),t.offset!==r.offset&&(e=u(r,t),o.push(e),o.push(new l(new Date(e.at+6e4)))),r=t;for(n=0;n<4;n++)o.push(new l(new Date(i+n,0,1))),o.push(new l(new Date(i+n,6,1)));return o}function h(e,t){return e.offsetScore!==t.offsetScore?e.offsetScore-t.offsetScore:e.abbrScore!==t.abbrScore?e.abbrScore-t.abbrScore:t.zone.population-e.zone.population}function f(e,t){var n,r;for(i(t),n=0;n<t.length;n++)r=t[n],L[r]=L[r]||{},L[r][e]=!0}function p(e){var t,n,i,r=e.length,o={},a=[];for(t=0;t<r;t++){i=L[e[t].offset]||{};for(n in i)i.hasOwnProperty(n)&&(o[n]=!0)}for(t in o)o.hasOwnProperty(t)&&a.push(H[t]);return a}function g(){try{var e=Intl.DateTimeFormat().resolvedOptions().timeZone;if(e){var t=H[v(e)];if(t)return t;T("Moment Timezone found "+e+" from the Intl api, but did not have that data loaded.")}}catch(e){}var n,i,r,o=d(),a=o.length,s=p(o),l=[];for(i=0;i<s.length;i++){for(n=new c(y(s[i]),a),r=0;r<a;r++)n.scoreOffsetAt(o[r]);l.push(n)}return l.sort(h),l.length>0?l[0].zone.name:void 0}function m(e){return C&&!e||(C=g()),C}function v(e){return(e||"").toLowerCase().replace(/\//g,"_")}function b(e){var t,n,i,r;for("string"==typeof e&&(e=[e]),t=0;t<e.length;t++)i=e[t].split("|"),n=i[0],r=v(n),z[r]=e[t],H[r]=n,i[5]&&f(r,i[2].split(" "))}function y(e,t){e=v(e);var n,i=z[e];return i instanceof s?i:"string"==typeof i?(i=new s(i),z[e]=i,i):R[e]&&t!==y&&(n=y(R[e],y))?(i=z[e]=new s,i._set(n),i.name=H[e],i):null}function w(){var e,t=[];for(e in H)H.hasOwnProperty(e)&&(z[e]||z[R[e]])&&H[e]&&t.push(H[e]);return t.sort()}function k(e){var t,n,i,r;for("string"==typeof e&&(e=[e]),t=0;t<e.length;t++)n=e[t].split("|"),i=v(n[0]),r=v(n[1]),R[i]=r,H[i]=n[0],R[r]=i,H[r]=n[1]}function S(e){b(e.zones),k(e.links),D.dataVersion=e.version}function A(e){return A.didShowError||(A.didShowError=!0,T("moment.tz.zoneExists('"+e+"') has been deprecated in favor of !moment.tz.zone('"+e+"')")),!!y(e)}function x(e){return!(!e._a||void 0!==e._tzm)}function T(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e)}function D(t){var n=Array.prototype.slice.call(arguments,0,-1),i=arguments[arguments.length-1],r=y(i),o=e.utc.apply(null,n);return r&&!e.isMoment(t)&&x(o)&&o.add(r.parse(o),"minutes"),o.tz(i),o}function E(e){return function(){return this._z?this._z.abbr(this):e.call(this)}}function _(e){return function(){return this._z=null,e.apply(this,arguments)}}var C,M="0.5.13",z={},R={},H={},L={},P=e.version.split("."),j=+P[0],O=+P[1];(j<2||2===j&&O<6)&&T("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+e.version+". See momentjs.com"),s.prototype={_set:function(e){this.name=e.name,this.abbrs=e.abbrs,this.untils=e.untils,this.offsets=e.offsets,this.population=e.population},_index:function(e){var t,n=+e,i=this.untils;for(t=0;t<i.length;t++)if(n<i[t])return t},parse:function(e){var t,n,i,r,o=+e,a=this.offsets,s=this.untils,l=s.length-1;for(r=0;r<l;r++)if(t=a[r],n=a[r+1],i=a[r?r-1:r],t<n&&D.moveAmbiguousForward?t=n:t>i&&D.moveInvalidForward&&(t=i),o<s[r]-6e4*t)return a[r];return a[l]},abbr:function(e){return this.abbrs[this._index(e)]},offset:function(e){return this.offsets[this._index(e)]}},c.prototype.scoreOffsetAt=function(e){this.offsetScore+=Math.abs(this.zone.offset(e.at)-e.offset),this.zone.abbr(e.at).replace(/[^A-Z]/g,"")!==e.abbr&&this.abbrScore++},D.version=M,D.dataVersion="",D._zones=z,D._links=R,D._names=H,D.add=b,D.link=k,D.load=S,D.zone=y,D.zoneExists=A,D.guess=m,D.names=w,D.Zone=s,D.unpack=a,D.unpackBase60=n,D.needsOffset=x,D.moveInvalidForward=!0,D.moveAmbiguousForward=!1;var I=e.fn;e.tz=D,e.defaultZone=null,e.updateOffset=function(t,n){var i,r=e.defaultZone;void 0===t._z&&(r&&x(t)&&!t._isUTC&&(t._d=e.utc(t._a)._d,t.utc().add(r.parse(t),"minutes")),t._z=r),t._z&&(i=t._z.offset(t),Math.abs(i)<16&&(i/=60),void 0!==t.utcOffset?t.utcOffset(-i,n):t.zone(i,n))},I.tz=function(t){return t?(this._z=y(t),this._z?e.updateOffset(this):T("Moment Timezone has no data for "+t+". See http://momentjs.com/timezone/docs/#/data-loading/."),this):this._z?this._z.name:void 0},I.zoneName=E(I.zoneName),I.zoneAbbr=E(I.zoneAbbr),I.utc=_(I.utc),e.tz.setDefault=function(t){return(j<2||2===j&&O<9)&&T("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+e.version+"."),e.defaultZone=t?y(t):null,e};var N=e.momentProperties;return"[object Array]"===Object.prototype.toString.call(N)?(N.push("_z"),N.push("_a")):N&&(N._z=null),S({version:"2017b",zones:["Africa/Abidjan|GMT|0|0||48e5","Africa/Khartoum|EAT|-30|0||51e5","Africa/Algiers|CET|-10|0||26e5","Africa/Lagos|WAT|-10|0||17e6","Africa/Maputo|CAT|-20|0||26e5","Africa/Cairo|EET EEST|-20 -30|01010|1M2m0 gL0 e10 mn0|15e6","Africa/Casablanca|WET WEST|0 -10|0101010101010101010101010101010101010101010|1H3C0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00|32e5","Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|11e6","Africa/Johannesburg|SAST|-20|0||84e5","Africa/Tripoli|EET CET CEST|-20 -10 -20|0120|1IlA0 TA0 1o00|11e5","Africa/Windhoek|WAST WAT|-20 -10|01010101010101010101010|1GQo0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0|32e4","America/Adak|HST HDT|a0 90|01010101010101010101010|1GIc0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|326","America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1GIb0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|30e4","America/Santo_Domingo|AST|40|0||29e5","America/Araguaina|-03 -02|30 20|010|1IdD0 Lz0|14e4","America/Fortaleza|-03|30|0||34e5","America/Asuncion|-03 -04|30 40|01010101010101010101010|1GTf0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0|28e5","America/Panama|EST|50|0||15e5","America/Bahia|-02 -03|20 30|01|1GCq0|27e5","America/Mexico_City|CST CDT|60 50|01010101010101010101010|1GQw0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|20e6","America/Managua|CST|60|0||22e5","America/La_Paz|-04|40|0||19e5","America/Lima|-05|50|0||11e6","America/Denver|MST MDT|70 60|01010101010101010101010|1GI90 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|26e5","America/Campo_Grande|-03 -04|30 40|01010101010101010101010|1GCr0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0|77e4","America/Cancun|CST CDT EST|60 50 50|01010102|1GQw0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4","America/Caracas|-0430 -04|4u 40|01|1QMT0|29e5","America/Chicago|CST CDT|60 50|01010101010101010101010|1GI80 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|92e5","America/Chihuahua|MST MDT|70 60|01010101010101010101010|1GQx0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|81e4","America/Phoenix|MST|70|0||42e5","America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1GIa0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|15e6","America/New_York|EST EDT|50 40|01010101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|21e6","America/Rio_Branco|-04 -05|40 50|01|1KLE0|31e4","America/Fort_Nelson|PST PDT MST|80 70 70|01010102|1GIa0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2","America/Halifax|AST ADT|40 30|01010101010101010101010|1GI60 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|39e4","America/Godthab|-03 -02|30 20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|17e3","America/Grand_Turk|EST EDT AST|50 40 40|010101012|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2","America/Havana|CST CDT|50 40|01010101010101010101010|1GQt0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0|21e5","America/Metlakatla|PST AKST AKDT|80 90 80|0121212121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|14e2","America/Miquelon|-03 -02|30 20|01010101010101010101010|1GI50 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|61e2","America/Montevideo|-02 -03|20 30|01010101|1GI40 1o10 11z0 1o10 11z0 1o10 11z0|17e5","America/Noronha|-02|20|0||30e2","America/Port-au-Prince|EST EDT|50 40|010101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|23e5","Antarctica/Palmer|-03 -04|30 40|010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40","America/Santiago|-03 -04|30 40|010101010101010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0|62e5","America/Sao_Paulo|-02 -03|20 30|01010101010101010101010|1GCq0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0|20e6","Atlantic/Azores|-01 +00|10 0|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e4","America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1GI5u 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|11e4","Antarctica/Casey|+11 +08|-b0 -80|010|1GAF0 blz0|10","Antarctica/Davis|+05 +07|-50 -70|01|1GAI0|70","Pacific/Port_Moresby|+10|-a0|0||25e4","Pacific/Guadalcanal|+11|-b0|0||11e4","Asia/Tashkent|+05|-50|0||23e5","Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|14e5","Asia/Baghdad|+03|-30|0||66e5","Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|40","Asia/Dhaka|+06|-60|0||16e6","Asia/Amman|EET EEST|-20 -30|010101010101010101010|1GPy0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00|25e5","Asia/Kamchatka|+12|-c0|0||18e4","Asia/Baku|+04 +05|-40 -50|010101010|1GNA0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5","Asia/Bangkok|+07|-70|0||15e6","Asia/Barnaul|+07 +06|-70 -60|010|1N7v0 3rd0","Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1GNy0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|22e5","Asia/Manila|+08|-80|0||24e6","Asia/Kolkata|IST|-5u|0||15e6","Asia/Chita|+10 +08 +09|-a0 -80 -90|012|1N7s0 3re0|33e4","Asia/Ulaanbaatar|+08 +09|-80 -90|01010|1O8G0 1cJ0 1cP0 1cJ0|12e5","Asia/Shanghai|CST|-80|0||23e6","Asia/Colombo|+0530|-5u|0||22e5","Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1GPy0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|26e5","Asia/Dili|+09|-90|0||19e4","Asia/Dubai|+04|-40|0||39e5","Asia/Famagusta|EET EEST +03|-20 -30 -30|01010101012|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0","Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1GPy0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|18e5","Asia/Hong_Kong|HKT|-80|0||73e5","Asia/Hovd|+07 +08|-70 -80|01010|1O8H0 1cJ0 1cP0 1cJ0|81e3","Asia/Irkutsk|+09 +08|-90 -80|01|1N7t0|60e4","Europe/Istanbul|EET EEST +03|-20 -30 -30|01010101012|1GNB0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6","Asia/Jakarta|WIB|-70|0||31e6","Asia/Jayapura|WIT|-90|0||26e4","Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1GPA0 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0|81e4","Asia/Kabul|+0430|-4u|0||46e5","Asia/Karachi|PKT|-50|0||24e6","Asia/Kathmandu|+0545|-5J|0||12e5","Asia/Yakutsk|+10 +09|-a0 -90|01|1N7s0|28e4","Asia/Krasnoyarsk|+08 +07|-80 -70|01|1N7u0|10e5","Asia/Magadan|+12 +10 +11|-c0 -a0 -b0|012|1N7q0 3Cq0|95e3","Asia/Makassar|WITA|-80|0||15e5","Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|35e5","Asia/Novosibirsk|+07 +06|-70 -60|010|1N7v0 4eN0|15e5","Asia/Omsk|+07 +06|-70 -60|01|1N7v0|12e5","Asia/Pyongyang|KST KST|-90 -8u|01|1P4D0|29e5","Asia/Rangoon|+0630|-6u|0||48e5","Asia/Sakhalin|+11 +10|-b0 -a0|010|1N7r0 3rd0|58e4","Asia/Seoul|KST|-90|0||23e6","Asia/Srednekolymsk|+12 +11|-c0 -b0|01|1N7q0|35e2","Asia/Tehran|+0330 +0430|-3u -4u|01010101010101010101010|1GLUu 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0|14e6","Asia/Tokyo|JST|-90|0||38e6","Asia/Tomsk|+07 +06|-70 -60|010|1N7v0 3Qp0|10e5","Asia/Vladivostok|+11 +10|-b0 -a0|01|1N7r0|60e4","Asia/Yekaterinburg|+06 +05|-60 -50|01|1N7w0|14e5","Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|27e5","Atlantic/Cape_Verde|-01|10|0||50e4","Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1GQg0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|40e5","Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1GQgu 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|11e5","Australia/Brisbane|AEST|-a0|0||20e5","Australia/Darwin|ACST|-9u|0||12e4","Australia/Eucla|+0845|-8J|0||368","Australia/Lord_Howe|+11 +1030|-b0 -au|01010101010101010101010|1GQf0 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu|347","Australia/Perth|AWST|-80|0||18e5","Pacific/Easter|-05 -06|50 60|010101010101010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0|30e2","Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|12e5","Pacific/Tahiti|-10|a0|0||18e4","Pacific/Niue|-11|b0|0||12e2","Etc/GMT+12|-12|c0|0|","Pacific/Galapagos|-06|60|0||25e3","Etc/GMT+7|-07|70|0|","Pacific/Pitcairn|-08|80|0||56","Pacific/Gambier|-09|90|0||125","Etc/GMT-1|+01|-10|0|","Pacific/Fakaofo|+13|-d0|0||483","Pacific/Kiritimati|+14|-e0|0||51e2","Etc/GMT-2|+02|-20|0|","Etc/UCT|UCT|0|0|","Etc/UTC|UTC|0|0|","Europe/Astrakhan|+04 +03|-40 -30|010|1N7y0 3rd0","Europe/London|GMT BST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|10e6","Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1GNA0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|67e4","Europe/Kaliningrad|+03 EET|-30 -20|01|1N7z0|44e4","Europe/Volgograd|+04 +03|-40 -30|01|1N7y0|10e5","Europe/Moscow|MSK MSK|-40 -30|01|1N7y0|16e6","Europe/Saratov|+04 +03|-40 -30|010|1N7y0 5810","Europe/Simferopol|EET EEST MSK MSK|-20 -30 -40 -30|0101023|1GNB0 1qM0 11A0 1o00 11z0 1nW0|33e4","Pacific/Honolulu|HST|a0|0||37e4","MET|MET MEST|-10 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0","Pacific/Chatham|+1345 +1245|-dJ -cJ|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|600","Pacific/Apia|+14 +13|-e0 -d0|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|37e3","Pacific/Bougainville|+10 +11|-a0 -b0|01|1NwE0|18e4","Pacific/Fiji|+13 +12|-d0 -c0|01010101010101010101010|1Goe0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0|88e4","Pacific/Guam|ChST|-a0|0||17e4","Pacific/Marquesas|-0930|9u|0||86e2","Pacific/Pago_Pago|SST|b0|0||37e2","Pacific/Norfolk|+1130 +11|-bu -b0|01|1PoCu|25e4","Pacific/Tongatapu|+13 +14|-d0 -e0|01010101010101|1S4d0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0|75e3"],links:["Africa/Abidjan|Africa/Accra","Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Bissau","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Monrovia","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Sao_Tome","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|America/Danmarkshavn","Africa/Abidjan|Atlantic/Reykjavik","Africa/Abidjan|Atlantic/St_Helena","Africa/Abidjan|Etc/GMT","Africa/Abidjan|Etc/GMT+0","Africa/Abidjan|Etc/GMT-0","Africa/Abidjan|Etc/GMT0","Africa/Abidjan|Etc/Greenwich","Africa/Abidjan|GMT","Africa/Abidjan|GMT+0","Africa/Abidjan|GMT-0","Africa/Abidjan|GMT0","Africa/Abidjan|Greenwich","Africa/Abidjan|Iceland","Africa/Algiers|Africa/Tunis","Africa/Cairo|Egypt","Africa/Casablanca|Africa/El_Aaiun","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Khartoum|Africa/Addis_Ababa","Africa/Khartoum|Africa/Asmara","Africa/Khartoum|Africa/Asmera","Africa/Khartoum|Africa/Dar_es_Salaam","Africa/Khartoum|Africa/Djibouti","Africa/Khartoum|Africa/Juba","Africa/Khartoum|Africa/Kampala","Africa/Khartoum|Africa/Mogadishu","Africa/Khartoum|Africa/Nairobi","Africa/Khartoum|Indian/Antananarivo","Africa/Khartoum|Indian/Comoro","Africa/Khartoum|Indian/Mayotte","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Ndjamena","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|America/Juneau","America/Anchorage|America/Nome","America/Anchorage|America/Sitka","America/Anchorage|America/Yakutat","America/Anchorage|US/Alaska","America/Campo_Grande|America/Cuiaba","America/Chicago|America/Indiana/Knox","America/Chicago|America/Indiana/Tell_City","America/Chicago|America/Knox_IN","America/Chicago|America/Matamoros","America/Chicago|America/Menominee","America/Chicago|America/North_Dakota/Beulah","America/Chicago|America/North_Dakota/Center","America/Chicago|America/North_Dakota/New_Salem","America/Chicago|America/Rainy_River","America/Chicago|America/Rankin_Inlet","America/Chicago|America/Resolute","America/Chicago|America/Winnipeg","America/Chicago|CST6CDT","America/Chicago|Canada/Central","America/Chicago|US/Central","America/Chicago|US/Indiana-Starke","America/Chihuahua|America/Mazatlan","America/Chihuahua|Mexico/BajaSur","America/Denver|America/Boise","America/Denver|America/Cambridge_Bay","America/Denver|America/Edmonton","America/Denver|America/Inuvik","America/Denver|America/Ojinaga","America/Denver|America/Shiprock","America/Denver|America/Yellowknife","America/Denver|Canada/Mountain","America/Denver|MST7MDT","America/Denver|Navajo","America/Denver|US/Mountain","America/Fortaleza|America/Argentina/Buenos_Aires","America/Fortaleza|America/Argentina/Catamarca","America/Fortaleza|America/Argentina/ComodRivadavia","America/Fortaleza|America/Argentina/Cordoba","America/Fortaleza|America/Argentina/Jujuy","America/Fortaleza|America/Argentina/La_Rioja","America/Fortaleza|America/Argentina/Mendoza","America/Fortaleza|America/Argentina/Rio_Gallegos","America/Fortaleza|America/Argentina/Salta","America/Fortaleza|America/Argentina/San_Juan","America/Fortaleza|America/Argentina/San_Luis","America/Fortaleza|America/Argentina/Tucuman","America/Fortaleza|America/Argentina/Ushuaia","America/Fortaleza|America/Belem","America/Fortaleza|America/Buenos_Aires","America/Fortaleza|America/Catamarca","America/Fortaleza|America/Cayenne","America/Fortaleza|America/Cordoba","America/Fortaleza|America/Jujuy","America/Fortaleza|America/Maceio","America/Fortaleza|America/Mendoza","America/Fortaleza|America/Paramaribo","America/Fortaleza|America/Recife","America/Fortaleza|America/Rosario","America/Fortaleza|America/Santarem","America/Fortaleza|Antarctica/Rothera","America/Fortaleza|Atlantic/Stanley","America/Fortaleza|Etc/GMT+3","America/Halifax|America/Glace_Bay","America/Halifax|America/Goose_Bay","America/Halifax|America/Moncton","America/Halifax|America/Thule","America/Halifax|Atlantic/Bermuda","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/La_Paz|America/Boa_Vista","America/La_Paz|America/Guyana","America/La_Paz|America/Manaus","America/La_Paz|America/Porto_Velho","America/La_Paz|Brazil/West","America/La_Paz|Etc/GMT+4","America/Lima|America/Bogota","America/Lima|America/Guayaquil","America/Lima|Etc/GMT+5","America/Los_Angeles|America/Dawson","America/Los_Angeles|America/Ensenada","America/Los_Angeles|America/Santa_Isabel","America/Los_Angeles|America/Tijuana","America/Los_Angeles|America/Vancouver","America/Los_Angeles|America/Whitehorse","America/Los_Angeles|Canada/Pacific","America/Los_Angeles|Canada/Yukon","America/Los_Angeles|Mexico/BajaNorte","America/Los_Angeles|PST8PDT","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Managua|America/Belize","America/Managua|America/Costa_Rica","America/Managua|America/El_Salvador","America/Managua|America/Guatemala","America/Managua|America/Regina","America/Managua|America/Swift_Current","America/Managua|America/Tegucigalpa","America/Managua|Canada/East-Saskatchewan","America/Managua|Canada/Saskatchewan","America/Mexico_City|America/Bahia_Banderas","America/Mexico_City|America/Merida","America/Mexico_City|America/Monterrey","America/Mexico_City|Mexico/General","America/New_York|America/Detroit","America/New_York|America/Fort_Wayne","America/New_York|America/Indiana/Indianapolis","America/New_York|America/Indiana/Marengo","America/New_York|America/Indiana/Petersburg","America/New_York|America/Indiana/Vevay","America/New_York|America/Indiana/Vincennes","America/New_York|America/Indiana/Winamac","America/New_York|America/Indianapolis","America/New_York|America/Iqaluit","America/New_York|America/Kentucky/Louisville","America/New_York|America/Kentucky/Monticello","America/New_York|America/Louisville","America/New_York|America/Montreal","America/New_York|America/Nassau","America/New_York|America/Nipigon","America/New_York|America/Pangnirtung","America/New_York|America/Thunder_Bay","America/New_York|America/Toronto","America/New_York|Canada/Eastern","America/New_York|EST5EDT","America/New_York|US/East-Indiana","America/New_York|US/Eastern","America/New_York|US/Michigan","America/Noronha|Atlantic/South_Georgia","America/Noronha|Brazil/DeNoronha","America/Noronha|Etc/GMT+2","America/Panama|America/Atikokan","America/Panama|America/Cayman","America/Panama|America/Coral_Harbour","America/Panama|America/Jamaica","America/Panama|EST","America/Panama|Jamaica","America/Phoenix|America/Creston","America/Phoenix|America/Dawson_Creek","America/Phoenix|America/Hermosillo","America/Phoenix|MST","America/Phoenix|US/Arizona","America/Rio_Branco|America/Eirunepe","America/Rio_Branco|America/Porto_Acre","America/Rio_Branco|Brazil/Acre","America/Santiago|Chile/Continental","America/Santo_Domingo|America/Anguilla","America/Santo_Domingo|America/Antigua","America/Santo_Domingo|America/Aruba","America/Santo_Domingo|America/Barbados","America/Santo_Domingo|America/Blanc-Sablon","America/Santo_Domingo|America/Curacao","America/Santo_Domingo|America/Dominica","America/Santo_Domingo|America/Grenada","America/Santo_Domingo|America/Guadeloupe","America/Santo_Domingo|America/Kralendijk","America/Santo_Domingo|America/Lower_Princes","America/Santo_Domingo|America/Marigot","America/Santo_Domingo|America/Martinique","America/Santo_Domingo|America/Montserrat","America/Santo_Domingo|America/Port_of_Spain","America/Santo_Domingo|America/Puerto_Rico","America/Santo_Domingo|America/St_Barthelemy","America/Santo_Domingo|America/St_Kitts","America/Santo_Domingo|America/St_Lucia","America/Santo_Domingo|America/St_Thomas","America/Santo_Domingo|America/St_Vincent","America/Santo_Domingo|America/Tortola","America/Santo_Domingo|America/Virgin","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","Antarctica/Palmer|America/Punta_Arenas","Asia/Baghdad|Antarctica/Syowa","Asia/Baghdad|Asia/Aden","Asia/Baghdad|Asia/Bahrain","Asia/Baghdad|Asia/Kuwait","Asia/Baghdad|Asia/Qatar","Asia/Baghdad|Asia/Riyadh","Asia/Baghdad|Etc/GMT-3","Asia/Baghdad|Europe/Minsk","Asia/Bangkok|Asia/Ho_Chi_Minh","Asia/Bangkok|Asia/Novokuznetsk","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Saigon","Asia/Bangkok|Asia/Vientiane","Asia/Bangkok|Etc/GMT-7","Asia/Bangkok|Indian/Christmas","Asia/Dhaka|Antarctica/Vostok","Asia/Dhaka|Asia/Almaty","Asia/Dhaka|Asia/Bishkek","Asia/Dhaka|Asia/Dacca","Asia/Dhaka|Asia/Kashgar","Asia/Dhaka|Asia/Qyzylorda","Asia/Dhaka|Asia/Thimbu","Asia/Dhaka|Asia/Thimphu","Asia/Dhaka|Asia/Urumqi","Asia/Dhaka|Etc/GMT-6","Asia/Dhaka|Indian/Chagos","Asia/Dili|Etc/GMT-9","Asia/Dili|Pacific/Palau","Asia/Dubai|Asia/Muscat","Asia/Dubai|Asia/Tbilisi","Asia/Dubai|Asia/Yerevan","Asia/Dubai|Etc/GMT-4","Asia/Dubai|Europe/Samara","Asia/Dubai|Indian/Mahe","Asia/Dubai|Indian/Mauritius","Asia/Dubai|Indian/Reunion","Asia/Gaza|Asia/Hebron","Asia/Hong_Kong|Hongkong","Asia/Jakarta|Asia/Pontianak","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kamchatka|Asia/Anadyr","Asia/Kamchatka|Etc/GMT-12","Asia/Kamchatka|Kwajalein","Asia/Kamchatka|Pacific/Funafuti","Asia/Kamchatka|Pacific/Kwajalein","Asia/Kamchatka|Pacific/Majuro","Asia/Kamchatka|Pacific/Nauru","Asia/Kamchatka|Pacific/Tarawa","Asia/Kamchatka|Pacific/Wake","Asia/Kamchatka|Pacific/Wallis","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Makassar|Asia/Ujung_Pandang","Asia/Manila|Asia/Brunei","Asia/Manila|Asia/Kuala_Lumpur","Asia/Manila|Asia/Kuching","Asia/Manila|Asia/Singapore","Asia/Manila|Etc/GMT-8","Asia/Manila|Singapore","Asia/Rangoon|Asia/Yangon","Asia/Rangoon|Indian/Cocos","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|Asia/Macao","Asia/Shanghai|Asia/Macau","Asia/Shanghai|Asia/Taipei","Asia/Shanghai|PRC","Asia/Shanghai|ROC","Asia/Tashkent|Antarctica/Mawson","Asia/Tashkent|Asia/Aqtau","Asia/Tashkent|Asia/Aqtobe","Asia/Tashkent|Asia/Ashgabat","Asia/Tashkent|Asia/Ashkhabad","Asia/Tashkent|Asia/Atyrau","Asia/Tashkent|Asia/Dushanbe","Asia/Tashkent|Asia/Oral","Asia/Tashkent|Asia/Samarkand","Asia/Tashkent|Etc/GMT-5","Asia/Tashkent|Indian/Kerguelen","Asia/Tashkent|Indian/Maldives","Asia/Tehran|Iran","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Choibalsan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Asia/Vladivostok|Asia/Ust-Nera","Asia/Yakutsk|Asia/Khandyga","Atlantic/Azores|America/Scoresbysund","Atlantic/Cape_Verde|Etc/GMT+1","Australia/Adelaide|Australia/Broken_Hill","Australia/Adelaide|Australia/South","Australia/Adelaide|Australia/Yancowinna","Australia/Brisbane|Australia/Lindeman","Australia/Brisbane|Australia/Queensland","Australia/Darwin|Australia/North","Australia/Lord_Howe|Australia/LHI","Australia/Perth|Australia/West","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/Currie","Australia/Sydney|Australia/Hobart","Australia/Sydney|Australia/Melbourne","Australia/Sydney|Australia/NSW","Australia/Sydney|Australia/Tasmania","Australia/Sydney|Australia/Victoria","Etc/UCT|UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Astrakhan|Europe/Ulyanovsk","Europe/Athens|Asia/Nicosia","Europe/Athens|EET","Europe/Athens|Europe/Bucharest","Europe/Athens|Europe/Helsinki","Europe/Athens|Europe/Kiev","Europe/Athens|Europe/Mariehamn","Europe/Athens|Europe/Nicosia","Europe/Athens|Europe/Riga","Europe/Athens|Europe/Sofia","Europe/Athens|Europe/Tallinn","Europe/Athens|Europe/Uzhgorod","Europe/Athens|Europe/Vilnius","Europe/Athens|Europe/Zaporozhye","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Turkey","Europe/Lisbon|Atlantic/Canary","Europe/Lisbon|Atlantic/Faeroe","Europe/Lisbon|Atlantic/Faroe","Europe/Lisbon|Atlantic/Madeira","Europe/Lisbon|Portugal","Europe/Lisbon|WET","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|W-SU","Europe/Paris|Africa/Ceuta","Europe/Paris|Arctic/Longyearbyen","Europe/Paris|Atlantic/Jan_Mayen","Europe/Paris|CET","Europe/Paris|Europe/Amsterdam","Europe/Paris|Europe/Andorra","Europe/Paris|Europe/Belgrade","Europe/Paris|Europe/Berlin","Europe/Paris|Europe/Bratislava","Europe/Paris|Europe/Brussels","Europe/Paris|Europe/Budapest","Europe/Paris|Europe/Busingen","Europe/Paris|Europe/Copenhagen","Europe/Paris|Europe/Gibraltar","Europe/Paris|Europe/Ljubljana","Europe/Paris|Europe/Luxembourg","Europe/Paris|Europe/Madrid","Europe/Paris|Europe/Malta","Europe/Paris|Europe/Monaco","Europe/Paris|Europe/Oslo","Europe/Paris|Europe/Podgorica","Europe/Paris|Europe/Prague","Europe/Paris|Europe/Rome","Europe/Paris|Europe/San_Marino","Europe/Paris|Europe/Sarajevo","Europe/Paris|Europe/Skopje","Europe/Paris|Europe/Stockholm","Europe/Paris|Europe/Tirane","Europe/Paris|Europe/Vaduz","Europe/Paris|Europe/Vatican","Europe/Paris|Europe/Vienna","Europe/Paris|Europe/Warsaw","Europe/Paris|Europe/Zagreb","Europe/Paris|Europe/Zurich","Europe/Paris|Poland","Europe/Volgograd|Europe/Kirov","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Easter|Chile/EasterIsland","Pacific/Fakaofo|Etc/GMT-13","Pacific/Fakaofo|Pacific/Enderbury","Pacific/Galapagos|Etc/GMT+6","Pacific/Gambier|Etc/GMT+9","Pacific/Guadalcanal|Antarctica/Macquarie","Pacific/Guadalcanal|Etc/GMT-11","Pacific/Guadalcanal|Pacific/Efate","Pacific/Guadalcanal|Pacific/Kosrae","Pacific/Guadalcanal|Pacific/Noumea","Pacific/Guadalcanal|Pacific/Pohnpei","Pacific/Guadalcanal|Pacific/Ponape","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|HST","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Kiritimati|Etc/GMT-14","Pacific/Niue|Etc/GMT+11","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Pitcairn|Etc/GMT+8","Pacific/Port_Moresby|Antarctica/DumontDUrville","Pacific/Port_Moresby|Etc/GMT-10","Pacific/Port_Moresby|Pacific/Chuuk","Pacific/Port_Moresby|Pacific/Truk","Pacific/Port_Moresby|Pacific/Yap","Pacific/Tahiti|Etc/GMT+10","Pacific/Tahiti|Pacific/Rarotonga"]
}),e})},function(e,t,n){function i(e){return n(r(e))}function r(e){return o[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var o={"./en-gb":10,"./en-gb.js":10};i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id=43},function(e,t,n){var i=n(2);e.exports=function(){var e=new i.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b('<div class="bookingjs-form-field">'),i.b("\n"+n),i.b("  <label"),i.b("\n"+n),i.b('    for="input-name"'),i.b("\n"+n),i.b('    class="bookingjs-form-label label-name">'),i.b("\n"+n),i.b("    "),i.b(i.v(i.d("fields.name.placeholder",e,t,0))),i.b("\n"+n),i.b("  </label>"),i.b("\n"+n),i.b("  <input"),i.b("\n"+n),i.b('    id="input-name"'),i.b("\n"+n),i.b('    class="bookingjs-form-input input-name"'),i.b("\n"+n),i.b('    type="text"'),i.b("\n"+n),i.b('    name="name"'),i.b("\n"+n),i.b('    placeholder="'),i.b(i.v(i.d("fields.name.placeholder",e,t,0))),i.b('"'),i.b("\n"+n),i.b("    "),i.s(i.d("fields.name.prefilled",e,t,1),e,t,0,340,377,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(' value="'),n.b(n.v(n.d("fields.name.prefilled",e,t,0))),n.b('" ')}),e.pop()),i.b("\n"+n),i.b("    "),i.s(i.d("fields.name.locked",e,t,1),e,t,0,435,445,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(" readonly ")}),e.pop()),i.b("\n"+n),i.b("    required"),i.b("\n"+n),i.b("  />"),i.b("\n"+n),i.b("</div>"),i.b("\n"),i.b("\n"+n),i.b('<div class="bookingjs-form-field">'),i.b("\n"+n),i.b("  <label"),i.b("\n"+n),i.b('    for="input-email"'),i.b("\n"+n),i.b('    class="bookingjs-form-label label-email">'),i.b("\n"+n),i.b("    "),i.b(i.v(i.d("fields.email.placeholder",e,t,0))),i.b("\n"+n),i.b("  </label>"),i.b("\n"+n),i.b("  <input"),i.b("\n"+n),i.b('    id="input-email"'),i.b("\n"+n),i.b('    class="bookingjs-form-input input-email"'),i.b("\n"+n),i.b('    type="email"'),i.b("\n"+n),i.b('    name="email"'),i.b("\n"+n),i.b('    placeholder="'),i.b(i.v(i.d("fields.email.placeholder",e,t,0))),i.b('"'),i.b("\n"+n),i.b("    "),i.s(i.d("fields.email.prefilled",e,t,1),e,t,0,846,884,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(' value="'),n.b(n.v(n.d("fields.email.prefilled",e,t,0))),n.b('" ')}),e.pop()),i.b("\n"+n),i.b("    "),i.s(i.d("fields.email.locked",e,t,1),e,t,0,944,954,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(" readonly ")}),e.pop()),i.b("\n"+n),i.b("    required"),i.b("\n"+n),i.b("  />"),i.b("\n"+n),i.b("</div>"),i.b("\n"),i.b("\n"+n),i.s(i.d("fields.phone.enabled",e,t,1),e,t,0,1034,1600,"{{ }}")&&(i.rs(e,t,function(e,t,i){i.b('<div class="bookingjs-form-field">'),i.b("\n"+n),i.b("  <label"),i.b("\n"+n),i.b('    for="input-phone"'),i.b("\n"+n),i.b('    class="bookingjs-form-label label-phone">'),i.b("\n"+n),i.b("    "),i.b(i.v(i.d("fields.phone.placeholder",e,t,0))),i.b("\n"+n),i.b("  </label>"),i.b("\n"+n),i.b("  <input"),i.b("\n"+n),i.b('    id="input-phone"'),i.b("\n"+n),i.b('    class="bookingjs-form-input input-phone"'),i.b("\n"+n),i.b('    type="tel"'),i.b("\n"+n),i.b('    name="phone"'),i.b("\n"+n),i.b('    placeholder="'),i.b(i.v(i.d("fields.phone.placeholder",e,t,0))),i.b('"'),i.b("\n"+n),i.b("    "),i.s(i.d("fields.phone.prefilled",e,t,1),e,t,0,1382,1420,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(' value="'),n.b(n.v(n.d("fields.phone.prefilled",e,t,0))),n.b('" ')}),e.pop()),i.b("\n"+n),i.b("    "),i.s(i.d("fields.phone.required",e,t,1),e,t,0,1482,1492,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(" required ")}),e.pop()),i.b("\n"+n),i.b("    "),i.s(i.d("fields.phone.locked",e,t,1),e,t,0,1551,1561,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(" readonly ")}),e.pop()),i.b("\n"+n),i.b("  />"),i.b("\n"+n),i.b("</div>"),i.b("\n"+n)}),e.pop()),i.b("\n"+n),i.s(i.d("fields.voip.enabled",e,t,1),e,t,0,1655,2208,"{{ }}")&&(i.rs(e,t,function(e,t,i){i.b('<div class="bookingjs-form-field">'),i.b("\n"+n),i.b("  <label"),i.b("\n"+n),i.b('    for="input-voip"'),i.b("\n"+n),i.b('    class="bookingjs-form-label label-voip">'),i.b("\n"+n),i.b("    "),i.b(i.v(i.d("fields.voip.placeholder",e,t,0))),i.b("\n"+n),i.b("  </label>"),i.b("\n"+n),i.b("  <input"),i.b("\n"+n),i.b('    id="input-voip"'),i.b("\n"+n),i.b('    class="bookingjs-form-input input-voip"'),i.b("\n"+n),i.b('    type="text"'),i.b("\n"+n),i.b('    name="voip"'),i.b("\n"+n),i.b('    placeholder="'),i.b(i.v(i.d("fields.voip.placeholder",e,t,0))),i.b('"'),i.b("\n"+n),i.b("    "),i.s(i.d("fields.voip.prefilled",e,t,1),e,t,0,1996,2033,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(' value="'),n.b(n.v(n.d("fields.voip.prefilled",e,t,0))),n.b('" ')}),e.pop()),i.b("\n"+n),i.b("    "),i.s(i.d("fields.voip.required",e,t,1),e,t,0,2093,2103,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(" required ")}),e.pop()),i.b("\n"+n),i.b("    "),i.s(i.d("fields.voip.locked",e,t,1),e,t,0,2160,2170,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(" readonly ")}),e.pop()),i.b("\n"+n),i.b("  />"),i.b("\n"+n),i.b("</div>"),i.b("\n"+n)}),e.pop()),i.b("\n"+n),i.s(i.d("fields.location.enabled",e,t,1),e,t,0,2266,2875,"{{ }}")&&(i.rs(e,t,function(e,t,i){i.b('<div class="bookingjs-form-field">'),i.b("\n"+n),i.b("  <label"),i.b("\n"+n),i.b('    for="input-location"'),i.b("\n"+n),i.b('    class="bookingjs-form-label label-location">'),i.b("\n"+n),i.b("    "),i.b(i.v(i.d("fields.location.placeholder",e,t,0))),i.b("\n"+n),i.b("  </label>"),i.b("\n"+n),i.b("  <input"),i.b("\n"+n),i.b('    id="input-location"'),i.b("\n"+n),i.b('    class="bookingjs-form-input input-location"'),i.b("\n"+n),i.b('    type="text"'),i.b("\n"+n),i.b('    name="location"'),i.b("\n"+n),i.b('    placeholder="'),i.b(i.v(i.d("fields.location.placeholder",e,t,0))),i.b('"'),i.b("\n"+n),i.b("    "),i.s(i.d("fields.location.prefilled",e,t,1),e,t,0,2639,2680,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(' value="'),n.b(n.v(n.d("fields.location.prefilled",e,t,0))),n.b('" ')}),e.pop()),i.b("\n"+n),i.b("    "),i.s(i.d("fields.location.required",e,t,1),e,t,0,2748,2758,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(" required ")}),e.pop()),i.b("\n"+n),i.b("    "),i.s(i.d("fields.location.locked",e,t,1),e,t,0,2823,2833,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(" readonly ")}),e.pop()),i.b("\n"+n),i.b("  />"),i.b("\n"+n),i.b("</div>"),i.b("\n"+n)}),e.pop()),i.b("\n"+n),i.s(i.d("fields.comment.enabled",e,t,1),e,t,0,2936,3554,"{{ }}")&&(i.rs(e,t,function(e,t,i){i.b('<div class="bookingjs-form-field">'),i.b("\n"+n),i.b("  <label"),i.b("\n"+n),i.b('    for="input-comment"'),i.b("\n"+n),i.b('    class="bookingjs-form-label label-comment">'),i.b("\n"+n),i.b("    "),i.b(i.v(i.d("fields.comment.placeholder",e,t,0))),i.b("\n"+n),i.b("  </label>"),i.b("\n"+n),i.b("  <textarea"),i.b("\n"+n),i.b('    id="input-comment"'),i.b("\n"+n),i.b('    class="bookingjs-form-input bookingjs-form-input--textarea input-comment"'),i.b("\n"+n),i.b('    rows="3"'),i.b("\n"+n),i.b('    name="comment"'),i.b("\n"+n),i.b('    placeholder="'),i.b(i.v(i.d("fields.comment.placeholder",e,t,0))),i.b('"'),i.b("\n"+n),i.b("    "),i.s(i.d("fields.comment.required",e,t,1),e,t,0,3331,3341,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(" required ")}),e.pop()),i.b("\n"+n),i.b("    "),i.s(i.d("fields.comment.locked",e,t,1),e,t,0,3404,3414,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(" readonly ")}),e.pop()),i.b(">"),i.s(i.d("fields.comment.prefilled",e,t,1),e,t,0,3474,3504,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(n.v(n.d("fields.comment.prefilled",e,t,0)))}),e.pop()),i.b("</textarea>"),i.b("\n"+n),i.b("</div>"),i.b("\n"+n)}),e.pop()),i.fl()},partials:{},subs:{}},'<div class="bookingjs-form-field">\n  <label\n    for="input-name"\n    class="bookingjs-form-label label-name">\n    {{ fields.name.placeholder }}\n  </label>\n  <input\n    id="input-name"\n    class="bookingjs-form-input input-name"\n    type="text"\n    name="name"\n    placeholder="{{ fields.name.placeholder }}"\n    {{# fields.name.prefilled }} value="{{ fields.name.prefilled }}" {{/ fields.name.prefilled }}\n    {{# fields.name.locked }} readonly {{/ fields.name.locked }}\n    required\n  />\n</div>\n\n<div class="bookingjs-form-field">\n  <label\n    for="input-email"\n    class="bookingjs-form-label label-email">\n    {{ fields.email.placeholder }}\n  </label>\n  <input\n    id="input-email"\n    class="bookingjs-form-input input-email"\n    type="email"\n    name="email"\n    placeholder="{{ fields.email.placeholder }}"\n    {{# fields.email.prefilled }} value="{{ fields.email.prefilled }}" {{/ fields.email.prefilled }}\n    {{# fields.email.locked }} readonly {{/ fields.email.locked }}\n    required\n  />\n</div>\n\n{{# fields.phone.enabled }}\n<div class="bookingjs-form-field">\n  <label\n    for="input-phone"\n    class="bookingjs-form-label label-phone">\n    {{ fields.phone.placeholder }}\n  </label>\n  <input\n    id="input-phone"\n    class="bookingjs-form-input input-phone"\n    type="tel"\n    name="phone"\n    placeholder="{{ fields.phone.placeholder }}"\n    {{# fields.phone.prefilled }} value="{{ fields.phone.prefilled }}" {{/ fields.phone.prefilled }}\n    {{# fields.phone.required }} required {{/ fields.phone.required }}\n    {{# fields.phone.locked }} readonly {{/ fields.phone.locked }}\n  />\n</div>\n{{/ fields.phone.enabled }}\n\n{{# fields.voip.enabled }}\n<div class="bookingjs-form-field">\n  <label\n    for="input-voip"\n    class="bookingjs-form-label label-voip">\n    {{ fields.voip.placeholder }}\n  </label>\n  <input\n    id="input-voip"\n    class="bookingjs-form-input input-voip"\n    type="text"\n    name="voip"\n    placeholder="{{ fields.voip.placeholder }}"\n    {{# fields.voip.prefilled }} value="{{ fields.voip.prefilled }}" {{/ fields.voip.prefilled }}\n    {{# fields.voip.required }} required {{/ fields.voip.required }}\n    {{# fields.voip.locked }} readonly {{/ fields.voip.locked }}\n  />\n</div>\n{{/ fields.voip.enabled }}\n\n{{# fields.location.enabled }}\n<div class="bookingjs-form-field">\n  <label\n    for="input-location"\n    class="bookingjs-form-label label-location">\n    {{ fields.location.placeholder }}\n  </label>\n  <input\n    id="input-location"\n    class="bookingjs-form-input input-location"\n    type="text"\n    name="location"\n    placeholder="{{ fields.location.placeholder }}"\n    {{# fields.location.prefilled }} value="{{ fields.location.prefilled }}" {{/ fields.location.prefilled }}\n    {{# fields.location.required }} required {{/ fields.location.required }}\n    {{# fields.location.locked }} readonly {{/ fields.location.locked }}\n  />\n</div>\n{{/ fields.location.enabled }}\n\n{{# fields.comment.enabled }}\n<div class="bookingjs-form-field">\n  <label\n    for="input-comment"\n    class="bookingjs-form-label label-comment">\n    {{ fields.comment.placeholder }}\n  </label>\n  <textarea\n    id="input-comment"\n    class="bookingjs-form-input bookingjs-form-input--textarea input-comment"\n    rows="3"\n    name="comment"\n    placeholder="{{ fields.comment.placeholder }}"\n    {{# fields.comment.required }} required {{/ fields.comment.required }}\n    {{# fields.comment.locked }} readonly {{/ fields.comment.locked }}>{{# fields.comment.prefilled }}{{ fields.comment.prefilled }}{{/ fields.comment.prefilled }}</textarea>\n</div>\n{{/ fields.comment.enabled }}\n',i);return e}()},function(e,t,n){var i=n(2);e.exports=function(){var e=new i.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b('<div class="bookingjs-bookpage">'),i.b("\n"+n),i.b('  <a class="bookingjs-bookpage-close" href="#">'),i.b(i.t(i.f("closeIcon",e,t,0))),i.b("</a>"),i.b("\n"+n),i.b('  <h2 class="bookingjs-bookpage-date">'),i.b(i.v(i.f("chosenDate",e,t,0))),i.b("</h2>"),i.b("\n"+n),i.b('  <h3 class="bookingjs-bookpage-time">'),i.b(i.v(i.f("chosenTime",e,t,0))),i.b("</h3>"),i.b("\n"+n),i.b('  <form class="bookingjs-form" action="#">'),i.b("\n"+n),i.b('    <div class="bookingjs-form-box">'),i.b("\n"+n),i.b('      <div class="bookingjs-form-success-message">'),i.b("\n"+n),i.b('        <div class="title">'),i.b(i.v(i.f("successMessageTitle",e,t,0))),i.b("</div>"),i.b("\n"+n),i.b('        <div class="body">'),i.b(i.t(i.f("successMessageBody",e,t,0))),i.b("</div>"),i.b("\n"+n),i.b("      </div>"),i.b("\n"+n),i.b('      <div class="bookingjs-form-fields">'),i.b("\n"+n),i.b(i.rp("<formFields0",e,t,"        ")),i.b("      </div>"),i.b("\n"+n),i.b("    </div>"),i.b("\n"+n),i.b('    <button class="bookingjs-form-button" type="submit">'),i.b("\n"+n),i.b('      <span class="inactive-text">'),i.b(i.v(i.f("submitText",e,t,0))),i.b("</span>"),i.b("\n"+n),i.b('      <span class="loading-text">'),i.b(i.t(i.f("loadingIcon",e,t,0))),i.b("</span>"),i.b("\n"+n),i.b('      <span class="error-text">'),i.b(i.t(i.f("errorIcon",e,t,0))),i.b("</span>"),i.b("\n"+n),i.b('      <span class="success-text">'),i.b(i.t(i.f("checkmarkIcon",e,t,0))),i.b("</span>"),i.b("\n"+n),i.b("    </button>"),i.b("\n"+n),i.b("  </form>"),i.b("\n"+n),i.b("</div>"),i.b("\n"),i.fl()},partials:{"<formFields0":{name:"formFields",partials:{},subs:{}}},subs:{}},'<div class="bookingjs-bookpage">\n  <a class="bookingjs-bookpage-close" href="#">{{& closeIcon }}</a>\n  <h2 class="bookingjs-bookpage-date">{{ chosenDate }}</h2>\n  <h3 class="bookingjs-bookpage-time">{{ chosenTime }}</h3>\n  <form class="bookingjs-form" action="#">\n    <div class="bookingjs-form-box">\n      <div class="bookingjs-form-success-message">\n        <div class="title">{{ successMessageTitle }}</div>\n        <div class="body">{{& successMessageBody }}</div>\n      </div>\n      <div class="bookingjs-form-fields">\n        {{> formFields }}\n      </div>\n    </div>\n    <button class="bookingjs-form-button" type="submit">\n      <span class="inactive-text">{{ submitText }}</span>\n      <span class="loading-text">{{& loadingIcon }}</span>\n      <span class="error-text">{{& errorIcon }}</span>\n      <span class="success-text">{{& checkmarkIcon }}</span>\n    </button>\n  </form>\n</div>\n',i);return e}()},function(e,t,n){var i=n(2);e.exports=function(){var e=new i.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b('<div class="bookingjs-error show">'),i.b("\n"+n),i.b('  <div class="bookingjs-error-inner">'),i.b("\n"+n),i.b('    <div class="bookingjs-error-icon">'),i.b("\n"+n),i.b("      "),i.b(i.t(i.f("errorWarningIcon",e,t,0))),i.b("\n"+n),i.b("    </div>"),i.b("\n"+n),i.b('    <div class="bookingjs-error-heading">'),i.b("\n"+n),i.b("      Ouch, we've encountered a problem"),i.b("\n"+n),i.b("    </div>"),i.b("\n"+n),i.b('    <div class="bookingjs-error-text">'),i.b("\n"+n),i.b('      <span class="bookingjs-error-text-message">'),i.b(i.t(i.f("message",e,t,0))),i.b("</span>"),i.b("\n"+n),i.b('      <span class="bookingjs-error-text-context">'),i.b(i.t(i.f("context",e,t,0))),i.b("</span>"),i.b("\n"+n),i.b("    </div>"),i.b("\n"+n),i.b("  </div>"),i.b("\n"+n),i.b("</div>"),i.b("\n"),i.fl()},partials:{},subs:{}},'<div class="bookingjs-error show">\n  <div class="bookingjs-error-inner">\n    <div class="bookingjs-error-icon">\n      {{& errorWarningIcon }}\n    </div>\n    <div class="bookingjs-error-heading">\n      Ouch, we\'ve encountered a problem\n    </div>\n    <div class="bookingjs-error-text">\n      <span class="bookingjs-error-text-message">{{& message }}</span>\n      <span class="bookingjs-error-text-context">{{& context }}</span>\n    </div>\n  </div>\n</div>\n',i);return e}()},function(e,t,n){var i=n(2);e.exports=function(){var e=new i.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b('<div class="bookingjs-loading show">'),i.b("\n"+n),i.b('  <div class="bookingjs-loading-icon">'),i.b("\n"+n),i.b("    "),i.b(i.t(i.f("loadingIcon",e,t,0))),i.b("\n"+n),i.b("  </div>"),i.b("\n"+n),i.b("</div>"),i.b("\n"),i.fl()},partials:{},subs:{}},'<div class="bookingjs-loading show">\n  <div class="bookingjs-loading-icon">\n    {{& loadingIcon }}\n  </div>\n</div>\n',i);return e}()},function(e,t,n){var i=n(2);e.exports=function(){var e=new i.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b('<div class="bookingjs-poweredby">'),i.b("\n"+n),i.b('  <a href="http://timekit.io?utm_medium=link&utm_source='),i.b(i.v(i.f("campaignSource",e,t,0))),i.b("&utm_campaign="),i.b(i.v(i.f("campaignName",e,t,0))),i.b('&utm_content=powered-by" target="_blank">'),i.b("\n"+n),i.b("    "),i.b(i.t(i.f("timekitLogo",e,t,0))),i.b("\n"+n),i.b("    <span>Powered by Timekit</span>"),i.b("\n"+n),i.b("  </a>"),i.b("\n"+n),i.b("</div>"),i.b("\n"),i.fl()},partials:{},subs:{}},'<div class="bookingjs-poweredby">\n  <a href="http://timekit.io?utm_medium=link&utm_source={{ campaignSource }}&utm_campaign={{ campaignName }}&utm_content=powered-by" target="_blank">\n    {{& timekitLogo }}\n    <span>Powered by Timekit</span>\n  </a>\n</div>\n',i);return e}()},function(e,t,n){var i=n(2);e.exports=function(){var e=new i.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b('<div class="bookingjs-avatar">'),i.b("\n"+n),i.b('  <img src="'),i.b(i.t(i.f("image",e,t,0))),i.b('" />'),i.b("\n"+n),i.b("</div>"),i.b("\n"),i.fl()},partials:{},subs:{}},'<div class="bookingjs-avatar">\n  <img src="{{& image }}" />\n</div>\n',i);return e}()},function(e,t,n){var i=n(2);e.exports=function(){var e=new i.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b('<div class="bookingjs-displayname">'),i.b("\n"+n),i.b("  <span>"),i.b(i.v(i.f("name",e,t,0))),i.b("</span>"),i.b("\n"+n),i.b("</div>"),i.b("\n"),i.fl()},partials:{},subs:{}},'<div class="bookingjs-displayname">\n  <span>{{ name }}</span>\n</div>\n',i);return e}()},function(e,t,n){var i;!function(){"use strict";function r(e){return a(s(e),arguments)}function o(e,t){return r.apply(null,[e].concat(t||[]))}function a(e,t){var n,i,o,a,s,c,u,d,h,f=1,p=e.length,g="";for(i=0;i<p;i++)if("string"==typeof e[i])g+=e[i];else if(Array.isArray(e[i])){if(a=e[i],a[2])for(n=t[f],o=0;o<a[2].length;o++){if(!n.hasOwnProperty(a[2][o]))throw new Error(r('[sprintf] property "%s" does not exist',a[2][o]));n=n[a[2][o]]}else n=a[1]?t[a[1]]:t[f++];if(l.not_type.test(a[8])&&l.not_primitive.test(a[8])&&n instanceof Function&&(n=n()),l.numeric_arg.test(a[8])&&"number"!=typeof n&&isNaN(n))throw new TypeError(r("[sprintf] expecting number but found %T",n));switch(l.number.test(a[8])&&(d=n>=0),a[8]){case"b":n=parseInt(n,10).toString(2);break;case"c":n=String.fromCharCode(parseInt(n,10));break;case"d":case"i":n=parseInt(n,10);break;case"j":n=JSON.stringify(n,null,a[6]?parseInt(a[6]):0);break;case"e":n=a[7]?parseFloat(n).toExponential(a[7]):parseFloat(n).toExponential();break;case"f":n=a[7]?parseFloat(n).toFixed(a[7]):parseFloat(n);break;case"g":n=a[7]?String(Number(n.toPrecision(a[7]))):parseFloat(n);break;case"o":n=(parseInt(n,10)>>>0).toString(8);break;case"s":n=String(n),n=a[7]?n.substring(0,a[7]):n;break;case"t":n=String(!!n),n=a[7]?n.substring(0,a[7]):n;break;case"T":n=Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),n=a[7]?n.substring(0,a[7]):n;break;case"u":n=parseInt(n,10)>>>0;break;case"v":n=n.valueOf(),n=a[7]?n.substring(0,a[7]):n;break;case"x":n=(parseInt(n,10)>>>0).toString(16);break;case"X":n=(parseInt(n,10)>>>0).toString(16).toUpperCase()}l.json.test(a[8])?g+=n:(!l.number.test(a[8])||d&&!a[3]?h="":(h=d?"+":"-",n=n.toString().replace(l.sign,"")),c=a[4]?"0"===a[4]?"0":a[4].charAt(1):" ",u=a[6]-(h+n).length,s=a[6]&&u>0?c.repeat(u):"",g+=a[5]?h+n+s:"0"===c?h+s+n:s+h+n)}return g}function s(e){if(c[e])return c[e];for(var t,n=e,i=[],r=0;n;){if(null!==(t=l.text.exec(n)))i.push(t[0]);else if(null!==(t=l.modulo.exec(n)))i.push("%");else{if(null===(t=l.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){r|=1;var o=[],a=t[2],s=[];if(null===(s=l.key.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(o.push(s[1]);""!==(a=a.substring(s[0].length));)if(null!==(s=l.key_access.exec(a)))o.push(s[1]);else{if(null===(s=l.index_access.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");o.push(s[1])}t[2]=o}else r|=2;if(3===r)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");i.push(t)}n=n.substring(t[0].length)}return c[e]=i}var l={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/},c=Object.create(null);t.sprintf=r,t.vsprintf=o,"undefined"!=typeof window&&(window.sprintf=r,window.vsprintf=o,n(63).amd&&(i=function(){return{sprintf:r,vsprintf:o}}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))))}()},function(e,t,n){var i=n(33);"string"==typeof i&&(i=[[e.id,i,""]]);n(6)(i,{singleton:!0});i.locals&&(e.exports=i.locals)},function(e,t,n){var i=n(34);"string"==typeof i&&(i=[[e.id,i,""]]);n(6)(i,{singleton:!0});i.locals&&(e.exports=i.locals)},function(e,t,n){var i=n(35);"string"==typeof i&&(i=[[e.id,i,""]]);n(6)(i,{singleton:!0});i.locals&&(e.exports=i.locals)},function(e,t,n){var i=n(36);"string"==typeof i&&(i=[[e.id,i,""]]);n(6)(i,{singleton:!0});i.locals&&(e.exports=i.locals)},function(e,t){e.exports='<svg viewBox="0 0 38 26" x="0px" y="0px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><path fill="#fff" d="M4.59255916,9.14153015 L4.59255916,9.14153015 L4.59255917,9.14153016 C3.61060488,8.15335155 2.0152224,8.15314806 1.03260582,9.1419932 L0.737322592,9.43914816 C-0.245558943,10.4282599 -0.245836003,12.0327396 0.736862454,13.0216671 L12.8967481,25.2586313 C13.4826504,25.8482474 14.3060779,26.1023412 15.1093609,25.9623831 L15.1946218,25.9520176 C15.7962843,25.9101633 16.3621851,25.6553951 16.7974015,25.21742 L37.2642739,4.6208133 C38.2456495,3.63321696 38.2453889,2.02851586 37.2626092,1.03950653 L36.967326,0.742351578 C35.9843771,-0.246827998 34.390543,-0.247513927 33.4085772,0.740676315 L15.4197831,18.8434968 L14.826599,19.4404409 L14.2334149,18.8434968 L4.59255916,9.14153015 Z" id="Path"></path></svg>'},function(e,t){e.exports='<svg class="bookingjs-closeicon" viewBox="0 0 90 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>close-icon</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="close-icon" sketch:type="MSLayerGroup" fill="#000000"><path d="M58,45 L87.2,15.8 C90.9,12.1 90.9,6.3 87.3,2.7 C83.7,-0.9 77.8,-0.8 74.2,2.8 L45,32 L15.8,2.8 C12.1,-0.9 6.3,-0.9 2.7,2.7 C-0.9,6.3 -0.8,12.2 2.8,15.8 L32,45 L2.8,74.2 C-0.9,77.9 -0.9,83.7 2.7,87.3 C6.3,90.9 12.2,90.8 15.8,87.2 L45,58 L74.2,87.2 C77.9,90.9 83.7,90.9 87.3,87.3 C90.9,83.7 90.8,77.8 87.2,74.2 L58,45 L58,45 Z" id="Shape" sketch:type="MSShapeGroup"></path></g></g></svg>'},function(e,t){e.exports='<svg class="bookingjs-closeicon" viewBox="0 0 90 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>error-icon</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="error-icon" sketch:type="MSLayerGroup" fill="#FFFFFF"><path d="M58,45 L87.2,15.8 C90.9,12.1 90.9,6.3 87.3,2.7 C83.7,-0.9 77.8,-0.8 74.2,2.8 L45,32 L15.8,2.8 C12.1,-0.9 6.3,-0.9 2.7,2.7 C-0.9,6.3 -0.8,12.2 2.8,15.8 L32,45 L2.8,74.2 C-0.9,77.9 -0.9,83.7 2.7,87.3 C6.3,90.9 12.2,90.8 15.8,87.2 L45,58 L74.2,87.2 C77.9,90.9 83.7,90.9 87.3,87.3 C90.9,83.7 90.8,77.8 87.2,74.2 L58,45 L58,45 Z" id="Shape" sketch:type="MSShapeGroup"></path></g></g></svg>'},function(e,t){e.exports='<svg viewBox="0 0 62 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>error-warning-icon</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="error-warning-icon" fill-rule="nonzero" fill="#D83B46"><path d="M60.2,41.5 L38.7,5.3 C37.1,2.5 34.2,0.9 31,0.9 C27.8,0.9 24.9,2.5 23.3,5.3 L1.8,41.5 C0.1,44.3 0.1,47.7 1.7,50.5 C3.3,53.3 6.2,55 9.5,55 L52.4,55 C55.7,55 58.6,53.3 60.2,50.5 C61.9,47.7 61.9,44.3 60.2,41.5 Z M55.1,47.6 C54.8,48.1 54.1,49.1 52.5,49.1 L9.5,49.1 C7.9,49.1 7.2,48 6.9,47.6 C6.6,47.1 6.1,45.9 6.9,44.6 L28.4,8.4 C29.2,7.1 30.5,6.9 31,6.9 C31.5,6.9 32.8,7 33.6,8.4 L55.1,44.6 C55.9,45.9 55.3,47.1 55.1,47.6 Z" id="Shape"></path><path d="M31,15.2 C29.3,15.2 28,16.5 28,18.2 L28,34.2 C28,35.9 29.3,37.2 31,37.2 C32.7,37.2 34,35.9 34,34.2 L34,18.2 C34,16.6 32.7,15.2 31,15.2 Z" id="Shape"></path><path d="M31,38.8 C29.3,38.8 28,40.1 28,41.8 L28,42.8 C28,44.5 29.3,45.8 31,45.8 C32.7,45.8 34,44.5 34,42.8 L34,41.8 C34,40.1 32.7,38.8 31,38.8 Z" id="Shape"></path></g></g></svg>'},function(e,t){e.exports='<svg class="bookingjs-timekitlogo" viewBox="0 0 513 548" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>timekit-logo</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="timekit-logo" transform="translate(9.000000, 9.000000)" fill="#AEAEAE"><path d="M55.2163313,275.621588 L198.50357,163.134257 C227.693194,140.219007 274.527519,140.836287 303.106573,164.516436 L439.222777,277.300154 L294.687237,386.088734 C265.004826,408.430003 217.635083,407.547293 188.834846,384.15411 L55.2163313,275.621588 Z M29.1450782,296.088768 L22.5453033,301.269906 C-6.64628574,324.186699 -6.96035256,361.73094 21.8567615,385.137832 L188.814783,520.750588 C217.626101,544.152772 265.020127,545.031261 294.666324,522.71725 L471.933566,389.292269 C501.58244,366.976243 502.456142,329.694313 473.870647,306.008826 L465.168534,298.798395 L304.79022,419.511467 C268.948833,446.488455 213.042282,445.460488 178.242802,417.194379 L29.1450782,296.088768 Z" id="Base-layer"></path><path d="M303.106573,18.9036609 L473.870647,160.396052 C502.470886,184.093754 501.573077,221.370515 471.912654,243.695235 L294.687237,377.088734 C265.004826,399.430003 217.635083,398.547293 188.834846,375.15411 L21.8366979,239.50876 C-6.94564818,216.130109 -6.64628574,178.573924 22.5453033,155.657132 L198.50357,17.5214821 C227.708304,-5.40562963 274.527519,-4.77648801 303.106573,18.9036609 Z M292.387775,31.8399435 C269.89295,13.2010897 231.857075,12.6958644 208.877526,30.7359084 L32.9192595,168.871558 C12.2117199,185.127966 12.006219,209.880161 32.4287426,226.468491 L199.426891,362.113841 C222.242635,380.64608 261.076006,381.360119 284.584254,363.666001 L461.809671,230.272501 C482.810002,214.466035 483.387128,190.098964 463.151849,173.332334 L292.387775,31.8399435 Z" id="Middle-layer" stroke="#AEAEAE" stroke-width="18"></path></g></g></svg>'},function(e,t){e.exports='<svg class="bookingjs-timezoneicon" viewBox="0 0 98 98" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>Shape</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="timezone-icon" sketch:type="MSLayerGroup" fill="#AEAEAE"><path d="M37.656,1.387 L39.381,2.516 L46.176,3.475 L49.313,2.778 L55.186,3.495 L56.364,5.065 L52.274,4.52 L48.092,6.262 L49.293,9.385 L53.613,11.348 L54.189,7.395 L58.285,7.133 L64.121,12.707 L65.775,14.887 L66.56,16.28 L62.029,18.067 L55.185,21.169 L54.624,24.206 L50.095,28.476 L50.271,32.572 L48.9,32.559 L48.353,29.086 L45.757,28.238 L38.294,28.631 L35.286,34.137 L37.901,37.274 L42.221,34.917 L42.516,38.755 L44.172,40.062 L47.131,43.46 L46.985,47.751 L52.448,49.034 L56.454,46.159 L58.284,46.768 L65.003,49.45 L74.433,52.985 L76.396,57.698 L83.111,60.968 L84.644,66.732 L80.062,71.857 L74.66,77.519 L68.933,80.482 L63.04,84.408 L55.185,89.515 L50.835,93.941 L49.292,92.263 L52.782,83.419 L53.663,73.167 L46.15,66.34 L46.199,60.596 L48.164,58.239 L50.471,51.415 L45.809,48.811 L42.664,43.706 L37.75,41.817 L30.047,37.667 L26.904,29.024 L25.334,33.344 L22.977,26.276 L23.762,15.671 L27.69,12.136 L26.512,9.779 L29.26,5.459 L23.905,6.99 C9.611,15.545 0.01,31.135 0.01,49.006 C0.01,76.062 21.945,98 49.006,98 C76.062,98 98,76.062 98,49.006 C98,21.947 76.062,0.012 49.006,0.012 C45.092,0.012 41.305,0.52 37.656,1.387 Z" id="Shape" sketch:type="MSShapeGroup"></path></g></g></svg>'},function(e,t,n){(function(t){"use strict";function i(){var e,n,s=[],l={},c={app:"",apiBaseUrl:"https://api.timekit.io/",apiVersion:"v2",convertResponseToCamelcase:!1,convertRequestToSnakecase:!0,autoFlattenResponse:!0},u=function(e,t){return o.encode(e+":"+t)},d=function(e){return c.apiBaseUrl+c.apiVersion+e},h=function(e){Object.keys(e.data).length<2||(e.metaData={},Object.keys(e.data).forEach(function(t){"data"!==t&&(e.metaData[t]=e.data[t])}))},f={};return f.makeRequest=function(i){i.url=d(i.url),i.headers=i.headers||l||{},!i.headers["Timekit-App"]&&c.app&&(i.headers["Timekit-App"]=c.app),c.inputTimestampFormat&&(i.headers["Timekit-InputTimestampFormat"]=c.inputTimestampFormat),c.outputTimestampFormat&&(i.headers["Timekit-OutputTimestampFormat"]=c.outputTimestampFormat),c.timezone&&(i.headers["Timekit-Timezone"]=c.timezone),!i.headers.Authorization&&e&&n&&(i.headers.Authorization="Basic "+u(e,n)),Object.keys(l).length>0&&(l={}),s&&s.length>0&&(void 0===i.params&&(i.params={}),i.params.include=s.join(),s=[]),i.data&&c.convertRequestToSnakecase&&(i.data=a.decamelizeKeys(i.data));var o=r.interceptors.response.use(function(e){return e.data&&e.data.data&&(c.autoFlattenResponse&&(h(e),e.data=e.data.data),c.convertResponseToCamelcase&&(e.data=a.camelizeKeys(e.data))),e},function(e){return t.reject(e)}),f=r(i);return r.interceptors.response.eject(o),f},f.configure=function(e){for(var t in e)c[t]=e[t];return c},f.getConfig=function(){return c},f.setUser=function(t,i){e=t,n=i},f.getUser=function(){return{email:e,apiToken:n}},f.asUser=function(e,t){return l.Authorization="Basic "+u(e,t),this},f.asApp=function(e){return l["Timekit-App"]=e,this},f.include=function(){return s=Array.prototype.slice.call(arguments),this},f.headers=function(e){for(var t in e)l[t]=e[t];return this},f.getAccounts=function(){return f.makeRequest({url:"/accounts",method:"get"})},f.accountGoogleSignup=function(e,t){var n=c.app;l["Timekit-App"]&&(n=l["Timekit-App"],delete l["Timekit-App"]);var i=d("/accounts/google/signup")+"?Timekit-App="+n+(e&&e.callback?"&callback="+e.callback:"");return t&&window?void(window.location.href=i):i},f.accountSync=function(e){return f.makeRequest({url:"/accounts/sync",method:"get",params:e})},f.auth=function(e){var t=f.makeRequest({url:"/auth",method:"post",data:e});return t.then(function(e){f.setUser(e.data.email,e.data.api_token)}).catch(function(){f.setUser("","")}),t},f.getApps=function(){return f.makeRequest({url:"/apps",method:"get"})},f.getApp=function(e){return f.makeRequest({url:"/apps/"+e.slug,method:"get"})},f.createApp=function(e){return f.makeRequest({url:"/apps",method:"post",data:e})},f.updateApp=function(e){var t=e.slug;return delete e.slug,f.makeRequest({url:"/apps/"+t,method:"put",data:e})},f.deleteApp=function(e){return f.makeRequest({url:"/apps/"+e.slug,method:"delete"})},f.getCalendars=function(){return f.makeRequest({url:"/calendars",method:"get"})},f.getCalendar=function(e){return f.makeRequest({url:"/calendars/"+e.id,method:"get"})},f.createCalendar=function(e){return f.makeRequest({url:"/calendars/",method:"post",data:e})},f.updateCalendar=function(e){var t=e.id;return delete e.id,f.makeRequest({url:"/calendars/"+t,method:"put",data:e})},f.deleteCalendar=function(e){return f.makeRequest({url:"/calendars/"+e.id,method:"delete"})},f.getEvents=function(e){return f.makeRequest({url:"/events",method:"get",params:e})},f.getEvent=function(e){return f.makeRequest({url:"/events/"+e.id,method:"get"})},f.createEvent=function(e){return f.makeRequest({
url:"/events",method:"post",data:e})},f.updateEvent=function(e){var t=e.id;return delete e.id,f.makeRequest({url:"/events/"+t,method:"put",data:e})},f.deleteEvent=function(e){return f.makeRequest({url:"/events/"+e.id,method:"delete"})},f.findTime=function(e){return f.makeRequest({url:"/findtime",method:"post",data:e})},f.findTimeBulk=function(e){return f.makeRequest({url:"/findtime/bulk",method:"post",data:e})},f.findTimeTeam=function(e){return f.makeRequest({url:"/findtime/team",method:"post",data:e})},f.createFindTimeFilterCollection=function(e){return f.makeRequest({url:"/findtime/filtercollections",method:"post",data:e})},f.getFindTimeFilterCollections=function(){return f.makeRequest({url:"/findtime/filtercollections",method:"get"})},f.updateFindTimeFilterCollection=function(e){var t=e.id;return delete e.id,f.makeRequest({url:"/findtime/filtercollections/"+t,method:"get",data:e})},f.createUser=function(e){return f.makeRequest({url:"/users",method:"post",data:e})},f.getUserInfo=function(){return f.makeRequest({url:"/users/me",method:"get"})},f.updateUser=function(e){return f.makeRequest({url:"/users/me",method:"put",data:e})},f.resetUserPassword=function(e){return f.makeRequest({url:"/users/resetpassword",method:"post",data:e})},f.getUserTimezone=function(e){return f.makeRequest({url:"/users/timezone/"+e.email,method:"get"})},f.getCredentials=function(){return f.makeRequest({url:"/credentials",method:"get"})},f.createCredential=function(e){return f.makeRequest({url:"/credentials",method:"post",data:e})},f.deleteCredential=function(e){return f.makeRequest({url:"/credentials/"+e.id,method:"delete"})},f.getBookings=function(){return f.makeRequest({url:"/bookings",method:"get"})},f.getBooking=function(e){return f.makeRequest({url:"/bookings/"+e.id,method:"get"})},f.createBooking=function(e){return f.makeRequest({url:"/bookings",method:"post",data:e})},f.updateBooking=function(e){var t=e.id;delete e.id;var n=e.action;return delete e.action,f.makeRequest({url:"/bookings/"+t+"/"+n,method:"put",data:e})},f.getGroupBookings=function(){return f.makeRequest({url:"/bookings/groups",method:"get"})},f.getGroupBooking=function(e){return f.makeRequest({url:"/bookings/"+e.id+"/groups",method:"get"})},f.getWidgets=function(){return f.makeRequest({url:"/widgets",method:"get"})},f.getWidget=function(e){return f.makeRequest({url:"/widgets/"+e.id,method:"get"})},f.getHostedWidget=function(e){return f.makeRequest({url:"/widgets/hosted/"+e.slug,method:"get"})},f.getEmbedWidget=function(e){return f.makeRequest({url:"/widgets/embed/"+e.id,method:"get"})},f.createWidget=function(e){return f.makeRequest({url:"/widgets",method:"post",data:e})},f.updateWidget=function(e){var t=e.id;return delete e.id,f.makeRequest({url:"/widgets/"+t,method:"put",data:e})},f.deleteWidget=function(e){return f.makeRequest({url:"/widgets/"+e.id,method:"delete"})},f.newInstance=function(){return new i},f}/*!
	 * Timekit JavaScript SDK
	 * http://timekit.io
	 *
	 * Copyright 2015 Timekit, Inc.
	 * The Timekit JavaScript SDK is freely distributable under the MIT license.
	 *
	 */
var r=n(15),o=n(31),a=n(41);e.exports=new i}).call(t,n(4))},function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},function(e,t){"use strict";var n={targetEl:"#bookingjs",name:"",avatar:"",autoload:!0,disableRemoteLoad:!1,disableConfirmPage:!1,showCredits:!0,goToFirstEvent:!0,bookingGraph:"instant",debug:!1,availabilityView:"agendaWeek",bookingFields:{name:{placeholder:"Full name",prefilled:!1,locked:!1},email:{placeholder:"E-mail",prefilled:!1,locked:!1},comment:{enabled:!0,placeholder:"Comment",prefilled:!1,required:!1,locked:!1},phone:{enabled:!1,placeholder:"Phone number",prefilled:!1,required:!1,locked:!1},voip:{enabled:!1,placeholder:"Skype username",prefilled:!1,required:!1,locked:!1},location:{enabled:!1,placeholder:"Location",prefilled:!1,required:!1,locked:!1}},timekitFindTime:{future:"4 weeks",length:"1 hour"},timekitConfig:{},timekitCreateBooking:{},timekitUpdateBooking:{},fullCalendar:{views:{agenda:{displayEventEnd:!1},listing:{type:"list",duration:{days:182.5},listDayAltFormat:"dddd",noEventsMessage:"No timeslots available"}},allDaySlot:!1,scrollTime:"08:00:00",timezone:"local",nowIndicator:!0},localization:{showTimezoneHelper:!0,timeDateFormat:"12h-mdy-sun",strings:{submitText:"Book it",successMessageTitle:"Thanks!",timezoneHelperLoading:"Loading..",timezoneHelperDifferent:"Your timezone is %s hours %s %s (calendar shown in your local time)",timezoneHelperSame:"You are in the same timezone as %s"}},callbacks:{}},i={timekitCreateBooking:{graph:"instant",action:"confirm",event:{invite:!0,my_rsvp:"accepted",sync_provider:!0}},localization:{strings:{successMessageBody:"An invitation has been sent to: <br /> %s <br /><br /> Please accept the invitation to confirm the booking."}}},r={timekitCreateBooking:{graph:"instant_payment",action:"tentative",event:{invite:!0,my_rsvp:"accepted",sync_provider:!0}},localization:{strings:{successMessageBody:"We have received your payment and reserved your timeslot.<br /><br />Have a great day!"}}},o={timekitCreateBooking:{graph:"confirm_decline",action:"create",event:{invite:!0,my_rsvp:"accepted",sync_provider:!0}},localization:{strings:{successMessageBody:"We have received your request and we'll be in touch when we have reviewed it. <br /><br />Have a great day!"}}},a={timekitCreateBooking:{graph:"group_customer",action:"create"},localization:{strings:{successMessageBody:"Your seat has been reserved and we've sent you a confirmation by email. <br /><br />Have a great day!"}}},s={timekitCreateBooking:{graph:"group_customer_payment",action:"create"},localization:{strings:{successMessageBody:"We have received your payment and reserved a seat for you.<br /><br />Have a great day!"}}},l={fullCalendar:{timeFormat:"HH:mm",firstDay:1,views:{basic:{columnFormat:"dddd D/M"},agenda:{columnFormat:"ddd D/M",slotLabelFormat:"HH:mm"}}},localization:{bookingDateFormat:"D. MMMM YYYY",bookingTimeFormat:"HH:mm",emailTimeFormat:"H:i"}},c={fullCalendar:{timeFormat:"h:mma",firstDay:0,views:{basic:{columnFormat:"dddd M/D"},agenda:{columnFormat:"ddd M/D",slotLabelFormat:"h:mma"}}},localization:{bookingDateFormat:"MMMM D, YYYY",bookingTimeFormat:"h:mma",emailTimeFormat:"h:ia"}},u={fullCalendar:{header:{left:"",center:"",right:"today, prev, next"},defaultView:"agendaWeek"}},d={fullCalendar:{header:{left:"",center:"",right:""},defaultView:"listing"}};e.exports={primary:n,presets:{timeDateFormat:{"24h-dmy-mon":l,"12h-mdy-sun":c},bookingGraph:{instant:i,instant_payment:r,confirm_decline:o,group_customer:a,group_customer_payment:s},availabilityView:{agendaWeek:u,listing:d}}}},function(e,t,n){"use strict";n(32),e.exports={isFunction:function(e){return!!(e&&e.constructor&&e.call&&e.apply)},isArray:function(e){return e&&e.constructor===Array},doCallback:function(e,t,n,i){t.callbacks&&this.isFunction(t.callbacks[e])&&(i&&this.logDeprecated(e+" callback has been replaced, please see docs"),t.callbacks[e](n)),this.logDebug(['Trigger callback "'+e+'" with arguments:',n],t)},logDebug:function(e,t){t&&t.debug&&console.log("TimekitBooking Debug: ",e)},logError:function(e){console.warn("TimekitBooking Error: ",e)},logDeprecated:function(e){console.warn("TimekitBooking Deprecated: ",e)}}},function(e,t){}])});
},{"jquery":2}]},{},[1]);
