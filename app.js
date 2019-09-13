const root = document.querySelector("#app");

function Article(props) {
    return (
        <div> 
            <h2>This is my {props.num} Blog</h2>
            <p>Written by {props.name}</p>
            <p>{props.date}</p>
        </div>
    )
}

class Blog extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>My Blog Post</h1>
                <section>
                    <Article num="first" name="Alice" date="10 Sep 2019"></Article>
                    <Article num="second" name="Bob" date="11 Sep 2019"></Article>
                    <Article num="third" name="Charlie" date="12 Sep 2019"></Article>
                </section>
            </div>
        );
    }
}

ReactDOM.render(<Blog />, root);