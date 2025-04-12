# Crypto currency data MCP Server from Binance

This is a POC of MCP server implementation that integrates the Binance data vision API, providing crypto prices capabilities.

<!-- ## Features

- **Web Search**: General queries, news, articles, with pagination and freshness controls
- **Local Search**: Find businesses, restaurants, and services with detailed information
- **Flexible Filtering**: Control result types, safety levels, and content freshness
- **Smart Fallbacks**: Local search automatically falls back to web when no results are found -->

## Tools

- **crypto-price**
  
  Execute a request to get price information in USDT about a specific crypto currency in the last 24 hours.
  
  Inputs:
  - `currency` (string): Crypto currency symbol (e.g., BTC, ETH) or name (e.g., Bitcoin, Ethereum)

## Prompt examples
- Get bitcoin current price
- What is the ethereum bid price?
- What is the current price of bitcoin?

## Configuration

### Usage with Claude Desktop
Add this to your `claude_desktop_config.json`:

### NPX

```json
{
  "mcpServers": {
    "binance-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "binance-mcp"
      ]
    }
  }
}
```

This server can be used with any MCP client that supports the MCP protocol. 

### Usage with Genkit

```ts
...
import { mcpClient } from 'genkitx-mcp';

const helloMcpClient = mcpClient({
  name: 'binance-mcp',
  serverProcess: {
    command: 'npx',
    args: [
      '-y',
      'binance-mcp'
    ],
  },
});
...
```
Full example (coming soon)

### Cline config
```json
{
  "mcpServers": {
    "binance-mcp": {
      "disabled": false,
      "timeout": 60,
      "command": "npx",
      "args": [
        "-y",
        "binance-mcp"
      ],
      "transportType": "stdio"
    }
  }
}
```

