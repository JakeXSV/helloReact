var CommentBox = React.createClass({
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: [
            {
                "author": "Default Author.",
                "text": "Default comment."
            }
        ]};
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
});
React.render(
    <CommentBox url="comments.json" pollInterval={3000} />,
    document.getElementById('content')
);
