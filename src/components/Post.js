import { Link } from 'react-router-dom'

export default function Post(props) {

    function buildHeader() {
        let resHeader;

        if (!props.hideLink) {
            resHeader = (
                <Link to={"/blog/" + props.post.id}>
                    {props.post.id}: { props.post.title }
                </Link>
            )
        } else {
            resHeader = (
                <>{props.post.id}: { props.post.title }</>
            )
        }

        return resHeader
    }

    return (
        <div className="card card-item">
            <h2>
                { buildHeader() }
            </h2>
            <p>{ props.post.body }</p>
            <p>Date Posted: { props.post.dateCreated.toDate().toLocaleDateString() }</p>
        </div>
    )
}