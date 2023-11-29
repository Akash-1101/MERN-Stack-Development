import { Component } from "react";
import Loader from "react-loader-spinner";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "IN_PROGRESS",
};

class BlogPost extends Component {
  state = {
    posts: [],
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.getBlogLists();
  }

  getBlogLists = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });

    const apiUrl = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(apiUrl);
    if (response.ok === true) {
      const fetchedData = await response.json();
      this.setState({
        posts: fetchedData,
        apiStatus: apiStatusConstants.success,
      });
    }
  };

  renderBlogList = () => {
    const { posts } = this.state;
    return (
      <div>
        <h1>Blog List</h1>
        <ul>
          {posts.map((each) => (
            <li key={each.id}>{each.title}</li>
          ))}
        </ul>
      </div>
    );
  };

  renderLoadingView = () => (
    <div>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  );

  render() {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderBlogList();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  }
}

export default BlogPost;
