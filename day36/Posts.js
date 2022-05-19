import {Component} from 'react';

export class Comment extends Component {
    constructor(props) {
        super(props); // {props = {text: value, profile : value}}
    }
    render() {
        let comment = this.props.comment;
        return (<div>
            <p><b>Comment: </b>{comment.text}</p>
            <Profile author = {comment.profile}/>
            <p><i>Likes: </i>{comment.likes}</p>
        </div>)
    }
}
export class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let author = this.props.author;
        let imageUrl = author.image;
        return <div>
            <p><i>Name: {author.name}</i></p>
            <img src = {imageUrl} width = "100" height = "100" />
        </div>
    }
}
