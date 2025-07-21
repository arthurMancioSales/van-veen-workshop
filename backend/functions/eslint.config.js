const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");
const checkFile = require("eslint-plugin-check-file");
const tsParser = require("@typescript-eslint/parser");

const {
    fixupConfigRules,
} = require("@eslint/compat");

const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: "latest",
        sourceType: "module",
        parserOptions: {},
    },

    extends: compat.extends("eslint:recommended"),

    plugins: {
        "check-file": checkFile,
    },
}, globalIgnores(["node_modules/*"]), {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
        parser: tsParser,

        globals: {
            ...globals.browser,
            ...globals.node,
        },
    },

    settings: {

        "import/resolver": {
            typescript: {},
        },
    },

    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    )),

    "rules": {

        "import/no-unresolved": "off",

        "import/no-cycle": "error",
        "linebreak-style": ["error", "unix"],

        "import/order": ["error", {
            groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
            "newlines-between": "always",

            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },
        }],

        "no-console": "error",
        "import/default": "off",
        "import/no-duplicates": ["off"],
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": ["error", {}],
        "@typescript-eslint/explicit-function-return-type": ["off", {}],
        "@typescript-eslint/explicit-module-boundary-types": ["off", {}],
        "@typescript-eslint/no-empty-function": ["off", {}],
        "@typescript-eslint/no-explicit-any": ["off", {}],

        "prettier/prettier": ["error", {}, {
            usePrettierrc: true,
        }],

        "check-file/filename-naming-convention": ["error", {
            "src/**/*.{ts,tsx}": "CAMEL_CASE",
        }, {
                ignoreMiddleExtensions: true,
            }],
    },
}, {
    plugins: {
        "check-file": checkFile,
    },

    files: ["src/**/!(__tests__)/*"],

    rules: {
        "check-file/folder-naming-convention": ["error", {
            "src/*": "CAMEL_CASE",
        }],
    },
}]);
