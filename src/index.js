const Joi = require('joi');
const $ = require('jquery');

var JoiAny=Joi.any();

const jlanguage = {
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

JoiAny.constructor.prototype.zh_cn=function(){
    return this.options({
        language:jlanguage,
        stripUnknown:true
    });
}

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

const schema = Joi.object({
    username: Joi.string().empty(''),
    phone: Joi.string().min(4).example('abcd')
});

$('#submit').on('click', function () {
    Joi.validate(
      {username: $('input[name=name]').val(),phone: $('input[name=phone]').val()},
      schema,{
        language: jlanguage
      },
      function (err,value) {
          $('.a').html(err);
          console.log(value)
      });
});