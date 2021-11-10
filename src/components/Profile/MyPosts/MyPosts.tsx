import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../FormControls/FormControls";

const maxLength10 = maxLengthCreator(10)
const minLength5 = minLengthCreator(5)

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}
                                                                key={p.id}/>)

    /*  const onAddPost = () => props.addPost()
      const onPostTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
          const text = e.currentTarget.value
          props.updateNewPostText(text)
      }*/

    const onSubmit = (formData: AddPostType) => {
        props.addPost(formData.post)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddPostReduxForm
                onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

type AddPostType = {
    post: string
}
const AddPostForm: React.FC<InjectedFormProps<AddPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="post"
                       component={Textarea}
                       validate={[required, maxLength10, minLength5]}
                       placeholder='Enter your thoughts'/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<AddPostType>({form: 'postsAddPost'})(AddPostForm)


export default MyPosts