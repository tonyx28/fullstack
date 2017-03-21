
export const fetchFriends = () => (
  $.ajax({
    method: 'GET',
    url: '/api/friends'
  })
);

export const fetchFriend = id => (
  $.ajax({
    method: 'GET',
    url: `/api/friends/${id}`,
  })
);

export const createFriend = friend => (
  $.ajax({
    method: 'POST',
    url: '/api/friends',
    data: { friend }
  })
);

export const updateFriend = friend => (
  $.ajax({
    method: 'PATCH',
    url: `/api/friends/${friend.id}`,
    data: { friend }
  })
);

export const deleteFriend = friend => (
  $.ajax({
    method: 'DELETE',
    url: `api/friends/${friend.id}`
  })
);
//
// window.fetchFriends = fetchFriends;
// window.fetchFriend = fetchFriend;
// window.createFriend = createFriend;
// window.updateFriend = updateFriend;
// window.deleteFriend = deleteFriend;
