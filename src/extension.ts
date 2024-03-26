// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tab-stop" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('tab-stop.indent', () => {
		// The code you place here will be executed every time your command is executed
		const editor = vscode.window.activeTextEditor;
		const userEndIndents = vscode.workspace.getConfiguration('tab-stop').get<Array<number>>('columns');
		const character = vscode.workspace.getConfiguration('tab-stop').get<string>('character') || ' ';

		if (!editor) {
			return;
		}

		if (!userEndIndents || userEndIndents.length === 0) {
			vscode.window.showInformationMessage('Please set a tab-stop column in your settings');
			return;
		}

		userEndIndents.sort((a, b) => a - b);

		const document = editor.document;
		editor.edit(editBuilder => {
			editor.selections.forEach(sel => {
				const start = sel.start;
				const nextEnd = userEndIndents.find(end => end > start.character) || 0;
				const end = new vscode.Position(start.line, nextEnd);
				if (start.isBefore(end)) {
					const length = end.character - start.character;
					let insertStr = character.repeat(length);
					if (insertStr.length > length) {
						insertStr = insertStr.substring(0, length);
					}
					editBuilder.insert(start, insertStr);
				}
			});
		});

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
