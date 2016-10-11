import _ from 'lodash';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail"

const API_KEY = "AIzaSyCzrz3NVk8u7TmeiWKKXaLqml1PuqauQBA";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('counting stars');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 700);

        return (
            <div>
                {/*<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>*/}
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>

        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));