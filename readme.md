# Food Flow Backend

Backend API for a food ordering app built with Node.js, Express, and MongoDB.
Built for the food delivery website (https://github.com/Kostya088/food-flow)

## Implemented Features

- Express server with JSON parsing and CORS enabled.
- MongoDB connection via Mongoose.
- Request logging with `pino-http` and `pino-pretty`.
- Centralized 404 and error handling middleware.
- Shops API:
  - `GET /shops` - returns all shops with their products.
- Orders API:
  - `POST /orders` - creates a new order.
- Data modeling with Mongoose schemas:
  - `Shop` with embedded `products`.
  - `Order` with embedded `user` and `items`.

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- Pino logger
- ESLint

## Environment Variables

Create a `.env` file in the root of the project using .env.example

## Installation & Run

```bash
npm install
```

Run in development mode:

```bash
npm run dev
```

Run in production mode:

```bash
npm start
```

Lint the code:

```bash
npm run lint
```

## API Endpoints

### GET /shops

Returns all shops.

Response example:

```json
[
  {
    "_id": "65f5c0a2b7e7d9c2a11b1234",
    "name": "Pizza Place",
    "products": [
      {
        "name": "Pepperoni Pizza",
        "price": 12.99,
        "image": "https://example.com/pizza.jpg"
      }
    ],
    "createdAt": "2026-03-20T10:00:00.000Z",
    "updatedAt": "2026-03-20T10:00:00.000Z"
  }
]
```

### POST /orders

Creates a new order.

Request body example:

```json
{
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "address": "221B Baker Street"
  },
  "items": [
    {
      "name": "Pepperoni Pizza",
      "quantity": 2,
      "price": 12.99
    }
  ],
  "totalPrice": 25.98
}
```

Success response:

```json
{
  "message": "Order created successfully",
  "order": {
    "_id": "65f5c2b8f9f0d3e4a22b5678",
    "user": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "address": "221B Baker Street"
    },
    "items": [
      {
        "name": "Pepperoni Pizza",
        "quantity": 2,
        "price": 12.99
      }
    ],
    "totalPrice": 25.98,
    "createdAt": "2026-03-20T10:10:00.000Z",
    "updatedAt": "2026-03-20T10:10:00.000Z"
  }
}
```

Validation note:

- `user.email`, `user.phone`, and `user.address` are required.
- `items` must contain at least one item.
- `totalPrice` must be greater than or equal to `0`.

## Error Handling

- Unknown routes return `404` with: `{"message":"Route not found"}`.
- HTTP errors return their status code and message.
- Unexpected errors return `500`.
