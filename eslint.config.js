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
}, globalIgnores(["node_modules/*", "public/mockServiceWorker.js", "generators/*"]), {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
        parser: tsParser,

        globals: {
            ...globals.browser,
            ...globals.node,
        },
    },

    settings: {
        react: {
            version: "detect",
        },

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
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "plugin:tailwindcss/recommended",
        "plugin:@next/next/recommended",
    )),

    "rules": {
        "import/no-unresolved": "off",

        "import/no-restricted-paths": ["error", {
            zones: [{
                target: "./src/features",
                from: "./src/app",
            }, {
                target: [
                    "./src/components",
                    "./src/hooks",
                    "./src/lib",
                    "./src/types",
                    "./src/utils",
                ],

                from: ["./src/features", "./src/app"],
            }, {
                target: "./src/features/auth",
                from: "./src/features",
                except: ["./auth"],
            }, {
                target: "./src/features/user",
                from: "./src/features",
                except: ["./user"],
            }, {
                target: "./src/features/dashboard",
                from: "./src/features",
                except: ["./dashboard"],
            }, {
                target: "./src/features/olympiads",
                from: "./src/features",
                except: ["./olympiads"],
            }, {
                target: "./src/features/organization",
                from: "./src/features",
                except: ["./organization"],
            }, {
                target: "./src/features/tasks",
                from: "./src/features",
                except: ["./tasks"],
            }, {
                target: "./src/features/evaluation",
                from: "./src/features",
                except: ["./evaluation"],
            }],
        }],

        "import/no-cycle": "error",
        "linebreak-style": ["error", "unix"],
        "react/prop-types": "off",

        "import/order": ["error", {
            groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
            "newlines-between": "always",

            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },
        }],

        "react/self-closing-comp": ["error", {
            component: true,
            html: true,
        }],

        "no-console": "error",
        "import/default": "off",
        "import/no-duplicates": ["off"],
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "@typescript-eslint/no-unused-vars": ["error", {}],
        "@typescript-eslint/explicit-function-return-type": ["off", {}],
        "@typescript-eslint/explicit-module-boundary-types": ["off", {}],
        "@typescript-eslint/no-empty-function": ["off", {}],
        "@typescript-eslint/no-explicit-any": ["off", {}],

        "prettier/prettier": ["error", {}, {
            usePrettierrc: true,
        }],

        "check-file/filename-naming-convention": ["error", {
            "src/!(app)/*.{ts,tsx}": "CAMEL_CASE",
            "src/!(hooks)/*.{ts,tsx}": "CAMEL_CASE",
            "src/app/*.{ts,tsx}": "FLAT_CASE",
            "src/hooks/*.{ts,tsx}": "CAMEL_CASE",
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
            "src/!(app)/*": "KEBAB_CASE",
            "src/app/*": "NEXT_JS_APP_ROUTER_CASE",
            "src/*": "KEBAB_CASE",
        }],
    },
}]);
