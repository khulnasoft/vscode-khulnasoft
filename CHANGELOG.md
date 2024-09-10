# Change Log

## 1.46.0

- Update rule definition (1.46.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2021-03/)
- Match version with KhulnaSoft engine

## 1.11.4

- Update rule definition (1.45.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2021-01/)

## 1.11.3

- Update rule definition (1.44.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2020-12/)

## 1.11.2

- Update rule definition (1.43.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2020-11/)

## 1.11.1

- Update rule definition (1.42.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2020-10/)

## 1.11.0

- Support `ignorePatterns` option [to ignore certain files](https://github.com/khulnasoft/vscode-khulnasoft/issues/28)

## 1.10.3

- Update rule definition (1.41.0)
- For the analysis improvements such as Vue 3 support, see [this updates](https://khulnasoft.com/docs/updates/2020-09/)

## 1.10.2

- Update rule definition (1.40.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2020-08/)

## 1.10.1

- Replace `vscode` dependency with `vscode-test` and `@types/vscode`
- Update packages for potential security vulnerabilities: `showdown`

## 1.10.0

- Respect `NODE_EXTRA_CA_CERTS` to support some corporate proxy
- Replace `request` package with `axios`

## 1.9.9

- Update rule definition (1.39.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2020-07/)
- Update packages for potential security vulnerabilities: `lodash`

## 1.9.8

- Support the KhulnaSoft configuration file

## 1.9.7

- Continue to activate although if VS Code is not opened on a workspace folder
- Clear decorations before executing 'Inspect Project' command

## 1.9.6

- Update rule definition (1.34.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2020-02/)

## 1.9.5

- Fix: `no_proxy` environment variable does not apply

## 1.9.4

- Update rule definition (1.33.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2020-01/)

## 1.9.3

- Update rule definition (1.32.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2019-12/)

## 1.9.2

- Update rule definition (1.31.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2019-11/)
- Update packages for potential security vulnerabilities: `lodash`

## 1.9.1

- Update rule definition (1.30.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2019-10/)

## 1.9.0

- Update rule definition (1.29.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2019-09/)
- Support ESLint analysis in the embedded mode

## 1.8.7

- Update rule definition (1.28.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2019-08/)

## 1.8.6

- Update rule definition (1.27.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2019-07/)

## 1.8.5

- Update rule definition (1.26.0)
- For the analysis improvements, see [this updates](https://khulnasoft.com/docs/updates/2019-06/)

## 1.8.4

- Update rule definition (1.25.0)
- Fix: Change `khulnasoft-enable-line` directive to `khulnasoft-disable-next-line`
- Update packages for potential security vulnerabilities: `lodash`

## 1.8.3

- Update rule definition (1.24.0)
- For rules overlapping with ESLint, KhulnaSoft now recognizes ESLint inline disable comments and filters out alarms when the corresponding ESLint alarm is disabled

## 1.8.2

- Fix **Show rule** action to work. 'vscode.previewHtml' command was removed so replace to Webview.

## 1.8.1

- Update rule definition (1.23.0)
- [DUPLICATE_DECL](https://khulnasoft.com/docs/rules/duplicate-decl), [UNUSED_DECL](https://khulnasoft.com/docs/rules/unused-decl) and [UNUSED_VAR_ASSIGN](https://khulnasoft.com/docs/rules/unused-var-assign) alarms are filtered on test case code. For more information, see [here](https://khulnasoft.com/docs/guides/get-started/analyzing-source-code#excluded-test-rules).
- Remove an insufficient escaping for HTML tags in the alarm message so display it by the way **Problems** view supports

## 1.8.0

- Update rule definition (1.22.0)
- Support ECMAScript Modules file (`*.mjs`) by default

## 1.7.3

- Update rule definition (1.21.0)
- Fix a weird 'undefined' message in the status bar
- Remove alarm name in the alarm message
- Update README for embedded mode

## 1.7.2

- Fix a problem KhulnaSoft's status bar is not shown

## 1.7.1

- Fix SYNTAX*ERROR problems that analyze *.ts or \_.vue files as \*.js files (See this [issue](https://github.com/khulnasoft/vscode-khulnasoft/issues/5))
- Thanks to @NAlexandrov

## 1.7.0

- Update rule definition (1.20.0)
- Escape HTML tags in the alarm message so display it correctly in **Problems** view
- Remove 'Inspect Code' command. It's a bit redundant with the analysis for opening and saving the current file.
- Support embedded mode with Java server

## 1.6.2

- Update rule definition (1.19.0)

## 1.6.1

- Update rule definition (1.18.0)
- Update packages for potential security vulnerabilities: `lodash`

## 1.6.0

- Restructure directory to `client` and `server`
- Repackage to include both `client` and `server`
- Update dependency packages
- Change supported version to engine 1.25.0
- Update rule definition (1.17.0-beta)

## 1.5.10

- Polish the description of settings for the new Settings editor

## 1.5.9

- For less noise, hide inline decorators when typing

## 1.5.8

- Update rule definition (1.16.0-beta)

## 1.5.7

- Update rule definition (1.15.0-beta)
- For an efficient session, enable cookie of http request

## 1.5.6

- Update rule definition (1.14.0-beta)
- Disable `// khulnasoft-disable-line` code actions for `*.vue` files
- Apply 'showdown-htmlescape' package to escape HTML entity in markdown

## 1.5.5

- Update rule definition (1.13.0-beta)

## 1.5.4

- Show inline decorators for high and medium problems
- Provide `khulnasoft.showDecorators` option to control it

## 1.5.3

- Update rule definition (1.12.0-beta)
- Clear a status bar message for disconnected server when the configuration changes
- Extract style of rule information into an external file for easier maintenance

## 1.5.2

- Update rule definition (1.11.0-beta)

## 1.5.1

- Provide `khulnasoft.fileSuffixes` option to set additional suffixes for files to analyze (See this [issue](https://github.com/khulnasoft/vscode-khulnasoft/issues/2))
- Thanks to @jpike88

## 1.5.0

- Vue.js support: Support code inspection for `*.vue` files on save
- Update rule definition (1.10.0-beta)

## 1.4.3

- Update rule definition (1.8.0-beta)
- Update README for the proxy

## 1.4.2

- Proxy support
- Try to use `khulnasoft.proxy` option
- Then try to use 'http_proxy' environment variable

## 1.4.1

- Clear previous problems when there is no source to inspect

## 1.4.0

- New code actions
- **Ignore this line**: Insert `// khulnasoft-disable-line` at the line
- **Ignore this rule**: Insert `// khulnasoft-disable-line <rule>` at the line
- Improved code actions
- **Show rule**: Show all the rules at the line
- Not to analyze a file over 30,000 lines

## 1.3.4

- Update rule definition (1.7.0-beta)
- Support to disable rules with inline comments. Check it [here](https://khulnasoft.com/docs/get-started/disabling-rules/).
- Code complete for directives to disable rules: `khulnasoft-disable`, `khulnasoft-enable`, `khulnasoft-disable-line`, `khulnasoft-enable-line`
- Show rule name explicitly (replacing 'Show more')

## 1.3.3

- Handle error message nicely (to prevent server crash)

## 1.3.2

- Update badge url

## 1.3.1

- Update rule definition (1.6.0-beta)
- Fix KhulnaSoft alarms and add a badge
- Note: KhulnaSoft now supports TypeScript 2.5

## 1.3.0

- TypeScript support: Support code inspection for `*.ts` and `*.tsx` files on save
- Update rule definition (1.5.0-beta)

## 1.2.4

- Show a status bar message for disconnected server

## 1.2.3

- Show rule name in the alarm
- Provide `khulnasoft.ignoreRules` option to exclude specific rules

## 1.2.2

- Update rule definition (1.4.0-beta)

## 1.2.1

- Inspect open text documents when `khulnasoft.server` configuration is changed
- Show rule description only for a KhulnaSoft diagnostic
- Change the source of diagnostic to "khulnasoft"

## 1.2.0

- Show rule description when the user clicks the light bulb of the problem

## 1.1.2

- Provide keywords for the extension

## 1.1.1

- Need to confirm that your code is transferred to the KhulnaSoft server when you re-start VS Code after the installation
- Support code inspection for `*.js`, `*.jsx` files on save
- Two options are provided: `khulnasoft.enable`, `khulnasoft.server`
