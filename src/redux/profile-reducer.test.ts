import profileReducer, {addPost, deletePost} from "./profile-reducer";

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

test("new post should be added", () => {

    //2.action
    let action = addPost("please, add me!")

    let newState = profileReducer(initialState, action)

    //3.expectation
    expect(newState.posts.length).toBe(6)
    expect(newState.posts[5].message).toBe("please, add me!")
    expect(newState.posts[5].likesCount).toBe(0)
})

test("correct post should be deleted", () => {

    //2.action
    let action = deletePost(1)

    let newState = profileReducer(initialState, action)

    //3.expectation
    expect(newState.posts.length).toBe(4)
})