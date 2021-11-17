import profileReducer, {addPost} from "./profile-reducer";

test("new post should be added", () => {
    //1. test data
    const initialState = {
        posts: [
            {id: 1, message: "How are you?", likesCount: 19},
            {id: 2, message: "Where have you been?", likesCount: 3},
            {id: 3, message: "Pics from our party yesterday", likesCount: 8},
            {id: 4, message: "How important is to be proactive?", likesCount: 27},
            {id: 5, message: "What are your goals for today, for this week?", likesCount: 54},
        ],
        profile: null,
        status: ''
    }
    //2.action
    let action = addPost("please, add me!")

    let newState = profileReducer(initialState, action)

    //3.expectation
    expect(newState.posts.length).toBe(6)
    expect(newState.posts[5].message).toBe("please, add me!")
})