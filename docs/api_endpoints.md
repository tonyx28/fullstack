# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Friends

- `GET /api/friends`
  - List of friends in sidebar
- `POST /api/friends`
- `GET /api/friends/:id`
  - Show transactions/bills
- `PATCH /api/friends/:id`
- `DELETE /api/friends/:id`

### Bills

- `GET /api/bills`
- `POST /api/bills`
- `GET /api/bills/:id`
- `DELETE /api/bills/:id`
- `GET /api/bills/:id/comments`
  - index of all comments for bill


### Comments

- Comments will be shown in bill details
- `POST /api/bills/:bill_id/comments`: add comment to bill
- `DELETE /api/bills/:bill_id/comments/:comment_id`: remove comment from bill
    by comment_id
