{
  currentUser: {
    id: 1,
    username: "james"
  },

  friends: {
    id: 2,
    username: "jon"
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  bills: {
    1: {
      description: "Tacos",
      amount: 20.50,
      creator_id: 1,
      paid_by_id: 1,
      friend_ids: {
        1: {
          id: 2,
          name: "jon"
        }
      },
      settled: false,
      owed_amt: 10.25,
      owe_amt: 0

      }
    }
  },
  comments: {
    1: {
      author_id: 1,
      body: "are delicious"
    }
  }

}
