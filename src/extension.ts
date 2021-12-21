// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "auto-merge-tool" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let mergetool = vscode.commands.registerCommand('auto-merge-tool.mergetool', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Opening the mergetool');
    const terminal: vscode.Terminal = vscode.window.createTerminal('auto-merge-tool');

    terminal.sendText('git mergetool', true);
	});
  context.subscriptions.push(mergetool);

  let difftool = vscode.commands.registerCommand('auto-merge-tool.difftool', () => {
    vscode.window.showInformationMessage('Opening the difftool');
    const terminal: vscode.Terminal = vscode.window.createTerminal('auto-merge-tool');

    terminal.sendText('git difftool', true);
	});

  context.subscriptions.push(difftool);

  vscode.window.registerUriHandler({
    handleUri(uri:vscode.Uri) {
        // do something with the URI
    }
});
}

// this method is called when your extension is deactivated
export function deactivate() {}
