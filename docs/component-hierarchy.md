## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**DashboardContainer**
 - Dashboard
 - Sidebar

**FriendsContainer**
 - FriendsHeader
  * FriendsIndex

**BillContainer**
 - BillHeader
  + BillIndex


**BillIndex**
 - BillIndexItem
  + BillDetail
    + Comments
      - CommentIndex
      - NewComment
    * Bill

**CommentsContainer**
 - CommentIndex
  - CommentIndexItem

**NewBillContainer**
 - NewBill
  - NewBillButton

**NewFriend**
 - NewFriend
  - NewFriendButton

**NewComment**
 - NewComment
 

**TransactionContainer**
 - TransactionIndex
  - TransactionIndexItems

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/dashboard" | "DashboardContainer" |
| "/friends/:friendId" | "FriendsContainer" |
| "/friends/:friendId/bill/:billId" | "BillContainer" |
| "/transactions" | "TransactionContainer"
| "/new-bill" | "NewBillContainer" |
| "/new-friend" | "NewFriend" |
| "/new-comment" | "NewComment" |
