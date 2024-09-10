/* --------------------------------------------------------------------------------------------
 * Copyright (c) S-Core Co., Ltd. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import * as _ from 'lodash';

import { window, workspace, DecorationRenderOptions, Disposable, Range, TextEditor } from 'vscode';
import { LanguageClient } from 'vscode-languageclient';

import { DiagnosticSeverity, Suggestion } from './types';

const decorationType: DecorationRenderOptions = {
    isWholeLine: true,
    light: {
        after: {
            color: '#793600'
        }
    },
    dark: {
        after: {
            color: '#ff9527'
        }
    }
};

export function activateDecorations(client: LanguageClient) {
    let disposables: Disposable[] = [];

    let khulnasoftDecorationType = window.createTextEditorDecorationType(decorationType);
    disposables.push(khulnasoftDecorationType);

    let showDecorators = workspace.getConfiguration('khulnasoft').get('showDecorators');
    let timeout = null;

    let activeEditor = window.activeTextEditor;

    window.onDidChangeActiveTextEditor(editor => {
        activeEditor = editor;
        if (editor) {
            triggerReviveDecorations();
        }
    }, null, disposables);

    workspace.onDidChangeConfiguration(() => {
        showDecorators = workspace.getConfiguration('khulnasoft').get('showDecorators');
    });

    function triggerReviveDecorations() {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(reviveDecorations, 500);
    }

    function reviveDecorations() {
        if (!activeEditor) {
            return;
        }

        updateDecorationForEditor(activeEditor, client.diagnostics.get(activeEditor.document.uri));
    }

    function clearDecorations(uri: string) {
        window.visibleTextEditors.forEach((editor: TextEditor) => {
            if (editor.document && uri === editor.document.uri.toString()) {
                editor.setDecorations(khulnasoftDecorationType, []);
            }
        });
    }

    function updateDecorations(uri: string) {
        window.visibleTextEditors.forEach(editor => {
            if (editor.document && uri === editor.document.uri.toString()) {
                updateDecorationForEditor(editor, client.diagnostics.get(editor.document.uri));
            }
        });
    }

    function updateDecorationForEditor(editor: TextEditor, diagnostics) {
        if (!showDecorators) {
            clearDecorations(editor.document.uri.toString());
            return;
        }

        const suggestions = getSuggestions(diagnostics);

        // 1. Sort by severity as desc because the first decoration is taken when there are decorations on the same line.
        let result = _.sortBy(suggestions, ({ severity }) => severity);
        // 2. Display only 'DiagnosticSeverity.Error(1)' (Medium/High impact)
        result = _.filter(result, ({ severity }) => severity === DiagnosticSeverity.Error.valueOf());
        let decorations = result.map(({ startLine, startChar, endLine, endChar, message }) => ({
            range: new Range(startLine, 0, endLine, 1000),
            renderOptions: {
                after: {
                    contentText: `  ← ${_.unescape(message)}`
                }
            }
        }));
        editor.setDecorations(khulnasoftDecorationType, decorations);
    }

    function getSuggestions(diagnostics): Suggestion[] {
        if (!diagnostics) {
            return [];
        }

        let suggestions: Suggestion[] = [];
        diagnostics.forEach(({ range, message, severity }) => {
            const suggestion: Suggestion = {
                startLine: range.start.line,
                startChar: range.start.character,
                endLine: range.end.line,
                endChar: range.end.character,
                message,
                severity
            };
            suggestions.push(suggestion);
        });
        return suggestions;
    }

    return {
        clearDecorations,
        updateDecorations,
        disposables: Disposable.from(...disposables)
    };
}
