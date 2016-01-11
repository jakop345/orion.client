/*******************************************************************************
 * @license
 * Copyright (c) 2014, 2015 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 ******************************************************************************/
/* eslint-env amd */
define({
    'pluginName': 'Orion JavaScript Tool Support',
    'pluginDescription': 'This plug-in provides JavaScript tools support for Orion, like editing, search, navigation, validation, and code completion.',
	'error': 'Error',
	'warning' : 'Warning',
	'ignore' : 'Ignore',
	'ternContentAssist' : 'Tern JavaScript content assist',
	'ternProjectAssist': 'Tern project file content assist',
	'emptyFileTemplateDoc': 'Create new default contents for the .tern-project file',
	'prefCodeStyle':'Code Style',
	'prefBestPractices':'Best Practices',
	'prefPotentialProblems':'Potential Programming Problems',
	'sourceOutline' : 'Source Outline',
	'sourceOutlineTitle': 'JavaScript source outline',
	'contentAssist' : 'JavaScript content assist',
	'eslintValidator' : 'JavaScript Validator',
	'missingCurly' : 'Statements not enclosed in braces:',
	'noCaller' : 'Discouraged \'arguments.caller\' or \'arguments.callee\' use:',
	'noCommaDangle' : 'Trailing commas in object expressions:',
    'noCondAssign' : 'Assignments in conditional expressions:',
    'noConsole' : 'Discouraged console use in browser code:',
    'noConstantCondition' : 'Constant as conditional expression:',
    'noRegexSpaces' : 'Multiple spaces in regular expressions:',
    'noReservedKeys' : 'Reserved words used as property keys:',
    'noReservedKeysFixName': 'Surround key with quotes',
	'noEqeqeq' : 'Discouraged \'==\' use:',
	'noDebugger' : 'Discouraged \'debugger\' statement use:',
	'noWith': 'Discouraged \'with\' statement use:',
	'noEval' : 'Discouraged \'eval()\' use:',
	'noImpliedEval' : 'Discouraged implied \'eval()\' use:',
	'noDupeKeys' : 'Duplicate object keys:',
	'noIterator': 'Discouraged __iterator__ property use:',
	'noProto': 'Discouraged __proto__ property use:',
	'noUndefInit': 'Explicitly initializing variables to undefined:',
	'useIsNaN' : 'NaN not compared with isNaN():',
	'useIsNanFixName': 'Use isNaN()',
	'missingDoc' : 'Missing JSDoc:',
	'noUnreachable' : 'Unreachable code:',
	'noFallthrough' : 'Switch case fall-through:',
	'useBeforeDefine' : 'Member used before definition:',
	'noEmptyBlock' : 'Undocumented empty block:',
	'newParens' : 'Missing parentheses in constructor call:',
	'noNewArray': 'Discouraged \'new Array()\':',
	'noNewArrayFixName': 'Convert to array literal',
	'noNewFunc': 'Discouraged \'new Function()\':',
	'noNewObject': 'Discouraged \'new Object()\':',
	'noNewWrappers': 'Discouraged wrapper objects:',
	'noMixedSpacesAndTabs' : 'Mixed spaces and tabs:',
	'missingSemi' : 'Missing semicolons:',
	'unusedVars' : 'Unused variables:',
	'varRedecl' : 'Variable re-declarations:',
	'varShadow': 'Variable shadowing:',
	'undefMember' : 'Undeclared global reference:',
	'unnecessarySemis' : 'Unnecessary semicolons:',
	'unusedParams' : 'Unused parameters:',
	'unsupportedJSLint' : 'Unsupported environment directive:',
	'noThrowLiteral': 'Literal used in \'throw\':',
	'missingNls': 'Non-externalized string literals (missing $NON-NLS$ tag):',
	'unnecessaryNls': 'Unnecessary $NON-NLS$ tags:',
	'generateDocName' : 'Generate Element Comment',
	'generateDocTooltip' : 'Generate a JSDoc-like comment for the selected JavaScript element',
	'renameElement' : 'Rename Element',
	'renameElementTooltip' : 'Rename the selected JavaScript element',
	'renameFailedTimedOut': 'Could not rename element - operation timed out',
	'openDeclName' : 'Open Declaration',
	'openDeclTooltip' : 'Open the declaration of the selected element',
	'openImplName' : 'Open Implementation',
	'openImplTooltip' : 'Open the implementation of the selected element',
	'noImplFound': 'No implementation was found',
	'implTimedOut': 'Could not compute implementation, the operation timed out',
	'workspaceRefsName': 'Workspace',
	'workspaceRefsTooltip': 'Show all references to the selection in the workspace',
	'projectRefsName': 'Project',
	'projectRefsTooltip': 'Show all references to the selection in the current project',
	'referencesMenuName': 'References',
	'referencesMenuTooltip': 'Show different kinds of references',
	'noDeclTimedOut': 'No declaration was found - operation timed out',
	'validTypeof': 'Invalid \'typeof\' comparison:',
	'noSparseArrays': 'Sparse array declarations:',
	'javascriptValidation': 'Javascript Validation',
	'jsHover': 'JavaScript Hover Provider',
	'removeExtraSemiFixName': 'Remove extra semicolon',
	'addFallthroughCommentFixName': 'Add $FALLTHROUGH$ comment',
	'addEmptyCommentFixName': 'Comment empty block',
	'addESLintEnvFixName': 'Add to eslint-env directive',
	'addESLintGlobalFixName': 'Add to globals directive',
	'removeUnusedParamsFixName': 'Remove parameter',
	'commentCallbackFixName': 'Add @callback to function',
	'eqeqeqFixName': 'Update operator',
	'unreachableFixName': 'Remove unreachable code',
	'sparseArrayFixName': 'Convert to normal array',
	'semiFixName': 'Add missing \';\'',
	'radix': 'Missing radix parameter to parseInt():',
	'unusedVarsUnusedFixName': 'Remove unused variable',
	'unusedFuncDeclFixName': 'Remove unused function',
	'noCommaDangleFixName': 'Remove extra \',\'',
	'addBBreakFixName': 'Add break statement',
	'noShadowGlobals': 'Global shadowing:',
	'noThrowLiteralFixName': 'Change to Error' ,
	'missingNlsFixName': 'Add missing $NON-NLS$ tag',
	'unnecessaryNlsFixName': 'Remove unnecessary $NON-NLS$ tag',
	'funcProposalDescription': ' - The name of the function',
	'funcParamProposalDescription': ' - Function parameter',
	'eslintRuleProposalDescripton': ' - ESLint rule',
	'eslintEnvProposalDescription': ' - ESLint environment name',
	'onlineDocumentationProposalEntry': '\n\n[Online documentation](${0})',
	'keywordProposalDescription': ' - Keyword',
	'keywordHoverProposal': 'ECMAScript reserved keyword',
	'reloadPluginCmd': 'Reload',
	'reloadPluginCmdTooltip': 'Reload plug-in',
	'reloadAllPluginsCmd': 'Reload All',
	'reloadAllPluginsCmdTooltip': 'Reload all plug-ins',
	'templateHoverHeader': 'Template source code:\n\n',
	'templateAssistHeader': 'Templates',
	'keywordAssistHeader': 'Keywords',
	'ternPlugins': 'Tern Plug-ins',
	'noTernPluginsAvailable': 'No Tern plug-ins are currently loaded. This may be because you have not yet activated content assist in a JavaScript file. Tern plug-ins provide type information and code templates for JavaScript.',
	'noDeclFound': 'Could not find declaration',
	'deprecatedHoverTitle': 'Deprecated.', // the in-line title for deprecated memebers. The word is used alone in a sentence with no further punctuation
	'parametersHoverTitle': 'Parameters:', // the in-line title for the parameters section. The word is used alone in a sentence with no further punctuation
	'returnsHoverTitle': 'Returns:', // the in-line title for the returns section. The word is used alone in a sentence with no further punctuation
	'throwsHoverTitle': 'Throws:', // the in-line title for the throws section. The word is used alone in a sentence with no further punctuation
	'callbackHoverTitle': 'Callback:', // the in-line title for the callback section. The word is used alone in a sentence with no further punctuation
	'sinceHoverTitle': 'Since:', // the in-line title for the since section. The word is used alone in a sentence with no further punctuation
	'seeAlsoHoverTitle': 'See Also:', // the in-line title for the since section. The word is used alone in a sentence with no further punctuation
	'openFileForTitle': 'Open file for', // the in-line title for the 'open file hover'. The sentence is used as-is and is followed only by a OS file path
	'failedToReadFile': 'Failed to read file: ${0}',
	'badInlineRename': 'In-line rename is only available for local variables and declarations.',
	'failedRename': 'In-line rename failed: ${0}',
	
	//All refs
	'functionDecls': 'Function Declarations',
	'functionCalls': 'Function Calls',
	'propAccess': 'Property Access',
	'propWrite': 'Property Write',
	'varAccess': 'Variable Access',
	'varWrite': 'Variable Write',
	'varDecls': 'Variable Declarations',
	'regex': 'Regular Expressions',
	'strings': 'Strings',
	'blockComments': 'Block Comments',
	'lineComments': 'Line Comments',
	'partial': 'Partial Matches',
	'uncategorized': 'Uncategorized',
	'parseErrors': 'Parse Errors',
	'noFileContents': 'Could not compute references: failed to compute file text content',
	'noFileMeta': 'Could not compute references: failed to compute file metadata',
	'cannotComputeRefs': 'Cannot compute references: ${0}',
	'notAnIdentifier': 'Cannot compute references at the selected location: Location is not an identifier',
	'notHtmlOffset': 'Not a valid offset in HTML',
	'allProjectRefs': 'Finding all project references...',
	'allWorkspaceRefs': 'Finding all workspace references...',
	'refsFoundIn': 'References found in file: \'${0}\' (${1}/${2})',
	'addToTernCommand': 'Add to .tern-project',
	'addToTernCommandTooltip': 'The JavaScript tooling will always load the contents of this file to Tern',
	'accessor-pairs' : 'Discourage getter/setter not in pairs',
	'no-control-regex' : 'Disallow controls characters in regular expressions:',
	'no-duplicate-case' : 'Duplicate case:',
	'no-empty-character-class' : 'Disallow empty character classes:',
	'no-extra-boolean-cast' : 'Discourage redundant double negation:',
	'no-extra-parens' : 'Discourage redundant parentheses:',
	'no-invalid-regexp' : 'Invalid regular expressions:',
	'no-negated-in-lhs' : 'Disallow negated left operand of in operator:',
	'no-obj-calls' : 'Disallow global object as function calls:',
	'no-eq-null' : 'Disallow null comparisons:',
	'no-else-return' : 'Report else after return:',
	'no-empty-label' : 'No empty labels:',
	'no-self-compare' : 'Disallow self compare:',
	'no-irregular-whitespace' : 'No irregular whitespace:',
	'no-self-assign' : 'Disallow self assignment:',
	'noShadowFixName' : 'Rename in scope',
	'type-checked-consistent-return' : 'Detect inconsistent returns:'
});
