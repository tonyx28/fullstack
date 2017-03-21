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
      details: nil,
      amount: 20.50,
      creator_id: 1,
      paid_by_id: 1,
      friend: [
        1: {
          id: 2,
          name: "jon",  
          owed_amt: 10.25,
          paid_amt: 0
        }
      ],
      payments: [

      ]
      settled: false,

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
