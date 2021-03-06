import * as vscode from "vscode"
import { add } from "./commands/add"
import { checkin } from "./commands/checkin"
import { checkout } from "./commands/checkout"
import { del } from "./commands/delete"
import { get } from "./commands/get"
import { list } from "./commands/list"
import { openInBrowser } from "./commands/openInBrowser"
import { undo } from "./commands/undo"
import { handle } from "./executor"

export const commands = [
  { command: "vscode-tfs.get", handler: handle(get) },
  { command: "vscode-tfs.checkout", handler: handle(checkout) },
  { command: "vscode-tfs.checkin", handler: handle(checkin) },
  { command: "vscode-tfs.add", handler: handle(add) },
  { command: "vscode-tfs.delete", handler: handle(del) },
  { command: "vscode-tfs.undo", handler: handle(undo) },
  { command: "vscode-tfs.openInBrowser", handler: handle(openInBrowser) },
  { command: "vscode-tfs.list", handler: handle(list) },
]

export function activate(context: vscode.ExtensionContext): void {
  for (const desc of commands) {
    context.subscriptions.push(vscode.commands.registerCommand(desc.command, desc.handler))
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate(): void {}
