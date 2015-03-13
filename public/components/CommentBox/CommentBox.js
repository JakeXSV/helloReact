var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }
});
React.render(<CommentBox data={data} />, document.getElementById('content'));
