#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
// Initialize server
const server = new McpServer({
    name: "binance-mcp",
    version: "1.0.0"
});
//get crypto currency price
server.tool("crypto-price", "Get the current price of a cryptocurrency", {
    symbol: z.string(),
}, async ({ symbol }) => {
    const response = await fetch(`https://data-api.binance.vision/api/v3/ticker/24hr?symbol=${symbol}USDT`);
    const data = await response.json();
    return {
        content: [{
                type: "text",
                text: JSON.stringify(data)
                // text: `The current price of ${symbol} is $${price}`
            }]
    };
});
// Start server using stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);
console.info('{"jsonrpc": "2.0", "method": "log", "params": { "message": "Server running..." }}');
